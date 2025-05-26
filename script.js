document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("7shupHj5Z9znyxR8u"); // Replace with your EmailJS User ID

  function sendEmail(formId, serviceId, templateId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm(serviceId, templateId, this).then(
        function (response) {
          Toastify({
            text: "Message sent successfully!",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "green",
          }).showToast();

          form.reset();

          const modalElement = bootstrap.Modal.getInstance(
            document.getElementById("getQuoteModal")
          );
          if (modalElement) modalElement.hide();
        },
        function (error) {
          Toastify({
            text: "Failed to send message. Please try again.",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "red",
          }).showToast();
        }
      );
    });
  }

  sendEmail("contact-form", "service_xfkp57g", "template_z23cdq9");

  sendEmail("quote-form", "service_xfkp57g", "template_z23cdq9");
});

document.getElementById("year").textContent = new Date().getFullYear();

document
  .getElementById("tracking-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var docketNumber = document.getElementById("tracking-number").value;

    if (docketNumber) {
      var trackingURL =
        "http://103.13.97.213/ansh/Home/IndexDocketStatus?DocketNo=" +
        docketNumber;
      window.location.href = trackingURL;
    } else {
      alert("Please enter a valid docket number!");
    }
  });
document
  .getElementById("rate-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let weight = parseFloat(document.getElementById("weight").value);
    let baseRate = 150;
    let ratePerKg = 17;

    if (weight > 0) {
      let estimatedCost = baseRate + weight * ratePerKg;
      document.getElementById("rate-result").innerText =
        "Estimated Cost: ₹" + estimatedCost;
    } else {
      document.getElementById("rate-result").innerText =
        "Please enter a valid weight.";
    }
  });
