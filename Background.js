import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';
import Axios from 'axios'
import {Picker} from '@react-native-community/picker';

class Background extends Component {
    constructor(props) {
        super(props)
        this.state=({
            selectedValue: '',
            courses: [],
            course: ""
        })
    }

    componentDidMount() {
        let url = "http://192.168.43.205:5000/coures";
        Axios.get(url)
          .then((response) => {
              console.log("response: ", response.data)
              this.setState({
                // courses:  [
                //     {
                //       "courseID": "1597865496895E6ZJo",
                //       "name": "Nhap mon tri tue nhan tao"
                //     },
                //     {
                //       "courseID": "1597865515258H3YmJ",
                //       "name": "Ly thuyet do thi"
                //     }
                //   ]
                courses: response.data.data
              })
          })
          .catch((err) => {
            console.log(err);
          })
      }

    render() {
        return (
            <View>
                {/* <Text>Select Teacher</Text> */}
                <Picker
                  style={{fontSize: 14, color: '#222'}}
                  selectedValue={this.state.course} 
                  onValueChange={course => this.setState({course})}>
                  {/* <Picker.Item label={'-- Select Course --'} /> */}
                  {
                    this.state.courses.map(item => <Picker.Item key={item.courseID} value={item.courseID} label={item.name} 
                        keyExtractor={item=>{item.courseID}}
                    />)
                  }
                </Picker>

                <Button title='Attendence' onPress={() => {
                  if(this.state.course != ""){
                    this.props.navigation.navigate('Recognition' , {id: this.state.course})
                  }
                }}

            />
        </View>
        );
    }
}

export default Background
