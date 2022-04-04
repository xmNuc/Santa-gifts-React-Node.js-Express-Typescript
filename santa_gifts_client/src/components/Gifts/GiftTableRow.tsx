import React, { MouseEvent } from 'react';
import { GiftEntity } from 'types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

interface Props {
  gift: GiftEntity;
  onGiftsChange: () => void;
}

export const GiftsTableRow = (props: Props) => {
  const deleteGift = async (e: MouseEvent) => {
    e.preventDefault();

    if (!window.confirm(`Are you sure you want to remove ${props.gift.name}`)) return;

    const res = await fetch(`http://localhost:3001/gift/${props.gift.id}`, {
      method: 'DELETE',
    });
    // console.log(res);
    if ([400, 500].includes(res.status)) {
      const error = await res.json();
      const notify = () => toast(`Error occurred ${error}`);
      notify();
      return;
    }
    props.onGiftsChange();
  };

  return (
    <tr>
      <th>
        <Link to={`/gift/${props.gift.id}`}>{props.gift.name}</Link>
      </th>
      <td>{props.gift.count}</td>
      <td>
        <a href="#" onClick={deleteGift}>
          🗑
        </a>
        <ToastContainer />
      </td>
    </tr>
  );
};
