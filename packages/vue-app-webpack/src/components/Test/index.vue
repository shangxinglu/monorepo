<template>
    <div>{{ props.title }}</div>
</template>
<script setup lang="ts">

    const props = defineProps({
        msg: {
            type: String,
            default: 'Hello Vue 3 + Vite'
        },
        title:{
            type: String,
            default: 'Hello Vue 3 + Vite'
        }
    });
</script>
