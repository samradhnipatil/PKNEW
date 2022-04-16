import React, { useContext, useState } from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { NewsContext } from "../../api/context";
import SingleNews from "./SingleNews";

const Newsscreen = () => {
  const {
    news: { articles }
  } = useContext(NewsContext);

  console.log("1111111111111",articles);
  console.log("---------------------------------------------------------------------",);

//   const [activeIndex, setActiveIndex] = useState();

  const windowHeight = Dimensions.get("window").height;

  // console.log(articles && articles[9]);

  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          firstItem={articles.slice(0, 50).length - 1}
          layout={"tinder"}
          data={articles.slice(0, 50)}
          sliderHeight={200}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item}) => (
            <SingleNews item={item}  />
          )}
          // onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}

    </View>
  );
};

export default Newsscreen;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    transform: [{ scaleY: -1 }],
    backgroundColor: "white",
  },
});
