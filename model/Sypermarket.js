
class Sypermarket {
    constructor(name, totalPrice=0.0, itemes=null){
        this.name = name
        this.totalPrice = totalPrice
        this.itemes = itemes
        this.key = name
    }

    set addItemToBasket(item){
        this.itemes = [...itemes, item]
        this.totalPrice += item.price
    }

    get allItems(){
        return this.itemes
    }

}



export default Sypermarket
