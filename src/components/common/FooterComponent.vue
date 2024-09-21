<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section about">
        <h2>TripTrekker</h2>
        <p>您的終極旅行規劃夥伴。輕鬆探索、規劃和享受您的旅程。</p>
      </div>
      <div class="footer-section links">
        <h3>快速連結</h3>
        <ul>
          <li><a href="#home">首頁</a></li>
          <li><a href="#my-trips">我的行程</a></li>
          <li><a href="#attraction-search">景點查詢</a></li>
          <li><a href="#budget-planning">預算規劃</a></li>
          <li><a href="#social">社群</a></li>
        </ul>
      </div>
      <div class="footer-section social">
        <h3>關於我們</h3>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 TripTrekker. 版權所有。</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-section {
  flex: 1;
  min-width: 200px;
}

.footer-section h2,
.footer-section h3 {
  color: #8e44ad; /* 紫色 */
  margin-bottom: 15px;
}

.footer-section p,
.footer-section ul {
  color: #f2f2f2;
  font-size: 14px;
  line-height: 1.6;
}

.footer-section ul {
  list-style-type: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #f2f2f2;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #8e44ad; /* 紫色懸停效果 */
}

.social-icons {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.social-icons a {
  color: white;
  font-size: 18px;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #8e44ad; /* 紫色懸停效果 */
}

.footer-bottom {
  margin-top: 20px;
  border-top: 1px solid #444;
  padding-top: 15px;
  color: #aaa;
  font-size: 14px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-section {
    text-align: center;
    margin-bottom: 20px;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>
