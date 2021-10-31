// button click handler

var replay_box = [];
var replay_value = [];

let count = 0;
let button1 = document.getElementById("box-1");
let player = document.getElementById("next-player");
let moves = document.getElementById("move-count");
button1.addEventListener('click', () => {
    count++;
    let moves_left = 9 - count;
    if (count % 2 == 0) {
        player.textContent = "Turn Played by : B"
        moves.textContent = "Moves left: " + moves_left;
        button1.innerHTML = "X"
        replay_box.push("box-1");
        replay_value.push("X");
    }
    else {
        moves.textContent = "Moves left: " + moves_left;
        player.textContent = "Turn Played by : A"
        button1.innerHTML = "0"
        replay_box.push("box-1");
        replay_value.push("0");
    }
    button1.disabled = true;
    button1.addEventListener('click', checkWinner());
});


let button2 = document.getElementById("box-2");
button2.addEventListener('click', () => {
    count++;
    let moves_left = 9 - count;
    if (count % 2 == 0) {
        player.textContent = "Turn Played by : B"
        moves.textContent = "Moves left: " + moves_left;
        button2.innerHTML = "X"
        replay_box.push("box-2");
        replay_value.push("X");
    }
    else {
        player.textContent = "Turn Played by : A"
        moves.textContent = "Moves left: " + moves_left;
        button2.innerHTML = "0"
        replay_box.push("box-2");
        replay_value.push("0");
    }
    button2.disabled = true;
    button2.addEventListener('click', checkWinner());
});
let button3 = document.getElementById("box-3");
button3.addEventListener('click', () => {
    count++;
    let moves_left = 9 - count;
    if (count % 2 == 0) {
        player.textContent = "Turn Played by : B"
        moves.textContent = "Moves left: " + moves_left;
        button3.innerHTML = "X"
        replay_box.push("box-3");
        replay_value.push("X");
    }
    else {
        player.textContent = "Turn Played by : A"
        moves.textContent = "Moves left: " + moves_left;
        button3.innerHTML = "0"
        replay_box.push("box-3");
        replay_value.push("0");
    }
    button3.disabled = true;
    button3.addEventListener('click', checkWinner());
});
let button4 = document.getElementById("box-4");
button4.addEventListener('click', () => {
    count++;
    let moves_left = 9 - count;
    if (count % 2 == 0) {
        player.textContent = "Turn Played by : B"
        moves.textContent = "Moves left: " + moves_left;
        button4.innerHTML = "X"
        replay_box.push("box-4");
        replay_value.push("X");
    }
    else {
        player.textContent = "Turn Played by : A"
        moves.textContent = "Moves left: " + moves_left;
        button4.innerHTML = "0"
        replay_box.push("box-4");
        replay_value.push("0");
    }
    button4.disabled = true;
    button4.addEventListener('click', checkWinner());
})
let button5 = document.getElementById("box-5");
button5.addEventListener('click', () => {
    count++;
    let moves_left = 9 - count;
    if (count % 2 == 0) {
        player.textContent = "Turn Played by : B"
        moves.textContent = "Moves left: " + moves_left;
        button5.innerHTML = "X"
        replay_box.push("box-5");
        replay_value.push("X");
    }
    else {
        player.textContent = "Turn Played by : A"
        moves.textContent = "Moves left: " + moves_left;
        button5.innerHTML = "0"
        replay_box.push("box-5");
        replay_value.push("0");
    }
    button5.disabled = true;
    button5.addEventListener('click', checkWinner());
})
let button6 = document.getElementById("box-6");
button6.addEventListener('click', () => {
    count++;
    let moves_left = 9 - count;
    if (count % 2 == 0) {
        player.textContent = "Turn Played by : B"
        moves.textContent = "Moves left: " + moves_left;
        button6.innerHTML = "X"
        replay_box.push("box-6");
        replay_value.push("X");
    }
    else {
        player.textContent = "Turn Played by : A"
        moves.textContent = "Moves left: " + moves_left;
        button6.innerHTML = "0"
        replay_box.push("box-6");
        replay_value.push("0");
    }
    button6.disabled = true;
    button6.addEventListener('click', checkWinner());
})
let button7 = document.getElementById("box-7");
button7.addEventListener('click', () => {
    count++;
    let moves_left = 9 - count;
    if (count % 2 == 0) {
        player.textContent = "Turn Played by : B"
        moves.textContent = "Moves left: " + moves_left;
        button7.innerHTML = "X"
        replay_box.push("box-7");
        replay_value.push("X");
    }
    else {
        player.textContent = "Turn Played by : A"
        moves.textContent = "Moves left: " + moves_left;
        button7.innerHTML = "0"
        replay_box.push("box-7");
        replay_value.push("0");
    }
    button7.disabled = true;
    button7.addEventListener('click', checkWinner());
})
let button8 = document.getElementById("box-8");
button8.addEventListener('click', () => {
    count++;
    let moves_left = 9 - count;
    if (count % 2 == 0) {
        player.textContent = "Turn Played by : B"
        moves.textContent = "Moves left: " + moves_left;
        button8.innerHTML = "X"
        replay_box.push("box-8");
        replay_value.push("X");
    }
    else {
        player.textContent = "Turn Played by : A"
        moves.textContent = "Moves left: " + moves_left;
        button8.innerHTML = "0"
        replay_box.push("box-8");
        replay_value.push("0");
    }
    button8.disabled = true;
    button8.addEventListener('click', checkWinner());
})
let button9 = document.getElementById("box-9");
button9.addEventListener('click', () => {
    count++;
    let moves_left = 9 - count;
    if (count % 2 == 0) {
        player.textContent = "Turn Played by : B"
        moves.textContent = "Moves left: " + moves_left;
        button9.innerHTML = "X"
        replay_box.push("box-9");
        replay_value.push("X");
    }
    else {
        player.textContent = "Turn Played by : A"
        moves.textContent = "Moves left: " + moves_left;
        button9.innerHTML = "0"
        replay_box.push("box-9");
        replay_value.push("0");
    }
    button9.disabled = true;
    button9.addEventListener('click', checkWinner());
})

for (let k = 0; k < replay_box.length; k++) {
    let x = replay_box[k];
    console.log(x);
}


//apply event to generate new game state
let reset_ref = document.getElementById("reset");
reset_ref.addEventListener('click', () => {
    location.reload();
})



// game state renderer renders the generated game state

// renders text on button clicked with X or O

// disable the button clicked

// update panel values such as Turn Played By and Moves Left

// reset panel values to default values

// implement logic to get the winner

function checkWinner() {
    let winner_board = document.getElementById("winner-display-board");
    if (button1.innerHTML == "X" && button2.innerHTML == "X" && button3.innerHTML == "X") {
        winner_board.style.display = "block"
        let new_element = document.createElement("h1");
        new_element.innerHTML = "The Winner is: B";
        winner_board.appendChild(new_element);

        button1.style.backgroundColor = "pink"
        button2.style.backgroundColor = "pink"
        button3.style.backgroundColor = "pink"
    }
    else if (button1.innerHTML == "0" && button2.innerHTML == "0" && button3.innerHTML == "0") {
        winner_board.style.display = "block"
        let new_element = document.createElement("h1");
        new_element.innerHTML = "The Winner is: A";
        winner_board.appendChild(new_element);

        button1.style.backgroundColor = "pink"
        button2.style.backgroundColor = "pink"
        button3.style.backgroundColor = "pink"
    }
    else if (button4.innerHTML == "X" && button5.innerHTML == "X" && button6.innerHTML == "X") {
        winner_board.style.display = "block"
        let new_element = document.createElement("h1");
        new_element.innerHTML = "The Winner is: B";
        winner_board.appendChild(new_element);

        button4.style.backgroundColor = "pink"
        button5.style.backgroundColor = "pink"
        button6.style.backgroundColor = "pink"
    }
    else if (button4.innerHTML == "0" && button5.innerHTML == "0" && button6.innerHTML == "0") {
        winner_board.style.display = "block"
        let new_element = document.createElement("h1");
        new_element.innerHTML = "The Winner is: A";
        winner_board.appendChild(new_element);

        button4.style.backgroundColor = "pink"
        button5.style.backgroundColor = "pink"
        button6.style.backgroundColor = "pink"
    }
    else if (button7.innerHTML == "0" && button8.innerHTML == "0" && button9.innerHTML == "0") {
        winner_board.style.display = "block"
        let new_element = document.createElement("h1");
        new_element.innerHTML = "The Winner is: A";
        winner_board.appendChild(new_element);

        button7.style.backgroundColor = "pink"
        button8.style.backgroundColor = "pink"
        button9.style.backgroundColor = "pink"
    }
    else if (button7.innerHTML == "X" && button8.innerHTML == "X" && button9.innerHTML == "X") {
        winner_board.style.display = "block"
        let new_element = document.createElement("h1");
        new_element.innerHTML = "The Winner is: B";
        winner_board.appendChild(new_element);

        button7.style.backgroundColor = "pink"
        button8.style.backgroundColor = "pink"
        button9.style.backgroundColor = "pink"
    }
    else if (button1.innerHTML == "X" && button4.innerHTML == "X" && button7.innerHTML == "X") {
        winner_board.style.display = "block"
        let new_element = document.createElement("h1");
        new_element.innerHTML = "The Winner is: B";
        winner_board.appendChild(new_element);

        button1.style.backgroundColor = "pink"
        button4.style.backgroundColor = "pink"
        button7.style.backgroundColor = "pink"
    }
    else if (button1.innerHTML == "0" && button4.innerHTML == "0" && button7.innerHTML == "0") {

        winner_board.style.display = "block"
        let new_element = document.createElement("h1");
        new_element.innerHTML = "The Winner is: A";
        winner_board.appendChild(new_element);

        button1.style.backgroundColor = "pink"
        button4.style.backgroundColor = "pink"
        button7.style.backgroundColor = "pink"
    }
    else if (button3.innerHTML == "X" && button6.innerHTML == "X" && button9.innerHTML == "X") {
        winner_board.style.display = "block"
        let new_element = document.createElement("h1");
        new_element.innerHTML = "The Winner is: B";
        winner_board.appendChild(new_element);

        button3.style.backgroundColor = "pink"
        button6.style.backgroundColor = "pink"
        button9.style.backgroundColor = "pink"
    }
    else if (button3.innerHTML == "0" && button6.innerHTML == "0" && button9.innerHTML == "0") {
        winner_board.style.display = "block"
        let new_element = document.createElement("h1");
        new_element.innerHTML = "The Winner is: A";
        winner_board.appendChild(new_element);

        button3.style.backgroundColor = "pink"
        button6.style.backgroundColor = "pink"
        button9.style.backgroundColor = "pink"
    }
    else if (button1.innerHTML == "0" && button5.innerHTML == "0" && button9.innerHTML == "0") {
        winner_board.style.display = "block"
        let new_element = document.createElement("h1");
        new_element.innerHTML = "The Winner is: A";
        winner_board.appendChild(new_element);

        button1.style.backgroundColor = "pink"
        button5.style.backgroundColor = "pink"
        button9.style.backgroundColor = "pink"
    }
    else if (button1.innerHTML == "X" && button5.innerHTML == "X" && button9.innerHTML == "X") {
        winner_board.style.display = "block"
        let new_element = document.createElement("h1");
        new_element.innerHTML = "The Winner is: B";
        winner_board.appendChild(new_element);

        button1.style.backgroundColor = "pink"
        button5.style.backgroundColor = "pink"
        button9.style.backgroundColor = "pink"
    }
    else if (button3.innerHTML == "0" && button5.innerHTML == "0" && button7.innerHTML == "0") {
        winner_board.style.display = "block"
        let new_element = document.createElement("h1");
        new_element.innerHTML = "The Winner is: A";
        winner_board.appendChild(new_element);

        button3.style.backgroundColor = "pink"
        button5.style.backgroundColor = "pink"
        button7.style.backgroundColor = "pink"
    }
    else if (button3.innerHTML == "X" && button5.innerHTML == "X" && button7.innerHTML == "X") {
        winner_board.style.display = "block"
        let new_element = document.createElement("h1");
        new_element.innerHTML = "The Winner is: B";
        winner_board.appendChild(new_element);

        button3.style.backgroundColor = "pink"
        button5.style.backgroundColor = "pink"
        button7.style.backgroundColor = "pink"
    }
    else if (button2.innerHTML == "X" && button5.innerHTML == "X" && button8.innerHTML == "X") {
        winner_board.style.display = "block"
        let new_element = document.createElement("h1");
        new_element.innerHTML = "The Winner is: B";
        winner_board.appendChild(new_element);

        button2.style.backgroundColor = "pink"
        button5.style.backgroundColor = "pink"
        button8.style.backgroundColor = "pink"
    }
    else if (button2.innerHTML == "0" && button5.innerHTML == "0" && button8.innerHTML == "0") {
        winner_board.style.display = "block"
        let new_element = document.createElement("h1");
        new_element.innerHTML = "The Winner is: B";
        winner_board.appendChild(new_element);

        button2.style.backgroundColor = "pink"
        button5.style.backgroundColor = "pink"
        button8.style.backgroundColor = "pink"
    }
}

// announce winner


// REPLAY-MODE :: replay-game-button-clicked->fetches events recorded->apply event->generates new game state->render game state

document.getElementById("replay").addEventListener("click", () => {
    length = replay_box.length;
    console.log("Length");
    console.log(length);
    for (let j = 0; j < length; j++) {
        console.log("Inside clear");
        document.getElementById(replay_box[j]).innerHTML = "";
        document.getElementById(replay_box[j]).style.backgroundColor = "rgb(235, 219, 235)";
        let winner_board = document.getElementById("winner-display-board");
        winner_board.style.display = "none";
    }
    reload_results();


});


// reload_results();

function reload_results() {
    let time = 2000;
    let player_turn = document.getElementById("next-player");
    let left_moves = document.getElementById("move-count");

    for (let k = 0; k < length + 1; k++) {
        console.log("Inside reload");
        let moves_remaining = 9 - k;
        setTimeout(function () {
            if (k == 0 || k == 2 || k == 4 || k == 6 || k == 8) {
                console.log(replay_box[k]);
                let button_clicked = document.getElementById(replay_box[k]);
                player_turn.textContent = "Turn Played By: A";
                left_moves.textContent = "Moves Left: " + moves_remaining;
                button_clicked.textContent = replay_value[k];
                
                if(!button_clicked.textContent==""){
                    checkWinner();
                }
            }
            else {
                let button_clicked = document.getElementById(replay_box[k]);
                player_turn.textContent = "Turn Played By: B";
                left_moves.textContent = "Moves Left: " + moves_remaining;
                button_clicked.textContent = replay_value[k];
                if(!button_clicked.textContent==""){
                    checkWinner();
                }
            }
            

        }, time);
        time += 1000;

        
    }
    





}





    //     if (replay_box[j] == "box-1" || replay_box[j] == "box-3" || replay_box[j] == "box-5" || replay_box[j] == "box-7" || replay_box[j] == "box-9") {
    //         let moves_l = 9 - j;
    //         console.log("Element");
    //         (replay_box[j]).addEventListener("click", () => {
    //             moves.textContent = "Moves left: " + moves_l;
    //             player.textContent = "Turn Played by : A";
    //             button1.innerHTML = "0";
    //         }, 2000);
    //     }
    //     else {
    //         console.log("Element even");
    //           //         document.getElementById(replay_box[j]).addEventListener("click", () => {
    //             moves.textContent = "Moves left: " + moves_l;
    //             player.textContent = "Turn Played by : B";
    //             button1.innerHTML = "X";
    //         }, 2000);
    //     }
    // }
//});
// function loadOnce() {

//     location.reload();
// }





// reset game to start a new



// bind events to clickable buttons