function GameController() {
    var dataStores = new GameService();
    var vm = this;
    var health = 100;
    var name = "Bucky";
    var hits = 0;
    var healthWire = document.getElementById("health");
    var hitsWire = document.getElementById("hits");
    var nameWire = document.getElementById("name");
    var itemsWire = document.getElementById("items");

    function myFunction() {
        document.getElementById("reset").reset();


        function update() {
            if (health < 0) {
                health = 0;
            }

            healthWire.innerHTML = health;
            hitsWire.innerHTML = hits;

        }

        function Item(name, modifier, description) {
            this.name = name;
            this.modifier = modifier;
            this.description = description;
        }
        this.items = {
            rope: new Item("rope", 0.2, "This will hold you!"),
            blanket: new Item("blanket", 0.3, "Just going to get this blanket on you!"),
            saddle: new Item("saddle", 0.5, "Okay I got you now!!")
        };
        this.targetMod = {
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

        };

        function hit(value) {
            var modValue = this.targetMod.addMods();

            if (health > 0) {
                value = value - modValue;
                health = (health - value).toFixed(2);
                hits++;
                update();
            }
        }
        nameWire.innerHTML = this.targetMod.name;
        update();

        $(".btn").click(function(e) {

            var id = e.target.id;
            console.log(id);
            switch (id) {
                case "slap":
                    hit(1);
                    break;
                case "punch":
                    hit(5);
                    break;
                case "kick":
                    hit(10);
                    break;
                case "rope":
                    break;
                case "blanket":
                    break;
                case "saddle":
                    break;
                default:
                    break;
            }

        });
    }
}