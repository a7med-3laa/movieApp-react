import React, {Component} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {connect} from 'react-redux'
import {fetData} from './actions/TrailerListAction'
import ActorItem from './commen/trailerItem'


class ActorsList extends Component {
    static navigationOptions = {
        title: "Trailers",
    };
    renderITem = ({item}) => {
        return (
            <ActorItem img={item.key} name={item.name} name2={item.site}/>
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
        error: state.trailer.error,
        loading: state.trailer.loading,
        data: state.trailer.data,

    }
};
export default connect(mapStateToProp, {fetData})(ActorsList);

