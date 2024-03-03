import { DataTypes } from "./constants.js";
import { Restraunt } from "./restraunt.js";

export class Restraunts{
    #restaurants = []
    constructor(){
    }

    registerRestraunt(name, city, cuisine, veg, costForTwo, tableSize){
        let restaurant = new Restraunt(name, city, cuisine, veg, costForTwo, tableSize)
        this.#restaurants.push(restaurant)
    }
    searchRestaurant(key, value){
        if(!key || typeof key != DataTypes.STRING || !value){
            throw 'Invalid Search Parameters'
        }
        for(let i=0; i<this.#restaurants.length; i++){
            if(this.#restaurants[i][key] == value){
                return this.#restaurants[i]
            }
        }
        return null
    }
    bookRestaurant(id, day, slot, seats){
        if(!id || typeof id != DataTypes.NUMBER || !day || typeof day != DataTypes.NUMBER || !slot || typeof slot != DataTypes.NUMBER || !seats || typeof seats != DataTypes.NUMBER){
            throw 'Invalid Booking Parameters'
        }
        for(let i=0; i<this.#restaurants.length; i++){
            if(this.#restaurants[i].restId === id){
                this.#restaurants[i].bookings = ({day, slot, seats})
                return
            }
        }
        throw `No Restaurant found with id ${id}`
    }
    get allRestaurants(){
        return this.#restaurants
    }
}