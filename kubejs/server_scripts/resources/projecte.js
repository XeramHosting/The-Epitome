onEvent("recipes", (event) => {
    modifyShaped(event, 'projecte:alchemical_chest', 1, ['ABC', 'DED', 'FGF'], {
      A: 'projecte:low_covalence_dust',
      B: 'projecte:medium_covalence_dust',
      C: 'projecte:high_covalence_dust',
      D: '#forge:stone',
      E: 'projecte:philosophers_stone',
      F: '#forge:ingots/iron',
      G: '#forge:chests/wooden',
    })

})