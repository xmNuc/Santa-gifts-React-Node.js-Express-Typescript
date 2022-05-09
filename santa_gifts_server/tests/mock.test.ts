import { ChildRecord } from '../records/child.record';

jest.spyOn(ChildRecord, 'getOne').mockImplementation(async (id: string) => {
  return new ChildRecord({
    id,
    name: 'Tester',
    giftId: '123',
  });
});

test('test 1', async () => {
  const child = await ChildRecord.getOne('1234567');

  expect(child).toBeDefined();
  expect(child.id).toEqual('1234567');
});

jest.spyOn(ChildRecord.prototype, 'update').mockImplementation(async () => {});

test('test 1', async () => {
  const child = await ChildRecord.getOne('1234567');
  await child.update();
});

// let child: ChildRecord;
// beforeAll(async () => {
//   child = ChildRecord.getOne('3453234');
// });

// jest.spyOn(ChildRecord, 'getOne').mockImplementation(async (id: string) => {
//   return new ChildRecord({
//     id,
//     name: 'Tester',
//     giftId: '123',
//   });
// });

// test('test 1', async () => {
//   expect(child).toBeDefined();
//   expect(child.id).toEqual('1234567');
// });

// jest.spyOn(ChildRecord.prototype, 'update').mockImplementation(async () => {});

// test('test 1', async () => {
//   await child.update();
// });
