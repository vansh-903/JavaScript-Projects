 

 const arr = [1,2,3,4,5,6,7,8,9,10,11]

 for(const num of arr){
    // console.log(num);
 }

 const coding = ["rb", "cpp", "python", "js"];

//  coding.forEach((item)=>{
//     console.log(item);
//  })

const myCoding = [
    {
        name: "rb",
        language: "Ruby"
    },
    {
        name: "py",
        language: "Python"
    },
    {
        name: "cpp",
        language: "C++"
    },
]

myCoding.forEach((item)=>{
    console.log(item.name);
})