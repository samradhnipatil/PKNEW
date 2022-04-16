import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')


const CarouselItem2 = ({ item }) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={item.urll} />
            <Image style={styles.image1} source={item.url2} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 20,
        height: height / 3,
        backgroundColor: 'transparent',
        // margin: 10,
        borderRadius: 10,
        // alignItems: 'center',
        justifyContent: 'center',
    },


    image: {
        width: 140,
        height: 140,
        marginTop:-100,
        borderRadius: 10,
        marginLeft:40,
    },
    image1: {
        width: 180,
        height: 105,
        marginTop:-130,
        borderRadius: 10,
        marginLeft: 180,
    },

})

export default CarouselItem2