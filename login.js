function addUser() {
  p1 = document.getElementById("player1_name_input").value;
  p2 = document.getElementById("player2_name_input").value;
  localStorage.setItem("player1_username", p1);
  localStorage.setItem("player2_username", p2);
  window.location.replace("quiz_game_page.html");
}
