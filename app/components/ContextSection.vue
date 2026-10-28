<!-- app/components/ContextSection.vue -->
<template>
  <v-container class="py-16" style="max-width: 1400px;">
    
    <!-- ВЕРХНЯЯ ЧАСТЬ: Заголовок -->
    <div class="text-center mb-10" style="max-width: 800px; margin: 0 auto;">
      <h2 class="text-h4 font-weight-medium mb-2" style="letter-spacing: -1px;">
        Start with design context. Build with consistency.
      </h2>
      <p class="text-h6 text-grey-darken-1 font-weight-regular">
        Your context, codebase, and agents stay connected so what you design is what gets shipped.
      </p>
    </div>

    <!-- ЦЕНТРАЛЬНАЯ ЧАСТЬ: Фон и окно -->
    <div class="watercolor-bg d-flex justify-center align-center rounded-lg mb-6 relative">
      
      <!-- Окно приложения (Имитация) -->
      <div class="app-window rounded-lg shadow-xl overflow-hidden d-flex flex-column">
        
        <!-- Шапка окна (Верхняя панель) -->
        <div class="app-header d-flex justify-space-between align-center px-4 py-2 border-b bg-white">
          <div class="d-flex align-center gap-2">
            <v-icon size="16">mdi-apps</v-icon>
            <span class="text-caption font-weight-bold">/colab-app</span>
            <span class="text-caption text-grey ml-2 border px-1 rounded">Beta</span>
          </div>
          
          <div class="d-flex align-center gap-4 text-caption">
            <span>Commits <v-icon size="12">mdi-chevron-down</v-icon></span>
            <span>Feedback <v-icon size="12">mdi-chevron-down</v-icon></span>
            <v-btn color="#5c6bc0" size="small" class="text-none rounded-pill px-4">Share</v-btn>
          </div>
        </div>

        <!-- Основная область (3 колонки) -->
        <div class="d-flex flex-grow-1 bg-grey-lighten-4">
          
          <!-- ЛЕВАЯ ПАНЕЛЬ (Файлы) -->
          <div class="left-panel bg-white border-r p-4 d-none d-md-block" style="width: 250px;">
            <div class="d-flex align-center mb-4">
              <v-icon size="18" class="mr-2">mdi-format-list-bulleted</v-icon>
              <span class="text-body-2 font-weight-bold">Planning list</span>
            </div>
            
            <!-- Список задач -->
            <div class="task-list mb-6">
              <div class="d-flex align-center mb-2"><v-icon color="green" size="14" class="mr-2">mdi-check-circle</v-icon><span class="text-caption">Search-readme-files</span></div>
              <div class="d-flex align-center mb-2"><v-icon color="green" size="14" class="mr-2">mdi-check-circle</v-icon><span class="text-caption">Install-dependencies</span></div>
              <div class="d-flex align-center mb-2"><v-icon color="green" size="14" class="mr-2">mdi-check-circle</v-icon><span class="text-caption">Run-build-scripts</span></div>
            </div>

            <!-- Лог сборки -->
            <div class="text-caption text-grey">
              <p class="mb-1">Read README.md <v-icon size="12">mdi-chevron-right</v-icon></p>
              <p class="mb-1">Installed 36 dependencies <v-icon size="12">mdi-chevron-right</v-icon></p>
              <p class="mb-1">Ran build script <v-icon size="12">mdi-chevron-right</v-icon></p>
              <p class="text-black mt-4">Great! The development server is now up and running at <span class="text-blue">http://localhost:3000</span></p>
            </div>
          </div>

          <!-- ЦЕНТРАЛЬНАЯ ОБЛАСТЬ (Холст) -->
          <div class="canvas-area flex-grow-1 relative p-6 d-flex flex-column align-center justify-center">
            
            <h3 class="text-h5 font-italic text-grey-darken-3 mb-6" style="font-family: serif;">CoLab Yearly Reports</h3>
            
            <!-- Сетка карточек с птицами (имитация) -->
            <div class="bird-grid">
              <div class="bird-card bg-white p-2 shadow-sm rounded">
                <div class="bg-image-1 rounded mb-1" style="height: 80px;"></div>
                <span class="text-caption text-grey" style="font-size: 10px;">Dunlin Watch</span>
              </div>
              
              <div class="bird-card bg-white p-2 shadow-sm rounded" style="margin-top: 40px;">
                <div class="bg-image-2 rounded mb-1" style="height: 100px;"></div>
                <span class="text-caption text-grey" style="font-size: 10px;">Migration Climate Impacts</span>
              </div>

              <div class="bird-card bg-white p-2 shadow-sm rounded">
                <div class="bg-image-3 rounded mb-1" style="height: 90px;"></div>
                <span class="text-caption text-grey" style="font-size: 10px;">Bee Colony Tracking</span>
              </div>
            </div>
            
            <!-- Курсор -->
            <v-icon color="black" size="32" class="cursor-icon-2" style="transform: rotate(-15deg);">mdi-cursor-default</v-icon>
          </div>

          <!-- ПРАВАЯ ПАНЕЛЬ (Свойства) -->
          <div class="right-panel bg-white border-l p-4 d-none d-lg-block" style="width: 260px;">
            <div class="d-flex justify-space-between align-center mb-2">
              <span class="text-caption bg-yellow-lighten-4 px-1 rounded">Biology</span>
              <v-icon size="16">mdi-close</v-icon>
            </div>
            
            <p class="text-caption text-grey mb-2">August 22, 2026</p>
            <h4 class="text-subtitle-1 font-weight-medium mb-1" style="line-height: 1.2;">Migration Climate Impacts</h4>
            <p class="text-caption text-grey mb-4">Phenological Mismatches and Range Shifts in Rufous Hummingbird Spring Migration</p>
            
            <div class="d-flex align-center mb-6">
              <v-avatar size="24" class="mr-2 bg-grey"><v-icon size="16">mdi-account</v-icon></v-avatar>
              <span class="text-caption font-weight-bold">Gabriel Torres</span>
            </div>

            <!-- Большая картинка птицы -->
            <div class="bg-image-2 rounded-lg mb-2" style="height: 150px;"></div>
            <h5 class="text-subtitle-2 font-weight-bold text-center mb-2">Abstract</h5>
            <p class="text-caption text-grey" style="font-size: 10px; line-height: 1.4;">
              We analyzed 23 years of citizen science data and weather records to assess climate change impacts on spring migration timing across the Pacific Flyway...
            </p>
          </div>

        </div>
      </div>

      <!-- Кнопка Play в углу -->
      <v-btn icon color="black" size="large" class="play-btn-bg" elevation="4">
        <v-icon color="white" size="24">mdi-play</v-icon>
      </v-btn>

    </div>

    <!-- НИЖНЯЯ ССЫЛКА -->
    <div class="text-center mt-6">
      <a href="#" class="text-black font-weight-medium text-decoration-underline d-inline-flex align-center custom-link">
        Explore Figma Make <v-icon size="18" class="ml-1">mdi-arrow-right</v-icon>
      </a>
    </div>

  </v-container>
</template>

<style scoped>
/* Акварельный фон */
.watercolor-bg {
  background: linear-gradient(135deg, #a8e6cf 0%, #88d8b0 30%, #e0f7fa 70%, #b2ebf2 100%);
  padding: 60px 40px;
  position: relative;
}

/* Окно приложения */
.app-window {
  width: 100%;
  max-width: 1100px;
  height: 600px;
  background-color: #f5f5f5;
}

/* Вспомогательные классы */
.border-b { border-bottom: 1px solid #e0e0e0; }
.border-r { border-right: 1px solid #e0e0e0; }
.border-l { border-left: 1px solid #e0e0e0; }
.relative { position: relative; }

/* Сетка птиц */
.bird-grid {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}

.bird-card {
  width: 140px;
}

/* Имитация картинок с птицами (градиенты) */
.bg-image-1 { background: linear-gradient(to bottom, #87ceeb, #f0f8ff); }
.bg-image-2 { background: linear-gradient(to bottom, #e0e0e0, #a9a9a9); }
.bg-image-3 { background: linear-gradient(to bottom, #f5f5dc, #d2b48c); }

/* Курсор */
.cursor-icon-2 {
  position: absolute;
  bottom: 20%;
  left: 25%;
  z-index: 10;
}

/* Кнопка Play */
.play-btn-bg {
  position: absolute;
  bottom: 20px;
  right: 20px;
  transition: transform 0.2s;
}
.play-btn-bg:hover {
  transform: scale(1.1);
}

/* Стили для ссылки */
.custom-link {
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}
.custom-link:hover {
  color: #555 !important;
}
</style>