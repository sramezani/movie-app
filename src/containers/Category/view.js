import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useRoute} from '@react-navigation/native';
import {Colors} from '../../theme';
import {Text, MovieItem, VerticalList} from '../../components';

function Category(props) {
    const route = useRoute();
    const [moviesList, setMoviesList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (route.params.type === 'trend') {
            _getTrenListData(route.params.list);
        }
        else {
            _getMovieListData(route.params.list);
        }
    }, []);

    const _getTrenListData = (id) => {
        const data = {
            page,
            id
        }
        props.getTrendListAction(data)
            .then((res) => {
                setMoviesList((prevState) => ([
                    ...prevState,
                    ...res.results,
                ]));
                setPage(page => page + 1);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const _getMovieListData = (id) => {
        const data = {
            page,
            id
        }
        props.getMovieListAction(data)
            .then((res) => {
                setMoviesList((prevState) => ([
                    ...prevState,
                    ...res.results,
                ]));
                setPage(page => page + 1);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const _loadMore = () => {
        console.log(1111)
        if (route.params.type === 'trend') {
            _getTrenListData(route.params.list);
        }
        else {
            _getMovieListData(route.params.list);
        }
	}

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                <VerticalList
                    data={moviesList}
                    onEndReachedThreshold={0.9}
                    onEndReached={_loadMore}
                />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({});

Category.propTypes = {
    getTrendListAction: PropTypes.func.isRequired,
    getMovieListAction: PropTypes.func.isRequired,
};

Category.defaultProps = {};

export default Category;
