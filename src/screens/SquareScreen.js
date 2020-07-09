import React, { useReducer } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const isValidColor = (color) => {
  return color >= 0 && color <= 255;
};

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }
  switch (action.type) {
    case "change_red":
      return isValidColor(state.red + action.payload)
        ? { ...state, red: state.red + action.payload }
        : state;
    case "change_green":
      return isValidColor(state.green + action.payload)
        ? { ...state, green: state.green + action.payload }
        : state;
    case "change_blue":
      return isValidColor(state.blue + action.payload)
        ? { ...state, blue: state.blue + action.payload }
        : state;
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  console.log(state);

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -COLOR_INCREMENT })
        }
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue} )`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
