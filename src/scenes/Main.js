import PropTypes from 'prop-types';
import React from 'react';
import {Routes} from '../actions/navigation';
import {Transitioner} from 'react-navigation';
import Home from './Home';
import About from './About';
import Authors from './Authors';

import {
    Animated,
    BackHandler,
    Dimensions,
    Easing,
    StyleSheet,
    View,
} from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: 'stretch',
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

class Main extends React.Component {
    static propTypes = {
        isInHomeScene: PropTypes.bool.isRequired,
        popRoute: PropTypes.func.isRequired,
    };

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this._handleBackAction);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._handleBackAction);
    }

    _handleBackAction = () => {
        if (this.props.isInHomeScene) {
            return false;
        }
        this.props.popRoute();
        return true;
    };

    _render = (transitionProps) => {
        const scenes = transitionProps.scenes.map((scene) => this._renderAnimatedScene(transitionProps, scene));

        return (
            <View style={Styles.container}>
                {scenes}
            </View>
        );
    };

    _renderAnimatedScene = (transitionProps, scene) => {
        const {position} = transitionProps;
        const {index} = scene;
        const route = scene.route;

        const translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [Dimensions.get('window').width, 0, -Dimensions.get('window').width],
        });

        const style = [{transform: [{translateX}]}, Styles.fullScreen];

        return (
            <Animated.View key={route.key}
                           style={style}>
                {this._selectScene(route)}
            </Animated.View>
        );
    };

    _selectScene = (route) => {
        switch (route.key) {
            case Routes.HOME:
                return <Home {...this.props}/>;
            case Routes.ABOUT:
                return <About {...this.props}/>;
            case Routes.AUTHORS:
                return <Authors {...this.props}/>;
        }
    };

    _configureTransition = (_transitionProps, _prevTransitionProps) => ({
        duration: 250,
        easing: Easing.inOut(Easing.ease),
    });

    render() {
        const nav = {
            state: this.props.navigation,
        };

        return (
            <Transitioner configureTransition={this._configureTransition}
                          navigation={nav}
                          render={this._render}/>
        );
    }
}

export default Main;