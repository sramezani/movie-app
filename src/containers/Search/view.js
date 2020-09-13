import React, {useEffect, useState, useRef} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useRoute} from '@react-navigation/native';
import {Searchbar} from 'react-native-paper';

import {Colors} from '../../theme';
import {Text, MovieItem, VerticalList} from '../../components';

function Search(props) {
    const route = useRoute();
    const [moviesList, setMoviesList] = useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');

    const inputRef = useRef(null);
    let searchTimer;

    useEffect(() => {
          inputRef.current.focus();
      }, []);

    const _getSearchData = (text) => {

        setSearchQuery(text)
        if (text.length === 0) {
            setMoviesList([])
        }
        else if (text.length > 2) {
            const data = {
                query: text,
                page: 1
            }

            clearTimeout(searchTimer);
			searchTimer = setTimeout(() => {
                props.getSearchAction(data)
                    .then((res) => {
                        setMoviesList(res.results);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
			}, 400);
    
        }
    };

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={_getSearchData}
                    value={searchQuery}
                    ref={inputRef}
                />
                <VerticalList
                    data={moviesList}
                />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({});

Search.propTypes = {
    getSearchAction: PropTypes.func.isRequired,
};

Search.defaultProps = {};

export default Search;
