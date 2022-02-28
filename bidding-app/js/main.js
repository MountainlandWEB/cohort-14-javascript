const BIDS_KEY = 'bids';

let bids = retrieveBids() || [
  {
    amount: 45,
    user: 'bidder1',
  },
];

displayBids();

function displayBids() {
  let bidsHtml = '';
  bids.forEach((bid) => {
    bidsHtml += `
        <div>
            <span>${bid.amount}</span>
            <span>${bid.user}</span>
        </div>
        `;
  });
  document.querySelector('#bids').innerHTML = bidsHtml;
}

function addBid(user) {
  let bid = {
    amount: document.querySelector(`#${user}`).value,
    // user: user
    user, // you can replace the above with this new syntax
  };
  bids.push(bid);
  document.querySelector(`#${user}`).value = '';
  displayBids();
  saveBids();
}

function saveBids() {
  localStorage.setItem(BIDS_KEY, JSON.stringify(bids));
}

function retrieveBids() {
  return JSON.parse(localStorage.getItem(BIDS_KEY));
}
