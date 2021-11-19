const L5RConditions = (() => {
  const loadConditions = function (data) {
    // replace current token status icons w/ l5r ones
    window.CONFIG.statusEffects = [
      {
        'id': 'stanceAir',
        'label': game.i18n.localize('L5RCONDITION.StanceAir'),
        'icon': 'systems/l5r5e/assets/icons/rings/air.svg'
      },
      {
        'id': 'stanceEarth',
        'label': game.i18n.localize('L5RCONDITION.StanceEarth'),
        'icon': 'systems/l5r5e/assets/icons/rings/earth.svg'
      },
      {
        'id': 'stanceFire',
        'label': game.i18n.localize('L5RCONDITION.StanceFire'),
        'icon': 'systems/l5r5e/assets/icons/rings/fire.svg'
      },
      {
        'id': 'stanceWater',
        'label': game.i18n.localize('L5RCONDITION.StanceWater'),
        'icon': 'systems/l5r5e/assets/icons/rings/water.svg'
      },
      {
        'id': 'stanceVoid',
        'label': game.i18n.localize('L5RCONDITION.StanceVoid'),
        'icon': 'systems/l5r5e/assets/icons/rings/void.svg'
      },
      {
        'id': 'afflicted',
        'label': game.i18n.localize('L5RCONDITION.Afflicted'),
        'icon': 'icons/svg/sun.svg'
      },
      {
        'id': 'bleeding',
        'label': game.i18n.localize('L5RCONDITION.Bleeding'),
        'icon': 'icons/svg/blood.svg'
      },
      {
        'id': 'burning',
        'label': game.i18n.localize('L5RCONDITION.Burning'),
        'icon': 'icons/svg/fire.svg'
      },
      {
        'id': 'compromised',
        'label': game.i18n.localize('L5RCONDITION.Compromised'),
        'icon': 'icons/svg/terror.svg'
      },
      {
        'id': 'dazed',
        'label': game.i18n.localize('L5RCONDITION.Dazed'),
        'icon': 'icons/svg/eye.svg'
      },
      {
        'id': 'disoriented',
        'label': game.i18n.localize('L5RCONDITION.Disoriented'),
        'icon': 'icons/svg/daze.svg'
      },
      {
        'id': 'dying',
        'label': game.i18n.localize('L5RCONDITION.Dying'),
        'icon': 'icons/svg/skull.svg'
      },
      {
        'id': 'enraged',
        'label': game.i18n.localize('L5RCONDITION.Enraged'),
        'icon': 'icons/svg/lightning.svg'
      },
      {
        'id': 'exhausted',
        'label': game.i18n.localize('L5RCONDITION.Exhausted'),
        'icon': 'icons/svg/sleep.svg'
      },
      {
        'id': 'immobilized',
        'label': game.i18n.localize('L5RCONDITION.Immobilized'),
        'icon': 'icons/svg/net.svg'
      },
      {
        'id': 'incapacitated',
        'label': game.i18n.localize('L5RCONDITION.Incapacitated'),
        'icon': 'icons/svg/downgrade.svg'
      },
      {
        'id': 'intoxicated',
        'label': game.i18n.localize('L5RCONDITION.Intoxicated'),
        'icon': 'icons/svg/poison.svg'
      },
      {
        'id': 'prone',
        'label': game.i18n.localize('L5RCONDITION.Prone'),
        'icon': 'icons/svg/falling.svg'
      },
      {
        'id': 'silenced',
        'label': game.i18n.localize('L5RCONDITION.Silenced'),
        'icon': 'icons/svg/silenced.svg'
      },
      {
        'id': 'unconscious',
        'label': game.i18n.localize('L5RCONDITION.Unconscious'),
        'icon': 'icons/svg/unconscious.svg'
      },
      {
        'id': 'wounded',
        'label': game.i18n.localize('L5RCONDITION.Wounded'),
        'icon': 'icons/svg/degen.svg'
      }
    ];
  }

  Hooks.once('ready', () => {
    loadConditions();
  });

  Hooks.once('renderTokenHUD', (tokenHUD, html) => {
    const renderedHud = document.querySelector('#token-hud .status-effects');
    console.log(renderedHud);
    renderedHud.classList.add('five-column-conditions');
  });
})();