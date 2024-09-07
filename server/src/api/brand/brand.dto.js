const NAME = 'name';
const CODE = 'code';
const IMAGE_URL = 'imgUrl';
const IMAGE_PID = 'imgPId';
const _DESTROY = '_destroy';
const CREATED_BY = 'createdBy';
const UPDATED_BY = 'updatedBy';
const CREATED_AT = 'createdAt';
const UPDATED_AT = 'updatedAt';

const brandDTO = {
  query: {
    only: [
      NAME,
      CODE,
      IMAGE_URL,
      IMAGE_PID,
      CREATED_AT,
      UPDATED_AT,
      CREATED_BY,
      UPDATED_BY,
      _DESTROY,
    ],
    update: [
      NAME,
    ],
    create: [
      NAME,
    ],
  },
  response: {},
};

export default brandDTO;
