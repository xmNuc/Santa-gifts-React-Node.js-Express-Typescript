import React, { FormEvent, useState } from 'react';
import { CreateGiftReq, GiftEntity } from 'types';
import { Spinner } from '../Spinner/Spinner';

export const Addchild = () => {
  const [form, setForm] = useState<CreateGiftReq>({
    name: '',
    count: 0,
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
      const res = await fetch(`http://localhost:3001/gift`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data: GiftEntity = await res.json();
      console.log(data);

      setLoading(false);
      setResoultInfo(`${data.name} added with ID ${data.id}`);
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
        <button onClick={() => setResoultInfo(null)}>Add another one</button>
      </div>
    );
  }

  return (
    <form onSubmit={sendForm}>
      <h2>Add gift</h2>
      <p>
        <label>Name</label>
        <input type="text" value={form.name} onChange={(e) => updateForm('name', e.target.value)} />
      </p>
      <p>
        <label>Count</label>
        <input
          type="number"
          value={form.count}
          onChange={(e) => updateForm('count', Number(e.target.value))}
        />
      </p>
      <button>Add</button>
    </form>
  );
};
