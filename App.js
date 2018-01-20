import React from 'react';
import { Animated, StyleSheet, Text, View, Image } from 'react-native';
import Button from 'react-native-button'
import TextComponent from 'textComponent';
export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
      name: "drake",
    };


    this.changeName=this.changeName.bind(this)
  }

  componentDidMount(){

  }


  changeName() {

      this.setState({
          name: "luke",
      });


  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.name}</Text>
          <Image
    style={{width: 200, height: 200}}
    source={{uri: "https://static.pexels.com/photos/547114/pexels-photo-547114.jpeg"}}

    />
        <Button
            containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: '#FFEEE4'}}
            disabledContainerStyle={{backgroundColor: 'grey'}}
            style={{fontSize: 20, color: 'green'}}
            onPress={() => this.changeName()}
            >
          Press me!
        </Button>

          <TextComponent content="fjjkldshhfjhsdlfhjsdkhfkjhkjshfkjdshkjfds" />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEEE4',
    alignItems: 'center',
    justifyContent: 'center',
  },



});
