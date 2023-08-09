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
      "destinations": ["Barcelona", "Santorini", "Rome"],
      "DepartureTime": "15/06 14:30",
      "tripCode": "#MDRT76",
      "roundTrip": false,
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
      "destinations": ["Venice"],
      "DepartureTime": "22/04 13:45",
      "tripCode": "#VENE14",
      "roundTrip": false,
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
    
    for (let i = 0; i < trips.length; i++) {

        const currentIndex = $("#cards-container").children().length - 1;
        const currentChild = $("#cards-container").children().eq(currentIndex);

        if(trips[i].Featured){
            $("#cards-container").append($("#tripsTemplate").html());

            

            $(currentChild).find(".card-bg").attr('src','assets/' + trips[i].image);
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
}

$("#cards-container").on('mouseenter', '.card', function(){

    $(this).find(".trip-short-details").toggle(200);
    $(this).find(".trip-details").toggle(200);

});

$("#cards-container").on('mouseleave', '.card', function(){

    $(this).find(".trip-short-details").toggle(200);
    $(this).find(".trip-details").toggle(200);
  
});


// Load Cards for Trips page

function loadTrips () {
    
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

$("#all-cards-container").on('mouseenter', '.card', function(){

    $(this).find(".trip-short-details").toggle(200);
    $(this).find(".trip-details").toggle(200);

});

$("#all-cards-container").on('mouseleave', '.card', function(){

    $(this).find(".trip-short-details").toggle(200);
    $(this).find(".trip-details").toggle(200);
  
});


$("#navButton").click(function(){
    let tripNumber = Math.floor(Math.random() * 10);

    alert("You get Trip # " + tripNumber);
    });