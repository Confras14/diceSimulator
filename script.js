// Declarando constantes
const btnPlayDice = document.querySelector(".playDice");
const btnsDicePick = document.querySelectorAll(".btnPick")
const outputDice = document.querySelector(".outputDice")
const dicePicked = document.querySelector(".dicePicked")
const diceHistoryList = document.querySelectorAll(".diceHistoryList")

let currentDice = null;
let valueOutputDice = 0;
let historyDice = {}

// Receber o qual sera o Dado
btnsDicePick.forEach(dice => {
  dice.addEventListener("click", (e) => {
    currentDice = Number(e.target.innerHTML)
    dicePicked.innerHTML = `D${currentDice}`
  })
})

// Rodar dado novamente
btnPlayDice.addEventListener("click", () => {
  if (currentDice === null) {
    alert("Escolha um dado Primeiro!")
    return
  }
  valueOutputDice = Math.floor(Math.random() * currentDice) + 1
  outputDice.innerHTML = valueOutputDice

  if (!historyDice[dicePicked.innerHTML]) {
    historyDice[dicePicked.innerHTML] = []
  }
  historyDice[dicePicked.innerHTML].push(valueOutputDice)

  switch (dicePicked.innerHTML.toUpperCase()) {
    case 'D2' :
      diceHistoryList[0].children[1].innerHTML += `<li>${valueOutputDice}</li>`
      break
    case 'D6' :
      diceHistoryList[1].children[1].innerHTML += `<li>${valueOutputDice}</li>`
      break
    case 'D8' :
      diceHistoryList[2].children[1].innerHTML += `<li>${valueOutputDice}</li>`
      break
    case 'D12' :
      diceHistoryList[3].children[1].innerHTML += `<li>${valueOutputDice}</li>`
      break
    case 'D20' :
      diceHistoryList[4].children[1].innerHTML += `<li>${valueOutputDice}</li>`
      break
    case 'D25' :
      diceHistoryList[5].children[1].innerHTML += `<li>${valueOutputDice}</li>`
      break
    case 'D50' :
      diceHistoryList[6].children[1].innerHTML += `<li>${valueOutputDice}</li>`
      break
    case 'D100' :
      diceHistoryList[7].children[1].innerHTML += `<li>${valueOutputDice}</li>`
      break
  }
})
