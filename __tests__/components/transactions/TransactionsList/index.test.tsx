import renderer from 'react-test-renderer';
import { TransactionsList } from '../../../../src/components';

describe('TransactionsList render', () => {
  it('should render TransactionsList correctly', () => {
    const tree = renderer.create(<TransactionsList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
