// Calculation star here 
function calculate() {
    const food = document.getElementById('food').value;
    const rent = document.getElementById('rent').value;
    const cloth = document.getElementById('cloth').value;
    const expenses = document.getElementById('expenses');
    const income = document.getElementById('income').value;
    const balance = document.getElementById('balance');
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
    const totalExpenses = parseFloat(food) + parseFloat(rent) + parseFloat(cloth);
    expenses.innerText = totalExpenses;
    const newbalance = parseFloat(income) - totalExpenses;
    balance.innerText = newbalance;
}

// Save in percentage 
function saveAmount() {
    const saveInput = document.getElementById('saveInput');
    const saving = document.getElementById('saving');
    const income = document.getElementById('income');

    const savingsAmount = parseFloat(income.value) * parseFloat((saveInput.value) / 100);
    saving.innerText = savingsAmount;

    // Remaining balance
    const balance = document.getElementById('balance');
    const remaing = document.getElementById('remaingBalance');

    const remaingBlance = parseFloat(balance.innerText) - savingsAmount;
    remaing.innerText = remaingBlance;

}