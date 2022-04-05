import React, { FormEvent, useState } from 'react';
import { GiftEntity, SetGiftForChildReq } from 'types';
import { Spinner } from '../Spinner/Spinner';

interface Props {
  giftsList: GiftEntity[];
  selectedId: string;
  childId: string;
}

export const ChildGiftSelect = (props: Props) => {
  const [selected, setSelected] = useState<string>(props.selectedId);
  const [save, setSave] = useState<boolean>(false);

  const sendForm = async (e: FormEvent) => {
    e.preventDefault();
    setSave(true);
    await fetch(`http://localhost:3001/child/gift/${props.childId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        giftId: selected,
      } as SetGiftForChildReq),
    });
    setSave(false);
  };

  if (save === null) {
    return <Spinner />;
  }

  return (
    <>
      <form onSubmit={sendForm}>
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          {props.giftsList.map((gift) => (
            <option key={gift.id} value={gift.id}>
              {gift.name}
            </option>
          ))}
        </select>
        <button type="submit">Save</button>
      </form>
    </>
  );
};
