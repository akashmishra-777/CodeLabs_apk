import React,{useState,useEffect} from 'react'
import { View,Text,TouchableOpacity,StyleSheet,Button } from 'react-native'
import { responsiveFontSize,responsiveScreenHeight,responsiveScreenWidth } from 'react-native-responsive-dimensions'    
import { TextInput} from 'react-native-paper'
import {SafeAreaView} from 'react-native-safe-area-context'
import { useLocalSearchParams, useRouter } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Dob() {

  
   
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    const router = useRouter()
    const [day,setDay] = useState(null)
    const [monthValue,setMonthValue] = useState(null)
    const [year,setYear] = useState(null)
    const {name,email,phone} = useLocalSearchParams()
    const [showError,setShowError] = useState(false)

    function nextHandler(){
    if(
      (Number(day)>=1 && 
      Number(day)<=31) && 
      (month.includes(monthValue)) && 
      (Number(year)>=1980 && 
      Number(Number(year)<=2040))){
       
        
        
        router.push({
          pathname:"signup/address",
          params:{
            name:name,
            email:email,
            phone:phone,
            dob:day+"/"+monthValue+"/"+year
          }
        })
       


    }else{
      setShowError(true)
    }
    
    }

    
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
        style={{fontSize:responsiveFontSize(2.5),fontWeight:"bold",}}>What's your date of birth?</Text>
        <Text
        style={{fontSize:responsiveFontSize(1.6),color:"#777777",marginVertical:responsiveScreenHeight(.5)}}>Use your date of birth to find your age group and to make your profile more accurate.</Text>
       
    
     <View style={{flexDirection:"row",justifyContent:"space-between"}}>
     <TextInput
      
        
        keyboardType="default"
        mode="outlined"
        autoFocus={true}
        label={"Day"}
        value={day}
        onChangeText={(text)=>{setDay(text); setShowError(false);}}
        maxLength={2}
        outlineColor='grey'
        activeOutlineColor='#648DDB'
        // left={<TextInput.Icon icon="account" />}
        style={{
          width:"30%",
          backgroundColor:"#fefafa",
          elevation:10,
          marginVertical:responsiveScreenHeight(.5)
        }}
        />


<TextInput
      
        
      keyboardType="default"
      mode="outlined"
      label={"Month"}
      value={monthValue}
      onChangeText={(text)=>{setMonthValue(text); setShowError(false);}}
      maxLength={10}
      outlineColor='grey'
        activeOutlineColor='#648DDB'
      // left={<TextInput.Icon icon="account" />}
      style={{
        width:"30%",
        backgroundColor:"#fefafa",

        elevation:10,
        marginVertical:responsiveScreenHeight(.5)
      }}
      />


<TextInput
      
        
      keyboardType="default"
      mode="outlined"
      label={"Year"}
      value={year}
      onChangeText={(text)=>{setYear(text); setShowError(false);}}
      outlineColor='grey'
        activeOutlineColor='#648DDB'
      // left={<TextInput.Icon icon="account" />}
      style={{
        width:"30%",
        backgroundColor:"#fefafa",
        elevation:10,
        marginVertical:responsiveScreenHeight(.5)
      }}
      />

     </View>

     {showError?<Text style={{color:"red",fontSize:responsiveFontSize(1.6),fontWeight:700}}>You have entered invalid date of birth, correct it.</Text>:null}
   


        



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
          <Text  style={{color:"white",fontSize:responsiveFontSize(1.9),fontWeight:"bold"}}>Next</Text>
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