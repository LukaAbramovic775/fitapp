<template>
  <div id="app">

    <nav id="nav" class="navbar navbar-light bg-light">
      <!-- Image and text -->
  <a class="navbar-brand" href="#">
    <img src="@/assets/logo.png" height="45" class="d-inline-block align-top" alt="" loading="lazy">
    Fitapp
  </a>
      <router-link to="/">Home</router-link>  |

      <li v-if="!store.currentUser">
      <router-link to="/login">Login</router-link> |
    </li>

    <li v-if="!store.currentUser">
      <router-link to="/signup">Sign up</router-link>  |
      </li>

      <li v-if="store.currentUser">
      <router-link to="/publish">Publish</router-link>  |
    </li>

    <li v-if="store.currentUser">
      <router-link to="/body muscles">Body Muscles</router-link> |
    </li> 

    <li v-if="store.currentUser">
      <router-link to="/Exercises">Exercises</router-link>  |
    </li>

    <li v-if="store.currentUser">
      <a href="#" @click.prevent="logout()" class="nav-link">Logout</a>|
    </li>

      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search">
    </form>
    </nav>
    <router-view/>
  </div>

</template>
<script>

import store from "@/store";
import {firebase} from "@/firebase";
import router from "@/router";
import { db, storage } from "@/firebase.js";

firebase.auth().onAuthStateChanged((user)=>{

  const currentRoute=router.currentRoute;
 
  if (user) {
 // User is signed in.
 console.log('*** User', user.email);
 store.currentUser = user.email;

 db.collection("korisnici")
 .doc(user.email)
 .get()
 .then(doc => {
 if (doc.exists) {
 console.log("Document data:", doc.data());
 store.tipKorisnika = doc.data().tipProfila;
 } else {
 // doc.data() will be undefined in this case
 console.log("No such document!");
 }
 });

 if(!currentRoute.meta.needsUser){
  router.push({name:"home"});
 }
 } else {
 // User is not signed in.
 console.log('*** No user');
 store.currentUser = null;

 if (currentRoute.meta.needsUser) {
  router.push({name:"login"});
 }
 }
});


export default {
      name: "app",
      data() {
            return{
              store,
            };
      },
       methods:{
        logout(){

          firebase.auth().signOut().then(() =>{
            this.$router.push({ name:"login"});
          });
        },
      },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {   padding: 30px;   background-color: #d60808 !important;  .form-control{   background-color:white !important;

    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
