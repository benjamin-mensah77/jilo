document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const studentClass = document.getElementById('class').value;
    const location = document.getElementById('location').value;
    const birthdate = document.getElementById('birthdate').value;
    const region = document.getElementById('region').value;

    fetch('/api/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, class: studentClass, location, birthdate, region })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to save data');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('formMessage').innerText = 'Student record saved successfully!';
        document.getElementById('formMessage').classList.remove('hidden');
        document.getElementById('studentForm').reset(); // Reset form fields
    })
    .catch(error => {
        document.getElementById('formMessage').innerText = 'Error saving record!';
        document.getElementById('formMessage').classList.remove('hidden');
        console.error('Error:', error);
    });
});
