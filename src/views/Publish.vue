
<template>
<div class="row">
    <div class="col-2"></div>
    <div class="col-7">
    <CBUM v-for="card in cards" :key="card.id" :info="card"/>
    </div>
</div>

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
import CBUM from "@/components/CBUM.vue";

let cards=[];

cards= [];


export default {
name: "publish",
data: function() {
    return {
           cards: [],
           store,
           newImageDescription: "",
           newImageUrl: "",
    };
},

mounted() {
    
    this.getPosts();
    //
    //
},

methods: {

    getPosts() {

         console.log("firebase dohvat...");

         db.collection("posts")
         .orderBy("posted at", "desc")
         .limit(10)
         .get()
         .then((query) =>{ 
            this.cards= [];
            query.forEach((doc) =>{ 
                   const data = doc.data();
                   console.log(data);

                  this.cards.push({
                       id: doc.id,
                       time: data.posted_at,
                       description: data.desc,
                       url: data.url,

                  });
            });
         });
    },

    postNewImage(){
    const imageUrl = this.newImageUrl;
    const imageDescription = this.newImageDescription;

db.collection("posts")
.add({
    url: imageUrl,
    desc: imageDescription,
    email: store.currentUser,
    posted_at: Date.now(),
   })
   .then(()=>{
    console.log("spremljeno",doc);
    this.newImageDescription="";
    this.newImageUrl="";

    this.getPosts();
   })
   .catch((e)=>{
    console.error(e);
});
    },
  },
  computed: {
filteredCards() {

    let termin= this.store.searchTerm;
    
    return this.cards.filter((card) => card.description.includes(temrin));
  },
},
};
</script>
