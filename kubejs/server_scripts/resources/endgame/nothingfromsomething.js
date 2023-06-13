onEvent("recipes", event => {
    //Creative Fluid Tank -
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABCBCBCBA",
            "BCDCECDCB",
            "CDFBGBFDC",
            "BCBHKMBCB",
            "CEGILIGEC",
            "BCBNKOBCB",
            "CJFBGBFJC",
            "BCJCECJCB",
            "ABCBCBCBA",
        ],
        key: {
            A: {
                item: "mekanism:dynamic_tank",
            },
            B: {
                item: "mekanism:alloy_atomic",
            },
            C: {
                item: "extendedcrafting:the_ultimate_ingot",
            },
            D: {
                item: "mob_grinding_utils:tank",
            },
            E: {
                item: "mob_grinding_utils:jumbo_tank",
            },
            F: {
                item: "industrialforegoing:supreme_black_hole_tank",
            },
            G: {
                item: "enderstorage:ender_tank",
            },
            H: {
                item: "ars_nouveau:creative_mana_jar",
            },
            I: {
                item: "mekanism:ultimate_fluid_tank",
            },
            J: {
                item: "tconstruct:seared_ingot_gauge",
            },
            K: {
                item: "extendedcrafting:ultimate_singularity",
            },
            L: {
                item: "mekanism:basic_fluid_tank",
            },
            M: {
                item: "botanicalmachinery:mana_battery_creative",
            },
            N: {
                item: "elementalcraft:tank_creative",
            },
            O: {
                item: "bloodmagic:activationcrystalcreative",
            },
        },
        result: {
            item: "mekanism:creative_fluid_tank",
        },
    });

    //Creative Gas Tank -
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABABABABA",
            "BABABABAB",
            "ABDBABEBA",
            "BAB1D2BAB",
            "ABAEFGABA",
            "BAB3H4BAB",
            "ABHBABGBA",
            "BABABABAB",
            "ABABABABA",
        ],
        key: {
            A: {
                item: "mekanism:alloy_atomic",
            },
            B: {
                item: "mekanism:ingot_osmium",
            },
            1: {
                item: "ars_nouveau:creative_mana_jar",
            },
            2: {
                item: "botanicalmachinery:mana_battery_creative",
            },
            3: {
                item: "elementalcraft:tank_creative",
            },
            4: {
                item: "bloodmagic:activationcrystalcreative",
            },
            D: {
                type: "nbt_ingredient_predicate:nbt_includes",
                item: "mekanism:ultimate_chemical_tank",
                count: 1,
                nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{gasName:"mekanism:ethene",amount:512000L}}]}}',
            },
            E: {
                type: "nbt_ingredient_predicate:nbt_includes",
                item: "mekanism:ultimate_chemical_tank",
                count: 1,
                nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{gasName:"mekanismgenerators:fusion_fuel",amount:512000L}}]}}',
            },
            F: {
                item: "extendedcrafting:ultimate_singularity",
            },
            G: {
                type: "nbt_ingredient_predicate:nbt_includes",
                item: "mekanism:ultimate_chemical_tank",
                count: 1,
                nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{gasName:"mekanism:nutritional_paste",amount:512000L}}]}}',
            },
            H: {
                type: "nbt_ingredient_predicate:nbt_includes",
                item: "mekanism:ultimate_chemical_tank",
                count: 1,
                nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{gasName:"mekanism:uranium_hexafluoride",amount:512000L}}]}}',
            },
        },
        result: {
            item: "mekanism:creative_chemical_tank",
        },
    });

});