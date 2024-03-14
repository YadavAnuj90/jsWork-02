// for(i=1;i<=10;i++){
//     console.log(i)
//     console.log("Hello Anuj:")
    
// }
// // // for(person=1;person<=5;person++){
// // //     console.log("Wlcome person"+ person)
// // //     for(food=1;food<=5;food++){
// // //         console.log("Feeding food item "+ food)
// // //     }
// // // }

// for (i= 0; i<=10; i++) {
//     console.log(i);
// }


// const greetings = "Hello World!"

// for(const greet of greetings) {
//    // console.log(`Each char is ${greet}`);


// }


// const coding = ["Paython" ,"Cpp","Javascript","Java","Ruby"]

// coding.forEach( (val) => {
 
//     //console.log(val);
// }  )

// const myCoding = [
//   {
//     languageName: "Javascript",
//     fileName:"JS"
//   },
//   {
// languageName:"Java",
// fileName:"JVM"
//   },
//   {
//     languageName:"C Plus ",
//     fileName:"Cpp"
//   }
   
// ]

// myCoding.forEach( (item)=>{
//     console.log(item.languageName);
    
// })

// const myNums = [1,2,3,4,5,6,7,8]

// const newNums = myNums.filter((num) => {
//  return num>4
// })

// console.log(newNums);

/*
const books = [
    {title: 'Book One', genre: 'Apptitude' , publish: 2005,
 edition: 2017},
 
 {title: 'Book Two', genre: 'Hindi' , publish: 1999,
 edition: 2009},
 
 {title: 'Book Three', genre: 'Polity' , publish: 2004,
 edition: 2018},
 
 {title: 'Book Four', genre: 'History' , publish: 1994,
 edition: 2008},
 
 {title: 'Book Five', genre: 'Biology' , publish: 2015,
 edition: 2020},
 
 {title: 'Book Six', genre: 'Economics' , publish: 2000,
 edition: 2015},
 
 {title: 'Book Seven', genre: 'Polity' , publish: 1899,
 edition: 1998},
 
 {title: 'Book Eight', genre: 'English' , publish: 1989,
 edition: 2000},
 
 {title: 'Book Nine', genre: 'History' , publish: 2000,
 edition: 2005},
 
   ];

   let userBooks = books.filter( (bk) => bk.genre ==='History')
   userBooks=books.filter((bk) => bk.publish >=2010)
   console.log(userBooks);
   */

//    const myNums = [1,2,3,4,5,6,7,8,9,10]

//    const newNums = myNums.map( (num) => { return (num*10)-10})
//    console.log(newNums);


const myNum = [1,2,3]

const myTotal = myNum.reduce( function (acc,currval){
   
    console.log(`acc=${acc}  currval= ${currval}`);
    return acc * currval

},1)
console.log(myTotal);


//foreach++++++++++++//

 //const nums = [1,2,3,4,5]

//  nums.forEach((num,index,array) =>{

//     console.log(num,array[index])
//  })

//MAP ++++++++++++//
// const number = [1,2,3,7,5]
//   const newNums= nums.map((nums) => nums*2)
//   console.log(newNums);

//Filter ++++++++++++++++//

// const val = [2,4,3,5,6,7]

// const newVal = val.filter((val) => {
//     return val % 2 !==0
// })
// console.log(newVal);

