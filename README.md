# BlueForce

Static app for Salesforce certification practice with instant feedback, bilingual interface URLs, and local progress per certification.

## Public URLs

- English home: `/en/`
- Spanish home: `/es/`
- English exams: `/en/certifications/ux-designer`
- Spanish exams: `/es/certificaciones/ux-designer`
- English mock exams: `/en/mock-exams/ux-designer`
- Spanish mock exams: `/es/examenes-de-prueba/ux-designer`
- The root `/` remains an x-default entry point and links into the language-specific routes.
- Physical files still use `.html`, but `.htaccess` redirects public `.html` URLs to clean URLs.

## Main Files

- `index.html`, `en/index.html`, `es/index.html`: homepages.
- `en/certifications/*.html` and `es/certificaciones/*.html`: localized exam pages.
- `en/mock-exams/*.html` and `es/examenes-de-prueba/*.html`: timed mock exam pages.
- `certifications/*.html`: legacy English exam pages, canonicalized to `/en/certifications/...`.
- `assets/data/certifications.js`: normalized certification catalog.
- `assets/data/exams/*.js`: question banks imported from the original HTML guides.
- `assets/js/app.js`: shared practice engine, filters, bookmarks, missed review, and `localStorage`.
- `assets/js/mock-exam.js`: timed mock exam engine, active attempt persistence, timer, scoring, and final review.
- `assets/js/home.js`: lightweight homepage renderer.
- `assets/css/styles.css`: shared styles.
- `tools/extract-certifications.mjs`: converts original HTML guides into the shared data format.
- `tools/audit-question-quality.mjs`: reports answer-letter balance, length bias, and weak distractor risks.
- `tools/build-localized-pages.mjs`: regenerates English and Spanish pages, `sitemap.xml`, and `robots.txt`.

## Add A Certification

1. Copy the new study lab HTML into the project root.
2. Add its entry to `sourceFiles` and `metadata` inside `tools/extract-certifications.mjs`, including `examConfig` for timed mock exams.
3. Run:

```bash
node tools/extract-certifications.mjs
```

4. Review answer balance and distractor quality:

```bash
node tools/audit-question-quality.mjs
```

5. If the audit reports issues, fix the questions in the source HTML and rerun extraction. The extractor intentionally does not rewrite or polish answer choices.

6. Regenerate the localized pages:

```bash
node tools/build-localized-pages.mjs
```

7. If you want Spanish interface copy for that certification, add its Spanish metadata to:

- `tools/build-localized-pages.mjs`
- `assets/js/home.js`
- `assets/js/app.js`
- `assets/js/mock-exam.js` only when the shared mock exam interface needs new certification-specific copy.

The exam questions, options, explanations, and tips remain in English by design.

Practice progress and active mock exam attempts are saved in `localStorage`, separated by certification `id`. Mock exams keep only one active/latest attempt per certification.

The source HTML is the editorial source of truth for questions, options, answers, explanations, and tips. The extractor validates and imports that content without reordering or rewriting answer choices. Study sessions and mock exams still randomize option display per local session, so if that runtime option-order logic changes, increment `progressVersion` in `assets/js/app.js` and `activeVersion` in `assets/js/mock-exam.js` so saved progress is not mixed with older option indexes.
