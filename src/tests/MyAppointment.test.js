import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import MyAppointment from '../components/MyAppointment';

it('MyAppointment renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><Router><MyAppointment /></Router></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
