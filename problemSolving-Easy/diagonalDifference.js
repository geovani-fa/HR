function diagonalDifference(arr) {
    var somaDiag = 0;
    var somaSec = 0;

    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length; j++){
            //Diagonal principal i=j
            if(i==j){
                somaDiag += arr[i][j];
            }
            //Diagonal secundaria i+j = tamanho da matriz + 1
            if(i+j == arr.length-1){
                somaSec +=arr[i][j]
            }
        }
    }
    return Math.abs(somaDiag - somaSec);
}

arr = [[11,2,4],
       [4,5,6],
       [10,8,-12]
      ];

diagonalDifference(arr);