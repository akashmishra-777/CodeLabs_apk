import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet,FlatList } from "react-native";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";


// import { Container } from './styles';

const PostLoading = () => {
  return <>
  
  <FlatList
  data={[1,2,3]}
  renderItem={()=>{
    return <>
    <View style={styles.card}>
            <View style={styles.headOfPost}>
              <View style={styles.headInternalView1}>
                <Text
                  style={styles.cardProfileImg}></Text>

                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#09334E",
                        fontSize: responsiveFontSize(1.8),
                        fontFamily:"myfont",
                        letterSpacing:.5,
                        backgroundColor:"#EEE",
                        width:responsiveScreenWidth(55),
                        borderRadius:70
                        
                      }}
                    >
                      {" "}
                    </Text>
                
                  </View>

                  <Text
                      style={{
                        fontWeight: "bold",
                        color: "#09334E",
                        fontSize: responsiveFontSize(1.8),
                        fontFamily:"myfont",
                        letterSpacing:.5,
                        backgroundColor:"#EEE",
                        width:100,
                        borderRadius:70,
                        marginTop:responsiveScreenHeight(.5)
                        
                      }}
                    >
                      {" "}
                    </Text>
                    
                </View>
              </View>

              <View style={styles.headInternalView2}>
                <TouchableOpacity>
                  <Text style={{
                    backgroundColor:"#EEE",
                    color:"#EEE",
                    height:responsiveScreenHeight(4),
                    borderRadius:100
                  }}>o</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                paddingHorizontal: responsiveScreenWidth(2),
                paddingVertical: responsiveScreenHeight(0.5),
                
              }}
            >
              





                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#09334E",
                        fontSize: responsiveFontSize(1.8),
                        fontFamily:"myfont",
                        letterSpacing:.5,
                        backgroundColor:"#EEE",
                        width:responsiveScreenWidth(90),
                        borderRadius:4,
                        marginTop:responsiveScreenHeight(.5)
                        
                      }}
                    >
                      {" "}
                    </Text>
                    
                  
            </View>

            <View style={{ marginTop: responsiveScreenHeight(1),backgroundColor:"#EEE",height:responsiveScreenHeight(22) }}>
              
            </View>

            <View style={styles.engagement}>
              <View style={{ flexDirection: "row",width:"100%",justifyContent:"space-between" }}>
                

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 5,
                    paddingVertical: 6,
                    borderRadius: 10,
                    
                  }}
                >
                 

                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    
                <Text style={{
                     backgroundColor:"#EEE",
                     width:responsiveScreenWidth(30),
                     height:responsiveScreenHeight(2),
                     borderRadius:4
                }}> {" "}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 5,
                    paddingVertical: 6,
                    borderRadius: 10,
                    
                  }}
                >
                 

                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    
                <Text style={{
                     backgroundColor:"#EEE",
                     width:responsiveScreenWidth(30),
                     height:responsiveScreenHeight(2),
                     borderRadius:4
                }}> {" "}</Text>
                  </View>
                </TouchableOpacity>
              </View>

             


            </View>

            {/* View all the comments section and post creation time */}

           </View>
    </>
  }}
  />
  
  </>
}

export default PostLoading;



const styles = new StyleSheet.create({
    card: {
      backgroundColor: "white",
      marginBottom: responsiveScreenHeight(.8),
      marginTop: responsiveScreenHeight(1),
      borderBottomWidth: 1,
      borderBottomColor: "#EEE",
    },
    cardProfileImg: {
      marginHorizontal: responsiveScreenWidth(2.5),
      backgroundColor: "#EEE",
      width:responsiveScreenWidth(12.2),
      height:responsiveScreenWidth(12.2),
      borderRadius:50
    },
    headInternalView1: {
      flexDirection: "row",
      alignItems: "center",
      width: responsiveScreenWidth(85),
    },
    headInternalView2: {
      width: responsiveScreenWidth(15),
      justifyContent: "flex-end",
      alignItems: "flex-end",
      paddingRight: responsiveScreenWidth(3),
    },
    headOfPost: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    engagement: {
      backgroundColor: "transparent",
      marginTop: 0,
      padding: responsiveScreenWidth(1),
      flexDirection: "row",
      justifyContent: "space-between",
    },
   
  });
  