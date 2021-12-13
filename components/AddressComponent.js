import React, {Component} from 'react';
import {Text, TouchableOpacity, View, TextInput, Button} from 'react-native';

/*Custom*/
import {appStyle} from '../config';

export default class AddressComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={appStyle.section}>
        <Text style={appStyle.heading}>Confirm Shipping Address</Text>
        <Text style={[appStyle.text, appStyle.address]}>
          {this.props.address}
        </Text>
        <TouchableOpacity style={appStyle.btnLink}>
          <Text style={appStyle.btnLinkText}>Change</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
