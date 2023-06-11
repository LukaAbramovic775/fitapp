<template>
    <div class="row-5">
        <div class="col-5">
            <img v-if="loading" class="loading" :src="require('@/assets/loading.gif')" />
            <form v-if="!loading" @submit.prevent="postNewImage" class="mb-5">
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
                <button type="submit" class="btn btn-primary ml-2">Post image</button>
            </form>
            <CBUM v-for="card in filteredCards" :key="card.id" :info="card" :showcomments="true"/>
        </div>
    </div>
</template>

<script>
import store from "@/store";
import { db, storage } from "@/firebase";
import CBUM from "@/components/CBUM.vue";
import firebase from "firebase";

//let cards = [];
//
//cards= [
//    { url: "https://i.pinimg.com/564x/63/6d/45/636d45eb8fd83aa04e621b362ae1a699.jpg", description: "slika 1" }
//
//];


export default {
    name: "publish",
    data: function() {
        return {
            loading: false,
            cards: [],
            store,
            newImageDescription: "",
            newImageUrl: "",
            imageReference: null,
        };
    },
    mounted(){
        this.getPosts();
    },
    methods: {

        getPosts(){

            console.log("firebase dohvat...");

            db.collection("posts")
                .orderBy("posted_at", "desc")
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
        
        getImage(){
            //Promise based, omotač oko callbacka

            return new Promise((resolveFn, errorFn) => {
                   this.imageReference.generateBlob((data) => {
                resolveFn(data);

                   });
            });
        },

        async postNewImage(){
            try {
                 let blobData= await this.getImage()
                 let imageName ="posts/" + store.currentUser + "/" + Date.now() + ".png";
                 let result= await storage.ref(imageName).put(blobData);
                 let url = await result.ref.getDownloadURL(); //Promise
        

                console.log("Javni link", url);

                const imageDescription = this.newImageDescription;

                let doc = await db.collection("posts").add({
                url: url,
                desc: imageDescription,
                email: store.currentUser,
                posted_at: Date.now(),
                });

             

                console.log("spremljeno",doc);
                this.newImageDescription="";
                this.imageReference.remove();
                this.getPosts();
                } catch(e) {
                console.error("greška", e);
                }
        this.loading = false;  
        },
    },
    computed: {
        filteredCards() {

            let termin = this.store.searchTerm;
            
            return this.cards.filter((card) => card.description.includes(termin));
        },
    },
    components: {
        CBUM,
    },
};
</script>

<style scoped>
.loading{
    width: 400px;
}
</style>
