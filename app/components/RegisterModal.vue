<!-- app/components/RegisterModal.vue -->
<template>
  <v-dialog v-model="isOpen" max-width="420" persistent>
    <v-card class="pa-8 pt-10 text-center rounded-lg position-relative">
      
      <!-- Кнопка закрытия -->
      <v-btn 
        icon 
        variant="text" 
        size="small" 
        class="close-btn"
        @click="closeModal" 
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <h2 class="text-h5 font-weight-medium mb-6">Welcome to Figma</h2>

      <v-btn variant="outlined" block size="large" class="text-none mb-4 google-btn">
        <svg class="mr-2" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Continue with Google
      </v-btn>

      <div class="text-caption text-grey mb-4">or</div>

      <v-text-field
        v-model="email"
        label="EMAIL"
        variant="solo-filled"
        bg-color="#f5f5f5"
        flat
        hide-details
        class="mb-4 custom-input"
        density="compact"
      ></v-text-field>

      <v-btn color="#333333" block size="large" class="text-none custom-continue-btn" @click="submitForm">
        Continue with email
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')

// Управление видимостью окна
const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const closeModal = () => {
  isOpen.value = false
}

const submitForm = () => {
  alert(`Продолжаем с email: ${email.value}`)
  closeModal()
}
</script>

<style scoped>
.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  color: #666;
}
.google-btn {
  border-color: #e0e0e0 !important;
  color: #333 !important;
  font-weight: 500;
}
.custom-input :deep(.v-field) {
  border-radius: 8px;
}
.custom-input :deep(.v-field__input) {
  font-size: 14px;
  color: #333;
}
.custom-input :deep(.v-label) {
  font-size: 12px;
  letter-spacing: 1px;
}
.custom-continue-btn {
  border-radius: 8px;
  font-weight: 500;
}
</style>