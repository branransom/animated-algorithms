import { Reducer } from 'redux';

const immutableSwap = (items, firstIndex, secondIndex) => {
  const result = [...items];

  console.log(result);

  [result[firstIndex], result[secondIndex]] = [
    result[secondIndex],
    result[firstIndex],
  ];

  console.log(`result: ${result}`);
  return result;
};

const numbers: Reducer = (state = [], action: any) => {
  console.log('in reducer');
  switch (action.type) {
    case 'SET_RANDOM_NUMBERS':
      return [...Array(100)].map(() => ~~(Math.random() * 250));
    case 'SWAP_INDICES':
      console.log(action.payload);
      return immutableSwap(state, action.payload.a, action.payload.b);
    default:
      return state;
  }
};

export default numbers;
