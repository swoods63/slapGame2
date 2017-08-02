var health = 100;
var name = "Bucky";
var hits = 0;
var healthWire = document.getElementById("health");
var hitsWire = document.getElementById("hits");
var nameWire = document.getElementById("name");
var itemsWire = document.getElementById("items");

function update() {
    if (health < 0) {
        health = 0;
    };
    healthWire.innerHTML = health;
    hitsWire.innerHTML = hits;

};
var hitValue = {
    punch: 5,
    kick: 10,
    slap: 1
};


function hit(value, mod) {
    var modValue = mod();

    if (health > 0) {
        value = value - modValue;
        health = health - value;
        hits++;
        update();
    };
};

var Item = function(name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
};

var items = {
    rope: new Item("rope", 0.2, "This will hold you!"),
    blanket: new Item("blanket", 0.3, "Just going to get this blanket on you!"),
    saddle: new Item("saddle", 0.5, "Okay I got you now!!")
}

var target = {
    health: 100,
    name: "Bucky",
    hits: 0,
    items: [],
    addMods: function() {
        var totalMod = 0;
        for (var i = 0; i < target.items.length; i++) {
            var mod = target.items[i].modifier;
            totalMod += mod;
        }
        return totalMod;
    }
}

function addItem(item) {
    target.items.push(item);

}

update();
nameWire.innerHTML = name;