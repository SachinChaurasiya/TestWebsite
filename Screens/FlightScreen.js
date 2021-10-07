import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import FTH_Page from '../Components/Home/FHT_Page';

const Flightscreen = (props) => {
  return (
    <View>
      <FTH_Page {...props}/>
    </View>
  );
}

const styles = StyleSheet.create({})

export default Flightscreen;
