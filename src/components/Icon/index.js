import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';


/* Component ==================================== */
function IconView(props) {

    return (
        <>
            <Icon
                {...props}
            />
        </>
    );
}

/* Styles ==================================== */
const styles = StyleSheet.create({});

/* Component Props ==================================== */
IconView.propTypes = {};

IconView.defaultProps = {};

/* Export Component ==================================== */
export default IconView;
