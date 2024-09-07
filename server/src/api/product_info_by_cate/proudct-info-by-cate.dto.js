const NAME = 'name';
const CODE = 'code';
const _DESTROY = '_destroy';
const CREATED_BY = 'createdBy';
const UPDATED_BY = 'updatedBy';
const CREATED_AT = 'createdAt';
const UPDATED_AT = 'updatedAt';

const productInfoByCateDTO = {
  query: {
    only: [
      NAME,
      CODE,
      CREATED_AT,
      UPDATED_AT,
      CREATED_BY,
      UPDATED_BY,
      _DESTROY,
    ],
    update: [
      NAME,
      CODE,
    ],
    create: [
      NAME,
      CODE
    ],
  },
  response: {},
};

export default productInfoByCateDTO;
