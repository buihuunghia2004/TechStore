exports = {
  async up(db, client) {
    const managers = [
      {
        email:'admin@techstore.com',
        username:'admin',
        password:'123456',
        createdBy:'System',
        updatedBy:'System',
        destroy:false
      }
    ]
    await db.collection("managers").insertMany(managers);
  },

  async down(db, client) {
    await db.collection("managers").deleteMany({});
  }
};
