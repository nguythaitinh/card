import { AppRegistry } from 'react-native';

import App from './launcher';

AppRegistry.registerComponent('app', () => App);
AppRegistry.runApplication('app', {
	initialProps: {},
	rootTag: document.getElementById('root'),
});
