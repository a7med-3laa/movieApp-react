import React, {Component} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {connect} from 'react-redux'
import {fetData} from './actions/ReviewListAction'
import ActorItem from './commen/reviewItem'


class ActorsList extends Component {
    static navigationOptions = {
        title: "Reviews",
    };
    renderITem = ({item}) => {
        return (
            <ActorItem name={item.author}/>
        )
    };

    constructor() {
        super();

    }

    _onRefreshTasks() {
        this.props.fetData(this.props.screenProps.id2)
    }

    componentDidMount() {
        this.props.fetData(this.props.screenProps.id2);

    }

    render() {
        return (
            <FlatList
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
}

const mapStateToProp = state => {

    return {
        error: state.reviews.error,
        loading: state.reviews.loading,
        data: state.reviews.data,

    }
};
export default connect(mapStateToProp, {fetData})(ActorsList);

