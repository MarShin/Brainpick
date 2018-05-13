import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';

import { TaskContainer } from '../components/TaskContainer';

class Home extends Component {
    handleSwapCurrency = () => {
        console.log('press swap currency');
    };

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="dark-content" />
                <TaskContainer navigation={this.props.navigation} />
            </Container>
        );
    }
}

export default Home;
