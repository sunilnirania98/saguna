import React, {Component} from 'react';
import {Text, TouchableOpacity, View, TextInput, Button} from 'react-native';

/*Custom*/
import {appStyle} from '../config';

export default class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card_name: '',
      card_number: '',
      card_exp_date: '',
      card_cvv: '',
      billing_street: '',
      billing_city: '',
      billing_state: '',
      billing_zipcode: '',
      billing_country: '',
    };
  }
  render() {
    return (
      <View>
        {/* Card Details */}
        <View style={appStyle.section}>
            <Text style={appStyle.heading}>Add Payment Details</Text>
            <View style={appStyle.formInputBox}>
              <TextInput
                style={appStyle.formInput}
                placeholder="Name on the card"
                onChangeText={text => {
                  this.setState({card_name: text});
                }}
                value={this.state.card_name}
              />
            </View>
            <View style={appStyle.formInputBox}>
              <TextInput
                style={appStyle.formInput}
                placeholder="16 digit card number"
                keyboardType="number-pad"
                onChangeText={text => {
                  this.setState({card_name: text});
                }}
                value={this.state.card_name}
              />
            </View>
            <View style={appStyle.formGroup}>
              <View style={appStyle.formGroupBox}>
                <TextInput
                  style={appStyle.formInput}
                  placeholder="Expiration date"
                  onChangeText={text => {
                    this.setState({card_exp_date: text});
                  }}
                  value={this.state.card_exp_date}
                />
              </View>
              <View style={appStyle.formGroupBox}>
                <TextInput
                  style={appStyle.formInput}
                  placeholder="CVV"
                  keyboardType="number-pad"
                  onChangeText={text => {
                    this.setState({card_cvv: text});
                  }}
                  value={this.state.card_cvv}
                />
              </View>
            </View>
          </View>

          {/* BillingAddress */}
          <View style={appStyle.section}>
            <Text style={appStyle.heading}>Billing Address</Text>

            <View style={appStyle.formInputBox}>
              <TextInput
                style={appStyle.formInput}
                placeholder="Street"
                onChangeText={text => {
                  this.setState({billing_street: text});
                }}
                value={this.state.billing_street}
              />
            </View>
            <View style={appStyle.formInputBox}>
              <TextInput
                style={appStyle.formInput}
                placeholder="City"
                onChangeText={text => {
                  this.setState({billing_city: text});
                }}
                value={this.state.billing_city}
              />
            </View>
            <View style={appStyle.formGroup}>
              <View style={appStyle.formGroupBox}>
                <TextInput
                  style={appStyle.formInput}
                  placeholder="State"
                  onChangeText={text => {
                    this.setState({billing_state: text});
                  }}
                  value={this.state.billing_state}
                />
              </View>
              <View style={appStyle.formGroupBox}>
                <TextInput
                  style={appStyle.formInput}
                  placeholder="Zipcode"
                  onChangeText={text => {
                    this.setState({billing_zipcode: text});
                  }}
                  value={this.state.billing_zipcode}
                />
              </View>
            </View>
            <View style={appStyle.formInputBox}>
              <TextInput
                style={appStyle.formInput}
                placeholder="Country"
                onChangeText={text => {
                  this.setState({billing_country: text});
                }}
                value={this.state.billing_country}
              />
            </View>
          </View>
          <TouchableOpacity style={appStyle.formButton}>
            <Text style={appStyle.formButtonText}>Pay Now</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
