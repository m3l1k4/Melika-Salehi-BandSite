
let api_key = "5c4c8003-3483-45f0-bb8a-89ee259fc2ed";


getInfo = () => {
    axios.get("https://project-1-api.herokuapp.com/showdates?api_key=" + api_key)
        .then(response => {
            createListElements(response)
            importShowsArray(response);
            console.log(response);


        })
};
getInfo();

//creates element needed to import the array values
function createListElements(showsList) {


    let showsDivOne = document.getElementById("shows");


    for (let i = 0; i < showsList.data.length; i++) {

        let showsDivtwo = document.createElement("div");
        showsDivtwo.className = "shows__box";

        let dateTitle = document.createElement("h2");
        dateTitle.className = "shows__title--date shows__title";
        let dateValue = document.createElement("h2");
        dateValue.className = "shows__date shows__info";

        let venueTitle = document.createElement("h2");
        venueTitle.className = "shows__title--venue shows__title";
        let VenueValue = document.createElement("p");
        VenueValue.className = "shows__venue shows__info";

        let locationTitle = document.createElement("h2");
        locationTitle.className = "shows__title--location shows__title";
        let locationValue = document.createElement("p");
        locationValue.className = "shows__location shows__info";

        let buttonSq = document.createElement("button");
        buttonSq.className = "shows__buy-tickets";
        buttonSq.type = "button";
        buttonSq.innerHTML = "BUY TICKETS";

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
function importShowsArray(shows) {


    let dateTitleTag = document.querySelectorAll('.shows__title--date');
    let dateValueTag = document.querySelectorAll('.shows__date');

    let venueTitleTag = document.querySelectorAll('.shows__title--venue');
    let VenueValueTag = document.querySelectorAll('.shows__venue');

    let locationTitleTag = document.querySelectorAll('.shows__title--location');
    let locationValueTag = document.querySelectorAll('.shows__location');



    for (let k = 0; k < shows.data.length; k++) {
        dateTitleTag[k].innerHTML = "DATE";
        dateValueTag[k].innerHTML = shows.data[k].date;

        venueTitleTag[k].innerHTML = "VENUE";
        VenueValueTag[k].innerHTML = shows.data[k].place;

        locationTitleTag[k].innerHTML = "LOCATION";
        locationValueTag[k].innerHTML = shows.data[k].location;



    }


}


