function fetchdata(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let success = true;
            if(success){
                resolve("Data fetched Successfully");
            }else{
                reject("Error fetching data")
            }
        }, 3000);
    })
}

fetchdata()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

