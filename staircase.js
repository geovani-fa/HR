function staircase(n){
    var caseS = "#";
    
    for (let index = 1; index <= n; index++) {
        console.log(caseS.repeat(index).padStart(n," "));
    }
}
staircase(6);