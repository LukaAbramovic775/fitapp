<template>
    <div class="card text-center">
    <div class="card-header text-left">
      {{ info.description }}
    </div>
    <div class="card-body p-0">
      <img class="card-img-top" :src="info.url "/>
    </div>
    <div class="card-footer text-muted">
      {{ info.time | moment }} </div>
      <div>
   <div class="comments list-group" v-if="showcomments">
   <a :key="c.posted_at" v-for="c in comments" href="#"
  class="animate list-group-item list-group-item-action flex-column alignitems-start">
   <div class="d-flex w-100 justify-content-between">
   <small style="font-style: italic;font-size:10px">{{ c.posted_at | moment }} by {{ c.email }}
  </small>
   </div>
   <small>{{ c.comment }}</small>
   </a>
   </div>
   <form @submit.prevent="postComment()" class="form-inline mb-5">
   <div class="form-group">
   <textarea v-model="newComment"  class="form-control" id="textAreaExample" rows="4" style="background: #fff;" placeholder="Any comment?"></textarea>
   </div>
   <button type="submit" class="btn btn-primary ml2">Post</button>
   </form>
   </div> 
  </div>
  </template>
  
  <script>
  import moment from "moment";
  import store from '@/store.js'
  import { db, storage } from "@/firebase.js";
  
  export default {
   props: [ "info", "showcomments" ],
   data () {
    return {
        global: store,
        newComment: "",
        comments: []
    }
   },
   mounted() {
   if (this.showcomments) {
    db.collection("posts").doc(this.info.id).collection("comments").onSnapshot
  (snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === "added") {
                    let comment = change.doc.data();
                    comment.isNew = true;
                    console.log(comment);
                    this.comments.unshift(comment)
                }
            })
        })
    }
   },
   methods: {
   postComment() {
   if (this.newComment) {
    console.log("id postova: ",this.info.id)
    db.collection("posts") // kolekcija roditelj
        .doc(this.info.id) // konkretni post
            .collection("comments") // podkolekcija
            .add({ email: this.global.currentUser, comment:
  this.newComment, posted_at: Date.now() })
                    .then(result => {
                     console.log(result)
                    this.newComment = "";
   
                    })
                    .catch(e => {
                        console.error(e)
                    })
            }
        }
   },
   filters: {
          moment: function(time) {
              return moment(time).fromNow();
          }
   }
  }
  </script> 
  
  <style>
   .card {
   margin: 10px
   }
   .comments {
   margin: 20px 0
   }
   </style>