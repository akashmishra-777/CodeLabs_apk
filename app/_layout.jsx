
import {Stack} from 'expo-router'

export default function RootLayout() {
  return (
    
    <Stack>
        <Stack.Screen name='index' options={{headerShown: false}} />
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
        <Stack.Screen name='Home' options={{headerShown: false}} />
    </Stack>
  )
}
