import { Dimensions, Platform } from 'react-native';
import Color from './Color';
import Config from './Config';

const { height, width } = Dimensions.get('window');
const isIphoneX = Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && (height === 812 || width === 812)
const ToolbarHeight = isIphoneX ? 0 : 0

let Styles = {
    width: Dimensions.get('window').width,
    height: Platform.OS !== 'ios' ? height : (height - 20),
    app: {
        flexGrow: 1,
        backgroundColor: Color.primary,
        paddingTop: ToolbarHeight,
    },
    toolbar: {
        backgroundColor: Color.white,
        // paddingRight: 20,
    },
    logo: {
        height: 30,
    },
    headerRightIcon: {
        flexDirection: 'row',
    },
    primaryBtn: {
        backgroundColor: Color.primary,
    },
    rowWithflex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    rowWithflexnoSpace: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    noOrder: {
        backgroundColor: Color.primaryDark,
        borderRadius: 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
    },
    noOrderIcon: {
        fontSize: 18,
        color: Color.white,
        fontWeight: 'bold',
    },
    noOrderTxt: {
        fontSize: 13,
        color: Color.white,
        fontWeight: 'bold',
    },
};

export default Styles;