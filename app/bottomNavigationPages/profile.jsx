import {View,Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile(){
    return<>
    <SafeAreaView style={{justifyContent:"center",alignItems:"center"}}>
    <Text style={{fontWeight:"bold"}}>Profile</Text>
    </SafeAreaView>
    </>
}