function birthdayCakeCandles(candles){
    candles.sort(function (a, b) {
        return a - b;});
    var aux = candles[candles.length-1];
    var cont = 0;
    for (let i = 0; i < candles.length; i++) {
        if(candles[i] == aux){
            cont++;
        }
    }
    console.log(cont);
}

var candles = [3,2,1,3];

birthdayCakeCandles(candles);