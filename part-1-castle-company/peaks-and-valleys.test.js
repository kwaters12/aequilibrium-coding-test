const expect = require('chai').expect
const peaksAndValleys = require('./peaks-and-valleys')

it('should calculate the amount of castles', () => {
    expect(peaksAndValleys([1, 2, 2, 2, 2, 3, 4, 5, 6, 3, 26, 7, 7, 7, 7, 7, 2])).equals(10)
    expect(peaksAndValleys([1])).equals(1)
    expect(peaksAndValleys([1,2,3])).equals(3)
    expect(peaksAndValleys([1,2,2,3])).equals(3)
    expect(peaksAndValleys([1,2,3,3,3,3,3,3])).equals(3)
    expect(peaksAndValleys([1,1,1,1,1,2,2,2,2,3,3])).equals(3)
    expect(peaksAndValleys([1,1,1,2,1,2,2,2,2,3,3])).equals(5)
})
