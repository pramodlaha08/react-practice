import React from 'react';

const Loading = ({align,font}) => {
  return (
    <div className={`flex items-${align} justify-center w-full h-screen`}>
      <h1 className={`text-${font} font-bold`}>Loading....</h1>
    </div>
  );
};

export default Loading;