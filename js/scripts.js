// Calculation star here 
function calculate() {
    const food = document.getElementById('food').value;
    const rent = document.getElementById('rent').value;
    const cloth = document.getElementById('cloth').value;
    const expenses = document.getElementById('expenses');
    const income = document.getElementById('income').value;
    const balance = document.getElementById('balance');
    const totalExpenses = parseFloat(food) + parseFloat(rent) + parseFloat(cloth);
    // Error Message
    const fail = document.getElementById('notify-fail');
    const success = document.getElementById('notify-success');
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(cloth)) {
        success.style.display = 'none';
        fail.style.display = 'block';

    }
    else {
        success.style.display = 'block';
        fail.style.display = 'none';

    }

    // Error Message for negative Number
    if (income < 0 || food < 0 || rent < 0 || cloth < 0) {
        success.style.display = 'none';
        fail.style.display = 'block';

    }
    else {
        success.style.display = 'block';
        fail.style.display = 'none';

    }

    expenses.innerText = totalExpenses;
    newbalance = parseFloat(income) - totalExpenses;
    balance.innerText = newbalance;
}