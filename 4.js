// fetch api

fetch("https://jsonplaceholder.typicode.com/users")
.then((response=>{
    const data =response.json();
    return data;
}))
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})