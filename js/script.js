const {createApp} = Vue;


createApp({

  data(){

    return{
      apiUrl:'https://flynn.boolean.careers/exercises/api/array/integers?',
      min: 100,
      max: 10000,
      items: 10,
      numeriRandom: [],
      loading:true
    }

  },

  methods: {
    getApi(){
      this.loading = true;

      console.log('CHIAMATA AXIOS');
      axios.get(this.apiUrl + 'min=' + this.min + '&max=' + this.max + '&items=' + this.items )
      .then(result => {
        console.log(result.data);
        // mi serve "response" di data
        console.log(result.data.response);
        this.numeriRandom = result.data.response;

        // quando arriva il dato finisce il loading
        this.loading = false

      })

    }
  },

  mounted(){

    this.getApi();

  }

}).mount('#app')