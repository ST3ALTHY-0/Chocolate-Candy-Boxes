



let chocs = [
    {
        chocName: "Plain Milk",
        description: "Smooth milk chocolate",
        calories: 90,
        ingredients: "Cocoa butter, Milk, Cream",
        img: "assets/plain_milk.jpg",
    },
    {
        chocName: "Plain Dark",
        description: "Dark chocolate",
        calories: 90,
        ingredients: "Cocoa butter, Milk, Cream",
        img: "assets/plain_dark.jpg",
    },
    {
        chocName: "Bailey's Cup",
        description: "Dark chocolate with Bailey's Cream Filling",
        calories: 100,
        ingredients: "Cocoa butter, Milk, Cream, baileys",
        img: "assets/baileys_cup.jpg",
    },
    {
        chocName: "Cappuccino Cup",
        description: "Dark chocolatewith Cappuccino style cream filling",
        calories: 120,
        ingredients: "Cocoa butter, Milk, Cream, Cappuccino fondant",
        img: "assets/cappuccino_cup.jpg",
    },
    {
        chocName: "Nutter Butter",
        description: "Dark chocolate with peanut butter",
        calories: 190,
        ingredients: "Cocoa butter, Milk, Cream, peanut butter",
        img: "assets/nutter_butter.jpg",
    },
    {
        chocName: "Orange Fondant",
        description: "Dark chocolate folded with orange fondant",
        calories: 90,
        ingredients: "Cocoa butter, Milk, Cream, orange peel, orange fondant",
        img: "assets/orange_fondant.jpg",
    },
    {
        chocName: "Pistachio Cup",
        description: "Dark chocolate with nuggets of pistachio",
        calories: 90,
        ingredients: "Cocoa butter, Milk, Cream, chunks of pistachio nut",
        img: "assets/pistachio_diamond.jpg",
    },
    {
        chocName: "Rum Barrel",
        description: "Dark chocolate with a decadent rum filling",
        calories: 90,
        ingredients: "Cocoa butter, Milk, Cream, rum paste and rum flavourings",
        img: "assets/rum_barrel.jpg",
    },
    {
        chocName: "Toffee Crunch",
        description: "Dark chocolate with brittle toffee candy",
        calories: 90,
        ingredients: "Cocoa butter, Milk, Cream, toffee",
        img: "assets/toffee_crunch.jpg",
    },
    {
        chocName: "Plain Supreme",
        description: "Dark chocolate with slivers of milk chocolate",
        calories: 90,
        ingredients: "Cocoa butter, Milk, Cream",
        img: "assets/plain_hybrid.jpg",
    },
];


function renderCards() {
    const $container = $('.cards');
    $.each(chocs, function (i, choc) {
        const $card = $(`
          <div class="card" style="background: #ffefefff;">
            <img src="${choc.img}">
            <h3>${choc.chocName}</h3>
            <div class="details">
              <p>Calories: ${choc.calories}</p>
              <p>Ingredients: ${choc.ingredients}</p>
            </div>
          </div>
        `);
        $container.append($card);
    });
}

let detailsVis = false;
function toggleDetails() {
  if (detailsVis) {
    $('.details').show(); 
    $('.toggleDetails').text('Hide calories and content');
  } else {
    $('.details').hide(); 
    $('.toggleDetails').text('Show calories and content');
  }
    detailsVis = !detailsVis;
}

// Pick random sample
function pickRandomSample() {
    // reset cards to a default color
    $('.card').css('background', '#ffefefff');
    const index = Math.floor(Math.random() * chocs.length);
    $('.card:eq(' + index + ')').css('background', 'yellow');
    const code = Math.floor(Math.random() * 50) + 1;
    alert(`Free sample code: ${code}\nGive this code to the cashier for: ${chocs[index].chocName}`);
}

$(document).ready(function () {
    renderCards();
    toggleDetails();
    $('.selectSample').on('click', pickRandomSample);
    $('.toggleDetails').on('click', toggleDetails);
});



