const swapIndices = (a: number, b: number) => ({
  type: 'SWAP_INDICES',
  payload: {
    a,
    b,
  },
});

export default swapIndices;
