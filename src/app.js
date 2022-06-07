var advice = document.querySelector(".advice");
var idAdvice = document.querySelector(".idAdvice");

// function getAdvice() {
//     var getResponse = httpGet("https://api.adviceslip.com/advice");
//     console.log(getResponse);
//     advice.innerHTML = getResponse;
// }

// function httpGet(theUrl) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open("GET", theUrl, true);
//     xmlHttp.send();
//     console.log("Request Get sent to : " + theUrl);
//     console.log(xmlHttp.responseText);
//     return xmlHttp.responseText;
// }

// fetch("https://api.adviceslip.com/advice").then(function (response) {
//     return response.json();
// }).then(function (data) {
//     console.log(data);
// }).catch(function () {
//     console.log("Booo");
// });

async function getRequestToApi() {
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    return data;
}

function getAdvice() {
    let data = getRequestToApi();
    data.then(value => {
        console.log(value);
        advice.innerHTML = value.slip.advice;
        idAdvice.innerHTML = value.slip.id;
    });


}