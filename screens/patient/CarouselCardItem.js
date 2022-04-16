import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 85
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            <Image
                source={{ uri: item.imgUrl }}
                style={styles.image}
            />
            <Text style={styles.body}>{item.body}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: ITEM_WIDTH,
        paddingBottom: 40,
        shadowColor: "#000",
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        width: 350,
        height: 200,
        marginTop:20,
        marginLeft: -40,
    },
    image: {
        width: ITEM_WIDTH,
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 10,
        alignSelf:'center'
    },
    header: {
        color: "#222",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 10,
        paddingTop: 20
    },
    body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 30,
        paddingRight: 20
    }
})

export default CarouselCardItem