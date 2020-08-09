import renderer from 'react-test-renderer';
import { Balance } from '../../../../src/components';

describe('Balance render', () => {
  it('should render Balance correctly', () => {
    const tree = renderer.create(<Balance />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
