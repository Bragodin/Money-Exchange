// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0){
        return {};
    }
    if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    const object = {};
    for(let i = 0; i <= 10000; i++){
        // let sum = (object["H"] * 50) + (object["Q"] * 25) + (object["D"] *10) + (object["N"] * 5) + object.["P"];
        if ((i * 50) <= currency && ((i + 1) * 50) > currency){
            object["H"] = i;
        }
        else {
            delete object["H"];
        }
    }
    for(let k = 0; k <= 10000; k++){
        if ((object["H"] * 50) + (k * 25) <= currency && ((object["H"] * 50) + ((k + 1) * 25)) > currency){
            object["Q"] = k;
        }
        else{
            delete object["Q"];
        }
    }
    for(let f = 0; f <= 10000; f++){
        if ((object["H"] * 50) + (object["Q"] * 25) + (f * 10) <= currency && ((object["H"] * 50) + (object["Q"] * 25) + ((f + 1) * 10)) > currency){
            object["D"] = f;
        }
        else {
            delete object["D"];
        }
    }
    for(let z = 0; z <= 10000; z++){
        if ((object["H"] * 50) + (object["Q"] * 25) + (object["D"] * 10) + (z * 5) <= currency && (object["H"] * 50) + (object["Q"] * 25) + (object["D"] * 10)+ ((z + 1) * 5 > currency)){
            object["N"] = z;
        }
        else {
            delete object["N"]; 
        }
    }
    for(let g = 0; g <= 10000; g++){
        if ((object["H"] * 50) + (object["Q"] * 25) + (object["D"] * 10) + (object["N"] * 5) + (g * 1) == currency){
            object["P"] = g;
        }
        else{
            delete object["P"];
        }
    }
      return object;
}
