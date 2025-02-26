document.getElementById("tracking-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    var docketNumber = document.getElementById("tracking-number").value;

    if (docketNumber) {
        var trackingURL = "https://yourtrackingwebsite.com/track?docket=" + docketNumber;
        window.location.href = trackingURL;
    } else {
        alert("Please enter a valid docket number!");
    }
});
