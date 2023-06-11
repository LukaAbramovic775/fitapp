<template>
    <div v-if="authenticated">
    <button @click="newImage()" type="Novi post" class="btn btn-primary
   ml-2">
    Post new image
    </button>
    <div @click="gotoDetails(card)" :key="card.id" v-for="card in
   filteredCards">
    <CBUM :info="card"/>
    </div>
    </div>
   </template>
   <script>
   import CBUM from "@/components/CBUM.vue";
   import store from "@/store.js";
   export default {
    data() {
    return store;
    },
    computed: {
    filteredCards() {
    return this.cards.filter(card =>
   card.title.includes(this.searchTerm));
    }
    },
    name: "posts",
    methods: {
    gotoDetails(card) {
    this.$router.push({path: `post/${card.id}`})
},
 newImage() {
 this.$router.push({name: 'newpost'}).catch(err => console.log(err))
 }
 },
 components: {
 CBUM
 },
}
</script>
<style scoped>
 button {
 margin-bottom: 20px
 }
</style>