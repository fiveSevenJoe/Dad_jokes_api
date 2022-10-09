// setting up my btn to call the async function below
document.querySelector(".searchBtn").addEventListener("click", getResponse);

// my async/await function to GET the data from APi
async function getResponse() {
  const response = await fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "067bd98450msh740284d0d78562bp15b4cfjsn3d2a4ec189b1",
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  });

  if (!response.ok) {
    throw new Error(console.log("didn;t catch up!"));
  }
  const data = await response.json();
  if (response) {
    console.log(data);
  }
  //  Here is where I load stuff onto the page with innerHtml
  document.querySelector(
    ".jokesBox"
  ).innerHTML = `<h3>${data.body[0].setup}</h3>
  <p>${data.body[0].punchline}</p>`;
}
