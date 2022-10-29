
<template>
    <form @submit.prevent="postNewImage" class="form-inline mb-5">
 <div class="form-group">
 <label for="imageUrl">Image URL</label>
 <input
 v-model="newImageUrl"
type="text"
class="form-control ml-2"
placeholder="Enter the image URL"
id="imageUrl"
 />
 </div>
 <div class="form-group">
 <label for="imageDescription">Description</label>
 <input
 v-model="newImageDescription"
type="text"
class="form-control ml-2"
placeholder="Enter the image description"
id="imageDescription"
 />
 </div>
 <button type="submit" class="btn btn-primary ml-2">Post
image</button>
 </form>
</template>

<script>

import store from "@/store";
import { db } from "@/firebase";


export default {
name: "publish",
data: function() {
    return {
           store,
           newImageDescription: "",
           newImageUrl: "",
    };
},
methods:{
    postNewImage(){
    const imageUrl = this.newImageUrl;
    const imageDescription = this.newImageDescription;

db.collection("posts").add({
    url: imageUrl,
    desc: imageDescription,
    email: store.currentUser,
    posted_at: Date.now(),
   })
   .then(()=>{
    console.log("spremljeno",doc);

   })
   .catch((e)=>{
    console.error(e);
});
    },
  },
};
</script>
