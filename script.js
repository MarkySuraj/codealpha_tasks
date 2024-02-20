document.addEventListener('DOMContentLoaded', () => {
  const expenseForm = document.getElementById('expense-form');
  const expenseNameInput = document.getElementById('expense-name');
  const expenseAmountInput = document.getElementById('expense-amount');
  const expenseDateInput = document.getElementById('expense-date');
  const expensesList = document.getElementById('expenses-list');

  let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  function renderExpenses() {
    expensesList.innerHTML = '';
    expenses.forEach((expense, index) => {
      const li = document.createElement('li');
      li.classList.add('expense-item');
      li.innerHTML = `
        <span class="expense-name">${expense.name}</span>: <span class="expense-amount">$${expense.amount}</span> on <span class="expense-date">${expense.date}</span>
        <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
      `;
      expensesList.appendChild(li);
    });
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }

  function addExpense(name, amount, date) {
    expenses.push({ name, amount, date });
    renderExpenses();
  }

  window.deleteExpense = function(index) {
    expenses.splice(index, 1);
    renderExpenses();
  }

  expenseForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);
    const date = expenseDateInput.value;
    if (name && amount && date) {
      addExpense(name, amount, date);
      expenseNameInput.value = '';
      expenseAmountInput.value = '';
      expenseDateInput.value = '';
    } else {
      alert('Please enter all fields.');
    }
  });

  renderExpenses();
});
