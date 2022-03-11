import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import LogoutPage from '../components/LogoutPage';

it('LogoutPage renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><Router><LogoutPage /></Router></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
