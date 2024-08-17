<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <h2>Edit Profile</h2>
      <form @submit.prevent="saveProfile">
        <div class="form-group">
          <label for="profileName">Name</label>
          <input
            id="profileName"
            v-model="formData.profileName"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="form-group">
          <label for="profilePic">Profile Picture</label>
          <input
            id="profilePic"
            type="file"
            @change="handleFileUpload"
            accept="image/*"
          />
        </div>
        <div class="form-group">
          <label for="bio">Bio</label>
          <textarea
            id="bio"
            v-model="formData.bio"
            rows="4"
            placeholder="Tell us about yourself"
            required
          ></textarea>
        </div>
        <div class="modal-actions">
          <button type="submit" class="save-btn">Save</button>
          <button type="button" class="cancel-btn" @click="closeModal">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  profileData: Object,
});

const emit = defineEmits(["close", "save"]);

const formData = ref({ ...props.profileData });

watch(
  () => props.profileData,
  (newData) => {
    formData.value = { ...newData };
  }
);

const closeModal = () => {
  emit("close");
};

const saveProfile = () => {
  emit("save", formData.value);
  closeModal();
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      formData.value.profilePic = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 500px;
}

h2 {
  margin-top: 0;
  font-size: 24px;
  font-weight: 600;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #555;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #333;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #888;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.save-btn,
.cancel-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.save-btn {
  background-color: #007bff;
  color: #fff;
}

.cancel-btn {
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
}
</style>
