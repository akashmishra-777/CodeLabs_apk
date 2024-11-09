
import {Stack} from 'expo-router'
import { TouchableOpacity } from 'react-native'
import {View,Text} from 'react-native'
import { Avatar } from 'react-native-paper'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { useFonts } from 'expo-font'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {

  const [loaded] = useFonts({
    myfont:require("../assets/fonts/SF-Pro.ttf")
  })


  if(!loaded){
    return null;
  }



  return (
    
    <Stack>
        <Stack.Screen name='index' options={{headerShown: false}} />
      <Stack.Screen name='(tabs)' options={{headerShown: false}} />
        <Stack.Screen name='(chats)' options={{headerShown: false}} />
        <Stack.Screen name='signup/index' options={{headerShown: false}} />
        <Stack.Screen name='signup/email' options={{headerShown: false}} />
        <Stack.Screen name='signup/phone' options={{headerShown: false}} />
        <Stack.Screen name='signup/dob' options={{headerShown: false}} />
        <Stack.Screen name='signup/address' options={{headerShown: false}} />
        <Stack.Screen name='signup/username' options={{headerShown: false}} />
        <Stack.Screen name='signup/password' options={{headerShown: false}} />
        <Stack.Screen name='forgetPassword/mainForgetPassword' options={{headerShown: false}} />
        <Stack.Screen name='otp/otpVerification' options={{headerShown: false}} />
        <Stack.Screen name='ai_bot' options={{headerShown: false}} />
        <Stack.Screen name='forgetPassword/changePassword' options={{headerShown: false}} />


        <Stack.Screen 
        name='chat/mainChat' 
        options={{
          headerTitle:()=> <HeaderLogo />,
          headerRight:()=><AudioVideo/>
          }} />



    </Stack>
  )
}




function HeaderLogo(){

  const [loaded] = useFonts({
    myfont:require("../assets/fonts/SF-Pro.ttf")
  })


  if(!loaded){
    return null;
  }

  return<>
  <View style={{
    flexDirection:"row",
    gap:responsiveScreenWidth(2),
    marginLeft:responsiveScreenWidth(-7)
  }}>


  <View>
    <TouchableOpacity
    style={{
      borderWidth:2,
      borderRadius:50,
      padding:responsiveScreenWidth(.3),
      borderColor:"#DDD",
      
    }}
    >

      <Avatar.Image 
      size={responsiveScreenHeight(5.3)}
      style={{
        backgroundColor:"transparent",
      }}
      source={{uri:"https://pakistani.pk/uploads/reviews/photos/original/d4/e9/82/Sunny20Deol202-16-1451655123.jpg"}} />
    </TouchableOpacity>
  </View>



  <View 
  style={{
    justifyContent:"center",
  }}
  >
    <Text 
    style={{
      fontSize:responsiveScreenFontSize(2.15),
      fontWeight:"500",
      fontFamily:"myfont"

    }}
    >Akash Mishra</Text>


    <Text
    style={{
      marginTop:responsiveScreenHeight(-.7),
      marginBottom:responsiveScreenHeight(.6),
      fontSize:responsiveScreenFontSize(1.7),
      color:"#09334E"
    }}
    >online</Text>
  </View>


  </View>
  </>
}



function AudioVideo(){
  return<>
  <View style={{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:responsiveScreenWidth(5.2)
  }}>

     <TouchableOpacity>
     <MaterialIcons name="call" size={responsiveScreenFontSize(3.4)} color="#09334E" />
     </TouchableOpacity>

     <TouchableOpacity>
     <FontAwesome name="video-camera" size={responsiveScreenFontSize(2.9)} color="#09334E" />
     </TouchableOpacity>

     <TouchableOpacity>
     <MaterialCommunityIcons name="dots-vertical" size={responsiveScreenFontSize(3.5)} color="#09334E" />
     </TouchableOpacity>

  </View>
  </>
}