import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function SignupForm() {
  const router = useRouter();
const [showNullError,setShowNullError] = useState(false)
  const [selectedState, setSelectedState] = useState(null);
  const [district,setDistrict] =useState(null)
  const [block,setBlock] =useState(null)
  const [village,setVillage] =useState(null)
  const {name,email,phone,dob} = useLocalSearchParams()


  function nextHandler(){
    
    
    if(selectedState == null || district == null || block == null || village == null){
      setShowNullError(true)
    }else{
      router.push({
        pathname:"signup/username",
        params:{
          name:name,
          email:email,
          phone:phone,
          dob:dob,
          address: selectedState+", "+district+", "+block+", "+village
        }
      })
    }
    
    
  }



  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >

<StatusBar style="dark"  />
      <View
        style={[
          styles.signupFormContainer,
          {
            marginTop: responsiveScreenHeight(0),
            backgroundColor: "white",
            width: "100%",
          },
        ]}
      >
        {/* Label */}
        {/* Closing of label */}
        <View
          style={{
            backgroundColor: "white",
            height: responsiveScreenHeight(7),
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: responsiveFontSize(2.5), fontWeight: "bold" }}>
          Where are you from?
        </Text>
        <Text
          style={{
            fontSize: responsiveFontSize(1.6),
            color: "#777777",
            marginTop: responsiveScreenHeight(0.5),
          }}
        >
          Choose your address, so that we can contact you whenever needed. We will not share your address with anyone.
        </Text>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            gap: responsiveScreenWidth(3),
            marginVertical: responsiveScreenHeight(1),
          }}
        >
          <Text
            style={{ fontSize: responsiveFontSize(1.8), fontWeight: "bold" }}
          >
            {" "}
            Choose State
          </Text>
          
          <View
            style={{
              backgroundColor: "#fefafa",
              borderRadius: responsiveScreenWidth(2),
              borderWidth: 1,
              borderColor: "#fefafa",
              padding: responsiveScreenWidth(0),
              elevation:4,
            }}
          >
            <Picker
              selectedValue={selectedState}
              onValueChange={(data) => {
                setSelectedState(data);
                setShowNullError(false)
              }}
              style={{}}
            >
              <Picker.Item label="Null" value="Null" />
              <Picker.Item label="Andhra Pradesh" value="Andhra Pradesh" />
              <Picker.Item
                label="Arunachal Pradesh"
                value="Arunachal Pradesh"
              />
              <Picker.Item label="Assam" value="Assam" />
              <Picker.Item label="Bihar" value="Bihar" />
              <Picker.Item label="Chhattisgarh" value="Chhattisgarh" />
              <Picker.Item label="Goa" value="Goa" />
              <Picker.Item label="Gujarat" value="Gujarat" />
              <Picker.Item label="Haryana" value="Haryana" />
              <Picker.Item label="Himachal Pradesh" value="Himachal Pradesh" />
              <Picker.Item
                label="Jammu and Kashmir"
                value="Jammu and Kashmir"
              />

              <Picker.Item label="Jharkhand" value="Jharkhand" />
              <Picker.Item label="Karnataka" value="Karnataka" />
              <Picker.Item label="Kerala" value="Kerala" />
              <Picker.Item label="Madhya Pradesh" value="Madhya Pradesh" />
              <Picker.Item label="Maharashtra" value="Maharashtra" />
              <Picker.Item label="Manipur" value="Manipur" />
              <Picker.Item label="Meghalaya" value="Meghalaya" />
              <Picker.Item label="Mizoram" value="Mizoram" />
              <Picker.Item label="Nagaland" value="Nagaland" />
              <Picker.Item label="Odisha" value="Odisha" />
              <Picker.Item label="Punjab" value="Punjab" />
              <Picker.Item label="Rajasthan" value="Rajasthan" />
              <Picker.Item label="Sikkim" value="Sikkim" />
              <Picker.Item label="Tamil Nadu" value="Tamil Nadu" />
              <Picker.Item label="Telangana" value="Telangana" />
              <Picker.Item label="Tripura" value="Tripura" />
              <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
              <Picker.Item label="Uttarakhand" value="Uttarakhand" />
              <Picker.Item label="West Bengal" value="West Bengal" />
            </Picker>

           
          </View>
      

          

          <TextInput
            placeholder="Enter the name of your district."
            keyboardType="text"
            outlineColor="#DDDDDD"
            value={district}
            activeOutlineColor="#648DDB"
            onChangeText={(text)=>{setDistrict(text); setShowNullError(false)}}
            mode="outlined"
            label={"District"}
            // left={<TextInput.Icon icon="account" />}
            style={{
              backgroundColor: "#fefafa",
              elevation: 10,
              marginTop: responsiveScreenHeight(-0.4),
              elevation: 4,
            }}
          />



          <TextInput
            placeholder="Enter the name of your block."
            keyboardType="text"
            outlineColor="#DDDDDD"
            activeOutlineColor="#648DDB"
            mode="outlined"
            value={block}
            onChangeText={(text)=>{setBlock(text); setShowNullError(false)}}
            label={"Block"}
            // left={<TextInput.Icon icon="account" />}
            style={{
              backgroundColor: "#fefafa",
              elevation: 10,
              marginTop: responsiveScreenHeight(-0.4),
            }}
          />



          <TextInput
            placeholder="Enter the name of your village."
            keyboardType="text"
            outlineColor="#DDDDDD"
            value={village}
            onChangeText={(text)=>{setVillage(text); setShowNullError(false)}}
            activeOutlineColor="#648DDB"
            mode="outlined"
            label={"Village"}
            // left={<TextInput.Icon icon="account" />}
            style={{
              backgroundColor: "#fefafa",
              elevation: 10,
              marginTop: responsiveScreenHeight(-0.4),
              marginBottom:responsiveScreenHeight
            }}
          />

{showNullError?<Text style={{color:"red",fontSize:responsiveFontSize(1.6),fontWeight:700}}>  All the fields are required.</Text>:null}


          <Text
            style={{
              fontSize: responsiveFontSize(1.6),
              color: "#777777",
            }}
          >
            Make sure all the entered details are correct and verified. 
          </Text>
          
        </View>

        <TouchableOpacity
          onPress={nextHandler}
          style={{
            backgroundColor: "#648DDB",
            padding: responsiveScreenWidth(3.8),
            borderRadius: responsiveScreenWidth(2),
            marginTop: responsiveScreenHeight(.5),
            alignItems: "center",
            elevation: 4,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: responsiveFontSize(1.9),
              fontWeight: "bold",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  signupFormContainer: {
    backgroundColor: "transparent",
    marginTop: responsiveScreenHeight(1),
    paddingHorizontal: responsiveScreenWidth(5),
  },
});
