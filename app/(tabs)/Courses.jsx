import {View,Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Library(){
    return<>
    <SafeAreaView style={{justifyContent:"center",alignItems:"center",height:"75%"}}>
    <Text style={{fontWeight:"500"}}>COurses</Text>
    </SafeAreaView>
    </>
}