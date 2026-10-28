<!-- app/components/Header.vue -->
<template>
  <v-app-bar flat color="white" class="border-b">
    <v-container class="d-flex align-center py-2" style="max-width: 1400px;">
      
      <!-- Логотип -->
      <div class="d-flex align-center mr-8">
        <v-icon color="#f24e1e" size="32" class="mr-2">mdi-vector-square</v-icon>
        <span class="text-h6 font-weight-bold" style="letter-spacing: -0.5px;">Figma</span>
      </div>

      <!-- Навигация -->
      <div class="d-none d-md-flex align-center gap-2">
        <v-btn variant="text" class="text-none text-body-1 font-weight-regular" append-icon="mdi-chevron-down">Products</v-btn>
        <v-btn variant="text" class="text-none text-body-1 font-weight-regular" append-icon="mdi-chevron-down">Solutions</v-btn>
        <v-btn variant="text" class="text-none text-body-1 font-weight-regular" append-icon="mdi-chevron-down">Community</v-btn>
        <v-btn variant="text" class="text-none text-body-1 font-weight-regular" append-icon="mdi-chevron-down">Resources</v-btn>
        <v-btn variant="text" class="text-none text-body-1 font-weight-regular">Pricing</v-btn>
      </div>

      <v-spacer></v-spacer>

      <!-- Правые кнопки -->
      <div class="d-flex align-center">
        <v-btn variant="text" class="text-none text-body-1 font-weight-regular">Log in</v-btn>
        
        <!-- Кнопка Contact sales -->
        <v-btn variant="outlined" class="text-none text-body-1 ml-4" style="border-color: #e5e5e5; text-transform: none;">
          Contact sales
        </v-btn>

        <!-- Кнопка Get started (открывает глобальное модальное окно) -->
        <v-btn 
          class="text-none text-body-1 custom-black-btn hover-arrow-btn ml-4" 
          @click="isRegisterOpen = true" 
          style="text-transform: none; border-radius: 6px; padding: 0 20px; height: 40px;"
        >
          <span>Get started for free</span>
          <v-icon class="arrow-icon ml-2" size="18">mdi-arrow-right</v-icon>
        </v-btn>
      </div>

    </v-container>
  </v-app-bar>
</template>

<script setup>
// Импортируем наше глобальное состояние
import { useRegisterModal } from '~/composables/useRegisterModal'

// Инициализируем переменную. Теперь она общая для всего приложения.
const isRegisterOpen = useRegisterModal()
</script>

<style scoped>
.custom-black-btn {
  background-color: #000000 !important;
  color: #ffffff !important;
}
.custom-black-btn:hover {
  background-color: #333333 !important;
}
</style>