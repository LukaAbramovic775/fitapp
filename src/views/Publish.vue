
<template>
    <div class="hello">
    <input type="file" @change="onFileSelected">
    <button @click="onUpload">Upload</button>
    </div>
   </template>

<script>
export default{
name:"Publish",
data() {
 return{
        selectedFile: null
    }
},
methods: {
   onFileSelected(event) {
   this.selectedFile=event.target.files[0]
   },
   onUpload() {

   }
}
}
import {firebase} from "@/firebase";
</script>
