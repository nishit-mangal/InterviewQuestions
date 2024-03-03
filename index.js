import { Cuisines, daysForAdvanceBookings } from "./constants.js"
import { Inventory } from "./productManagement.js"
import { Restraunt } from "./restraunt.js"
import { Restraunts } from "./restraunts.js"
import { TicTacToe } from "./ticTacToe.js"

// try{
//     let t= new TicTacToe(3)
//     t.playChance(1, 1, 2)
//     t.printBoard()

//     t.playChance(-1, 0, 2)
//     t.printBoard()

//     t.playChance(1, 2, 2) 
//     t.printBoard()

//     t.playChance(-1, 0, 1)
//     t.printBoard()

//     t.playChance(1, 1, 2)
//     t.printBoard()

//     t.playChance(-1, 0, 0)
//     t.printBoard()
    
// }catch(err){
//     console.log(err)
// }

// try{
//     let inventory = new Inventory()
//     inventory.viewInventory()

//     inventory.addInventory(35, 1)
//     inventory.viewInventory()

//     inventory.removeInventory(35,1)
//     inventory.viewInventory()

//     inventory.removeInventory(35)
//     inventory.viewInventory()
// }catch(err){
//     console.log(err)
// }

try{
    // console.log(Cuisines)
    
    // let restraunt1 = new Restraunt('Dhaba1', 'Jha', [Cuisines.CHINESE, Cuisines.NORTH_INDIAN], true, 600, 4)
    // console.log(restraunt1.bookings)
    // console.log(restraunt1.cuisine)

    let restaurants = new Restraunts()
    console.log(restaurants.allRestaurants)

    restaurants.registerRestraunt('Dhaba1', 'Jha', [Cuisines.CHINESE, Cuisines.NORTH_INDIAN], true, 600, 4)
    restaurants.registerRestraunt('Dhaba2', 'Kota', [Cuisines.CHINESE, Cuisines.SOUTH_INDIAN], true, 500, 4)
    console.log(restaurants.allRestaurants)

    console.log(restaurants.searchRestaurant('costForTwo',600))
    restaurants.bookRestaurant(2, 2, 1, 3)
    console.log(restaurants.searchRestaurant('costForTwo',500).bookings)

}catch(err){
    console.log(err)
}