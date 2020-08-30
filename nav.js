import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, Picker, ToastAndroid } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


HomeScreen = ({ navigation }) => {
const username = 'hello'
const [selectedValue, setSelectedValue] = useState("100001");
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="TTNT_N.Du_T3_9h" value="100001" />
        <Picker.Item label="LTDT_N.Tram_T4_12h" value="10002" />
      </Picker>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {id: selectedValue})}
      />
      <Button
        title="Go to Training"
        onPress={() => navigation.navigate('Training', {id: selectedValue})}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { id } = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>id: {JSON.stringify(id)}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

// const takePicture =  async () => {
//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'GET',
//   }).then(response => response.json())
//     .then(responseJson => {
//       alert(JSON.stringify(responseJson));
//       console.log(responseJson)
//     }).catch(error => {
//       alert(Json.stringify(error));
//       console.error(error);
//   });
// }


const takePicture =  () => {
  // fetch('https://jsonplaceholder.typicode.com/posts/1', {
  //   method: 'GET',
  // }).then(response => response.json())
  //   .then(responseJson => {
  //     alert(JSON.stringify(responseJson));
  //     console.log(responseJson)
  //   }).catch(error => {
  //     alert(Json.stringify(error));
  //     console.error(error);
  // });
  if (this.camera) {
    const options = { quality: 0.5, base64: true };
    const data =  this.camera.takePictureAsync(options);
    console.log(data.uri);
  }
}
const TrainingScreen=({ route, navigation }) =>{
  const { id } = route.params

  return (
    <View style={styles.container}>
      <Text>WELLCOME TO TEKNIK GG</Text>
      <RNCamera
      ref={ref => {
        this.camera = ref;
      }}
        style={StyleSheet.absoluteFill}
        type={RNCamera.Constants.Type.front}
        faceDetectionClassifications={RNCamera.Constants.FaceDetection.Classifications.all}
        faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
        onFacesDetected={face => {
          if (face.faces.length != 0) {
            // alert(JSON.stringify('face'));
            if (this.camera) {
              const options = { quality: 0.5, base64: true };
              const data =  this.camera.takePictureAsync(options);
              console.log(data.uri);
            }
            // ToastAndroid.show(JSON.stringify("face"), ToastAndroid.SHORT);
          }else{
            // alert(JSON.stringify(id));
            // ToastAndroid.show(JSON.stringify(id), ToastAndroid.SHORT);
          }
        }}
      >
      </RNCamera>
    </View>
  );
  
}

const Stack = createStackNavigator();

App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Training" component={TrainingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  picker:{
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export default App;


