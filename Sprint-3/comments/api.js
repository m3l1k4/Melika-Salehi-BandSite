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




postInfo = () => {
    axios.post("https://project-1-api.herokuapp.com/comments?api_key="+api_key,
    {name: 'potato',
    comment: 'hahaha'
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



