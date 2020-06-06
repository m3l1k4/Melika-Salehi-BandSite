





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

/*
joinTheConv.forEach((item) => {
  
htags.innerHTML = item.name;
 
console.log(htags.innerHTML);

}); */







//document.querySelector("body").style.backgroundColor="red";
function changeNames(jtc) {



   let nameTag = document.querySelectorAll('.previous-comment__name');
   let commentTag = document.querySelectorAll('.previous-comments__comment');
   for (let i = 0; i < nameTag.length; i++) {

      nameTag[i].innerHTML = jtc[i].name;
      commentTag[i].innerHTML = jtc[i].comment;

   }

}

changeNames(joinTheConv);


function newCommenter(name, comment) {
  
   let tagName = document.createElement("h2");
   let tagComment = document.createElement("p");

   
   let nameText = document.createTextNode(name);
   let bodyText = document.createTextNode(comment);

   tagName.appendChild(nameText);

   tagComment.appendChild(bodyText);

   let nameElement = document.getElementById("new-comment");
   nameElement.appendChild(tagName);

   let commentElement = document.getElementById("new-comment");
   commentElement.appendChild(tagComment);




}


newCommenter('potato', 'hoohoo')

/*
let commentName = document.querySelectorAll('#previous-comment__name');
let commentBody = document.querySelectorAll('#previous-comments__comment');

for (let i=0; i<commentName.length;i++){
   alert(commentBody[i].innerHTML);
}
*/
alert("hello");
