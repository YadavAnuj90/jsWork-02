// function one() {
//     const username = "anuj"

//     function two(){
//         const website = "VS code"
//         console.log(username);
//     }

//     //console.log(website);

//     two()
// }
// one()


//Hosting ++++++++++++++++++//

// console.log(addOne(5))

// function addOne (num) {
//    return num+1
// }


//   sumOfTwo(6)

//    const sumOfTwo = function addTwo(num2){
//     return num2+1
// }

const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
