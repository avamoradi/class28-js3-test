'use strict'

/*
    Put your JavaScript here
*/

const selectOption = document.querySelector('.movieSelect');
const rightDiv = document.querySelector('.right');

function fetchData(title){
    console.log(title);
    const url = `http://www.omdbapi.com/?t=${title}&apikey=1d6d2f5b`;
    fetch(url)
    .then(response => {
        if (response.ok){
            return response.json()
        }else {
            throw "HTTP ERROR"
        }
    })
    .then(jsonData => {
        rightDiv.innerHTML += `<img src =${jsonData.Poster} class ="poster"><img>
        <h2>${jsonData.Title}</h2>
        <p>${jsonData.Plot}</p>`
        console.log(jsonData)
        
    })
.catch(error => console.log(error));
}
selectOption.addEventListener('change', () => {
    rightDiv.innerHTML = ""
    let movieTitle = selectOption.value;
    fetchData(movieTitle)
})

window.onload = fetchData(selectOption.value);