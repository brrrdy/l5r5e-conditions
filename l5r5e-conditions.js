const L5RStatusIcons = (() => {
  const defineStatusIcons = function (data) {
    console.log('Well hello there!' + data);
  }

  Hooks.once("ready", function () {
    defineStatusIcons();
  });
})();