// Action Types
export const SET_BILL_AMOUNT = 'SET_BILL_AMOUNT';
export const SET_TIP_PERCENTAGE = 'SET_TIP_PERCENTAGE';
export const SET_SPLIT_COUNT = 'SET_SPLIT_COUNT';

// Action Creators
export const setBillAmount = (amount) => ({
  type: SET_BILL_AMOUNT,
  payload: amount,
});

export const setTipPercentage = (percentage) => ({
  type: SET_TIP_PERCENTAGE,
  payload: percentage,
});

export const setSplitCount = (count) => ({
    type: SET_SPLIT_COUNT,
    payload: count,
  });