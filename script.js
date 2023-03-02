
var form = document.getElementById("form");

var phonenumberRegex = /^(\+7|8)(\()?\d{3}(\))?\d{7}$/g;
var emailRegex = /^\w+([.-]?w+)*@\w+([.-]?w+)*(.\w{2,3})+$/g;

var showError = function(text) {
  var error = document.getElementById("error");
  error.innerText = text;
  error.style.display = 'block';
};

var hideError = function() {
  var error = document.getElementById("error");
  error.innerText = '';
  error.style.display = 'none';
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  var login = form.login.value;
  var password = form.password.value;

  var checkPhone = phonenumberRegex.test(login);
  var checkEmail = emailRegex.test(login);

  if (!(checkPhone || checkEmail)) {
    showError('Невалидный логин');
    return;
  }

  if (password.lenght < 6) {
    showError('Невалидный пароль');
    return;
  }

  if (login !== "piu@piu.piu") {
    showError('Логин не найден');
    return;
  }

  if (password !== "1234567890") {
    showError('Не правильный пароль');
    return;
  }

  hideError();
  alert('Добро пожаловть!');
}); 
