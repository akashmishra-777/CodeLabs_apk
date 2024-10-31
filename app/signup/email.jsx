import React, { useState } from 'react'
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'
import { responsiveFontSize,responsiveScreenHeight,responsiveScreenWidth } from 'react-native-responsive-dimensions'    
import { TextInput,ActivityIndicator} from 'react-native-paper'
import {SafeAreaView} from 'react-native-safe-area-context'
import { useLocalSearchParams, useRouter } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign'
import axios from 'axios'
import { StatusBar } from 'expo-status-bar'

export default function SignupForm() {
  

  const [showError,setShowError] = useState(false)
  const [email,setEmail] = useState(null);
  const {full_name} = useLocalSearchParams()
  const [showLoader,setShowLoader] = useState(false)
  const [showErrorForAvailability,setErrorForAvailability] = useState(false)

  async function nextHandler(){
    
    if(email == null){
      setShowError(true)
    }else{
      temp = String(email).split("@gmail.")
      if(temp.length == 2 && temp[1] == "com"){
        setShowLoader(true)
        await axios.post("https://codelabs-server-sp7w.onrender.com/user/checkEmail",{
          email:email
        }).then((data)=>{
          setShowLoader(false)
          if(data.data.availabe == false){
            setErrorForAvailability(true)
          }else{
              router.push({
                  pathname:"/signup/phone",
                  params:{
                  name:full_name,
                  email:email
                  }
              })
          }
          
        })

        
      }else{
        
        setShowError(true)
      }
    }
  }




    const router = useRouter()
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
        style={{fontSize:responsiveFontSize(2.5),fontWeight:"bold",}}>Enter an email address</Text>
        <Text
        style={{fontSize:responsiveFontSize(1.6),color:"#777777",marginVertical:responsiveScreenHeight(.5)}}>Enter an email address where you can be contacted. We'll send you a code yo confirm your account.</Text>
       
       <TextInput
        placeholder="Enter your email address here."
        keyboardType="email-address"
        outlineColor='grey'
        autoFocus={true}
        value={email}
        onChangeText={(text)=>{setEmail(text); setShowError(false); setErrorForAvailability(false)}}
        activeOutlineColor='#648DDB'
        mode="outlined"
        label={"Email Address"}
        left={<TextInput.Icon icon="email" />}
        style={{
          
         
          backgroundColor:"#fefafa",
          elevation:10,
          marginVertical:responsiveScreenHeight(.5)
        }}
        />

{showError?<Text style={{color:"red",fontSize:responsiveFontSize(1.6),fontWeight:700}}>You have entered an invalid email address.</Text>:null}


{showErrorForAvailability?<Text style={{color:"red",fontSize:responsiveFontSize(1.6),fontWeight:700}}>
This email is already taken by someone else.
</Text>:null}


        <Text
        style={{fontSize:responsiveFontSize(1.6),color:"#777777",marginVertical:responsiveScreenHeight(.5)}}>You will also recieve OTP on this email for login purposes and for account related activities.</Text>



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
          {showLoader?<ActivityIndicator animating={true} color="white" />:<Text style={{color:"white",fontSize:responsiveFontSize(1.9),fontWeight:"bold"}}>Next</Text>}

          
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