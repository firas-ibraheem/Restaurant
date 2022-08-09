const table = document.createElement("table");
let allFood = [];
function Food(foodID,foodName,type,price){
    this.foodID = foodID;
    this.foodName = foodName;
    this.type = type;
    this.price = price;
    allFood.push(this);
    this.uniqId = function(counter){
        this.foodID = counter +1;
    ++Id;
    }

    Food.prototype.foodInfo = function(){
        const table1 = document.createElement("td");
        table1.textContent = `Food Name : ${this.foodName}`; 
        table[0].appendChilde(table1);
        const table2 = document.createElement("td");
        table1.textContent = `Type : ${this.type}`; 
        table[0].appendChilde(table2);
        const table3 = document.createElement("td");
        table1.textContent = `Price : ${this.price}`; 
        table[0].appendChilde(table1);
    }

}

    let foodEl1 = new Food(this.uniqId,"Pizza","Fat","8.35");
    let foodEl2 = new Food(this.uniqId,"Burger","Fat","4.24");
    let foodEl3 = new Food(this.uniqId,"Apple","Fruit","0.65");



    // let form =document.getElementById("form");
    // form.addEventListener("submit",handleSubmit)
    

    // function handleSubmit(event){
    //     event.preventDefault();
    //     let food = event.target.form.value;

    // }
    foodEl1.foodInfo();
    foodEl2.foodInfo();
    foodEl3.foodInfo();




