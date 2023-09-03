const trips = [
    {
      "tripName": "Caribbean",
      "price": 6558,
      "destinations": ["Saint Lucia", "Barbados"],
      "DepartureTime": "27/03 17:00",
      "tripCode": "#IDUF54",
      "roundTrip": true,
      "Featured": true,
      "tripDays": 4,
      "image": "destination01.jpg"
    },
    {
      "tripName": "Mediterranean",
      "price": 4500,
      "destinations": ["Barcelona"],
      "DepartureTime": "15/06 14:30",
      "tripCode": "#MDRT76",
      "roundTrip": false,
      "Featured": false,
      "tripDays": 7,
      "image": "destination02.jpg"
    },
    {
      "tripName": "Alaskan Adventure",
      "price": 7900,
      "destinations": ["Juneau", "Anchorage", "Glacier Bay"],
      "DepartureTime": "10/08 10:00",
      "tripCode": "#ALSK23",
      "roundTrip": true,
      "Featured": false,
      "tripDays": 6,
      "image": "destination03.jpg"
    },
    {
      "tripName": "Greek Isles",
      "price": 9500,
      "destinations": ["Mykonos", "Crete", "Rhodes"],
      "DepartureTime": "20/09 09:45",
      "tripCode": "#GRKL12",
      "roundTrip": false,
      "Featured": false,
      "tripDays": 5,
      "image": "destination04.jpg"
    },
    {
      "tripName": "Norwegian Fjords",
      "price": 3450,
      "destinations": ["Bergen", "Geiranger", "Tromsø"],
      "DepartureTime": "05/11 12:15",
      "tripCode": "#NRFJ37",
      "roundTrip": true,
      "Featured": false,
      "tripDays": 8,
      "image": "destination05.jpg"
    },
    {
      "tripName": "Hawaiian Paradise",
      "price": 5300,
      "destinations": ["Honolulu"],
      "DepartureTime": "18/02 09:00",
      "tripCode": "#HWII88",
      "roundTrip": true,
      "Featured": true,
      "tripDays": 5,
      "image": "destination06.jpg"
    },
    {
      "tripName": "Venetian Escape",
      "price": 6200,
      "destinations": ["Venice" , "Santorini", "Rome"],
      "DepartureTime": "22/04 13:45",
      "tripCode": "#VENE14",
      "roundTrip": false,
      "Featured": false,
      "tripDays": 3,
      "image": "destination07.jpg"
    },
    {
      "tripName": "Tropical Paradise",
      "price": 2900,
      "destinations": ["Maldives"],
      "DepartureTime": "06/07 11:30",
      "tripCode": "#TROP29",
      "roundTrip": true,
      "Featured": false,
      "tripDays": 7,
      "image": "destination08.jpg"
    },
    {
      "tripName": "Icelandic Adventure",
      "price": 8800,
      "destinations": ["Reykjavik"],
      "DepartureTime": "14/10 10:30",
      "tripCode": "#ICEL11",
      "roundTrip": false,
      "Featured": true,
      "tripDays": 6,
      "image": "destination09.jpg"
    }
  ];
  

$(document).ready(function(){
    loadFeaturedTrips();
    loadTrips();
});


// Load featured cards

function loadFeaturedTrips () {

  let featuredTrips = trips.filter(function(trip) {
        return trip.Featured === true;
      });
    
    for (let i = 0; i < featuredTrips.length; i++) {

      $("#cards-container").append($("#tripsTemplate").html());

      let currentChild = $("#cards-container").children().eq(i+1);

      $(currentChild).find(".card-bg").attr('src','assets/' + featuredTrips[i].image);
      $(currentChild).find("#tripNameText").text(featuredTrips[i].tripName);
      $(currentChild).find("#tripPriceText").text('R ' + featuredTrips[i].price);
      $(currentChild).find(".price-text").text('R ' + featuredTrips[i].price);
      $(currentChild).find("#destinationText").text(featuredTrips[i].destinations.join(", "));
      $(currentChild).find("#departureText").text(featuredTrips[i].DepartureTime);
      $(currentChild).find("#lengthText").text(featuredTrips[i].tripDays + " days");
      $(currentChild).find("#tripCodeText").text(featuredTrips[i].tripCode);

      if(featuredTrips[i].roundTrip){
          $(currentChild).find("#roundTripBool").text("Yes");
      } else{$(currentChild).find("#roundTripBool").text("No")} 

      $(currentChild).find(".trip-details").hide();
        
    }
}

$("#cards-container").on('mouseenter', '.card', function(){
    
    $(this).find(".trip-short-details").toggle();
    $(this).find(".trip-details").toggle();

});

$("#cards-container").on('mouseleave', '.card', function(){

    $(this).find(".trip-short-details").toggle();
    $(this).find(".trip-details").toggle();
  
});


// Load Cards for Trips page

let tripContainer = document.getElementById("all-cards-container");

let defaultContainer = `
    
<template id="tripsTemplate">

        <div class="col-4">
            <div class="card">
  
              <div class="trip-short-details">
                <p id="tripNameText">Caribbean</p>
                <p id="tripPriceText"></p>
              </div>
  
              <div class="trip-details">
                <div class="flex-wrapper">
                  <div class="trip-details_wrap">
                    <p id="tripNameText" class="trip-details_name">Caribbean</p>
                    <p id="tripPriceText" class="price-text"></p>
                  </div>
                </div>
                <div class="flex-wrapper">
                  <div class="trip-details_wrap">
                    <p class="trip-detail_heading">Destinations</p>
                    <p id="destinationText" class="trip-detail_content"></p>
                  </div>
                  <div class="trip-details_wrap">
                    <p class="trip-detail_heading">Trip Length</p>
                    <p id="lengthText" class="trip-detail_content"></p>
                  </div>
                  <div class="trip-details_wrap">
                    <p class="trip-detail_heading">Departure time</p>
                    <p id="departureText" class="trip-detail_content"></p>
                  </div>
                  <div class="trip-details_wrap">
                    <p class="trip-detail_heading">Return Trip:</p>
                    <p id="roundTripBool" class="trip-detail_content"></p>
                  </div>
                  <div class="trip-details_wrap">
                    <p class="trip-detail_heading">Trip code</p>
                    <p id="tripCodeText" class="trip-detail_content"></p>
                  </div>
                </div>
                <div class="flex-wrapper">
                  <button class="buy-ticket-button">Purchase Ticket</button>
                </div>
                
              </div>
  
              <div class="card-bg_wrapper">
                <img class="card-bg" src="" alt="">
              </div>
            </div>
          </div>

       </template>

`;

function loadTrips () {

  tripContainer.innerHTML= defaultContainer;
    
    for (let i = 0; i < trips.length; i++) {
        

      $("#all-cards-container").append($("#tripsTemplate").html());

      let currentChild = $("#all-cards-container").children().eq(i+1);
      
      $(currentChild).find(".card-bg").attr('src','/assets/' + trips[i].image);
      $(currentChild).find("#tripNameText").text(trips[i].tripName);
      $(currentChild).find("#tripPriceText").text('R ' + trips[i].price);
      $(currentChild).find(".price-text").text('R ' + trips[i].price);
      $(currentChild).find("#destinationText").text(trips[i].destinations.join(", "));
      $(currentChild).find("#departureText").text(trips[i].DepartureTime);
      $(currentChild).find("#lengthText").text(trips[i].tripDays + " days");
      $(currentChild).find("#tripCodeText").text(trips[i].tripCode);

      if(trips[i].roundTrip){
          $(currentChild).find("#roundTripBool").text("Yes");
      } else{$(currentChild).find("#roundTripBool").text("No")} 

      $(currentChild).find(".trip-details").hide();
        
        
    }
}

// Filtering

$("#btnAll").click( function filterShortTrips () {

  loadTrips();

});

let filteredArray = [];

displayContent = () => {
  tripContainer.innerHTML = defaultContainer;

  for (let i = 0; i < filteredArray.length; i++) {
      
    $("#all-cards-container").append($("#tripsTemplate").html());
  
    let currentChild = $("#all-cards-container").children().eq(i+1);
    
    $(currentChild).find(".card-bg").attr('src','/assets/' + filteredArray[i].image);
    $(currentChild).find("#tripNameText").text(filteredArray[i].tripName);
    $(currentChild).find("#tripPriceText").text('R ' + filteredArray[i].price);
    $(currentChild).find(".price-text").text('R ' + filteredArray[i].price);
    $(currentChild).find("#destinationText").text(filteredArray[i].destinations.join(", "));
    $(currentChild).find("#departureText").text(filteredArray[i].DepartureTime);
    $(currentChild).find("#lengthText").text(filteredArray[i].tripDays + " days");
    $(currentChild).find("#tripCodeText").text(filteredArray[i].tripCode);
  
    if(filteredArray[i].roundTrip){
        $(currentChild).find("#roundTripBool").text("Yes");
    } else{$(currentChild).find("#roundTripBool").text("No")} 
  
    $(currentChild).find(".trip-details").hide();
      
  }

}

displayCheapestContent = () => {
  tripContainer.innerHTML = defaultContainer;

  for (let i = 0; i < 5 ; i++) {
      
    $("#all-cards-container").append($("#tripsTemplate").html());
  
    let currentChild = $("#all-cards-container").children().eq(i+1);
    
    $(currentChild).find(".card-bg").attr('src','/assets/' + filteredArray[i].image);
    $(currentChild).find("#tripNameText").text(filteredArray[i].tripName);
    $(currentChild).find("#tripPriceText").text('R ' + filteredArray[i].price);
    $(currentChild).find(".price-text").text('R ' + filteredArray[i].price);
    $(currentChild).find("#destinationText").text(filteredArray[i].destinations.join(", "));
    $(currentChild).find("#departureText").text(filteredArray[i].DepartureTime);
    $(currentChild).find("#lengthText").text(filteredArray[i].tripDays + " days");
    $(currentChild).find("#tripCodeText").text(filteredArray[i].tripCode);
  
    if(filteredArray[i].roundTrip){
        $(currentChild).find("#roundTripBool").text("Yes");
    } else{$(currentChild).find("#roundTripBool").text("No")} 
  
    $(currentChild).find(".trip-details").hide();
      
  }

}

loadShortTrips = () => {
filteredArray = trips.filter(function(trip) {
    return trip.tripDays < 6;
});
displayContent();
}

loadLongTrips = () => {
  filteredArray = trips.filter(function(trip) {
      return trip.tripDays > 5;
  });
  displayContent();
}

loadSingleTrips = () => {
filteredArray = trips.filter(function(trip) {
  return trip.destinations.length === 1;
});
displayContent();
}

loadMultiTrips = () => {
  filteredArray = trips.filter(function(trip) {
    return trip.destinations.length > 1;
  });
  displayContent();
}

loadRoundTrips = () => {
  filteredArray = trips.filter(function(trip) {
    return trip.roundTrip === true;
  });
  displayContent();
}

loadRowBoatTrips = () => {
  filteredArray = trips.slice();
  filteredArray.sort(function(a, b) {
  return a.price - b.price;
  });
  console.log(filteredArray);
  displayCheapestContent();
}


sortFunction = () => {

  let sortValue = document.getElementById("sort-options").value;
  console.log(sortValue);

  if (sortValue === "all") {
    loadTrips()
  }
  if (sortValue === "short") {
    loadShortTrips()
  }
  if (sortValue === "long") {
    loadLongTrips()
  }
  if (sortValue === "single") {
    loadSingleTrips()
  }
  if (sortValue === "multi") {
    loadMultiTrips()
  } 
  if (sortValue === "round") {
    loadRoundTrips()
  }
  if (sortValue === "rowBoat") {
    loadRowBoatTrips()
  }
            
}


$("#all-cards-container").on('mouseenter', '.card', function(){

    $(this).find(".trip-short-details").toggle();
    $(this).find(".trip-details").toggle();

});

$("#all-cards-container").on('mouseleave', '.card', function(){

    $(this).find(".trip-short-details").toggle();
    $(this).find(".trip-details").toggle();
  
});


$("#navButton").click(function(){
    let tripNumber = Math.floor(Math.random() * 10);

    alert("You get Trip # " + tripNumber);
});

let cart = [];

$(document).ready(function() {
  $(".buy-ticket-button").click(function(){
    let tripCodeElement = $(this).closest('.trip-details').find('#tripCodeText');
    let tripCodeValue = tripCodeElement.text();
    let selectedTrip = [];
    for (let i = 0; i < trips.length; i++) {
      if(trips[i].tripCode === tripCodeValue){
        selectedTrip = trips[i];
      }
      
    }
    
    alert(selectedTrip.tripName + " Added to cart")

    cart.push(selectedTrip)

    let data = JSON.stringify(cart);
    localStorage.setItem('trip', data);

  })
});



addToCart = () => {
  let data = JSON.stringify(tripSelection);
  localStorage.setItem('trip', data);
  window.location.href = 'checkout.html';
}


let defaultTable = `

<template>
                    <tr id="row-1" class="wish-item">
                        <th scope="row">1</th>
                        <td>
                          <p class="trip-code">#IDUF54</p>
                        </td>
                        <td>
                          <p class="ticket-quantity">5</p>
                        </td>
                        <td>
                          <p class="total-cost">R1055</p>
                        </td>
                        <td>
                          <button id="remove-2" class="remove-button">
                            remove
                          </button>
                        </td>
                      </tr>
                </template>

`;

let cartContainer = document.getElementById("table-body");



displayCartContent = () => {
  cartContainer.innerHTML = defaultTable;

  let retrievedCart = JSON.parse(localStorage.getItem('trip'));
  console.log(retrievedCart);

  // let finalCart = [];
  // for(i = 0; i < retrievedCart.length; i++){
  //   let checkingCode = retrievedCart[i].tripCode;
  //   for(i = 0, ){

  //   }
  // };

  for (let i = 0; i < retrievedCart.length ; i++) {
      
    $("#table-body").append($("#table-template").html());
  
    let currentChild = $("#table-body").children().eq(i+1);
    console.log("calculating")
    
    $(currentChild).find(".trip-code").text(retrievedCart[i].tripCode);
    $(currentChild).find(".ticket-quantity").text(1);
    $(currentChild).find(".trip-code").text(retrievedCart[i].price);
  
      
  }

}