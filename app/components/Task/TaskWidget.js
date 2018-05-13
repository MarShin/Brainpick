import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const title = 'Photograph Common Objects';
const description =
    'Choose an object from the list and take a high quality photo of it - but only photos meeting our standards will be paid out!';
const price = 'Up to $0.5 per approved photo';

class ClearButton extends Component {
    handleSmth = () => {
        console.log('haha');
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.price}>{price}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

ClearButton.propTypes = {
    onPress: PropTypes.func,
};

export default ClearButton;
