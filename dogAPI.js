// This code snippet fetches a random dog image from the Dog CEO API when a button is clicked. It then sets the source of an image element to the fetched image URL and logs the URL to the console.

let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let link = await getDogImg();
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    console.log(link);
})


async function getDogImg() {

    try {
        let img = await axios.get(url);
        return img.data.message;
    }
    catch (e) {
        console.log("Error -", e);
    }
}
