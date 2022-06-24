// 1 ---  callback, promise, async/await --> to manipulate aysnc programing
// 2 --- XmlHttpRequest, Fetch API, Axios(kütüphane) --> HTTP 

// -----------------

let surname = ""

function getName(callback) {
    setTimeout(() => {
        surname = "mert"
        callback(surname)
    }, 2000);
    console.log(surname);
}
getName(function(surname){
    console.log(surname);
})

