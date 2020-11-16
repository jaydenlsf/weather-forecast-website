console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const locationPara = document.querySelector("#locationPara");
const forecastPara = document.querySelector("#forecastPara");

weatherForm.addEventListener("submit", (e) => {
  // .preventDefault prevents the page from refreshing after submitting a form
  e.preventDefault();
  const location = search.value;
  locationPara.textContent = "Searching...";
  forecastPara.textContent = "";

  let url = `http://127.0.0.1:3000/weather?address=${location}`;

  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        locationPara.textContent = data.error;
        forecastPara.textContent = "Please provide a valid address.";
      } else {
        locationPara.textContent = data.location;
        forecastPara.textContent = data.forecast;
      }
    });
  });
});
