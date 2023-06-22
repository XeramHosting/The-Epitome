//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//REFINED STORAGE RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
	event.replaceInput({item: 'refinedstorage:silicon'}, '#forge:silicon')
	event.replaceOutput({}, 'refinedstorage:silicon', 'emendatusenigmatica:silicon_gem')
//
//fin
//
})