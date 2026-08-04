# IMPACT PROJECT PNG

Website for "IMPACT PROJECT PNG", a non-refundable financial aid organization in Papua New Guinea.

Built with **HTML, CSS and JavaScript**, connected to **EmailJS** for form submissions
sent to **pngimpactproject@gmail.com**.

## Project status — ✅ All pages complete

- `index.html` — Home page
- `about.html` — About / our mission
- `criteria.html` — Eligibility criteria
- `testimonials.html` — Testimonials
- `contact.html` — Contact (Port Moresby location + embedded map)
- `apply.html` — Single-page application form, connected to EmailJS
- `confirmation.html` — Confirmation page with a generated case number

## File structure

```
impact-project-png/
├── index.html
├── about.html
├── criteria.html
├── testimonials.html
├── contact.html
├── apply.html
├── confirmation.html
├── assets/
│   ├── css/
│   │   ├── style.css          (global styles: header, footer, buttons, hero)
│   │   └── application.css    (form + confirmation page styles)
│   ├── js/
│   │   ├── main.js            (mobile menu)
│   │   ├── emailjs-config.js  (EmailJS credentials — TO COMPLETE)
│   │   └── applyForm.js       (form validation, case ID generation, EmailJS send)
│   └── img/
│       ├── hero-home.jpg
│       ├── hero-about.jpg
│       ├── hero-criteria.jpg
│       ├── hero-testimonials.jpg
│       ├── hero-contact.jpg
│       └── hero-apply.jpg
```

## ⚠️ Required step — EmailJS configuration

The form will not send emails until you complete `assets/js/emailjs-config.js`
with your own EmailJS credentials:

1. Create a free account at https://www.emailjs.com
2. Add an **Email Service** and connect it to **pngimpactproject@gmail.com**
3. Create an **Email Template** using the variables listed in the comments of
   `emailjs-config.js` (case_id, first_name, last_name, budget, etc.)
4. Copy your **Public Key**, **Service ID**, and **Template ID**
5. Open `assets/js/emailjs-config.js` and replace the 3 placeholder values

Without this step, clicking "Submit My Request" will show an error message.

## How to test

Open `index.html` in your browser (double-click, or use a "Live Server"
extension if you're using VS Code).

## Note on images

The hero background images in `assets/img/` are temporary color gradients
generated automatically. Replace them with real photos (Papua New Guinea
landscapes, community life, education...) keeping the same file names.

## Notes

- The address and phone number on the Contact page are placeholders —
  replace them with your organization's real details.
- All internal navigation ("Sign Up" and "Submit Your Request" buttons)
  points to `apply.html`, present on every page as requested.
