import {Colors} from '../theme';

const base = {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.black,
};

/* eslint-disable */
export default {
    base,

    xxlg: {...base, fontSize: 28},
    xlg: {...base, fontSize: 22},
    lg: {...base, fontSize: 19},
    md: {...base, fontSize: 16},
    sm: {...base, fontSize: 14},
    xs: {...base, fontSize: 12},
    xxs: {...base, fontSize: 10},
    xxxs: {...base, fontSize: 8},

    ultraBold: '900',
    bold: '700',
    semiBold: '500',
    normal: '400',
};
/* eslint-enable */
