onEvent('recipes', (event) => {

  //Metal Unification
  function unifyMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
    event.replaceOutput(`#forge:ingots/${name}`, ingotItem)
    event.replaceOutput(`#forge:dusts/${name}`, dustItem)
    event.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
    event.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)

    event.remove({ input: `#forge:ores/${name}`, type: 'immersiveengineering:crusher' })
    event.remove({ input: `#forge:ingots/${name}`, type: 'immersiveengineering:crusher' })
    event.remove({ input: [`#forge:ores/${name}`, `#forge:dusts/${name}`], output: `#forge:ingots/${name}`, type: 'minecraft:smelting' })
    event.remove({ input: [`#forge:ores/${name}`, `#forge:dusts/${name}`], output: `#forge:ingots/${name}`, type: 'minecraft:blasting' })
    //event.remove({ id: `appliedenergistics2:grinder/${name}_dust_ingot` })

    event.recipes.minecraft.smelting(ingotItem, `#forge:dusts/${name}`).xp(0.5)
    event.recipes.minecraft.blasting(ingotItem, `#forge:dusts/${name}`).xp(0.5)
    //event.recipes.appliedenergistics2.grinder({ input: { tag: `forge:ingots/${name}` }, result: { primary: { item: dustItem } }, turns: 8 })
    event.recipes.immersiveengineering.crusher({ secondaries: [], result: { base_ingredient: { item: dustItem } }, input: { tag: `forge:ingots/${name}` }, energy: 3000 })

    if (!ingredient.of(`#forge:ores/${name}`).stacks.empty) {
      event.recipes.minecraft.smelting(ingotItem, `#forge:ores/${name}`).xp(1)
      event.recipes.minecraft.blasting(ingotItem, `#forge:ores/${name}`).xp(1)
      event.recipes.mekanism.enriching(item.of(dustItem, 2), `#forge:ores/${name}`).id(`emendatusenigmatica:mek_processing/${name}/dust/from_ore`)
      event.recipes.immersiveengineering.crusher({
        secondaries: [],
        result: { count: 2, base_ingredient: { item: dustItem } },
        input: { tag: `forge:ores/${name}` },
        energy: 3000
      })
      /**event.remove({ id: `appliedenergistics2:grinder/${name}_dust_ore` })
      event.recipes.appliedenergistics2.grinder({
        input: { tag: `forge:ores/${name}` },
        result: { primary: { item: dustItem, count: 2 } },
        turns: 8
      })**/
    }

    event.replaceInput(nuggetItem, `#forge:nuggets/${name}`)
    event.replaceInput(dustItem, `#forge:dusts/${name}`)
    event.replaceInput(ingotItem, `#forge:ingots/${name}`)
    event.replaceInput(blockItem, `#forge:storage_blocks/${name}`)
  }

  function unifyCraftMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
    event.replaceInput(nuggetItem, `#forge:nuggets/${name}`)
    event.replaceInput(dustItem, `#forge:dusts/${name}`)
    event.replaceInput(ingotItem, `#forge:ingots/${name}`)
    event.replaceInput(blockItem, `#forge:storage_blocks/${name}`)

    event.replaceOutput(`#forge:ingots/${name}`, ingotItem)
    event.replaceOutput(`#forge:dusts/${name}`, dustItem)
    event.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
    event.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)
  }

  //Vanilla MC
  unifyMetal('gold', 'minecraft:gold_ingot', 'emendatusenigmatica:gold_dust', 'minecraft:gold_block', 'minecraft:gold_nugget')
  unifyMetal('iron', 'minecraft:iron_ingot', 'emendatusenigmatica:iron_dust', 'minecraft:iron_block', 'minecraft:iron_nugget')

  //Multiple Mods
  unifyMetal('aluminum', 'emendatusenigmatica:aluminum_ingot', 'emendatusenigmatica:aluminum_dust', 'emendatusenigmatica:aluminum_block', 'emendatusenigmatica:aluminum_nugget')
  unifyMetal('copper', 'emendatusenigmatica:copper_ingot', 'emendatusenigmatica:copper_dust', 'emendatusenigmatica:copper_block', 'emendatusenigmatica:copper_nugget')
  unifyMetal('lead', 'emendatusenigmatica:lead_ingot', 'emendatusenigmatica:lead_dust', 'emendatusenigmatica:lead_block', 'emendatusenigmatica:lead_nugget')
  unifyMetal('nickel', 'emendatusenigmatica:nickel_ingot', 'emendatusenigmatica:nickel_dust', 'emendatusenigmatica:nickel_block', 'emendatusenigmatica:nickel_nugget')
  unifyMetal('platinum', 'silents_mechanisms:platinum_ingot', 'silents_mechanisms:platinum_dust', 'silents_mechanisms:platinum_block', 'silents_mechanisms:platinum_nugget')
  unifyMetal('silver', 'emendatusenigmatica:silver_ingot', 'emendatusenigmatica:silver_dust', 'emendatusenigmatica:silver_block', 'emendatusenigmatica:silver_nugget')
  unifyMetal('tin', 'emendatusenigmatica:tin_ingot', 'emendatusenigmatica:tin_dust', 'emendatusenigmatica:tin_block', 'emendatusenigmatica:tin_nugget')
  unifyMetal('uranium', 'emendatusenigmatica:uranium_ingot', 'emendatusenigmatica:uranium_dust', 'emendatusenigmatica:uranium_block', 'emendatusenigmatica:uranium_nugget')
  unifyMetal('zinc', 'emendatusenigmatica:zinc_ingot', 'emendatusenigmatica:zinc_dust', 'emendatusenigmatica:zinc_block', 'emendatusenigmatica:zinc_nugget')

  //Mekanism
  unifyMetal('osmium', 'emendatusenigmatica:osmium_ingot', 'emendatusenigmatica:osmium_dust', 'emendatusenigmatica:osmium_block', 'emendatusenigmatica:osmium_nugget')

  //Craft only metals
  unifyCraftMetal('steel', 'emendatusenigmatica:steel_ingot', 'emendatusenigmatica:steel_dust', 'emendatusenigmatica:steel_block', 'emendatusenigmatica:steel_nugget')
  unifyMetal('steel', 'emendatusenigmatica:steel_ingot', 'emendatusenigmatica:steel_dust', 'emendatusenigmatica:steel_block', 'emendatusenigmatica:steel_nugget')

  //Thermal
  unifyCraftMetal('bronze', 'emendatusenigmatica:bronze_ingot', 'emendatusenigmatica:bronze_dust', 'emendatusenigmatica:bronze_block', 'emendatusenigmatica:bronze_nugget')
  unifyCraftMetal('constantan', 'emendatusenigmatica:constantan_ingot', 'emendatusenigmatica:constantan_dust', 'emendatusenigmatica:constantan_block', 'emendatusenigmatica:constantan_nugget')
  unifyCraftMetal('electrum', 'emendatusenigmatica:electrum_ingot', 'emendatusenigmatica:electrum_dust', 'emendatusenigmatica:electrum_block', 'emendatusenigmatica:electrum_nugget')
  unifyCraftMetal('invar', 'emendatusenigmatica:invar_ingot', 'emendatusenigmatica:invar_dust', 'emendatusenigmatica:invar_block', 'emendatusenigmatica:invar_nugget')
  unifyCraftMetal('signalum', 'emendatusenigmatica:signalum_ingot', 'emendatusenigmatica:signalum_dust', 'emendatusenigmatica:signalum_block', 'emendatusenigmatica:signalum_nugget')
  unifyCraftMetal('lumium', 'emendatusenigmatica:lumium_ingot', 'emendatusenigmatica:lumium_dust', 'emendatusenigmatica:lumium_block', 'emendatusenigmatica:lumium_nugget')
  unifyCraftMetal('enderium', 'emendatusenigmatica:enderium_ingot', 'emendatusenigmatica:enderium_dust', 'emendatusenigmatica:enderium_block', 'emendatusenigmatica:enderium_nugget')
  unifyMetal('bronze', 'emendatusenigmatica:bronze_ingot', 'emendatusenigmatica:bronze_dust', 'emendatusenigmatica:bronze_block', 'emendatusenigmatica:bronze_nugget')
  unifyMetal('constantan', 'emendatusenigmatica:constantan_ingot', 'emendatusenigmatica:constantan_dust', 'emendatusenigmatica:constantan_block', 'emendatusenigmatica:constantan_nugget')
  unifyMetal('electrum', 'emendatusenigmatica:electrum_ingot', 'emendatusenigmatica:electrum_dust', 'emendatusenigmatica:electrum_block', 'emendatusenigmatica:electrum_nugget')
  unifyMetal('invar', 'emendatusenigmatica:invar_ingot', 'emendatusenigmatica:invar_dust', 'emendatusenigmatica:invar_block', 'emendatusenigmatica:invar_nugget')
  unifyMetal('signalum', 'emendatusenigmatica:signalum_ingot', 'emendatusenigmatica:signalum_dust', 'emendatusenigmatica:signalum_block', 'emendatusenigmatica:signalum_nugget')
  unifyMetal('lumium', 'emendatusenigmatica:lumium_ingot', 'emendatusenigmatica:lumium_dust', 'emendatusenigmatica:lumium_block', 'emendatusenigmatica:lumium_nugget')
  unifyMetal('enderium', 'emendatusenigmatica:enderium_ingot', 'emendatusenigmatica:enderium_dust', 'emendatusenigmatica:enderium_block', 'emendatusenigmatica:enderium_nugget')

  //Plate Unification
  function plateCasting(material, coolingTime, result) {
    let emendatusenigmatica = ['aluminum', 'copper', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc']
    let fluid = emendatusenigmatica.includes(material) ? { tag: `forge:molten_${material}`, amount: 144 } : { name: `tconstruct:molten_${material}`, amount: 144 }

    event.custom({
      type: 'tconstruct:casting_table',
      conditions: [
        {
          value: { tag: `forge:plates/${material}`, type: 'forge:tag_empty' },
          type: 'forge:not'
        }
      ],
      cast: { tag: 'tconstruct:casts/multi_use/plate' },
      fluid: fluid,
      result: { item: result },
      cooling_time: coolingTime
    }).id(`kubejs:smeltery/casting/metal/${material}/plate_gold_cast`)

    event.custom({
      type: 'tconstruct:casting_table',
      conditions: [
        {
          value: { tag: `forge:plates/${material}`, type: 'forge:tag_empty' },
          type: 'forge:not'
        }
      ],
      cast: { tag: 'tconstruct:casts/single_use/plate' },
      cast_consumed: true,
      fluid: fluid,
      result: { item: result },
      cooling_time: coolingTime
    }).id(`kubejs:smeltery/casting/metal/${material}/plate_sand_cast`)
  }

  function platePressing(material, result) {
    event.custom({
      type: 'immersiveengineering:metal_press',
      mold: { item: 'immersiveengineering:mold_plate' },
      result: { item: result },
      conditions: [
        {
          value: { tag: `forge:ingots/${material}`, type: 'forge:tag_empty' },
          type: 'forge:not'
        },
        {
          value: { tag: `forge:plates/${material}`, type: 'forge:tag_empty' },
          type: 'forge:not'
        }
      ],
      input: { tag: `forge:ingots/${material}` },
      energy: 2400
    }).id(`kubejs:metalpress/plate_${material}`)
  }

  function plateProcessing(types) {
    types.forEach(([material, coolingTime, result]) => {
      event.replaceInput(`thermal:${material}_plate`, `#forge:plates/${material}`)
      event.replaceInput(`immersiveengineering:plate_${material}`, `#forge:plates/${material}`)
      event.replaceInput(material === 'gold' ? `create:${material}en_sheet` : `create:${material}_sheet`, `#forge:plates/${material}`)

      result = result ? result : `thermal:${material}_plate`

      event.remove({ id: `immersiveengineering:crafting/plate_${material}_hammering` });
      event.shapeless(result, [`#forge:ingots/${material}`, '#misctags:immersive_engineering_hammer']).id(`kubejs:crafting/plate_${material}_hammering`);

      event.remove({ id: `create:pressing/${material}_ingot` })
      event.remove({ id: `createaddition:pressing/${material}_ingot` })
      event.recipes.create.pressing(result, `#forge:ingots/${material}`).id(`kubejs:pressing/${material}_ingot`)

      if (coolingTime !== null) {
        event.remove({ id: `tconstruct:smeltery/casting/metal/${material}/plate_gold_cast` })
        event.remove({ id: `tconstruct:smeltery/casting/metal/${material}/plate_sand_cast` })
        plateCasting(material, coolingTime, result)
      }

      event.remove({ id: `immersiveengineering:metalpress/plate_${material}` })
      platePressing(material, result)

      event.remove({ id: `thermal:machine/press/press_${material}_ingot_to_plate` })
      event.recipes.thermal.press(result, `#forge:ingots/${material}`).id(`kubejs:machine/press/press_${material}_ingot_to_plate`)
    })
  }

  plateProcessing([
    ['aluminum', 47, 'immersiveengineering:plate_aluminum'],
    ['steel', 50, 'immersiveengineering:plate_steel'],
    ['uranium', 50, 'immersiveengineering:plate_uranium'],
    ['iron', 60],
    ['gold', 57],
    ['copper', 50],
    ['tin', 39],
    ['lead', 43],
    ['silver', 60],
    ['nickel', 65],
    ['bronze', 57],
    ['electrum', 59],
    ['invar', 63],
    ['constantan', 64],
    ['signalum', 70],
    ['lumium', 70],
    ['enderium', 70],
    ['brass', 57, 'create:brass_sheet'],
  ])

  //Tinkers Unification
  function tinkerMelting(material, type, typeValues, temperature, time, byproduct) {
    let recipe = {
      type: 'tconstruct:melting',
      ingredient: { tag: `forge:${type}/${material}` },
      result: { fluid: `emendatusenigmatica:molten_${material}`, amount: typeValues.amount },
      temperature: temperature,
      time: time * typeValues.multiplier
    }
    event.custom(type != 'ores' ? recipe : Object.assign({ byproducts: byproduct }, recipe)).id(`kubejs:melting/${type}/${material}`)
  }

  function tinkerCreateCompat(material, temperature, time, molten_namespace) {
    event.custom({
      type: 'tconstruct:melting',
      ingredient: { item: `create:crushed_${material}_ore` },
      result: { fluid: `${molten_namespace}:molten_${material}`, amount: 144 },
      temperature: temperature,
      time: time * 29.4
    }).id(`kubejs:melting/crushed_ore/${material}`)
  }

  function tinkerAlloys(entries) {
    entries.forEach(([output, outputAmount, temperature, inputs]) => {
      event.remove({ id: `tconstruct:smeltery/alloys/molten_${output}` })
      event.custom({
        type: 'tconstruct:alloy',
        inputs: inputs,
        result: { fluid: `tconstruct:molten_${output}`, amount: outputAmount },
        temperature: temperature
      }).id(`kubejs:melting/alloys/${output}`)
    })
  }

  function unifyTinkers(entries) {
    let meltingTypes = ['block', 'can', 'coin', 'dust', 'gear', 'ingot', 'nugget', 'ore', 'plates', 'rod', 'sheetmetal']
    let meltingTypeValues = {
      storage_blocks: { amount: 1296, multiplier: 88.125 },
      dusts: { amount: 144, multiplier: 21.75 },
      gears: { amount: 576, multiplier: 58.8 },
      ingots: { amount: 144, multiplier: 29.4 },
      nuggets: { amount: 16, multiplier: 10.0 },
      ores: { amount: 288, multiplier: 44.1 },
      plates: { amount: 144, multiplier: 29.4 },
      rods: { amount: 72, multiplier: 5.88 },
      sheetmetals: { amount: 144, multiplier: 29.4 }
    }

    let meltingParts = ['broad_axe_head', 'broad_blade', 'hammer_head', 'large_plate', 'pickaxe_head', 'repair_kit', 'small_axe_head', 'small_blade', 'tool_binding', 'tool_handle', 'tough_handle']

    entries.forEach(([material, temperature, time, types, byproduct]) => {
      event.replaceInput(`tconstruct:${material}_ingot`, `#forge:ingots/${material}`)
      event.replaceInput(`tconstruct:${material}_block`, `#forge:storage_blocks/${material}`)
      event.replaceOutput(`tconstruct:${material}_ingot`, `emendatusenigmatica:${material}_ingot`)
      event.replaceOutput(`tconstruct:${material}_block`, `emendatusenigmatica:${material}_block`)

      tinkerCreateCompat(material, temperature, time, 'emendatusenigmatica');

      meltingTypes.forEach(meltingType => {
        event.remove({ id: `tconstruct:smeltery/melting/metal/${material}/${meltingType}` })
        for (let type in meltingTypeValues) if (types.includes(type)) tinkerMelting(material, type, meltingTypeValues[type], temperature, time, byproduct)
      })

      meltingParts.forEach(meltingPart => event.remove({ id: `tconstruct:tools/parts/melting/${meltingPart}/tconstruct/${material}` }))
    })
  }

  function tinkerAlloyMelting(entries) {
    entries.forEach(([input, outputItem, outputBlock, outputNugget]) => {
      event.remove({ id: `tconstruct:smeltery/casting/metal/${input}/block` })

      event.remove({ id: `tconstruct:smeltery/casting/metal/${input}/ingot_gold_cast` })
      event.remove({ id: `tconstruct:smeltery/casting/metal/${input}/ingot_sand_cast` })

      event.remove({ id: `tconstruct:smeltery/casting/metal/${input}/nugget_gold_cast` })
      event.remove({ id: `tconstruct:smeltery/casting/metal/${input}/nugget_sand_cast` })

      event.custom({
        type: 'tconstruct:casting_basin',
        fluid: { tag: `tconstruct:molten_${input}`, amount: 1296 },
        result: { item: `${outputBlock}` },
        cooling_time: 171
      }).id(`kubejs:smeltery/casting/metal/${input}/block`)

      event.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/multi_use/ingot' },
        fluid: { tag: `tconstruct:molten_${input}`, amount: 144 },
        result: { item: `${outputItem}` },
        cooling_time: 57
      }).id(`kubejs:smeltery/casting/metal/${input}/ingot_gold_cast`)

      event.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/single_use/ingot' },
        cast_consumed: true,
        fluid: { tag: `tconstruct:molten_${input}`, amount: 144 },
        result: { item: `${outputItem}` },
        cooling_time: 57
      }).id(`kubejs:smeltery/casting/metal/${input}/ingot_sand_cast`)

      event.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/multi_use/nugget' },
        fluid: { tag: `tconstruct:molten_${input}`, amount: 16 },
        result: { item: `${outputNugget}` },
        cooling_time: 19
      }).id(`kubejs:smeltery/casting/metal/${input}/nugget_gold_cast`)

      event.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/single_use/nugget' },
        cast_consumed: true,
        fluid: { tag: `tconstruct:molten_${input}`, amount: 16 },
        result: { item: `${outputNugget}` },
        cooling_time: 19
      }).id(`kubejs:smeltery/casting/metal/${input}/nugget_sand_cast`)
    })
  }

  tinkerAlloyMelting([
    ['bronze', 'emendatusenigmatica:bronze_ingot', 'emendatusenigmatica:bronze_block', 'emendatusenigmatica:bronze_nugget'],
    ['constantan', 'emendatusenigmatica:constantan_ingot', 'emendatusenigmatica:constantan_block', 'emendatusenigmatica:constantan_nugget'],
    ['electrum', 'emendatusenigmatica:electrum_ingot', 'emendatusenigmatica:electrum_block', 'emendatusenigmatica:electrum_nugget']
  ])

  unifyTinkers([
    [
      'aluminum',
      425,
      1.6,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores', 'plates', 'rods', 'sheetmetals'],
      [{ fluid: 'tconstruct:molten_iron', amount: 48 }]
    ],
    [
      'copper',
      500,
      1.7,
      ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
      [{ fluid: 'tconstruct:molten_gold', amount: 16 }]
    ],
    [
      'lead',
      330,
      1.4,
      ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
      [{ fluid: 'emendatusenigmatica:molten_silver', amount: 48 }]
    ],
    [
      'nickel',
      950,
      2.2,
      ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
      [{ fluid: 'emendatusenigmatica:molten_platinum', amount: 16 }]
    ],
    [
      'osmium',
      975,
      2.2,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
      [{ fluid: 'tconstruct:molten_iron', amount: 48 }]
    ],
    [
      'platinum',
      970,
      2.2,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
      [{ fluid: 'tconstruct:molten_gold', amount: 48 }]
    ],
    [
      'silver',
      790,
      2.0,
      ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
      [{ fluid: 'emendatusenigmatica:molten_lead', amount: 48 }]
    ],
    [
      'tin',
      225,
      1.3,
      ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates'],
      [{ fluid: 'emendatusenigmatica:molten_copper', amount: 48 }]
    ],
    [
      'uranium',
      830,
      2.0,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
      [{ fluid: 'emendatusenigmatica:molten_lead', amount: 48 }]
    ],
    [
      'zinc',
      420,
      1.6,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
      [{ fluid: 'emendatusenigmatica:molten_tin', amount: 48 }]
    ],
    [
      'invar',
      420,
      1.6,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
      [{ fluid: 'emendatusenigmatica:molten_invar', amount: 48 }]
    ],
    [
      'signalum',
      420,
      1.6,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
      [{ fluid: 'emendatusenigmatica:molten_signalum', amount: 48 }]
    ],
    [
      'enderium',
      420,
      1.6,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
      [{ fluid: 'emendatusenigmatica:molten_enderium', amount: 48 }]
    ],
    [
      'lumium',
      420,
      1.6,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
      [{ fluid: 'emendatusenigmatica:molten_lumium', amount: 48 }]
    ],
    [
      'steel',
      420,
      1.6,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
      [{ fluid: 'emendatusenigmatica:molten_steel', amount: 48 }]
    ]
  ])

  tinkerCreateCompat('iron', 800, 60, 'tconstruct');
  tinkerCreateCompat('gold', 700, 57, 'tconstruct');

  tinkerAlloys([
    [
      'brass', 288, 605, [
        { tag: 'forge:molten_copper', amount: 144 },
        { tag: 'forge:molten_zinc', amount: 144 }
      ]
    ],
    [
      'bronze', 576, 700, [
        { tag: 'forge:molten_copper', amount: 432 },
        { tag: 'forge:molten_tin', amount: 144 }
      ]
    ],
    [
      'constantan', 288, 920, [
        { tag: 'forge:molten_copper', amount: 144 },
        { tag: 'forge:molten_nickel', amount: 144 }
      ]
    ],
    [
      'electrum', 288, 760, [
        { tag: 'tconstruct:molten_gold', amount: 144 },
        { tag: 'forge:molten_silver', amount: 144 }
      ]
    ],
    [
      'hepatizon', 288, 1400, [
        { tag: 'forge:molten_copper', amount: 288 },
        { tag: 'tconstruct:molten_cobalt', amount: 144 },
        { tag: 'tconstruct:molten_obsidian', amount: 1000 }
      ]
    ],
    [
      'invar', 432, 900, [
        { tag: 'tconstruct:molten_iron', amount: 288 },
        { tag: 'forge:molten_nickel', amount: 144 }
      ]
    ],
    [
      'pewter', 288, 400, [
        { tag: 'tconstruct:molten_iron', amount: 144 },
        { tag: 'forge:molten_lead', amount: 144 }
      ]
    ],
    [
      'rose_gold', 576, 550, [
        { tag: 'forge:molten_copper', amount: 432 },
        { tag: 'tconstruct:molten_gold', amount: 144 }
      ]
    ],
    [
      'tinkers_bronze', 432, 700, [
        { tag: 'forge:molten_copper', amount: 432 },
        { tag: 'tconstruct:molten_glass', amount: 1000 }
      ]
    ]
  ])


  //event.replaceInput('appliedenergistics2:certus_quartz_dust', '#forge:dusts/certus_quartz')
  event.replaceInput('thermal:bitumen', '#forge:bitumen')
  event.replaceInput('immersivepetroleum:bitumen', '#forge:bitumen')
  //event.replaceInput('lazierae2:coal_dust', '#forge:dusts/coal')
  event.replaceInput('mekanism:dust_coal', '#forge:dusts/coal')
  event.replaceInput('iceandfire:sapphire', '#forge:gems/sapphire')
  event.replaceInput('iceandfire:sapphire_block', '#forge:storage_blocks/sapphire')
  event.replaceInput('minecraft:stick', '#forge:rods/wooden')
  event.replaceInput('thermal:coal_coke', '#forge:coal_coke')
  event.replaceInput('immersiveengineering:coal_coke', '#forge:coal_coke')

  event.replaceOutput('immersivepetroleum:bitumen', 'thermal:bitumen')
  //event.replaceOutput('lazierae2:coal_dust', 'mekanism:dust_coal')
  event.replaceOutput('iceandfire:sapphire_gem', 'projectred-core:sapphire')
  event.replaceOutput('iceandfire:sapphire_block', 'projectred-core:sapphire_block')
  event.replaceOutput('mekanism:sawdust', 'thermal:sawdust')
  event.replaceOutput('mekanism:dust_sulfur', 'thermal:sulfur_dust')
  event.replaceOutput('immersiveengineering:dust_sulfur', 'thermal:sulfur_dust')
  event.replaceOutput('mekanism:dust_quartz', 'thermal:quartz_dust')
  //event.replaceOutput('appliedenergistics2:nether_quartz_dust', 'thermal:quartz_dust')
  event.replaceOutput('thermal:coal_coke', 'immersiveengineering:coal_coke')
  event.replaceOutput('thermal:coal_coke_block', 'immersiveengineering:coke')
  event.replaceOutput('mekanism:dust_diamond', 'thermal:diamond_dust')
  event.remove({ id: 'thermal:storage/coal_coke_block' })
  
//
//SIGNALUM
	//Signalum ingot
	event.replaceOutput('silents_mechanisms:signalum_ingot', 'emendatusenigmatica:signalum_ingot')
	event.replaceOutput('thermal:signalum_ingot', 'emendatusenigmatica:signalum_ingot')
	event.replaceOutput('#forge:ingots/signalum', 'emendatusenigmatica:signalum_ingot')
	//Signalum block
	event.replaceOutput('silents_mechanisms:signalum_block', 'emendatusenigmatica:signalum_block')
	event.replaceOutput('thermal:signalum_block', 'emendatusenigmatica:signalum_block')
	event.replaceOutput('#forge:storage_blocks/signalum', 'emendatusenigmatica:signalum_block')
	//Signalum nugget
	event.replaceOutput('silents_mechanisms:signalum_nugget', 'emendatusenigmatica:signalum_nugget')
	event.replaceOutput('thermal:signalum_nugget', 'emendatusenigmatica:signalum_nugget')
	event.replaceOutput('#forge:nuggets/signalum', 'emendatusenigmatica:signalum_nugget')
	//Signalum dust
	event.replaceOutput('silents_mechanisms:signalum_dust', 'emendatusenigmatica:signalum_dust')
	event.replaceOutput('#forge:dusts/signalum', 'emendatusenigmatica:signalum_dust')
	//Signalum gear
	event.replaceOutput('thermal:signalum_gear', 'emendatusenigmatica:signalum_gear')
	event.replaceOutput('#forge:gears/signalum', 'emendatusenigmatica:signalum_gear')
	//Signalum plate
	event.replaceOutput('thermal:signalum_plate', 'emendatusenigmatica:signalum_plate')
	event.replaceOutput('#forge:plates/signalum', 'emendatusenigmatica:signalum_plate')

  // #region Honey
  let simpleHoneys = ['cofh_core:honey', 'cyclic:honey', 'create:honey']

  function cyclicHoneyMelter(entries) {
    entries.forEach(([input, honey, honeyAmount]) => {
      event.custom({
        type: 'cyclic:melter',
        inputFirst: { item: input },
        result: { fluid: honey, count: honeyAmount }
      }).id(`kubejs:melter/${input.substring(input.indexOf(':') + 1)}/0`)

      event.custom({
        type: 'cyclic:melter',
        inputFirst: { item: input },
        inputSecond: { item: input },
        result: { fluid: honey, count: honeyAmount * 2 }
      }).id(`kubejs:melter/${input.substring(input.indexOf(':') + 1)}/1`)
    })
  }

  function createHoneyMixing(entries) {
    entries.forEach(([output, amount, honey, inputs, id]) => {
      let honeyMixingRecipe = { type: 'create:mixing', results: [{ item: output, amount: amount }] }
      let honeyMixingInputs = [{ fluidTag: 'forge:honey', amount: honey }]

      inputs.forEach(([input, type]) => honeyMixingInputs.push(type == 0 ? { item: input } : { tag: input }))
      honeyMixingRecipe = Object.assign({ ingredients: honeyMixingInputs }, honeyMixingRecipe)
      event.custom(honeyMixingRecipe).id(
        id
          ? `kubejs:honey_mixing/${output.substring(output.indexOf(':') + 1)}/${id}`
          : `kubejs:honey_mixing/${output.substring(output.indexOf(':') + 1)}`
      )
    })
  }

  event.recipes.create.emptying(['minecraft:glass_bottle', Fluid.of('resourcefulbees:honey', 250)], 'minecraft:honey_bottle').id('kubejs:emptying/honey_bottle')

  simpleHoneys.forEach((honey, index) => {
    event.recipes.thermal.chiller('minecraft:honey_block', Fluid.of(honey, 1000)).id(`kubejs:thermal/chiller/honey_block/${index}`)
    event.recipes.thermal.bottler('minecraft:honey_bottle', [Fluid.of(honey, 250), 'minecraft:glass_bottle']).id(`kubejs:thermal/bottler/honey_bottle/${index}`)
  })

  cyclicHoneyMelter([
    ['minecraft:honey_bottle', 'resourcefulbees:honey', 250],
    ['minecraft:honey_block', 'resourcefulbees:honey', 1000]
  ])

  createHoneyMixing([
    [
      'minecraft:cookie', 16, 50, [
        ['minecraft:wheat', 0],
        ['minecraft:cocoa_beans', 0],
        ['minecraft:wheat', 0]
      ]
    ],
    [
      'minecraft:glistering_melon_slice', 2, 100, [
        ['minecraft:melon_slice', 0],
        ['forge:nuggets/gold', 1],
        ['minecraft:melon_slice', 0]
      ]
    ],
    [
      'minecraft:beehive', 3, 100, [
        ['forge:chests', 1],
        ['forge:rods/wooden', 1]
      ]
    ],
    [
      'cyclic:gem_amber', 1, 500, [
        ['minecraft:fire_charge', 0],
        ['forge:dusts/redstone', 1],
        ['minecraft:magma_block', 0]
      ]
    ],
    [
      'minecraft:honey_block', 1, 1000, [
        ['forge:rods/wooden', 1],
        ['forge:rods/wooden', 1],
        ['forge:rods/wooden', 1]
      ],
      1
    ],
    [
      'cyclic:apple_honey', 3, 300, [
        ['minecraft:apple', 0],
        ['minecraft:apple', 0],
        ['minecraft:apple', 0]
      ],
      1
    ],
    [
      'minecraft:pumpkin_pie', 1, 100, [
        ['minecraft:egg', 0],
        ['minecraft:pumpkin', 0],
        ['minecraft:egg', 0]
      ]
    ],
    [
      'minecraft:cake', 1, 500, [
        ['minecraft:egg', 0],
        ['minecraft:wheat', 0],
        ['minecraft:egg', 0]
      ]
    ],
    [
      'minecraft:golden_carrot', 2, 100, [
        ['minecraft:carrot', 0],
        ['forge:nuggets/gold', 1],
        ['minecraft:carrot', 0]
      ]
    ],
    [
      'minecraft:honey_bottle', 3, 750, [
        ['minecraft:glass_bottle', 0],
        ['minecraft:glass_bottle', 0],
        ['minecraft:glass_bottle', 0]
      ]
    ],
    ['cyclic:apple_honey', 1, 100, [['minecraft:apple', 0]], 2],
    ['minecraft:honey_block', 1, 1000, [['forge:rods/wooden', 1]], 2]
  ])

  //Creosote
  event.recipes.thermal.pyrolyzer([Fluid.of('immersiveengineering:creosote', 250), 'minecraft:charcoal'], '#minecraft:logs').id('kubejs:thermal/pyrolyzer/charcoal')
  event.recipes.thermal.pyrolyzer([Fluid.of('immersiveengineering:creosote', 5000), 'immersiveengineering:coke'], '#forge:storage_blocks/coal').id('kubejs:thermal/pyrolyzer/coke_block')
  event.recipes.thermal.pyrolyzer([Fluid.of('immersiveengineering:creosote', 250), 'immersiveengineering:coal_coke'], '#minecraft:coals').id('kubejs:thermal/pyrolyzer/coal_coke')

  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [{ tag: 'minecraft:planks' }],
    inputFluid: "{ FluidName: \"immersiveengineering:creosote\", Amount: 125 }",
    processingTime: 5,
    output: { item: 'immersiveengineering:treated_wood_horizontal' }
  }).id('kubejs:dissolution_chamber/immersiveengineering/treated_wood_horizontal')

  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [{ tag: 'minecraft:planks' }],
    inputFluid: "{ FluidName: \"thermal:creosote\", Amount: 125 }",
    processingTime: 5,
    output: { item: 'immersiveengineering:treated_wood_horizontal' }
  }).id('kubejs:dissolution_chamber/thermal/treated_wood_horizontal')
})
