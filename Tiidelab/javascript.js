window.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('registration-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    var firstName = document.getElementById('firstName').value;
    var middleName = document.getElementById('middleName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('DOB').value;
    var idNumber = document.getElementById('id-number').value;
    var streetAddress = document.getElementById('streetAddress').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
    var zipCode = document.getElementById('zipCode').value;
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmemail').value;
    var courseSelection = document.getElementById('courseSelection').value;
    var levelSelection = document.getElementById('levelSelection').value;
    var languageSelection = document.getElementById('languageSelection').value;
    var startDate = document.getElementById('startDate').value;
    var comments = document.getElementById('comments').value;

    // Create the preview content
    var previewContent = `
      <h2>Preview</h2>
      <p><strong>Student Information:</strong></p>
      <p>Name: ${firstName} ${middleName ? middleName + ' ' : ''}${lastName}</p>
      <p>Date of Birth: ${dob}</p>
      <p>Student ID: ${idNumber}</p>
      <p><strong>Address:</strong></p>
      <p>Street Address: ${streetAddress}</p>
      <p>City: ${city}</p>
      <p>State / Province: ${state}</p>
      <p>Country: ${country}</p>
      <p>Zip Code: ${zipCode}</p>
      <p><strong>Contact Information:</strong></p>
      <p>Email: ${email}</p>
      <p>Confirm Email: ${confirmEmail}</p>
      <p><strong>Course Details:</strong></p>
      <p>Course: ${courseSelection}</p>
      <p>Level: ${levelSelection}</p>
      <p>Language: ${languageSelection}</p>
      <p>Start Date: ${startDate}</p>
      <p>Comments: ${comments}</p>
    `;

    // Display the preview content
    var previewContainer = document.getElementById('preview-container');
    previewContainer.innerHTML = previewContent;
  });
});
