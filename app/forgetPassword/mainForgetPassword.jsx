import React,{useState,useEffect} from 'react'
import { View,Text,TouchableOpacity,StyleSheet,Button } from 'react-native'
import { responsiveFontSize,responsiveScreenHeight,responsiveScreenWidth } from 'react-native-responsive-dimensions'    
import { TextInput,ActivityIndicator} from 'react-native-paper'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useRouter} from 'expo-router'

import { StatusBar } from 'expo-status-bar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import axios from 'axios'

export default function ForgetPassword() {


   
 

    const router = useRouter()
   

    const [showError,setShowError] = useState(false)

    const [email,setEmail] = useState("")

    const [showLoader,setShowLoader] = useState(false)

    const [emptyEmailError,setEmptyEmailError] = useState(false)

    const [noAccountError,setNoAccountError] = useState(false)

    async function nextHandler(){
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let checkAdvanced = String(email).split(".");
    

    if(!email){
        setEmptyEmailError(true)
        
    }
    else if(emailRegex.test(email) && (checkAdvanced.length == 2 && checkAdvanced[1] == "com") ){
       
        setEmptyEmailError(false)
        setShowError(false)
        setShowLoader(true)

      let resp = await axios.post("https://codelabs-server-sp7w.onrender.com/user/forgetPaswordSendOTP",{
        email:email.toLowerCase().trim()
      })

  
      

     if(resp.data.success == true){

      
       router.push({
        pathname:"../otp/otpVerification",
        params:{
            email:email.toLowerCase().trim(),
            operation:"forgetpassword"
        }
       })
     }else if(resp.data.success == false){
      setNoAccountError(true)
     }


      setShowLoader(false)
      




      
       
    }else{
        setShowError(true)
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
        style={{fontSize:responsiveFontSize(2.5),fontWeight:"bold",}}>Want to find your account?</Text>
        <Text
        style={{fontSize:responsiveFontSize(1.6),color:"#777777",marginVertical:responsiveScreenHeight(.5)}}>Enter your resgistered email address to reset your password.</Text>
       
    
     <View style={{flexDirection:"row",justifyContent:"space-between"}}>
     <TextInput
      
        
        keyboardType="email-address"
        mode="outlined"
        autoFocus={true}
        label={"Email Address"}
        placeholder='Email address'
        value={email}
        onChangeText={(text)=>{setShowError(false); setEmptyEmailError(false); setEmail(text); setNoAccountError(false)}}
        
        outlineColor='grey'
        activeOutlineColor='#648DDB'
        // left={<TextInput.Icon icon="account" />}
        style={{
      width:"100%",
          backgroundColor:"#fefafa",
          elevation:10,
          marginVertical:responsiveScreenHeight(.5)
        }}
        />


       


     </View>

     {showError?<Text style={{color:"red",fontSize:responsiveFontSize(1.6),fontWeight:700}}>Invalid email address detected, Correct it.</Text>:null}

     {emptyEmailError?<Text style={{color:"red",fontSize:responsiveFontSize(1.6),fontWeight:700}}>Email address field is required. Fill it!</Text>:null}

     {noAccountError?<Text style={{color:"red",fontSize:responsiveFontSize(1.6),fontWeight:700}}> Account not found associated with this email.</Text>:null}
   
     <Text
        style={{fontSize:responsiveFontSize(1.6),color:"#777777",marginVertical:responsiveScreenHeight(.5)}}>You may recieve SMS or email messages from us for security and login purposes.</Text>

        



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
          {
            showLoader?<ActivityIndicator animating={true} color='white'/>:<Text  style={{color:"white",fontSize:responsiveFontSize(1.9),fontWeight:"bold"}}>Continue</Text>
          }
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