import React,{useState,useRef} from 'react'
import { View,Text,TouchableOpacity,StyleSheet,TextInput } from 'react-native'
import { responsiveFontSize,responsiveScreenHeight,responsiveScreenWidth } from 'react-native-responsive-dimensions'    
import { Snackbar,TextInput as Iconx,ActivityIndicator} from 'react-native-paper'
import {SafeAreaView} from 'react-native-safe-area-context'
import { useLocalSearchParams, useRouter } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign'
import axios from 'axios'
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function OtpVerification() {

  
   
 

    const router = useRouter()
   
    const {name,phone,email,dob,address,username,password} =useLocalSearchParams();
    const params = useLocalSearchParams()
    const [otpError,setOtpError] = useState(false)
    const [firstDigit,setFirstDigit] = useState(0)
    const [secondDigit,setSecondDigit] = useState(0)
    const [thirdDigit,setThirdDigit] = useState(0)
    const [fourthDigit,setFourthDigit] = useState(0)
    const [fifthDigit,setFifthDigit] = useState(0)
    const [sixthDigit,setSixthDigit] = useState(0)
    const [focusedBorderOne,setFocusedBorderOne] = useState(false)
    const [focusedBorderTwo,setFocusedBorderTwo] = useState(false)
    const [focusedBorderThree,setFocusedBorderThree] = useState(false)
    const [focusedBorderFour,setFocusedBorderFour] = useState(false)
    const [focusedBorderFive,setFocusedBorderFive] = useState(false)
    const [focusedBorderSix,setFocusedBorderSix] = useState(false)
    const [showSuccess,setShowSuccess] = useState(false)
    
    const [showLoader,setShowLoader] = useState(false)


    const inp1 = useRef()
    const inp2 = useRef()
    const inp3 = useRef()
    const inp4 = useRef()
    const inp5 = useRef()
    const inp6 = useRef()


    function nextMoveHandler1(){
        if(String(firstDigit)==0){
            inp2.current.focus()
        }else if(String(secondDigit)!==0){
            inp1.current.focus()
        }
    }


    function nextMoveHandler2(){
       if(String(secondDigit)==0){
       inp3.current.focus()
       }else{
        inp1.current.focus()
    }
    }


    function nextMoveHandler3(){
        if(String(thirdDigit)==0){
            inp4.current.focus()
        }
        else{
            inp2.current.focus()
        }
    }

    function nextMoveHandler4(){
        if(String(fourthDigit)==0){
            inp5.current.focus()
        }else{
            inp3.current.focus()
        }
    }


    function nextMoveHandler5(){
        if(String(fifthDigit)==0){
            inp6.current.focus()
        }else{
            inp4.current.focus()
        }
    }

    function nextMoveHandler6(){
        if(String(sixthDigit)==0){
            inp6.current.blur()
        }else{
            inp5.current.focus()
        }
    }
  

async function nextHandler(){
    setShowLoader(true)
   
    if(params.operation == "signup"){
      let resp = await fetch("https://codelabs-server-sp7w.onrender.com/user/signupOTPVerification",{
        method:"POST",
        headers:{
          "Accept":"application/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name:name,
          phone:Number(phone),
          email:email,
          dob:dob,
          address:address,
          username:username,
          password:password,
          otp:Number(firstDigit+secondDigit+thirdDigit+fourthDigit+fifthDigit+sixthDigit)
        })
      })
      let data = await resp.json();
  
  
      console.warn(data);
      
  
  
     
      
  
      if(data.success == true){
        setShowLoader(false)
        setShowSuccess(true)
  
        setTimeout(()=>{
          router.push({
            pathname:"/"
          })
        },3000)
      }else{
        setShowLoader(false)
        setOtpError(true)
      }
    }else if(params.operation == "login"){

      let response = await axios.post("https://codelabs-server-sp7w.onrender.com/user/loginOtpVerification",{
        otp:Number(firstDigit+secondDigit+thirdDigit+fourthDigit+fifthDigit+sixthDigit)
      })


      if(response.data.success == true){

        try {
          await AsyncStorage.setItem("isLoggedIn","true");
          router.replace({
            pathname:"/"
          })
        } catch (error) {
          console.warn(error.message);
          
        }
        
      }else{
        setOtpError(true)
      }
      setShowLoader(false)

    }else if(params.operation == "forgetpassword"){

      // For forget password route
     
      let forgetPasswordResponse = await await axios.post("https://codelabs-server-sp7w.onrender.com/user/forgetPasswordOTPVerification",{
        clientOTP:Number(firstDigit+secondDigit+thirdDigit+fourthDigit+fifthDigit+sixthDigit)
      })


      if(forgetPasswordResponse.data.success == true){
        router.push({
          pathname:"../forgetPassword/changePassword",
          params:{
            email:params.email
          }
        })
      }
      



      // For forget password route
      
    }else{
      console.warn("Not Matched");
      
    }



    
   
   
}

    
    return (
      <SafeAreaView style={{flex:1,justifyContent:"space-between",backgroundColor:"white"}}>
             <StatusBar style="dark"  />
        <Snackbar visible={showSuccess} onDismiss={()=>setShowSuccess(false)} duration={3000} style={{backgroundColor:"black"}}
         action={{
          label:<Iconx.Icon onPress={()=>setShowSuccess(false)} icon="close" color="white" size={20}/>
         } }>

<Text style={{color:"white",fontSize:responsiveFontSize(1.6),fontWeight:700}}>You are registered successfully.</Text>


         </Snackbar>


         <View style={[styles.signupFormContainer,{marginTop:responsiveScreenHeight(0),backgroundColor:"white",width:"100%"}]}>
        {/* Label */}
        {/* Closing of label */}
        <View style={{backgroundColor:"white",height:responsiveScreenHeight(7),justifyContent:"center",alignItems:"flex-start"}}>
       <TouchableOpacity onPress={()=>router.back()}>
       <AntDesign name="arrowleft" size={24} color="black" />
       </TouchableOpacity>
        </View>



        <Text
        style={{fontSize:responsiveFontSize(2.5),fontWeight:"500",}}>Enter One Time Password</Text>
        <Text
        style={{fontSize:responsiveFontSize(1.6),color:"#777777",marginVertical:responsiveScreenHeight(.5)}}>An <Text style={{fontWeight:"bold"}}>OTP</Text> has sent to <Text style={{fontWeight:"bold"}}>{phone || email}</Text>, enter that code to confirm your account.</Text>
       
    
     <View style={{flexDirection:"row",justifyContent:"space-between"}}>

    <TextInput
        keyboardType="numeric"
        mode="outlined"
        autoFocus={true}
        onFocus={()=>setFocusedBorderOne(true)}
        value={firstDigit}
        maxLength={1}
        ref={inp1}
        caretHidden={true}
        onChangeText={(text)=>{setFirstDigit(text); 
           nextMoveHandler1()
        }}
        
        onBlur={()=>setFocusedBorderOne(false)}
        
        style={{
          width:"14%",
          height:responsiveScreenHeight(1),
          backgroundColor:"#fefafa",
          elevation:5,
         height:responsiveScreenHeight(5.5),
          marginVertical:responsiveScreenHeight(1.5),
          justifyContent:"center",
          textAlign:"center",
          borderRadius:responsiveScreenWidth(1),
          fontSize:responsiveFontSize(2),
          fontWeight:"500",
          borderWidth:focusedBorderOne?2:1,
          borderColor:focusedBorderOne?"#648DDB":"#808080"
            
          
        }}
        />

    <TextInput
        keyboardType="numeric"
        mode="outlined"
        autoFocus={false}
        ref={inp2}
        onFocus={()=>setFocusedBorderTwo(true)}
        value={secondDigit}
        onChangeText={(text)=>{setSecondDigit(text); 
           nextMoveHandler2()
        }}
        onBlur={()=>setFocusedBorderTwo(false)}
        caretHidden={true}

        maxLength={1}
        
        style={{
          width:"14%",
          height:responsiveScreenHeight(1),
          backgroundColor:"#fefafa",
          elevation:5,
          fontWeight:"500",
         height:responsiveScreenHeight(5.5),
          marginVertical:responsiveScreenHeight(1.5),
          fontSize:responsiveFontSize(2),
          justifyContent:"center",
          textAlign:"center",
          borderRadius:responsiveScreenWidth(1),
          borderWidth:focusedBorderTwo?2:1,
          borderColor:focusedBorderTwo?"#648DDB":"#808080",
          
            
          
        }}
        />


    <TextInput
        keyboardType="numeric"
        mode="outlined"
        autoFocus={false}
        ref={inp3}
        onFocus={()=>setFocusedBorderThree(true)}
        value={thirdDigit}
        caretHidden={true}
        onChangeText={(text)=>{setThirdDigit(text);
            
            nextMoveHandler3()
        }}
        
        
        onBlur={()=>setFocusedBorderThree(false)}
        maxLength={1}
        
        style={{
          width:"14%",
          fontWeight:"500",
          height:responsiveScreenHeight(1),
          backgroundColor:"#fefafa",
          elevation:5,
         height:responsiveScreenHeight(5.5),
          marginVertical:responsiveScreenHeight(1.5),
          justifyContent:"center",
          textAlign:"center",
          borderRadius:responsiveScreenWidth(1),
          fontSize:responsiveFontSize(2),
          borderWidth:focusedBorderThree?2:1,
          borderColor:focusedBorderThree?"#648DDB":"#808080"
            
          
        }}
        />


    <TextInput
        keyboardType="numeric"
        mode="outlined"
        
        autoFocus={false}
        caretHidden={true}
        ref={inp4}
        onFocus={()=>setFocusedBorderFour(true)}
        value={fourthDigit}
        onChangeText={(text)=>{setFourthDigit(text);nextMoveHandler4()}}
        onBlur={()=>setFocusedBorderFour(false)}
        maxLength={1}
        
        style={{
          width:"14%",
          height:responsiveScreenHeight(1),
          backgroundColor:"#fefafa",
          elevation:5,
          height:responsiveScreenHeight(5.5),
          marginVertical:responsiveScreenHeight(1.5),
          justifyContent:"center",
          textAlign:"center",
          fontWeight:"500",
          borderRadius:responsiveScreenWidth(1),
          fontSize:responsiveFontSize(2),
          borderWidth:focusedBorderFour?2:1,
          borderColor:focusedBorderFour?"#648DDB":"#808080"
            
          
        }}
        />

    <TextInput
        keyboardType="numeric"
        mode="outlined"
        autoFocus={false}
        caretHidden={true}
        ref={inp5}
        onFocus={()=>setFocusedBorderFive(true)}
        value={fifthDigit}
        onChangeText={(text)=>{setFifthDigit(text);nextMoveHandler5()}}
        onBlur={()=>setFocusedBorderFive(false)}
        maxLength={1}
        
        
        style={{
          width:"14%",
          height:responsiveScreenHeight(1),
          backgroundColor:"#fefafa",
          elevation:5,
          fontWeight:"500",
         height:responsiveScreenHeight(5.5),
          marginVertical:responsiveScreenHeight(1.5),
          justifyContent:"center",
          textAlign:"center",
          borderRadius:responsiveScreenWidth(1),
          fontSize:responsiveFontSize(2),
          borderWidth:focusedBorderFive?2:1,
          borderColor:focusedBorderFive?"#648DDB":"#808080"
            
          
        }}
        />

    <TextInput
        keyboardType="numeric"
        mode="outlined"
        autoFocus={false}
        caretHidden={true}
        ref={inp6}
        onFocus={()=>setFocusedBorderSix(true)}
        value={sixthDigit}
        onChangeText={(text)=>{setSixthDigit(text); nextMoveHandler6()}}
        onBlur={()=>setFocusedBorderSix(false)}
        
        maxLength={1}
        
        style={{
          width:"14%",
          height:responsiveScreenHeight(1),
          backgroundColor:"#fefafa",
          elevation:5,
          fontWeight:"500",
         height:responsiveScreenHeight(5.5),
          marginVertical:responsiveScreenHeight(1.5),
          justifyContent:"center",
          textAlign:"center",
          fontSize:responsiveFontSize(2),
          borderRadius:responsiveScreenWidth(1),
          borderWidth:focusedBorderSix?2:1,
          borderColor:focusedBorderSix?"#648DDB":"#808080"
            
          
        }}
        />


       


     </View>

     {otpError?<Text style={{color:"red",fontSize:responsiveFontSize(1.6),fontWeight:700}}>Invalid One Time Password</Text>:null}

     
   
     <Text
        style={{fontSize:responsiveFontSize(1.6),color:"#777777",marginVertical:responsiveScreenHeight(.5)}}>Enter the code we sent to your email address. Then you will be able to perform further operations.</Text>

        



        <TouchableOpacity onPress={nextHandler}
        style={{
          backgroundColor:"#648DDB",
          padding:responsiveScreenWidth(3.5),
          borderRadius:responsiveScreenWidth(2),
          marginTop:responsiveScreenHeight(1.5),
          alignItems:"center",
          elevation:4
        }}>

          {showLoader?<ActivityIndicator animating={true} color='white' />: <Text  style={{color:"white",fontSize:responsiveFontSize(1.9),fontWeight:"bold"}}>Verify One Time Password</Text>}
            
         
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