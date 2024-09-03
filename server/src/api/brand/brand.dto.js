const NAME = 'name';
const URL_LOGO = 'urlLogo';
const CODE = 'code';
const _DESTROY = '_destroy';
const CREATED_BY = 'createdBy';
const UPDATED_BY = 'updatedBy';
const CREATED_AT = 'createdAt';
const UPDATED_AT = 'updatedAt';

const brandDTO = {
  query: {
    only: [
      NAME,
      URL_LOGO,
      CREATED_AT,
      UPDATED_AT,
      CREATED_BY,
      UPDATED_BY,
      _DESTROY,
    ],
    update: [
      NAME,
      URL_LOGO,
    ],
    create: [
      NAME,
      URL_LOGO,
      CODE
    ],
  },
  response: {},
};

export default brandDTO;
