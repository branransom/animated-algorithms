import React from 'react';

type RectangleProps = {
  width: string;
  height: string;
  data: string;
  fill: string;
};

const Rectangle = ({ width, height, data, fill }: RectangleProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <svg style={{ marginLeft: 5 }} width={width} height={height}>
        <path d={data} fill={fill} />
      </svg>
    </div>
  );
};

export default Rectangle;
