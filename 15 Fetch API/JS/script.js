// //Callback Function

// // setTimeout(function(){
// //     console.log("Hellos World");
// // },5000);

// ////////////////Syncronus Way
// // let persons = [{firstName: "Abul", lastName: "Kabul"},
// //                 {firstName: "Omar", lastName: "Khoium"}
// //             ];
// // function createPerson(person){
// //     setTimeout(function(){
// //         persons.push(person);
// //     },3000);
// // }

// // function getPerson(){
// //     setTimeout(function(){
// //         let output = '';
// //         persons.forEach(function(person){
// //             output += `<li>${person.firstName} ${person.lastName} </li>`;
// //         });

// //         document.getElementById('output').innerHTML = output;
        
// //     },1000)
// // }

// ////////////////Asyncronus way

// // let persons = [{firstName: "Abul", lastName: "Kabul"},
// //                 {firstName: "Omar", lastName: "Khoium"}
// //             ];
// // function createPerson(person, callback){
// //     setTimeout(function(){
// //         persons.push(person);
// //         callback();//this is actually callig getPerson() function
// //     },3000);
// // }

// // function getPerson(){
// //     setTimeout(function(){
// //         let output = '';
// //         persons.forEach(function(person){
// //             output += `<li>${person.firstName} ${person.lastName} </li>`;
// //         });
// //         document.getElementById('output').innerHTML = output;  
// //     },1000)
// // }
// // createPerson({firstName:"Shamsun", lastName: "Nahar"}, getPerson);

// /////////////////////JavaScript Promises
// //////.then 
// /// promises is an alternative of callback function

// let persons = [{firstName: "Abul", lastName: "Kabul"},
//                 {firstName: "Omar", lastName: "Khoium"}
//             ];
// function createPerson(person){
//     let prom = new Promise(function (resolve, reject){
//         persons.push(person);
//       //  resolve(); //helps to keeps(excute) the promise

//         //what will happen if there is error
//         //creating dummy error
//         let error = true;
//         if(!error)
//         {
//             resolve();
//         }
//         else{
//             reject('Error: Something worng');
//         }
//     });
//     return prom;
// }

// function getPerson(){
//     setTimeout(function(){
//         let output = '';
//         persons.forEach(function(person){
//             output += `<li>${person.firstName} ${person.lastName} </li>`;
//         });
//         document.getElementById('output').innerHTML = output;  
//     },1000)
// }
// createPerson({firstName:"Shamsun", lastName: "Nahar"}).then(getPerson).catch(function(err){
//     console.log(err);
// });

////////////////////////////////////////////Fetch API
//Fetche API uses javaScript Promise
// console.log(window);
document.getElementById("get_data").addEventListener('click',getData);

function getData(){
    // console.log("clicked");
    fetch('http://api.icndb.com/jokes/random').then(function(res){
        // console.log(res.json());
        return res.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })
}