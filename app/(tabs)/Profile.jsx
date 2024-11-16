import {View,Text,StyleSheet,Image,ScrollView} from 'react-native'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Avatar} from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import {LinearGradient} from 'expo-linear-gradient'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';




export default function Profile(){
    const [bioLines,setBioLines] = useState(true)




    return<>
    <StatusBar style='dark'/>

   

  <ScrollView style={{paddingBottom:responsiveScreenHeight(20),backgroundColor:"#FFF"}}>

  <View style={styles.main}>
      


      <View style={styles.mainHead}>
  
          <View style={{width:responsiveScreenWidth(23), height:responsiveScreenWidth(23),justifyContent:"center",alignItems:"center",borderWidth:2,borderRadius:100,borderColor:"#DDD",borderStyle:"dashed"}}>
  
        <TouchableOpacity>
  
        <Avatar.Image size={responsiveScreenWidth(20)} style={{backgroundColor:"transparent"}} source={{uri:"https://wallpapers.com/images/hd/sunny-deol-candid-portrait-qss3djn54k2wt4wa.jpg"}}/>
  
  
        </TouchableOpacity>
  
          </View>
  
  
           <View style={{flexDirection:"row",width:responsiveScreenWidth(75),justifyContent:"space-evenly",alignItems:"center"}}>
  
  
  
           <TouchableOpacity>
  
           <View style={styles.countNums}>
              <Text  style={{fontWeight:"500",fontSize:responsiveScreenFontSize(2)}}>13</Text>
              <Text style={{fontWeight:"500",fontSize:responsiveScreenFontSize(1.95)}}>Projects</Text>
           </View>
  
           </TouchableOpacity>
           
          <TouchableOpacity>
            <View style={styles.countNums}>
              <Text  style={{fontWeight:"500",fontSize:responsiveScreenFontSize(2)}}>24K</Text>
              <Text style={{fontWeight:"500",fontSize:responsiveScreenFontSize(1.95)}}>followers</Text>
            </View>
  
           </TouchableOpacity>
           
  
          <TouchableOpacity>
  
           <View style={styles.countNums}>
              <Text  style={{fontWeight:"500",fontSize:responsiveScreenFontSize(2)}}>25K</Text>
              <Text style={{fontWeight:"500",fontSize:responsiveScreenFontSize(1.95)}}>following</Text>
           </View>
  
          </TouchableOpacity>
  
           
  
  
  
           </View>
  
  
          
          
  
  
      </View>
  
  
      <View style={styles.nameSection}>
      <Text style={{fontWeight:"500",fontSize:responsiveScreenFontSize(2),letterSpacing:.3}}>Akash Mishra</Text>
  
             <View style={{flexDirection:"row",gap:responsiveScreenWidth(2),marginTop:responsiveScreenHeight(.6),marginLeft:responsiveScreenWidth(-.5)}}>
                 
               
  
                  <Text style={{fontSize:responsiveScreenFontSize(1.8),paddingVertical:responsiveScreenHeight(.5),elevation:2,shadowRadius:100,paddingHorizontal:responsiveScreenHeight(.7),borderRadius:7,color:"#4c669f",backgroundColor:"#f7f4f4",fontWeight:"500",marginTop:responsiveScreenHeight(.1)}}>Software Engineer</Text>
  
  
                 
  
           
              
              <Text style={{fontSize:responsiveScreenFontSize(1.8),elevation:2,paddingVertical:responsiveScreenHeight(.5),paddingHorizontal:responsiveScreenHeight(.7),borderRadius:7,color:"#4c669f",backgroundColor:"#EEE",fontWeight:"500",marginTop:responsiveScreenHeight(.1)}}>Web Developer</Text>
  
            
                  
  
                  
  
                 
                
             </View>
  
  
  
  
             <View style={{marginTop:responsiveScreenHeight(.5)}}>
            
            <TouchableOpacity onPress={()=>setBioLines(!bioLines)}>
  
            <Text numberOfLines={bioLines?2:0} style={{color:"grey",fontSize:responsiveScreenFontSize(1.9),maxWidth:responsiveScreenWidth(100)}}>Hello, I am Akash Mishra. I am a web developer who has developer approx 100 of websites in one elevation:4, elevation:4, elevation:4, </Text>
            </TouchableOpacity>
  
             </View>
  
  
      </View>
  
  
  
  
   
  
  
      <View style={{marginTop:responsiveScreenHeight(.8),marginLeft:responsiveScreenWidth(3),flexDirection:"row",alignItems:'center',gap:responsiveScreenWidth(.8)}}>
            <AntDesign name="github" size={responsiveScreenHeight(2.4)} color="#09334E" />
            <TouchableOpacity>
  
            <Text numberOfLines={bioLines?2:0} style={{paddingHorizontal:responsiveScreenWidth(2),borderRadius:7,backgroundColor:"#f7f4f4",fontSize:responsiveScreenFontSize(1.85),fontWeight:"500",maxWidth:responsiveScreenWidth(100),color:"#4c669f"}}>https://github.com/akashmishra-777</Text>
            </TouchableOpacity>
  
             </View>



             <View style={{marginTop:responsiveScreenHeight(.8),marginLeft:responsiveScreenWidth(3),flexDirection:"row",alignItems:'center',gap:responsiveScreenWidth(.8)}}>
           
            <FontAwesome name="download" size={responsiveScreenHeight(2.4)} color="#09334E" />
            <TouchableOpacity>
  
            <Text numberOfLines={bioLines?2:0} style={{paddingHorizontal:responsiveScreenWidth(2),borderRadius:7,backgroundColor:"#f7f4f4",fontSize:responsiveScreenFontSize(1.85),fontWeight:"500",maxWidth:responsiveScreenWidth(100),color:"#4c669f"}}>Download Resume / CV</Text>
            </TouchableOpacity>
  
             </View>
  
  
  
      <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:responsiveScreenHeight(2)}}>
  
  
      <TouchableOpacity>
  
  <LinearGradient
    // Button Linear Gradient
    colors={['#4c669f', '#3b5998', '#192f6a']}
    style={{flexDirection:"row",gap:responsiveWidth(1.3),padding:responsiveScreenWidth(2.5),width:responsiveScreenWidth(28),borderRadius:10,alignItems:"center",justifyContent:"center"}}>
        <Entypo name="folder-images" size={24} color="#eee" />
    <Text style={{color:"#eee",fontWeight:"700"}}>Posts</Text>
  </LinearGradient>
  
  
  </TouchableOpacity>
  
  
        <TouchableOpacity>
  
  <LinearGradient
    // Button Linear Gradient
    colors={['#4c669f', '#3b5998', '#192f6a']}
    style={{flexDirection:"row",gap:responsiveWidth(1.3),padding:responsiveScreenWidth(2.5),width:responsiveScreenWidth(28),borderRadius:10,alignItems:"center",justifyContent:"center"}}>
        
        <Entypo name="folder-video" size={24} color="#eee" />
    <Text style={{color:"#eee",fontWeight:"700",}}>Shorts</Text>
  </LinearGradient>
  
  
  </TouchableOpacity>
  
  
        <TouchableOpacity>
  
        <LinearGradient
          // Button Linear Gradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{flexDirection:"row",gap:responsiveWidth(1.3),padding:responsiveScreenWidth(2.5),width:responsiveScreenWidth(28),borderRadius:10,alignItems:"center",justifyContent:"center"}}>
              <Ionicons name="hardware-chip-sharp" size={24} color="#eee" />
          <Text style={{color:"#eee",fontWeight:"700",}}>Projects</Text>
        </LinearGradient>
  
  
        </TouchableOpacity>
  
  
      </View>
  
  
  
      <View style={[[styles.sections,{marginTop:responsiveScreenHeight(0)}]]}>
          
      <Text style={{fontWeight:"500",fontSize:responsiveScreenFontSize(2.3),marginBottom:responsiveScreenHeight(1),borderBottomWidth:1.5,paddingBottom:responsiveScreenHeight(1),borderRadius:7,borderColor:"#4c669f"}}>Skills</Text>
  
      <View style={{flexDirection:"row",flexWrap:"wrap",gap:responsiveScreenWidth(2),marginTop:responsiveScreenHeight(.8),}}  >
  
        <Text style={[styles.skillText]}>HTML</Text> 
  
         <Text style={[styles.skillText]}>React js</Text>
  
  
         <Text style={[styles.skillText]}>JavaScript</Text>
  
  
         <Text style={[styles.skillText]}>Bootstrap</Text>
  
  
         <Text style={[styles.skillText]}>JQuery</Text>
  
  
         <Text style={[styles.skillText]}>React Native</Text>
  
  
         <Text style={[styles.skillText]}>Node.js</Text>
  
  
         <Text style={[styles.skillText]}>SQL</Text>

         <Text style={[styles.skillText,{textAlignVertical:"center"}]}>AI/ML</Text>
  
         
  
  
  
         <View style={[styles.skillText]}>
        
        <TouchableOpacity>
        <Text style={{fontWeight:"500",color:"#4c669f"}} >See More </Text>
        </TouchableOpacity>
  
         <AntDesign name="arrowright" size={responsiveScreenWidth(6)} color="#4c669f" />
         </View>
  
      </View>
      
      </View>
  
  
     
    <View style={styles.section}>
      <Text style={[styles.recentPostText,{borderBottomWidth:1.5,paddingBottom:responsiveScreenHeight(1),borderRadius:7,borderColor:"#4c669f"}]}>Ongoing Projects</Text>
  
      <View style={{
        padding:responsiveScreenWidth(2),
        borderColor:"#4c669f",
        marginTop:responsiveScreenHeight(1),
        flexDirection:"row",
        alignItems:"center",
        gap:responsiveScreenWidth(2)
  
      }}>
        <Image resizeMode='center'  style={{height:responsiveScreenHeight(7.5),width:responsiveScreenWidth(27),borderWidth:1.5,borderColor:"#DDD",borderRadius:7}} source={{uri:"https://media.designrush.com/agencies/295659/conversions/CodeLabs-logo-profile.jpg"}}/>

        <View>

        <TouchableOpacity>

        <Text style={{fontWeight:"500",color:"#4c669f",fontSize:responsiveScreenFontSize(2.2)}}>CodeLabs</Text>
        
        </TouchableOpacity>
          
        <Text numberOfLines={2} style={{width:responsiveScreenWidth(65),color:"grey",fontSize:responsiveScreenFontSize(1.9)}}>I was working as a full stack developer in wipro. I have developed a lot of websites and web apps.</Text>


        </View>

      </View>



      <View style={{
        padding:responsiveScreenWidth(2),
        borderColor:"#DDD",
        marginTop:responsiveScreenHeight(1),
        flexDirection:"row",
        alignItems:"center",
        gap:responsiveScreenWidth(2)
  
      }}>
        <Image resizeMode='center'  style={{height:responsiveScreenHeight(7.5),width:responsiveScreenWidth(27),borderWidth:1.5,borderColor:"#DDD",borderRadius:7}} source={{uri:"https://goschooler.com/wp-content/uploads/2021/06/College-Management-Software.png"}}/>

        <View>
        <TouchableOpacity>

        <Text style={{fontWeight:"500",color:"#4c669f",fontSize:responsiveScreenFontSize(2.2)}}>Collage Management</Text>
        
        </TouchableOpacity>
        
          
        <Text numberOfLines={2} style={{width:responsiveScreenWidth(65),color:"grey",fontSize:responsiveScreenFontSize(1.8)}}>Codelabs is a platform where developers can engage, lern and share theri knowledge</Text>


        </View>

      </View>



      <View style={{
        padding:responsiveScreenWidth(2),
        borderColor:"#DDD",
        marginTop:responsiveScreenHeight(1),
        flexDirection:"row",
        alignItems:"center",
        gap:responsiveScreenWidth(2)
  
      }}>
        <Image resizeMode='center'  style={{height:responsiveScreenHeight(7.5),width:responsiveScreenWidth(27),borderWidth:1.5,borderColor:"#DDD",borderRadius:7}} source={{uri:"https://user-images.githubusercontent.com/75016140/180839385-beb267c6-29cb-4db1-905b-3c9105eef865.png"}}/>

        <View>

        <TouchableOpacity>

        <Text style={{fontWeight:"500",color:"#4c669f",fontSize:responsiveScreenFontSize(2.2)}}>Dyanmic Chat App</Text>

        </TouchableOpacity>
        
       
          
        <Text numberOfLines={2} style={{width:responsiveScreenWidth(65),color:"grey",fontSize:responsiveScreenFontSize(1.8)}}>Codelabs is a platform where developers can engage, lern and share theri knowledge</Text>

        

        </View>

      </View>


      <View style={{flexDirection:"row",gap:responsiveScreenWidth(.6),justifyContent:"center",padding:responsiveScreenHeight(1),elevation:1,borderRadius:5,alignItems:"center",backgroundColor:"#eee",marginVertical:responsiveScreenHeight(1)}}>
        
      <TouchableOpacity style={{gap:responsiveScreenWidth(.5),flexDirection:"row",justifyContent:"center",alignItems:"center"}}>

        <Text style={{fontWeight:"500",color:"#4c669f",letterSpacing:.3,fontSize:responsiveScreenFontSize(1.9)}}>See more</Text>

        <AntDesign name="arrowright" style={{marginTop:2}} size={responsiveScreenWidth(5)} color="#4c669f" />

        </TouchableOpacity>

      </View>



  
    </View>
  
  
  


 
  
  
  
    
     
  
  
  
  
  
  
  
  
  
     </View>


     <View style={[styles.section,{marginTop:responsiveScreenHeight(4.5)}]}>
      <Text style={[styles.recentPostText,{borderBottomWidth:1.5,paddingBottom:responsiveScreenHeight(1),borderRadius:7,borderColor:"#4c669f"}]}>Experiences</Text>
  
     


      <View style={{
        padding:responsiveScreenWidth(2),
        borderColor:"#DDD",
        marginTop:responsiveScreenHeight(1),
        flexDirection:"row",
        alignItems:"flex-start",
        gap:responsiveScreenWidth(2)
  
      }}>
        <Image resizeMode='center'  style={{height:responsiveScreenHeight(7.5),width:responsiveScreenWidth(27),borderWidth:1.5,borderColor:"#DDD",borderRadius:7}} source={{uri:"https://images.moneycontrol.com/static-mcnews/2022/08/Wipro-2.png?impolicy=website&width=1600&height=900"}}/>

        <View>

        <TouchableOpacity>

        <Text style={{fontWeight:"500",letterSpacing:.3,color:"#4c669f",fontSize:responsiveScreenFontSize(2.2)}}>Full Stack Developer</Text>

        <Text numberOfLines={2} style={{fontWeight:"500",color:"#4c669f",maxWidth:responsiveWidth(50),fontSize:responsiveScreenFontSize(2),letterSpacing:.3}}>Wipro</Text>

        </TouchableOpacity>
        
       
          
        <Text numberOfLines={2} style={{width:responsiveScreenWidth(65),color:"grey",fontSize:responsiveScreenFontSize(1.8),}}>Codelabs is a platform where developers can engage, lern and share theri knowledge</Text>

        

        </View>

      </View>


   




      <View style={{
        padding:responsiveScreenWidth(2),
        borderColor:"#DDD",
        marginTop:responsiveScreenHeight(1),
        flexDirection:"row",
        alignItems:"flex-start",
        gap:responsiveScreenWidth(2)
  
      }}>
        <Image resizeMode='center'  style={{height:responsiveScreenHeight(7.5),width:responsiveScreenWidth(27),borderWidth:1.5,borderColor:"#DDD",borderRadius:7}} source={{uri:"https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png"}}/>

        <View>

        <TouchableOpacity>

        <Text style={{fontWeight:"500",letterSpacing:.3,color:"#4c669f",fontSize:responsiveScreenFontSize(2.2)}}>Software Engineer</Text>

        <Text numberOfLines={2} style={{fontWeight:"500",color:"#4c669f",maxWidth:responsiveWidth(50),fontSize:responsiveScreenFontSize(2),}}>Google</Text>

        </TouchableOpacity>
        
       
          
        <Text numberOfLines={2} style={{width:responsiveScreenWidth(65),color:"grey",fontSize:responsiveScreenFontSize(1.8),letterSpacing:.3}}>I have worked as a software engineer in Google. My role was to manage and develope AI chatbots using AI/ML to inhance user experiences.</Text>

        

        </View>

      </View>


      <View style={{flexDirection:"row",gap:responsiveScreenWidth(.6),justifyContent:"center",padding:responsiveScreenHeight(1),elevation:1,borderRadius:5,alignItems:"center",backgroundColor:"#eee",marginVertical:responsiveScreenHeight(1)}}>
        
      <TouchableOpacity style={{gap:responsiveScreenWidth(.5),flexDirection:"row",justifyContent:"center",alignItems:"center"}}>

        <Text style={{fontWeight:"500",color:"#4c669f",fontSize:responsiveScreenFontSize(1.9)}}>See more</Text>

        <AntDesign name="arrowright" style={{marginTop:2}} size={responsiveScreenWidth(5)} color="#4c669f" />

        </TouchableOpacity>

      </View>



  
    </View>









  </ScrollView>

   
    </>
}





const styles = new StyleSheet.create({
   
    main:{
        height:responsiveScreenHeight(100),
        backgroundColor:"white",
        marginTop:1,
        paddingBottom:responsiveScreenHeight(5)
    },
    mainHead:{

        // backgroundColor:"#EEE",
        paddingHorizontal:responsiveScreenWidth(2),
        paddingVertical:responsiveScreenWidth(1),
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:responsiveScreenHeight(1.3)
        
    },countNums:{
        justifyContent:"center",
        alignItems:"center"
    },
    nameSection:{
        paddingHorizontal:responsiveScreenWidth(3),
        marginTop:responsiveScreenHeight(.5)

    },
    sections:{
        backgroundColor:"#fff",
        marginTop:responsiveScreenHeight(1),
        marginHorizontal:responsiveScreenWidth(2),
        paddingVertical:responsiveScreenWidth(3),
        paddingHorizontal:responsiveScreenWidth(1),
        borderRadius:5,
        borderBottomColor:"#DDD"
      

    },skillText:{
      paddingVertical:responsiveScreenWidth(1.5),
      flexDirection:"row",                
      paddingHorizontal:responsiveScreenWidth(3),
      borderRadius:5,
      elevation:2,  
      backgroundColor:"#eee", 
      justifyContent:"center",
      alignItems:"center",
      fontWeight:"400",
      
    },
    section:{
      marginHorizontal:responsiveScreenWidth(2.5),
      marginVertical:responsiveScreenHeight(1),
    },
    recentPostText:{
      fontWeight:"400",
      fontSize:responsiveScreenFontSize(2.3)
    }

})