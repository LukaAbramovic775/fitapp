<template>
    <div class="row">
        <div class="col-2"></div>
        <div class="col-7">
        <CBUM v-for="card in cards" :key="card.id" :info="card"/>
        </div>

        <form @submit.prevent="postNewImage" class="mb-5">
            <div class="form-group">
                <croppa :width="400" :height="400" placeholder="Učitaj sliku.." v-model="imageReference"> </croppa>
                <label for="imageDescription"> Description </label>
                <input
                    v-model="newImageDescription"
                    type="text"
                    class="form-control ml-2"
                    placeholder="Enter the image description"
                    id="imageDescription"
                />
            </div>
        </form>
        <button type="submit" class="btn btn-primary ml-2">Post image</button>
    </div>
</template>

<script>
import store from "@/store";
import { db, storage } from "@/firebase";
import CBUM from "@/components/CBUM.vue";

let cards = [];

//cards= [];


export default {
    name: "publish",
    data: function() {
        return {
            cards: [],
            store,
            newImageDescription: "",
            newImageUrl: "",
            imageReference: null,
        };
    },
    methods: {

        getPosts(){

            console.log("firebase dohvat...");

            db.collection("posts")
            .orderBy("posted at", "desc")
            .limit(10)
            .get()
            .then((query) =>{ 
                this.cards = [];
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

            this.imageReference.generateBlob((blobData) => {

                 console.log(blobData);

                 let imageName ="posts/" + store.currentUser + "/" + Date.now() + ".png";
                 
                 storage
                 .ref(imageName)
                 .put(blobData)
                 .then(result => {
                  result.ref.getDownloadURL().then((url) => {
                             console.log("Javni link", url);

                             const imageDescription = this.newImageDescription;

            db.collection("posts")
              .add({
              url: imageUrl,
              desc: imageDescription,
              email: store.currentUser,
              posted_at: Date.now(),
              })
             .then((doc)=>{
              console.log("spremljeno",doc);
              this.newImageDescription="";
              this.imageReference = null;
   
             this.getPosts();

             })
            .catch((e)=>{
            console.error(e);

            });


                  })
                  .catch((e) => {
                   console.error(e);
                  });

                })
                .catch(e => {
                    console.error(e);
                 });
            });
        },
    },
    computed: {
        filteredCards() {

            let termin = this.store.searchTerm;
            
            return this.cards.filter((card) => card.description.includes(temrin));
        }
    }
};
</script>
