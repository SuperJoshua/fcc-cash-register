# Build a Cash Register

[--> See it live.](https://superjoshua.github.io/fcc-cash-register/)

Nothing fancy, here. This thing just attempts to make change. Poorly. Frankly, it's not that functional. But it passed the FCC tests.

This was a project required for getting the JavaScript Algorithms and Data Structures Certificate from freeCodeCamp. It had to pass these tests.

- You should have the HTML file link to the JavaScript file.
- You should have a global variable called price.
- You should have a global variable called cid.
- You should have an input element with an id of "cash".
- You should have a div, span, or p element with an id of "change-due".
- You should have a button element with an id of "purchase-btn".
- When price is 20, the value in the #cash element is 10, and the #purchase-btn element is clicked, an alert should appear with the text "Customer does not have enough money to purchase the item".
- When the value in the #cash element is less than price, and the #purchase-btn element is clicked, an alert should appear with the text "Customer does not have enough money to purchase the item".
- When price is 11.95, the value in the #cash element is 11.95, and the #purchase-btn element is clicked, the value in the #change-due element should be "No change due - customer paid with exact cash".
- When the value in the #cash element is equal to price, and the #purchase-btn element is clicked, the value in the #change-due element should be "No change due - customer paid with exact cash".
- When price is 19.5, the value in the #cash element is 20, cid is [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]], and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: OPEN QUARTER: $0.5".
- When price is 3.26, the value in the #cash element is 100, cid is [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]], and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04".
- When price is less than the value in the #cash element, total cash in drawer cid is greater than the change due, individual denomination amounts allows for returning change due, and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: OPEN" with required change due in coins and bills sorted in highest to lowest order.
- When price is 19.5, the value in the #cash element is 20, cid is [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]], and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: INSUFFICIENT_FUNDS"
- When the price is less than the value in the #cash element and the total cash in the drawer (cid) is insufficient to cover the change due, the purchase should not proceed. When the #purchase-btn is clicked under these conditions, the #change-due element should display "Status: INSUFFICIENT_FUNDS".
- When price is 19.5, the value in the #cash element is 20, cid is [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]], and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: INSUFFICIENT_FUNDS".
- When price is less than the value in the #cash element, total cash in drawer cid is greater than change due, but the individual denomination amounts make it impossible to return needed change, when the #purchase-btn element is clicked, the value in the #change-due element should be "Status: INSUFFICIENT_FUNDS"
- When price is 19.5, the value in the #cash element is 20, cid is [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]], and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: CLOSED PENNY: $0.5".
- When price is less than the value in the #cash element, total cash in drawer cid is equal to change due, and the #purchase-btn element is clicked, the value in the #change-due element should be "Status: CLOSED" with change due in coins and bills sorted in highest to lowest order.
