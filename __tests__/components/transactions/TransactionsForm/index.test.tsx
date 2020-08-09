import renderer from 'react-test-renderer';
import { TransactionForm } from '../../../../src/components';

describe('TransactionForm render', () => {
  it('should render TransactionForm correctly', () => {
    const tree = renderer.create(<TransactionForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
