import renderer from 'react-test-renderer';
import { Logo } from '../../../../src/components';

describe('Logo render', () => {
  it('should render Logo correctly', () => {
    const tree = renderer.create(<Logo size={8} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
