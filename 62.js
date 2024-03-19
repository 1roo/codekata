function solution(babbling) {
    const strings = ["aya", "ye", "woo", "ma"];
    let count = 0;

    for (let b of babbling) {
        let isValid = true; 
        let remaining = b; 

        for (const s of strings) {
            if (remaining.includes(s)) {
                remaining = remaining.replace(s, "");
            }
        }

        if (remaining.length > 0) {
            isValid = false;
        }

        if (isValid) {
            count++;
        }
    }

    return count;
}
