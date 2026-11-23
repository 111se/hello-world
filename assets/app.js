(function () {
  var greetings = [
    "Hello, World!",
    "你好，世界！",
    "Bonjour le monde !",
    "こんにちは、世界！",
    "Hola, mundo!",
    "你好，世界！"
  ];

  var titleEl = document.getElementById("title");
  var btn = document.getElementById("greet");
  var clockEl = document.getElementById("clock");
  var idx = 0;

  if (btn && titleEl) {
    btn.addEventListener("click", function () {
      idx = (idx + 1) % greetings.length;
      titleEl.textContent = greetings[idx];
    });
  }

  function tick() {
    if (!clockEl) return;
    var now = new Date();
    var pad = function (n) { return n < 10 ? "0" + n : "" + n; };
    clockEl.textContent =
      now.getFullYear() + "-" + pad(now.getMonth() + 1) + "-" + pad(now.getDate()) +
      " " + pad(now.getHours()) + ":" + pad(now.getMinutes()) + ":" + pad(now.getSeconds());
  }

  tick();
  setInterval(tick, 1000);
})();
