<!-- app/components/ResourcesSection.vue -->
<template>
  <v-container class="py-16" style="max-width: 1400px;">
    
       <!-- ВЕРХНЯЯ ЧАСТЬ: Заголовок, ссылка и стрелочки -->
    <div class="d-flex justify-space-between align-end mb-6">
      <div>
        <!-- Черный заголовок -->
        <h2 class="large-title font-weight-medium mb-2">
          Explore what you can do in Figma.
        </h2>
        
        <!-- Серый подзаголовок (такого же размера) -->
        <p class="large-subtitle font-weight-regular mb-4">
          Browse resources made by the community.
        </p>
        
        <a href="#" class="text-black font-weight-medium text-decoration-underline d-flex align-center custom-link">
          Browse all templates <v-icon size="18" class="ml-1">mdi-arrow-right</v-icon>
        </a>
      </div>

      <!-- Стрелочки навигации -->
      <div class="d-none d-md-flex align-center gap-2 mb-2">
        <span class="text-caption text-grey mr-2">1 of 10</span>
        <v-btn icon variant="outlined" size="small" class="rounded-circle"><v-icon>mdi-arrow-left</v-icon></v-btn>
        <v-btn icon variant="outlined" size="small" class="rounded-circle"><v-icon>mdi-arrow-right</v-icon></v-btn>
      </div>
    </div>

        <!-- ГОРИЗОНТАЛЬНАЯ ЛЕНТА КАРТОЧЕК -->
    <div class="resources-scroll">
      
      <!-- Карточка 1: Icons -->
      <div class="resource-card">
        <div class="card-image bg-pink-lighten-4 d-flex align-center justify-center">
          <!-- Имитация сетки иконок -->
          <v-icon size="120" color="pink-darken-2" class="opacity-50">mdi-view-grid</v-icon>
        </div>
        <a href="#" class="card-link">Icons <v-icon size="16">mdi-arrow-right</v-icon></a>
      </div>

      <!-- Карточка 2: UI Kits -->
      <div class="resource-card">
        <div class="card-image bg-blue-lighten-4 p-4 d-flex flex-column gap-2">
          <!-- Имитация интерфейса -->
          <div class="mockup-bar bg-white rounded"></div>
          <div class="mockup-bar bg-white rounded w-75"></div>
          <div class="mockup-button bg-orange-accent-2 rounded mt-2"></div>
        </div>
        <a href="#" class="card-link">UI Kits <v-icon size="16">mdi-arrow-right</v-icon></a>
      </div>

      <!-- Карточка 3: Websites -->
      <div class="resource-card">
        <div class="card-image bg-green-darken-3 d-flex align-center justify-center">
          <!-- Имитация ноутбука -->
          <div class="laptop-mockup bg-white rounded d-flex align-center justify-center">
            <span class="text-caption font-weight-bold text-green-darken-3">The Room Report</span>
          </div>
        </div>
        <a href="#" class="card-link">Websites <v-icon size="16">mdi-arrow-right</v-icon></a>
      </div>

      <!-- Карточка 4: Social media -->
      <div class="resource-card">
        <div class="card-image bg-red-darken-3 d-flex align-center justify-center p-4">
          <div class="social-mockup bg-white rounded p-2 text-center">
            <h4 class="text-h6 font-weight-bold text-red-darken-2" style="line-height: 1;">Brunch<br>Is Here</h4>
            <p class="text-caption text-red-darken-2 mt-1">7AM–3PM</p>
          </div>
        </div>
        <a href="#" class="card-link">Social media <v-icon size="16">mdi-arrow-right</v-icon></a>
      </div>

      <!-- Карточка 5: Mobile apps -->
      <div class="resource-card">
        <div class="card-image bg-brown-darken-2 d-flex align-center justify-center">
          <!-- Имитация телефона -->
          <div class="phone-mockup-sm bg-grey-lighten-3 rounded-xl border-lg"></div>
        </div>
        <a href="#" class="card-link">Mobile apps <v-icon size="16">mdi-arrow-right</v-icon></a>
      </div>

      <!-- Карточка 6: Presentations -->
      <div class="resource-card">
        <div class="card-image bg-yellow-darken-3 d-flex align-center justify-center">
           <span class="text-h5 font-italic text-white" style="font-family: serif;">Brand Vision</span>
        </div>
        <a href="#" class="card-link">Presentations <v-icon size="16">mdi-arrow-right</v-icon></a>
      </div>

    </div>

  </v-container>
</template>

<style scoped>
/* Горизонтальная прокрутка */
.resources-scroll {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding-bottom: 20px; /* Место для скроллбара */
  scroll-snap-type: x mandatory; /* Прилипание карточек при скролле */
}

/* Скрываем скроллбар для красоты (работает в Webkit браузерах) */
.resources-scroll::-webkit-scrollbar {
  display: none;
}

/* Карточка */
.resource-card {
  flex: 0 0 300px; /* Фиксированная ширина карточки */
  scroll-snap-align: start;
}

/* Контейнер для картинки */
.card-image {
  width: 100%;
  height: 300px;
  border-radius: 8px;
  margin-bottom: 12px;
  overflow: hidden;
}

/* Ссылка под карточкой */
.card-link {
  color: black;
  text-decoration: underline;
  text-underline-offset: 4px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
}
.card-link:hover {
  color: #555;
}

/* --- Имитация элементов внутри карточек --- */
.mockup-bar { height: 20px; width: 100%; }
.mockup-button { height: 40px; width: 50%; }

.laptop-mockup { width: 200px; height: 120px; border: 4px solid #333; border-radius: 8px; }

.social-mockup { width: 150px; height: 180px; }

.phone-mockup-sm { width: 100px; height: 200px; border: 4px solid #333; }

/* Стили для ссылки */
.custom-link {
  text-decoration-thickness: 1px;
}

/* Принудительно задаем одинаковый размер шрифта */
.large-title {
  font-size: 2rem !important; /* Размер заголовка */
  line-height: 1.2;
  color: #000000 !important;
}

.large-subtitle {
  font-size: 2rem !important; /* Ровно такой же размер! */
  line-height: 1.2;
  color: #757575 !important; /* Принудительно серый цвет */
}
</style>