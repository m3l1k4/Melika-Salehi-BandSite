// Comments array containing the 3 default comments
var joinTheConv = [

   {
      name: ' Micheal Lyons',
      timeStamp: '12/18/2018',
      comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
   },

   {
      name: 'Gary Wong ',
      timeStamp: '12/12/2018',
      comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
   },

   {
      name: 'Theodore Duncan ',
      timeStamp: '11/15/2018',
      comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
   },

];

//Goes through the comments array and imports it onto the page by changing innerHTML
function displayComment(jtc) {

   let nameTag = document.querySelectorAll('.previous-comments__heading--name ');
   let timeTag= document.querySelectorAll('.previous-comments__heading--time');
   let commentTag = document.querySelectorAll('.previous-comments__comment');

   for (let i = 0; i < nameTag.length; i++) {

      nameTag[i].innerHTML = jtc[i].name;
      commentTag[i].innerHTML = jtc[i].comment;
      timeTag[i].innerHTML = jtc[i].timeStamp;
   }

}

displayComment(joinTheConv);

// This function allows user to submit the comment
document.getElementById("comment-submit-button").addEventListener("click",
   function (event) {
      event.preventDefault(); //prevents the page from reloading when submitting new comment

      let nameValue = document.getElementById("comment-name").value; // Retrieves the entered value in the name field
      let commentValue = document.getElementById("comment-content").value; // Retrieves the entered value in the comment text box
      let currentTime = new Date(); // Gets the date string at time of submission
      
      //cleaning up the date string and concat into MM/DD/YYY format
      let timeString = ''; 
      timeDay= currentTime.getDate(); 
      timeYear=currentTime.getFullYear();
      timeMonth=currentTime.getMonth();
      let timeValue = timeString.concat(timeMonth,'/', timeDay,'/', timeYear);
     
      //pushed values to the the beginning of the array so most recent comment is always on top of the page
      joinTheConv.unshift({ name: nameValue, timeStamp: timeValue,  comment: commentValue });

      newCommenter(nameValue, timeValue, commentValue);
      displayComment(joinTheConv);
   });



// Creates new elements on the page so new comment object can be dispalyed
function newCommenter(name, timeStamp,comment) {

   //creating new elements and assigning class
  let tagIcon=document.createElement("div");
  tagIcon.className="previous-comments__icon";
  
  
   let tagName = document.createElement("h2");
   tagName.className = "previous-comments__heading--name ";
   let tagTime = document.createElement("p");
   tagTime.className ="previous-comments__heading--time";
   let tagComment = document.createElement("p");
   tagComment.className ="previous-comments__comment"
   

   //creating textnode

   let iconCont=document.createno

   let nameText = document.createTextNode(name);
   let bodyText = document.createTextNode(comment);
   let timeText = document.createTextNode(timeStamp);

   tagName.appendChild(nameText);
   tagComment.appendChild(bodyText);
   tagTime.appendChild(timeText);

//-----
   let divElementOne= document.createElement("div");
   divElementOne.className="previous-comments__box";

   let divElementTwo=document.createElement("div");
   divElementTwo.className="previous-comments__div";

   let divElementThree = document.createElement("div");

   let divElementFour= document.createElement("div");
   divElementFour.className="previous-comments__heading"
   //------

   let newElement = document.getElementById("comments");

   newElement.appendChild(divElementOne);
   divElementOne.appendChild(tagIcon);
   divElementOne.appendChild(divElementTwo);
   divElementTwo.appendChild(divElementThree);
   divElementThree.appendChild(divElementFour);
   divElementFour.appendChild(tagName);
   divElementFour.appendChild(tagTime);
   divElementThree.appendChild(tagComment);
   
   document.getElementById("submit-comments").reset();

}
