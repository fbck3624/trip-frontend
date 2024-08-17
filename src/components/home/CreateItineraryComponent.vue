<template>
  <div class="create-itinerary">
    <form @submit.prevent="createItinerary">
      <div class="form-row">
        <div class="box name-box">
          <label for="name">名稱</label>
          <input
            type="text"
            placeholder="行程名稱"
            v-model="itinerary.name"
            id="name"
            required
          />
        </div>
        <div class="line"></div>
        <div class="box location-box">
          <label for="location">目的地</label>
          <input
            type="text"
            v-model="itinerary.location"
            placeholder="請輸入目的地"
            id="location"
            required
          />
        </div>
        <div class="line"></div>
        <div class="box date-box">
          <label>日期</label>
          <div class="date-picker-container">
            <div class="date-picker">
              <input
                type="date"
                v-model="itinerary.departureDate"
                id="departure-date"
                required
              />
            </div>
            <label> - </label>
            <div class="date-picker">
              <input
                type="date"
                v-model="itinerary.returnDate"
                id="return-date"
                required
              />
            </div>
          </div>
        </div>
        <button type="submit" class="submit-btn">建立行程</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const itinerary = ref({
  name: "",
  location: "",
  departureDate: "",
  returnDate: "",
});

const createItinerary = () => {
  console.log("行程已创建:", itinerary.value);
};
</script>

<style scoped>
.create-itinerary {
  width: 70%;
  margin: 2% auto 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #ede8e8;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.box {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.name-box,
.location-box {
  width: 20%;
}

label {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease-in-out;
}

input:focus {
  border-color: #310969;
  outline: none;
}

.submit-btn {
  padding: 12px 24px;
  background-color: #5a09d5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;
}

.submit-btn:hover {
  background-color: #8b3eff;
}

.date-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.date-picker-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
}

.date-picker {
  flex: 1;
}

.line {
  width: 1px;
  height: 90px;
  background-color: rgb(192, 192, 192);
  margin: 0 5px; /* Adjust margin as needed */
}

@media (max-width: 768px) {
  .box {
    width: 100%;
  }

  .date-picker-container {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
