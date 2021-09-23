import React from 'react'
import { View, Text } from 'react-native'
import {FontAwesome5} from 'react-native-vector-icons'

const Carasoul = () => {
    return (
        
        <View>
            <View>
                <View>
                    <Text>TOP DESTINATION IN INDIA</Text>
                </View>
                <View style={{flexDirection:"row", backgroundColor: 'gray'}}> 
                    <View>
                        <FontAwesome5 name="hotel" size={35} color="#000"/>
                    </View>
                    <View>
                    <View style={{
                        width: '102px',
                        height: '4px',
                        backgroundColor: '#c0c0c0',
                        margin: '5px',
                        display: 'block',
                    }}></View>
                    <View style={{
                        width: '120px',
                        height: '4px',
                        backgroundColor: '#c0c0c0',
                        margin: '5px',
                        display: 'block',
                    }}></View>
                    <View style={{
                        width: '102px',
                        height: '4px',
                        backgroundColor: '#c0c0c0',
                        margin: '5px',
                        display: 'block',
                    }}></View>
                    </View>
                </View>
            </View>

    <View>
     <View>
     </View>
</View>


        </View>
    )
}

export default Carasoul;
