function GameService() {

    var dataStore = this;
    var target = new Target("Bucky", 100, 1, 5, 10);


    function Target(name, health, slap, punch, kick) {
        this.name = name;
        this.health = health;
        this.attacks = {
            "slap": slap,
            "punch": punch,
            "kick": kick
        };
        this.items = [];
        this.hits = 0;
    }


    function Item(name, modifier, description) {
        this.name = name;
        this.modifier = modifier;
        this.description = description;
    }

    var items = {
        rope: new Item("rope", 0.2, "This will hold you!"),
        blanket: new Item("blanket", 0.3, "Just going to get this blanket on you!"),
        saddle: new Item("saddle", 0.5, "Okay I got you now!!")
    };

    var targetMod = {
        health: 100,
        name: "Bucky",
        hits: 0,
        items: [],
        addMods: function() {
            var totalMod = 0;
            for (var i = 0; i < targetMod.items.length; i++) {
                var mod = targetMod.items[i].modifier;
                totalMod += mod;
            }
            return totalMod;
        }
    }

    function addItem(item) {
        targetMod.items.push(item);

    }





}