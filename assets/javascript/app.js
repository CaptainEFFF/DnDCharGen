var playerCount = 0

var generator = NameGen.compile("sV'i");

function Hero(heroName,heroClass,background,race,alignment,strength,dexterity,constitution,intelligence,wisdom,charisma){
    this.heroName = heroName;
    this.heroClass = heroClass;
    this.background = background;
    this.race = race;
    this.alignment = alignment;
    this.strenght = strength;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.intelligence = intelligence;
    this.wisdom = wisdom;
    this.charisma = charisma;
}


var classes = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard"
]

var backgrounds = [
    "Acolyte",
    "Antrhopologist",
    "Archaologist",
    "Azorius Functionary",
    "Baros Legionnaire",
    "Charlatan",
    "Investigator",
    "Clan Crafter",
    "Courtier",
    "Spy",
    "Dimir Operative",
    "Entertainer",
    "Faction Agent",
    "Far Traveler",
    "Fisher",
    "Folk Hero",
    "Gladiator",
    "Guild Artisan",
    "Haunted One",
    "Hermit",
    "Inhertiror",
    "Izzet Engineer",
    "Knight",
    "Knight of the Order",
    "Marine",
    "Mercenary Veteran",
    "Noble",
    "Outlander",
    "Pirate",
    "Rakdos Cutlist",
    "Sage",
    "Sailor",
    "Shipwright",
    "Smuggler",
    "Soldier",
    "Urban Bounty Hunter",
    "Urchin"


]

var races = [
    "Dragonborn",
    "Dwarf",
    "Elf",
    "Gnome",
    "Half-Elf",
    "Halfling",
    "Half-Orc",
    "Human",
    "Teifling",
    "Aarakorca",
    "Genasi",
    "Goliath",
    "Aasimar",
    "Bugbear",
    "Firbolg",
    "Goblin",
    "Hobgoblin",
    "Kenku",
    "Kobold",
    "Lizardfolk",
    "Orc",
    "Tabaxi",
    "Triton",
    "Yuan-Ti",
    "Feral Teifling",
    "Tortle",
    "Gith",
    "Changeling",
    "Kalashtar",
    "Shifter",
    "Warforged",
    "Centaur",
    "Loxodon",
    "Minitaur",
    "Simic Hybrid",
    "Vedalken"

]

var alignments = [
    "Lawful Good",
    "Lawful Neutral",
    "Lawful Evil",
    "Chaotic Good",
    "Chaotic Neutral",
    "Chaotic Evil",
    "Neutral Good",
    "True Neutral",
    "Neutral Evil",



]

var whatClass = ""
function classPicker(){
    var index = Math.floor(Math.random() * classes.length)
    whatClass = classes[index]
    
}
var whatBackground = ""
function backgroundPicker(){
    var index = Math.floor(Math.random() * backgrounds.length)
    whatBackground = backgrounds[index]

}
var whatRace = ""
function racePicker(){
    var index = Math.floor(Math.random() * races.length)
    whatRace = races[index]

}
var whatAlignment = ""
function alignmentPicker(){
    var index = Math.floor(Math.random() * alignments.length)
    whatAlignment = alignments[index]

}


var strenghtRoll = 0;
var dexRoll = 0;
var constitutionRoll = 0;
var intelligenceRoll = 0;
var wisdomRoll = 0;
var charismaRoll = 0;

var rolled = 0


function roll(){
    var dice = []
    var roll1 = (Math.floor(Math.random()*6)+1) 
    dice.push(roll1);
    var roll2 = (Math.floor(Math.random()*6)+1) 
    dice.push(roll2);
    var roll3 = (Math.floor(Math.random()*6)+1) 
    dice.push(roll3);
    var roll4 = (Math.floor(Math.random()*6)+1) 
    dice.push(roll4);

    // console.log(dice)
    
    dice.sort();

    rolled = dice[1]+dice[2]+dice[3]
}


function stats(){

roll();
strenghtRoll = rolled
roll();
dexRoll = rolled
roll();
constitutionRoll = rolled
roll();
intelligenceRoll = rolled
roll();
wisdomRoll = rolled
roll();
charismaRoll = rolled
}

$("#submit").on("click", function(event){
    event.preventDefault();
    playerCount = $("input[name='inlineRadioOptions']:checked").val();
    console.log(playerCount)
    
    for(i=0;i<playerCount;i++){


    arr = generator.toString().split("'");
    for(var x = 0 ; x < arr.length ; x++){
        var first = arr[x].charAt(0).toUpperCase();
        arr[x] = arr[x].slice(1)
        arr[x] = first + arr[x];
    }
    string = arr.join(" ");
    stats();
    classPicker();
    backgroundPicker();
    racePicker();
    alignmentPicker();
    var hero = new Hero(string,whatClass,whatBackground,whatRace,whatAlignment,strenghtRoll,dexRoll,constitutionRoll,intelligenceRoll,wisdomRoll,charismaRoll)
    // console.log(hero)
    $("#Heroes").append(
        "<div class = myHero >" +
        "<div>| Name: " + hero.heroName + " |</div>" +
        "<div>| Class: " + hero.heroClass + " | Background: " + hero.background + " |</div>" + 
        "<div>| Race: " + hero.race + " | Alignment: " + hero.alignment + " |</div>" + 
        "<div>| Strength: (" + hero.strenght + ") | Dexterity: (" + hero.dexterity + ") |</div>" +
        "<div>| Constitution: (" + hero.constitution + ") | Intelligence: (" + hero.intelligence + ") |</div>" +
        "<div>| Wisdom: (" + hero.wisdom + ") | Charisma: (" + hero.charisma + ") |</div>" +
        "</div>"+
        "</br></br>"
    )
    
    }

});

$("#clear").on("click", function(event){
    event.preventDefault();
    $("#Heroes").empty();
});

