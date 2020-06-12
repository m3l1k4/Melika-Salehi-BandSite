let api_key=  "5c4c8003-3483-45f0-bb8a-89ee259fc2ed";


getInfo = () => {
    axios.get("https://project-1-api.herokuapp.com/comments?api_key=5c4c8003-3483-45f0-bb8a-89ee259fc2ed")
        .then(response => {
            //  console.log(response);
            console.log(response.data[0].name);
            console.log("this is from axios");
    
        })


};

getInfo();



postInfo = () => {
    axios.post("https://project-1-api.herokuapp.com/comments?api_key=5c4c8003-3483-45f0-bb8a-89ee259fc2ed",
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


/*
getHouseInfo = () => {
    axios.get("https://www.potterapi.com/v1/houses?key=$2a$10$fFLgx9jmgVkDfvD3XPaHo.z9shUBKZuhJWsCyOleSak2VfH1zMmve")
        .then(response => {
            //  console.log(response);
            console.log(response.data[0].mascot);
            console.log("this is from axios")
            
        })


};

getHouseInfo();

*/
