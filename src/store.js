import {reactive} from "vue"

const store=reactive({
      searchTerm: "",
      currentUser: null,
      needUser: null,
      tipKorisnika: null,
})
export default store;