(function () {
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

  function questionCount(certification) {
    return certification.questionCount || (certification.questions || []).length;
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
          const progress = getHomeProgress(certification);
          const total = questionCount(certification);
          const unanswered = total - progress.answered;
          return `
            <article class="cert-card">
              <div class="cert-top">
                <div>
                  <div class="eyebrow">${total} questions</div>
                  <h3>${escapeHtml(certification.title)}</h3>
                  <p>${escapeHtml(certification.description)}</p>
                </div>
                <div class="cert-code" aria-hidden="true">${escapeHtml(certification.code)}</div>
              </div>
              <div>
                <div class="cert-meta">
                  <span class="pill">${progress.answered} answered</span>
                  <span class="pill">${progress.correct} correct</span>
                  <span class="pill">${unanswered} unanswered</span>
                </div>
                <div class="progress-block" style="margin-top:16px">
                  <div class="progress-meta">
                    <span>Local progress</span>
                    <span>${progress.percent}%</span>
                  </div>
                  <div class="progress-track">
                    <div class="progress-fill" style="width:${progress.percent}%"></div>
                  </div>
                </div>
              </div>
              <div class="home-actions">
                <a class="btn btn-primary" href="${escapeHtml(certification.path)}">${progress.answered ? "Resume" : "Start"}</a>
                <a class="btn btn-secondary" href="${escapeHtml(certification.path)}#study">Practice</a>
              </div>
            </article>
          `;
        })
        .join("");
    });
  }

  document.addEventListener("DOMContentLoaded", initHome);
})();
