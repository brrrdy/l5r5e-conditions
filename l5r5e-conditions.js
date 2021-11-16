const L5RConditionIcons = (() => {
  const loadConditionIcons = function (data) {
    console.log('Well hello there!' + data);
  }

  Hooks.once("ready", function () {
    loadConditionIcons();
  });
})();