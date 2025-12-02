//purely backend where we hit the url/api we get the data 
let doc = document.getElementById("product-data");
let statement = "";

async function fetchData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
    // console.log(data.Products);
    statement = data.map((value) => {
    console.log("I have a code", value);            
    return `<div class="product">
    <h1>${value.title}</h1>
    </div>`
    }    
);

doc.innerHTML = statement;
}
fetchData();