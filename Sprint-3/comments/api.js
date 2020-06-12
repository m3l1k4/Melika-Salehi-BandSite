let api_key=  "5c4c8003-3483-45f0-bb8a-89ee259fc2ed";


getInfo = () => {
    axios.get("https://project-1-api.herokuapp.com/comments?api_key="+api_key)
        .then(response => {
            //  console.log(response);
            console.log(response.data[2].name);
            console.log("this is from axios");
            insertComments(response);
    
        })

};

getInfo();


function insertComments(commentsResult){

    let nameTag = document.querySelectorAll('.previous-comments__heading--name ');
    let timeTag = document.querySelectorAll('.previous-comments__heading--time');
    let commentTag = document.querySelectorAll('.previous-comments__comment');

    for (let i = 0; i < nameTag.length; i++) {
 
        nameTag[i].innerHTML = commentsResult.data[i].name;
        commentTag[i].innerHTML = commentsResult.data[i].comment;
        timeTag[i].innerHTML = epoch2Human(commentsResult.data[i].timestamp);
     }


    console.log("this is response");

}


function epoch2Human(timeStampString){
    currentTime= new Date(timeStampString);
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

      //pushed values to the the beginning of the array so most recent comment is always on top of the page
      joinTheConv.unshift({ name: nameValue, timeStamp: timeValue, comment: commentValue });

      newCommenter(nameValue, timeValue, commentValue);
      displayComment(joinTheConv);
   });


postInfo = () => {
    axios.post("https://project-1-api.herokuapp.com/comments?api_key="+api_key,
    {name: 'potato',
    comment: 'hahaha',
    timestamp:'1205209821'
    })
        .then(response => {
          
            console.log(response);
            console.log("this is from axios");
    
        })
        .catch (error =>{
            console.log(error);
        })

};

postInfo();



