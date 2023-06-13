// priority: 99
onEvent("recipes", (event) => {
    // compression and decompression recipes
    for (let type in global.compressables) {
        let props = global.compressables[type];
        let maxLevel = props.maxLevel || global.maxCompress;
        for (let i = 1; i <= maxLevel; i++) {
            let sm = Ingredient.of(`#resource:${type}/${i - 1}x`);
            let lg = Ingredient.of(`#resource:${type}/${i}x`);

            event.shaped(lg, ["CCC", "CCC", "CCC"], {
                C: sm,
            });

            event.shapeless(Item.of(sm, 9), lg);
        }
    }

    //Remove all recipes for the following items
	event.remove({id: 'projecte:philosophers_stone'})
	event.remove({id: 'projecte:philosophers_stone_alt'})
    event.remove({ id: "ftbsluice:empowered_sluice" });
    event.remove({ id: "ftbsluice:blazing_mesh" });
    event.remove({ id: "ctiers:compressium/centrifuge_controller_tier_creative" });
    event.remove({ id: "ctiers:compressium/centrifuge_casing_tier_creative" });
    event.remove({ id: "rftoolsdim:dimension_builder" });
    event.remove({ id: "createsupercharged:motor" });

});


let energize = (event, ingredient, result, power, count) => {
    event.recipes.powah.energizing({
    ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
    energy: power,
    result: Item.of(result, count ? count : 1).toResultJson()
    }).id(`kubejs:energizing/${result.replace(':', '/')}`)
}


let modifyShaped = (event, result, count, pattern, ingredients) => {
  event.remove({ output: result, type: 'minecraft:crafting_shaped' })
  event.shaped(item.of(result, count), pattern, ingredients).id(`kubejs:shaped/${result.replace(':', '/')}`)
}
let modifyShapeless = (event, result, count, ingredients) => {
  event.remove({ output: result, type: 'minecraft:crafting_shapeless' })
  event.shapeless(item.of(result, count), ingredients).id(`kubejs:shapeless/${result.replace(':', '/')}`)
}