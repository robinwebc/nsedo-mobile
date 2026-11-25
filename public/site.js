(function () {
  var KEY = 'nsedo-lang';

  function current() {
    return document.documentElement.lang === 'bn' ? 'bn' : 'en';
  }

  function apply(next) {
    var value = next === 'bn' ? 'bn' : 'en';
    document.documentElement.lang = value;
    try {
      localStorage.setItem(KEY, value);
    } catch (err) {}
    var buttons = document.querySelectorAll('[data-set-lang]');
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      button.setAttribute('aria-pressed', button.getAttribute('data-set-lang') === value ? 'true' : 'false');
    }
  }

  apply(current());

  document.addEventListener('click', function (event) {
    var target = event.target;
    if (!target || !target.closest) return;
    var button = target.closest('[data-set-lang]');
    if (!button) return;
    apply(button.getAttribute('data-set-lang'));
  });

  var form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (typeof form.reportValidity === 'function' && !form.reportValidity()) return;
    var data = new FormData(form);
    var topic = String(data.get('topic') || 'General');
    var lines = [
      'Name: ' + String(data.get('name') || ''),
      'Email: ' + String(data.get('email') || ''),
      'Phone: ' + String(data.get('phone') || ''),
      '',
      String(data.get('message') || ''),
    ];
    window.location.href =
      'mailto:robinwebc@gmail.com?subject=' +
      encodeURIComponent('nSedo Mobile — ' + topic) +
      '&body=' +
      encodeURIComponent(lines.join('\n'));
  });
})();
