function selectFood(food) {
    localStorage.setItem("foodItem", food);
    window.location.href = "order.html";
}

function placeOrder() {
    let name = document.getElementById("name").value;
    let food = document.getElementById("food").value;

    alert("Order placed!\n" + name + " ordered " + food);
    return false;
}
