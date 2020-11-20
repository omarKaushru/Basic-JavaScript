//Callback Function

// setTimeout(function(){
//     console.log("Hellos World");
// },5000);

////////////////Syncronus Way
// let persons = [{firstName: "Abul", lastName: "Kabul"},
//                 {firstName: "Omar", lastName: "Khoium"}
//             ];
// function createPerson(person){
//     setTimeout(function(){
//         persons.push(person);
//     },3000);
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

////////////////Asyncronus way

let persons = [{firstName: "Abul", lastName: "Kabul"},
                {firstName: "Omar", lastName: "Khoium"}
            ];
function createPerson(person, callback){
    setTimeout(function(){
        persons.push(person);
        callback();//this is actually callig getPerson() function
    },3000);
}

function getPerson(){
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName} </li>`;
        });
        document.getElementById('output').innerHTML = output;  
    },1000)
}
createPerson({firstName:"Shamsun", lastName: "Nahar"}, getPerson);
