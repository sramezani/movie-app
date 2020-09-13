import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, Platform} from 'react-native';

// Consts and Libs
import {Colors, AppFonts} from '../../theme';

/* Component =================================== */
function CustomText(props) {
    const _style = () => {
        let style = {
            ...AppFonts.base,
            color: Colors[props.color],
            fontSize: AppFonts[props.size].fontSize,
            fontWeight: AppFonts[props.weight],
        };

        // ---------------------- Decoration
        if (props.onPress) {
            style.textDecorationLine = 'underline';
        }

        // ---------------------- Paragraph
        if (props.p) {
            style.lineHeight = AppFonts[props.size].lineHeight * 1.35;
        }

        style = [style];

        if (props.style) style.push(props.style);

        return style;
    };

    return (
        <Text {...props} style={_style()}>
            {props.children}
        </Text>
    );
}

/* Styles ====================================== */
const styles = StyleSheet.create({});

/* Props ======================================= */
CustomText.propTypes = {
    size: PropTypes.oneOf([
        'xxxs',
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xlg',
        'xxlg',
    ]),
    color: PropTypes.string,
    weight: PropTypes.oneOf(['ultraBold', 'bold', 'semiBold', 'normal']),

    p: PropTypes.bool, // paragraph

    onPress: PropTypes.func,
    style: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.number,
        PropTypes.object,
    ]),
    children: PropTypes.node,
};

CustomText.defaultProps = {
    size: 'sm',
    color: 'textColor',
    weight: 'normal',

    p: false,

    onPress: null,
    style: null,
    children: null,
};

/* Export Component ============================ */
export default CustomText;
