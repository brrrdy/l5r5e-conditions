const L5RConditionIcons = (() => {
  const loadConditionIcons = function (data) {
    console.log(game.i18n.localize('L5RCONDITION.Afflicted'));
  }

  Hooks.once("ready", function () {
    loadConditionIcons();
  });
})();