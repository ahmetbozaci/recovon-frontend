import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Doctor from '../components/Doctor';

it('Doctor renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><Router><Doctor /></Router></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
