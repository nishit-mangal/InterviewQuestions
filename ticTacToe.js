export class TicTacToe {
  constructor(value) {
    if (!value || value < 1) throw "Invalid Input to play game";

    this.side = value;
    this.board = [];
    for (let i = 0; i < value; i++) {
      let temp = Array(value).fill(0);
      this.board.push(temp);
    }

    this.diagonal = 0;
    this.rev_diagonal = 0;
    this.rows = Array(value).fill(0);
    this.columns = Array(value).fill(0);
  }

  /**
   *
   * @param {*} player either -1 or 1
   * @param {*} row range is [0,value-1]
   * @param {*} col range is [0, value-1]
   */
  playChance(player, row, col) {
    //edge cases
    if (![1, -1].includes(player))
      throw `Invalid Player. It can only be 1 or -1 but you entered ${player}`;
    if (row < 0 || row >= this.side)
      throw `Invalid Row. Please enter between 0 to ${this.side - 1}`;
    if (col < 0 || col >= this.side)
      throw `Invalid Col. Please enter between 0 to ${this.side - 1}`;

    //mark the board
    this.board[row][col] = player;

    //update the winnig Possibilities
    this.rows[row] += player;
    this.columns[col] += player;
    if (row === col) this.diagonal += player;
    if (row === this.side - col - 1) this.rev_diagonal += player;

    if (this.winner()) {
      throw `Player ${player} has won the game`;
    }
  }

  winner() {
    if (
      Math.abs(this.diagonal) === this.side ||
      Math.abs(this.rev_diagonal) === this.side
    )
      return true;

    console.log("columns", this.columns);
    console.log("rows", this.rows);
    console.log(-this.side);
    // console.log(this.rows.includes(this.side || -this.side));
    if (
      this.rows.includes(this.side) ||
      this.rows.includes(-this.side) ||
      this.columns.includes(this.side) ||
      this.columns.includes(-this.side)
    )
      return true;

    return false;
  }

  printBoard() {
    for (let arr of this.board) {
      console.log(arr);
    }
  }
}
