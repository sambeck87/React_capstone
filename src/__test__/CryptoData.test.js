import crytoReducer from '../redux/crypto/CryptoData';

const SUCCESS_FETCH = 'React_capstone/crypto/SUCCESS_FETCH';
const FAIL_FETCH = 'React_capstone/crypto/FAIL_FETCH';

describe('crytoReducer', () => {
  it('should return the initial state', () => {
    expect(crytoReducer(undefined, {})).toEqual([]);
  });

  it('should handle the SUCCESS_FETCH action', () => {
    const payload = [{ name: 'Bitcoin' }, { name: 'Ethereum' }];

    expect(crytoReducer([], { type: SUCCESS_FETCH, payload })).toEqual(payload);
  });

  it('should handle the FAIL_FETCH action', () => {
    const error = 'Error fetching data';

    expect(crytoReducer([], {
      type: FAIL_FETCH, payload: error,
    })).toEqual({ loading: false, error });
  });
});
