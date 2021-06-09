const inputData = document.querySelector("input");
const buttonClick = document.querySelector("#buttonClickEvent");
const firstPara = document.querySelector("#message1");
const secondPara = document.querySelector("#message2");
buttonClick.addEventListener("click", (e) => {
  e.preventDefault();
  firstPara.textContent = "Loading...";
  secondPara.textContent = "";

  const location = inputData.value;

  console.log(location);
  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
        firstPara.textContent = "Smile, you are alive";
        secondPara.textContent = data.error;
      } else {
        const messageToPrint = `${data.dataForLocation.weather_descriptions[0]} in ${location}, temperature is ${data.dataForLocation.temperature}`;
        firstPara.textContent = "Smile, you are alive";
        secondPara.textContent = messageToPrint;
        console.log(data);
      }
    });
  });
});
