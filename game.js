var health = 100;

function slap() {
    health = health - 1;
    alert(health);
}
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
    }
    healthWire.innerHTML = health;
    hitsWire.innerHTML = hits;

}

function slap() {
    if (health > 0) {
        health = health - 1;
        hits++;
        update();
    }
}

function punch() {
    if (health > 0) {
        health = health - 5;
        hits++;
        update();
    }
}


function kick() {
    if (health > 0) {
        health = health - 10;
        hits++;
        update();
    }
}

var Item = function(name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}

var items = {
    rope: new Item("rope", 0.2, "This will hold you!"),
    blanket: new Item("blanket", 0.2, "Just going to get this blanket on you!"),
    saddle: new Item("saddle", 0.5, "Okay I got you now!!")
}

var target = {
    health: 100,
    name: "Bucky",
    hits: 0,
    items: [items.rope],
    addMods: function() {
        var totalMod = 0;
        for (var i = 0; i < target.items.length; i++) {
            var mod = target.items[i].modifier;
        }
        return totalMod;
    }
}



update();
nameWire.innerHTML = name;