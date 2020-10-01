'use strict'

/*
    Put your JavaScript here
*/


const selectOption = document.querySelector('.movieSelect');
const imagePoster = document.querySelector('.poster');
const rightDiv = document.querySelector('.right');
const plot = document.querySelector('.plot');

// this is the API KEY which i got from website and is not working (invalid): http://www.omdbapi.com/?apikey=58972a3b

function fetchData(){
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=1d6d2f5b";
   // const url = "http://www.omdbapi.com/?apikey=58972a3b";



    fetch(url)
    .then(response => {
        if (response.status >= 200 && response.status <400){
            return response.json()
        }else {
            throw "HTTP ERROR"
        }
    })
    .then(jsonData => {

        // const newArray = jsonData.results;
        // newArray.forEach((element) => {
        //   var opt = document.createElement('option');
        //   opt.appendChild(document.createTextNode(`${element.name}`));
        //   selectOption.appendChild(opt)
        //  }); 
        //  selectOption.addEventListener('change', function(){
        //    rightDiv.innerHTML = ""
        //    newArray.forEach((element2 => {
        //      if (element2.name === selectOption.value){
             //rightDiv.innerHTML = `<img src = jsonData.Poster></img>
            //<p> jsonData.Plot</p>`
            
        //}
        //        

        // code above should be my code , but since i had a problem with my API KEY im not able to find a correct UTL ! I WASNT ABLE TO DO MY TEST :(
        
        console.log(jsonData)
        var opt = document.createElement('option');
          opt.appendChild(document.createTextNode(`${jsonData.Title}`));
          selectOption.appendChild(opt);
          imagePoster.src = jsonData.Poster;
          rightDiv.appendChild(imagePoster);
          plot.innerHTML = jsonData.Plot;
          rightDiv.appendChild(plot);
    })
   
    .catch(error => console.log(error));
}

window.onload = fetchData;