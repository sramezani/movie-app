import {Platform} from 'react-native';
import Color from './colors';
import Font from './fonts';
import Util from '../lib/Util';

export default {
    // Grid
    row: {flexDirection: 'row'},

    // Default
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
        position: 'relative',
    },
    fixed: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    // ==============================================================  Aligning Helpers
    align_c: {justifyContent: 'center', alignItems: 'center'},
    align_c_v: {justifyContent: 'center'},
    align_c_h: {alignItems: 'center'},
    align_t: {justifyContent: 'flex-start'},
    align_b: {justifyContent: 'flex-end'},
    align_l: {alignItems: 'flex-start'},
    align_r: {alignItems: 'flex-end'},
    text_c: {textAlign: 'center'},
    text_r: {textAlign: 'right'},
    text_l: {textAlign: 'left'},

    borderRadius: 3,
};
