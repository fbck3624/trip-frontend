<template>
  <div class="expense-tracker">
    <h3>Expense Tracker</h3>

    <div class="add-expense">
      <input v-model="newExpense.name" placeholder="Expense Name" />
      <input type="number" v-model="newExpense.amount" placeholder="Amount" />
      <button @click="addExpense">Add Expense</button>
    </div>

    <ul class="expense-list">
      <li v-for="(expense, index) in expenses" :key="index">
        <span>{{ expense.name }}: ${{ expense.amount }}</span>
        <button @click="removeExpense(index)">Remove</button>
      </li>
    </ul>

    <div class="total-expense"><strong>Total:</strong> ${{ totalExpense }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const newExpense = ref({ name: "", amount: 0 });
const expenses = ref([]);

const addExpense = () => {
  if (newExpense.value.name && newExpense.value.amount) {
    expenses.value.push({ ...newExpense.value });
    newExpense.value = { name: "", amount: 0 };
  }
};

const removeExpense = (index) => {
  expenses.value.splice(index, 1);
};

const totalExpense = computed(() => {
  return expenses.value.reduce(
    (sum, expense) => sum + parseFloat(expense.amount),
    0
  );
});
</script>

<style scoped>
.expense-tracker {
  margin-top: 20px;
}

.add-expense {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.add-expense input {
  padding: 5px;
  font-size: 16px;
}

.add-expense button {
  padding: 5px 10px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
}

.add-expense button:hover {
  background-color: #2980b9;
}

.expense-list {
  list-style: none;
  padding: 0;
}

.expense-list li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.total-expense {
  margin-top: 20px;
  font-size: 18px;
}
</style>
