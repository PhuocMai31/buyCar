function buyACar (){
    let carPrice = 3;
    let myMoney = 2
    return new Promise(function (resolve,reject){
        setTimeout(function (){
            if (myMoney>=carPrice){
                resolve("Du tien mua xe")
            } else {
                reject("Deo du tien mua")
            }
        })
    })

}
buyACar ()
    .then(function (data){
        console.log(data);
    })
    .catch((data) =>{
        console.log(data)
    })