import { GiftRecord } from '../records/gift.record';
import { pool } from '../utils/db';

afterAll(async () => {
  await pool.end();
});

test('test 1 - Not inserted GiftRecord should have no id ', async () => {
  const nc = new GiftRecord({
    name: 'Testing',
    count: 123,
  });

  expect(nc.id).toBeUndefined();
});

test('test 2 - Not inserted GiftRecord should have id ', async () => {
  const nc = new GiftRecord({
    name: 'Testing',
    count: 123,
  });
  await nc.insert();

  expect(nc.id).toBeDefined();

  //uuid test
  expect(nc.id).toMatch(
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/
  );
});
