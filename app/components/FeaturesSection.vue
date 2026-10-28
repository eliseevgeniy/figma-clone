<!-- app/components/FeaturesSection.vue -->
<template>
  <v-container class="py-16" style="max-width: 1300px;">
    
    <!-- ВЕРХНЯЯ ЧАСТЬ: Заголовок и описание -->
    <div class="mb-12" style="max-width: 900px;">
      <h2 class="text-h4 font-weight-medium mb-3" style="letter-spacing: -1px;">
        Move fast in the right direction on an AI-native canvas.
      </h2>
      <p class="text-h6 text-grey-darken-1 font-weight-regular" style="line-height: 1.5;">
        Teammates and AI agents work in the same space with shared context.<br>
        Generate new ideas, refine, and align—together.
      </p>
    </div>

    <!-- НИЖНЯЯ ЧАСТЬ: Сетка (Слева картинка, справа текст) -->
    <v-row>
      
      <!-- ЛЕВАЯ КОЛОНКА: Большая серая заглушка -->
      <v-col cols="12" md="8">
        <div class="image-placeholder-grey d-flex align-center justify-center position-relative">
          
          <!-- Имитация телефона (заглушка) -->
          <div class="phone-mockup rounded-xl d-flex flex-column align-center pt-6">
            <span class="text-white font-weight-bold mb-2">Hi, Jamie</span>
            <span class="text-white text-h4 font-weight-bold">$194.70</span>
            
            <!-- Кнопка Play в правом нижнем углу серого блока -->
            <v-btn 
              icon 
              color="black" 
              size="large" 
              class="play-btn-feature"
              elevation="4"
            >
              <v-icon color="white" size="24">mdi-play</v-icon>
            </v-btn>
          </div>

        </div>
      </v-col>

      <!-- ПРАВАЯ КОЛОНКА: Текстовое описание -->
      <v-col cols="12" md="4" class="d-flex flex-column justify-center pl-md-8">
        
        <!-- Иконка (ромб) -->
        <v-icon size="24" class="mb-4">mdi-diamond-stone</v-icon>
        
        <h3 class="text-h6 font-weight-bold mb-2">
          Your built-in creative collaborator
        </h3>
        
        <p class="text-body-1 text-grey-darken-1 mb-4" style="line-height: 1.6;">
          Ask Figma's agent to add motion to designs, document your design systems, implement feedback, and more.
        </p>
        
        <!-- Ссылка с подчеркиванием и стрелочкой -->
        <a href="#" class="text-black font-weight-medium text-decoration-underline d-flex align-center custom-link">
          Explore Figma's agent
          <v-icon size="18" class="ml-1">mdi-arrow-right</v-icon>
        </a>
        
      </v-col>
    </v-row>

  </v-container>
</template>

<style scoped>
/* Стили для серого блока */
.image-placeholder-grey {
  background-color: #d9d9d9; /* Светло-серый цвет */
  width: 100%;
  height: 500px; /* Высота блока как на скриншоте */
  position: relative;
}

/* Имитация телефона внутри */
.phone-mockup {
  background-color: #0b0b5b; /* Темно-синий цвет телефона */
  width: 220px;
  height: 400px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

/* Кнопка Play в сером блоке */
.play-btn-feature {
  position: absolute;
  bottom: 20px;
  right: 20px;
  transition: transform 0.2s;
}

.play-btn-feature:hover {
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