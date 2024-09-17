<template>
    <div class="border-solid border-2 border-gray-100 p-7 mt-3">
      <h1>Rick And Morty</h1>
      <FilterByStatus />
      <FilterByName />
      <ListCharacters />
    </div>
  </template>
  <script setup lang="ts">
  import ListCharacters from '../components/ListCharacters.vue';
  import FilterByStatus from '../components/FilterByStatus.vue';
  import FilterByName from '../components/FilterByName.vue';
  </script>
  <style lang="scss">
  </style>
  