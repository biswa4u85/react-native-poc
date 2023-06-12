import { StyleSheet, Platform, Dimensions } from 'react-native'
import { Color } from '../../common';
export default StyleSheet.create({
    venderBox: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: Color.white,
        borderRadius: 5,
        marginVertical: 2,
        shadowColor: Color.white,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 2
    },
    venderOffline: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 999,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    whiteText: {
        fontSize: 15,
        color: Color.white,
        fontWeight: 'bold',
    },
    venderContain: {
        padding: 10,
    },
    hilite: {
        fontSize: 11,
        color: Color.primary,
        fontWeight: 'bold',
    },
    grey: {
        fontSize: 10,
        color: Color.grey,
        fontWeight: 'bold',
    },
    venderImg: {
        width: '100%',
        height: 70,
    },
    venderDetails: {
        width: '100%',
        padding: 10,
    },
});