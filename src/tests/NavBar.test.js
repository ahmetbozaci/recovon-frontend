import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Navbar from '../components/NavBar';

it('Navbar renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><Router><Navbar /></Router></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
