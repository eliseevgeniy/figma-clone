// app/composables/useRegisterModal.ts
export const useRegisterModal = () => {
  // useState создает глобальную переменную, доступную во всех компонентах
  return useState<boolean>('registerModalOpen', () => false)
}