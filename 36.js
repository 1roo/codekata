function solution(s) {
    if (s.length === 4 || s.length === 6) {
        for (var i = 0; i < s.length; i++) {
            if (s[i] < '0' || s[i] > '9') {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}