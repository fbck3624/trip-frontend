<template>
  <div class="profile-component">
    <div class="profile-header">
      <img
        :src="profileData.profilePic"
        alt="Profile Picture"
        class="profile-pic"
      />
      <div class="profile-info">
        <h1 class="profile-name">{{ profileData.profileName }}</h1>
        <p class="bio">{{ profileData.bio }}</p>
        <div class="stats">
          <div class="stat-item">
            <span>{{ profileData.tripsCount }}</span>
            <span>旅程數</span>
          </div>
          <div class="stat-item">
            <span>{{ profileData.followers }}</span>
            <span>粉絲</span>
          </div>
          <div class="stat-item">
            <span>{{ profileData.following }}</span>
            <span>追蹤中</span>
          </div>
        </div>
      </div>
      <button
        v-if="!isEditing"
        class="edit-profile-btn"
        @click="showEditModal = true"
      >
        編輯個人資料
      </button>

      <!-- 彈窗遮罩層 -->
      <div
        v-if="showEditModal"
        class="modal-overlay"
        @click="showEditModal = false"
      ></div>
      <EditProfileComponent
        v-if="showEditModal"
        :profileData="profileData"
        @close="showEditModal = false"
        @save="updateProfile"
        class="modal-content"
      />
    </div>
    <div class="profile-content">
      <div class="content-tabs">
        <span
          class="tab"
          :class="{ active: activeTab === 'album' }"
          @click="activeTab = 'album'"
          >相簿</span
        >
        <span
          class="tab"
          :class="{ active: activeTab === 'articles' }"
          @click="activeTab = 'articles'"
          >文章</span
        >
        <span
          class="tab"
          :class="{ active: activeTab === 'trips' }"
          @click="activeTab = 'trips'"
          >旅程</span
        >
      </div>
      <div v-if="activeTab === 'album'">
        <PhotoAlbumComponent :photos="photos" />
      </div>
      <div v-if="activeTab === 'articles'" class="articles-content">
        <ArticleListComponent :articles="articles" />
      </div>
      <div v-if="activeTab === 'trips'" class="trips-content">
        <MyTripsComponent />
      </div>
      <button class="load-more">載入更多</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import EditProfileComponent from "@/components/personal/EditProfileComponent.vue";
import PhotoAlbumComponent from "@/components/personal/PhotoAlbumComponent.vue";
import MyTripsComponent from "@/components/personal/MyTripsComponent.vue";
import ArticleListComponent from "@/components/personal/ArticleListComponent.vue";

const profileData = ref({
  profilePic: require("@/assets/image.png"),
  profileName: "Sally",
  bio: "Exploring the world, one trip at a time",
  isFollowing: false,
  followers: 100,
  following: 500,
  tripsCount: 20,
});

// 编辑profile的方法
const showEditModal = ref(false);
const activeTab = ref("album"); // 默认显示相簿

const updateProfile = (newProfileData) => {
  profileData.value = { ...profileData.value, ...newProfileData };
};

// 示例照片数据
const photos = ref([
  { id: 1, url: require("@/assets/image.png") },
  { id: 2, url: require("@/assets/image.png") },
  { id: 3, url: require("@/assets/image.png") },
  // 可以添加更多照片数据
]);

const articles = ref([
  {
    id: 1,
    title: "如何旅行時保持健康",
    summary: "簡述11111",
    views: 120,
    likes: 30,
    coverImage: require("@/assets/image.png"),
  },
  {
    id: 2,
    title: "最佳旅遊目的地推薦",
    summary: "簡述11111",
    views: 250,
    likes: 45,
    coverImage: require("@/assets/image.png"),
  },
  {
    id: 3,
    title: "如何打包輕便旅行行李",
    summary: "簡述11111",
    views: 90,
    likes: 20,
    coverImage: require("@/assets/image.png"),
  },
  // 可以添加更多文章数据
]);
</script>

<style scoped>
.profile-component {
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.profile-header {
  display: flex;
  align-items: center;
  padding: 20px 0;
  width: 70%;
  margin-left: 15%;
  position: relative; /* Make sure the modal overlay is positioned relative to this */
}

.profile-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 30px;
}

.profile-info {
  flex: 1;
  text-align: center;
}

.profile-name {
  font-size: 28px;
  font-weight: bold;
  margin: 0 0 10px;
}

.bio {
  margin: 0 0 20px;
  color: #666;
  font-size: 16px;
}

.stats {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.stat-item {
  margin: 0 15px;
  text-align: center;
  font-weight: bold;
  display: grid;
}

.edit-profile-btn {
  align-self: flex-start;
  margin-left: auto;
  background-color: #f0f0f0;
  color: #333;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.content-tabs {
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 20px;
}

.tab {
  display: inline-block;
  padding: 10px 45px;
  cursor: pointer;
}

.tab.active {
  border-bottom: 2px solid #00b0ff;
  color: #00b0ff;
}

.load-more {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* 彈窗 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 半透明遮罩 */
  z-index: 1000;
}

.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0); /* 半透明背景 */
  padding: 20px;
  border-radius: 8px;
  z-index: 1001;
  max-width: 90%; /* 限制彈窗最大寬度 */
  width: 500px; /* 固定寬度 */
}
</style>
