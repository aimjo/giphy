console.log("Let's get this party started!");

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const removeButton = document.getElementById("removeButton");
const gifArea = document.getElementById("gifArea");

searchForm.addEventListener("submit", async function(evt) {
    evt.preventDefault();

    let searchTerm = searchInput.value;
    searchInput.value = "";

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
        q: searchTerm,
        api_key: "uR1SbfjwMEQnHkQ63NVdkgCYn5kWozl7"
        }
    });

    const gifData = response.data;
        if (gifData && gifData.data && gifData.data.length > 0) {
            const randomIdx = Math.floor(Math.random() * gifData.data.length);
            const gifUrl = gifData.data[randomIdx].images.original.url;
            const newGif = document.createElement("img");
            newGif.src = gifUrl;
            gifArea.appendChild(newGif);
        }
    });

removeButton.addEventListener("click", function() {
    gifArea.innerHTML = "";
});
