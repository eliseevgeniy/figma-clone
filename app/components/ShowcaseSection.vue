<!-- app/components/ShowcaseSection.vue -->
<template>
  <v-container class="py-16" style="max-width: 1300px;">
    
    <!-- ВЕРХНЯЯ ЧАСТЬ: Заголовок -->
    <div class="text-center mb-10">
      <h2 class="text-h4 font-weight-medium mb-2" style="letter-spacing: -1px;">
        One workspace for your entire product development process.
      </h2>
      <p class="text-h6 text-grey-darken-1 font-weight-regular">
        Made so your whole team can go from WIP to ship, together.
      </p>
    </div>

    <!-- ЦЕНТРАЛЬНАЯ ЧАСТЬ: Зеленая подложка и окно браузера -->
    <div class="green-backdrop d-flex justify-center align-center rounded-lg mb-12">
      
      <!-- Имитация окна браузера -->
      <div class="browser-window rounded-lg shadow-lg">
        
        <!-- Шапка окна (таб-бар) -->
        <div class="browser-header d-flex align-center px-4 py-2 border-b">
          <div class="d-flex gap-2 mr-4">
            <div class="dot bg-red"></div>
            <div class="dot bg-yellow"></div>
            <div class="dot bg-green"></div>
          </div>
          <div class="browser-url bg-grey-lighten-3 rounded-pill text-center text-caption py-1 w-100">
            https://figma.com
          </div>
        </div>

        <!-- Контент внутри окна -->
        <div class="browser-content p-6 bg-white position-relative">
          
          <!-- Заголовок выставки -->
          <div class="exhibition-title mb-6">
            <h3 class="text-h5 font-weight-black d-inline-block bg-yellow-accent-3 px-2 py-1">
              CURRENT<br>EXHIBITIONS
            </h3>
          </div>

          <!-- Сетка картинок (заглушки) -->
          <div class="d-flex gap-4 align-end">
            <!-- 1. Металл (Серый) -->
            <div class="exhibit-col">
              <div class="exhibit-img bg-grey-lighten-2 rounded-lg mb-2"></div>
              <span class="text-caption text-grey">11.03 — 11.27</span>
              <h4 class="text-subtitle-2 font-weight-bold">METAMATERIALS</h4>
              <span class="text-caption text-grey">NIDA SOLBERG</span>
            </div>

            <!-- 2. Купол (Большая картинка) -->
            <div class="exhibit-col-large">
              <div class="exhibit-img bg-deep-orange-lighten-1 rounded-lg mb-2 d-flex align-center justify-center">
                <!-- Имитация купола -->
                <v-icon size="80" color="white" opacity="0.5">mdi-dome</v-icon>
              </div>
              <span class="text-caption text-grey">10.14 — 12.20</span>
              <h4 class="text-subtitle-2 font-weight-bold">ATMOSPHERIC THRESHOLDS</h4>
              <span class="text-caption text-grey">ELENA KOVACS</span>
            </div>

            <!-- 3. Одежда (Песочный) -->
            <div class="exhibit-col">
              <div class="exhibit-img bg-brown-lighten-2 rounded-lg mb-2"></div>
              <span class="text-caption text-grey">09.18 — 10.05</span>
              <h4 class="text-subtitle-2 font-weight-bold">AUGMENTED<br>OUTERWEAR</h4>
              <span class="text-caption text-grey">NIKLAS ORIN</span>
            </div>

            <!-- 4. Скульптура (Голубой) -->
            <div class="exhibit-col">
              <div class="exhibit-img bg-blue-lighten-3 rounded-lg mb-2"></div>
              <span class="text-caption text-grey">05.18 — 08.22</span>
              <h4 class="text-subtitle-2 font-weight-bold">FERAL<br>STRUCTURES</h4>
              <span class="text-caption text-grey">DAN BRADY</span>
            </div>
          </div>

          <!-- Курсор мыши (картинка) -->
          <v-icon color="black" size="36" class="cursor-icon" style="transform: rotate(-15deg);">mdi-cursor-default</v-icon>

        </div>
      </div>
    </div>

    <!-- НИЖНЯЯ ЧАСТЬ: Две колонки с фичами -->
    <v-row class="mt-8">
      <!-- Левая колонка -->
      <v-col cols="12" md="6" class="pr-md-8">
        <v-icon size="24" class="mb-4">mdi-circle</v-icon>
        <h3 class="text-h6 font-weight-bold mb-1">Design anything you can imagine</h3>
        <p class="text-body-1 text-grey-darken-1 mb-3">Turn your ideas into apps, websites, and products.</p>
        <a href="#" class="text-black font-weight-medium text-decoration-underline d-flex align-center custom-link">
          Explore design tools <v-icon size="18" class="ml-1">mdi-arrow-right</v-icon>
        </a>
      </v-col>

      <!-- Правая колонка -->
      <v-col cols="12" md="6" class="pl-md-8">
        <v-icon size="24" class="mb-4">mdi-cube-outline</v-icon>
        <h3 class="text-h6 font-weight-bold mb-1">Build with intention</h3>
        <p class="text-body-1 text-grey-darken-1 mb-3">Dev tools that take you all the way to production.</p>
        <a href="#" class="text-black font-weight-medium text-decoration-underline d-flex align-center custom-link">
          Explore build tools <v-icon size="18" class="ml-1">mdi-arrow-right</v-icon>
        </a>
      </v-col>
    </v-row>

  </v-container>
</template>

<style scoped>
/* Зеленая подложка */
.green-backdrop {
  background-color: #4e8f69; /* Зеленый цвет как на скриншоте */
  padding: 60px 40px;
  width: 100%;
}

/* Окно браузера */
.browser-window {
  background: white;
  width: 100%;
  max-width: 900px;
  overflow: hidden;
}

/* Точки в шапке браузера */
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.bg-red { background-color: #ff5f56; }
.bg-yellow { background-color: #ffbd2e; }
.bg-green { background-color: #27c93f; }

/* Заголовок выставки */
.bg-yellow-accent-3 {
  background-color: #e3ff00 !important; /* Кислотно-желтый */
  line-height: 1;
}

/* Карточки выставок */
.exhibit-col {
  width: 18%;
}
.exhibit-col-large {
  width: 40%;
}

.exhibit-img {
  width: 100%;
  aspect-ratio: 1 / 1; /* Квадратные картинки */
}
.exhibit-col-large .exhibit-img {
  aspect-ratio: 16 / 9; /* Прямоугольная большая картинка */
}

/* Курсор */
.cursor-icon {
  position: absolute;
  bottom: 20%;
  right: 20%;
  z-index: 10;
}

/* Стили для ссылок */
.custom-link {
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}
.custom-link:hover {
  color: #555 !important;
}
</style>