<template>
  <div class="card">
    <div>{{ item.id }}. {{ item.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['item']
}
</script>