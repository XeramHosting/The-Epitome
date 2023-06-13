onEvent("recipes", event => {
    //Creative Energy Cube
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            type: "forge:nbt",
            item: "mekanism:creative_energy_cube",
            count: 1,
            nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}',
        },
        catalyst: {
            item: "draconicevolution:energy_core",
        },
        total_energy: 2147483647,
        tier: "CHAOTIC",
        ingredients: [
            {
                item: "pneumaticcraft:creative_compressed_iron_block",
            },
            {
                item: "mekanism:ultimate_induction_cell",
            },
            {
                item: "mekanism:ultimate_induction_provider",
            },
            {
                item: "mekanism:ultimate_induction_cell",
            },
            {
                item: "mekanism:ultimate_induction_provider",
            },
            {
                item: "extradisks:infinite_storage_disk",
            },
            {
                item: "extradisks:infinite_fluid_storage_disk",
            },
            {
                item: "draconicevolution:energy_core_stabilizer",
            },
            {
                item: "draconicevolution:energy_core_stabilizer",
            },
            {
                item: "draconicevolution:energy_core_stabilizer",
            },
            {
                item: "draconicevolution:energy_core_stabilizer",
            },
            {
            type: "forge:nbt",
            item: "extendedcrafting:singularity",
            nbt: {
                "Id": "extendedcrafting:uu_matter",
            	}
            },
            {
            type: "forge:nbt",
            item: "extendedcrafting:singularity",
            nbt: {
                "Id": "extendedcrafting:antimatter",
            	}
            },
            {
                item: "mekanism:pellet_polonium",
            },
            {
                item: "mekanism:pellet_polonium",
            },
            {
                item: "mekanism:ultimate_induction_provider",
            },
            {
                item: "mekanism:ultimate_induction_cell",
            },
            {
                item: "mekanism:ultimate_induction_provider",
            },
            {
                item: "mekanism:ultimate_induction_cell",
            },
            {
                item: "woot:creative_conatus",
            },
        ],
    });

    //Creative Capacitor -
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABBBBBBBA",
            "BABBHBBAB",
            "BBCDDDCBB",
            "BBDEFEDBB",
            "BIDFGFDJB",
            "BBDEFEDBB",
            "BBCDDDCBB",
            "BABBKBBAB",
            "ABBBBBBBA",
        ],
        key: {
            A: {
                item: "draconicevolution:awakened_draconium_block",
            },
            B: {
                item: "draconicevolution:infused_obsidian",
            },
            C: {
                item: "draconicevolution:chaotic_capacitor",
            },
            D: {
                item: "draconicevolution:chaotic_core",
            },
            E: {
                item: "draconicevolution:chaotic_crafting_injector",
            },
            F: {
                item: "draconicevolution:chaos_shard",
            },
            G: {
                item: "draconicevolution:reactor_core",
            },
            H: {
                item: "woot:creative_conatus",
            },
            I: {
                item: "extradisks:infinite_fluid_storage_disk",
            },
            J: {
                item: "extradisks:infinite_storage_disk",
            },
            K: {
                item: "pneumaticcraft:creative_compressed_iron_block",
            },
        },
        result: {
            item: "draconicevolution:creative_capacitor",
        },
    });

});