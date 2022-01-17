// B/S logic
$(document).ready(function () {
    $("#checkout").click(function () {
        $(".deliver").show();
        $(".pickUp").show();
    });
});
//Deliver
$(".deliver").click(function () {
    $(".summary").show();
    $(".deliver").hide();
    $(".makeDelivery").show();
});

function order( pizza, size, crust, topping, number ){
    this.pizza = pizza;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.number = number;
  }

 // UI logic
$(function () {
    $(".summary").hide();
    $(".makeDelivery").hide();
    $(".deliver").hide();
    $(".pickUp").hide();
});

$("#checkout").click(function () {
        let pizza = $(".pizza option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        //Function order
        let order = (p, s, c, t, n, total) => {
            return {
                p,
                s,
                c,
                t,
                n,
                total
            };
        };

        //Price Confirmation
        let price, totalPrice;
        switch (pizza) {
            // Choosing the Cheese Pizza
            case (pizza = "cheese"):
                switch (size) {
                    case (size = "regular"):
                        price = 1000;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case (size = "medium"):
                        price = 1500;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case (size = "large"):
                        price = 2000;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
                // Choosing the Veggie Pizza
            case (pizza = "veggie"):
                switch (size) {
                    case (size = "regular"):
                        price = 1000;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case (size = "medium"):
                        price = 1500;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case (size = "large"):
                        price = 2000;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
                // Chhosing the Pepperoni Pizza
            case (pizza = "pepperoni"):
                switch (size) {
                    case (size = "regular"):
                        price = 1000;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case (size = "medium"):
                        price = 1500;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case (size = "large"):
                        price = 2000;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
                // Choosing the Meat Pizza
            case (pizza = "meat"):
                switch (size) {
                    case (size = "regular"):
                        price = 1000;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case (size = "medium"):
                        price = 1500;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case (size = "large"):
                        price = 2000;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
                // Choosing the Margherita Pizza
            case (pizza = "margherita"):
                switch (size) {
                    case (size = "regular"):
                        price = 1000;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case (size = "medium"):
                        price = 1500;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case (size = "large"):
                        price = 2000;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
                // Choosing the BBQ Pizza
            case (pizza = "bbq"):
                switch (size) {
                    case (size = "regular"):
                        price = 1000;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case (size = "medium"):
                        price = 1500;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case (size = "large"):
                        price = 2000;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
                // Choosing the Hawaiian Pizza
            case (pizza = "hawaiian"):
                switch (size) {
                    case (size = "regular"):
                        price = 1000;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case (size = "medium"):
                        price = 1500;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case (size = "large"):
                        price = 2000;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
                // Choosing the Supreme Pizza
            case (pizza = "supreme"):
                switch (size) {
                    case (size = "regular"):
                        price = 1000;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case (size = "medium"):
                        price = 1500;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case (size = "large"):
                        price = 2000;
                        if (crust === "stuffed") {
                            totalPrice = (price * number) + 110;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 130;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "cheese") {
                            totalPrice = (price * number) + 170;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
        }
        switch (topping) {
            case (topping = "onions"):
                totalPrice = totalPrice + 100;
                break;
            case (topping = "tomato"):
                totalPrice = totalPrice + 120;
                break;
            case (topping = "mushroom"):
                totalPrice = totalPrice + 140;
                break;
            case (topping = "broccoli"):
                totalPrice = totalPrice + 160;
                break;
        }

        //Order of function execution
        let newOrder = order(pizza, size, crust, topping, number, totalPrice);
        console.log(newOrder);

       

        $("#list").text(" ");
        $("#list").append("<br>" + "Pizza :   " + newOrder.p + "<br>" + "Size :   "
        + newOrder.s + "<br>" + "Crust :     "
        + newOrder.c + "<br>" + "Toppings :     "
        + newOrder.t + "<br>" + " Number of pizzas :    "
        + newOrder.n + "<br>" + "Total Price :  "
        + newOrder.total + "<br><br>");
            
    });
});