import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';

// import { Container } from './styles';

const PostLoading = () => {
  return <>
  <View style={styles.main}>
    <Text>Working fine</Text>
  </View>
  
  </>
}

export default PostLoading;



const styles = new StyleSheet.create({
    main:{
        height:responsiveScreenHeight(100),
        padding:responsiveScreenHeight(1)
    }
})