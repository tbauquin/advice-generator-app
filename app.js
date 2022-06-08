var advice = document.querySelector(".advice");
var idAdvice = document.querySelector(".idAdvice");

async function getRequestToApi() {
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    return data;
}

function getAdvice() {
    let data = getRequestToApi();
    data.then(value => {
        console.log(value);
        advice.innerHTML = "\"" + value.slip.advice + "\"";
        idAdvice.innerHTML = value.slip.id;
    });


}