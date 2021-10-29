export const createPromiseThunk = (promiseCreator) => {
  return param => async dispatch => {
    try {
      // 결과물의 이름을 payload 라는 이름으로 통일시킵니다.
      const payload = await promiseCreator(param);
      dispatch(payload); // 성공
    } catch (e) {

    }
  };
};