<template>
  <div class="todo-list">
    <div class="title">
      <h3>每日待辦清單</h3>

      <!-- 新增待辦事項的按钮 -->
      <button @click="showModal = true">新增</button>
    </div>

    <!-- 弹窗 -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="showModal = false">&times;</span>
        <h4>新增待辦事項</h4>
        <input v-model="newTask" placeholder="請輸入待辦事項" />
        <button @click="addTask">新增</button>
      </div>
    </div>

    <div class="task-list">
      <div v-for="(task, index) in tasks" :key="index" class="task-item">
        <input type="checkbox" v-model="task.completed" />
        <p :class="{ completed: task.completed }">{{ task.text }}</p>
        <button @click="removeTask(index)">移除</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from "vue";

const props = defineProps({
  tasks: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:tasks"]);

const newTask = ref("");
const showModal = ref(false);

const addTask = () => {
  if (newTask.value.trim()) {
    emit("update:tasks", [
      ...props.tasks,
      { text: newTask.value.trim(), completed: false },
    ]);
    newTask.value = "";
    showModal.value = false; // 添加任务后关闭弹窗
  }
};

const removeTask = (index) => {
  emit(
    "update:tasks",
    props.tasks.filter((_, i) => i !== index)
  );
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-evenly;
}

.todo-list {
  margin-top: 20px;
}

button {
  background-color: #8e44ad;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 10px;
  font-family: "Microsoft YaHei", sans-serif;
}

button:hover {
  background-color: #8b3eff;
}

.title button,
.modal-content button {
  width: 80px;
  height: 40px;
  font-size: 20px;
  line-height: 20px;
}

.task-item button {
  width: 70px;
  height: 30px;
  font-size: 15px;
  line-height: 10px;
}

.task-list {
  margin-top: 20px;
}

.task-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-evenly;
}

.task-item p {
  margin: 0;
  width: 50%;
  display: flex;
  margin-left: 5%;
}

.task-item button {
  margin-left: 10px;
}

.completed {
  text-decoration: line-through;
  color: gray;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* 提高背景的透明度 */
  backdrop-filter: blur(5px); /* 添加模糊效果 */
}

.modal-content {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  width: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加陰影效果 */
  position: relative;
  transform: translateY(-10px);
  transition: transform 0.3s ease-out; /* 過度效果 */
}

h4 {
  margin-top: 0;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
}

input {
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  margin-right: 2%;
}

.close {
  position: absolute;
  top: 15px;
  right: 20px;
  color: #aaa;
  font-size: 24px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close:hover {
  color: #000;
}
</style>
