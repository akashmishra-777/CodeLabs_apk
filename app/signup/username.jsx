import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'
import { responsiveFontSize,responsiveScreenHeight,responsiveScreenWidth } from 'react-native-responsive-dimensions'    
import { TextInput,ActivityIndicator} from 'react-native-paper'
import {SafeAreaView} from 'react-native-safe-area-context'
import { useLocalSearchParams, useRouter } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign'
import axios from 'axios'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'

export default function SignupForm() {

    const [isUsernameUnavailable,setIsUsernameUnavailable] = useState(false)
    const params = useLocalSearchParams()
    const [username,setUsername] = useState(null)
    const [isUsernameAvailable,setIsUsernameAvailable] = useState(false)
    const [showLoader,setShowLoader] = useState(false)

    const router = useRouter()

    const [showError,setShowError] = useState(false)

   async function nextHandler(){
      if(
        String(username).includes("!")||
        String(username).includes("@")||
        String(username).includes("#")||
        String(username).includes("$")||
        String(username).includes("^")||
        String(username).includes("&")||
        String(username).includes("*")||
        String(username).includes("(")||
        String(username).includes(")")||
        String(username).includes("$")||
        String(username).includes("-")||
        String(username).includes("=")||
        String(username).includes("+")||
        String(username).includes("`")||
        String(username).includes("~")||
        String(username).includes(".")||
        String(username).includes(",")||
        String(username).includes("'\'")||
        String(username).includes("}")||
        String(username).includes("{")||
        String(username).includes("[")||
        String(username).includes("]")||
        String(username).includes("/")||
        username == null || username == ""
      ){
        setShowError(true)
      }else{

        setShowLoader(true)

        await axios.post("https://codelabs-server-sp7w.onrender.com/user/checkUsername",{
          username:username
        }).then(async (data)=>{
          
          if(data.data.availabe == true){
              setIsUsernameAvailable(true)
              setIsUsernameUnavailable(false)
             
              setShowLoader(false)
              router.push({
                pathname:"signup/password",
                params:{
                  name:params.name,
                  phone:params.phone,
                  address:params.address,
                  dob:params.dob,
                  username:username,
                  email:params.email,
                }
              })
             }else if(data.data.availabe == false){
              setIsUsernameUnavailable(true)
              setIsUsernameAvailable(false)
              setShowLoader(false)
              
             }
        })

      }
    }
    return (
      <SafeAreaView style={{flex:1,justifyContent:"space-between",backgroundColor:"white"}}>
     <StatusBar style="dark"  />


         <View style={[styles.signupFormContainer,{marginTop:responsiveScreenHeight(0),backgroundColor:"white",width:"100%"}]}>
        {/* Label */}
        {/* Closing of label */}
        <View style={{backgroundColor:"white",height:responsiveScreenHeight(7),justifyContent:"center",alignItems:"flex-start"}}>
       <TouchableOpacity onPress={()=>router.back()}>
       <AntDesign name="arrowleft" size={24} color="black" />
       </TouchableOpacity>
        </View>



        <Text
        style={{fontSize:responsiveFontSize(2.5),fontWeight:"bold",}}>Choose a username account</Text>
        <Text
        style={{fontSize:responsiveFontSize(1.6),color:"#777777",marginVertical:responsiveScreenHeight(.5)}}>Choose a suitable username for your account. You can always change it later.</Text>
       
       <TextInput
        placeholder="Enter select a username"
        keyboardType="text"
        outlineColor='grey'
        autoFocus={true}
        value={username}
        onChangeText={(text)=>{setUsername(text); setShowError(false); setIsUsernameAvailable(false); setIsUsernameUnavailable(false)}}
        activeUnderlineColor='#648DDB'
   
        mode="flat"
      
        right={<TextInput.Icon  icon={isUsernameAvailable? "check-decagram" : "close-circle"} />}
        // left={<TextInput.Icon icon="account" />}
        style={{
          
         
          backgroundColor:"#fefafa",
          elevation:10,
          marginVertical:responsiveScreenHeight(.5)
        }}
        />

        {showError?<Text style={{color:"red",fontSize:responsiveFontSize(1.6),fontWeight:700}}>Enter your username without special symbols except _</Text>:null}


        {isUsernameAvailable?<Text style={{color:"green",fontSize:responsiveFontSize(1.6),fontWeight:700}}>This username is available, you can take it.</Text>:null}
       
        {isUsernameUnavailable?<Text style={{color:"red",fontSize:responsiveFontSize(1.6),fontWeight:700}}>This username is already taken.</Text>:null}

        <Text
        style={{fontSize:responsiveFontSize(1.6),color:"#777777",marginVertical:responsiveScreenHeight(.5)}}>
            Note : Make sure your username doesn't contain any special characters and abusive words also.
        </Text>



        <TouchableOpacity onPress={nextHandler}
        style={{
          backgroundColor:"#648DDB",
          padding:responsiveScreenWidth(3.5),
          borderRadius:responsiveScreenWidth(2),
          marginTop:responsiveScreenHeight(1.5),
          alignItems:"center",
          elevation:4
        }}
        >
          {showLoader?<ActivityIndicator animating={true} color={"white"}/>: <Text  style={{color:"white",fontSize:responsiveFontSize(1.9),fontWeight:"bold"}}>
            Next
            </Text>}
         
        </TouchableOpacity>
  
        
  
        
  
  
  
      </View>
      
      </SafeAreaView>
    );
  };


  const styles =  StyleSheet.create({
    signupFormContainer: {
        backgroundColor: "transparent",
        marginTop: responsiveScreenHeight(1),
        paddingHorizontal: responsiveScreenWidth(5),
      },
    
  })