//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//IMMERSIVE ENGINEERING RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
	//REMOVE THE GRIT! ch= chance, co = count, en = energy, iEn = Energy for ingots, aT = Arc furnace time, aE = arc furnace energy.
	let ImmersiveComp = (material, sMaterial, co, en, iEn, aT, aE, removeRecipe, createIngot, arcFurnace) => {
		event.custom({ //THIS IS FOR CHUNK TO DUST
			type: 'immersiveengineering:crusher',
			secondaries: [{
				chance: 0.1,
				output: {
					item: `emendatusenigmatica:${sMaterial}_dust`
				}
			}],
			result: {
				count: co,
				base_ingredient: {
					item: `emendatusenigmatica:${material}_dust`
				}
			},
			input: {
				tag: `forge:ores/${material}`
			},
			energy: en
		}).id(`AVSP:immersiveengineering/crusher/chunks/${material}`)

	if (removeRecipe) {
		event.remove({id: `immersiveengineering:crusher/ore_${material}`})
		event.remove({id: `immersiveengineering:crusher/ingot_${material}`})
		event.remove({id: `immersiveengineering:arcfurnace/dust_${material}`})

	if (createIngot) {
		event.custom({ //THIS IS FOR INGOT TO DUST
			type: 'immersiveengineering:crusher',
			secondaries: [],
			result: {
				count: 1,
				base_ingredient: {
					item: `emendatusenigmatica:${material}_dust`
				}
			},
			input: {
				tag: `forge:ingots/${material}`
			},
			energy: iEn
		}).id(`AVSP:immersiveengineering/crusher/ingots/${material}`)

	if (arcFurnace) {
		event.custom({
			type: 'immersiveengineering:arc_furnace',
			results: [
			{
				item: `emendatusenigmatica:${material}_ingot`
			}],
			additives: [],
			input: {
				tag: `forge:dusts/${material}`
			},
			time: aT,
			energy: aE
		}).id(`AVSP:immersiveengineering/arcfurnace/ingots/${material}`)
	}}}}

//
//Here we list the materials.

	ImmersiveComp('copper', 'gold', 2, 6000, 3000, 100, 51200, true, true, true)
	ImmersiveComp('aluminum', 'iron', 2, 6000, 3000, 100, 51200, true, true, true)
	ImmersiveComp('lead', 'silver', 2, 6000, 3000, 100, 51200, true, true, true)
	ImmersiveComp('silver', 'lead', 2, 6000, 3000, 100, 51200, true, true, true)
	ImmersiveComp('nickel', 'osmium', 2, 6000, 3000, 100, 51200, true, true, true)
	ImmersiveComp('uranium', 'lead', 2, 6000, 3000, 100, 51200, true, true, true)

//Vanilla materials
	let ImmersiveVanillaComp = (material, sMaterial, co, en, iEn, aT, aE, removeRecipe, createIngot, createGem, arcFurnace) => {
		event.custom({ //THIS IS FOR CHUNK TO DUST
			type: 'immersiveengineering:crusher',
			secondaries: [{
				chance: 0.1,
				output: {
					item: `emendatusenigmatica:${sMaterial}_dust`
				}
			}],
			result: {
				count: co,
				base_ingredient: {
					item: `emendatusenigmatica:${material}_dust`
				}
			},
			input: {
				tag: `forge:ores/${material}`
			},
			energy: en
		}).id(`AVSP:immersiveengineering/crusher/chunks/${material}`)

	if (removeRecipe) {
		event.remove({id: `immersiveengineering:crusher/ore_${material}`})
		event.remove({id: `immersiveengineering:crusher/ingot_${material}`})
		event.remove({id: `immersiveengineering:arcfurnace/dust_${material}`})

	if (createIngot) {
		event.custom({ //THIS IS FOR INGOT TO DUST
			type: 'immersiveengineering:crusher',
			secondaries: [],
			result: {
				count: 1,
				base_ingredient: {
					item: `emendatusenigmatica:${material}_dust`
				}
			},
			input: {
				tag: `forge:ingots/${material}`
			},
			energy: iEn
		}).id(`AVSP:immersiveengineering/crusher/ingots/${material}`)

	if (createGem) {
		event.custom({ //THIS IS FOR INGOT TO DUST
			type: 'immersiveengineering:crusher',
			secondaries: [],
			result: {
				count: 1,
				base_ingredient: {
					item: `emendatusenigmatica:${material}_dust`
				}
			},
			input: {
				tag: `forge:gems/${material}`
			},
			energy: iEn
		}).id(`AVSP:immersiveengineering/crusher/gems/${material}`)

	if (arcFurnace) {
		event.custom({
			type: 'immersiveengineering:arc_furnace',
			results: [
			{
				item: `minecraft:${material}`
			}],
			additives: [],
			input: {
				tag: `forge:dusts/${material}`
			},
			time: aT,
			energy: aE
		}).id(`AVSP:immersiveengineering/arcfurnace/ingots/${material}`)
	}}}}}

	ImmersiveVanillaComp('gold', 'copper', 2, 6000, 3000, 100, 51200, true, true, false, true)
	ImmersiveVanillaComp('iron', 'aluminum', 2, 6000, 3000, 100, 51200, true, true, false, true)
	ImmersiveVanillaComp('coal', 'coal', 2, 6000, 3000, 100, 51200, true, false, true, false)
	ImmersiveVanillaComp('diamond', 'diamond', 2, 6000, 3000, 100, 51200, true, false, true, false)
	ImmersiveVanillaComp('emerald', 'emerald', 2, 6000, 3000, 100, 51200, true, false, true, false)
	ImmersiveVanillaComp('lapis', 'lapis', 6, 6000, 3000, 100, 51200, true, false, true, false)
	ImmersiveVanillaComp('fluorite', 'fluorite', 6, 6000, 3000, 100, 51200, true, false, true, false)
	ImmersiveVanillaComp('cinnabar', 'cinnabar', 2, 6000, 3000, 100, 51200, true, false, true, false)
	ImmersiveVanillaComp('apatite', 'apatite', 10, 6000, 3000, 100, 51200, true, false, true, false)
	ImmersiveVanillaComp('sulfur', 'sulfur', 6, 6000, 3000, 100, 51200, true, false, true, false)
	ImmersiveVanillaComp('potassium_nitrate', 'potassium_nitrate', 6, 6000, 3000, 100, 51200, true, false, true, false)

	let moddedAlloy = (material, iEn, aT, aE, removeRecipe, arcFurnace) => {
		event.custom({ //THIS IS FOR INGOT TO DUST
			type: 'immersiveengineering:crusher',
			secondaries: [],
			result: {
				count: 1,
				base_ingredient: {
					item: `emendatusenigmatica:${material}_dust`
				}
			},
			input: {
				tag: `forge:ingots/${material}`
			},
			energy: iEn
		}).id(`AVSP:immersiveengineering/crusher/ingots/${material}`)

	if (removeRecipe) {
		event.remove({id: `immersiveengineering:crusher/ingot_${material}`})
		event.remove({id: `immersiveengineering:arcfurnace/dust_${material}`})

	if (arcFurnace) {
		event.custom({
			type: 'immersiveengineering:arc_furnace',
			results: [
			{
				item: `emendatusenigmatica:${material}_ingot`
			}],
			additives: [],
			input: {
				tag: `forge:dusts/${material}`
			},
			time: aT,
			energy: aE
		}).id(`AVSP:immersiveengineering/arcfurnace/ingots/${material}`)
	}}}

	moddedAlloy('bronze', 3000, 100, 51200, true, true)
	moddedAlloy('brass', 3000, 100, 51200, true, true)
	moddedAlloy('electrum', 3000, 100, 51200, true, true)
	moddedAlloy('constantan', 3000, 100, 51200, true, true)
	moddedAlloy('steel', 3000, 100, 51200, true, true)
	moddedAlloy('invar', 3000, 100, 51200, true, true)
	moddedAlloy('lumium', 3000, 100, 51200, true, true)
	moddedAlloy('signalum', 3000, 100, 51200, true, true)
	moddedAlloy('enderium', 3000, 100, 51200, true, true)

	//Redstone being redstone
		event.remove({id: `immersiveengineering:crusher/ore_redstone`})
		event.custom({ //THIS IS FOR CHUNK TO DUST
			type: 'immersiveengineering:crusher',
			secondaries: [{
				chance: 0.1,
				output: {
					item: `minecraft:redstone`
				}
			}],
			result: {
				count: 6,
				base_ingredient: {
					item: `minecraft:redstone`
				}
			},
			input: {
				tag: `forge:ores/redstone`
			},
			energy: 6000
		}).id(`AVSP:immersiveengineering/crusher/chunks/redstone`)

		//Cluster support
/*	let immersiveCluster = (material, count) => {
		event.custom({
			type: 'immersiveengineering:crusher',
			secondaries: [],
			result: {
				count: count,
				base_ingredient: {
					item: `emendatusenigmatica:${material}_dust`
				}
			},
			input: {
				tag: `forge:ingots/${material}`
			},
			energy: 100
		}).id(`AVSP:immersiveengineering/crusher/ingots/${material}`)}

	immersiveCluster()*/


	//THIS IS NOT REALLY EMENDATUS ENIGMATICA, BUT WE REALISE SOME PEOPLE MIGHT WANT THIS.
	event.replaceInput({}, 'immersiveengineering:slag', '#forge:slag')
	//this is emendatus enigmatica.
	event.replaceInput({}, 'immersiveengineering:coal_coke', '#forge:gems/coal_coke')
	event.replaceInput({}, '#forge:coal_coke', '#forge:gems/coal_coke')

	//REMOVAL OF DUST FROM SHAPED CRAFTING.
	//If you want to keep this feature. Just comment out this entire section.
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_osmium'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_silver'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_cobalt'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_uranium'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_aluminum'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_iron'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_gold'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_copper'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_zinc'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_nickel'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_lead'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_tin'})

//
//fin
//
})