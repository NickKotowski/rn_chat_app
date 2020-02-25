export function addNumber(value) {
  return (dispatch, getState) => {
    const number = value + 1;
    dispatch({type: 'ADD_NUMBER', payload: number});
  };
}
