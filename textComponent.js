import React from "react";
import {Text} from 'react-native';


export default class TextComponent extends React.Component {

    constructor(props){
        super(props);

    }


    componentDidMount(){

    }


    render(){
        return (

            <Text>{this.props.content}</Text>


        );

    }

}