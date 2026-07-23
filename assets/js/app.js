(function () {
  const letters = ["A", "B", "C", "D", "E", "F"];
  const specialModes = [null, "wrong", "bookmarks", "unanswered"];
  const progressVersion = "v2";
  const certifications = window.BLUEFORCE_CERTIFICATIONS || [];

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function storageKey(certification) {
    return `blueforce-study-progress-${certification.id}-${progressVersion}`;
  }

  function readProgress(certification) {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey(certification)));
      return saved && typeof saved === "object" ? saved : {};
    } catch (error) {
      console.warn("Could not read saved progress.", error);
      return {};
    }
  }

  function writeProgress(certification, state) {
    try {
      localStorage.setItem(storageKey(certification), JSON.stringify(state));
    } catch (error) {
      console.warn("Could not save progress.", error);
    }
  }

  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    const aa = [...a].sort((x, y) => x - y);
    const bb = [...b].sort((x, y) => x - y);
    return aa.every((value, index) => value === bb[index]);
  }

  function validQuestionIds(certification) {
    return new Set(certification.questions.map((question) => question.id));
  }

  function getHomeProgress(certification) {
    const saved = readProgress(certification);
    const validIds = validQuestionIds(certification);
    const answers =
      saved.answers && typeof saved.answers === "object" ? saved.answers : {};
    const answeredIds = Object.keys(answers).filter((id) => validIds.has(Number(id)));
    const correct = answeredIds.filter((id) => answers[id] && answers[id].correct).length;
    const answered = answeredIds.length;
    const percent = certification.questions.length
      ? Math.round((answered / certification.questions.length) * 100)
      : 0;
    return { answered, correct, percent };
  }

  function initHome() {
    const grid = document.getElementById("certificationGrid");
    if (!grid) return;

    const totalQuestions = certifications.reduce(
      (sum, certification) => sum + certification.questions.length,
      0,
    );
    const totals = certifications.reduce(
      (memo, certification) => {
        const progress = getHomeProgress(certification);
        memo.answered += progress.answered;
        memo.correct += progress.correct;
        return memo;
      },
      { answered: 0, correct: 0 },
    );

    const certCount = document.getElementById("certCount");
    const questionCount = document.getElementById("questionCount");
    const globalProgress = document.getElementById("globalProgress");
    const globalAccuracy = document.getElementById("globalAccuracy");
    if (certCount) certCount.textContent = certifications.length;
    if (questionCount) questionCount.textContent = totalQuestions;
    if (globalProgress) globalProgress.textContent = `${totals.answered} / ${totalQuestions}`;
    if (globalAccuracy) {
      globalAccuracy.textContent = totals.answered
        ? `${Math.round((totals.correct / totals.answered) * 100)}%`
        : "0%";
    }

    grid.innerHTML = certifications
      .map((certification) => {
        const progress = getHomeProgress(certification);
        const unanswered = certification.questions.length - progress.answered;
        return `
          <article class="cert-card">
            <div class="cert-top">
              <div>
                <div class="eyebrow">${certification.questions.length} preguntas</div>
                <h3>${escapeHtml(certification.title)}</h3>
                <p>${escapeHtml(certification.description)}</p>
              </div>
              <div class="cert-code" aria-hidden="true">${escapeHtml(certification.code)}</div>
            </div>
            <div>
              <div class="cert-meta">
                <span class="pill">${progress.answered} respondidas</span>
                <span class="pill">${progress.correct} correctas</span>
                <span class="pill">${unanswered} pendientes</span>
              </div>
              <div class="progress-block" style="margin-top:16px">
                <div class="progress-meta">
                  <span>Progreso local</span>
                  <span>${progress.percent}%</span>
                </div>
                <div class="progress-track">
                  <div class="progress-fill" style="width:${progress.percent}%"></div>
                </div>
              </div>
            </div>
            <div class="home-actions">
              <a class="btn btn-primary" href="${escapeHtml(certification.path)}">${progress.answered ? "Retomar" : "Empezar"}</a>
              <a class="btn btn-secondary" href="${escapeHtml(certification.path)}#study">Practicar</a>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function initExam() {
    const app = document.getElementById("examApp");
    if (!app) return;

    const requestedId =
      document.body.dataset.certification ||
      new URLSearchParams(window.location.search).get("cert");
    const certification = certifications.find((item) => item.id === requestedId);
    if (!certification) {
      console.warn("BlueForce certification not found.", {
        requestedId,
        loadedCertifications: certifications.map((item) => item.id),
      });
      app.innerHTML = `
        <div class="shell">
          <div class="empty-state">
            <h2>Certificacion no encontrada</h2>
            <p>Regresa a BlueForce para elegir un examen disponible.</p>
            <a class="btn btn-primary" href="../">Volver al inicio</a>
          </div>
        </div>
      `;
      return;
    }

    document.title = `${certification.pageTitle} | BlueForce`;
    hydrateExamShell(certification);

    const questionById = new Map(
      certification.questions.map((question) => [question.id, question]),
    );
    const validIds = validQuestionIds(certification);

    let state = {
      answers: {},
      bookmarks: [],
      order: certification.questions.map((question) => question.id),
      filter: "All",
      specialMode: null,
      currentIndex: 0,
      drafts: {},
      pendingFeedbackQuestionId: null,
    };

    function loadState() {
      const saved = readProgress(certification);
      const nextOrder =
        Array.isArray(saved.order) && saved.order.every((id) => validIds.has(id))
          ? saved.order.filter((id) => validIds.has(id))
          : certification.questions.map((question) => question.id);
      const missingIds = certification.questions
        .map((question) => question.id)
        .filter((id) => !nextOrder.includes(id));

      state = {
        answers:
          saved.answers && typeof saved.answers === "object"
            ? Object.fromEntries(
                Object.entries(saved.answers).filter(([id]) => validIds.has(Number(id))),
              )
            : {},
        bookmarks: Array.isArray(saved.bookmarks)
          ? saved.bookmarks.filter((id) => validIds.has(id))
          : [],
        order: [...nextOrder, ...missingIds],
        filter: certification.categoryOrder.includes(saved.filter) ? saved.filter : "All",
        specialMode: specialModes.includes(saved.specialMode) ? saved.specialMode : null,
        currentIndex: Number.isInteger(saved.currentIndex) ? saved.currentIndex : 0,
        drafts:
          saved.drafts && typeof saved.drafts === "object"
            ? Object.fromEntries(
                Object.entries(saved.drafts).filter(([id]) => validIds.has(Number(id))),
              )
            : {},
        pendingFeedbackQuestionId:
          Number.isInteger(saved.pendingFeedbackQuestionId) &&
          validIds.has(saved.pendingFeedbackQuestionId) &&
          saved.answers &&
          saved.answers[saved.pendingFeedbackQuestionId]
            ? saved.pendingFeedbackQuestionId
            : null,
      };
    }

    function saveState() {
      writeProgress(certification, state);
    }

    function getVisibleQuestions() {
      const ordered = state.order.map((id) => questionById.get(id)).filter(Boolean);
      if (state.specialMode === "wrong") {
        return ordered.filter((question) => {
          const record = state.answers[question.id];
          return record && !record.correct;
        });
      }
      if (state.specialMode === "bookmarks") {
        return ordered.filter((question) => state.bookmarks.includes(question.id));
      }
      if (state.specialMode === "unanswered") {
        return ordered.filter((question) => !state.answers[question.id]);
      }
      return state.filter === "All"
        ? ordered
        : ordered.filter((question) => question.category === state.filter);
    }

    function getHeldFeedbackQuestion() {
      if (!state.pendingFeedbackQuestionId) return null;
      const question = questionById.get(state.pendingFeedbackQuestionId);
      if (!question || !state.answers[question.id]) {
        state.pendingFeedbackQuestionId = null;
        return null;
      }
      return question;
    }

    function getCurrentQuestion() {
      const heldQuestion = getHeldFeedbackQuestion();
      if (heldQuestion) return heldQuestion;
      const visible = getVisibleQuestions();
      return visible[state.currentIndex] || null;
    }

    function clampIndex() {
      const visible = getVisibleQuestions();
      if (state.currentIndex >= visible.length) {
        state.currentIndex = Math.max(visible.length - 1, 0);
      }
      if (state.currentIndex < 0) state.currentIndex = 0;
    }

    function modeLabel() {
      if (state.specialMode === "wrong") return "Repaso de errores";
      if (state.specialMode === "bookmarks") return "Marcadas";
      if (state.specialMode === "unanswered") return "Pendientes";
      return state.filter === "All" ? "Todas las preguntas" : state.filter;
    }

    function renderFilters() {
      const container = document.getElementById("categoryFilters");
      if (!container) return;
      container.innerHTML = certification.categoryOrder
        .map((category) => {
          const isActive = !state.specialMode && state.filter === category;
          const label = category === "All" ? "Todas" : category;
          return `<button class="filter-btn" data-category="${escapeHtml(category)}" aria-pressed="${isActive}">${escapeHtml(label)}</button>`;
        })
        .join("");
      container.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
          state.filter = button.dataset.category;
          state.specialMode = null;
          state.currentIndex = 0;
          state.pendingFeedbackQuestionId = null;
          saveState();
          render();
        });
      });
    }

    function renderStats() {
      const answered = Object.keys(state.answers).length;
      const correct = Object.values(state.answers).filter((answer) => answer.correct).length;
      const accuracy = answered ? Math.round((correct / answered) * 100) : null;
      const total = certification.questions.length;
      const wrong = answered - correct;
      const pct = total ? (answered / total) * 100 : 0;

      document.getElementById("answeredStat").textContent = `${answered} / ${total}`;
      document.getElementById("correctStat").textContent = correct;
      document.getElementById("accuracyStat").textContent = accuracy === null ? "0%" : `${accuracy}%`;
      document.getElementById("bookmarkStat").textContent = state.bookmarks.length;
      document.getElementById("wrongStat").textContent = wrong;
      document.getElementById("progressLabel").textContent = `${answered} de ${total} respondidas`;
      document.getElementById("modeLabel").textContent = modeLabel();
      document.getElementById("progressFill").style.width = `${pct}%`;
    }

    function renderQuestion() {
      const card = document.getElementById("questionCard");
      const visible = getVisibleQuestions();
      clampIndex();
      const heldQuestion = getHeldFeedbackQuestion();

      if (!visible.length && !heldQuestion) {
        const message =
          state.specialMode === "wrong"
            ? "No tienes respuestas incorrectas por repasar."
            : state.specialMode === "bookmarks"
              ? "Marca preguntas para crear tu lista de repaso."
              : "Ya respondiste todas las preguntas en esta vista.";
        card.innerHTML = `
          <div class="empty-state">
            <h2>No hay preguntas en esta vista</h2>
            <p>${message}</p>
            <button class="btn btn-primary" id="returnAllBtn">Ver todas</button>
          </div>
        `;
        document.getElementById("returnAllBtn").addEventListener("click", () => {
          state.filter = "All";
          state.specialMode = null;
          state.currentIndex = 0;
          saveState();
          render();
        });
        return;
      }

      const question = heldQuestion || visible[state.currentIndex];
      const answerRecord = state.answers[question.id];
      const isBookmarked = state.bookmarks.includes(question.id);
      const draft = Array.isArray(state.drafts[question.id]) ? state.drafts[question.id] : [];
      const selectedCount = answerRecord ? answerRecord.selected.length : draft.length;
      const questionPosition = heldQuestion
        ? `Pregunta respondida - Banco ${question.id}`
        : `Pregunta ${state.currentIndex + 1} de ${visible.length} - Banco ${question.id}`;
      const previousDisabled = heldQuestion ? state.currentIndex === 0 : state.currentIndex === 0;
      const nextDisabled = heldQuestion
        ? visible.length <= state.currentIndex
        : state.currentIndex === visible.length - 1;

      const optionsHtml = question.options
        .map((option, index) => {
          let classes = "option-btn";
          const selected = draft.includes(index);
          if (!answerRecord && selected) classes += " selected";
          if (answerRecord) {
            const isCorrectOption = question.answers.includes(index);
            const wasSelected = answerRecord.selected.includes(index);
            if (isCorrectOption) classes += " correct";
            else if (wasSelected) classes += " incorrect";
            else classes += " dimmed";
          }
          return `
            <button class="${classes}" data-option="${index}" ${answerRecord ? "disabled" : ""} aria-pressed="${!answerRecord && selected}">
              <span class="option-key">${letters[index]}</span>
              <span>${escapeHtml(option)}</span>
              <span class="option-check">${answerRecord || selected ? "OK" : ""}</span>
            </button>
          `;
        })
        .join("");

      const correctAnswerText = question.answers
        .map((index) => `${letters[index]}. ${escapeHtml(question.options[index])}`)
        .join("<br>");

      const feedbackHtml = answerRecord
        ? `
          <div class="feedback visible">
            <div class="feedback-status ${answerRecord.correct ? "correct-text" : "incorrect-text"}">
              ${answerRecord.correct ? "Correcto" : "Incorrecto"}
            </div>
            <h3>Respuesta correcta${question.select > 1 ? "s" : ""}</h3>
            <p><strong>${correctAnswerText}</strong></p>
            <h3>Por que es correcta</h3>
            <p>${escapeHtml(question.explanation)}</p>
            <div class="tip-box"><strong>Exam tip:</strong> ${escapeHtml(question.tip)}</div>
          </div>
        `
        : "";

      const multiActions =
        !answerRecord && question.select > 1
          ? `
            <div class="answer-actions">
              <span class="selection-count">${selectedCount} de ${question.select} seleccionadas</span>
              <button class="btn btn-primary" id="submitAnswerBtn" ${selectedCount === question.select ? "" : "disabled"}>Enviar respuesta</button>
            </div>
          `
          : "";

      card.innerHTML = `
        <div class="question-top">
          <div class="badge-row">
            <span class="category-badge">${escapeHtml(question.category)}</span>
            ${question.select > 1 ? `<span class="selection-badge">Selecciona ${question.select}</span>` : ""}
          </div>
          <button class="bookmark-btn ${isBookmarked ? "active" : ""}" id="bookmarkBtn" aria-label="Marcar pregunta" title="Marcar pregunta">B</button>
        </div>
        <div class="question-number">${questionPosition}</div>
        <h2>${escapeHtml(question.question)}</h2>
        <div class="option-list">${optionsHtml}</div>
        ${multiActions}
        ${feedbackHtml}
        <div class="nav-row">
          <button class="btn btn-secondary" id="prevBtn" ${previousDisabled ? "disabled" : ""}>Anterior</button>
          <button class="btn btn-secondary" id="nextBtn" ${nextDisabled ? "disabled" : ""}>Siguiente</button>
        </div>
      `;

      card.querySelectorAll(".option-btn").forEach((button) => {
        button.addEventListener("click", () => chooseOption(question, Number(button.dataset.option)));
      });
      document.getElementById("bookmarkBtn").addEventListener("click", () => toggleBookmark(question.id));
      document.getElementById("prevBtn").addEventListener("click", previousQuestion);
      document.getElementById("nextBtn").addEventListener("click", nextQuestion);
      const submit = document.getElementById("submitAnswerBtn");
      if (submit) submit.addEventListener("click", () => submitMulti(question));
    }

    function chooseOption(question, selected) {
      if (state.answers[question.id]) return;
      if (question.select === 1) {
        state.answers[question.id] = {
          selected: [selected],
          correct: sameSet([selected], question.answers),
        };
        delete state.drafts[question.id];
        state.pendingFeedbackQuestionId =
          state.specialMode === "unanswered" ? question.id : null;
      } else {
        const draft = Array.isArray(state.drafts[question.id])
          ? [...state.drafts[question.id]]
          : [];
        const existing = draft.indexOf(selected);
        if (existing >= 0) draft.splice(existing, 1);
        else if (draft.length < question.select) draft.push(selected);
        state.drafts[question.id] = draft;
      }
      saveState();
      render();
    }

    function submitMulti(question) {
      if (state.answers[question.id]) return;
      const draft = Array.isArray(state.drafts[question.id])
        ? state.drafts[question.id]
        : [];
      if (draft.length !== question.select) return;
      state.answers[question.id] = {
        selected: [...draft],
        correct: sameSet(draft, question.answers),
      };
      delete state.drafts[question.id];
      state.pendingFeedbackQuestionId =
        state.specialMode === "unanswered" ? question.id : null;
      saveState();
      render();
    }

    function toggleBookmark(questionId) {
      const index = state.bookmarks.indexOf(questionId);
      if (index >= 0) state.bookmarks.splice(index, 1);
      else state.bookmarks.push(questionId);
      saveState();
      render();
    }

    function setSpecialMode(mode) {
      state.specialMode = mode;
      state.currentIndex = 0;
      state.pendingFeedbackQuestionId = null;
      saveState();
      render();
    }

    function nextQuestion() {
      if (getHeldFeedbackQuestion()) {
        state.pendingFeedbackQuestionId = null;
        saveState();
        render();
        return;
      }
      const visible = getVisibleQuestions();
      if (state.currentIndex < visible.length - 1) {
        state.currentIndex += 1;
        saveState();
        renderQuestion();
        renderStats();
      }
    }

    function previousQuestion() {
      if (getHeldFeedbackQuestion()) {
        state.pendingFeedbackQuestionId = null;
        if (state.currentIndex > 0) state.currentIndex -= 1;
        saveState();
        render();
        return;
      }
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
        saveState();
        renderQuestion();
        renderStats();
      }
    }

    function shuffleQuestions() {
      const shuffled = [...state.order];
      for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const swap = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[swap]] = [shuffled[swap], shuffled[index]];
      }
      state.order = shuffled;
      state.currentIndex = 0;
      state.pendingFeedbackQuestionId = null;
      saveState();
      render();
    }

    function resetProgress() {
      if (!window.confirm("Quieres reiniciar respuestas, marcadores y orden de preguntas?")) {
        return;
      }
      try {
        localStorage.removeItem(storageKey(certification));
      } catch (error) {
        console.warn("Could not clear saved progress.", error);
      }
      state = {
        answers: {},
        bookmarks: [],
        order: certification.questions.map((question) => question.id),
        filter: "All",
        specialMode: null,
        currentIndex: 0,
        drafts: {},
        pendingFeedbackQuestionId: null,
      };
      render();
    }

    function render() {
      clampIndex();
      renderFilters();
      renderStats();
      renderQuestion();
    }

    loadState();
    render();

    document.getElementById("startBtn").addEventListener("click", () => {
      document.getElementById("study").scrollIntoView({ behavior: "smooth" });
    });
    document.getElementById("shuffleBtn").addEventListener("click", shuffleQuestions);
    document.getElementById("reviewWrongBtn").addEventListener("click", () => setSpecialMode("wrong"));
    document.getElementById("reviewBookmarksBtn").addEventListener("click", () => setSpecialMode("bookmarks"));
    document.getElementById("unansweredBtn").addEventListener("click", () => setSpecialMode("unanswered"));
    document.getElementById("resetBtn").addEventListener("click", resetProgress);

    document.addEventListener("keydown", (event) => {
      const question = getCurrentQuestion();
      if (!question) return;
      const activeTag = document.activeElement ? document.activeElement.tagName : "";
      if (["INPUT", "TEXTAREA", "SELECT"].includes(activeTag)) return;

      if (["1", "2", "3", "4", "5", "6"].includes(event.key) && !state.answers[question.id]) {
        const index = Number(event.key) - 1;
        if (index < question.options.length) chooseOption(question, index);
      } else if (event.key === "Enter" && question.select > 1 && !state.answers[question.id]) {
        submitMulti(question);
      } else if (event.key.toLowerCase() === "n") {
        nextQuestion();
      } else if (event.key.toLowerCase() === "p") {
        previousQuestion();
      } else if (event.key.toLowerCase() === "b") {
        toggleBookmark(question.id);
      }
    });
  }

  function hydrateExamShell(certification) {
    const total = certification.questions.length;
    const maxWeight = Math.max(...certification.blueprint.map((item) => item.weight));
    document.getElementById("examEyebrow").textContent = `${total} preguntas originales`;
    document.getElementById("pageTitle").textContent = certification.pageTitle;
    document.getElementById("heroCopy").textContent = certification.heroCopy;
    document.getElementById("integrityNote").textContent = certification.integrity;
    document.getElementById("blueprintNote").textContent = certification.blueprintNote;
    document.getElementById("reasoningText").textContent = certification.reasoning;
    document.getElementById("habitsText").textContent = certification.habits;
    const sourceFileLink = document.getElementById("sourceFile");
    if (sourceFileLink) {
      sourceFileLink.textContent = certification.sourceFile;
      sourceFileLink.href = `../${certification.sourceFile}`;
    }

    document.getElementById("blueprintList").innerHTML = certification.blueprint
      .map((item) => {
        const width = maxWeight ? Math.round((item.weight / maxWeight) * 100) : 0;
        return `
          <div class="weight-row">
            <span class="weight-label">${escapeHtml(item.label)}</span>
            <span class="weight-value">${item.weight}%</span>
            <div class="weight-track"><div class="weight-fill" style="width:${width}%"></div></div>
          </div>
        `;
      })
      .join("");

    document.getElementById("resourceGrid").innerHTML = certification.resources
      .map(
        (resource) => `
          <a class="resource-link" target="_blank" rel="noopener" href="${escapeHtml(resource.url)}">
            <strong>${escapeHtml(resource.title)}</strong>
            <span>${escapeHtml(resource.description)}</span>
          </a>
        `,
      )
      .join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    initHome();
    initExam();
  });
})();
