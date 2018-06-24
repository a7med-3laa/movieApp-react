import React, {Component} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {connect} from 'react-redux'
import {fetData} from './actions/ActorListAction'
import ActorItem from './commen/actorItem'


class ActorsList extends Component {
    static navigationOptions = {
        title: "Actors",
    };
    renderITem = ({item}) => {
        return (
            <ActorItem img={item.profile_path} name={item.name} name2={item.character}/>
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
        error: state.actors.error,
        loading: state.actors.loading,
        data: state.actors.data,

    }
};
export default connect(mapStateToProp, {fetData})(ActorsList);

