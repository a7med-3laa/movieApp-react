import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from "react-navigation";
import ActorsList from "./ActorsList";
import TrailerList from "./TrailersList";
import ReviewList from "./ReviewsList";

const AA = createMaterialTopTabNavigator({
    Actors: {
        screen: ActorsList,
    },
    trailer: {
        screen: TrailerList,
    },
    review: {
        screen: ReviewList,
    },

}, {
    tabBarOptions: {
        scrollEnabled: true,

        style: {
            backgroundColor: 'rgba(0,0,0,0.9)',
            margin: 0,
            padding: 0,
        },
        tabStyle: {
            width: Dimensions.get('window').width / 3,
        },
        indicatorStyle: {
            backgroundColor: '#fff'
        }
    },
});
export default class TabNavigation extends Component {
    render() {
        console.log(this.props.id);
        return (
            <AA screenProps={{id2: this.props.id}}/>
        );
    }
}
