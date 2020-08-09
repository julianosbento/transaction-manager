import renderer from 'react-test-renderer';
import { ToggleVisibility } from '../../../../src/components';

describe('ToggleVisibility render', () => {
  it('should render ToggleVisibility correctly', () => {
    const tree = renderer.create(<ToggleVisibility />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
