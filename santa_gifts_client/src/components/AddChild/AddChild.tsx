import React, { FormEvent, useState } from 'react';
import { ChildEntity, CreateChildReq, GiftEntity } from 'types';
import { Spinner } from '../Spinner/Spinner';

export const Addchild = () => {
  const [form, setForm] = useState<CreateChildReq>({
    name: '',
    giftId: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [resultInfo, setResoultInfo] = useState<string | null>(null);

  const updateForm = (key: string, value: any) => {
    setForm((Form) => ({
      ...form,
      [key]: value,
    }));
  };

  const sendForm = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3001/child`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data: ChildEntity = await res.json();
      console.log(data);

      setLoading(false);
      setResoultInfo(`${data.name} Has ben created on Santa's list`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }
  if (resultInfo !== null) {
    return (
      <div>
        {' '}
        <p>{resultInfo}</p>
        <button onClick={() => setResoultInfo(null)}>Add another kid</button>
      </div>
    );
  }

  return (
    <form onSubmit={sendForm}>
      <h2>Add child</h2>
      <p>
        <label>Name</label>
        <input type="text" value={form.name} onChange={(e) => updateForm('name', e.target.value)} />
      </p>

      <button>Add</button>
    </form>
  );
};
