// Calculation star here 
function calculate() {
    const food = document.getElementById('food');
    const rent = document.getElementById('rent');
    const cloth = document.getElementById('cloth');
    const expenses = document.getElementById('expenses');
    const income = document.getElementById('income');
    const balance = document.getElementById('balance');
    const totalExpenses = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(cloth.value);
    expenses.innerText = totalExpenses;
    newbalance = parseFloat(income.value) - totalExpenses;
    balance.innerText = newbalance;
}