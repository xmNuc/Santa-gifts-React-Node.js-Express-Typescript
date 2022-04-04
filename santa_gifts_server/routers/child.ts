import { Router } from 'express';
import { ChildRecord } from '../records/child.record';
import { GiftRecord } from '../records/gift.record';
import { ValidationError } from '../utils/error';
import { CreateChildReq, ListChildrenRes, SetGiftForChildReq } from '../types';

export const childRouter = Router();

childRouter
  .get('/', async (req, res) => {
    const childrenList = await ChildRecord.listAll();
    const giftsList = await GiftRecord.listAll();

    res.json({
      childrenList,
      giftsList,
    } as ListChildrenRes);
  })
  .post('/', async (req, res) => {
    const newChild = new ChildRecord(req.body as CreateChildReq);
    await newChild.insert();

    res.json(newChild);
  })
  .patch('/gift/:childId', async (req, res) => {
    const child = await ChildRecord.getOne(req.params.childId);
    const { body }: { body: SetGiftForChildReq } = req;
    // console.log(child);

    if (child === null) {
      throw new ValidationError('Child ID not found');
    }

    const gift = body.giftId === '' ? null : await GiftRecord.getOne(body.giftId);

    // console.log(gift);
    // console.log(child);

    if (gift) {
      if (gift.count <= (await gift.countGivenGifts())) {
        throw new ValidationError('This gift isnt available, Santa Clause have to small warehouse');
      }
    }

    child.giftId = gift?.id ?? null;
    // child.giftId = gift === null ? null : gift.id;
    // console.log(child.giftId);
    await child.update();

    res.json(child);
  });
