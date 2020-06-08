//array of show info
var showsList = [

    {
        Date: 'Mon Dec 17 2018',
        Venue: 'Ronald Lane',
        Location:'San Fancisco, CA',
    },

    {
        Date: 'Tue Jul 18 2019',
        Venue: 'Pier 3 East',
        Location:'San Fancisco, CA',
    },


    {
        Date: 'Fri Jul 22 2019',
        Venue: 'View Loungue',
        Location:'San Fancisco, CA',
    },

    {
        Date: 'Sat Aug 12 2019',
        Venue: 'Hyatt Agency',
        Location:'San Fancisco, CA',
    },

    {
        Date: 'Fri Sep 05 2019',
        Venue: 'Moscow Center',
        Location:'San Fancisco, CA',
    },

    {
        Date: 'Wed Aug 11 2019',
        Venue: 'Pres Club',
        Location:'San Fancisco, CA',
    },


];



//creates element needed to import the array values
function createListElements(){


    let showsDivOne=document.getElementById("shows");


    for (let i=0; i<showsList.length;i++){

        let showsDivtwo=document.createElement("div");
        showsDivtwo.className="shows__box";

        let dateTitle=document.createElement("h2");
        dateTitle.className="shows__title--date shows__title";
        let dateValue=document.createElement("h2");
        dateValue.className="shows__date shows__info";

        let venueTitle=document.createElement("h2");
        venueTitle.className="shows__title--venue shows__title";
        let VenueValue=document.createElement("p");
        VenueValue.className="shows__venue shows__info";

        let locationTitle=document.createElement("h2");
        locationTitle.className="shows__title--location shows__title";
        let locationValue=document.createElement("p");
        locationValue.className="shows__location shows__info";

        let buttonSq=document.createElement("button");
        buttonSq.className="shows__buy-tickets";
        buttonSq.type="button";
        buttonSq.innerHTML="BUY TICKETS";

        showsDivOne.appendChild(showsDivtwo);
        
        showsDivtwo.appendChild(dateTitle);
        showsDivtwo.appendChild(dateValue);
        showsDivtwo.appendChild(venueTitle);
        showsDivtwo.appendChild(VenueValue);
        showsDivtwo.appendChild(locationTitle);
        showsDivtwo.appendChild(locationValue);
        showsDivtwo.appendChild(buttonSq);

    }


}

createListElements();

//iterates and imports array values into elements
function importShowsArray(shows){

    let dateTitleTag=document.querySelectorAll('.shows__title--date');
    let dateValueTag=document.querySelectorAll('.shows__date');
    
    let venueTitleTag=document.querySelectorAll('.shows__title--venue');
    let VenueValueTag=document.querySelectorAll('.shows__venue');
    
    let locationTitleTag=document.querySelectorAll('.shows__title--location');
    let locationValueTag=document.querySelectorAll('.shows__location');
    

    
    for (let k=0; k<shows.length; k++){
        dateTitleTag[k].innerHTML= "DATE";
        dateValueTag[k].innerHTML=shows[k].Date;

        venueTitleTag[k].innerHTML="VENUE";
        VenueValueTag[k].innerHTML=shows[k].Venue;

        locationTitleTag[k].innerHTML="LOCATION";
        locationValueTag[k].innerHTML=shows[k].Location;

    
  
    }


}

importShowsArray(showsList);
