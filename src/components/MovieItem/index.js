import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

// Consts and Libs
import {AppStyles, AppSizes, Colors} from '../../theme';
import {APIConfig} from '../../constants';
// component
import {Text, FavoriteBtn, Icon} from '../../components';

/* Component ==================================== */
function MovieItem(props) {
    const navigation = useNavigation();

    const _FavPress = (item) => {
        return item;
    };

    return (
        <TouchableOpacity
            style={[styles.categoryBox, props.vertical && { marginVertical: 12 }]}
            onPress={() => {
                navigation.navigate('Detail', {data: props.movieData});
            }}>
            <View style={styles.topBox}>
                {props.image ? (
                    <FastImage
                        style={styles.cImgFastImg}
                        source={{
                            uri: `${APIConfig.imageHost}${props.image}`,
                            priority: FastImage.priority.high,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                ) : (
                    <Image
                        source={require('../../assets/images/movie.png')}
                        style={styles.cImg}
                    />
                )}
            </View>
            
            <View style={styles.bottomBox}>
                <View style={{ flex: 4 }}>
                    <Text size="xs" numberOfLines={2} style={[AppStyles.text_c, { textAlign: 'left' }]}>
                        {props.title}
                    </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <FavoriteBtn
                        onPress={() => _FavPress(props.movieData)}
                        itemData={props.movieData}
                    />
                </View>
            </View>
            <View style={[AppStyles.row, { marginTop: -15 }]}>
                <Text size="xs">
                    {props.movieData.vote_average}
                </Text>
                <Icon
                    name="star-rate"
                    size={14}
                    color="#aaa"
                />
            </View>
        </TouchableOpacity>
    );
}

/* Styles ==================================== */
const styles = StyleSheet.create({
    categoryBox: {
        width: AppSizes.screenWidth / 3.6,
        height: AppSizes.screenWidth / 1.9,
        marginHorizontal: 6,
        backgroundColor: Colors.white,
        borderRadius: 5
    },
    topBox: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        overflow: 'hidden',
    },
    cImgFastImg: {
        width: '100%',
        height: '100%',
        borderRadius: 5
    },
    cImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 5
    },
});

/* Component Props ==================================== */
MovieItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    movieData: PropTypes.object,
    vertical: PropTypes.bool
};

MovieItem.defaultProps = {
    items: '',
    title: '',
    movieData: {},
    vertical: false
};

/* Export Component ==================================== */
export default MovieItem;
