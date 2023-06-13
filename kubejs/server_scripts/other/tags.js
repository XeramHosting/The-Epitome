// priority: 100
onEvent("item.tags", (event) => {

    // event.add("forge:ores", ["emendatusenigmatica:titanium_cluster", "emendatusenigmatica:aluminum_cluster"]);
    event.add("forge:dust", "ftbsluice:dust");

    // compressed stuff
    for (let type in global.compressables) {
        let props = global.compressables[type];
        let maxLevel = props.maxLevel || global.maxCompress;
        for (let i = 0; i <= maxLevel; i++) {
            let input = i > 0 ? `emendatusenigmatica:${i}x_compressed_${type}` : props.original;
            event.add(`resource:${type}/${i}x`, input);
        }
    }
});
