import * as navigationActions from './actions/navigation';
import {isInHomeScene} from './selectors/navigation';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Main from './scenes/Main';

const actionsCreators = {
    ...navigationActions,
};

function mapStateToProps(state) {
    return {
        isInHomeScene: isInHomeScene(state),
        navigation: state.navigation,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
