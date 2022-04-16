import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')


const CarouselItem = ({ item }) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={item.url} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 25,
        height: (height / 3)-10,
        backgroundColor: 'transparent',
        margin: 10,
        // marginTop:"10%",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // shadowColor: '#000',
        // shadowOffset: { width: 0.5, height: 0.5 },
        // shadowOpacity: 0.5,
        // shadowRadius: 3,
        // elevation: 5,
    },

    
    image: {
        width: 250,
        height:250,
        borderRadius: 10
    },
   
})

export default CarouselItem