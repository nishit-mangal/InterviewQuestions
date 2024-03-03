export class Inventory{
    /**
     *  Map will have Product Id -> Count
     */
    constructor(){
        this.inventory = new Map()
    }

    addInventory(productId, amount){
        if(!productId || !amount || typeof productId != 'number' || (typeof amount != 'number')){
            throw 'Invalid Input.'
        }
        if(amount<1){
            throw 'Amount can not be less than 1.'
        }
        this.inventory.set(productId, (this.inventory.get(productId)||0)+amount)
    }
    // removeInventory(productId){
    //     if(!productId || typeof productId != 'number'){
    //         throw 'Invalid Input for removing the product'
    //     }
    //     if(!this.inventory.has(productId)){
    //         throw `Product with id ${productId} doesn't exist in the inventory`
    //     }
    //     if(this.inventory.get(productId)<=0){
    //         throw `Can not remove the product as the count is already 0`
    //     }
    //     this.inventory.set(productId, this.inventory.get(productId)-1)
    // }

    removeInventory(productId, amount){
        if(!productId || typeof productId != 'number' || (amount && (typeof amount !='number' || amount<=0))){
            throw 'Invalid Input for removing multiple products'
        }
        if(!this.inventory.has(productId)){
            throw `Product with id ${productId} doesn't exist in the inventory`
        }
        if(this.inventory.get(productId)<(amount||1)){
            throw `Not enough items to be removed.`
        }
        this.inventory.set(productId, this.inventory.get(productId)-(amount||1))
    }

    viewInventory(){
        if(this.inventory.size<1){
            console.log('Inventory is empty')
        }
        this.inventory.forEach((values, key)=>{
            console.log(`Id ${key}, count ${values}`)
        })
    }
}