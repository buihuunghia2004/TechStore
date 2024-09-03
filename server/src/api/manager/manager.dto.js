const EMAIL = "email";
const USERNAME = "username";
const PASSWORD = "password";
const ROLES = "roles";
const _DESTROY = "_destroy";
const CREATED_BY = "createdBy";
const UPDATED_BY = "updatedBy";
const CREATED_AT = "createdAt";
const UPDATED_AT = "updatedAt";

const managerDTO = {
  query: {
    only: [
      EMAIL,
      USERNAME,
      ROLES,
      CREATED_AT,
      UPDATED_AT,
      CREATED_BY,
      UPDATED_BY,
      _DESTROY,
    ],
    manager_update: [
      EMAIL,
      USERNAME,
    ],
    admin_update:[
      EMAIL,
      USERNAME,
      PASSWORD,
      ROLES,
      _DESTROY,
    ],
    create: [
      EMAIL,
      USERNAME,
      PASSWORD,
      ROLES,
      _DESTROY,
    ],
  },
  response: {},
};

export default managerDTO;
