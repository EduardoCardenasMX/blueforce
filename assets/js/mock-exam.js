(function () {
  const letters = ["A", "B", "C", "D", "E", "F"];
  const activeVersion = "v1";
  const assetVersion = "20260801-distractors";
  const certifications = window.BLUEFORCE_CERTIFICATIONS || [];
  const locale = document.body.dataset.locale || document.documentElement.lang || "en";
  const t = {
    en: {
      questions: "questions",
      minutes: "minutes",
      passingScore: "Passing score",
      officialMock: "Official mock exam",
      startMock: "Start Mock Exam",
      resumeMock: "Resume Active Exam",
      activeNotice:
        "You have an active exam attempt. The timer keeps running until it expires or you finish.",
      noConfig: "This certification is not ready for timed exams yet.",
      answered: "Answered",
      unanswered: "Unanswered",
      marked: "Marked",
      question: "Question",
      of: "of",
      select: (count) => `Select ${count}`,
      markReview: "Mark for Review",
      unmarkReview: "Unmark Review",
      previous: "Previous",
      next: "Next",
      finishExam: "Finish Exam",
      finishWarning: (count) =>
        count
          ? `You still have ${count} unanswered question(s). Submit anyway? Unanswered questions count as incorrect.`
          : "Submit your exam now?",
      timeExpired: "Time expired. Your exam has been submitted automatically.",
      results: "Exam Results",
      estimatedPass: "Estimated Pass",
      needsReview: "Needs Review",
      correct: "Correct",
      incorrect: "Incorrect",
      noAnswer: "No answer",
      totalScore: "Total score",
      timeUsed: "Time used",
      avgTime: "Avg. time per question",
      domainPerformance: "Domain performance",
      studyPriority: "Study priority",
      allDomainsHealthy: "No priority gaps detected. Review incorrect questions to polish details.",
      selectedAnswer: "Your answer",
      correctAnswer: "Correct answer",
      explanation: "Explanation",
      examTip: "Exam tip",
      startNew: "Start New Exam",
      backToExams: "Back to Mock Exams",
      reviewAllQuestions: "Question review",
      target: "Target",
      loading: "Loading exam...",
      unavailable: "Questions could not load. Refresh the page and try again.",
      confirmNew: "Start a new attempt and replace the current result?",
      listPath: "/en/mock-exams/",
    },
    es: {
      questions: "preguntas",
      minutes: "minutos",
      passingScore: "Puntaje minimo",
      officialMock: "Examen oficial simulado",
      startMock: "Iniciar examen",
      resumeMock: "Retomar examen activo",
      activeNotice:
        "Tienes un intento activo. El reloj sigue corriendo hasta que expire o finalices el examen.",
      noConfig: "Esta certificacion aun no esta lista para examenes con tiempo.",
      answered: "Respondidas",
      unanswered: "Pendientes",
      marked: "Marcadas",
      question: "Pregunta",
      of: "de",
      select: (count) => `Selecciona ${count}`,
      markReview: "Marcar para revisar",
      unmarkReview: "Quitar marca",
      previous: "Anterior",
      next: "Siguiente",
      finishExam: "Finalizar examen",
      finishWarning: (count) =>
        count
          ? `Aun tienes ${count} pregunta(s) sin responder. Enviar de todos modos? Las preguntas sin respuesta cuentan como incorrectas.`
          : "Enviar tu examen ahora?",
      timeExpired: "El tiempo termino. Tu examen se envio automaticamente.",
      results: "Resultados del examen",
      estimatedPass: "Aprobado estimado",
      needsReview: "Necesita repaso",
      correct: "Correcta",
      incorrect: "Incorrecta",
      noAnswer: "Sin respuesta",
      totalScore: "Puntaje total",
      timeUsed: "Tiempo usado",
      avgTime: "Promedio por pregunta",
      domainPerformance: "Rendimiento por dominio",
      studyPriority: "Prioridad de estudio",
      allDomainsHealthy:
        "No se detectaron brechas prioritarias. Revisa las preguntas incorrectas para pulir detalles.",
      selectedAnswer: "Tu respuesta",
      correctAnswer: "Respuesta correcta",
      explanation: "Explicacion",
      examTip: "Tip de examen",
      startNew: "Iniciar nuevo examen",
      backToExams: "Volver a examenes",
      reviewAllQuestions: "Revision de preguntas",
      target: "Meta",
      loading: "Cargando examen...",
      unavailable: "No se pudieron cargar las preguntas. Actualiza la pagina e intenta de nuevo.",
      confirmNew: "Iniciar un nuevo intento y reemplazar el resultado actual?",
      listPath: "/es/examenes-de-prueba/",
    },
  }[locale] || {};

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    const aa = [...a].sort((x, y) => x - y);
    const bb = [...b].sort((x, y) => x - y);
    return aa.every((value, index) => value === bb[index]);
  }

  function storageKey(certification) {
    return `blueforce-mock-active-${certification.id}-${activeVersion}`;
  }

  function readAttempt(certification) {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey(certification)));
      return saved && typeof saved === "object" ? saved : null;
    } catch (error) {
      console.warn("Could not read active mock exam.", error);
      return null;
    }
  }

  function writeAttempt(certification, attempt) {
    try {
      localStorage.setItem(storageKey(certification), JSON.stringify(attempt));
    } catch (error) {
      console.warn("Could not save active mock exam.", error);
    }
  }

  function clearAttempt(certification) {
    try {
      localStorage.removeItem(storageKey(certification));
    } catch (error) {
      console.warn("Could not clear active mock exam.", error);
    }
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const existing = Array.from(document.scripts).find((script) => script.src === src);
      if (existing) {
        existing.addEventListener("load", resolve, { once: true });
        existing.addEventListener("error", reject, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function loadQuestionBank(certification) {
    if (certification.questions && certification.questions.length) return certification;

    const banks = window.BLUEFORCE_QUESTION_BANKS || {};
    if (!banks[certification.id]) {
      await loadScript(`/${certification.questionBankPath}?v=${assetVersion}`);
    }

    const bank = (window.BLUEFORCE_QUESTION_BANKS || {})[certification.id];
    if (!bank || !Array.isArray(bank.questions)) {
      throw new Error(`Missing question bank for ${certification.id}`);
    }

    return {
      ...certification,
      categoryOrder: bank.categoryOrder || certification.categoryOrder,
      questions: bank.questions,
    };
  }

  function shuffle(items) {
    const next = [...items];
    for (let index = next.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(Math.random() * (index + 1));
      [next[index], next[swap]] = [next[swap], next[index]];
    }
    return next;
  }

  function allocateByBlueprint(certification, total) {
    const weights = certification.blueprint || [];
    const weightTotal = weights.reduce((sum, item) => sum + item.weight, 0);
    const rows = weights.map((item) => {
      const exact = weightTotal ? (item.weight / weightTotal) * total : 0;
      return {
        label: item.label,
        count: Math.floor(exact),
        remainder: exact - Math.floor(exact),
      };
    });
    let assigned = rows.reduce((sum, item) => sum + item.count, 0);
    rows
      .sort((a, b) => b.remainder - a.remainder)
      .forEach((item) => {
        if (assigned < total) {
          item.count += 1;
          assigned += 1;
        }
      });
    return rows.sort(
      (a, b) =>
        weights.findIndex((item) => item.label === a.label) -
        weights.findIndex((item) => item.label === b.label),
    );
  }

  function selectQuestions(certification) {
    const total = certification.examConfig.officialQuestionCount;
    const allocation = allocateByBlueprint(certification, total);
    const selected = [];
    const usedIds = new Set();

    allocation.forEach((bucket) => {
      const available = shuffle(
        certification.questions.filter(
          (question) => question.category === bucket.label && !usedIds.has(question.id),
        ),
      );
      available.slice(0, bucket.count).forEach((question) => {
        selected.push(question);
        usedIds.add(question.id);
      });
    });

    if (selected.length < total) {
      shuffle(certification.questions)
        .filter((question) => !usedIds.has(question.id))
        .slice(0, total - selected.length)
        .forEach((question) => selected.push(question));
    }

    return shuffle(selected).slice(0, total);
  }

  function formatClock(ms) {
    const safe = Math.max(0, ms);
    const totalSeconds = Math.ceil(safe / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  }

  function formatDuration(ms) {
    const safe = Math.max(0, ms);
    const totalSeconds = Math.round(safe / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
  }

  function selectedAnswerText(question, selected) {
    if (!selected || !selected.length) return t.noAnswer;
    return selected
      .map((index) => `${letters[index]}. ${escapeHtml(question.options[index])}`)
      .join("<br>");
  }

  function certificationMockPath(certification) {
    const base = document.body.dataset.mockBase || "mock-exams";
    return `${base.replace(/\/?$/, "/")}${certification.id}`;
  }

  function renderMockList() {
    const grid = document.getElementById("mockCertificationGrid");
    if (!grid) return;

    grid.innerHTML = certifications
      .map((certification) => {
        const config = certification.examConfig;
        const attempt = readAttempt(certification);
        const active = attempt && attempt.status === "active" && Date.now() < attempt.expiresAt;
        const path = certificationMockPath(certification);
        return `
          <article class="cert-card mock-cert-card">
            <div class="cert-top">
              <div>
                <div class="eyebrow">${t.officialMock}</div>
                <h3>${escapeHtml(certification.title)}</h3>
                <p>${config ? `${config.officialQuestionCount} ${t.questions} · ${config.officialDurationMinutes} ${t.minutes} · ${config.passingScore}% ${t.passingScore}` : t.noConfig}</p>
              </div>
              <div class="cert-code" aria-hidden="true">${escapeHtml(certification.code)}</div>
            </div>
            <div class="cert-meta">
              ${(certification.blueprint || [])
                .map((item) => `<span class="pill">${escapeHtml(item.label)} ${item.weight}%</span>`)
                .join("")}
            </div>
            <div class="home-actions">
              <a class="btn btn-primary" href="${escapeHtml(path)}">${active ? t.resumeMock : t.startMock}</a>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function initMockExam() {
    const app = document.getElementById("mockExamApp");
    if (!app) return;

    const requestedId = document.body.dataset.certification;
    const certificationMeta = certifications.find((item) => item.id === requestedId);
    if (!certificationMeta || !certificationMeta.examConfig) {
      app.innerHTML = `<div class="shell"><div class="empty-state"><h2>${t.noConfig}</h2><a class="btn btn-primary" href="${t.listPath}">${t.backToExams}</a></div></div>`;
      return;
    }

    let certification = certificationMeta;
    let attempt = readAttempt(certificationMeta);
    let questionById = new Map();
    let timerId = null;

    const startButton = document.getElementById("startMockBtn");
    const notice = document.getElementById("activeAttemptNotice");
    const examSurface = document.getElementById("mockExamSurface");
    const resultsSurface = document.getElementById("mockResultsSurface");

    function setLoading() {
      if (startButton) {
        startButton.disabled = true;
        startButton.textContent = t.loading;
      }
    }

    function hydrateBlueprint() {
      const list = document.getElementById("mockBlueprintList");
      if (!list) return;
      const maxWeight = Math.max(...certification.blueprint.map((item) => item.weight));
      list.innerHTML = certification.blueprint
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
    }

    function normalizeAttempt(saved) {
      if (!saved || saved.certificationId !== certification.id) return null;
      const validIds = new Set(certification.questions.map((question) => question.id));
      const questionIds = Array.isArray(saved.questionIds)
        ? saved.questionIds.filter((id) => validIds.has(id))
        : [];
      if (questionIds.length !== certification.examConfig.officialQuestionCount) return null;
      return {
        ...saved,
        questionIds,
        answers: saved.answers && typeof saved.answers === "object" ? saved.answers : {},
        markedForReview: Array.isArray(saved.markedForReview)
          ? saved.markedForReview.filter((id) => validIds.has(id))
          : [],
        timeByQuestionId:
          saved.timeByQuestionId && typeof saved.timeByQuestionId === "object"
            ? saved.timeByQuestionId
            : {},
        currentIndex: Number.isInteger(saved.currentIndex) ? saved.currentIndex : 0,
        questionStartedAt: Number.isFinite(saved.questionStartedAt)
          ? saved.questionStartedAt
          : Date.now(),
      };
    }

    function createAttempt() {
      const now = Date.now();
      const selected = selectQuestions(certification);
      return {
        attemptId: `${certification.id}-${now}-${Math.random().toString(16).slice(2)}`,
        certificationId: certification.id,
        status: "active",
        startedAt: now,
        expiresAt: now + certification.examConfig.officialDurationMinutes * 60 * 1000,
        submittedAt: null,
        questionIds: selected.map((question) => question.id),
        answers: {},
        currentIndex: 0,
        markedForReview: [],
        timeByQuestionId: {},
        questionStartedAt: now,
        submittedReason: null,
      };
    }

    function getQuestions() {
      return attempt.questionIds.map((id) => questionById.get(id)).filter(Boolean);
    }

    function currentQuestion() {
      return getQuestions()[attempt.currentIndex] || null;
    }

    function answeredCount() {
      return getQuestions().filter((question) => {
        const record = attempt.answers[question.id];
        return record && Array.isArray(record.selected) && record.selected.length > 0;
      }).length;
    }

    function unansweredCount() {
      return getQuestions().length - answeredCount();
    }

    function save() {
      writeAttempt(certification, attempt);
    }

    function touchQuestionTime() {
      if (!attempt || attempt.status !== "active") return;
      const question = currentQuestion();
      if (!question) return;
      const now = Date.now();
      const started = Number.isFinite(attempt.questionStartedAt)
        ? attempt.questionStartedAt
        : now;
      attempt.timeByQuestionId[question.id] =
        (attempt.timeByQuestionId[question.id] || 0) + Math.max(0, now - started);
      attempt.questionStartedAt = now;
    }

    function maybeExpire() {
      if (attempt && attempt.status === "active" && Date.now() >= attempt.expiresAt) {
        submitExam("expired");
        return true;
      }
      return false;
    }

    function renderTimer() {
      const timer = document.getElementById("mockTimer");
      if (!timer || !attempt) return;
      timer.textContent = formatClock(attempt.expiresAt - Date.now());
      if (attempt.expiresAt - Date.now() <= 5 * 60 * 1000) {
        timer.classList.add("urgent");
      } else {
        timer.classList.remove("urgent");
      }
    }

    function renderPalette() {
      const palette = document.getElementById("mockQuestionPalette");
      if (!palette) return;
      palette.innerHTML = getQuestions()
        .map((question, index) => {
          const answered = attempt.answers[question.id]?.selected?.length;
          const marked = attempt.markedForReview.includes(question.id);
          const active = index === attempt.currentIndex;
          return `
            <button class="palette-btn ${active ? "active" : ""} ${answered ? "answered" : ""} ${marked ? "marked" : ""}" data-index="${index}" aria-label="${t.question} ${index + 1}">
              ${index + 1}
            </button>
          `;
        })
        .join("");
      palette.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
          touchQuestionTime();
          attempt.currentIndex = Number(button.dataset.index);
          attempt.questionStartedAt = Date.now();
          save();
          renderExam();
        });
      });
    }

    function renderProgress() {
      const progress = document.getElementById("mockProgressText");
      if (progress) {
        progress.textContent = `${answeredCount()} / ${getQuestions().length} ${t.answered}`;
      }
    }

    function chooseOption(question, selectedIndex) {
      const existing = attempt.answers[question.id]?.selected || [];
      let selected;
      if (question.select === 1) {
        selected = [selectedIndex];
      } else if (existing.includes(selectedIndex)) {
        selected = existing.filter((index) => index !== selectedIndex);
      } else if (existing.length < question.select) {
        selected = [...existing, selectedIndex];
      } else {
        selected = [...existing.slice(1), selectedIndex];
      }
      attempt.answers[question.id] = { selected };
      save();
      renderExam();
    }

    function toggleMarked(questionId) {
      const index = attempt.markedForReview.indexOf(questionId);
      if (index >= 0) attempt.markedForReview.splice(index, 1);
      else attempt.markedForReview.push(questionId);
      save();
      renderExam();
    }

    function move(delta) {
      touchQuestionTime();
      const next = Math.max(0, Math.min(getQuestions().length - 1, attempt.currentIndex + delta));
      attempt.currentIndex = next;
      attempt.questionStartedAt = Date.now();
      save();
      renderExam();
    }

    function renderQuestion() {
      const card = document.getElementById("mockQuestionCard");
      const question = currentQuestion();
      if (!card || !question) return;
      const selected = attempt.answers[question.id]?.selected || [];
      const marked = attempt.markedForReview.includes(question.id);
      const optionsHtml = question.options
        .map((option, index) => {
          const active = selected.includes(index);
          return `
            <button class="option-btn ${active ? "selected" : ""}" data-option="${index}" aria-pressed="${active}">
              <span class="option-key">${letters[index]}</span>
              <span>${escapeHtml(option)}</span>
              <span class="option-check">${active ? "OK" : ""}</span>
            </button>
          `;
        })
        .join("");

      card.innerHTML = `
        <div class="question-top">
          <div class="badge-row">
            <span class="category-badge">${escapeHtml(question.category)}</span>
            ${question.select > 1 ? `<span class="selection-badge">${t.select(question.select)}</span>` : ""}
          </div>
          <button class="btn btn-secondary" id="mockMarkBtn">${marked ? t.unmarkReview : t.markReview}</button>
        </div>
        <div class="question-number">${t.question} ${attempt.currentIndex + 1} ${t.of} ${getQuestions().length} - Bank ${question.id}</div>
        <h2>${escapeHtml(question.question)}</h2>
        <div class="option-list">${optionsHtml}</div>
        <div class="nav-row">
          <button class="btn btn-secondary" id="mockPrevBtn" ${attempt.currentIndex === 0 ? "disabled" : ""}>${t.previous}</button>
          <button class="btn btn-secondary" id="mockNextBtn" ${attempt.currentIndex === getQuestions().length - 1 ? "disabled" : ""}>${t.next}</button>
        </div>
      `;

      card.querySelectorAll(".option-btn").forEach((button) => {
        button.addEventListener("click", () => chooseOption(question, Number(button.dataset.option)));
      });
      document.getElementById("mockMarkBtn").addEventListener("click", () => toggleMarked(question.id));
      document.getElementById("mockPrevBtn").addEventListener("click", () => move(-1));
      document.getElementById("mockNextBtn").addEventListener("click", () => move(1));
    }

    function renderExam() {
      if (!attempt || attempt.status !== "active") return;
      if (maybeExpire()) return;
      examSurface.hidden = false;
      resultsSurface.hidden = true;
      renderTimer();
      renderProgress();
      renderPalette();
      renderQuestion();
    }

    function calculateResults() {
      const questions = getQuestions();
      const domainMap = new Map();
      let correct = 0;
      let unanswered = 0;

      questions.forEach((question) => {
        const selected = attempt.answers[question.id]?.selected || [];
        const isUnanswered = selected.length === 0;
        const isCorrect = !isUnanswered && sameSet(selected, question.answers);
        if (isCorrect) correct += 1;
        if (isUnanswered) unanswered += 1;

        if (!domainMap.has(question.category)) {
          domainMap.set(question.category, {
            label: question.category,
            total: 0,
            correct: 0,
            unanswered: 0,
            time: 0,
          });
        }
        const row = domainMap.get(question.category);
        row.total += 1;
        if (isCorrect) row.correct += 1;
        if (isUnanswered) row.unanswered += 1;
        row.time += attempt.timeByQuestionId[question.id] || 0;
      });

      const total = questions.length;
      const percent = total ? Math.round((correct / total) * 100) : 0;
      const submittedAt = attempt.submittedAt || Date.now();
      const timeUsed = Math.min(submittedAt, attempt.expiresAt) - attempt.startedAt;
      const avgTime = total ? timeUsed / total : 0;

      return {
        questions,
        correct,
        incorrect: total - correct,
        unanswered,
        total,
        percent,
        passed: percent >= certification.examConfig.passingScore,
        timeUsed,
        avgTime,
        domains: Array.from(domainMap.values()).map((row) => ({
          ...row,
          percent: row.total ? Math.round((row.correct / row.total) * 100) : 0,
          avgTime: row.total ? row.time / row.total : 0,
        })),
      };
    }

    function submitExam(reason) {
      if (!attempt || attempt.status !== "active") return;
      touchQuestionTime();
      attempt.status = reason === "expired" ? "expired" : "submitted";
      attempt.submittedReason = reason || "submitted";
      attempt.submittedAt = reason === "expired" ? attempt.expiresAt : Date.now();
      save();
      if (timerId) window.clearInterval(timerId);
      renderResults();
    }

    function renderResults() {
      const container = document.getElementById("mockResults");
      if (!container) return;
      examSurface.hidden = true;
      resultsSurface.hidden = false;
      if (notice) notice.hidden = true;
      if (startButton) {
        startButton.disabled = false;
        startButton.textContent = t.startMock;
      }
      if (timerId) window.clearInterval(timerId);

      const results = calculateResults();
      const priorities = results.domains
        .filter((domain) => domain.percent < certification.examConfig.passingScore)
        .sort((a, b) => a.percent - b.percent);
      const expiredNote =
        attempt.status === "expired" ? `<div class="notice">${t.timeExpired}</div>` : "";

      container.innerHTML = `
        <div class="results-hero">
          <div>
            <div class="eyebrow">${t.results}</div>
            <h2>${certification.title}</h2>
            <p>${expiredNote ? t.timeExpired : ""}</p>
          </div>
          <div class="score-ring ${results.passed ? "pass" : "review"}">
            <span>${results.percent}%</span>
            <small>${results.passed ? t.estimatedPass : t.needsReview}</small>
          </div>
        </div>
        ${expiredNote}
        <div class="stats-grid results-grid">
          <div class="stat-card"><div class="stat-label">${t.totalScore}</div><div class="stat-value">${results.correct} / ${results.total}</div></div>
          <div class="stat-card"><div class="stat-label">${t.incorrect}</div><div class="stat-value">${results.incorrect}</div></div>
          <div class="stat-card"><div class="stat-label">${t.unanswered}</div><div class="stat-value">${results.unanswered}</div></div>
          <div class="stat-card"><div class="stat-label">${t.timeUsed}</div><div class="stat-value">${formatDuration(results.timeUsed)}</div></div>
          <div class="stat-card"><div class="stat-label">${t.avgTime}</div><div class="stat-value">${formatDuration(results.avgTime)}</div></div>
        </div>
        <section class="resources-card mock-analysis">
          <h2>${t.domainPerformance}</h2>
          <div class="domain-results">
            ${results.domains
              .map(
                (domain) => `
                  <div class="domain-result">
                    <div class="progress-meta">
                      <span>${escapeHtml(domain.label)}</span>
                      <span>${domain.percent}% · ${domain.correct}/${domain.total}</span>
                    </div>
                    <div class="progress-track"><div class="progress-fill" style="width:${domain.percent}%"></div></div>
                    <p>${t.avgTime}: ${formatDuration(domain.avgTime)} · ${t.unanswered}: ${domain.unanswered}</p>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>
        <section class="resources-card mock-analysis">
          <h2>${t.studyPriority}</h2>
          ${
            priorities.length
              ? `<div class="cert-meta">${priorities
                  .map((domain) => `<span class="pill">${escapeHtml(domain.label)} ${domain.percent}%</span>`)
                  .join("")}</div>`
              : `<p>${t.allDomainsHealthy}</p>`
          }
        </section>
        <section class="resources-card mock-review">
          <h2>${t.reviewAllQuestions}</h2>
          ${results.questions
            .map((question, index) => {
              const selected = attempt.answers[question.id]?.selected || [];
              const isCorrect = selected.length > 0 && sameSet(selected, question.answers);
              const correctText = selectedAnswerText(question, question.answers);
              const selectedText = selectedAnswerText(question, selected);
              return `
                <article class="review-card ${isCorrect ? "correct" : "incorrect"}">
                  <div class="question-number">${t.question} ${index + 1} · ${escapeHtml(question.category)}</div>
                  <h3>${escapeHtml(question.question)}</h3>
                  <p><strong>${isCorrect ? t.correct : t.incorrect}</strong></p>
                  <p><strong>${t.selectedAnswer}:</strong><br>${selectedText}</p>
                  ${
                    isCorrect
                      ? ""
                      : `<p><strong>${t.correctAnswer}:</strong><br>${correctText}</p>
                         <p><strong>${t.explanation}:</strong> ${escapeHtml(question.explanation)}</p>
                         <div class="tip-box"><strong>${t.examTip}:</strong> ${escapeHtml(question.tip)}</div>`
                  }
                </article>
              `;
            })
            .join("")}
        </section>
        <div class="hero-actions">
          <button class="btn btn-primary" id="newMockBtn">${t.startNew}</button>
          <a class="btn btn-secondary" href="${t.listPath}">${t.backToExams}</a>
        </div>
      `;

      document.getElementById("newMockBtn").addEventListener("click", () => {
        if (!window.confirm(t.confirmNew)) return;
        clearAttempt(certification);
        attempt = createAttempt();
        save();
        startActiveAttempt();
      });
    }

    function startActiveAttempt() {
      if (!attempt || attempt.status !== "active") return;
      examSurface.hidden = false;
      resultsSurface.hidden = true;
      if (startButton) startButton.textContent = t.resumeMock;
      if (timerId) window.clearInterval(timerId);
      timerId = window.setInterval(() => {
        renderTimer();
        maybeExpire();
      }, 1000);
      renderExam();
    }

    async function boot() {
      setLoading();
      try {
        certification = await loadQuestionBank(certificationMeta);
        questionById = new Map(certification.questions.map((question) => [question.id, question]));
        hydrateBlueprint();
        attempt = normalizeAttempt(readAttempt(certification));

        if (attempt && attempt.status === "active" && Date.now() >= attempt.expiresAt) {
          submitExam("expired");
          return;
        }

        if (attempt && attempt.status === "active") {
          if (notice) {
            notice.hidden = false;
            notice.textContent = t.activeNotice;
          }
          if (startButton) {
            startButton.disabled = false;
            startButton.textContent = t.resumeMock;
          }
        } else {
          if (startButton) {
            startButton.disabled = false;
            startButton.textContent = t.startMock;
          }
          if (attempt && (attempt.status === "submitted" || attempt.status === "expired")) {
            renderResults();
          }
        }
      } catch (error) {
        console.warn("Mock exam could not load.", error);
        app.innerHTML = `<div class="shell"><div class="empty-state"><h2>${t.unavailable}</h2><a class="btn btn-primary" href="${t.listPath}">${t.backToExams}</a></div></div>`;
      }
    }

    if (startButton) {
      startButton.addEventListener("click", () => {
        if (!attempt || attempt.status !== "active") {
          if (attempt && !window.confirm(t.confirmNew)) return;
          clearAttempt(certification);
          attempt = createAttempt();
          save();
        }
        startActiveAttempt();
      });
    }

    const finishButton = document.getElementById("finishMockBtn");
    if (finishButton) {
      finishButton.addEventListener("click", () => {
        if (!window.confirm(t.finishWarning(unansweredCount()))) return;
        submitExam("submitted");
      });
    }

    window.addEventListener("beforeunload", () => {
      touchQuestionTime();
      if (attempt) save();
    });

    boot();
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderMockList();
    initMockExam();
  });
})();
