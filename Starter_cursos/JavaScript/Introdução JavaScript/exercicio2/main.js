function pares(x, y) {
    var resp = 0;
    for(var i = x; i <= y; i++) {
        if(i % 2 == 0) {
            resp++;
        }
    }
    return resp;
}

console.log(pares(32, 321));