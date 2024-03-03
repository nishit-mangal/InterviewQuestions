import { daysForAdvanceBookings, slotsInADay } from "./constants.js";

export class Restraunt {
  #name;
  #city;
  #cuisine;
  #veg;
  #costForTwo;
  #tableSize;
  #bookings;
  static restId = 1;

  constructor(name, city, cuisine, veg, costForTwo, tableSize) {
    //input validation
    if (!name || !city || !cuisine || !veg || !costForTwo || !tableSize)
      throw "Invalid Input";

    if (name && typeof name == "string") this.#name = name;
    else throw "Invalid name type. Expect String";

    if (city && typeof city == "string") this.#city = city;
    else throw 'Invalid city type. Expect String'

    if (cuisine && typeof cuisine == typeof []) this.#cuisine = cuisine;
    else throw 'Invalid cuisine type. Expect Array'

    if (veg && typeof veg == "boolean") this.#veg = veg;
    else throw 'Invalid veg type. Expect boolean'

    if (costForTwo && typeof costForTwo == "number")
      this.#costForTwo = costForTwo;
    else throw 'Invalid costForTwo type. Expect number'

    if (tableSize && typeof tableSize == "number") this.#tableSize = tableSize;
    else throw 'Invalid tableSize type. Expect Number'

    this.restId = Restraunt.restId++;
    this.#bookings = [];
    for (let i = 0; i < daysForAdvanceBookings; i++) {
      let temp = Array(slotsInADay).fill(0);
      this.#bookings.push(temp);
    }
  }

  get name() {
    return this.#name;
  }
  get city() {
    return this.#city;
  }
  get cuisine() {
    return this.#cuisine;
  }
  get veg() {
    return this.#veg;
  }
  get costForTwo() {
    return this.#costForTwo;
  }
  get tableSize() {
    return this.#tableSize;
  }
  get bookings() {
    return this.#bookings;
  }
  set bookings(input){
    if(!input || !input.day || !input.slot || !input.seats){
        throw 'Invalid Input'
    }
    if(this.#bookings[input.day][input.slot]!=0){
        throw 'Slot is already booked'
    }
    this.#bookings[input.day][input.slot] = 1
  }
}
