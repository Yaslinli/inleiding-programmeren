// wanneer start wordt gedrukt verdwijt de beginscherm
var start = document.querySelector('.start');
var buttonStart = document.querySelector('.startGame');

function startInvisible() {
    start.classList.add('startInvisible')
}
buttonStart.addEventListener('click', startInvisible);



// vragen naar naam van speler en display op page
document.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        var playerName = document.querySelector('#userName');
        var playerNameValue = playerName.value;

        document.querySelector(".userMessage").innerHTML = "Hello, " + playerNameValue + "!";
    }
});


// javascript om de geklikte tabs naar voren te halen
var vormButton = document.querySelector('.tab1');
var cakeButton = document.querySelector('.tab2');
var frostingButton = document.querySelector('.tab3');
var syrupButton = document.querySelector('.tab4');
var toppingButton = document.querySelector('.tab5');


var tabVorm = document.querySelector('.keuzevormen');
var tabCake = document.querySelector('.keuzeCake');
var tabFrosting = document.querySelector('.keuzeFrosting');
var tabSyrup = document.querySelector('.keuzeSyrup');
var tabTopping = document.querySelector('.keuzeTopping');

// functie om de geklikte tabs voor voren te halen
function tabs(event) {
    if (event.target.classList.contains('tab1')) {
        tabVorm.classList.add('tabFront')
        document.querySelectorAll('.keuzeCake, .keuzeFrosting, .keuzeSyrup, .keuzeTopping').forEach(el => el.classList.remove('tabFront'))
    } else if (event.target.classList.contains('tab2')) {
        tabCake.classList.add('tabFront')
        document.querySelectorAll('.keuzevormen, .keuzeFrosting, .keuzeSyrup, .keuzeTopping').forEach(el => el.classList.remove('tabFront'))
    } else if (event.target.classList.contains('tab3')) {
        tabFrosting.classList.add('tabFront')
        document.querySelectorAll('.keuzevormen, .keuzeCake, .keuzeSyrup, .keuzeTopping').forEach(el => el.classList.remove('tabFront'))
    } else if (event.target.classList.contains('tab4')) {
        tabSyrup.classList.add('tabFront')
        document.querySelectorAll('.keuzevormen, .keuzeFrosting, .keuzeCake, .keuzeTopping').forEach(el => el.classList.remove('tabFront'))
    } else if (event.target.classList.contains('tab5')) {
        tabTopping.classList.add('tabFront')
        document.querySelectorAll('.keuzevormen, .keuzeFrosting, .keuzeSyrup, .keuzeCake').forEach(el => el.classList.remove('tabFront'))
    }
}
// event listeners zetten op de buttons die de functie "tabs" uitvoert
vormButton.addEventListener('click', (event) => tabs(event));
cakeButton.addEventListener('click', (event) => tabs(event));
frostingButton.addEventListener('click', (event) => tabs(event));
syrupButton.addEventListener('click', (event) => tabs(event));
toppingButton.addEventListener('click', (event) => tabs(event));
document.querySelector('.refresh').addEventListener('click', (event) => tabs(event))


// tabs veranderen doormiddel van keypresses
document.addEventListener("keydown", function (event) {
    if (event.keyCode == 49) {
        vormButton.click();
    }
});
document.addEventListener("keydown", function (event) {
    if (event.keyCode == 50) {
        cakeButton.click();
    }
});
document.addEventListener("keydown", function (event) {
    if (event.keyCode == 51) {
        frostingButton.click();
    }
});
document.addEventListener("keydown", function (event) {
    if (event.keyCode == 52) {
        syrupButton.click();
    }
});
document.addEventListener("keydown", function (event) {
    if (event.keyCode == 53) {
        toppingButton.click();
    }
});


// javascript om de vormen de veranderen
var vormPink = document.querySelector('.vormPink');
var vormBlue = document.querySelector('.vormBlue');
var vormGreen = document.querySelector('.vormGreen');
var vormYellow = document.querySelector('.vormYellow');

var buttonPink = document.querySelector('.keuzepink');
var buttonBlue = document.querySelector('.keuzeblue');
var buttonGreen = document.querySelector('.keuzegreen');
var buttonYellow = document.querySelector('.keuzeyellow');

// functie om de bak vorm te veranderen 
function vormKeuze(event) {

    if (event.target.classList.contains('keuzepink')) {
        vormPink.classList.add('visible')
        buttonPink.classList.add('selected')
        document.querySelectorAll('.vormBlue, .vormYellow, .vormGreen').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.keuzeblue, .keuzeyellow, .keuzegreen').forEach(el => el.classList.remove('selected'))

    } else if (event.target.classList.contains('keuzeblue')) {
        vormBlue.classList.add('visible')
        buttonBlue.classList.add('selected')
        document.querySelectorAll('.vormPink, .vormYellow, .vormGreen').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.keuzepink, .keuzeyellow, .keuzegreen').forEach(el => el.classList.remove('selected'))

    } else if (event.target.classList.contains('keuzegreen')) {
        vormGreen.classList.add('visible')
        buttonGreen.classList.add('selected')
        document.querySelectorAll('.vormPink, .vormYellow, .vormBlue').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.keuzeblue, .keuzeyellow, .keuzepink').forEach(el => el.classList.remove('selected'))

    } else if (event.target.classList.contains('keuzeyellow')) {
        vormYellow.classList.add('visible')
        buttonYellow.classList.add('selected')
        document.querySelectorAll('.vormPink, .vormBlue, .vormGreen').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.keuzeblue, .keuzegreen, .keuzepink').forEach(el => el.classList.remove('selected'))
    }
}

// event listeners op buttons die op click de vorm kleur veranderen  (functie: vormKeuze)
buttonPink.addEventListener('click', (event) => vormKeuze(event));
buttonBlue.addEventListener('click', (event) => vormKeuze(event));
buttonGreen.addEventListener('click', (event) => vormKeuze(event));
buttonYellow.addEventListener('click', (event) => vormKeuze(event));



// javascript om de cake smaak te veranderen.
var strawberryCake = document.querySelector('.cakeStrawberry');
var chocolateCake = document.querySelector('.cakeChocolate');
var vanillaCake = document.querySelector('.cakeVanilla');
var redvelvetCake = document.querySelector('.cakeRedvelvet');

var buttonChocolateCake = document.querySelector('.chocolateKeuze');
var buttonStrawberryCake = document.querySelector('.aardbeiKeuze');
var buttonVanillaCake = document.querySelector('.vanillaKeuze');
var buttonRedvelvetCake = document.querySelector('.redvelvetKeuze');


// functie om cake smaak te veranderen 
function cakeKeuze(event) {

    if (event.target.classList.contains('chocolateKeuze')) {
        chocolateCake.classList.add('visible')
        buttonChocolateCake.classList.add('selected')
        document.querySelectorAll('.cakeStrawberry, .cakeVanilla, .cakeRedvelvet').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.aardbeiKeuze, .vanillaKeuze, .redvelvetKeuze').forEach(el => el.classList.remove('selected'))

    } else if (event.target.classList.contains('aardbeiKeuze')) {
        strawberryCake.classList.add('visible')
        buttonStrawberryCake.classList.add('selected')
        document.querySelectorAll('.cakeChocolate, .cakeVanilla, .cakeRedvelvet').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.chocolateKeuze, .vanillaKeuze, .redvelvetKeuze').forEach(el => el.classList.remove('selected'))

    } else if (event.target.classList.contains('vanillaKeuze')) {
        vanillaCake.classList.add('visible')
        buttonVanillaCake.classList.add('selected')
        document.querySelectorAll('.cakeStrawberry, .cakeChocolate, .cakeRedvelvet').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.chocolateKeuze, .aardbeiKeuze, .redvelvetKeuze').forEach(el => el.classList.remove('selected'))

    } else if (event.target.classList.contains('redvelvetKeuze')) {
        redvelvetCake.classList.add('visible')
        buttonRedvelvetCake.classList.add('selected')
        document.querySelectorAll('.cakeStrawberry, .cakeChocolate, .cakeVanilla').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.chocolateKeuze, .aardbeiKeuze, .vanillaKeuze').forEach(el => el.classList.remove('selected'))
    }
}

// eventlisteners die die functie cakeKeuze uitvoeren
buttonChocolateCake.addEventListener('click', (event) => cakeKeuze(event));
buttonStrawberryCake.addEventListener('click', (event) => cakeKeuze(event));
buttonVanillaCake.addEventListener('click', (event) => cakeKeuze(event));
buttonRedvelvetCake.addEventListener('click', (event) => cakeKeuze(event));




// javascript om de Frosting smaak te veranderen.
var strawberryFrosting = document.querySelector('.frostingStrawberry');
var chocolateFrosting = document.querySelector('.frostingChocolate');
var mochaFrosting = document.querySelector('.frostingMocha');
var blueberryFrosting = document.querySelector('.frostingBlueberry');

var buttonChocolateFrosting = document.querySelector('.chocolateFrostingKeuze');
var buttonStrawberryFrosting = document.querySelector('.aardbeiFrostingKeuze');
var buttonMochaFrosting = document.querySelector('.mochaFrostingKeuze');
var buttonBlueberryFrosting = document.querySelector('.blueberryFrostingKeuze');


// functie om frosting smaak te veranderen 
function frostingKeuze(event) {

    if (event.target.classList.contains('chocolateFrostingKeuze')) {
        chocolateFrosting.classList.add('visible')
        buttonChocolateFrosting.classList.add('selected')
        document.querySelectorAll('.frostingStrawberry, .frostingBlueberry, .frostingMocha').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.aardbeiFrostingKeuze, .blueberryFrostingKeuze, .mochaFrostingKeuze').forEach(el => el.classList.remove('selected'))

    } else if (event.target.classList.contains('aardbeiFrostingKeuze')) {
        strawberryFrosting.classList.add('visible')
        buttonStrawberryFrosting.classList.add('selected')
        document.querySelectorAll('.frostingChocolate, .frostingBlueberry, .frostingMocha').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.chocolateFrostingKeuze, .blueberryFrostingKeuze, .mochaFrostingKeuze').forEach(el => el.classList.remove('selected'))

    } else if (event.target.classList.contains('mochaFrostingKeuze')) {
        mochaFrosting.classList.add('visible')
        buttonMochaFrosting.classList.add('selected')
        document.querySelectorAll('.frostingStrawberry, .frostingBlueberry, .frostingChocolate').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.aardbeiFrostingKeuze, .blueberryFrostingKeuze, .chocolateFrostingKeuze').forEach(el => el.classList.remove('selected'))


    } else if (event.target.classList.contains('blueberryFrostingKeuze')) {
        blueberryFrosting.classList.add('visible')
        buttonBlueberryFrosting.classList.add('selected')
        document.querySelectorAll('.frostingStrawberry, .frostingChocolate, .frostingMocha').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.aardbeiFrostingKeuze, .chocolateFrostingKeuze, .mochaFrostingKeuze').forEach(el => el.classList.remove('selected'))

    }
}

// eventlisteners die die functie frostingKeuze uitvoeren
buttonChocolateFrosting.addEventListener('click', (event) => frostingKeuze(event));
buttonStrawberryFrosting.addEventListener('click', (event) => frostingKeuze(event));
buttonMochaFrosting.addEventListener('click', (event) => frostingKeuze(event));
buttonBlueberryFrosting.addEventListener('click', (event) => frostingKeuze(event));


// javascript om de Syrup smaak te veranderen.
var strawberrySyrup = document.querySelector('.syrupStrawberry');
var chocolateSyrup = document.querySelector('.syrupChocolate');
var caramelSyrup = document.querySelector('.syrupCaramel');
var smurfenSyrup = document.querySelector('.syrupSmurfen');

var buttonChocolateSyrup = document.querySelector('.chocolateSyrupKeuze');
var buttonStrawberrySyrup = document.querySelector('.aardbeiSyrupKeuze');
var buttonCaramelSyrup = document.querySelector('.caramelSyrupKeuze');
var buttonSmurfenSyrup = document.querySelector('.smurfenSyrupKeuze');


// functie om syrup smaak te veranderen 
function syrupKeuze(event) {

    if (event.target.classList.contains('chocolateSyrupKeuze')) {
        chocolateSyrup.classList.add('visible')
        buttonChocolateSyrup.classList.add('selected')
        document.querySelectorAll('.syrupStrawberry, .syrupSmurfen, .syrupCaramel').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.aardbeiSyrupKeuze, .smurfenSyrupKeuze, .caramelSyrupKeuze').forEach(el => el.classList.remove('selected'))

    } else if (event.target.classList.contains('aardbeiSyrupKeuze')) {
        strawberrySyrup.classList.add('visible')
        buttonStrawberrySyrup.classList.add('selected')
        document.querySelectorAll('.syrupChocolate, .syrupSmurfen, .syrupCaramel').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.chocolateSyrupKeuze, .smurfenSyrupKeuze, .caramelSyrupKeuze').forEach(el => el.classList.remove('selected'))

    } else if (event.target.classList.contains('caramelSyrupKeuze')) {
        caramelSyrup.classList.add('visible')
        buttonCaramelSyrup.classList.add('selected')
        document.querySelectorAll('.syrupStrawberry, .syrupSmurfen, .syrupChocolate').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.aardbeiSyrupKeuze, .smurfenSyrupKeuze, .chocolateSyrupKeuze').forEach(el => el.classList.remove('selected'))


    } else if (event.target.classList.contains('smurfenSyrupKeuze')) {
        smurfenSyrup.classList.add('visible')
        buttonSmurfenSyrup.classList.add('selected')
        document.querySelectorAll('.syrupStrawberry, .syrupChocolate, .syrupCaramel').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.aardbeiSyrupKeuze, .chocolateSyrupKeuze, .caramelSyrupKeuze').forEach(el => el.classList.remove('selected'))

    }
}

// eventlisteners die die functie syrupKeuze uitvoeren
buttonChocolateSyrup.addEventListener('click', (event) => syrupKeuze(event));
buttonStrawberrySyrup.addEventListener('click', (event) => syrupKeuze(event));
buttonCaramelSyrup.addEventListener('click', (event) => syrupKeuze(event));
buttonSmurfenSyrup.addEventListener('click', (event) => syrupKeuze(event));

// javascript om de toppings smaak te veranderen.
var strawberryTopping = document.querySelector('.toppingStrawberry');
var oreoTopping = document.querySelector('.toppingOreo');
var cherryTopping = document.querySelector('.toppingCherry');
var sprinkleTopping = document.querySelector('.toppingSprinkles');

var buttonStrawberryTopping = document.querySelector('.strawberriesKeuze');
var buttonOreoTopping = document.querySelector('.oreoKeuze');
var buttonCherryTopping = document.querySelector('.cherryKeuze');
var buttonSprinkleTopping = document.querySelector('.sprinklesKeuze');


// functie om toppings te veranderen 
function toppingKeuze(event) {

    if (event.target.classList.contains('strawberriesKeuze')) {
        strawberryTopping.classList.add('visible')
        buttonStrawberryTopping.classList.add('selected')
        document.querySelectorAll('.toppingOreo, .toppingCherry, .toppingSprinkles').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.oreoKeuze, .cherryKeuze, .sprinklesKeuze').forEach(el => el.classList.remove('selected'))

    } else if (event.target.classList.contains('oreoKeuze')) {
        oreoTopping.classList.add('visible')
        buttonOreoTopping.classList.add('selected')
        document.querySelectorAll('.toppingStrawberry, .toppingCherry, .toppingSprinkles').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.strawberriesKeuze, .cherryKeuze, .sprinklesKeuze').forEach(el => el.classList.remove('selected'))

    } else if (event.target.classList.contains('cherryKeuze')) {
        cherryTopping.classList.add('visible')
        buttonCherryTopping.classList.add('selected')
        document.querySelectorAll('.toppingOreo, .toppingStrawberry, .toppingSprinkles').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.strawberriesKeuze, .oreoKeuze, .sprinklesKeuze').forEach(el => el.classList.remove('selected'))


    } else if (event.target.classList.contains('sprinklesKeuze')) {
        sprinkleTopping.classList.add('visible')
        buttonSprinkleTopping.classList.add('selected')
        document.querySelectorAll('.toppingOreo, .toppingCherry, .toppingStrawberry').forEach(el => el.classList.remove('visible'))
        document.querySelectorAll('.strawberriesKeuze, .oreoKeuze, .cherryKeuze').forEach(el => el.classList.remove('selected'))

    }
}

// eventlisteners die die functie toppingKeuze uitvoeren
buttonStrawberryTopping.addEventListener('click', (event) => toppingKeuze(event));
buttonOreoTopping.addEventListener('click', (event) => toppingKeuze(event));
buttonCherryTopping.addEventListener('click', (event) => toppingKeuze(event));
buttonSprinkleTopping.addEventListener('click', (event) => toppingKeuze(event));


// refreshen van de cupcake door de class visible van de page te verwijderen
var visible = document.getElementsByClassName("visible");
var selected = document.getElementsByClassName("selected");

function refresh() {
    while (visible.length) {
        visible[0].classList.remove("visible")
    }
    while (selected.length) {
        selected[0].classList.remove("selected")
    }

}

document.querySelector('.refresh').addEventListener('click', refresh)


