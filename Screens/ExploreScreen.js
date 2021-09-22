import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HomeScreens from './NavbarScreens';

    const ExploreScreens = () => {
        return (
          <View style={styles.container}>
            <Text>Explore</Text>
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


export default ExploreScreens;