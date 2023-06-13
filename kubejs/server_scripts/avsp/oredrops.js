//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//ORE DROP LOOT TABLE SCRIPT
//BY ANOKKA & NEEPNOOP / 2021
//
//Makes vanilla and modded ores drop Emendatus Enigmatica chunks and clusters
//

onEvent('block.loot_tables', event => {
	
//
//
//-----OVERWORLD-----
//
//
	//COAL
	//event.addSimpleBlock('#forge:ores/coal', 'emendatusenigmatica:coal_chunk')
	//IRON
    event.addBlock("#forge:ores/iron", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:iron_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:iron_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//GOLD
    event.addBlock("#forge:ores/gold", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:gold_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:gold_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//DIAMOND
	//event.addSimpleBlock('#forge:ores/diamond', 'emendatusenigmatica:diamond_chunk')
	//EMERALD
	//event.addSimpleBlock('#forge:ores/emerald', 'emendatusenigmatica:emerald_chunk')
	//LAPIS LAZULI
	//event.addSimpleBlock('#forge:ores/lapis', 'emendatusenigmatica:lapis_chunk')
	//REDSTONE
	//event.addSimpleBlock('#forge:ores/redstone', 'emendatusenigmatica:redstone_chunk')
	//COPPER
	event.addBlock("#forge:ores/copper", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:copper_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:copper_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//ALUMINUM
	event.addBlock("#forge:ores/aluminum", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:aluminum_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:aluminum_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//SILVER
	event.addBlock("#forge:ores/silver", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:silver_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:silver_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//LEAD
	event.addBlock("#forge:ores/lead", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:lead_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:lead_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//NICKEL
	event.addBlock("#forge:ores/nickel", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:nickel_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:nickel_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//URANIUM
	event.addBlock("#forge:ores/uranium", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:uranium_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:uranium_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//OSMIUM
	event.addBlock("#forge:ores/osmium", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:osmium_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:osmium_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//TIN
	event.addBlock("#forge:ores/tin", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:tin_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:tin_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//ZINC
	event.addBlock("#forge:ores/zinc", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:zinc_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:zinc_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	/**CERTUS QUARTZ
	//event.addSimpleBlock('#forge:ores/certus_quartz', 'emendatusenigmatica:certus_quartz_chunk')
	//CHARGED CERTUZ QUARTZ
	//event.addSimpleBlock('#forge:ores/charged_certus_quartz', 'emendatusenigmatica:charged_certus_quartz_chunk')
	//CERTUZ QUARTZ
	//CERTUZ QUARTZ
    event.addBlock("#forge:ores/certus_quartz", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:certus_quartz_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem("appliedenergistics2:certus_quartz_crystal")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//CHARGED CERTUS QUARTZ
    event.addBlock("#forge:ores/charged_certus_quartz", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:charged_certus_quartz_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem("appliedenergistics2:charged_certus_quartz_crystal")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })**/
	//FLUORITE
	//event.addSimpleBlock('#forge:ores/fluorite', 'emendatusenigmatica:fluorite_chunk')
	//CINNABAR
	//event.addSimpleBlock('#forge:ores/cinnabar', 'emendatusenigmatica:cinnabar_chunk')
	//APATITE
	//event.addSimpleBlock('#forge:ores/apatite', 'emendatusenigmatica:apatite_chunk')
	//SULFUR
	//event.addSimpleBlock('#forge:ores/sulfur', 'emendatusenigmatica:sulfur_chunk')
	//POTASSIUM NITRATE
	//event.addSimpleBlock('#forge:ores/potassium_nitrate', 'emendatusenigmatica:potassium_nitrate_chunk')
	//Yellorium
   	event.addSimpleBlock('#forge:ores/yellorite', 'bigreactors:yellorite_ore')
//
//
//-----NETHER ORES-----
//
//
	//COAL
    event.addBlock("emendatusenigmatica:coal_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:coal_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem("minecraft:coal")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//IRON
    	event.addBlock("emendatusenigmatica:iron_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:iron_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem("emendatusenigmatica:iron_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//GOLD
    event.addBlock("emendatusenigmatica:gold_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:gold_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem("emendatusenigmatica:gold_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//DIAMOND
    event.addBlock("emendatusenigmatica:diamond_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:diamond_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem("minecraft:diamond")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//EMERALD
    event.addBlock("emendatusenigmatica:emerald_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:emerald_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem("minecraft:emerald")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//LAPIS LAZULI
    event.addBlock("emendatusenigmatica:lapis_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:lapis_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(6, 7)
            pool.addItem("minecraft:lapis_lazuli")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//REDSTONE
    event.addBlock("emendatusenigmatica:redstone_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:redstone_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(5, 6)
            pool.addItem("minecraft:redstone")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//NETHER QUARTZ
    event.addBlock("emendatusenigmatica:quartz_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:quartz_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem("minecraft:quartz")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//COPPER
    event.addBlock("emendatusenigmatica:copper_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:copper_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem("emendatusenigmatica:copper_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//ALUMINUM
	event.addBlock("emendatusenigmatica:aluminum_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:aluminum_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem("emendatusenigmatica:aluminum_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//SILVER
    event.addBlock("emendatusenigmatica:silver_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:silver_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem("emendatusenigmatica:silver_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//LEAD
    event.addBlock("emendatusenigmatica:lead_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:lead_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem("emendatusenigmatica:lead_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//NICKEL
	event.addBlock("emendatusenigmatica:nickel_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:nickel_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem("emendatusenigmatica:nickel_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//URANIUM
	event.addBlock("emendatusenigmatica:uranium_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:uranium_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem("emendatusenigmatica:uranium_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//OSMIUM
	event.addBlock("emendatusenigmatica:osmium_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:osmium_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem("emendatusenigmatica:osmium_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//TIN
	event.addBlock("emendatusenigmatica:tin_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:tin_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem("emendatusenigmatica:tin_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//ZINC
	event.addBlock("emendatusenigmatica:zinc_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:zinc_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(1, 2)
            pool.addItem("emendatusenigmatica:zinc_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
    //COBALT
    event.addBlock("#forge:ores/cobalt", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:cobalt_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:cobalt_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
/*
	//CERTUZ QUARTZ
	event.addBlock('emendatusenigmatica:certus_quartz_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:certus_quartz_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:certus_quartz_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:certus_quartz_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:certus_quartz_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:certus_quartz_chunk'})
			})
		})
	//CHARGED CERTUS QUARTZ
	event.addBlock('emendatusenigmatica:charged_certus_quartz_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:charged_certus_quartz_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:charged_certus_quartz_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:charged_certus_quartz_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:charged_certus_quartz_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:charged_certus_quartz_chunk'})
			})
		})
*/
	//CERTUZ QUARTZ
    event.addBlock("emendatusenigmatica:certus_quartz_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:certus_quartz_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(3, 4)
            pool.addItem("appliedenergistics2:certus_quartz_crystal")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//CHARGED CERTUS QUARTZ
    event.addBlock("emendatusenigmatica:charged_certus_quartz_netherrack_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:charged_certus_quartz_netherrack_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(3, 4)
            pool.addItem("appliedenergistics2:charged_certus_quartz_crystal")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//FLUORITE
	//event.addBlock('emendatusenigmatica:fluorite_netherrack_ore', table => {
	//	table.addPool(pool => {
	//		pool.setUniformRolls(4, 5)
	//		pool.survivesExplosion()
	//		pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:fluorite_gem'})
	//		})
	//	})
	//event.addBlock('emendatusenigmatica:fluorite_soul_soil_ore', table => {
	//	table.addPool(pool => {
	//		pool.setUniformRolls(4, 5)
	//		pool.survivesExplosion()
	//		pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:fluorite_gem'})
	//		})
	//	})
	//event.addBlock('emendatusenigmatica:fluorite_nylium_soul_soil_ore', table => {
	//	table.addPool(pool => {
	//		pool.setUniformRolls(4, 5)
	//		pool.survivesExplosion()
	//		pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:fluorite_gem'})
	//		})
	//	})
	//CINNABAR
	//event.addBlock('emendatusenigmatica:cinnabar_netherrack_ore', table => {
	//	table.addPool(pool => {
	//		pool.setUniformRolls(2, 3)
	//		pool.survivesExplosion()
	//		pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:cinnabar_gem'})
	//		})
	//	})
	//event.addBlock('emendatusenigmatica:cinnabar_soul_soil_ore', table => {
	//	table.addPool(pool => {
	//		pool.setUniformRolls(2, 3)
	//		pool.survivesExplosion()
	//		pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:cinnabar_gem'})
	//		})
	//	})
	//event.addBlock('emendatusenigmatica:cinnabar_nylium_soul_soil_ore', table => {
	//	table.addPool(pool => {
	//		pool.setUniformRolls(2, 3)
	//		pool.survivesExplosion()
	//		pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:cinnabar_gem'})
	//		})
	//	})
	//APATITE
	//event.addBlock('emendatusenigmatica:apatite_netherrack_ore', table => {
	//	table.addPool(pool => {
	//		pool.setUniformRolls(9, 10)
	//		pool.survivesExplosion()
	//		pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:apatite_gem'})
	//		})
	//	})
	//event.addBlock('emendatusenigmatica:apatite_soul_soil_ore', table => {
	//	table.addPool(pool => {
	//		pool.setUniformRolls(9, 10)
	//		pool.survivesExplosion()
	//		pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:apatite_gem'})
	//		})
	//	})
	//event.addBlock('emendatusenigmatica:apatite_nylium_soul_soil_ore', table => {
	//	table.addPool(pool => {
	//		pool.setUniformRolls(9, 10)
	//		pool.survivesExplosion()
	//		pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:apatite_gem'})
	//		})
	//	})
	//SULFUR
	//event.addBlock('emendatusenigmatica:sulfur_netherrack_ore', table => {
	//	table.addPool(pool => {
	//		pool.setUniformRolls(5, 6)
	//		pool.survivesExplosion()
	//		pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:sulfur_gem'})
	//		})
	//	})
	//event.addBlock('emendatusenigmatica:sulfur_soul_soil_ore', table => {
	//	table.addPool(pool => {
	//		pool.setUniformRolls(5, 6)
	//		pool.survivesExplosion()
	//		pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:sulfur_gem'})
	//		})
	//	})
	//event.addBlock('emendatusenigmatica:sulfur_nylium_soul_soil_ore', table => {
	//	table.addPool(pool => {
	//		pool.setUniformRolls(5, 6)
	//		pool.survivesExplosion()
	//		pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:sulfur_gem'})
	//		})
	//	})
	//POTASSIUM NITRATE
	//event.addBlock('emendatusenigmatica:potassium_nitrate_netherrack_ore', table => {
	//	table.addPool(pool => {
	//		pool.setUniformRolls(4, 5)
	//		pool.survivesExplosion()
	//		pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:potassium_nitrate_gem'})
	//		})
	//	})
	//event.addBlock('emendatusenigmatica:potassium_nitrate_soul_soil_ore', table => {
	//	table.addPool(pool => {
	//		pool.setUniformRolls(4, 5)
	//		pool.survivesExplosion()
	//		pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:potassium_nitrate_gem'})
	//		})
	//	})
	//event.addBlock('emendatusenigmatica:potassium_nitrate_nylium_soul_soil_ore', table => {
	//	table.addPool(pool => {
	//		pool.setUniformRolls(4, 5)
	//		pool.survivesExplosion()
	//		pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:potassium_nitrate_gem'})
	//		})
	//	})
//
//
//-----END ORES-----
//
//
    //COAL
    event.addBlock("emendatusenigmatica:coal_end_stone_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:coal_end_stone_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(2, 3)
            pool.addItem("minecraft:coal")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//IRON
	event.addBlock("emendatusenigmatica:iron_end_stone_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:iron_end_stone_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(2, 3)
            pool.addItem("emendatusenigmatica:iron_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//GOLD
	event.addBlock("emendatusenigmatica:gold_end_stone_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:gold_end_stone_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(2, 3)
            pool.addItem("emendatusenigmatica:gold_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//DIAMOND
    event.addBlock("emendatusenigmatica:diamond_end_stone_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:diamond_end_stone_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(2, 3)
            pool.addItem("minecraft:diamond")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//EMERALD
    event.addBlock("emendatusenigmatica:emerald_end_stone_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:emerald_end_stone_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(2, 3)
            pool.addItem("minecraft:emerald")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//LAPIS
    event.addBlock("emendatusenigmatica:lapis_end_stone_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:lapis_end_stone_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(13, 14)
            pool.addItem("minecraft:lapis_lazuli")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//REDSTONE
    event.addBlock("emendatusenigmatica:redstone_end_stone_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:redstone_end_stone_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(10, 11)
            pool.addItem("minecraft:redstone")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//COPPER
	event.addBlock("emendatusenigmatica:copper_end_stone_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:copper_end_stone_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(2, 3)
            pool.addItem("emendatusenigmatica:copper_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//ALUMINUM
	event.addBlock("emendatusenigmatica:aluminum_end_stone_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:aluminum_end_stone_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(2, 3)
            pool.addItem("emendatusenigmatica:aluminum_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//SILVER
	event.addBlock("emendatusenigmatica:silver_end_stone_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:silver_end_stone_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(2, 3)
            pool.addItem("emendatusenigmatica:silver_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//LEAD
	event.addBlock("emendatusenigmatica:lead_end_stone_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:lead_end_stone_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(2, 3)
            pool.addItem("emendatusenigmatica:lead_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//NICKEL
	event.addBlock("emendatusenigmatica:nickel_end_stone_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:nickel_end_stone_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(2, 3)
            pool.addItem("emendatusenigmatica:nickel_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//URANIUM
	event.addBlock("emendatusenigmatica:uranium_end_stone_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:uranium_end_stone_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(2, 3)
            pool.addItem("emendatusenigmatica:uranium_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//OSMIUM
	event.addBlock("emendatusenigmatica:osmium_end_stone_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:osmium_end_stone_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(2, 3)
            pool.addItem("emendatusenigmatica:osmium_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//TIN
	event.addBlock("emendatusenigmatica:tin_end_stone_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:tin_end_stone_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(2, 3)
            pool.addItem("emendatusenigmatica:tin_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//ZINC
	event.addBlock("emendatusenigmatica:zinc_end_stone_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:zinc_end_stone_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(2, 3)
            pool.addItem("emendatusenigmatica:zinc_chunk")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//CERTUS QUARTZ
	//event.addSimpleBlock('emendatusenigmatica:certus_quartz_end_stone_ore', 'emendatusenigmatica:certus_quartz_cluster')
	//CHARGED CERTUS QUARTZ
	//event.addSimpleBlock('emendatusenigmatica:charged_certus_quartz_end_stone_ore', 'emendatusenigmatica:charged_certus_quartz_cluster')
	//CERTUZ QUARTZ
	event.addBlock("emendatusenigmatica:certus_quartz_end_stone_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:certus_quartz_end_stone_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(6, 8)
            pool.addItem("appliedenergistics2:certus_quartz_crystal")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//CHARGED CERTUS QUARTZ
	event.addBlock("emendatusenigmatica:charged_certus_quartz_end_stone_ore", table => {
        table.addPool(pool => {
            pool.addItem("emendatusenigmatica:charged_certus_quartz_end_stone_ore")
            pool.addCondition({
                condition: "minecraft:match_tool",
                predicate: {
                    enchantments: [
                        {
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }
                    ]
                }
            })
        })
        table.addPool(pool => {
            pool.setUniformRolls(6, 8)
            pool.addItem("appliedenergistics2:charged_certus_quartz_crystal")
            pool.addCondition({
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [{
                            enchantment: "minecraft:silk_touch",
                            levels: {min: 1}
                        }]
                    }
                }
            })
        })
    })
	//FLUORITE
	//event.addSimpleBlock('emendatusenigmatica:fluorite_end_stone_ore', 'emendatusenigmatica:fluorite_cluster')
	//CINNABAR
	//event.addSimpleBlock('emendatusenigmatica:cinnabar_end_stone_ore', 'emendatusenigmatica:cinnabar_cluster')
	//APATITE
	//event.addSimpleBlock('emendatusenigmatica:apatite_end_stone_ore', 'emendatusenigmatica:apatite_cluster')
	//SULFUR
	//event.addSimpleBlock('emendatusenigmatica:sulfur_end_stone_ore', 'emendatusenigmatica:sulfur_cluster')
	//POTASSIUM NITRATE
	//event.addSimpleBlock('emendatusenigmatica:potassium_nitrate_end_stone_ore', 'emendatusenigmatica:potassium_nitrate_cluster')
//
//fin
//
})