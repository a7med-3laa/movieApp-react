import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default class actorItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                       source={{uri: 'https://img.youtube.com/vi/' + this.props.img + '/sddefault.jpg'}}/>
                <View style={{flex: 0.8, flexDirection: 'column', paddingLeft: 5}}>
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
