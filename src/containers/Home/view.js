import React, {useEffect, useState} from 'react';
import {
    Button,
    View,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {Searchbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {Text, Categories} from '../../components';
import {Colors} from '../../theme';

function HomeScreen(props) {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [moviesList, setMoviesList] = useState({});

    useEffect(() => {
        _getTrenListData('movie');
        _getTrenListData('tv');
        _getMovieListData('popular');
        _getMovieListData('top_rated');
    }, []);

    const _getTrenListData = (id) => {
        const data = {
            id
        }
        props.getTrendListAction(data)
            .then((res) => {
                setMoviesList((prevState) => ({
                    ...prevState,
                    [id]: res.results,
                }));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const _getMovieListData = (id) => {
        const data = {
            id
        }
        props.getMovieListAction(data)
            .then((res) => {
                setMoviesList((prevState) => ({
                    ...prevState,
                    [id]: res.results,
                }));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                >
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Search');
                        }}>
                        <Searchbar
                            placeholder="Search"
                            editable={false}
                            selectTextOnFocus={false}
                            pointerEvents="none"
                        />
                    </TouchableOpacity>
                    <View style={styles.test}>
                        <Categories
                            items={moviesList.movie}
                            title="Trending Movie"
                            type="trend"
                            list="movie"
                        />
                        <Categories
                            items={moviesList.tv}
                            title="Trending Tv"
                            type="trend"
                            list="tv"
                        />
                        <Categories
                            items={moviesList.popular}
                            title="Popular Movie"
                            type="all"
                            list="popular"
                        />
                        <Categories
                            items={moviesList.top_rated}
                            title="Top Rated Movie"
                            type="all"
                            list="top_rated"
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.white,
        // margin: 10,
    },
    test: {
        // marginLeft: 10
    },
});

HomeScreen.propTypes = {
    getTrendListAction: PropTypes.func.isRequired,
    getMovieListAction: PropTypes.func.isRequired,
};

HomeScreen.defaultProps = {};

export default HomeScreen;
