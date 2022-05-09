import { GiftRecord } from '../records/gift.record';
import { pool } from '../utils/db';

let newGift: GiftRecord;

beforeAll(async () => {
  newGift = new GiftRecord({
    name: 'Testing',
    count: 123,
  });
});

beforeEach(() => {
  // 1. Remove all data from table in database before each test
  // 2. Give back data (constans data from db)
});

afterAll(async () => {
  await pool.end();
});

test('test 1 - Not inserted GiftRecord should have no id ', async () => {
  expect(newGift.id).toBeUndefined();
});

test('test 2 - Not inserted GiftRecord should have id ', async () => {
  await newGift.insert();
  expect(newGift.id).toBeDefined();

  //uuid test
  expect(newGift.id).toMatch(
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/
  );
});

// test('test 1 - Not inserted GiftRecord should have no id ', async () => {
//   const newGift = new GiftRecord({
//     name: 'Testing',
//     count: 123,
//   });

//   expect(newGift.id).toBeUndefined();
// });

// test('test 2 - Not inserted GiftRecord should have id ', async () => {
//   const nc = new GiftRecord({
//     name: 'Testing',
//     count: 123,
//   });
//   await nc.insert();

//   expect(nc.id).toBeDefined();

//   //uuid test
//   expect(nc.id).toMatch(
//     /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/
//   );
// });
