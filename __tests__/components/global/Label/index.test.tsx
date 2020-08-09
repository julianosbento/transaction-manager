import renderer from 'react-test-renderer';
import { Label } from '../../../../src/components';

describe('Label render', () => {
  it('should render Label correctly', () => {
    const tree = renderer.create(<Label label='Teste' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
