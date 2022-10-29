import {reactive} from "vue"

const store=reactive({
      searchTerm: "",
      currentUser: null,
      needUser: null,
})
export default store;