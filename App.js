import React, {Component} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

/*Custom*/
import {appStyle} from './config';
import {AddressComponent, CardComponent} from './components';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={appStyle.container}>
        <ScrollView>
          <AddressComponent address="123, Pacific BLVD, San Diego California 90372" />
          <CardComponent />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
