import React, { useEffect, useState, useRef } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  RefreshControl,
  Image,
  Dimensions,
} from "react-native";
import RenderCom from "../Components/RenderCom";

const Gallery = (props) => {
  const [gridImg, setgridImg] = useState([]);
  const [corouselImg, setcorouselImg] = useState([]);

  const [refresh, setrefresh] = useState(false);
  const ITEM_HEIGHT = Dimensions.get("window").height / 4;
  const DyHeight = Dimensions.get("window").height;
  const DyWidth = Dimensions.get("window").width;

  const ImageCom = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: item }}
          style={{
            width: DyWidth,
            height: DyHeight / 3,
            resizeMode: "stretch",
          }}
        />
      </View>
    );
  };

  const loadCData = () => {
    setrefresh(true);
    fetch("http://shibe.online/api/shibes?count=5&urls=true&httpsUrls=true")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setcorouselImg(data);
        setrefresh(false);
      });
  };

  const loadData = () => {
    setrefresh(true);
    fetch("http://shibe.online/api/shibes?count=20&urls=true&httpsUrls=true")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setgridImg(data);
        setrefresh(false);
      });
  };
  useEffect(() => {
    loadData();
    loadCData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={corouselImg}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ImageCom}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={true}
        maxToRenderPerBatch={5}
      />

      <FlatList
        data={gridImg}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <RenderCom item={item} index={index} />
        )}
        numColumns={Math.ceil(Dimensions.get("window").width / 150)}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={loadData} />
        }
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
  },
});

export default Gallery;
