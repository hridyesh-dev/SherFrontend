import axios from 'axios'

const instance=axios.create({
    // aise konsi url hai jo base hia 
    baseURL : 'https://fakestoreapi.com/',
    /*
        when we need to use cookies, login-logout logic
        withCredentials:true
    */
})

/*  
    request aate time aur request jaate time 
    jab beech mai uch change karna ho toh interceptiors 
    kaam aate hai 

    data aate jaate time beech mai intercept karne waale 

    Practical UseCase : Agar header mai api key daalnu ho 
    toh 50 jagah thodi naa bheju ga  

    request aur response ko manuplate karke send karna according to backend or according to frontend 
    

*/

//add a request interceptors
//app request karte ho , ab data jaa raha hota hai toh yeh chalega 
instance.interceptors.request.use(
    function(config){
        console.log("request -->",config);
        return config;
    },
    function(error){
        return Promise.reject(error)
    }
)

//add a response interceptors 
//jab data aa raha hota hai toh yeh chalta hai 
instance.interceptors.response.use(
    function(response){
        console.log("response -->",response);
        return response
    },

    function (error){
        return Promise.reject(error)
    }
);

export default instance