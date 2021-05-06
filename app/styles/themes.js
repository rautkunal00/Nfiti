import { scaleFont, scaleSize } from '../utils/scaleUtils';
import { css } from 'styled-components/native';

const theme = {
    COLOR: {
        PRIMARY: '#1779ba',
        SECONDARY: '#767676',
        SUCCESS: '#3adb76',
        WARNING: '#ffae00',
        ALERT: '#cc4b37',
        BACKGROUND_COLOR: '#f3f2f2',
        TEXT_COLOR: '#5a5858',
        BLACK_TEXT: '#090202',
        ACTIVE_PRIMARY: '#073259',
    },
    COLOR_PALETTE: {
        WHITE: '#fff',
        BLACK: '#000',
        GRAY_LIGHT: '#e6e6e6',
        GRAY_MEDIUM: '#cacaca',
        GRAY_DARK: '#8a8a8a',
    },
    FONT: {
        FONT_FAMILY_REGULAR: 'OpenSans-Regular',
        FONT_FAMILY_BOLD: 'OpenSans-Bold',
        FONT_WEIGHT_REGULAR: '400',
        FONT_WEIGHT_BOLD: '700',
        FONT_SIZE_16: scaleFont(16),
        FONT_SIZE_14: scaleFont(14),
        FONT_SIZE_12: scaleFont(12),
        LINE_HEIGHT_24: scaleFont(24),
        LINE_HEIGHT_20: scaleFont(20),
        LINE_HEIGHT_16: scaleFont(16),
    },
    SCALE: {
        SCALE_18: scaleSize(18),
        SCALE_16: scaleSize(16),
        SCALE_12: scaleSize(12),
        SCALE_8: scaleSize(8),
    },
    // common snippets styling goes here
    VALIDATION_ERROR_MSG: css`
        color: red;
        font-size: 20;
    `,
};

export default theme;
