import React from 'react';
import { Addchild } from '../components/AddChild/AddChild';
import { ChildrenList } from '../components/Children/ChildrenList';

export const Childview = () => {
  return (
    <>
      <ChildrenList />
      <Addchild />
    </>
  );
};
