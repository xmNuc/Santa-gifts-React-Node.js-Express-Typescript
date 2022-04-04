import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GetSingleGiftRes } from 'types';

export const SingleGiftView = () => {
  const [giftInfo, setGiftInfo] = useState<GetSingleGiftRes | null>(null);
  const { idOfGift } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/gift/${idOfGift}`);
      setGiftInfo(await res.json());
    })();
  }, [idOfGift]);

  if (giftInfo === null) {
    return null;
  }

  return (
    <>
      <h1>{giftInfo.gift.name}</h1>
      <p>
        This gift has ID <strong>{giftInfo.gift.id}</strong>. We had{' '}
        <strong>{giftInfo.gift.count}</strong> of this item and{' '}
        <strong>{giftInfo.givenCount}</strong> we alredy given
      </p>
      <p>
        <Link to="/gift">Go back</Link>
      </p>
    </>
  );
};
