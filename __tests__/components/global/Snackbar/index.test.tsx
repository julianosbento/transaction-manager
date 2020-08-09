import renderer from 'react-test-renderer';
import { Snackbar } from '../../../../src/components';

describe('Snackbar render', () => {
  it('should render Snackbar correctly', () => {
    const tree = renderer.create(<Snackbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
