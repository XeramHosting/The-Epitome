onEvent("recipes", event => {
    energize(event, ["kubejs:mystian_blossom"], "storagedrawers:creative_vending_upgrade", 2147483647)

    

    //Mystian Blossom
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "kubejs:mystian_blossom",
        },
        catalyst: {
            item: "storagedrawers:creative_storage_upgrade",
        },
        total_energy: 2147483647,
        tier: "CHAOTIC",
        ingredients: [
            {
                item: "mekanism:creative_chemical_tank",
            },
            {
                item: "mekanism:creative_fluid_tank",
            },
            {
                item: "mekanism:creative_energy_cube",
            },
            {
                item: "draconicevolution:creative_capacitor",
            },
            {
                item: "woot:creative_conatus",
            },
            {
                item: "pneumaticcraft:creative_compressed_iron_block",
            },
            {
                item: "extradisks:infinite_storage_disk",
            },
            {
                item: "extradisks:infinite_fluid_storage_disk",
            },
            {
                item: "bloodmagic:activationcrystalcreative",
            },
            {
                item: "elementalcraft:tank_creative",
            },
            {
                item: "ars_nouveau:creative_mana_jar",
            },
            {
                item: "botanicalmachinery:mana_battery_creative",
            },
            {
                item: "botania:creative_pool",
            },
            {
                item: "mysticalagradditions:creative_essence",
            },
            {
                item: "kubejs:ultimate_honeycomb",
            },
            {
                item: "kubejs:ultimate_honeycomb",
            },
            {
                item: "extendedcrafting:ultimate_singularity",
            },
            {
                item: "extendedcrafting:ultimate_singularity",
            },
            {
                item: "extendedcrafting:the_ultimate_ingot",
            },
            {
                item: "extendedcrafting:the_ultimate_ingot",
            },
        ],
    });
});