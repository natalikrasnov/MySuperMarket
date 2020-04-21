
class User{
    constructor(name, email, password){
        this.name = name
        this.password = password
        this.email = email
        this.supermarkets = []
    }

    setCurrentSuperMarket(sypermarket){
        this.currentSuperMarket = sypermarket;
        this.addSupermarket(sypermarket)
    }

    addSupermarket(supermarket){
        console.log(supermarket.name)
        newSuperIndex = this.supermarkets.map(item=> item.name).indexOf(supermarket.name);
        console.log(newSuperIndex)
        if(!newSuperIndex || newSuperIndex != -1)
              this.supermarkets.push(supermarket)
        else 
            this.supermarkets[newSuperIndex] = supermarket;
    }

    addShopingList(listOfCategories){
        this.shopingLists = [...this.shopingLists, {createdTime: Date.now ,list: listOfCategories}]
    }

    editshopingList(list){
        this.shopingLists.findOne(item=> item.createdTime === list.createdTime).list = list.list
    }

    addToBasket(item){
        this.supermarkets.findOne(supermarket => supermarket.name === item.supermarketOwner).addToBasket(item)
    }
    setAddress(cityName){
        this.address = cityName
    }
    
    setCard(cardNAme){
        this.card = cardNAme
    }
}

export default User