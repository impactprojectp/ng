document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('application-form');
  const btnSubmit = document.getElementById('btn-submit');
  const messageBox = document.getElementById('form-message');

  // Generates a unique case number: IPPNG-YEAR-XXXXXX
  function generateCaseId() {
    const year = new Date().getFullYear();
    const random = Math.floor(100000 + Math.random() * 900000);
    return `IPPNG-${year}-${random}`;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    messageBox.textContent = '';
    messageBox.className = 'form-message';

    // Check the honor declaration checkbox
    const declaration = document.getElementById('declaration');
    if (!declaration.checked) {
      messageBox.textContent = "Please check the honor declaration before submitting.";
      messageBox.classList.add('error');
      declaration.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const caseId = generateCaseId();

    const templateParams = {
      case_id: caseId,
      last_name: form.last_name.value,
      first_name: form.first_name.value,
      email: form.email.value,
      phone: form.phone.value,
      date_of_birth: form.date_of_birth.value,
      gender: form.gender.value,
      province: form.province.value,
      city: form.city.value,
      address: form.address.value,
      employment_status: form.employment_status.value,
      education_level: form.education_level.value,
      project_title: form.project_title.value,
      project_category: form.project_category.value,
      project_description: form.project_description.value,
      budget: form.budget.value,
      project_duration: form.project_duration.value,
      expected_impact: form.expected_impact.value,
      beneficiaries_count: form.beneficiaries_count.value,
      bank_details: `${form.bank_name.value} - ${form.account_number.value}`,
      id_document: `${form.id_type.value} No. ${form.id_number.value}`,
      to_email: EMAILJS_CONFIG.RECIPIENT
    };

    btnSubmit.disabled = true;
    btnSubmit.textContent = "Sending...";

    emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, templateParams)
      .then(() => {
        // Store the case details to display them on the confirmation page
        const caseData = {
          id: caseId,
          first_name: form.first_name.value,
          last_name: form.last_name.value,
          email: form.email.value,
          project_title: form.project_title.value,
          submission_date: new Date().toLocaleDateString('en-US')
        };
        localStorage.setItem('lastImpactPNGCase', JSON.stringify(caseData));
        window.location.href = 'confirmation.html';
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        messageBox.textContent = "Something went wrong while sending your request. Please try again or contact us directly.";
        messageBox.classList.add('error');
        btnSubmit.disabled = false;
        btnSubmit.textContent = "Submit My Request";
      });
  });
});
