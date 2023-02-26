import React from "react";
// import { HolaMundoScreen } from "./src/screens/HolaMundoScreen";
// import { ContadorScreen } from "./src/screens/ContadorScreen";
import { BoxObjectSrceen } from "./src/screens/BoxObjectSrceen";
import { SafeAreaView } from "react-native";
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from "./src/screens/PositionScreen";
import { FlexScreen } from "./src/screens/FlexScreen";
import { TareaScreen } from "./src/screens/TareaScreen";

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <BoxObjectSrceen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      <TareaScreen/>
    </SafeAreaView>
  )
}

export default App;
