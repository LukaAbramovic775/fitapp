<template>
    <div class="card text-center">
       <div class="card-header">
        CBUM
       </div>
       <div class="card-body p-0">
       <img class="card-img-top" :src="info" />
       </div>
       <div class="card-footer text muted">
       </div>
    </div>
   </template>
   
   <script>
   
   export default{
       name: "CBUM",
       props: ["info"],
   };
   
   </script>