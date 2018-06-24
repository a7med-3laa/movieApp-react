import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import IconText from './commen/iconText'
import Tab from './TabNavigation'

export default class Detail extends Component {


    constructor() {
        super();

    }

    componentDidMount() {
    }


    render() {
        const KL = this.props.navigation.getParam('item', {});
        return (
            <ImageBackground
                style={styles.imgBackground}
                resizeMode='cover'
                source={{uri: "https://image.tmdb.org/t/p/w185/" + KL.poster_path}}
            >
                <View style={styles.container}>

                    <View style={{flexDirection: 'row'}}>
                        <Image
                            source={{uri: "https://image.tmdb.org/t/p/w185/" + KL.poster_path}}
                            style={styles.moviePoster}/>
                        <View style={styles.container2}>
                            <Text style={styles.MovieTitle}>{KL.title}</Text>

                            <IconText style={styles.text} text={KL.vote_average + "/10"}/>
                            <Text ellipsizeMode={'tail'}
                                  numberOfLines={3}
                                  style={styles.text}>{KL.overview}</Text>

                        </View>

                    </View>
                    <Tab id={KL.id}/>
                </View>
            </ImageBackground>
        )
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.8)'

    }
    , imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    container2: {
        flexDirection: 'column',
        flex: 0.6,
        marginTop: 16
    },
    moviePoster: {
        flex: 0.4,
        margin: 16,
        width: 130,
        height: 200,
        resizeMode: 'stretch'


    },
    text: {
        fontSize: 12,
        color: 'white',

    },
    MovieTitle: {
        fontSize: 22,
        paddingLeft: 5,
        paddingTop: 2,
        color: 'white',
        fontWeight: 'bold'
    }


});
