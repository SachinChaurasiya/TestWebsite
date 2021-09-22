import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HomeScreens from './NavbarScreens';
0
    const ProfileScreens = () => {
        return (
          <View style={styles.container}>
            <Text>Profile</Text>
            <StatusBar style="auto" />
          </View>
        );
      }

      
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });


export default ProfileScreens;