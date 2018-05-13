import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// const INPUT_HEIGHT = 60;
const widgetWidth = Dimensions.get('window').width * 0.9;
const BORDER_RADIUS = 6;

export default EStyleSheet.create({
    container: {
        alignItems: 'flex-start',
        width: widgetWidth,
        // height: INPUT_HEIGHT,
        marginVertical: 10,
        backgroundColor: '$white',
        borderRadius: BORDER_RADIUS,
        borderColor: '$darkBlue',
        borderWidth: 0.5,
        // shadowColor: '$paleGray',
        // shadowOffset: { width: 10, height: 10 },
        shadowColor: '$paleGray',
        shadowOpacity: 0.5,
    },
    button: {
        width: '100%',
        padding: 20,
    },
    title: {
        color: '$darkGray',
        fontSize: 15,
        fontWeight: '500',
    },
    description: {
        color: '$lightBlue',
        fontSize: 12,
        fontWeight: '200',
    },
    price: {
        color: '$regularBlue',
        fontSize: 8,
        fontWeight: '100',
    },
});
