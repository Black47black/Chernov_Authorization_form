//проверка валидности
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

  if (password)

  if (password.lenght < 6) {
    showError('Пароль меньше 6 символов');
    return;
  }

  // if (login !== "piu@piu.piu") {
  //   showError('Логин не найден');
  //   return;
  // }

  // if (password !== "1234567890") {
  //   showError('Не правильный пароль');
  //   return;
  // }

  hideError();
  alert('Добро пожаловть!');
}); 

function zeroFirstFormat(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}

//установка даты 
function date_time() {
    var current_datetime = new Date();
    var day = zeroFirstFormat(current_datetime.getDate());
    var month = zeroFirstFormat(current_datetime.getMonth()+1);
    var year = current_datetime.getFullYear();
    var hours = zeroFirstFormat(current_datetime.getHours());
    var minutes = zeroFirstFormat(current_datetime.getMinutes());
    var seconds = zeroFirstFormat(current_datetime.getSeconds());
    var days = [
      'воскресенье',
      'понедельник',
      'вторник',
      'среда',
      'четверг',
      'пятница',
      'суббота'
    ];
    var d = new Date();
    var n = d.getDay();
    var Ddays= days[n];
    return Ddays+": "+day+"."+month+"."+year+" || время:"+hours+":"+minutes+":"+seconds;
}

//установка часов
document.getElementById('date_clock').innerHTML = date_time();

setInterval(function () {
  document.getElementById('date_clock').innerHTML = date_time();
}, 1000);

// проверка на браузеры 

var UsrAg = navigator.userAgent;

if (UsrAg.indexOf("Firefox") > -1) {
  browser = "Mozilla Firefox";
} else if (UsrAg.indexOf("Opera") > -1) {
  browser = "Opera";
} else if (UsrAg.indexOf("Trident") > -1) {
  browser = "Microsoft Internet Explorer";
} else if (UsrAg.indexOf("Edge") > -1) {
  browser = "Microsoft Edge";
} else if (UsrAg.indexOf("Chrome") > -1) {
  browser = "Google Chrome or Chromium";
} else if (UsrAg.indexOf("Safari") > -1) {
  browser = "Apple Safari";
} else {
  browser = "unknown";
}
  
if (browser == 'Microsoft Edge' || browser == 'Microsoft Internet Explorer') {
    alert('Вы пользуетесь не тем браузером');
} else {
    alert('Браузер что надо!');
}