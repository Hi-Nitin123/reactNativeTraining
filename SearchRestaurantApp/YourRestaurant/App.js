import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/Mainstack';

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
