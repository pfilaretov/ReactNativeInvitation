import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class App extends React.Component {
  /*
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi guys! :)</Text>
      </View>
    );
  }
  */
  
  _onYes() {
    Alert.alert(
		'Hooray! :)',
		'I cannot come soon enough to see you!',
		[
			{text: 'Yep'}
		]
	)
  }
  
  _onNo() {
    Alert.alert(
		'No-no-no',
		'You better push "Yes"...',
		[
			{text: 'Yup'}
		]
	)
  }
  _onDontPress() {
    Alert.alert(
		'So, as you have already pushed...',
		'Remember! Do not push it again...',
		[
			{text: 'Deal'}
		]
	)
  }

  render() {
	const dimensions = Dimensions.get('window');
	//const imageHeight = Math.round(dimensions.width * 1350 / 1080); // W=1080, H=1350
	const imageHeight = Math.round(dimensions.width * 769 / 829); // W=829, H=769 
	const imageWidth = dimensions.width;

    return (
		<View style={styles.container}>
			<Image 
				source={require('./1.jpg')} 
				style={{height: imageHeight, width: imageWidth, margin: 10}} />
		
			<View>
				<Text style={styles.textStyle}>Do you want to see me?</Text>
			</View>
			
			<View style={styles.alternativeLayoutButtonContainer}>
				<Button
					onPress={this._onYes}
					title="Yes!"/>
				<Text style={styles.spaceTextStyle}> </Text>
				<Button
					onPress={this._onNo}
					title="No..."/>
			</View>
			<View style={styles.buttonContainer}>
				<Button
					onPress={this._onDontPress}
					title="Do NOT push!!!"
					color="red"/>
			</View>
		</View>
    );
  }  
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	buttonContainer: {
		margin: 20
	},
	alternativeLayoutButtonContainer: {
		margin: 20,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	textStyle: {
		fontWeight: 'bold',
		fontSize: 20,
		margin: 20
	},
	spaceTextStyle: {
		fontWeight: 'bold',
		fontSize: 20,
		marginLeft: 5,
		marginRight: 5
	}
});

