# Local Demo QA - 2026-08-22 visual close

## Delivery state

- **READY FOR INDEPENDENT ACCEPTANCE.** This is an execution-owner handoff, not a final `CLIENT-SHOWABLE DEMO` decision.
- Local static preview only (L0). No public URL, deployment, contact, form submission or sending occurred.
- Actual Demo Minutes: **344**. This includes design selection, rebuild, supplied-brand integration, source-logo handling, official awards, public customer-photo research and selection, real-photo composition, editorial re-art-direction, responsive repair, personality-focused proof consolidation, the Co-Pilot differentiation interaction, type refinement, spacing/CTA closure refinement, navigation clarity refinement, footer correction, the 9.5-polish increment, this final award-proportion/mobile close and local browser QA; it excludes required source reading and earlier rejected versions. `SOP Cost Review` is triggered because the quality correction exceeded the 60-minute target. No scope or quality requirement was reduced.
- Public document root: `site/` only. Internal notes, rights ledger and QA are outside it.
- The previous rejected build is preserved at `backups/20260821-pre-rebuild/` and was not used as the acceptance baseline.

## Browser evidence

| Viewport | URL | Execution evidence |
| --- | --- | --- |
| Desktop 1440x900 | `http://127.0.0.1:8765/` | HTTP 200; no console or page errors; no horizontal overflow; page height is 4,451px; the award archive is a 394px pale-paper proof band rather than the former full dark field; supplied Logo, original 3:2 official Hero photo, award/ABIA marks and two 1600x1200 customer-site wedding photos loaded; role text is explicitly `Marriage Celebrant`; the Co-Pilot two-role interaction remains fully legible |
| Mobile 390x844 | `http://127.0.0.1:8765/` | HTTP 200; no console or page errors; no horizontal overflow or title clipping; page height is 5,162px, reduced from the PMO-observed 5,324px; desktop navigation is intentionally hidden; supplied Logo, original 3:2 official Hero photo, award/ABIA marks and two 1600x1200 customer-site wedding photos loaded; role text is explicitly `Marriage Celebrant`; the 343px Co-Pilot panel retains full labels and controls, while the email/phone closing card stays within the viewport |

- Desktop screenshot: `../qa-pmo-remediation-desktop.png`
- Mobile screenshot: `../qa-pmo-remediation-mobile.png`
- Both screenshots are full-page captures from local Chrome. They show the full customer Logo, all three faces in the original official Hero photo, official award and ABIA marks, Karen conducting a ceremony, the Co-Pilot service moment, the Blue Mountains customer-site photo, contact details and the final Logo-led close.
- Dark-colour browser preference returned HTTP 200, no errors, no failed images and no horizontal overflow. The Demo deliberately remains in the light customer-brand palette instead of switching to a dark theme. Reduced-motion continues to reduce entrance and reveal transitions to an effectively instantaneous state.

## Functional and delivery checks

- Hero and final email CTAs resolve to `mailto:[REDACTED_EMAIL]`; header email CTA uses the same public address.
- Final phone CTA resolves to `tel:0409127829`.
- Header and Footer display the supplied Karen Brown - A Timeless Love Logo with the source capture boundary removed. The recognition section displays the official wedding-industry and ABIA marks sourced from the public customer site.
- Visible contact details resolve to the same public `mailto:` and `tel:` paths: `[REDACTED_EMAIL]` and `0409 127 829`.
- Header anchors: `#how-it-feels`, `#copilot` and `#areas`; all resolve to visible page sections. The Co-Pilot anchor was clicked in local Chrome and reached `#copilot` at the viewport top.
- The Co-Pilot controls are native buttons with `aria-pressed` states. Local browser activation switched to the Karen role and updated the matching explanation without a console error. Its detail link points only to the verified official customer `https://atimelesslove.com.au/co-pilot-ceremony/` page with `noopener noreferrer`.
- No form fields, submission endpoint, tracking, login, API request, external font request or third-party asset.
- No generated image is rendered on the customer-visible page. Generated concepts remain as non-rendered historical files in `IMAGE_LEDGER.md`; the supplied Logo and official customer-site Hero, two supporting wedding photos, award and ABIA source files are retained with hashes.

## Evidence gates prepared for independent acceptance

- **Internal-text gate:** rendered text, CTA labels, footer, image alt text, aria labels and meta description contain only the permitted natural disclosure `Independent concept preview`; no internal workflow, authorization, AI, draft, placeholder, rights or evaluation language appears in the public page.
- **Business fidelity:** all live factual claims map one-to-one to Karen's official public sources or the project-owner supplied brand assets in `BUSINESS_FIDELITY_MAP.md`: award-winning public presentation, full-time celebrant, service since 2014, 800+ people married, personalised planning, ceremony-day support, the public Co-Pilot Ceremony, public email/phone and the named NSW service regions.
- **Image evidence:** generated concept visuals remain clearly bounded as non-rendered historical artifacts in `IMAGE_LEDGER.md`; the supplied Logo and each rendered official customer-site image are recorded separately with direct source, usage boundary and hash. The Demo makes no claim beyond the official-site picture context.
- **Bottom 40%:** adds a customer-origin Blue Mountains people-and-place moment, named regional reach, a practical first-conversation-to-ceremony-day sequence, visible email/phone details and a natural Logo-led brand close. It does not rely on invented outcomes or a generic title-plus-button ending.
- **Static boundary:** no CMS, backend, database, login, payment, booking or self-hosted form has been introduced.

## Known limits for the accepting reviewer

- The project owner supplied the Logo. Award and ABIA files were retrieved from the customer's public site; customer copyright/publication approval and final visual-direction approval remain unverified for any production use.
- This is local-only evidence. Public availability, delivery-environment performance, live mail client behaviour and any third-party link are untested by design.
- Any production work still needs explicit authorization, approved final copy/assets and the required release workflow.

## 2026-08-22 final award-proportion close

- The two official recognition files now sit as one vertically paired proof strip at their native horizontal proportions on desktop. This removes the earlier small ABIA column and aligns both sources without inventing any new award claim.
- At 390px, the ABIA proof is a shallow ribbon rather than a tall empty card; the awards retain their small factual labels and the Co-Pilot remains fully interactive.
- Final evidence: desktop `1440/1440`, 4,634px page height; mobile `390/390`, 5,112px page height; `0` failed images; `0` console errors or warnings. The Karen role was activated in the mobile Co-Pilot panel and updated its explanatory state.
- Final screenshots: `../qa-95-final-desktop.png` and `../qa-95-final-mobile.png`.
- This close added **6** minutes to the earlier recorded 338-minute cumulative effort, for **344 Actual Demo Minutes** total. `SOP Cost Review` remains triggered; no quality gate was removed.

## 2026-08-22 final 9.5-polish increment

- **READY FOR INDEPENDENT ACCEPTANCE.** This is a candidate for an independent `>= 9.5/10` reassessment, not an execution-owner declaration of final PASS.
- Scope was limited to `site/index.html`, `site/styles.css`, this QA record, and the two requested final screenshots. No business fact, source image, ledger entry or fidelity-map entry changed.
- Baseline is preserved without overwrite at `backups/20260822-095-final-polish-prework/`, including the whole `site/` tree, QA, Business Fidelity Map, Image Ledger and prework screenshots.
- `website-delivery-sop` first-execution read: DS-002B SHA-256 `5b70133e7a155a713c130d07d883afffbd1f57eaa7bfc7c2e2c3dfc9f9bb926a`; mtime `2026-08-09T16:00:52Z`.
- Incremental Actual Demo Minutes: **18** (final refinement and browser QA only). The historical **320 minutes** above remains a separate prior-pass record; no combined value is represented as a new single Demo duration.

### Design and accessibility decisions

- Co-Pilot retains the same two verified roles and messages, but both cards now have high-contrast normal, hover and focus treatments. The active card also displays `Selected`, so status is not conveyed by colour alone; native `aria-pressed` semantics and the live detail panel remain intact.
- The supplied official award and ABIA image files are rendered byte-for-byte as before. Small factual labels (`Official award marks`, `ABIA finalist marks`) establish a readable proof hierarchy on both viewports without adding an award, year, ranking, endorsement or testimonial claim.
- Mobile spacing was selectively reduced around Hero, recognition, story, Co-Pilot, location, area and contact sections. Required Why Karen, Co-Pilot, regions, contact and Bottom 40% content remains present.

### Final browser evidence

| Viewport | Local result |
| --- | --- |
| Desktop 1440x900 | Full-page Chrome/Playwright review; `1440/1440` scroll width; 4,483px page height; all reveal sections were triggered and visible; header anchors `#how-it-feels`, `#copilot`, `#areas` were clicked and resolved. |
| Mobile 390x844 | Full-page Chrome/Playwright review; `390/390` scroll width; 5,192px page height; all five reveal sections reported `is-visible`; no title clipping or horizontal overflow. |

- Final screenshots: `../qa-final-polish-desktop.png` and `../qa-final-polish-mobile.png`.
- Requests: every local document, stylesheet, script and six rendered assets completed with HTTP `200` (one normal stylesheet cache revalidation returned `304`); no failed requests.
- Console/page errors: `0` errors and `0` warnings.
- Co-Pilot: both buttons were clicked. Each correctly became the sole `aria-pressed="true"` card, displayed `Selected`, and updated the live detail/outcome text. Keyboard `Shift+Tab` produced the visible high-contrast focus ring on the alternate role; evidence retained at `backups/20260822-095-final-polish-prework/qa-copilot-keyboard-focus.png`.
- Contact/identity paths remain present in browser snapshots: header and page email links use `mailto:[REDACTED_EMAIL]`; phone links use `tel:0409127829`; the only external path remains the verified Co-Pilot page with `noopener noreferrer`.
- Co-Pilot contrast ratios, calculated from final CSS colours with WCAG relative luminance: normal `#fffeff` on `#29262c` = **14.83:1**; hover `#fffeff` on `#3d3840` = **11.36:1**; active and active-focus `#29262c` on `#eb86a3` = **6.02:1**. All exceed the 4.5:1 body-text target.
- Client-visible internal-text scan of `site/index.html`, `site/main.js` and `site/styles.css` had no hits for AI, asset-rights, authorization, internal-review, draft, placeholder or PMO language. The structural scan also found no form control, fetch/XHR, analytics or tracking endpoint.

### Residual limits

- Local L0 only: no deployment, upload, public release, email/phone activation, form submission, account login, external-page navigation or outreach was performed.
- Customer/publication permissions for the supplied logo and public-site images remain unverified for any production use, as recorded in `IMAGE_LEDGER.md`; that status is internal only and is not exposed in the page.
