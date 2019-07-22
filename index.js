/* Your code goes here */
var customerName = 'bob'

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer(){
  bestCustomer = 'not bob'
}

function overWriteBestCustomer(){
  bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'not nice person'

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'someone worse'
}

const favoriteCustomer = 'me'

function attemptTwoFavoriteCustomers(){
  favoriteCustomer = 'not me'
}