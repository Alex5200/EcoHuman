const itemId = document.querySelectorAll('.item__id-number');
const itemName = document.querySelectorAll('.item__name');
let i = 1;
itemId.forEach(item=>{
    item.textContent =`0${i}` 
    i++
    if (i>5){
        i=1;
    }
})


