<template>
  <div class="border-solid border-2 border-gray-100 p-7 mt-3">
    <h1 class="font-serif">Prueba de algoritmia</h1>
    <form class="flex flex-col gap-2" @submit.prevent="executeAlgorithm">
      <h2>Consulta de Números</h2>

      <label for="listSize">Tamaño de la lista:</label>
      <input v-model.number="listSize" type="number" id="listSize" placeholder="Ingrese el tamaño de la lista" />

      <label for="numberList">Lista de números (separados por espacio):</label>
      <input v-model="numberList" type="text" id="numberList" placeholder="Ejemplo: 2 4 5 7 9" />

      <label for="numQueries">Número de consultas:</label>
      <input v-model.number="numQueries" type="number" id="numQueries" placeholder="Ingrese el número de consultas" />

      <label for="queries">Consultas (separadas por espacio):</label>
      <input v-model="queries" type="text" id="queries" placeholder="Ejemplo: 2 5 6 10" />

      <button type="submit">Ejecutar Algoritmo</button>
    </form>
    <div class="mt-3" v-if="results.length > 0">
      <h3>Resultados:</h3>
      <pre>{{ results.join('\n') }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const listSize = ref<number>(0);
const numberList = ref<string>('');
const numQueries = ref<number>(0);
const queries = ref<string>('');
const results = ref<string[]>([]);

const executeAlgorithm = () => {
  const numbers = numberList.value.split(' ').map(Number).filter(n => !isNaN(n));
  const queriesArray = queries.value.split(' ').map(Number).filter(n => !isNaN(n));

  results.value = queriesArray.map(query => {
    const lower = numbers.filter(n => n < query).pop() || 'X';
    const higher = numbers.find(n => n > query) || 'X';
    return `${lower} ${higher}`;
  });
};
</script>