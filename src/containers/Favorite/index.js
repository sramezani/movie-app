import {connect} from 'react-redux';

// The component we're mapping to
import view from './view';

// What data from the store shall we send to the component?
const mapStateToProps = (state) => ({
    favorite: state.core.favorite,
});

// Any actions to map to the component?
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(view);
