const L5RConditions = (() => {
  const loadConditions = function (data) {
    window.CONFIG.statusEffects = [
      {
        'id': 'afflicted',
        'label': game.i18n.localize('L5RCONDITION.Afflicted'),
        'icon': 'icons/svg/sun.svg'
      }
    ]
  }

  Hooks.once('ready', function () {
    loadConditions();
  });
})();