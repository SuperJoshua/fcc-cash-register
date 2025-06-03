"use strict"

// This one also is quite ugly. But it also works.

let price = 19.5;
let cash = 20
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]

function undecimal_cid(array) {
   let new_array = []
   array.forEach(i => {new_array.push([i[0], Math.round(i[1] * 100)])})
   return new_array
}

function sum_cid(array) {
   let new_array = []
   array.forEach(i => {new_array.push([i[0], i[1]])})
   return new_array.reduce((acc, arr) => acc + arr[1], 0)
}

let fresh_cid = undecimal_cid(cid)
let cid_sum = sum_cid(fresh_cid)

const register_state = {
   insufficient: "Status: INSUFFICIENT_FUNDS",
   closed: "Status: CLOSED",
   open: "Status: OPEN"
}

const cash_input = document.getElementById('cash')
cash_input.value = cash

const change_due_div = document.getElementById('change-due')
const purchase_button = document.getElementById('purchase-btn')

function empty_hand() {
   return [
      ['PENNY', 0],
      ['NICKEL', 0],
      ['DIME', 0],
      ['QUARTER', 0],
      ['ONE', 0],
      ['FIVE', 0],
      ['TEN', 0],
      ['TWENTY', 0],
      ['ONE HUNDRED', 0]
      ]
}

function make_change(change) {
   let hand = empty_hand()
   let temp_sum = cid_sum
   while (change > 0) {
      if (change >= 10000 && fresh_cid[8][1]) {
         change -= 10000
         hand[8][1] += 10000
         fresh_cid[8][1] -= 10000
         temp_sum -= 10000
      } else if (change >= 2000 && fresh_cid[7][1]) {
         change -= 2000
         hand[7][1] += 2000
         fresh_cid[7][1] -= 2000
         temp_sum -= 20
      } else if (change >= 1000 && fresh_cid[6][1]) {
         change -= 1000
         hand[6][1] += 1000
         fresh_cid[6][1] -= 1000
         temp_sum -= 1000
      } else if (change >= 500 && fresh_cid[5][1]) {
         change -= 500
         hand[5][1] += 500
         fresh_cid[5][1] -= 500
         temp_sum -= 500
      } else if (change >= 100 && fresh_cid[4][1]) {
         change = (change - 100)
         hand[4][1] += 100
         fresh_cid[4][1] -= 100
         temp_sum -= 100
      } else if (change >= 25 && fresh_cid[3][1]) {
         change -= 25
         hand[3][1] += 25
         fresh_cid[3][1] -= 25
         temp_sum -= 25
      } else if (change >= 10 && fresh_cid[2][1]) {
         change -= 10
         hand[2][1] += 10
         fresh_cid[2][1] -= 10
         temp_sum -= 10
      } else if (change >= 5 && fresh_cid[1][1]) {
         change -= 5
         hand[1][1] += 5
         fresh_cid[1][1] -= 5
         temp_sum -= 5
      } else if (change >= 1 && fresh_cid[0][1]) {
         change -= 1
         hand[0][1] += 1
         fresh_cid[0][1] -= 1
         temp_sum -= 1
      }
   }

   if (change > 0) {
      for (let i = hand.length - 1; i >= 0; i -= 1) {
         cid[i][1] = (cid[i][1] + hand[i][1])
      }
      update_fields(register_state.insufficient)
      return false
   }

   let tail = ''
   for (let i = hand.length - 1; i >= 0; i -= 1) {
      if (hand[i][1]) {
         tail += ` ${hand[i][0]}: $${(hand[i][1] / 100).toFixed(2)}`
      }
   }
   
   if (temp_sum === 0) {
      update_fields(`${register_state.closed}${tail}`)
   } else {
      update_fields(`${register_state.open}${tail}`)
   }

   cid_sum = (cid_sum - temp_sum)
   return true
}

function check_input() {
   cash = Math.round(parseFloat(cash_input.value) * 100)
   price = Math.round(price * 100)
   let change = (cash - price)
   fresh_cid = undecimal_cid(cid)
   cid_sum = sum_cid(fresh_cid)
   let reserve = (cid_sum - change)
   console.log(price, cash, change, cid_sum, reserve)
   if (cash < price) {
      alert("Customer does not have enough money to purchase the item")
      return
   } else if (cash === price) {
      change_due_div.textContent = "No change due - customer paid with exact cash"
      return
   } else if (cash > price) {
      if (reserve < 0) {
         update_fields(register_state.insufficient)
      } else {
         make_change(change)
      }
   }
}

function update_fields(str) {
   switch (str) {
      case register_state.insufficient:
         change_due_div.textContent = register_state.insufficient
         break
      case register_state.closed:
         change_due_div.textContent = register_state.closed
         break
      case register_state.open:
         change_due_div.textContent = register_state.open
         break
      default:
         change_due_div.textContent = str
   }
}

purchase_button.addEventListener('click', check_input)
