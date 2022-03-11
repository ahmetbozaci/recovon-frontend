import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import SignupForm from '../components/SignupForm';

it('SignupForm renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><Router><SignupForm /></Router></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
