import React, {Component} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Provider} from "react-redux";
import createStore from "redux/src/createStore";
import applyMiddleware from "redux/src/applyMiddleware";
import reducers from './app/reducers';
import ReduxThunk from 'redux-thunk';
import Home from './app/home'
import Details from './app/detail'
import {StackNavigator} from "react-navigation";

const RootNavigator = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerStyle: {
                backgroundColor: "#607D8B",
            },
            headerTintColor: "#EED",
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            title: 'Detail',
            headerStyle: {
                backgroundColor: "#607D8B",
            },
            headerTintColor: "#EED",
            headerTitleStyle: {
                fontWeight: 'bold',
            },

        }
    }
});

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <View style={styles.container}>
                    <StatusBar
                        backgroundColor="#455A64"
                        barStyle="default"
                    />
                    <RootNavigator/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
