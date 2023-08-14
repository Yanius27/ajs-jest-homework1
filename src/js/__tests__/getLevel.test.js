import getLevel from '../getLevel';
import fetchData from '../http';

jest.mock('../http');
beforeEach(() => {
  jest.resetAllMocks();
});

test('should call getLevel once', () => {
  fetchData.mockReturnValue({ status: 'ok', url: 'https://server/user/326', level: '99' });
  getLevel(326);
  expect(fetchData).toBeCalledWith('https://server/user/326');
});

test('should check status', () => {
  fetchData.mockReturnValue({ status: 'error' });
  expect(getLevel()).toBe('Информация об уровне временно недоступна');
});
