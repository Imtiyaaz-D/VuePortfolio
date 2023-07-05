import { createStore } from 'vuex'

const dataUrl = "https://imtiyaaz-d.github.io/portfolio-sever/index.json"
export default createStore({
  state: {
    testimonials: null,
    projects: null
  },
  getters: {
  },
  mutations: {
    setTestimonials(state, testimonials){
      state.testimonials = testimonials
    },
    setProject(state,projects){
      state.projects = projects
    }
  },
  actions: {
    async fetchTestimonials(context){
      try{
        let res = await fetch(dataUrl)
        let {testimonials} = await res.json()
          context.commit('setTestimonials',testimonials)
      }catch(e) {
        console.log(e.messsage);
      }
    },
    async fetchProject(context){
      try{
        let res = await fetch(dataUrl)
        let {projects} = await res.json()
        context.commit('setProject', projects)
      }catch(e) {
        console.log(e.message)
      }
    }
  },
  modules: {
  }
})
