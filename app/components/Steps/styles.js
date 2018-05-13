import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width * 0.9;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '$darkGray',
        fontSize: 15,
        fontWeight: '500',
    },
    image: {
        // alignItems: 'center',
        // justifyContent: 'center',
        width: imageWidth,
        height: imageWidth,
    },
    instructions: {
        color: '$lightBlue',
        fontSize: 12,
        fontWeight: '200',
        paddingVertical: 10,
    },
});

export default styles;
