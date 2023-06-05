<template>
    <div class="container text-center">
     
         <div class="row">
           <div class="col">
             <BarbellRow />
           </div>
           <div class="col order-5">
            <DumbbellFly />
           </div>
           <div class="col order-1">
             <BarbellCurl />
           </div>
         </div>
   
         <div class="row">
           <div class="col">
             <CableRow />
           </div>
           <div class="col order-5">
            <BenchPress />
           </div>
           <div class="col order-1">
             <HammerCurls />
           </div>
         </div>
   
         <div class="row">
           <div class="col">
             <Squat />
           </div>
           <div class="col order-5">
            <RomanianDeadlift />
           </div>
           <div class="col order-1">
             <Legpress />
           </div>
         </div>
   
   </div>   
   </template>
    
    <script>
    import BarbellRow from "@/components/BarbellRow.vue";
    import BarbellCurl from "@/components/BarbellCurl.vue";
    import DumbbellFly from "@/components/DumbbellFly.vue";
    import CableRow  from "@/components/CableRow .vue";
    import BenchPress from "@/components/BenchPress.vue";
    import HammerCurls from "@/components/HammerCurls.vue";
    import Squat from "@/components/Squat.vue";
    import RomanianDeadlift from "@/components/RomanianDeadlift.vue";
    import Legpress from "@/components/Legpress.vue";
    
    export default{
           name: "Exercises",
           components: {
            BarbellCurl,
            BarbellRow,
            DumbbellFly,
            CableRow,
            BenchPress,
            HammerCurls,
            Squat,
            RomanianDeadlift,
            Legpress,
           },
    };
    </script>

<style lang="scss">
.card{
margin: 10px;
background-color:#c1c0c4fb;
}
#sl{
color:rgb(12, 97, 86);
font-size:15px;

}

</style>
    