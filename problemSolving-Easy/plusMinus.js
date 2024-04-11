function plusMinus(arr){
    var positivos = 0;
    var negativos = 0;
    var zeros = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            positivos++;
        }else
            if(arr[i] < 0){
                negativos++;
            }
            else zeros++;
    }
    let percentPos = (positivos/arr.length);
    let percentNeg = (negativos/arr.length);
    let percentZero = (zeros/arr.length);
    console.log(percentPos.toFixed(6));
    console.log(percentNeg.toFixed(6));
    console.log(percentZero.toFixed(6));
}
arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);