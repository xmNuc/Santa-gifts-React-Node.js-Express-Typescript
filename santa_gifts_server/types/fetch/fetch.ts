export interface FetchOptions {
  address: string;
}

const address = await fetch(`http://localhost:3001/gift/${idOfGift}`);
