//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//SCRIPT FOR RETAGGING ITEMS
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('item.tags', event => {
//ITEMTAGS
	event.add('refinedstorage:silicon', 'emendatusenigmatica:silicon_gem')
	event.add('forge:ores/niter', 'emendatusenigmatica:potassium_nitrate_chunk')
	event.add('forge:stone', ['quark:deepslate'])
    event.add('forge:marble', 'bluepower:marble')
    event.add('forge:marble', '#chisel:marble')
	event.add('chisel:marble', ['astralsorcery:marble_raw', 'astralsorcery:marble_arch', 'astralsorcery:marble_bricks', 'astralsorcery:marble_chiseled', 'astralsorcery:marble_engraved', 'astralsorcery:marble_pillar', 'astralsorcery:marble_runed', 'enviromats:marble', 'quark:marble', 'bluepower:marble'])
    event.add('chisel:limestone', ['create:limestone', 'create:weathered_limestone', 'quark:limestone'])
    event.add('chisel:basalt', ['minecraft:basalt', 'minecraft:polished_basalt'])
    event.add('chisel:sandstone', ['minecraft:sandstone', 'minecraft:chiseled_sandstone', 'minecraft:cut_sandstone', 'minecraft:smooth_sandstone'])
    event.add('chisel:emerald', 'minecraft:emerald_block')
    event.add('chisel:redstone', 'minecraft:redstone_block')
    event.add('chisel:coal', 'minecraft:coal_block')
    event.add('chisel:charcoal', 'thermal:charcoal_block')
    event.add('chisel:end_stone', 'minecraft:end_stone')
    event.add('minecraft:logs_unstripped', '/^.+:(?!stripped_).+_log$/')
    event.add('forge:ores/arcane_brick', 'ars_nouveau:arcane_ore')
    event.add('forge:ores/dimensionalshard', ['rftoolsbase:dimensionalshard_overworld', 'rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_end'])
    event.add('forge:ores', ['#forge:ores/certus_quartz', '#forge:ores/oratchalcum', '#forge:ores/rat_gem', '#forge:ores/dimensionalshard', '#forge:ores/arcane_brick'])
    event.add('forge:plastic', ['mekanism:hdpe_sheet'])
    event.add('misctags:farmland/tier6', ['mysticalagradditions:insanium_farmland'])
    event.add('misctags:farmland/tier5', ['mysticalagriculture:supremium_farmland', '#misctags:farmland/tier6'])
    event.add('misctags:farmland/tier4', ['mysticalagriculture:imperium_farmland', '#misctags:farmland/tier5'])
    event.add('misctags:farmland/tier3', ['mysticalagriculture:tertium_farmland', '#misctags:farmland/tier4'])
    event.add('misctags:farmland/tier2', ['mysticalagriculture:prudentium_farmland', '#misctags:farmland/tier3'])
    event.add('misctags:farmland/tier1', ['mysticalagriculture:inferium_farmland', '#misctags:farmland/tier2'])
    event.add('misctags:biofuel2', ['#minecraft:saplings', '#minecraft:leaves', '#forge:seeds', 'minecraft:dried_kelp', 'minecraft:kelp', 'minecraft:seagrass', 'minecraft:grass'])
    event.add('misctags:biofuel4', ['#forge:fruits', 'minecraft:tall_grass', 'minecraft:nether_sprouts', 'minecraft:dried_kelp_block', 'minecraft:cactus', 'minecraft:sugar_cane', 'minecraft:weeping_vines', 'minecraft:twisting_vines', 'minecraft:vine', 'minecraft:melon_slice', 'byg:skyris_vine', 'byg:embur_gel_vines'])
    event.add('misctags:biofuel5', ['#forge:vegetables', '#forge:cookies', '#forge:flour_plants', '#forge:mushrooms', '#forge:mushroom_stems', '#minecraft:flowers', 'minecraft:lily_pad', 'minecraft:sea_pickle', 'minecraft:shroomlight', 'minecraft:large_fern', 'minecraft:fern', 'minecraft:crimson_roots', 'minecraft:warped_roots', 'minecraft:carved_pumpkin', 'minecraft:nether_wart', 'minecraft:cocoa_beans'])
    event.add('misctags:biofuel7', ['#minecraft:wart_blocks', '#forge:mushroom_caps', 'minecraft:baked_potato', 'minecraft:hay_block', '#forge:bread'])
    event.add('misctags:biofuel8', ['minecraft:cake', 'minecraft:pumpkin_pie'])
	event.add('forge:sand', ['byg:white_sand', 'byg:black_sand', 'byg:purple_sand', 'byg:blue_sand'])
	event.add('forge:storage_blocks', '#forge:storage_blocks/uraninite')
    event.add('forge:gems', '#forge:gems/dimensionalshard')
//
//fin
//
})