onEvent('recipes', (event) => {
    /*
    Note, max starlight is theoretical. In practice, assume roughly 95% as the max reasonable level

    Celestial Altar
    altar_type: 2
    max_starlight: 4000
    */
    const recipes = [
        /// Celestial Altar Recipes
        {
            output: Item.of('create:refined_radiance', 1),
            pattern: ['_____', '_BBB_', '_BAB_', '_BBB_', '_____'],
            key: {
                A: { item: 'create:chromatic_compound' },
                B: { item: 'astralsorcery:illumination_powder' }
            },
            altar_type: 2,
            duration: 400,
            starlight: 1000,
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:refined_radiance'
        },
        {
            output: Item.of('create:shadow_steel', 1),
            pattern: ['_____', '_BBB_', '_BAB_', '_BBB_', '_____'],
            key: {
                A: { item: 'create:chromatic_compound' },
                B: { item: 'astralsorcery:nocturnal_powder' }
            },
            altar_type: 2,
            duration: 400,
            starlight: 1000,
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:shadow_steel'
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'astralsorcery:altar',
            altar_type: recipe.altar_type,
            duration: recipe.duration,
            starlight: recipe.starlight,
            pattern: recipe.pattern,
            key: recipe.key,
            output: [recipe.output.toResultJson()],
            effects: recipe.effects
        };

        if (recipe.relay_inputs) {
            constructed_recipe.relay_inputs = recipe.relay_inputs;
        }
        if (recipe.focus_constellation) {
            constructed_recipe.focus_constellation = recipe.focus_constellation;
        }
        if (recipe.recipe_class) {
            constructed_recipe.recipe_class = recipe.recipe_class;
        }

        event.custom(constructed_recipe).id(recipe.id);
    });
});