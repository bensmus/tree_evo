// taken from:
// https://stackoverflow.com/questions/29325069/how-to-generate-random-numbers-biased-towards-one-value-in-a-range
function get_rand_bias(bias) {
    let rand = Math.random()
    let mix = Math.random()
    return rand * (1 - mix) + bias * mix
}

function coinflip() {
    return Math.round(Math.random())
}

function get_next_coors(
    upside_bias, square_edge, current_x, current_y) {

    up = Math.round(get_rand_bias(upside_bias))

    if (up) {
        return [current_x, current_y - square_edge]
    }

    else {
        if (coinflip()) {
            return [current_x + square_edge, current_y]
        }
        else {
            return [current_x - square_edge, current_y]
        }
    }

}

// 5x5 is a good size for squares in this context
let square_edge = 5

// implement probibalistic side/up-growing, branching, 
// and collision detection

var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
ctx.fillStyle = "hsl(0, 100%, 50%)"

// equal prob to grow up or to side
let bias = 0.5

// start coord
let x = 250
let y = 500

let generate_count = 100


// fill current, then move to next
for (let i = 0; i < generate_count; i++) {
    ctx.fillRect(x, y, square_edge, square_edge)
    let xy_arr = get_next_coors(0.5, square_edge, x, y)
    x = xy_arr[0]
    y = xy_arr[1]
    console.log(x, y)
}
