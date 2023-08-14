import getLevel from '../getLevel';
import fetchData from '../http';

jest.mock('../http');
beforeEach(() => {
  jest.resetAllMocks();
});
test('should call getLevel once', () => {
  fetchData.mockReturnValue({});
  getLevel(326);
  expect(fetchData).toBeCalledWith('https://server/user/326');
});
