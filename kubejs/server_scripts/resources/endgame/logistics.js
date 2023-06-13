onEvent("recipes", event => {
    //Creative Compressed Iron Block
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "IIIIIIIII",
            "IH     HI",
            "I FFKGG I",
            "I FA1BG I",
            "I K345K I",
            "I JC2DE I",
            "I JJKEE I",
            "IH     HI",
            "IIIIIIIII",
        ],
        key: {
            1: {
                item: "extendedcrafting:the_ultimate_ingot",
            },
            2: {
                item: "botania:creative_pool",
            },
            3: {
                item: "kubejs:ultimate_honeycomb",
            },
            4: {
                item: "extendedcrafting:ultimate_singularity",
            },
            5: {
                item: "mysticalagradditions:creative_essence",
            },
            A: {
                item: "pneumaticcraft:heat_sink",
            },
            B: {
                item: "pneumaticcraft:vortex_tube",
            },
            C: {
                item: "pneumaticcraft:vortex_tube",
            },
            D: {
                item: "pneumaticcraft:heat_sink",
            },
            E: {
                item: "mekanism:resistive_heater",
            },
            F: {
                item: "mekanism:fuelwood_heater",
            },
            G: {
                item: "immersiveengineering:furnace_heater",
            },
            H: {
                item: "mekanism:ultimate_thermodynamic_conductor",
            },
            I: {
                item: "pneumaticcraft:heat_pipe",
            },
            J: {
                item: "pneumaticcraft:compressed_iron_block",
            },
            K: {
                item: "pneumaticcraft:advanced_pcb",
            },
        },
        result: {
            item: "pneumaticcraft:creative_compressed_iron_block",
        },
    });

    //Creative Conatus Tank
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "         ",
            " C     C ",
            "  B   B  ",
            "   A1A   ",
            "   345   ",
            "   A2A   ",
            "  B   B  ",
            " C     C ",
            "         ",
        ],
        key: {
            1: {
                item: "extendedcrafting:the_ultimate_ingot",
            },
            2: {
                item: "botania:creative_pool",
            },
            3: {
                item: "kubejs:ultimate_honeycomb",
            },
            4: {
                item: "extendedcrafting:ultimate_singularity",
            },
            5: {
                item: "mysticalagradditions:creative_essence",
            },
            A: {
            type: "forge:nbt",
            item: "extendedcrafting:singularity",
            nbt: {
                Id: "extendedcrafting:stygian",
              }
            },
            B: {
                item: "woot:cell_4",
            },
            C: {
                item: "woot:cap_d",
            },
        },
        result: {
            item: "woot:creative_conatus",
        },
    });

});