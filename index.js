const apiUrl = "https://graph.instagram.com/me/";
const access_token =
  "IGQWROY2dOZA2tNQjRaWjctVnRhWEtNX21JN1RxVEtnUl9PQk5VZAm9USFJndnBhTWZALTUs3MEFyNmFzSmVCYkw2c1hYX0hCMTRBaFB6cmd4cnRVeG1MMDZAGV3A1cWlrTWtJNkxyRUJVQWtyUk5rWlRoMDN2NENGUE0ZD";
// const fields = "id,username";

const url = `${apiUrl}?&access_token=${access_token}`;

fetch(url)
.then(response =>{
    if(!response.ok){
        console.log(Error())
    }

    return response.json()
})
.then(data=>{
    console.log(data)
    const result = JSON.stringify(data)
    
})
