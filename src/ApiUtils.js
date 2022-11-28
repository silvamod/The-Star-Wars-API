const getRequest = async function(apiUrl) {
    await fetch(apiUrl, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        })
      })
        .then(res => {
          return res.json()
        })
        .then(
          (result) => {
           return result;
            }) 
          ,
          (error) => {
            console.log("userLike err get=", error);
          };
    }
    
    export default getRequest;