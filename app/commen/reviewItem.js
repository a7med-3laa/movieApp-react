import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class reviewItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, flexDirection: 'column', paddingLeft: 5}}>
                    <Text style={styles.text}>{this.props.name}</Text>
                    <Text style={styles.text2}>{this.props.name2}</Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        alignItems: 'center',
        margin: 5

    },
    image: {
        flex: 0.2,
        resizeMode: 'contain',
        width: 40,
        height: 50,
    },
    text: {
        color: "white"
    },
    text2: {
        color: "#999"
    }
});
