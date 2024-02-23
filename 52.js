function solution(a, b, n) {
    let per = a / b;
    let empty = 0;
    let count = 0;
    while (n >= a) {
        if (n % per === 0) {
            empty = n / per;
        } else {
            empty = Math.floor(n / per);
        }
        count += empty;
        n -= empty * per;
        n += empty;
    }
    
    return count;
}