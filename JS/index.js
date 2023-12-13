const {createApp}= Vue

createApp({
    data(){
        return{
            arrayEmail:[""],
        }
    },
    mounted(){
        // richiesta per prendere email
       axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
       .then((risposta)=>{
        console.log(risposta.data.response);
       })
    }
}).mount("#app")