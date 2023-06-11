<template>
    <div class="signup">
    <h1>This is an signup page</h1>
    <div class="container">
    <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm">
    <form>
    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email"
           v-model="username"
           class="form-control"
           id="exampleInputEmail1"
           aria-describedby="emailHelp" placeholder="Enter
   email" />
    <small id="emailHelp" class="form-text text-muted" >We'll
   never share your email with anyone else.</small>
    </div>
    <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" 
    v-model="password" 
    class="form-control"
    id="exampleInputPassword1"
    placeholder="Password" />
    </div>
    <div class="form-group">
    <label for="exampleInputPassword2">Repeat Password</label>
    <input type="password"
              v-model="passwordRepeat"
              class="form-control"
              id="exampleInputPassword2"
             placeholder="Password" />
    </div>
    <div class="form-group">
     <label for="tipProfila">Tip profila</label>
     <select v-model="odabraniTipProfila"
     id="tipProfila"
     class="form-control form-control-lg">
     <option v-for="k in tipProfila">{{k}}</option>
     </select>
     </div>
    <button type="button" @click="signup()" class="btn btn-primary">Submit</button>
    </form>
    <div v-if="errorMessage" class="alert alert-danger">
          <strong>Ups!</strong>
           {{ errorMessage }}
     </div>
    </div>
    <div class="col-sm"></div>
    </div>
    </div>
    </div>
   </template>

<script>

import {firebase} from "@/firebase";
import store from '@/store.js'
import { db, storage } from "@/firebase.js";

   export default {
    name: "signup",
   data() {
          return {
                  username: "",
                  password: "",
                  passwordRepeat: "",
                  errorMessage: "",
                  tipProfila: ["Javni","Privatni"],
                  odabraniTipProfila:"",
          };

        },
        methods: {
                 signup(){
                firebase
                .auth()
                .createUserWithEmailAndPassword(this.username, this.password)
                .then(() => {
                let id = this.email;
               db.collection("users")
               .doc(id)
               .set({
               tipProfila: this.odabraniTipProfila
})
               .then(function() {
               console.log("Document successfully written!");
 })
               .catch(function(error) {
               console.error("Error writing document: ", error);
     });
 })
               .catch(error => {
               console.error(error);
               this.errorMessage = error.message;
               console.log("Nastavak");
 });
 }
 }
}
</script>

