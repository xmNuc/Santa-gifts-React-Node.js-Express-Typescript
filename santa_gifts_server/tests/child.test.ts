import { ChildRecord } from '../records/child.record';

test('test 1', async () => {
  const children = await ChildRecord.listAll();
  //   console.log(children);

  expect(children).toBeDefined();
});
