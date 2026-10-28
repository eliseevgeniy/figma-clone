<!-- app/components/GallerySection.vue -->
<template>
  <v-container class="py-16" style="max-width: 1400px;">
    
    <!-- ВЕРХНЯЯ ЧАСТЬ: Заголовок и ссылка -->
    <div class="d-flex justify-space-between align-start mb-6">
      <div>
        <h2 class="text-h5 font-weight-bold mb-1" style="letter-spacing: -0.5px;">
          Powerfully expressive. Incredibly precise.
        </h2>
        <p class="text-body-1 text-grey-darken-1">
          Every technical tool you need to dial in the details.
        </p>
      </div>
      
      <!-- Ссылка справа -->
      <a href="#" class="text-black font-weight-medium text-decoration-underline d-none d-md-flex align-center custom-link mt-2">
        Explore Figma Design <v-icon size="18" class="ml-1">mdi-arrow-right</v-icon>
      </a>
    </div>

    <!-- СЕТКА С ВИДЕО (Заглушки) -->
    <div class="gallery-grid">
      <!-- Генерируем 12 ячеек через v-for для чистоты кода -->
      <div 
        v-for="n in 12" 
        :key="n" 
        class="gallery-item rounded-lg d-flex align-center justify-center"
        :class="'bg-gradient-' + ((n % 6) + 1)"
      >
        <!-- Иконка Play, чтобы показать, что тут видео -->
        <v-icon color="white" size="48" class="opacity-50">mdi-play-circle-outline</v-icon>
      </div>
    </div>

  </v-container>
</template>

<style scoped>
/* Сетка (Grid) */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 колонки */
  gap: 16px; /* Отступы между ячейками */
}

/* Ячейка галереи */
.gallery-item {
  aspect-ratio: 1 / 1; /* Делаем ячейки идеально квадратными */
  width: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

/* Эффект при наведении */
.gallery-item:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  z-index: 2;
}

/* Градиенты для имитации разных видео */
.bg-gradient-1 { background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%); }
.bg-gradient-2 { background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%); }
.bg-gradient-3 { background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); }
.bg-gradient-4 { background: linear-gradient(135deg, #f6d365 0%, #fda085 100%); }
.bg-gradient-5 { background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%); }
.bg-gradient-6 { background: linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%); }

/* Стили для ссылки */
.custom-link {
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}
.custom-link:hover {
  color: #555 !important;
}

/* Адаптивность для мобильных (2 колонки) */
@media (max-width: 960px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>