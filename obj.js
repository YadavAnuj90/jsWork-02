//object litetals

// const JsUser = {
//     name: "anuj",
//     email:"anujy@3434",
//     password: 12345,
//     location:"Noida",
//     lastLoginDays:["Monday","Tuesday"]
// }

// console.log(JsUser);
// console.log(JsUser["email"]);

// const regularUser = {
//     email:"anuj@234",
//     fullname:{
//         userFullName:{
//             firstname:"Anuj",
//             lastname: "Yadav"
//         }
//     }
// }
// console.log(regularUser.fullname.userFullName.lastname);

//ASSIGN********************//

// const obj1 = {1:"a" , 2:"b"}
// const obj2 = {3:"c" , 4:"d"}
// const obj3 = {5:"e" , 6:"f"}

// const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4);

function userLoginMsg(username){
    if(username === undefined){
        console.log("Please Enter A Username");
        return
    }
    return `${username} Just Log In`

}

console.log(userLoginMsg("Anuj"));