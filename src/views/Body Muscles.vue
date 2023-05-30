<template>
<div class="row">
    <div class="col-2"></div>
    <div class="col-7">
    <Arms/>
    <Back/>
    <Chest/>
    <Legs/>
    </div>
</div>
</template>

<script>
import Arms from "@/components/Arms.vue";
import Back from "@/components/Back.vue";
import Chest from "@/components/Chest.vue";
import Legs from "@/components/Legs.vue";

export default{
       name: "Body Muscles",
       components: {
        Arms,
        Back,
        Chest,
        Legs,
       },
};
</script>

