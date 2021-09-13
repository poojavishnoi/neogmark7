var inputTxt = document.querySelector("#inputarea");
var translatebtn = document.querySelector("#translatebtn");
var outputTxt = document.querySelector("#outputarea");

translatebtn.addEventListener("click", clickEventHandler);

var url = "	https://api.funtranslations.com/translate/yoda.json";

function getUrl(text){
  return url+ "?text=" + text;
}

function errorHandler(error){
  console.log("error occured: " + error);
}

function clickEventHandler(){
  var input = inputTxt.value;


  fetch(getUrl(input))
    .then(resp => resp.json())
    .then(data => {
      outputTxt.innerHTML = data.contents.translated;
      console.log(data.contents.translated)
    })
    .catch(errorHandler)

}
