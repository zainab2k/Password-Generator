document.getElementById('generate').addEventListener('click', function() {
    var length = parseInt(document.getElementById('length').value);
    var useUppercase = document.getElementById('uppercase').checked;
    var useLowercase = document.getElementById('lowercase').checked;
    var useNumbers = document.getElementById('numbers').checked;
    var useSymbols = document.getElementById('symbols').checked;
  
    var password = generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols);
    document.getElementById('password').value = password;
  });
  
  document.getElementById('copy').addEventListener('click', function() {
    var passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard');
  });
  
  function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    var charset = '';
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    
    var password = '';
    for (var i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
  }
  