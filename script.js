(function () {
  'use strict';
  var forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();


var TEST_LOGIN = 'user123';
var TEST_PASSWORD = '123456';

var loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    loginForm.classList.add('was-validated');

    if (!loginForm.checkValidity()) {
      return;
    }

    var login = document.getElementById('loginInput').value.trim();
    var password = document.getElementById('passwordInput').value.trim();
    var errorBox = document.getElementById('loginError');

    if (login === TEST_LOGIN && password === TEST_PASSWORD) {
      window.location.href = 'requests.html';
    } else {
      errorBox.classList.remove('d-none');
      errorBox.textContent = 'Неверный логин или пароль. Попробуйте ещё раз.';
    }
  });
}

var ADMIN_LOGIN = 'Admin';
var ADMIN_PASSWORD = 'KorokNET';

var adminForm = document.getElementById('adminLoginForm');
if (adminForm) {
  adminForm.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    adminForm.classList.add('was-validated');

    if (!adminForm.checkValidity()) {
      return;
    }

    var login = document.getElementById('adminLoginInput').value.trim();
    var password = document.getElementById('adminPasswordInput').value.trim();
    var errorBox = document.getElementById('adminLoginError');

    if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
      document.getElementById('adminLoginBlock').classList.add('d-none');
      document.getElementById('adminPanelBlock').classList.remove('d-none');
    } else {
      errorBox.classList.remove('d-none');
      errorBox.textContent = 'Неверный логин или пароль администратора.';
    }
  });
}

var statusSelects = document.querySelectorAll('.status-select');
statusSelects.forEach(function (select) {
  select.addEventListener('change', function () {
    var badge = document.querySelector('#' + select.dataset.badgeTarget);
    if (!badge) return;

    badge.classList.remove('status-new', 'status-progress', 'status-done');

    if (select.value === 'new') {
      badge.textContent = 'Новая';
      badge.classList.add('status-new');
    } else if (select.value === 'progress') {
      badge.textContent = 'Идёт обучение';
      badge.classList.add('status-progress');
    } else {
      badge.textContent = 'Обучение завершено';
      badge.classList.add('status-done');
    }
  });
});

var newRequestForm = document.getElementById('newRequestForm');
if (newRequestForm) {
  newRequestForm.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    newRequestForm.classList.add('was-validated');

    if (!newRequestForm.checkValidity()) {
      return;
    }

    document.getElementById('requestSuccess').classList.remove('d-none');
    newRequestForm.reset();
    newRequestForm.classList.remove('was-validated');
  });
}

var payRadios = document.querySelectorAll('input[name="payMethod"]');
var phoneBlock = document.getElementById('phoneBlock');
if (payRadios.length && phoneBlock) {
  payRadios.forEach(function (radio) {
    radio.addEventListener('change', function () {
      if (document.getElementById('payTransfer').checked) {
        phoneBlock.classList.remove('d-none');
      } else {
        phoneBlock.classList.add('d-none');
      }
    });
  });
}

var reviewForm = document.getElementById('reviewForm');
if (reviewForm) {
  reviewForm.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('reviewSuccess').classList.remove('d-none');
    reviewForm.reset();
  });
}
