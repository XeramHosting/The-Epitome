onEvent("recipes", event => {
    //Creative activation crystal
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABBBCDDDA",
            "EFGHIHGFJ",
            "EGKLKLKGJ",
            "EMNOPWNMJ",
            "CIKPQPKIC",
            "RMNXPYNMS",
            "RTKLKLKTS",
            "RFTHIHTFS",
            "AUUUCVVVA",
        ],
        key: {
            A: {
                item: "bloodmagic:bloodlightsigil",
            },
            B: {
                item: "bloodmagic:chargingrune",
            },
            C: {
                item: "bloodmagic:sigilofholding",
            },
            D: {
                item: "bloodmagic:selfsacrificerune",
            },
            E: {
                item: "bloodmagic:accelerationrune",
            },
            F: {
                item: "bloodmagic:airsigil",
            },
            G: {
                item: "bloodmagic:demonslate",
            },
            H: {
                item: "bloodmagic:voidsigil",
            },
            I: {
                item: "bloodmagic:watersigil",
            },
            J: {
                item: "bloodmagic:altarcapacityrune",
            },
            K: {
                item: "bloodmagic:life_essence_bucket",
            },
            L: {
                item: "bloodmagic:reinforcedslate",
            },
            M: {
                item: "bloodmagic:lavasigil",
            },
            N: {
                item: "bloodmagic:blankslate",
            },
            O: {
                item: "mysticalagradditions:creative_essence",
            },
            P: {
                item: "bloodmagic:activationcrystalweak",
            },
            Q: {
                item: "extendedcrafting:ultimate_singularity",
            },
            R: {
                item: "bloodmagic:sacrificerune",
            },
            S: {
                item: "bloodmagic:bettercapacityrune",
            },
            T: {
                item: "bloodmagic:infusedslate",
            },
            U: {
                item: "bloodmagic:speedrune",
            },
            V: {
                item: "bloodmagic:dislocationrune",
            },
            W: {
                item: "extendedcrafting:the_ultimate_ingot",
            },
            X: {
                item: "botania:creative_pool",
            },
            Y: {
                item: "kubejs:ultimate_honeycomb",
            },
        },
        result: {
            item: "bloodmagic:activationcrystalcreative",
        },
    });

    //Creative Element Container
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "IIII JJJJ",
            "I       J",
            "I FF GG J",
            "I FA1BG J",
            "   345   ",
            "K HC2DE L",
            "K HH EE L",
            "K       L",
            "KKKK LLLL",
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
                item: "elementalcraft:reservoir_water",
            },
            B: {
                item: "elementalcraft:reservoir_earth",
            },
            C: {
                item: "elementalcraft:reservoir_air",
            },
            D: {
                item: "elementalcraft:reservoir_fire",
            },
            E: {
                item: "elementalcraft:pristine_fire_gem",
            },
            F: {
                item: "elementalcraft:pristine_water_gem",
            },
            G: {
                item: "elementalcraft:pristine_earth_gem",
            },
            H: {
                item: "elementalcraft:pristine_air_gem",
            },
            I: {
                item: "elementalcraft:watercrystal",
            },
            J: {
                item: "elementalcraft:earthcrystal",
            },
            K: {
                item: "elementalcraft:aircrystal",
            },
            L: {
                item: "elementalcraft:firecrystal",
            },
        },
        result: {
            item: "elementalcraft:tank_creative",
            count: 4,
        },
    });

    //Creative Source Jar
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "IIII JJJJ",
            "I   M   J",
            "I FF GG J",
            "I FA1BG J",
            " N 345 O ",
            "K HC2DE L",
            "K HH EE L",
            "K   P   L",
            "KKKK LLLL",
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
                item: "ars_nouveau:carbuncle_shards",
            },
            B: {
                item: "ars_nouveau:sylph_shards",
            },
            C: {
                item: "ars_nouveau:wixie_shards",
            },
            D: {
                item: "ars_nouveau:drygmy_shard",
            },
            E: {
                item: "minecraft:clay_ball",
            },
            F: {
                item: "ars_nouveau:magic_clay",
            },
            G: {
                item: "ars_nouveau:marvelous_clay",
            },
            H: {
                item: "ars_nouveau:mythical_clay",
            },
            I: {
                item: "ars_nouveau:blue_archwood_sapling",
            },
            J: {
                item: "ars_nouveau:green_archwood_sapling",
            },
            K: {
                item: "ars_nouveau:purple_archwood_sapling",
            },
            L: {
                item: "ars_nouveau:red_archwood_sapling",
            },
            M: {
            type: "forge:nbt",
            item: "extendedcrafting:singularity",
            nbt: {
                Id: "extendedcrafting:cascadingarchwood",
              }
            },
            N: {
            type: "forge:nbt",
            item: "extendedcrafting:singularity",
            nbt: {
                Id: "extendedcrafting:flourishingarchwood",
              }
            },
            O: {
            type: "forge:nbt",
            item: "extendedcrafting:singularity",
            nbt: {
                Id: "extendedcrafting:vexingarchwood",
              }
            },
            P: {
            type: "forge:nbt",
            item: "extendedcrafting:singularity",
            nbt: {
                Id: "extendedcrafting:blazingarchwood",
              }
            },
        },
        result: {
            item: "ars_nouveau:creative_mana_jar",
        },
    });

    //Creative Mana Battery
        event.recipes.extendedcrafting.shaped_table({
            pattern: [
              "ABCDEFG",
              "HIIJIIK",
              "LIQ5QIO",
              "PJ687JR",
              "SIQ9QIT",
              "UIIJIIV",
              "WXYZ123",
            ],
            key: {
              5: {
                  item: "extendedcrafting:the_ultimate_ingot",
              },
              6: {
                  item: "botania:creative_pool",
              },
              7: {
                  item: "kubejs:ultimate_honeycomb",
              },
              8: {
                  item: "extendedcrafting:ultimate_singularity",
              },
              9: {
                  item: "mysticalagradditions:creative_essence",
              },
              A: {
                item: "botania:rune_winter"
              },
              B: {
                item: "botania:rune_mana"
              },
              C: {
                item: "botania:rune_lust"
              },
              D: {
                item: "botania:rune_gluttony"
              },
              E: {
                item: "botania:rune_greed"
              },
              F: {
                item: "botania:rune_sloth"
              },
              G: {
                item: "botania:rune_wrath"
              },
              H: {
                item: "botania:rune_envy"
              },
              I: {
                item: "mythicbotany:alfsteel_block"
              },
              J: {
                item: "botania:fabulous_pool"
              },
              K: {
                item: "botania:rune_pride"
              },
              L: {
                item: "mythicbotany:alfheim_rune"
              },
              O: {
                item: "mythicbotany:muspelheim_rune"
              },
              P: {
                item: "mythicbotany:asgard_rune"
              },
              Q: {
              type: "forge:nbt",
              item: "extendedcrafting:singularity",
              nbt: {
                  Id: "extendedcrafting:blackerlotus",
                }
              },
              R: {
                item: "mythicbotany:nidavellir_rune"
              },
              S: {
                item: "mythicbotany:helheim_rune"
              },
              T: {
                item: "botania:rune_fire"
              },
              U: {
                item: "botania:rune_earth"
              },
              V: {
                item: "botania:rune_air"
              },
              W: {
                item: "botania:rune_spring"
              },
              X: {
                item: "botania:rune_summer"
              },
              Y: {
                item: "botania:rune_autumn"
              },
              Z: {
                item: "mythicbotany:vanaheim_rune"
              },
              1: {
                item: "mythicbotany:niflheim_rune"
              },
              2: {
                item: "botania:rune_water"
              },
              3: {
                item: "mythicbotany:midgard_rune"
              }
            },
            result: {
              item: "botanicalmachinery:mana_battery_creative"
            }
          })
});