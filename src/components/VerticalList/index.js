import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useRoute} from '@react-navigation/native';

import {Text, MovieItem} from '../../components';
import {AppStyles, Colors} from '../../theme';

function VerticalList(props) {
    const route = useRoute();

    const _renderItem = ({item, index}) => {
        return (
            <View>
                <MovieItem
                    key={index}
                    image={item.poster_path || item.logo_path}
                    title={item.title || item.name}
                    movieData={item}
                    vertical
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={props.data}
                numColumns={3}
                contentContainerStyle={{ padding: 20 }}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                initialNumToRender={10}
                renderItem={_renderItem}
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    }
});

VerticalList.propTypes = {
    data: PropTypes.array,
};

VerticalList.defaultProps = {
    data: [],
};

export default VerticalList;
