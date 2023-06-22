//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//MYSTICAL AGRICULTURE RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
	event.remove({id: 'mysticalagriculture:essence/common/silicon'})
	event.remove({id: 'mysticalagriculture:essence/thermal/enderium_ingot'})
	event.remove({id: 'mysticalagriculture:essence/thermal/lumium_ingot'})
	event.remove({id: 'mysticalagriculture:essence/thermal/signalum_ingot'})

	function essenceLine(result, count, name) {
		event.shaped(item.of(result, count), ['   ', 'AAA', '   '], { A: `mysticalagriculture:${name}_essence` }).id(`kubejs:mysticalagriculture/${name}_essence_crafting`)
	  }

	essenceLine('minecraft:phantom_membrane', 4, 'phantom')
	essenceLine('emendatusenigmatica:silicon_gem', 8, 'silicon')

	function essenceCircle(result, count, name) {
		event.shaped(item.of(result, count), ['AAA', 'A A', 'AAA'], { A: `mysticalagriculture:${name}_essence` }).id(`kubejs:mysticalagriculture/${name}_essence_crafting`)
	  }

	essenceCircle('emendatusenigmatica:enderium_ingot', 2, 'enderium')
	essenceCircle('emendatusenigmatica:lumium_ingot', 4, 'lumium')
	essenceCircle('emendatusenigmatica:signalum_ingot', 4, 'signalum')
//
//fin
//
})