<template>
  <div class="day-switch-body">
    <button
      v-for="day in days"
      :key="day"
      @click="selectDay(day)"
      :class="{ active: selectedDay === day }"
    >
      Day {{ day }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  days: {
    type: Array,
    required: true,
  },
  selectedDay: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update:selectedDay"]);

const selectDay = (day) => {
  emit("update:selectedDay", day);
};
</script>

<style scoped>
.day-switch-body {
  display: flex;
  flex-direction: column;
}

.day-switch-body button {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.day-switch-body button.active {
  background-color: #8e44ad;
  color: white;
}

.day-switch-body button.active:hover {
  background-color: #8b3eff;
}

.day-switch-body button:hover {
  background-color: #ddd;
}
</style>
