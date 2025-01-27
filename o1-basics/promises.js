// const promiseOne = new Promise(function(resolve, reject) {
//     //
//     //
//     setTimeout(() => {
//        console.log('Promise 1 resolved'); 
//        resolve();
//     }, 1000);
// })

// promiseOne.then(function () {
//     console.log('Promise 12 resolved');
// })


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//         // console.log(response);
        
//     } catch (error) {
//         console.log("e",error);
        
//     }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error));
