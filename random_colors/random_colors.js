function randint(min, max) {
    return Math.round(Math.random() * (max - min)) + min
}

function random_spaced_hue(hue) {
    return randint(hue + 40, hue + 40 + 280) % 360
}

var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
let hue = 0

// scan left to right generating sufficiently different colors
// note that it's only different in the Y direction
let square_edge = 10
let col_count = 20
let row_count = 20

for (let x = 0; x < col_count; x++) {
    for (let y = 0; y < row_count; y++) {
        ctx.fillStyle = 'hsl(' + hue + ',100%, 50%)'
        ctx.fillRect(x * square_edge * 2, y * square_edge, square_edge, square_edge)

        // change hue
        hue = random_spaced_hue(hue)
        console.log(hue)
    }
}