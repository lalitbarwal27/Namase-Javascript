//these are callback fucntions 

const area = (radi) => {
    return Math.PI * radi * radi
}



const circumfrence=(radi) => {
    return 2*Math.PI * radi
}

const diameter =(radi) => {
    return 2*radi
}

let radius=[2,5,3,6]

//this is higher order function the fucniton that take one fucntion as parameter is known as higher order
//funtion

const calculate = function (logic){
    let output=[]
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output
}

//Now any array can use this as it is added itno array prototype
Array.prototype.calculate = function (logic){
    let output=[]
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]))
    }
    return output
}

console.log(radius.map(area))

console.log(radius.calculate(area))