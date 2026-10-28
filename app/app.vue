<!-- app/app.vue -->
<template>
  <v-app>
    <Header />
    <v-main>
      <NuxtPage />
    </v-main>
    
    <!-- Модальное окно на уровне всего приложения -->
    <RegisterModal v-model="isRegisterOpen" />
  </v-app>
</template>

<script setup>
import { useRegisterModal } from '~/composables/useRegisterModal'
const isRegisterOpen = useRegisterModal()
</script>