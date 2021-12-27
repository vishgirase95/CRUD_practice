// const input=prompt("Tell me number");

// function oddeven(){
//     return new Promise(function(resolve,reject){
//         let n=input;
//         if(n%2==0){
//             console.log("its even");
//             resolve();
//         }else
//         {
//             console.log("its odd")
//             reject();
//         }
//     })
// }

// oddeven().then(function(){
//     console.log("Its resolved");
    
// }).catch(function(){
//     console.log("Its not resolved");
    
// });






const xyz = () => {
    return new Promise((resolve, reject) => {
        let flag = true;
        if (flag) {
            resolve(abc());
        } else {
            reject("promise rejected");
        }
    })
}
var abc = () => {
    let a = 2;
    let b = 2
    let ab = a + b;
    console.log("addition", ab)
    return ab;
    }


xyz().then(value => console.log("promise reslove successfull", value))
    .catch(erro => console.log(erro));