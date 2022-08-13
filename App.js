let table = document.getElementById("table");
let submit = document.getElementById("submit");
let form = document.getElementById("form");
let allOrder = [];
let Id = 0;
function Order(foodID,foodName,type,price){
    this.foodID = foodID;
    this.foodName = foodName;
    this.type = type;
    this.price = price;
    allOrder.push(this);
}
    Order.prototype.generateId = function(counter){
        this.foodID = counter +1;
    ++Id;
    }
    Order.prototype.render = function(){
       
        let addRow = document.createElement("tr");
        table.appendChild(addRow);
        let orderID = document.createElement("td")
        orderID.textContent = this.foodID;
        addRow.appendChild(orderID);
        let orderName = document.createElement("td")
        orderName.textContent = this.foodName;
        addRow.appendChild(orderName);
        let orderType = document.createElement("td")
        orderType.textContent = this.type;
        addRow.appendChild(orderType);
        let orderPrice = document.createElement("td")
        orderPrice.textContent = this.price;
        addRow.appendChild(orderPrice);

    }

  
    form.addEventListener("submit",handleSubmit);
    
    function handleSubmit(event){
        event.preventDefault(event);
        let foodName = event.target.Name.value;
        let type = event.target.Type.value;
        let price = event.target.Price.value;
        const newForm = new Order(foodName,type,price);
        newForm.generateId(Id);
        newForm.render();
        
        
    }
   
 



   
   
    



