import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'
import { responsiveFontSize,responsiveScreenHeight,responsiveScreenWidth } from 'react-native-responsive-dimensions'    
import { TextInput} from 'react-native-paper'
import {SafeAreaView} from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useState } from 'react'

export default function SignupForm() {
  const router = useRouter()

  const [fname,setFname] = useState(null)
  const [lname,setLname] = useState(null)
  const [showError,setShowError] = useState(false)

  function nextHandler(){
    if(fname != null && lname != null){
      router.push({
        pathname:"/signup/email",
        params:{
          full_name:String(fname).trim()+" "+String(lname).trim()
        }
      })
    }else{
    setShowError(true)
    
  
  }}




    
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
        style={{fontSize:responsiveFontSize(2.5),fontWeight:"bold"}}>What's your name?</Text>
        <Text
        style={{fontSize:responsiveFontSize(1.6),color:"#777777",marginTop:responsiveScreenHeight(.5)}}>Enter the name that you use in real life.</Text>
       
        <View style={{
  
          flexDirection:"row",
          justifyContent:"center",
          gap:responsiveScreenWidth(3),
          marginVertical:responsiveScreenHeight(1)
        }}>
        <TextInput
        placeholder="First Name"
        mode="outlined"
        label={"First Name"}
        value={fname}
        onChangeText={(e)=>{
          
          setFname(e)
          setShowError(false)
          
        }}
        outlineColor='grey'
        autoFocus={true}

        
        activeOutlineColor='#648DDB'
        style={{
          width:"48.5%",
         
          backgroundColor:"#fefafa",
          marginTop:responsiveScreenHeight(.5)
        }}
        />
  
        <TextInput
        placeholder="Last Name"
        keyboardType="default"
        mode="outlined"
        label={"Last Name"}
        value={lname}
        onChangeText={(e)=>{
          setLname(e)
          setShowError(false)
        }}
        outlineColor='grey'
        activeOutlineColor='#648DDB'
        // left={<TextInput.Icon icon="account" />}
        style={{
          width:"48.5%",
         
          backgroundColor:"#fefafa",
          elevation:10,
          marginTop:responsiveScreenHeight(.5)
        }}
        />
  
  
  
        </View>
        
        {showError?<Text style={{color:"red",fontSize:responsiveFontSize(1.6),fontWeight:700}}> Both first name and last name are required.</Text>:null}

        <TouchableOpacity onPress={nextHandler}
        style={{
          backgroundColor:"#648DDB",
          padding:responsiveScreenWidth(3.5),
          borderRadius:responsiveScreenWidth(2),
          marginTop:responsiveScreenHeight(1),
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