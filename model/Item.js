class Item{
    constructor(name, id, supermarketOwner, description, image, price){
        this.name = name;
        this.description = description
        this.id = id
        this.price = price
        this.supermarketOwner = supermarketOwner
        this.image = image
    }

    set onSale(newPrice){
        this.onSalePrice = newPrice
    }
}

export default Item