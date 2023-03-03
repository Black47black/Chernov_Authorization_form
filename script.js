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
function date_time()
{
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

// function get_name_browser(){
//   var sUsrAg  = navigator.userAgent;
//   if (sUsrAg.indexOf("Trident") > -1)
//    return "Microsoft Internet Explorer";
//   if (sUsrAg.indexOf("Edge") > -1)
//     return "Microsoft Edge";
//   return 'Не определен';
//   }
var UsrAg = navigator.userAgent;

//The order matters here, and this may report false positives for unlisted browsers.

if (UsrAg.indexOf("Firefox") > -1) {
     sBrowser = "Mozilla Firefox";
     //"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
} else if (UsrAg.indexOf("Opera") > -1) {
     sBrowser = "Opera";
} else if (UsrAg.indexOf("Trident") > -1) {
     sBrowser = "Microsoft Internet Explorer";
     //"Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
} else if (UsrAg.indexOf("Edge") > -1) {
     sBrowser = "Microsoft Edge";
     //"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
} else if (UsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome or Chromium";
    //"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
} else if (UsrAg.indexOf("Safari") > -1) {
    sBrowser = "Apple Safari";
    //"Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
} else {
    sBrowser = "unknown";
}
  
if (sBrowser == 'Microsoft Edge' || sBrowser == 'Microsoft Internet Explorer') {
    alert('Вы пользуетесь не тем браузером');
} else {
    alert('Браузер что надо!');
}