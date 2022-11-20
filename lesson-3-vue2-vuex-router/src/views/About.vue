<template>
  <div class="about">
    <div v-if="getLoad">
      <h1>Loading...</h1>
    </div>
    <div v-else>
      <h1>This is an about page</h1>
      <Card v-for="item of getCards" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'

import Card from '@/components/Card.vue'

export default {
  name: 'About',
  components: {
    Card
  },
  methods: {
    ...mapActions({
      fetchCards: 'fetchCards'
    }),
  },
  async mounted() {
    await this.fetchCards()
  },
  computed: {
    ...mapGetters(['getCards', 'getLoad'])
  }
}
</script>