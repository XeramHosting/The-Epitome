onEvent("recipes", (event) => {
    modifyShaped(event, 'resourcefulbees:t1_apiary', 1, ['BCB', 'BAB', 'BCB'], {
      A: 'minecraft:nether_star',
      B: '#resourcefulbees:resourceful_honeycomb_block',
      C: 'resourcefulbees:t4_beehive',
    })
    
    modifyShaped(event, 'resourcefulbees:t1_beehive', 1, ['AAA', 'ABA', 'AAA'], {
      A: 'minecraft:grass',
      B: 'minecraft:beehive',
    })
    
    modifyShaped(event, 'resourcefulbees:t2_beehive', 1, ['BAB', 'ACA', 'BAB'], {
        A: 'resourcefulbees:wax',
        B: '#resourcefulbees:resourceful_honeycomb',
        C: 'resourcefulbees:t1_beehive',
      })
      
    modifyShaped(event, 'resourcefulbees:t3_beehive', 1, ['BAB', 'ACA', 'BAB'], {
        A: 'resourcefulbees:wax_block',
        B: '#resourcefulbees:resourceful_honeycomb_block',
        C: 'resourcefulbees:t2_beehive',
      })
      
    modifyShaped(event, 'resourcefulbees:t4_beehive', 1, ['BAB', 'ACA', 'BAB'], {
        A: 'resourcefulbees:wax_block',
        B: '#resourcefulbees:resourceful_honeycomb_block',
        C: 'resourcefulbees:t3_beehive',
      })

})