# 💌 Crisp Gate Invite — Interactive Q&A & Budget Screening Invite System

**Crisp Gate Invite** is an interactive, Q&A-gated digital invitation system built for weddings, dates, and special events. Before guests can open the digital envelope and view official event details, they must verify their identity and pass a custom love, compatibility, and financial-share screening test.

Part of the **Crisp Suite** by **HandleVault**.

--


## 🌐 Live Demo
* **Live App:** https://handlevault-official.github.io/crisp-gate-invite/

---

## ✨ Key Features
* **Click-to-Open Envelope UI:** Interactive landing page styled as a sealed digital envelope (`index.html`).
* **Guest Identity Verification:** Collects Full Name, Email Address, and Phone/GCash number before granting access to event details.
* **Q&A & Budget Screening Gate:** Validates guest responses and computes minimum expected contribution/bill-share to prevent awkward surprises on the event day.
* **Local-First & Zero-Backend:** Runs cleanly as a static PWA-ready application deployed via GitHub Pages.

---

## 📂 Repository Structure
```text
crisp-gate-invite/
├── .github/
│   └── workflows/
│       └── deploy.yml    # Automated GitHub Pages deployment
├── .gitignore            # Standardized ignore rules
├── index.html            # Main Envelope & Q&A Gate application
├── LICENSE               # MIT License
├── manifest.json         # PWA manifest configuration
├── README.md             # Project documentation
└── repo.js               # Crisp Suite repository metadata helper

🚀 Deployment
This repository is configured with GitHub Actions (.github/workflows/deploy.yml). Any push to the main branch automatically builds and deploys the static site to GitHub Pages.
☕ Support
Gumroad Store: vaultkeeper117.gumroad.com
Ko-fi: ko-fi.com/handlevaultofficial
📄 License
Distributed under the MIT License. See LICENSE for more information.
© 2026 HandleVault / Crisp Suite. All rights reserved.
