function miniMaxSum(arr){
    var aux = [];
    var soma = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(i == j){
                continue;
            }else{
                soma += arr[j];
            }
        }
        aux[i] = soma;
        soma = 0;
    }
    aux.sort();

    console.log(aux[0]+" "+aux[4]);
}
arr = [793810624, 895642170, 685903712, 623789054, 468592370];
miniMaxSum(arr);