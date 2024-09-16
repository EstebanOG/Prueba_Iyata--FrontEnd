<template>
  <div>
    <h1 class="font-bold mb-1">Prueba técnica</h1>
    <h2>Juan Esteba Olaya</h2>
    <h2>Repositorio: <a href="https://github.com/EstebanOG/Prueba_Iyata--FrontEnd" target="_blank">Github</a></h2>
  </div>
  <div class="grid gap-4 grid-cols-2 mt-3">
    <RouterLink class="rounded bg-slate-400 p-3" to="/algorithm-test">
      Ver prueba de algoritmia
    </RouterLink>
    <RouterLink class="rounded bg-slate-400 p-3" to="/vue-test">
      Ver prueba Vue.js
    </RouterLink>
  </div>
  <main>
    <RouterView />
  </main>
</template>
<script setup lang="ts">
</script>

