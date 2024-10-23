import { SET_BILL_AMOUNT, SET_SPLIT_COUNT, SET_TIP_PERCENTAGE } from "./BillAction";

const initialState = {
  billAmount: 0,
  tipPercentage: 20,
  splitCount:1,
};

export const tipReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BILL_AMOUNT:
      return {
        ...state,
        billAmount: parseFloat(action.payload),
      };
    case SET_TIP_PERCENTAGE:
      return {
        ...state,
        tipPercentage: parseFloat(action.payload),
      };

    case SET_SPLIT_COUNT:
      return {
        ...state,
        splitCount: parseFloat(action.payload),
      };
    default:
      return state;
  }
};
