import React, { useEffect, useState } from 'react';
import { ListChildrenRes } from 'types';
import { Spinner } from '../Spinner/Spinner';
import { ChildrenTable } from './ChildrenTable';

export const ChildrenList = () => {
  const [data, setData] = useState<ListChildrenRes | null>(null);

  const refreshGifts = async () => {
    setData(null);
    const res = await fetch('http://localhost:3001/child');
    const data = await res.json();
    setData(data);
    //   console.log(data);
  };

  useEffect(() => {
    refreshGifts();
  }, []);

  if (data === null) {
    return <Spinner />;
  }

  return (
    <>
      <h1>Gifts</h1>
      <ChildrenTable childrenList={data.childrenList} giftsList={data.giftsList}></ChildrenTable>
    </>
  );
};
