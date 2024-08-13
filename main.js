// new Task
// asagidaki arraydan isdifade ederek main.js  ve index.js yaradin
// index.js icinde newArray i daxil edin main.js de ele bir function qurun ki
// name ve arrayi parametr olaraq verdikde hemin namenin city ve streetini 
// versin eger name olan objectin icinde city ve ya street yoxdusa
//  error versin logda 

// const checkName = (arr,name) => {
//         try {
//             arr.forEach(item => {
//                 if (item.name == name) {
//                 if (!item.address.city || !item.address.street) throw new Error(`${name} obyektinde city ve ya street yoxdur`);
//                 else  console.log(`City : ${item.address.city} , Street: ${item.address.street}`);
//                 }
//             })
//          }
//          catch(error) {
//              console.error(error.message);
             
//          }
// }


// Task 2
// main.js de ele bir function qurunki parametr olaraq id ve array 
// qebul etsin gelen array e gore id ni tapa bilmiyende xeta versin
// eyni zamanda geriye hemen ide aid objecti geri qaytarsin
// qaytarilan objecti index.js de import edin daha sonra logda json stringfy 
// birdefede parse ile logda cixardin .




// const checkId = (arr,id) => {
//    try {
//     const findItem = arr.find(item => item.id == id);
//     if (findItem) return findItem;
//     else throw new Error(`${id} does not exist`);
//    }
//    catch(error) {
//     console.error(error.message);
//    }
// }


// export  {checkId , checkName};






