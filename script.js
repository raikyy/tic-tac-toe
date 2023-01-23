let cells = document.querySelectorAll("#field td");
let value = document.querySelector("#value");
let winner = document.querySelector("#winner");
let win = document.querySelector("#win");
console.log(cells);

let i = 0;
function start(cells) {
  for (let cell of cells) {
    cell.addEventListener("click", function step() {
      if (i % 2 == 0) {
        this.textContent = "X";
      } else {
        this.textContent = "O";
      }
      i++;
      this.removeEventListener("click", step);

      if (isWinner(cells) == true) {
        winner.style.display = "flex";
        win.textContent = "Победитель";
        value.textContent = this.textContent;
      } 
      else if(i == 8) {
        winner.style.display = "flex";
        win.textContent = "";
        value.textContent = "Ничья";
      }
    });
  }
}

start(cells);

function isWinner(cells) {
  let combs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let comb of combs) {
    if (
      cells[comb[0]].textContent === cells[comb[1]].textContent &&
      cells[comb[1]].textContent == cells[comb[2]].textContent &&
      cells[comb[0]].textContent != ""
    ) {
      return true;
    }
  }
  return false;
}
