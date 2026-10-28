<!-- app/components/TestimonialsSection.vue -->
<template>
  <v-container class="py-16" style="max-width: 1300px;">
    
    <!-- ЗАГОЛОВОК (увеличен в 2 раза) -->
    <h2 class="large-title font-weight-medium mb-8">
      The products you love are designed in Figma
    </h2>

    <!-- ЦИТАТА И СТАТИСТИКА -->
    <v-row class="mb-12">
      
      <!-- Левая колонка: Цитата (увеличена в 2 раза) -->
      <v-col cols="12" md="8" class="pr-md-8">
        <div class="quote-container pl-4">
          <p class="large-quote font-weight-medium mb-6">
            "Everyone is able to influence, inspire, and give input without ever leaving the design file. That creates a really transparent, open, and honest process throughout the whole project."
          </p>
          
          <div class="d-flex align-center">
            <v-avatar size="40" color="grey-lighten-2" class="mr-3">
              <v-icon color="grey">mdi-account</v-icon>
            </v-avatar>
            <div>
              <div class="text-body-2 font-weight-bold">Francisco Seiz</div>
              <div class="text-caption text-grey">Senior Design Director, Code and Theory</div>
            </div>
          </div>
        </div>
      </v-col>

      <!-- Правая колонка: Статистика -->
            <!-- Правая колонка: Статистика -->
      <v-col cols="12" md="4" class="d-flex flex-column justify-center pl-md-8 border-md-l">
        
        <!-- Огромная цифра -->
        <div class="huge-percent font-weight-medium mb-2">95%</div>
        
        <!-- Текст под цифрой (серый) -->
        <p class="text-body-1 text-grey-darken-1 mb-6" style="line-height: 1.4; max-width: 250px;">
          95% of the Fortune 500 uses Figma
        </p>
        
        <!-- Самый мелкий текст -->
        <p class="text-caption text-grey-lighten-1">
          Based on data from March 2025.
        </p>
      </v-col>
    </v-row>

    <!-- ЛОГОТИПЫ -->
    <div class="logos-container py-6 mb-16 border-t border-b">
      <div class="d-flex justify-space-between align-center flex-wrap gap-4">
        <span class="logo-text" style="font-family: serif; font-weight: bold;">Pentagram</span>
        <span class="logo-text font-weight-black">slack</span>
        <span class="logo-text font-weight-black">stripe</span>
        <span class="logo-text" style="font-family: serif; font-weight: bold;">The New York Times</span>
        <span class="logo-text font-weight-black">ZOOM</span>
        <span class="logo-text font-weight-bold d-flex align-center"><v-icon class="mr-1">mdi-airbnb</v-icon> airbnb</span>
        <span class="logo-text font-weight-bold d-flex align-center"><v-icon class="mr-1">mdi-alpha-a-box</v-icon> ATLASSIAN</span>
        <span class="logo-text font-weight-bold d-flex align-center"><v-icon class="mr-1">mdi-dropbox</v-icon> Dropbox</span>
      </div>
    </div>

    <!-- НИЖНИЙ БЛОК: CTA -->
    <div class="text-center mt-16">
      <h2 class="text-h5 font-weight-medium mb-8">
        Ideas no longer have to wait their turn
      </h2>
      
          <!-- Большая черная кнопка -->
      <v-btn 
        color="black" 
        size="x-large" 
        block 
        class="text-none custom-cta-btn hover-arrow-btn"
        style="border-radius: 12px; height: 80px;"
        @click="isRegisterOpen = true"
      >
        <span class="custom-cta-text">Get started</span>
        <v-icon class="arrow-icon ml-3" size="32">mdi-arrow-right</v-icon>
      </v-btn>
    </div>

  </v-container>
</template>

<script setup>
import { useRegisterModal } from '~/composables/useRegisterModal'

const isRegisterOpen = useRegisterModal()
</script>

<style scoped>

/* Заголовок */
.large-title {
  font-size: 2rem !important;
  line-height: 1.2;
  letter-spacing: -1px;
  color: #000000;
}

/* Цитата */
.large-quote {
  font-size: 2rem !important;
  line-height: 1.3;
  letter-spacing: -0.5px;
  color: #000000;
}


/* --- ОСТАЛЬНЫЕ СТИЛИ (без изменений) --- */
.quote-container {
  border-left: 1px solid #e0e0e0;
}

@media (min-width: 960px) {
  .border-md-l {
    border-left: 1px solid #e0e0e0;
  }
}

.logos-container {
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
}

.logo-text {
  font-size: 1.2rem;
  color: #333;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.logo-text:hover {
  opacity: 1;
}

.custom-cta-btn {
  background-color: #000000 !important;
  color: #ffffff !important;
}

.custom-cta-text {
  font-size: 3rem !important; 
  font-weight: 400 !important;
  letter-spacing: -1px;
}

/* Стиль для огромной цифры 95% */
.huge-percent {
  font-size: 6rem; /* Очень большой размер (примерно 96px) */
  line-height: 1;
  letter-spacing: -3px; /* Делаем цифры чуть плотнее */
  color: #000000;
}
</style>