import {io} from "socket.io-client"

class socketService{
    constructor(){
        this.socket = null;
    }


    connect(url){
        if(!this.socket){
            this.socket = io(url,{
                transports:["websocket"],
                query:{
                    "name":"Akash Mishra"
                }
            })

            console.log("Socket connected");
            
        }else{
            return this.socket
        }
    }



    disconnect(){
        if(this.socket){
            this.socket.disconnect()
            this.socket = null
            console.log("Socket disconnected");
            
        }
    }


    getSocket(){
        return this.socket
    }



}



export default new socketService()







