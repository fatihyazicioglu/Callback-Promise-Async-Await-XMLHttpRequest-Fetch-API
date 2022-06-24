const getUsers = (callback) =>{
    const xhr = new XMLHttpRequest();
     xhr.addEventListener("readystatechange",()=>{
         if(xhr.readyState== 4 && xhr.status==200){
             const data = JSON.parse(xhr.responseText);
             callback(undefined,data);
         }
         else if(xhr.readyState==4){
            callback("veriye erisilemedi",undefined);
         }
     });
     xhr.open("GET","https://jsonplaceholder.typicode.com/")
     xhr.send();
};


getUsers(function(err,data){
if (err) {
    console.log(err);
} else {
    console.log(data);
}
});