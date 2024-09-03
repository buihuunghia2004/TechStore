const NAME = 'name';
const URL_IMAGE = 'urlImage';
const SLUG = 'slug';
const CODE = 'code';
const _DESTROY = '_destroy';
const CREATED_BY = 'createdBy';
const UPDATED_BY = 'updatedBy';
const CREATED_AT = 'createdAt';
const UPDATED_AT = 'updatedAt';

const categoryDTO = {
  query: {
    only: [
      NAME,
      URL_IMAGE,
      SLUG,
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

export default categoryDTO;
