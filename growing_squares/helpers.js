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

// TODO: Disable "growing back into yourself"

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

function snap(in_number, list_of_numbers) {

    // snapped number
    let out_number = list_of_numbers[0]

    for (let index = 1; index < list_of_numbers.length; index++) {
        const number = list_of_numbers[index];
        if (Math.abs(number - in_number) < Math.abs(out_number - in_number)) {
            out_number = number
        }
    }

    return out_number
}