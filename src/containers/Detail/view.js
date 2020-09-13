import React, {useEffect, useState} from 'react';
import {Button, View, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import {useRoute} from '@react-navigation/native';

import {Text, Icon, FavoriteBtn} from '../../components';
import {APIConfig} from '../../constants';
import {Colors, AppSizes, AppStyles} from '../../theme';

function DetailScreen(props) {
    const route = useRoute();
    const [moviesData, setMoviesData] = useState({});

    const _FavPress = (item) => {
        return item;
    };

    useEffect(() => {
        setMoviesData(route.params.data);
    }, []);

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                <ScrollView >
                    {moviesData && (
                        <>
                            {
                                (moviesData.backdrop_path || moviesData.poster_path) ?
                                    <FastImage
                                        style={styles.cImgFastImg}
                                        source={{
                                            uri: `${APIConfig.imageHost}${moviesData.backdrop_path || moviesData.poster_path}`,
                                            priority: FastImage.priority.high,
                                        }}
                                        resizeMode={FastImage.resizeMode.cover}
                                    />
                                :
                                <Image
                                    source={require('../../assets/images/movie.png')}
                                    style={styles.cImg}
                                />
                            }
                            <View style={styles.detailBox}>
                                <View style={styles.topLeft}>
                                    {
                                        moviesData.poster_path ?
                                            <FastImage
                                                style={styles.poster}
                                                source={{
                                                    uri: `${APIConfig.imageHost}${moviesData.poster_path}`,
                                                    priority: FastImage.priority.high,
                                                }}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        :
                                            <Image
                                                source={require('../../assets/images/movie.png')}
                                                style={styles.cImg2}
                                            />
                                    }

                                </View>
                                <View style={styles.topRight}>
                                    <View>

                                        <Text size="lg" weight="bold" numberOfLines={2}>
                                            {moviesData.title || moviesData.original_title || moviesData.name}
                                        </Text>
                                        <View style={AppStyles.row}>
                                            <Text size="xs">
                                                {moviesData.vote_average}
                                            </Text>
                                            <Icon
                                                name="star-rate"
                                                size={14}
                                                color="#aaa"
                                            />
                                        </View>
                                        <View style={{ marginTop: 10 }}>
                                            <FavoriteBtn
                                                onPress={() => _FavPress(moviesData)}
                                                itemData={moviesData}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.detailText}>
                                <Text>
                                    {moviesData.overview}
                                </Text>
                            </View>
                        </>
                    )}
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    cImgFastImg: {
        width: AppSizes.screenWidth,
        height: AppSizes.screenHeight / 2.8,
    },
    cImg: {
        width: AppSizes.screenWidth,
        height: AppSizes.screenHeight / 2.8,
        resizeMode: 'cover',
    },
    detailBox: {
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    topLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topRight: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 40,
        paddingLeft: 40
    },
    poster: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        borderRadius: 5
    },
    cImg2: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        borderRadius: 5,
        resizeMode: 'contain',
    },
    detailText: {
        padding: 20
    }
});

DetailScreen.propTypes = {
    moviesData: PropTypes.object
};

DetailScreen.defaultProps = {
    moviesData: {}
};

export default DetailScreen;
