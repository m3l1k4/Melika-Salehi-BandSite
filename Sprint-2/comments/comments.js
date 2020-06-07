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


function displayComment(jtc) {



   let nameTag = document.querySelectorAll('.previous-comment__name');
   let commentTag = document.querySelectorAll('.previous-comments__comment');
   let timeTag= document.querySelectorAll('.previous-comments__time');
   for (let i = 0; i < nameTag.length; i++) {

      nameTag[i].innerHTML = jtc[i].name;
      commentTag[i].innerHTML = jtc[i].comment;
      timeTag[i].innerHTML = jtc[i].timeStamp;
      console.log(jtc[i].name);
      console.log(nameTag.length);
   }

}

displayComment(joinTheConv);


document.getElementById("comment-submit-button").addEventListener("click",
   function (event) {
      event.preventDefault();

      let nameValue = document.getElementById("comment-name").value;
      let commentValue = document.getElementById("comment-content").value;
      let timeValue = Date();

      joinTheConv.unshift({ name: nameValue, timeStamp: timeValue,  comment: commentValue });

      alert(nameValue);
      alert(commentValue);
      alert(timeValue);


      newCommenter(nameValue, timeValue, commentValue);
      displayComment(joinTheConv);
   });


function newCommenter(name, timeStamp,comment) {

   let tagName = document.createElement("h2");
   tagName.className = "previous-comment__name";
   let tagComment = document.createElement("p");
   tagComment.className ="previous-comments__comment"
   let tagTime = document.createElement("p");
   tagTime.className ="previous-comments__time";

   let nameText = document.createTextNode(name);
   let bodyText = document.createTextNode(comment);
   let timeText = document.createTextNode(timeStamp);

   tagName.appendChild(nameText);
   tagComment.appendChild(bodyText);
   tagTime.appendChild(timeText);

   let nameElement = document.getElementById("new-comment");
   nameElement.appendChild(tagName);

   let commentElement = document.getElementById("new-comment");
   commentElement.appendChild(tagComment);

   let timeElement =document.getElementById("new-comment");
   timeElement.appendChild(tagTime);


   document.getElementById("submit-comments").reset();

}


alert("hello");