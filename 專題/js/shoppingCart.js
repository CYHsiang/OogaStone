// 加號
// function onplus() {
//     var plusEles = document.querySelector('.AddSub .plus')
//     for (var i = 0; i < plusEles.length; i++) {
//         plusEles[i].onclick = function () {
//             var amountEles = document.querySelectorAll('.AddSub .number')
//             amountEles.value++


//             // 計算價格
//             var priceEle = document.querySelectorAll('.price span')
//             var price = priceEle.innerHTML
//             price = price.substring(0) 
//             price = Number(price)

//             var num = amountEles.value
//             var totalPrice = price * num

//             var totalPices = querySelectorAll('.money .ssubtotal')
//             totalPices.innerHTML = `NT$ ${totalPrice}元`

//             var goodstotalPrice = getSum()
//             var goodtotal = document.querySelectorAll('.total span')
//             goodtotal.innerHTML = `${goodstotalPrice+60}`

//             // 計算總價

//         }

//     }
// };
// onplus();

// // 減號

// function onminus() {
//     var minusEles = document.querySelectorAll('.AddSub .minus')
//     for (var i = 0; i < minusEles.length; i++) {
//         minusEles[i].onclick = function () {
//             var amountEles = document.querySelectorAll('.AddSub .number')
//             amountEles.value--


//             // 計算價格
//             var priceEle = document.querySelectorAll('.price span')
//             var price = priceEle.innerHTML
//             price = price.substring(0) 
//             price = Number(price)

//             var num = amountEles.value
//             var totalPrice = price * num

//             var totalPices = querySelectorAll('.money .ssubtotal')
//             totalPices.innerHTML = `NT$ ${totalPrice}元`

//             var goodstotalPrice = getSum()
//             var goodtotal = document.querySelectorAll('.total span')
//             goodtotal.innerHTML = `${goodstotalPrice+60}`

//             // 計算總價

//         }

//     }
// };
// onminus();














// 加號
// function onplus() {
//     var plusEles = document.querySelectorAll('input[name="plus"]')
//     for (var i = 0; i < plusEles.length; i++) {
//         plusEles[i].onclick = function () {
//             var amountEles = this.previousElementSibling
//             amountEles.value++
//             var minus = amountEles.previousElementSibling
//             minus.removeAttribute('disabled')

//             // 1.獲取單價
//             var priceEle = this.parentElement.previousElementSibling
//             var price = priceEle.innerHTML
//             price = price.substring(1)
//             price = Number(price)

//             // 2.獲去數量
//             var num = amountEles.value

//             // 3.計算總價
//             var totalPrice = price * num
//             totalPrice = totalPrice.toFixed(2)

//             // 4.顯示總價到對應位置
//             var totalPices = this.parentElement.nextElementSibling
//             totalPices.innerHTML = `NT$ ${totalPrice}`

//             // 計算商品總價
//             var goodstotalPrice = getSum()
//             var goodtotal = document.querySelector('.totalPrice span')

//             goodtotal.innerHTML = `NT$ ${goodstotalPrice}`
//         }
//     }
// }
// onplus()

// // 減號

// function onminus() {
//     var minusEles = document.querySelectorAll('input[name="minus"]')
//     for (var i = 0; i < minusEles.length; i++) {
//         minusEles[i].onclick = function () {
//             var amountEles = this.nextElementSibling
//             amountEles.value--
//             if (amountEles.value == 0) {
//                 this.setAttribute('disabled', true)
//             }

//             // 計算價格

//             // 1.獲取單價
//             var priceEle = this.parentElement.previousElementSibling
//             var price = priceEle.innerHTML
//             price = price.substring(1)
//             price = Number(price)

//             // 2.獲去數量
//             var num = amountEles.value

//             // 3.計算總價
//             var totalPrice = price * num
//             totalPrice = totalPrice.toFixed(2)

//             // 4.顯示總價到對應位置
//             var totalPices = this.parentElement.nextElementSibling
//             totalPices.innerHTML = `NT$ ${totalPrice}`

//             // 計算商品總價
//             var goodstotalPrice = getSum()
//             var goodtotal = document.querySelector('.totalPrice span')

//             goodtotal.innerHTML = `NT$ ${goodstotalPrice}`
//         }
//     }
// }
// onminus()

// // 計算所有商品總價
// function getSum() {
//     var sum = 0
//     var goodstotalPriceEle = document.querySelectorAll('.allPrice')
//     for (var i = 0; i < goodstotalPriceEle.length; i++) {
//         var price = goodstotalPriceEle[i].innerHTML
//         price = price.substring(1)
//         sum += Number(price)
//     }
//     return sum.toFixed(2)
// }

// // 刪除
// var deleteEles = document.querySelectorAll('.delete')
// for (var i = 0; i < deleteEles.length; i++) {
//     deleteEles[i].onclick = function () {
//         this.parentElement.parentElement.remove()
//     }
// }






function up(max) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
    if (document.getElementById("myNumber").value >= parseInt(max)) {
        document.getElementById("myNumber").value = max;
    }
}
function down(min) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
    if (document.getElementById("myNumber").value <= parseInt(min)) {
        document.getElementById("myNumber").value = min;
    }
}
