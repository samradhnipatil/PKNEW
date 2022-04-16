import React from 'react'
import { View,Text } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from './data'

const CarouselCards = () => {
    const isCarousel = React.useRef(null)
    const [index, setIndex] = React.useState(0)

    return (
        <View style={{backgroundColor: '#c4c4c4', paddingBottom:20, marginTop:20}}>

            <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold',marginTop:10}}>Listen from our users</Text>  
            <Carousel
                layout={'default'}
                layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={1}
                useScrollView={true}
            />
        </View>
    )
}


export default CarouselCards