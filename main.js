let form = document.querySelector("form");
let input = document.querySelector("input");
let headingOne = document.querySelector("h1");
let headingTwo = document.querySelector("h2");
let image = document.querySelector("img");
let para = document.querySelector("p");
let card = document.querySelector(".card");


const getWeather = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=4a09027c7999443f82d120533231807&q=${input.value}&aqi=yes`
    );
    const data = await response.json();
    card.className = "card rounded-0 shadow-lg p-4";
    headingOne.innerText = data.location.name;
    headingTwo.innerText = `${data.current.temp_c}°C`;
    image.setAttribute("src", data.current.condition.icon);
    para.innerText = data.current.condition.text;
  } catch (err) {

    window.alert("Enter valid city name")
   
  }
  form.reset();
};

form.addEventListener("submit", getWeather);
