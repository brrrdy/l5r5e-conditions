const L5RConditionIcons = (() => {
  const loadConditionIcons = function (data) {
    console.log(L5RCONDITION.Afflicted);
  }

  Hooks.once("ready", function () {
    loadConditionIcons();
  });
})();