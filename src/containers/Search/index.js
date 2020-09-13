import {connect} from 'react-redux';

import {getSearchAction} from '../../redux/core/actions';

// The component we're mapping to
import view from './view';

// What data from the store shall we send to the component?
const mapStateToProps = (state) => ({});

// Any actions to map to the component?
const mapDispatchToProps = {
    getSearchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(view);
