"use strict";
const shortBtn = document.querySelector(".shorterBtn");
const linkInput = document.querySelector(".linkInput");
const answer = document.querySelector(".answer");
const mainUrl = document.querySelector(".first");
const shortLink = document.querySelector(".shortLink");
// const links = [];

shortBtn.addEventListener("click", async function shorter(e) {
  e.preventDefault();
  let getUrl = linkInput.value;

  if (getUrl !== "") {
    try {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${getUrl}`);
      const data = await res.json();
      const result = data.result.full_short_link;
      shortLink.textContent = result;
      answer.style.display = "flex";
      mainUrl.textContent = getUrl;
      // links.push(data.result.full_short_link);
    } catch (error) {
      alert("Error:", error);
    }
    // links.map((url) => {
    //   console.log(url);
    // });
  } else {
    linkInput.style.backgroundColor = "#FF7373";
  }
  linkInput.value = "";
});
