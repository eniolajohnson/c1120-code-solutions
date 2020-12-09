/* exported Account */
function Account(number, holder){
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function(amount){
  var deposit;
  if (amount >= 1){
    deposit = new Transaction('deposit', amount);
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }
}

Account.prototype.withdraw = function(amount){
  var withdraw;
  if (amount >= 1){
    withdraw = new Transaction('withdraw', amount);
    this.transactions.push(withdraw);
    return true;
  } else {
    return false;
  }
}

Account.prototype.getBalance = function () {
  var depositBalance = 0;
  var withdrawalBalance = 0;
  for (var i = 0; i < this.transactions.length; i++){
    // console.log(this.transactions[i].type);
    if (this.transactions[i].type === 'deposit'){
      depositBalance += this.transactions[i].amount;
    }

    if (this.transactions[i].type === 'withdraw') {
      withdrawalBalance += this.transactions[i].amount;
    }
  }
  var balance = depositBalance - withdrawalBalance;
  return balance;
}
