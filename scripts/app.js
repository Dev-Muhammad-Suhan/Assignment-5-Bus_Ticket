const allBtn = document.getElementsByClassName("bus-seat")
let count = 0;
let seatLeft = parseInt(document.getElementById("seats-left").innerText);
let gTotal = 0;

// -------------
for (btn of allBtn) {
    btn.addEventListener("click", function (event) {
        // Change BG-Color


        // Set the Total Seat
        count = count + 1;
        setInnerText("selected-total-seat", count)

        // Total Seat left
        seatLeft = seatLeft - 1;
        setInnerText("seats-left", seatLeft)

        // Set Total Price
        totalPrice();

        // Set Grand Total
        grandTotal();

        // Adding New Element in Select-Your-Seat Section
        const li = document.createElement('li');

        const busSeatName = event.target.innerText;
        const p1 = document.createElement('p');
        p1.innerText = busSeatName;
        li.appendChild(p1);
        const p2 = document.createElement('p');
        p2.innerText = 'Economy';
        li.appendChild(p2);
        const p3 = document.createElement('p');
        p3.innerText = '550';
        li.appendChild(p3);

        document.getElementById("new-element").appendChild(li);


    })
}

// Apply Coupon
function applyCoupon() {
    const coupon1 = 'NEW15';
    const coupon2 = 'Couple 20'
    const enteredCouponInput = document.getElementById("coupon-input").value;

    const grandTotalCost = document.getElementById("grand-total").innerText;
    const convertedGrandTotalCost = parseInt(grandTotalCost);
    const coupon1_Discount = 0.15;
    const coupon2_Discount = 0.2;
    
    // APPLY COUPON CONDITION
    if (enteredCouponInput == coupon1) {
        const getDiscount = convertedGrandTotalCost * coupon1_Discount;
        const newGrandTotalCost = convertedGrandTotalCost - getDiscount;

        setInnerText("grand-total", newGrandTotalCost);

        document.getElementById("coupon-container").classList.add('hidden');
    }
    else if (enteredCouponInput == coupon2){
        const getDiscount = convertedGrandTotalCost * coupon2_Discount;
        const newGrandTotalCost = convertedGrandTotalCost - getDiscount;

        setInnerText("grand-total", newGrandTotalCost);

        document.getElementById("coupon-container").classList.add('hidden');
    }
}


// Utility

// Set Total Price
function totalPrice() {
    const totalPrice = document.getElementById("total-price").innerText;
    let convertedTotalPrice = parseInt(totalPrice);
    sum = convertedTotalPrice + 550;
    setInnerText("total-price", sum);
}
// Grand Total Price
function grandTotal() {
    let tPrice = parseInt(document.getElementById("total-price").innerText)
    setInnerText("grand-total", tPrice);
}
// Set InnerText
function setInnerText(id, textValue) {
    document.getElementById(id).innerText = textValue;
}