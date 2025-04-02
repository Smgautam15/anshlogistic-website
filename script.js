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
            duration: 3000, // Toast disappears after 3 seconds
            close: true,
            gravity: "top", // Position: "top" or "bottom"
            position: "right", // Position: "left", "center", "right"
            backgroundColor: "green",
          }).showToast();

          form.reset();

          // Close modal if form is inside a modal
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

  // Contact Us Form
  sendEmail("contact-form", "service_xfkp57g", "template_z23cdq9");

  // Get Quote Form (Modal)
  sendEmail("quote-form", "service_xfkp57g", "template_z23cdq9");
});

// script for copyright-year
document.getElementById("year").textContent = new Date().getFullYear();

document
  .getElementById("tracking-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    var docketNumber = document.getElementById("tracking-number").value;

    if (docketNumber) {
      var trackingURL =
        "https://yourtrackingwebsite.com/track?docket=" + docketNumber;
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
    let baseRate = 150; // Base price
    let ratePerKg = 17; // Rate per KG

    if (weight > 0) {
      let estimatedCost = baseRate + weight * ratePerKg;
      document.getElementById("rate-result").innerText =
        "Estimated Cost: ₹" + estimatedCost;
    } else {
      document.getElementById("rate-result").innerText =
        "Please enter a valid weight.";
    }
  });
// document.getElementById("rate-form").addEventListener("submit", function (event) {
//     event.preventDefault();

//     let pickup = document.getElementById("pickup").value;
//     let destination = document.getElementById("destination").value;
//     let weight = parseFloat(document.getElementById("weight").value);

//     if (pickup === "" || destination === "" || weight <= 0) {
//         document.getElementById("rate-result").innerText = "Please enter valid details.";
//         return;
//     }

//     let apiKey = "YOUR_GOOGLE_API_KEY";  // <-- Yaha apni Google API Key dalni hai
//     let apiUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${pickup}&destinations=${destination}&key=${apiKey}`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             if (data.status === "OK" && data.rows[0].elements[0].status === "OK") {
//                 let distance = data.rows[0].elements[0].distance.value / 1000; // Distance in KM
//                 let baseRate = 50;  // Fixed Base Price
//                 let ratePerKm = 5;   // Price per KM
//                 let ratePerKg = 10;  // Price per KG

//                 let estimatedCost = baseRate + (distance * ratePerKm) + (weight * ratePerKg);

//                 document.getElementById("rate-result").innerText =
//                     `Estimated Cost: ₹${estimatedCost.toFixed(2)} (Distance: ${distance.toFixed(2)} km)`;
//             } else {
//                 document.getElementById("rate-result").innerText = "Invalid Pincode. Please enter correct details.";
//             }
//         })
//         .catch(error => {
//             console.error("Error fetching distance:", error);
//             document.getElementById("rate-result").innerText = "Error fetching distance. Try again later.";
//         });
// });
