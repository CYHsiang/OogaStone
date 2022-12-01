// 加號
function onplus() {
    var plusEles = document.querySelector('.AddSub .plus')
    for (var i = 0; i < plusEles.length; i++) {
        plusEles[i].onclick = function () {
            var amountEles = document.querySelectorAll('.AddSub .number')
            amountEles.value++
           
        
            // 計算價格
            var priceEle = document.querySelectorAll('.price span')
            var price = priceEle.innerHTML
            price = price.substring(0) 
            price = Number(price)

            var num = amountEles.value
            var totalPrice = price * num
            
            var totalPices = querySelectorAll('.money .ssubtotal')
            totalPices.innerHTML = `NT$ ${totalPrice}元`

            var goodstotalPrice = getSum()
            var goodtotal = document.querySelectorAll('.total span')
            goodtotal.innerHTML = `${goodstotalPrice+60}`

            // 計算總價

        }

    }
};
onplus();

// 減號

function onminus() {
    var minusEles = document.querySelectorAll('.AddSub .minus')
    for (var i = 0; i < minusEles.length; i++) {
        minusEles[i].onclick = function () {
            var amountEles = document.querySelectorAll('.AddSub .number')
            amountEles.value--
        

            // 計算價格
            var priceEle = document.querySelectorAll('.price span')
            var price = priceEle.innerHTML
            price = price.substring(0) 
            price = Number(price)

            var num = amountEles.value
            var totalPrice = price * num
            
            var totalPices = querySelectorAll('.money .ssubtotal')
            totalPices.innerHTML = `NT$ ${totalPrice}元`

            var goodstotalPrice = getSum()
            var goodtotal = document.querySelectorAll('.total span')
            goodtotal.innerHTML = `${goodstotalPrice+60}`

            // 計算總價

        }

    }
};
onminus();

