import { TicTacToe } from "./ticTacToe.js"

try{
    let t= new TicTacToe(3)
    t.playChance(1, 1, 2)
    t.printBoard()

    t.playChance(-1, 0, 2)
    t.printBoard()

    t.playChance(1, 2, 2) 
    t.printBoard()

    t.playChance(-1, 0, 1)
    t.printBoard()

    t.playChance(1, 1, 2)
    t.printBoard()

    t.playChance(-1, 0, 0)
    t.printBoard()
    
}catch(err){
    console.log(err)
}