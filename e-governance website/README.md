# E-Governance Website

## Prototype architecture

This responsive prototype is a single-page citizen service portal named **NagrikSetu**. It is intentionally dependency-free so it can be opened directly as [index.html](index.html) in a browser.

### Interface components

- Government identity and utility bar with text-size and high-contrast controls
- Responsive primary navigation with a mobile menu
- Plain-language service search with popular shortcuts
- Service category cards for identity, transport, money, and home services
- “How it works” three-step information section
- Application reference lookup with an announced demo result
- Help-centre footer with phone and email contact paths

### Wireframe and navigation flow

```text
[Government utility bar]
[Brand] [Services] [How it works] [Track] [Help] [Sign in]
                         |
[Welcome + search ------------------ illustration]
                         |
[Quick facts: one place | next step | support]
                         |
[Service categories] -> [Popular service actions]
                         |
[01 Find] -> [02 Prepare] -> [03 Apply & track]
                         |
[Reference number -------------------- Check status]
                         |
[Help and footer links]
```

The flow puts the highest-intent action (finding a service) above the fold, then answers common uncertainty about documents and progress before offering application tracking. The visual hierarchy uses short labels, generous spacing, and persistent help rather than assuming digital familiarity.

### Responsive design decisions

- A fluid, max-width container keeps content readable while using available space on desktop.
- CSS Grid changes the hero, service cards, process content, and status form into one-column layouts at tablet and mobile widths.
- Buttons and inputs retain a minimum 44px touch target; controls wrap rather than overflow on narrow screens.
- The illustration is decorative and scales within its column; content remains fully usable without it.
- `prefers-reduced-motion`, visible focus states, skip navigation, semantic landmarks, labels, and live status messages support the accessibility goals described below.

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 with semantic elements |
| Styling | CSS3 with Custom Properties |
| Logic | Vanilla ES6 JavaScript |
| Persistence | localStorage (client-side drafts & mock data) |
| Icons | Native emoji (zero-dependency) |
| Fonts | System font stack (no downloads) |

## Accessibility Compliance

This portal targets **WCAG 2.1 Level AA** and **GIGW 3.0** compliance:

- Semantic HTML with ARIA landmarks and labels
- Keyboard-navigable with visible focus indicators
- Skip-to-content links
- High-contrast mode toggle
- Scalable text (3 size levels)
- `prefers-reduced-motion` support
- Screen reader-optimized forms with error announcements
- Minimum 44×44px touch targets

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request
