btn=document.querySelector("button");
h1=document.querySelector("h1");

btn.addEventListener("click",() => {
    generateQuote();



});

url="https://dummyjson.com/quotes/random";
function generateQuote(){
    fetch(url)
    .then((res) => {
        console.log(res);
        res.json()
        .then((data) => {
            console.log(data.quote);
            h1.innerHTML=data.quote;            
        });
    })
    .catch((err) => {
        console.log("error- ",err);
    });
}