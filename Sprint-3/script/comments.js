let api_key = "5c4c8003-3483-45f0-bb8a-89ee259fc2ed";


getInfo = () => {
    axios.get("https://project-1-api.herokuapp.com/comments?api_key=" + api_key)
        .then(response => {

            insertComments(response);


        })
};

getInfo();


function insertComments(commentsResult) {

    for (let i = 0; i < commentsResult.data.length; i++) {


        let nameVal = commentsResult.data[i].name;
        let commentVal = commentsResult.data[i].comment;
        let timeVal = epoch2Human(commentsResult.data[i].timestamp);

        newCommenter(nameVal, timeVal, commentVal)
    }

}


function epoch2Human(timeStampString) {
    currentTime = new Date(timeStampString);
    let timeString = '';
    timeDay = currentTime.getDate();
    timeYear = currentTime.getFullYear();
    timeMonth = currentTime.getMonth();
    let timeValue = timeString.concat(timeMonth, '/', timeDay, '/', timeYear);

    return timeValue;
}

function getCurrentTime() {

    let currentTime = new Date(); // Gets the date string at time of submission

    //cleaning up the date string and concat into MM/DD/YYY format
    let timeString = '';
    timeDay = currentTime.getDate();
    timeYear = currentTime.getFullYear();
    timeMonth = currentTime.getMonth();
    let timeValue = timeString.concat(timeMonth, '/', timeDay, '/', timeYear);

    return timeValue;
}


document.getElementById("comment-submit-button").addEventListener("click",
    function (event) {
        event.preventDefault(); //prevents the page from reloading when submitting new comment

        let nameValue = document.getElementById("comment-name").value; // Retrieves the entered value in the name field
        let commentValue = document.getElementById("comment-content").value; // Retrieves the entered value in the comment text box
        let currentTime = new Date(); // Gets the date string at time of submission
        //cleaning up the date string and concat into MM/DD/YYY format
        let timeValue = epoch2Human(currentTime);
        postInfo(nameValue, commentValue);
        //pushed values to the the beginning of the array so most recent comment is always on top of the page
        // joinTheConv.unshift({ name: nameValue, timeStamp: timeValue, comment: commentValue });

        newCommenter(nameValue, timeValue, commentValue);
        // displayComment(joinTheConv);
    });


postInfo = (nameVal, commentVal) => {
    axios.post("https://project-1-api.herokuapp.com/comments?api_key=" + api_key,
        {
            name: nameVal,
            comment: commentVal
        })
        .then(response => {


        })
        .catch(error => {
            console.log(error);
        })

};

postInfo();


function newCommenter(name, timeStamp, comment) {

    //creating new elements and assigning class
    let tagIcon = document.createElement("div");
    tagIcon.className = "previous-comments__icon";


    let tagName = document.createElement("h2");
    tagName.className = "previous-comments__heading--name ";
    let tagTime = document.createElement("p");
    tagTime.className = "previous-comments__heading--time";
    let tagComment = document.createElement("p");
    tagComment.className = "previous-comments__comment"


    //creating textnode
    let nameText = document.createTextNode(name);
    let bodyText = document.createTextNode(comment);
    let timeText = document.createTextNode(timeStamp);
    //appending
    tagName.appendChild(nameText);
    tagComment.appendChild(bodyText);
    tagTime.appendChild(timeText);

    //creating div elements


    let divElementOne = document.createElement("div");
    divElementOne.className = "previous-comments__box";


    let divElementTwo = document.createElement("div");
    divElementTwo.className = "previous-comments__div";

    let divElementThree = document.createElement("div");

    let divElementFour = document.createElement("div");
    divElementFour.className = "previous-comments__heading"


    let newElement = document.getElementById("comments");
    //nesting elements
    newElement.appendChild(divElementOne);
    divElementOne.appendChild(tagIcon);
    divElementOne.appendChild(divElementTwo);
    divElementTwo.appendChild(divElementThree);
    divElementThree.appendChild(divElementFour);
    divElementFour.appendChild(tagName);
    divElementFour.appendChild(tagTime);
    divElementThree.appendChild(tagComment);

    //reseting form upon reset
    document.getElementById("submit-comments").reset();

}
