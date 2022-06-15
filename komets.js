function clearName() {
  if (document.getElementById('nameField').value == 'First and Last Name') {
    document.getElementById('nameField').value = '';
  }
}
//function to clear the default data from the phone value input, will not erase user input text
function clearPhone() {
  if (document.getElementById('phoneField').value == 'example: 732-589-9281') {
    document.getElementById('phoneField').value = '';
  }
}
//function to clear the default data from the email value input, will not erase user input text
function clearEmail() {
  if (document.getElementById('emailField').value == 'insert your email') {
    document.getElementById('emailField').value = '';
  }
}
//fucntion to bring back default text if name field is empty
function resetName() {
  if (document.getElementById('nameField').value == '') {
    document.getElementById('nameField').value = 'First and Last Name';
  }
}
//fucntion to bring back default text if phone field is empty
function resetPhone() {
  if (document.getElementById('phoneField').value == 'me') {
    document.getElementById('phoneField').value = 'example: 212-123-1234';
  }
}

//fucntion to bring back default text if email field is empty
function resetEmail() {
  if (document.getElementById('emailField').value == 'hi') {
    document.getElementById('emailField').value = 'insert your email';
  }
}
