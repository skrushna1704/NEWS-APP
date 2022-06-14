console.log("krushna");
let API_KEY = "51d980063939495c87ea247f3c850b63";

const newsdetails = document.getElementById("newsdetails");

var newsDataArr = [];

let xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https:newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`
);
xhr.send();
xhr.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  newsDataArr = data.articles;
  console.log(data);
  displayNews();
});

function displayNews() {
  newsdetails.innerHTML = "";

  newsDataArr.forEach((news) => {
    var date = news.publishedAt.split("T");

    var col = document.createElement("div");
    col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

    var card = document.createElement("div");
    card.className = "p-2";

    var image = document.createElement("img");
    image.setAttribute("height", "matchparent");
    image.setAttribute("width", "100%");
    image.src = news.urlToImage;

    var cardBody = document.createElement("div");

    var newsHeading = document.createElement("h5");
    newsHeading.className = "card-title";
    newsHeading.innerHTML = news.title;

    var dateHeading = document.createElement("h6");
    dateHeading.className = "text-primary";
    dateHeading.innerHTML = date[0];

    var discription = document.createElement("p");
    discription.className = "text-muted";
    discription.innerHTML = news.description;

    var link = document.createElement("a");
    link.className = "btn btn-dark";
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = "Read more";

    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(discription);
    cardBody.appendChild(link);

    card.appendChild(image);
    card.appendChild(cardBody);

    col.appendChild(card);

    newsdetails.appendChild(col);
  });
}
