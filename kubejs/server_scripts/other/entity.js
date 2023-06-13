// priority: 100
onEvent("entity.death", (event) => {
    if (event.entity.type != "minecraft:player" && Utils.random.nextDouble() < 0.25) {
        const entity = event.world.createEntity("item");
        entity.item = "emendatusenigmatica:mob_soul";
        entity.setPosition(event.entity.x, event.entity.y, event.entity.z);
        entity.spawn();
    }
});
