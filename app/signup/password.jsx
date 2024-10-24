import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'
import { responsiveFontSize,responsiveScreenHeight,responsiveScreenWidth } from 'react-native-responsive-dimensions'    
import { TextInput} from 'react-native-paper'
import {SafeAreaView} from 'react-native-safe-area-context'
import { useRouter,useLocalSearchParams } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useState } from 'react'
import {Snackbar} from 'react-native-paper'

export default function Password() {

    const params = useLocalSearchParams()

    const [isPasswordVisible,setIsPasswordVisible] = useState(true)
    const [isConfirmPasswordVisible,setIsConfirmPasswordVisible] = useState(true)

    const [Password,setPassword] = useState("")
    const [ConfirmPassword,setConfirmPassword] = useState("")
    const [showNullError,setShowNullError] = useState(false)
    const [showSuccess,setShowSuccess] = useState(false)



    async function finalHandler(){
      let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;

      if(regex.test(Password) && Password === ConfirmPassword){
      // setShowNullError(false);
      // setShowSuccess(true);
    let resp = await fetch("https://codelabs-server-sp7w.onrender.com/user/signupWithPhone",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:params.name,
        email:params.email,
        phone:Number(params.phone),
        dob:"2006/08/14",
        address:params.address,
        username:params.username,
        password:Password
      })
    })

    let data = await resp.json();

    if(data.status == true){
      setShowSuccess(true)
      router.push({
        pathname:"otp/otpVerification",
        params:{
          name:params.name,
        email:params.email,
        phone:Number(params.phone),
        dob:"2006/08/14",
        address:params.address,
        username:params.username,
        password:Password
        }
      })
    }else{
      setShowNullError(true)
    }
    
      
      }
      else{
        setShowNullError(true)
      }
      

      
    }



    const router = useRouter()
    return (
      <SafeAreaView style={{flex:1,justifyContent:"space-between",backgroundColor:"white"}}>





     



   
















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
        style={{fontSize:responsiveFontSize(1.6),color:"#777777",marginVertical:responsiveScreenHeight(.5)}}>Choose a strong password that contains alphanumeric characters and special characters.</Text>
       
       <TextInput
        placeholder="Enter your password here."
        keyboardType="text"
        outlineColor='grey'
        autoFocus={true}
        value={Password}
        onChangeText={(text)=>{setPassword(text);setShowNullError(false)}}
        activeUnderlineColor='#648DDB'
        left={<TextInput.Icon icon="shield-key-outline" />}
        right={<TextInput.Icon icon={isPasswordVisible?"eye-off":"eye"} onPress={()=>setIsPasswordVisible(!isPasswordVisible)}/>}
        secureTextEntry={isPasswordVisible?true:false}
   
        mode="flat"
      
        
        // left={<TextInput.Icon icon="account" />}
        style={{
          
         
          backgroundColor:"#fefafa",
          elevation:10,
          marginVertical:responsiveScreenHeight(1)
        }}
        />

       <TextInput
        placeholder="Enter your confirm password here."
        keyboardType="text"
        outlineColor='grey'
        autoFocus={false}
        activeUnderlineColor='#648DDB'
        value={ConfirmPassword}
        onChangeText={(text)=>{setConfirmPassword(text); setShowNullError(false)}}
        secureTextEntry={isConfirmPasswordVisible?true:false}
        left={<TextInput.Icon icon="shield-key" />}
        right={<TextInput.Icon icon={isConfirmPasswordVisible ? "eye-off" : "eye"} onPress={()=>setIsConfirmPasswordVisible(!isConfirmPasswordVisible)} />}
        mode="flat"
      
        
        // left={<TextInput.Icon icon="account" />}
        style={{
          
         
          backgroundColor:"#fefafa",
          elevation:10,
          marginVertical:responsiveScreenHeight(1)
        }}
        />


{showNullError?<Text style={{color:"red",fontSize:responsiveFontSize(1.5),fontWeight:700}}>Password must be at least 8 characters long with capital, small letter, numbers and special character.</Text>:null}
        


        <Text
        style={{fontSize:responsiveFontSize(1.6),color:"#777777",marginVertical:responsiveScreenHeight(.5)}}>
            Note : Password length should be at least 8 characters.
        </Text>



        <TouchableOpacity onPress={finalHandler}
        
        style={{
          backgroundColor:"#648DDB",
          padding:responsiveScreenWidth(3.5),
          borderRadius:responsiveScreenWidth(2),
          marginTop:responsiveScreenHeight(1.5),
          alignItems:"center",
          elevation:4
        }}
        >
          <Text style={{color:"white",fontSize:responsiveFontSize(1.9),fontWeight:"bold"}}>Next</Text>
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