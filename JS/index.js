const {createApp}= Vue

createApp({
    data(){
        return{
            arrayEmail:[],
        }
    },
    mounted(){
        // ciclo for per crichiedere le email
      for (let i = 0; i < 10; i++) {
        // richiesta per prendere email
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((risposta)=>{
         this.arrayEmail.push(risposta.data.response);
        })
      }
    }
}).mount("#app")
