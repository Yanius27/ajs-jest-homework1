import getLevel from '../getLevel';
import fetchData from '../http';

jest.mock('../http');
beforeEach(() => {
  jest.resetAllMocks();
});

test('should call getLevel once', async () => {
  fetchData.mockResolvedValue({ status: 'ok', url: 'https://server/user/326', level: '99' });
  const result = await getLevel(326);
  expect(fetchData).toBeCalledWith('https://server/user/326');
  expect(result).toBe('Ваш текущий уровень: 99');
});

test('should check status', async () => {
  fetchData.mockResolvedValue({ status: 'error' });
  const result = await getLevel();
  expect(result).toBe('Информация об уровне временно недоступна');
});
