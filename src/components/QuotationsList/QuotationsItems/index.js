import React from "react";
import {View, Text, Image} from 'react-native'
import styles from './styles'


export default function QuotationItems(){
    return(
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Text style={styles.dayCotation}>07/05/2021</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$53331.052</Text>
            </View>
            
        </View>
    )
}