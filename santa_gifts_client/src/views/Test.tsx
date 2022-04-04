import React from 'react';
import { useParams } from 'react-router-dom';

export const Test = () => {
  const { foo } = useParams();
  console.log(foo);

  return (
    <>
      <h2>Hello test</h2>
      <h4>{foo}</h4>
    </>
  );
};
