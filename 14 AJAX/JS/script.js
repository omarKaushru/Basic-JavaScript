// //Asynchronus Programming
// //AJAX--> Asynchronous Javascript And XML
// //Get data without loading the website 

// document.getElementById('get_data').addEventListener('click',loadData);

// function loadData(){
//     //create XHR(XML http request) object
//     let xhr = new XMLHttpRequest();
//     //open function to take information frmo the external file
//     xhr.open('GET','data.txt', true);

//     //this function used to show status of the request to the user
//     xhr.onprogress = function(){
//         console.log(this.readyState);
//     }
//     // onload function
//     // mordern method
//     xhr.onload = function(){
//         // HTTP statuses 
//         // 200: "OK"
//         // 403: "Forbidden"
//         // 404: "Not Found"
//         if(this.status === 200)
//         {
//             // console.log(this.status);
//             // console.log(this.responseText);
//             document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4>`;
//         }
//     }

//     //ready state // old method 
//     // xhr.onreadystatechange = function(){
//     //     // readyState values 
//     //     // 0: request not initialized
//     //     // 1: server connection established 
//     //     // 2: request received 
//     //     // 3: proccessing request 
//     //     // 4: request finished and response is ready
//     //     // console.log(this.readyState);
//     //     if(this.status===200 && this.readyState===4)
//     //     {
//     //         document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4>`;
//     //     }
//     // }

//     xhr.send();//without calling thins function we can't show the data of the external file.
//     // console.log(xhr);
// }


////////////////////////////////////////////////////////// Data From External Server

// http://www.icndb.com/api/
// API
// RESTful API


document.getElementById('get_data').addEventListener('click', loadJokes);


function loadJokes(e){
    let number = document.getElementById('numberJokes').value;
    let xhr = new XMLHttpRequest();
    // console.log(number);

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    xhr.onprogress = function () {
        document.getElementById('output').innerHTML = "<h3>Loading......</h3>";
    }
    xhr.onload = function(){
        if(this.status === 200)
        {
            let data = JSON.parse(this.responseText); //converting into JS object
            // let joke = data.value.joke;//accesing individula jokes. 
            let jokes = data.value; //passing whole array
            // console.log(data);
            let output = "<ol>";
            jokes.forEach(function (item) {
                //console.log(item.joke);
                output += `<li>${item.joke}</li>`;
            });
            // output = "</ol>"
            output += "</ol>";
            document.getElementById('output').innerHTML = output;
        }
    }
    xhr.send();
}