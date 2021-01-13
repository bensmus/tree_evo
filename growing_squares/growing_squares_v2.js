// implement branching
// have skeleton

// after you add to square, check if the square is still free
// snap to nearest height (nearest available leaf at that height)

// 5x5 is a good size for squares in this context
let square_edge = 5

// implement probibalistic side/up-growing, branching, 
// and collision detection

var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
ctx.fillStyle = "hsl(0, 100%, 50%)"

// equal prob to grow up or to side
let up_bias = 0.5

// start coord
let x = 250
let y = 500

let generate_count = 100
let tree = []

// fill current, then move to next
for (let i = 0; i < generate_count; i++) {
    ctx.fillRect(x, y, square_edge, square_edge)
    tree.push([x, y])

    let xy_arr = get_next_coor(up_bias, square_edge, x, y, tree)
    x = xy_arr[0]
    y = xy_arr[1]
}