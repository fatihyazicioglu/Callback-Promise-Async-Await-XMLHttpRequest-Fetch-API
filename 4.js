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




//Async/Await
  const getData = async()=>{
      const response =await fetch ("https://jsonplaceholder.typicode.com/users");
      if(response.status!=200){
          throw new Error ("Veri alinamadi");
      }
      try{
          const data=await response.json();
          return data;
      }
      catch(err){
          return new Promise ((resolve,reject)=>reject("json verisi ayiklanamadi."))
      }
  }
  getData()
  .then(data=>console.log(data))
  .catch(err=>console.log(err))