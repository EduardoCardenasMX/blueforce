(function () {
  const progressVersion = "v2";
  const certifications = window.BLUEFORCE_CERTIFICATIONS || [];
  const locale = document.body.dataset.locale || document.documentElement.lang || "en";
  const copy = {
    en: {
      questions: "questions",
      answered: "answered",
      correct: "correct",
      unanswered: "unanswered",
      localProgress: "Local progress",
      resume: "Resume",
      start: "Start",
    },
    es: {
      questions: "preguntas",
      answered: "respondidas",
      correct: "correctas",
      unanswered: "pendientes",
      localProgress: "Progreso local",
      resume: "Retomar",
      start: "Empezar",
    },
  }[locale] || {};
  const certCopy = {
    es: {
      "ux-designer": {
        description:
          "Practica dominios oficiales con preguntas basadas en escenarios, feedback inmediato y tips de razonamiento para el examen.",
      },
      "platform-administrator": {
        description:
          "Practica escenarios realistas de administracion, seguridad, datos, automatizacion y Agentforce con feedback inmediato.",
      },
      "business-analyst": {
        description:
          "Practica discovery, stakeholders, procesos, requerimientos, user stories y UAT con feedback inmediato.",
      },
      "sales-cloud-consultant": {
        description:
          "Practica escenarios avanzados de Sales Cloud sobre ciclo de vida, estrategia de implementacion, datos y trusted AI.",
      },
      "data-360-consultant": {
        description:
          "Practica escenarios de Data 360 sobre arquitectura, ingesta, modelado, identidad, segmentacion, activacion y gobernanza.",
      },
    },
  };

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

  function questionCount(certification) {
    return certification.questionCount || (certification.questions || []).length;
  }

  function localizedCertification(certification) {
    return {
      ...certification,
      ...(certCopy[locale]?.[certification.id] || {}),
    };
  }

  function certificationPath(certification) {
    const base = document.body.dataset.certBase;
    if (base) return `${base}/${certification.id}`;
    return certification.path;
  }

  function validQuestionIds(certification) {
    return new Set(certification.questionIds || []);
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

  function getHomeProgress(certification) {
    const saved = readProgress(certification);
    const validIds = validQuestionIds(certification);
    const answers =
      saved.answers && typeof saved.answers === "object" ? saved.answers : {};
    const answeredIds = Object.keys(answers).filter((id) => validIds.has(Number(id)));
    const correct = answeredIds.filter((id) => answers[id] && answers[id].correct).length;
    const answered = answeredIds.length;
    const total = questionCount(certification);
    const percent = total ? Math.round((answered / total) * 100) : 0;
    return { answered, correct, percent };
  }

  function runWhenIdle(callback) {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(callback, { timeout: 1200 });
      return;
    }
    window.setTimeout(callback, 1);
  }

  function initHome() {
    const grid = document.getElementById("certificationGrid");
    if (!grid) return;

    const totalQuestions = certifications.reduce(
      (sum, certification) => sum + questionCount(certification),
      0,
    );
    const certCount = document.getElementById("certCount");
    const questionCountElement = document.getElementById("questionCount");
    if (certCount) certCount.textContent = certifications.length;
    if (questionCountElement) questionCountElement.textContent = totalQuestions;

    runWhenIdle(() => {
      const totals = certifications.reduce(
        (memo, certification) => {
          const progress = getHomeProgress(certification);
          memo.answered += progress.answered;
          memo.correct += progress.correct;
          return memo;
        },
        { answered: 0, correct: 0 },
      );

      const globalProgress = document.getElementById("globalProgress");
      const globalAccuracy = document.getElementById("globalAccuracy");
      if (globalProgress) globalProgress.textContent = `${totals.answered} / ${totalQuestions}`;
      if (globalAccuracy) {
        globalAccuracy.textContent = totals.answered
          ? `${Math.round((totals.correct / totals.answered) * 100)}%`
          : "0%";
      }

      grid.innerHTML = certifications
        .map((certification) => {
          const localized = localizedCertification(certification);
          const progress = getHomeProgress(certification);
          const total = questionCount(certification);
          const unanswered = total - progress.answered;
          const path = certificationPath(certification);
          return `
            <article class="cert-card">
              <div class="cert-top">
                <div>
                  <div class="eyebrow">${total} ${copy.questions}</div>
                  <h3>${escapeHtml(localized.title)}</h3>
                  <p>${escapeHtml(localized.description)}</p>
                </div>
                <div class="cert-code" aria-hidden="true">${escapeHtml(certification.code)}</div>
              </div>
              <div>
                <div class="cert-meta">
                  <span class="pill">${progress.answered} ${copy.answered}</span>
                  <span class="pill">${progress.correct} ${copy.correct}</span>
                  <span class="pill">${unanswered} ${copy.unanswered}</span>
                </div>
                <div class="progress-block" style="margin-top:16px">
                  <div class="progress-meta">
                    <span>${copy.localProgress}</span>
                    <span>${progress.percent}%</span>
                  </div>
                  <div class="progress-track">
                    <div class="progress-fill" style="width:${progress.percent}%"></div>
                  </div>
                </div>
              </div>
              <div class="home-actions">
                <a class="btn btn-primary" href="${escapeHtml(path)}">${progress.answered ? copy.resume : copy.start}</a>
              </div>
            </article>
          `;
        })
        .join("");
    });
  }

  document.addEventListener("DOMContentLoaded", initHome);
})();
