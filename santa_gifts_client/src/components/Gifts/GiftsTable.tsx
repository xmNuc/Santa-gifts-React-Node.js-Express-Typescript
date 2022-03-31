import React from 'react';
import { GiftEntity } from 'types';

import { GiftsTableRow } from './GiftTableRow';

interface Props {
  gifts: GiftEntity[];
  onGiftsChange: () => void;
}
export const GiftsTable = (props: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Count</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.gifts.map((gift) => (
          <GiftsTableRow gift={gift} key={gift.id} onGiftsChange={props.onGiftsChange} />
        ))}
      </tbody>
    </table>
  );
};
