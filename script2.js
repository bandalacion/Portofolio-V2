
function submitForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform form validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    // Send form data to server (replace with your own implementation)
    // Example using fetch API
    fetch('submit_form.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    })
      .then(response => response.json())
      .then(data => {
        // Handle response from server
        console.log(data);
        alert('Form submitted successfully');
        document.getElementById('contactForm').reset();
      })
      .catch(error => {
        // Handle error
        console.error(error);
        alert('An error occurred while submitting the form');
      });
  }

  // Add event listener to the form submit button
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    submitForm();
  });