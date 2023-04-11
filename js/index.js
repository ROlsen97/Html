const baseurl = "https://shoppingapi20230411103106.azurewebsites.net/api/shoppingItems"

Vue.createApp({
    data(){
        return{ 
            ShoppingItems: []
        }
    },
    methods:{
        getAllShoppingItems(){
            this.helperGetAndShow(baseurl)
        },
        async helperGetAndShow(url){
            try{
                const response = await axios.get(url)
                this.ShoppingItems = await response.data
            }
            catch(ex){
                alert(ex.message)
            }
        }
    }
})