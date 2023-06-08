<template>
    <div class="card text-center">
       <div class="card-header">
        <router-link id="em" to="/exercises">Chest Muscles</router-link>
       </div>
       <div class="card-body p-0">
       <img class="card-img-top" src="../assets/Chest.png" />
       </div>
       <div class="card-footer text muted">
       </div>
    </div>
   </template>
   
   <script>
   
   export default{
       name: "Chest",
   };
   
   </script>

<style lang="scss">
#Chest{
    height:450px;
    width: 450px;
}
</style>