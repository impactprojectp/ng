/* ==========================================================
   EMAILJS CONFIGURATION — IMPACT PROJECT PNG
   ==========================================================
   1) Create a free account at https://www.emailjs.com
   2) Add an "Email Service" (e.g. Gmail) and connect it to
      pngimpactproject@gmail.com
   3) Create an "Email Template" and use the variables listed
      below (see applyForm.js for how they are populated)
   4) Get your credentials from EmailJS:
        - PUBLIC_KEY  → Account > General
        - SERVICE_ID  → Email Services
        - TEMPLATE_ID → Email Templates
   5) Replace the 3 values below with your own.
   ========================================================== */

const EMAILJS_CONFIG = {
  PUBLIC_KEY: "ZMipdHklIItnrwlSw",
  SERVICE_ID: "service_7s1kufd",
  TEMPLATE_ID: "template_c9efboz",
  RECIPIENT: "pngimpactproject@gmail.com"
};

// EmailJS initialization (the EmailJS SDK script must be loaded before this file)
(function () {
  if (typeof emailjs !== "undefined") {
    emailjs.init({ publicKey: EMAILJS_CONFIG.PUBLIC_KEY });
  }
})();

/* ==========================================================
   VARIABLES TO CREATE IN YOUR EMAILJS TEMPLATE ("Content" tab):

   {{case_id}}             → generated case number
   {{last_name}}           → applicant's last name
   {{first_name}}          → applicant's first name
   {{email}}               → applicant's email
   {{phone}}               → phone number
   {{date_of_birth}}       → date of birth
   {{gender}}              → gender
   {{province}}            → province of residence
   {{city}}                → city / district
   {{address}}             → full address
   {{employment_status}}   → employment status
   {{education_level}}     → education level
   {{project_title}}       → project title
   {{project_category}}    → project category
   {{project_description}} → detailed description
   {{budget}}              → required budget (in PGK)
   {{project_duration}}    → estimated project duration
   {{expected_impact}}     → expected impact of the project
   {{beneficiaries_count}} → number of beneficiaries
   {{bank_details}}        → bank information (bank + account number)
   {{id_document}}         → type and number of ID document
   {{to_email}}            → pngimpactproject@gmail.com (recipient)
   ========================================================== */
