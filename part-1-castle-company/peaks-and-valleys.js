const peaksAndValleys = arr => {
    let totalCastles = 0
    let prevVal = 0
    let currVal = 0
    for (let i = 1; i <= arr.length; i++) {
        prevVal = arr[i-1]
        currVal = arr[i]
        if (arr[i] !== arr[i-1]) {
            if (currVal - prevVal !== 0) {
                totalCastles +=1
            }
        } else if (i === arr.length) {
            totalCastles += 1
        }
        
    }

    return totalCastles
}

console.log(peaksAndValleys([1,2,2,2,2,3,4,5,6,3,26,7,7,7,7,7,2]))
console.log(peaksAndValleys([6, 1,2, 1, 4, 4, 4]))