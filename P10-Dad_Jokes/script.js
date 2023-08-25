const jokeApi = "https://icanhazdadjoke.com/";
const btn = document.getElementById("jokeBtn");
const joke = document.getElementById("joke");

btn.addEventListener("click", async () => {
  joke.innerText = await fetchJoke();
});

async function fetchJoke() {
  try {
    const response = await fetch(jokeApi, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response is not ok.");
    }

    const data = (await response.json()).joke;
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
