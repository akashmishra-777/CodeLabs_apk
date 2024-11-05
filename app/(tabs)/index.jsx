import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar, Icon, Card } from "react-native-paper";
import AntIcon from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";




export default function index() {

 const router = useRouter()

  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "white",
          zIndex: 0,
          marginTop: 1,
          padding: 0,
        }}
      >

        
        <ScrollView style={{ marginTop: responsiveScreenHeight(-4) }}>

        <TouchableOpacity onPress={()=>{
          router.push("ai_bot")
        }}>
          <Text>Click me</Text>
        </TouchableOpacity>


          <View style={styles.card}>
            <View style={styles.headOfPost}>
              <View style={styles.headInternalView1}>
                <Avatar.Image
                  style={styles.cardProfileImg}
                  source={{
                    uri: "https://imagevars.gulfnews.com/2019/04/23/190423_sunny_deol_16a4a35474a_large.jpg",
                  }}
                  size={responsiveScreenWidth(11.8)}
                />

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
                      }}
                    >
                      Akash Mishra {""}
                    </Text>
                    {/* Blue tick icon */}
                    <Icon source={"check-decagram"} size={17} color="#648DDB" />
                    {/* Closing of blue tick icon */}
                  </View>

                  <Text
                    style={{
                      fontWeight: "400",
                      color: "#606770",
                      fontSize: responsiveFontSize(1.6),
                    }}
                  >
                    _codelabs_
                  </Text>
                </View>
              </View>

              <View style={styles.headInternalView2}>
                <TouchableOpacity>
                  <Icon source={"dots-vertical"} size={27} color="#09334E" />
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
                style={{ fontSize: responsiveFontSize(1.9), color: "#606770" }}
              >
                Today, Mr sunny devol explored about artificial new of
                intelligence. He said that in the emerging world of thechnoloy
                we can build the best future.
              </Text>
            </View>

            <Card style={{ marginTop: responsiveScreenHeight(1) }}>
              <Card.Cover
                style={{ borderRadius: 0 }}
                source={{
                  uri: "https://i.ytimg.com/vi/eluSJoQhkpE/maxresdefault.jpg",
                }}
              />
            </Card>

            <View style={styles.engagement}>
              <View style={{ flexDirection: "row" }}>
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
                  <AntIcon name="hearto" size={22} />

                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: responsiveFontSize(1.8),
                      }}
                    >
                      {" "}
                      152K
                    </Text>
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
                  <Feather name="message-circle" size={22} />

                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: responsiveFontSize(1.8),
                      }}
                    >
                      {" "}
                      45K
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  alignSelf: "flex-end",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  paddingTop: 6,
                  borderRadius: 10,
                }}
              >
                <TouchableOpacity>
                  <Icon source={"bookmark-outline"} size={26} />
                </TouchableOpacity>

                <Text> </Text>

                <TouchableOpacity>
                  <Icon source={"share-variant-outline"} size={25} />
                </TouchableOpacity>

              </View>


            </View>

            {/* View all the comments section and post creation time */}

            <View
              style={{
                paddingHorizontal: 10,
                paddingBottom: 8,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: responsiveScreenHeight(0.5),
              }}
            >
              <TouchableOpacity>
                <Text style={{ color: "#606770" }}>View all the comments</Text>
              </TouchableOpacity>

              <Text style={{ color: "#606770" }}>5 seconds ago</Text>
            </View>
          </View>

          {/* Closing of view all the comments and post creation time  */}

          <View style={styles.card}>
            <View style={styles.headOfPost}>
              <View style={styles.headInternalView1}>
                <Avatar.Image
                  style={styles.cardProfileImg}
                  source={{
                    uri: "https://imagevars.gulfnews.com/2019/04/23/190423_sunny_deol_16a4a35474a_large.jpg",
                  }}
                  size={responsiveScreenWidth(11.8)}
                />

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
                      }}
                    >
                      Akash Mishra {""}
                    </Text>
                    {/* Blue tick icon */}
                    <Icon source={"check-decagram"} size={17} color="#648DDB" />
                    {/* Closing of blue tick icon */}
                  </View>

                  <Text
                    style={{
                      fontWeight: "400",
                      color: "#606770",
                      fontSize: responsiveFontSize(1.6),
                    }}
                  >
                    _codelabs_
                  </Text>
                </View>
              </View>

              <View style={styles.headInternalView2}>
                <TouchableOpacity>
                  <Icon source={"dots-vertical"} size={27} color="#09334E" />
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
                style={{ fontSize: responsiveFontSize(1.9), color: "#606770" }}
              >
                Today, Mr sunny devol explored about artificial new of
                intelligence. He said that in the emerging world of thechnoloy
                we can build the best future.
              </Text>
            </View>

            <Card style={{ marginTop: responsiveScreenHeight(1) }}>
              <Card.Cover
                style={{ borderRadius: 0 }}
                source={{
                  uri: "https://lp.simplified.com/siteimages/design/hooks-your-audience.png",
                }}
              />
            </Card>

            <View style={styles.engagement}>
              <View style={{ flexDirection: "row" }}>
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
                  <AntIcon name="hearto" size={22} />

                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: responsiveFontSize(1.8),
                      }}
                    >
                      {" "}
                      152K
                    </Text>
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
                  <Feather name="message-circle" size={22} />

                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: responsiveFontSize(1.8),
                      }}
                    >
                      {" "}
                      45K
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  alignSelf: "flex-end",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  paddingTop: 6,
                  borderRadius: 10,
                }}
              >
                <TouchableOpacity>
                  <Icon source={"bookmark-outline"} size={26} />
                </TouchableOpacity>

                <Text> </Text>

                <TouchableOpacity>
                  <Icon source={"share-variant-outline"} size={25} />
                </TouchableOpacity>

              </View>


            </View>

            {/* View all the comments section and post creation time */}

            <View
              style={{
                paddingHorizontal: 10,
                paddingBottom: 8,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: responsiveScreenHeight(0.5),
              }}
            >
              <TouchableOpacity>
                <Text style={{ color: "#606770" }}>View all the comments</Text>
              </TouchableOpacity>

              <Text style={{ color: "#606770" }}>5 seconds ago</Text>
            </View>
          </View>

          {/* Closing of view all the comments and post creation time  */}
          <View style={styles.card}>
            <View style={styles.headOfPost}>
              <View style={styles.headInternalView1}>
                <Avatar.Image
                  style={styles.cardProfileImg}
                  source={{
                    uri: "https://imagevars.gulfnews.com/2019/04/23/190423_sunny_deol_16a4a35474a_large.jpg",
                  }}
                  size={responsiveScreenWidth(11.8)}
                />

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
                      }}
                    >
                      Akash Mishra {""}
                    </Text>
                    {/* Blue tick icon */}
                    <Icon source={"check-decagram"} size={17} color="#648DDB" />
                    {/* Closing of blue tick icon */}
                  </View>

                  <Text
                    style={{
                      fontWeight: "400",
                      color: "#606770",
                      fontSize: responsiveFontSize(1.6),
                    }}
                  >
                    _codelabs_
                  </Text>
                </View>
              </View>

              <View style={styles.headInternalView2}>
                <TouchableOpacity>
                  <Icon source={"dots-vertical"} size={27} color="#09334E" />
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
                style={{ fontSize: responsiveFontSize(1.9), color: "#606770" }}
              >
                Today, Mr sunny devol explored about artificial new of
                intelligence. He said that in the emerging world of thechnoloy
                we can build the best future.
              </Text>
            </View>

            <Card style={{ marginTop: responsiveScreenHeight(1) }}>
              <Card.Cover
                style={{ borderRadius: 0 }}
                source={{
                  uri: "https://www.vaslou.com/wp-content/uploads/2023/04/best-AI-social-media-post-generator.webp",
                }}
              />
            </Card>

            <View style={styles.engagement}>
              <View style={{ flexDirection: "row" }}>
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
                  <AntIcon name="hearto" size={22} />

                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: responsiveFontSize(1.8),
                      }}
                    >
                      {" "}
                      152K
                    </Text>
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
                  <Feather name="message-circle" size={22} />

                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: responsiveFontSize(1.8),
                      }}
                    >
                      {" "}
                      45K
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  alignSelf: "flex-end",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  paddingTop: 6,
                  borderRadius: 10,
                }}
              >
                <TouchableOpacity>
                  <Icon source={"bookmark-outline"} size={26} />
                </TouchableOpacity>

                <Text> </Text>

                <TouchableOpacity>
                  <Icon source={"share-variant-outline"} size={25} />
                </TouchableOpacity>

              </View>


            </View>

            {/* View all the comments section and post creation time */}

            <View
              style={{
                paddingHorizontal: 10,
                paddingBottom: 8,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: responsiveScreenHeight(0.5),
              }}
            >
              <TouchableOpacity>
                <Text style={{ color: "#606770" }}>View all the comments</Text>
              </TouchableOpacity>

              <Text style={{ color: "#606770" }}>5 seconds ago</Text>
            </View>
          </View>

          {/* Closing of view all the comments and post creation time  */}

        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = new StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  cardProfileImg: {
    marginHorizontal: responsiveScreenWidth(2.5),
    backgroundColor: "transparent",
    elevation: 4,
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
    paddingRight: responsiveScreenWidth(2),
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
