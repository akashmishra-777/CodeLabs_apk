import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

import { useState } from "react";
import { useRouter } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveScreenHeight,
  responsiveFontSize,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

import { StatusBar } from "expo-status-bar";
import { TextInput,HelperText} from "react-native-paper";
import { Link } from "expo-router";

import Entypo from 'react-native-vector-icons/Entypo';


export default function Login() {
  const [loginFocused, setLoginFocused] = useState(true);
 
 

  function loginClicked(){
    setLoginFocused(true);
  }

  function SignupClicked(){
    setLoginFocused(false);
  }

  return (
    <>
    <StatusBar backgroundColor="#648DDB" style="light"  />
      <SafeAreaView style={styles.container}>
        

        <View style={{
          justifyContent:"center",
          flexDirection:"row",
          marginTop:responsiveScreenHeight(3)
          }}>
        <Text style={{fontSize:responsiveFontSize(4)}}>Code</Text>
        <Text style={{
            color:"#648DDB",
            fontWeight:"bold",
            fontSize:responsiveFontSize(4)
            
          }}>Labs</Text>
        </View>



         <LoginForm  />
      </SafeAreaView>
    </>
  );
}




const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showFillEmail,setShowEmail] = useState(true);
  const [showFillLock,setShowFillLock] = useState(true);
  const [showEmailError,setShowEmailError] = useState(false);
  const [showPasswordError,setShowPasswordError] = useState(false);
  const router = useRouter();

  function goToForgetPassword(){
    router.push({
      pathname:"forgetPassword/mainForgetPassword"
    })
  }

  return (
    
      
    <View style={styles.loginFormContainer}>

      <View style={{
        marginTop:responsiveScreenHeight(3)
      }}>
        <Text
        style={{
          fontSize:responsiveFontSize(1.9),
          fontWeight:"bold"
        }}
        >Email Address</Text>
        <TextInput
         placeholder="Enter your email address."
         mode="flat"
         outlineColor="#648DDB"
         activeOutlineColor="#648DDB"
         left={<TextInput.Icon icon={showFillEmail?"email-outline":"email"} />}
         cursorColor="#648DDB"
         activeUnderlineColor="#648DDB"
         underlineColor="#648DDB"
         autoCorrect={true}
         autoFocus={false}
         onFocus={()=>setShowEmail(false)}
         onBlur={()=>setShowEmail(true)}
         autoComplete="email"
         selectTextOnFocus={false}
         style={{
          marginTop:responsiveScreenHeight(1),
          backgroundColor:"#dee8f7",
          elevation:4
         }}
         
         />
         <HelperText style={{color:"red",display:showPasswordError?"block":"none"}}>You have entered an invalid email address.</HelperText>
      </View>

      <View>
      <Text
      style={{
        fontSize:responsiveFontSize(1.9),
        fontWeight:"bold",
        marginTop:responsiveScreenHeight(1.4)
      }}
      >Password</Text>
         <TextInput
         placeholder="Enter your password here."
         mode="flat"
         outlineColor="#DDDDDD"
         activeOutlineColor="#648DDB"
         secureTextEntry={showPassword?false:true}
         cursorColor="#648DDB"
         activeUnderlineColor="#648DDB"
         autoFocus={false}
         onFocus={()=> setShowFillLock(false)}
         onBlur={()=>setShowFillLock(true)}
         underlineColor="#648DDB"
         right={<TextInput.Icon
         icon={showPassword ? "eye" : "eye-off"}
         onPress={()=>setShowPassword(!showPassword)}
        />}
         left={<TextInput.Icon icon={showFillLock?"lock-outline":"lock"} />}
         style={{
          marginTop:responsiveScreenHeight(1),
          backgroundColor:"#dee8f7",
          borderCurve:10,
          elevation:4,
          
         }}
        
         />
         <HelperText style={{color:"red",display:showEmailError?"block":"none"}}>You have entered an invalid password.</HelperText>
      </View>

      <View style={{alignItems:"flex-end"}}>
        <TouchableOpacity onPress={goToForgetPassword} >
          <Text style={{fontWeight:"600",color:"#648DDB",marginVertical:responsiveScreenHeight(1.2)}}>Forget Password?</Text>
        </TouchableOpacity>
      </View>


      <TouchableOpacity 
      onPress={()=>{
        router.push({
          pathname:"/ai_bot"
        })
      }}
       rippleColor="red"  style={{backgroundColor:"#648DDB",padding:16,alignItems:"center",borderRadius:responsiveScreenHeight(1),elevation:4,}}>
         <Text style={{color:"white",fontSize:responsiveFontSize(1.9),fontWeight:"bold"}}>L O G I N</Text>
      </TouchableOpacity>

      <View style={{marginVertical:responsiveScreenHeight(3.5)}}>
      <View style={{backgroundColor:"#EEEEEE",height:responsiveScreenHeight(.2),overflow:"visible"}}>
        
        </View>
      <View style={{alignItems:"center"}}>
      <Text style={{textAlign:"center",marginTop:responsiveScreenHeight(-1.3),fontSize:responsiveFontSize(1.8), backgroundColor:"white",width:"10%"}}>Or</Text>
      
      </View>
      </View>


      

      <TouchableOpacity 
      
      
      style={{alignItems:"center",alignItems:"center",flexDirection:"row",justifyContent:"center",gap:responsiveScreenWidth(2),borderWidth:2,padding:responsiveScreenWidth(3),borderColor:"#DDDDDD",borderRadius:responsiveScreenWidth(2)}}>
      <Entypo name="mobile" color="#648DDB" size={24} />
      <Text style={{fontSize:responsiveFontSize(1.9)}}>Login with Phone Number</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems:"center",marginTop:responsiveScreenHeight(2)}}>
        <Text style={{fontSize:responsiveFontSize(1.9),}}>Don't have an account? <Link href="signup" style={{color:"#648DDB",fontWeight:"bold"}}>Sign Up</Link></Text>
      </TouchableOpacity>

      <Text style={{textAlign:"center",marginTop:responsiveScreenHeight(2),fontSize:responsiveFontSize(1.9)}}>0.1.0</Text>

      

      
      

     
    </View>

  );
};



const styles = StyleSheet.create({
  container: {
    height: responsiveScreenHeight(100),
    backgroundColor: "white",
  },
  loginContainer: {
    height: responsiveScreenHeight(5),
    backgroundColor: "transparent",
    marginTop: responsiveScreenHeight(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: responsiveScreenWidth(6),
    borderBottomColor: "#648DDB",
  },
  smallContainer: {
    width: "35%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  smallContainerText: {
    fontSize: responsiveFontSize(2),
    fontWeight: "bold",
    color: "#648DDB",
  },
  loginFormContainer: {
    backgroundColor: "transparent",
    marginTop: responsiveScreenHeight(1),
    paddingHorizontal: responsiveScreenWidth(7.5),
  },
  
});
