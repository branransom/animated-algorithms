import * as React from 'react';

import { connect } from 'react-redux';
import swapIndices from './actions/swapIndices';
import setRandomNumbers from './actions/setRandomNumbers';
import Circle from './components/Circle';
import Rectangle from './components/Rectangle';

interface AppProps {
  randomNumbers: Array<number>;
  setRandomNumbers: Function;
  swapIndices: Function;
}

interface AppState {
  randomNumbers: Array<number>;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class App extends React.Component<AppProps, AppState> {
  handleSetRandomNumbers = () => {
    const { setRandomNumbers: dispatchSetRandomNumbers } = this.props;

    dispatchSetRandomNumbers();
  };

  handleSort = async () => {
    const { swapIndices: dispatchSwapIndices, randomNumbers } = this.props;

    const arr = [...randomNumbers];

    const toDispatch = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          console.log(arr);
          console.log({ a: j, b: j + 1 });
          const lesser = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = lesser;

          toDispatch.push(() => dispatchSwapIndices(j, j + 1));
        }
      }
    }

    for (const dispatch of toDispatch) {
      dispatch();
      await sleep(10);
    }

    return randomNumbers;
  };

  render() {
    const { randomNumbers = [] } = this.props;

    return (
      <div>
        <button
          type="button"
          className="sort"
          onClick={this.handleSetRandomNumbers}
        >
          Set Random Numbers
        </button>
        <button type="button" className="sort" onClick={this.handleSort}>
          Sort
        </button>
        <div style={{ display: 'flex' }}>
          {randomNumbers.map((r) => {
            const y = 300 - (300 * r) / 250;

            return (
              <Rectangle
                width="5px"
                height="300px"
                data={`M 0 300 L 0 ${y} L 60 ${y} l 60 300 Z`}
                fill="blue"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { randomNumbers: state };
};

export default connect(mapStateToProps, { setRandomNumbers, swapIndices })(App);
