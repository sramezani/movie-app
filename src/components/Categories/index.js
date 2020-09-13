import React from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Consts and Libs
import {AppStyles, AppSizes, Colors} from '../../theme';
import {Util} from '../../lib';
import {APIConfig} from '../../constants';
// component
import {Text, MovieItem, Icon} from '../../components';

/* Component ==================================== */
function Categories(props) {
    const navigation = useNavigation();

    const _renderItem = ({item, index}) => {
        return (
            <MovieItem
                key={index}
                image={item.poster_path}
                title={item.title || item.name}
                movieData={item}
                list={props.list}
            />
        );
    };

    return (
        <View style={{marginVertical: 10}}>
            <View style={{ marginVertical: 2 }}>
                <TouchableOpacity
                    style={[
                        AppStyles.row_rtl,
                        AppStyles.row,
                        styles.box
                    ]}
                    onPress={() => {
                        navigation.navigate('Category', {title: props.title, type: props.type, list: props.list});
                    }}
                >
                    <Text weight="bold" size="lg" style={[AppStyles.text_l]}>
                        {props.title}
                    </Text>
                    <Icon
                        name="arrow-forward"
                        size={30}
                        color={Colors.black}
                    />
                </TouchableOpacity>
                <FlatList
                    data={props.items}
                    horizontal
                    style={{paddingLeft: 10}}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    // scrollEventThrottle={1}
                    initialNumToRender={10}
                    renderItem={_renderItem}
                />
            </View>
        </View>
    );
}

/* Styles ==================================== */
const styles = StyleSheet.create({
    box: {
        paddingVertical: 10,
        paddingHorizontal: 17,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

/* Component Props ==================================== */
Categories.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string,
};

Categories.defaultProps = {
    items: [],
    title: '',
};

/* Export Component ==================================== */
export default Categories;
