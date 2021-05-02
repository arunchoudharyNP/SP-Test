import React, { PureComponent } from "react";
import { StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";

class RenderCom extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer}>
        <Image
          source={{ uri: this.props.item }}
          style={{
            height: Dimensions.get("window").height / 4,
            resizeMode: "cover",
          }}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    borderColor: "white",
    borderWidth: 1,
    resizeMode: "contain",
  },
});

export default RenderCom;
