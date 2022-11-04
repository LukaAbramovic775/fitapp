<template>
    <div class="card text-center">
       <div class="card-header">
        CBUM
       </div>
       <div class="card-body p-0">
       <img class="card-img-top" :src="info" />
       </div>
       <div class="card-footer text muted">
        {{postedFromNow}}
       </div>
    </div>
   </template>
   
   <script>
   import moment from "moment";

   export default{
       name: "CBUM",
       props: ["info"],
       computed: {

        postedFromNow() {
         return moment(this.info.time).fromNow();
        },
    },
   };
   
   </script>