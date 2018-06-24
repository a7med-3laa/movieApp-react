import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default class iconText extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../star.png')}/>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    image: {
        flex: 0.2,
        resizeMode: 'contain'
    },
    text: {
        flex: 0.8,
        marginLeft: 5,
        color: 'white'
    }
});
