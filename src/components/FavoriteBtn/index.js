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
import {useDispatch, useSelector} from 'react-redux';
import {addFavoriteData, removeFavoriteData} from '../../redux/core/actions';

// Consts and Libs
import {AppStyles, AppSizes, Colors} from '../../theme';
import {APIConfig} from '../../constants';
// component
import {Icon} from '../../components';

/* Component ==================================== */
function FavoriteBtn(props) {
    const dispatch = useDispatch();
    const favoriteList = useSelector((state) => state.core.favorite);

    const _favStatus = (item) => {
        if (favoriteList.filter((e) => e.id === item.id).length > 0) {
            return true;
        }
        return false;
    }

    const _FavPress = (item) => {
        if (_favStatus(item)) {
            dispatch(removeFavoriteData(item));
            return;
        }

        dispatch(addFavoriteData(item));
    };

    return (
        <>
            <Icon
                name="favorite"
                onPress={() => _FavPress(props.onPress())}
                size={20}
                color={_favStatus(props.itemData) ? Colors.red : Colors.disable}
            />
        </>
    );
}

/* Styles ==================================== */
const styles = StyleSheet.create({});

/* Component Props ==================================== */
FavoriteBtn.propTypes = {};

FavoriteBtn.defaultProps = {};

/* Export Component ==================================== */
export default FavoriteBtn;
