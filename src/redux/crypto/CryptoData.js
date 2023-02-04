const SUCCESS_FETCH = 'React_capstone/crypto/SUCCESS_FETCH';
const FAIL_FETCH = 'React_capstone/crypto/FAIL_FETCH';
const URL = 'https://api.coinstats.app/public/v1/coins?limit=100';

export const getData = () => async (dispatch) => {
  try {
    const resp = await fetch(URL);
    const data = await resp.json();
    dispatch({
      type: SUCCESS_FETCH,
      payload: data.coins,
    });
  } catch (err) {
    dispatch({
      type: FAIL_FETCH,
    });
  }
};

const crytoReducer = (state = [], action) => {
  switch (action.type) {
    case SUCCESS_FETCH: return action.payload;
    case FAIL_FETCH:
      return { ...state, loading: false, error: action.payload };
    default: return state;
  }
};

export default crytoReducer;
