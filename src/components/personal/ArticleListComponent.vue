<template>
  <div class="article-list">
    <div class="article-item" v-for="article in articles" :key="article.id">
      <div class="article-header">
        <div class="tags">
          <span class="tag">標籤</span>
          <span class="tag">另一個標籤</span>
        </div>
        <button class="edit-btn" @click="editArticle(article.id)">
          <span>⋯</span>
        </button>
      </div>
      <div class="article-body">
        <div class="article-content">
          <h2 class="article-title">{{ article.title }}</h2>
          <p class="article-summary">{{ article.summary }}</p>
        </div>
        <img :src="article.coverImage" alt="封面圖" class="cover-image" />
      </div>
      <div class="article-footer">
        <div class="article-stats">
          <span class="views">{{ article.views }} 觀看</span>
          <span class="likes">{{ article.likes }} 喜歡</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  articles: {
    type: Array,
    required: true,
  },
});

const editArticle = (id) => {
  console.log("編輯文章ID:", id);
};
</script>

<style scoped>
.article-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.article-item {
  width: 100%;
  max-width: 600px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 15px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.article-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
  background-color: #f9f9f9;
  border-radius: 8px 8px 0 0;
}

.tags {
  display: flex;
  gap: 8px;
}

.tag {
  background-color: #00b0ff;
  color: #fff;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
}

.edit-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #888;
  transition: color 0.2s;
}

.edit-btn:hover {
  color: #333;
}

.article-body {
  display: flex;
  padding: 10px 15px;
  gap: 15px;
}

.article-content {
  flex: 1;
}

.article-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px;
  color: #333;
}

.article-summary {
  font-size: 14px;
  color: #666;
}

.cover-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.article-footer {
  padding: 10px 15px;
  border-top: 1px solid #eee;
  background-color: #f9f9f9;
  border-radius: 0 0 8px 8px;
  display: flex;
  justify-content: flex-end;
}

.article-stats {
  font-size: 12px;
  color: #888;
  display: flex;
  gap: 15px;
}

.article-stats span {
  display: block;
}
</style>
