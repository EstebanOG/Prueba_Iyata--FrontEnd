<template>
  <section>
    <div class="characters">
      <div class="characters__item" v-for="character in characters" :key="character.id">
        <CardCharacter :character="character" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import CardCharacter from '../components/CardCharacter.vue'
const store = useStore();
const characters = computed(() => {
  return store.state.charactersFilter
})
onMounted(() => {
  store.dispatch('getCharacters')
})
</script>

<style lang="scss">
.characters {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin: 3rem 0;
}
</style>