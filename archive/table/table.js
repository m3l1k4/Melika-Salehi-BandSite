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




function createListElements(){


    let showsDivOne=document.getElementById("shows-list");





    for (let i=0; i<showsList.length;i++){

        let dateTitle=document.createElement("h2");
        dateTitle.className="shows__title--date";
        let dateValue=document.createElement("h2");
        dateValue.className="shows__date";

        let venueTitle=document.createElement("h2");
        venueTitle.className="shows__title--venue";
        let VenueValue=document.createElement("p");
        VenueValue.className="shows__venue";

        let locationTitle=document.createElement("h2");
        locationTitle.className="shows__title--location";
        let locationValue=document.createElement("p");
        locationValue.className="shows__location";

        let buttonSq=document.createElement("button");
        buttonSq.id="shows__buy-tickets";
        buttonSq.type="button";
        buttonSq.innerHTML="BUY TICKETS";

        showsDivOne.appendChild(dateTitle);
        showsDivOne.appendChild(dateValue);
        showsDivOne.appendChild(venueTitle);
        showsDivOne.appendChild(VenueValue);
        showsDivOne.appendChild(locationTitle);
        showsDivOne.appendChild(locationValue);
        showsDivOne.appendChild(buttonSq);

    }


}

createListElements();

function importShowsArray(shows){

    let dateTitleTag=document.querySelectorAll('.shows__title--date');
    let dateValueTag=document.querySelectorAll('.shows__date');
    
    let venueTitleTag=document.querySelectorAll('.shows__title--venue');
    let VenueValueTag=document.querySelectorAll('.shows__venue');
    
    let locationTitleTag=document.querySelectorAll('.shows__title--location');
    let locationValueTag=document.querySelectorAll('.shows__location');
    

    
    for (let k=0; k<shows.length; k++){
        dateTitleTag[k].innerHTML= "Shows";
        dateValueTag[k].innerHTML=shows[k].Date;

        venueTitleTag[k].innerHTML="Venue";
        VenueValueTag[k].innerHTML=shows[k].Venue;

        locationTitleTag[k].innerHTML="Location";
        locationValueTag[k].innerHTML=shows[k].Location;

    
  
    }


}

importShowsArray(showsList);
