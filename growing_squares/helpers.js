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

// TODO: Disable "growing back into yourself"
function get_possible_obj(square_edge, current_x, current_y, tree) {
    possible = {
        "up": [
            [current_x, current_y - square_edge]
        ],
        "horiz": [
            [current_x + square_edge, current_y],
            [current_x - square_edge, current_y]
        ]
    }

    for (const key in possible) {
        for (let i = 0; i < possible[key].length; i++) {
            for (let j = 0; j < tree.length; j++) {
                if (JSON.stringify(possible[key][i]) == JSON.stringify(tree[j])) {
                    console.log("cat");
                    possible[key].splice(i, 1)
                }
            }
        }
    }
    return possible
}

function random_select_from_possible(up_bias, possible) {
    up = Math.round(get_rand_bias(up_bias))

    if (up) {
        return possible["up"][0]
    }

    else {
        if (possible["horiz"].length == 2) {
            if (coinflip()) {
                return possible["horiz"][0]
            }
            else {
                return possible["horiz"][1]
            }
        }
        else {
            return possible["horiz"][0]
        }
    }
}

function get_next_coor(
    up_bias, square_edge, current_x, current_y, tree) {

    possible = get_possible_obj(square_edge, current_x, current_y, tree)
    next = random_select_from_possible(up_bias, possible)
    return next
}

