function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({name:"chaicode", url:"https://chaicode.com"})
        }, 3000)
    })
}
/*
function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject({name:"chaicode", url:"https://chaicode.com"})
        }, 3000)
    })
}
*/
async function getUserData(){
    try{
        console.log('Fetching User Data...');
        const userData = await fetchUserData();
        console.log("User data fetched successfully");
        
        console.log("User data:",userData);
        
    }catch(error){
        console.log("Error Fetching Data");
        
    }
}

getUserData();