const radioButtons = document.querySelectorAll('input[name="query-type"]');

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        // Reset background color for all radio buttons
        radioButtons.forEach(rb => {
            rb.parentElement.style.backgroundColor = ''; // Reset to default
            rb.parentElement.style.color = ''; // Reset text color to default
        });

        // Change background color for the clicked radio button's parent label
        if (radio.checked) {
            radio.parentElement.style.backgroundColor = '#e9f5f0'; // Change to green when selected
            radio.parentElement.style.color = 'white'; // Optional: Change text color to white
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessageContainer = document.getElementById('success-message-container');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // You can add validation here if needed

        // Display the success message
        successMessageContainer.style.display = 'block';

        // Optionally, reset the form
        form.reset();
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the success message
    document.getElementById('success-message-container').style.display = 'block';
});
