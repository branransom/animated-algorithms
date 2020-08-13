import * as React from 'react';

type CircleProps = {
  radius: number;
};

export default (props: CircleProps) => {
  const { radius } = props;

  return (
    <svg width={radius * 2} height={radius * 2}>
      <circle cx={`${radius}`} cy={`${radius}`} r={`${radius}`} />
    </svg>
  );
};

