const add = require('./adder.js');
class ViewManager {
  connectEventHandlers() {
  	document.getElementById('form-numbers')
  	  .addEventListener(
  	  	'submit', 
  	  	this.onSubmit.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    let sum = num1 + num2;
    this.renderSum(sum);
  } 

  renderSum(sum) {
    document.querySelector('.sum').textContent = sum;
  }
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();