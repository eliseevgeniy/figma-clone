<!-- app/components/MainHero.vue -->
<template>
  <v-container class="py-12" style="max-width: 1400px;">
    <v-row align="center" justify="space-between">
      
      <!-- ЛЕВАЯ ЧАСТЬ: Заголовок -->
      <v-col cols="12" md="5">
        <h1 class="hero-title font-weight-bold animate-text">
          The full-stack<br>creative<br>canvas
        </h1>
      </v-col>

      <!-- ЦЕНТРАЛЬНАЯ ЧАСТЬ: Коллаж + Play -->
      <v-col cols="12" md="4" class="d-flex justify-center">
        
        <div class="collage-container animate-image">
          
          <div class="collage-wrapper">
            <!-- Слой 1: Задний план -->
            <div class="collage-layer layer-1"></div>
            
            <!-- Слой 2: Средний план -->
            <div class="collage-layer layer-2 d-flex align-center justify-center">
               <span class="text-white text-caption opacity-50">Good morning</span>
            </div>
            
            <!-- Слой 3: Передний план -->
            <div class="collage-layer layer-3"></div>
          </div>

          <!-- Кнопка Play -->
          <v-btn 
            icon 
            color="black" 
            size="large" 
            class="play-btn"
            elevation="4"
          >
            <v-icon color="white" size="28">mdi-play</v-icon>
          </v-btn>

        </div>

      </v-col>

      <!-- ПРАВАЯ ЧАСТЬ: Кнопка Get started -->
      <v-col cols="12" md="3" class="text-right">
        <!-- ПРАВАЯ ЧАСТЬ: Кнопка Get started -->
        <v-btn 
          color="black" 
          size="x-large" 
          class="text-none text-h6 custom-black-btn hover-arrow-btn"
          style="border-radius: 12px; padding: 0 32px;"
          @click="isRegisterOpen = true" 
        >
          <span>Get started</span>
          <!-- Скрытая стрелочка -->
          <v-icon class="arrow-icon ml-2">mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
// Импортируем глобальное состояние
import { useRegisterModal } from '~/composables/useRegisterModal'

// Инициализируем
const isRegisterOpen = useRegisterModal()
</script>

<style scoped>
/* --- Стили для заголовка --- */
.hero-title {
  font-size: 3.6rem; 
  line-height: 1.05;  
  letter-spacing: -1.5px; 
  color: #000000;
}

/* --- Анимация --- */
.animate-text {
  animation: fadeInUp 1s ease-out forwards;
}

.animate-image {
  animation: fadeInUp 1s ease-out 0.3s forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* --- Стили для коллажа --- */
.collage-container {
  position: relative;
  width: 420px;
  height: 600px;
  margin-right: 50px; 
  margin-bottom: 50px;
}

.collage-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.collage-layer {
  position: absolute;
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  border-radius: 0; 
}

.layer-1 {
  width: 85%;
  height: 85%;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, #4a3073 0%, #2e1a47 100%);
  z-index: 1;
}

.layer-2 {
  width: 80%;
  height: 80%;
  bottom: 40px; 
  right: 40px;
  background: linear-gradient(135deg, #e07b82 0%, #f1b598 100%);
  z-index: 2;
}

.layer-3 {
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  background: linear-gradient(135deg, rgba(30, 20, 50, 0.9) 0%, rgba(80, 40, 60, 0.9) 100%);
  z-index: 3;
  backdrop-filter: blur(5px);
}

/* --- Кнопка Play --- */
.play-btn {
  position: absolute;
  bottom: -20px;  
  right: -20px;   
  z-index: 4;
  transition: transform 0.2s;
}

.play-btn:hover {
  transform: scale(1.1);
}

/* --- Черная кнопка --- */
.custom-black-btn {
  background-color: #000000 !important;
  color: #ffffff !important;
}
.custom-black-btn:hover {
  background-color: #333333 !important;
}
</style>