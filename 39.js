function solution(n, m) {

    function max(n, m) {
        while (m !== 0) {
            let temp = m;
            m = n % m;
            n = temp;
        }
        return n;
    }

    
    function min(n, m) {
        return (n * m) / max(n, m);
    }

    
    
    return [max(n, m), min(n, m)];

}