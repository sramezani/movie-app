import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useRoute} from '@react-navigation/native';

import {Text, MovieItem, VerticalList} from '../../components';
import {Colors} from '../../theme';

function Favorite(props) {
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                <VerticalList data={props.favorite} />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({});

Favorite.propTypes = {
    favorite: PropTypes.array,
};

Favorite.defaultProps = {
    favorite: [],
};

export default Favorite;
