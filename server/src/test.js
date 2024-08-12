const populate = ['roles']

const lookupConfig = {
  roles: [
    {
      $lookup: {
        from: "managerroles",
        localField: "_id",
        foreignField: "managerId",
        as: "managerRoles",
      },
    },
    {
      $lookup: {
        from: "roles",
        localField: "managerRoles.roleId",
        foreignField: "_id",
        as: "roles",
      },
    },
  ],
};

populate.map((item) => {
  console.log(...lookupConfig[item]);
});

// console.log(...lookupConfig["role"]);
