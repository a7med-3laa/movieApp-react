import React, {Component} from 'react';
import {Dimensions, FlatList, Image, RefreshControl, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import {fetData} from './actions/MovieListAction'

const {width, height} = Dimensions.get('window');

class Home extends Component {


    renderITem = ({item}) => {
        return (
            <TouchableOpacity activeOpacity={.5} onPress={() => this.props.navigation.navigate('Details', {item: item})}
            >
                <Image source={{uri: "http://image.tmdb.org/t/p/w185/" + item.poster_path}}
                       style={{width: width / 2, height: height / 2}}

                />
            </TouchableOpacity>
        )
    };

    constructor() {
        super();

    }

    _onRefreshTasks() {
        this.props.fetData()
    }

    //  var s = Dimensions.get('window').width/2;
    componentDidMount() {
        this.props.fetData();

    }

    render() {
        return (

            <FlatList
                numColumns={2}
                data={this.props.data}
                keyExtractor={item => item.id}
                renderItem={this.renderITem}
                refreshControl={
                    <RefreshControl
                        refreshing={this.props.loading}
                        onRefresh={this._onRefreshTasks.bind(this)}
                    />
                }

            />

        )
    };
};

const mapStateToProp = state => {
    return {
        error: state.movies.error,
        loading: state.movies.loading,
        data: state.movies.data,

    }
};
export default connect(mapStateToProp, {fetData})(Home);

