const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const locationPara = document.querySelector("#locationPara");
const forecastPara = document.querySelector("#forecastPara");

search.focus();

weatherForm.addEventListener("submit", (e) => {
  // .preventDefault prevents the page from refreshing after submitting a form
  e.preventDefault();
  const location = search.value;
  locationPara.textContent = "Searching...";
  forecastPara.textContent = "";

  let url = `/weather?address=${location}`;

  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        locationPara.textContent = data.error;
        forecastPara.textContent = "";
        search.value = "";
      } else {
        locationPara.textContent = data.location;
        forecastPara.textContent = data.forecast;
        search.value = "";
      }
    });
  });
});
