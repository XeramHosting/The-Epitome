onEvent("recipes", (event) => {
modifyShaped(event, 'powah:reactor_basic', 4, ['RCR', 'CDC', 'RCR'], {
    R: 'powah:reactor_starter',
    C: 'powah:capacitor_basic_large',
    D: 'powah:dielectric_casing'
  })
  modifyShaped(event, 'powah:reactor_hardened', 4, ['RCR', 'CDC', 'RCR'], {
    R: 'powah:reactor_basic',
    C: 'powah:capacitor_hardened',
    D: 'powah:dielectric_casing'
  })
  modifyShaped(event, 'powah:reactor_blazing', 4, ['RCR', 'CDC', 'RCR'], {
    R: 'powah:reactor_hardened',
    C: 'powah:capacitor_blazing',
    D: 'powah:dielectric_casing'
  })
  modifyShaped(event, 'powah:reactor_niotic', 4, ['RCR', 'CDC', 'RCR'], {
    R: 'powah:reactor_blazing',
    C: 'powah:capacitor_niotic',
    D: 'powah:dielectric_casing'
  })
  modifyShaped(event, 'powah:reactor_spirited', 4, ['RCR', 'CDC', 'RCR'], {
    R: 'powah:reactor_niotic',
    C: 'powah:capacitor_spirited',
    D: 'powah:dielectric_casing'
  })
  modifyShaped(event, 'powah:reactor_nitro', 4, ['RCR', 'CDC', 'RCR'], {
    R: 'powah:reactor_spirited',
    C: 'powah:capacitor_nitro',
    D: 'powah:dielectric_casing'
  })

  
  energize(event, ["create:chromatic_compound"], "createaddition:overcharged_alloy", 1000000)
})