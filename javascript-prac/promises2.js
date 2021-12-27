function OddFunc() {
  return  new Promise (function (resolve,reject){
        let i=22;
        if(i%2==0){
            console.log("The Number is Even : "+i);
            resolve("resolved");
        }else{
            console.log("The number is odd : "+i);
            reject("rejected");
        }
    });
}
OddFunc().then(function name(m) {
    console.log("Thank You "+m);
}).catch(
    function name(e) {
        console.log("very bad "+e);
    }
)
