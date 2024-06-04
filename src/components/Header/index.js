import React from "react";
import { StyleSheet, View, Text, StatusBar, TouchableOpacity,  } from "react-native";

import {Feather} from '@expo/vector-icons'


const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;
export default function Header(){
        return(
            <View style={styles.container}>
                <View style={styles.container}> 
                    <Text> Sujeito prog</Text>


                    <TouchableOpacity>

                        <Feather name="user" size={27} color={"#FFF"}/>
                    </TouchableOpacity>

                </View>

            </View>
        )
}

const styles = StyleSheet.create({

container:{
    backgroundColor: '#8000ff',
    paddingTop: StatusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
},
content:{
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
},
username:{
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
},


})