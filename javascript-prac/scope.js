
        let a=10;

function letScope(){

    {
        console.log(a);
    }
}
letScope();
console.log("outside",a);