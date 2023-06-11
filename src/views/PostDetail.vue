<template>
    <div v-if="card">
    <CBUM :info="card" :showcomments="true"/>
    </div>
    </template>
   
    <script>
    import CBUM from "@/components/CBUM.vue";
    import store from "@/store.js";
   
    export default {
    props: ['id'],
    data() {
    return {
    card: null
    }
    },
    mounted() {
    console.log(this.id);
    db.collection("posts")
    .doc(this.id).get().then(doc => {
    this.card = doc.data();
    this.card.id = doc.id;
    })
    },
    name: "post-detail",
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