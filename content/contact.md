---
title: "Contact"
layout: "page"
showInNav: false
slug: "/contact"
hero:
  title: "Get in touch about Beatbox."
  subtitle: "Questions, collaborations, feedback, and contributions are welcome."
sections:
  - type: "contactForm"
    title: "Contact form"
    fields:
      - name: "name"
        label: "Name"
        type: "text"
        required: true
      - name: "email"
        label: "Email"
        type: "email"
        required: true
      - name: "topic"
        label: "Topic"
        type: "choice"
        options:
          - "General question"
          - "Building Beatbox"
          - "Collaboration"
          - "Contributing code or hardware"
      - name: "message"
        label: "Message"
        type: "textarea"
        required: true
      - name: "recaptcha"
        label: "reCAPTCHA"
        type: "recaptcha"
        required: true
---

You can also reach us via email at **contact@beatbox-hcm.org**.

<!-- TODO: confirm and replace with the actual contact address. -->
