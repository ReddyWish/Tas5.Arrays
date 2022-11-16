let clientsEstimations = [];
function askClientToGiveEstimation() {
   return Number(prompt('Как вы оцениваете работу нашей кофейни от 1 до 10?'))
}

 for (let i = 0; i < 5; i++) {
     let mark = askClientToGiveEstimation()
     if (mark > 0 && mark <= 10) {
         clientsEstimations.push(mark)
     } else continue

 }

let goodEstimations = (clientsEstimations.filter(item => item > 5)).length
let notGoodEstimations = (clientsEstimations.filter(item => item <= 5)).length
alert(`Всего положительных оценок: ${goodEstimations}; всего отрицательных оценок: ${notGoodEstimations}`)
