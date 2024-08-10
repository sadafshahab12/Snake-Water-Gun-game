let user_score = 0;
let comp_score = 0;
// addEventListener
let select = document.querySelectorAll(".options");
let msg = document.querySelector(".win-msg");
let win_msg_cont = document.querySelector(".win-container");

let start_msg = document.querySelector("#msg-start");
let reset_msg = document.querySelector("#msg-reset");

const reset = () => {
  user_score = 0;
  comp_score = 0;
  user_win_score.innerText = 0;
  comp_win_score.innerText = 0;
  win_msg_cont.classList.add("hide");
  player1.style.backgroundColor = "#6b17f1";
  player2.style.backgroundColor = "#6b17f1";
};

start_msg.addEventListener("click", reset);
reset_msg.addEventListener("click", reset);

// creating user choice variable to get id

select.forEach((options) => {
  console.log(options);
  options.addEventListener("click", () => {
    const user_choice = options.getAttribute("id");
    // console.log("choice was ", user_choice);
    play_game(user_choice);
  });
});
// computer generated option
const comp_generated = () => {
  let user_options_array = ["snake", "water", "gun"];
  let index = Math.floor(Math.random() * 3);
  return user_options_array[index];
};

const draw_game = () => {
  console.log("game draw");
  msg.innerText = "Game Draw";
  win_msg_cont.classList.remove("hide");
};
let player1 = document.querySelector(".user");
let player2 = document.querySelector(".comp");
const user_win_score = document.querySelector("#user-score");
const comp_win_score = document.querySelector("#comp-score");
const show_winner = (user_win, user_choice, comp_choice) => {
  if (user_win === true) {
    user_score++;
    player1.style.backgroundColor = "red";
    user_win_score.innerText = user_score;
    msg.innerText = `Congratulation! Your ${user_choice} beats the ${comp_choice}`;
    win_msg_cont.classList.remove("hide");
  } else {
    comp_score++;
    player2.style.backgroundColor = "green";
    comp_win_score.innerText = comp_score;
    msg.innerText = `You lose! ${comp_choice} beats your ${user_choice}`;
    win_msg_cont.classList.remove("hide");
  }
};

const play_game = (user_choice) => {
  console.log("user choice is", user_choice);
  const comp_choice = comp_generated();
  console.log("comp choice is ", comp_choice);

  if (user_choice === comp_choice) {
    draw_game();
  } else {
    let user_win = true;
    if (user_choice === "snake") {
      // water gun
      user_win = comp_choice === "gun" ? false : true;
    } else if (user_choice === "water") {
      // snake gun
      user_win = comp_choice === "snake" ? false : true;
    } else {
      //snake water
      user_win = comp_choice === "water" ? false : true;
    }
    show_winner(user_win, user_choice, comp_choice);
  }
};
