import React, { /*useState*/ useReducer } from "react";
import { StyleSheet, Button, View, FlatList, Text } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const COLOR_INCREAMENT = 15;

const reducer = (state, action) => {
  //state === { red: number, green: number, blue: number}
  //action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
  switch (action.colorToChange) {
    case "red":
      // never going to do :
      //state.red = state.red - 15
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return;
  }
};

const SquareScreen = () => {
  /*const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const setColor = (color, change) => {
    //color==='red','green','blue'
    //change === +15,-15
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };*/

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  console.log(state);
  //console.log(red, blue, green);
  return (
    <View>
      {/* <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREAMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREAMENT)}
        color="Red"
      /> */}
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREAMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREAMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREAMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREAMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREAMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREAMENT })
        }
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default SquareScreen;
