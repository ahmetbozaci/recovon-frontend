import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Appointment from '../components/Appointment';

it('Appointment renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><Router><Appointment /></Router></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
