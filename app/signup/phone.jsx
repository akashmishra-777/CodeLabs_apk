import React, { useState } from 'react'
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'
import { responsiveFontSize,responsiveScreenHeight,responsiveScreenWidth } from 'react-native-responsive-dimensions'    
import { TextInput,ActivityIndicator} from 'react-native-paper'
import {SafeAreaView} from 'react-native-safe-area-context'
import { useRouter,useLocalSearchParams } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign'
import axios from 'axios'
import { StatusBar } from 'expo-status-bar'

export default function Phone() {
  const {name,email} = useLocalSearchParams()
  const [phone,setPhone] = useState(null)
  const [showError,setShowError] = useState(false)
  const router = useRouter()
  const [showLoader,setShowLoader] = useState(false)
  const [showPhoneAvailabilityError,setShowPhoneAvailabilityError] = useState(false)


  async function nextHandler(){
    if(
      (String(phone).includes(".") || 
      String(phone).includes(" ") || 
      String(phone).includes("-") || 
      String(phone).includes("@") ||
      String(phone).includes("!")||
      String(phone).includes("$")||
      String(phone).includes("%") ||
      String(phone).includes(",")) || String(phone).length != 10
    ){
      

      setShowError(true)
      
  }else{
    setShowLoader(true)

    await axios.post("https://codelabs-server-sp7w.onrender.com/user/checkPhone",{phone:phone}).then((data)=>{
    
      setShowLoader(false)

      if(data.data.availabe == true){
        router.push({
        pathname:"signup/dob",
        params:{
        name,
        email,
        phone,
        }
    })
      }else{
        setShowPhoneAvailabilityError(true)
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
        style={{fontSize:responsiveFontSize(2.5),fontWeight:"bold",}}>What's your mobile number?</Text>
        <Text
        style={{fontSize:responsiveFontSize(1.6),color:"#777777",marginVertical:responsiveScreenHeight(.5)}}>Enter your phone number on which you can be contacted. No one will see it on your profile.</Text>
       
       <TextInput
        placeholder="Enter your phone number here."
        keyboardType="number-pad"
        mode="outlined"
        maxLength={10}
        value={phone}
        autoFocus={true}
        onChangeText={(text)=>{setPhone(text); setShowError(false); setShowPhoneAvailabilityError(false)}}
        left={<TextInput.Icon icon="cellphone-check" />}
        outlineColor='grey'
        activeOutlineColor='#648DDB'
        label={"Phone Number"}
        // left={<TextInput.Icon icon="account" />}
        style={{
          backgroundColor:"#fefafa",
          elevation:10,
          marginVertical:responsiveScreenHeight(.5)
        }}
        />


{showError?<Text style={{color:"red",fontSize:responsiveFontSize(1.6),fontWeight:700}}>You have entered an invalid phone number.</Text>:null}

{showPhoneAvailabilityError?<Text style={{color:"red",fontSize:responsiveFontSize(1.6),fontWeight:700}}>This phone number is already taken by someone else.</Text>:null}


        <Text
        style={{fontSize:responsiveFontSize(1.6),color:"#777777",marginVertical:responsiveScreenHeight(.5)}}>You may recieve SMS notifications from us for account related activities and for login purposes.</Text>


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

          {showLoader? <ActivityIndicator color='white' animating={true}  /> : <Text style={{color:"white",fontSize:responsiveFontSize(1.9),fontWeight:"bold"}}>Next</Text>}

         
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