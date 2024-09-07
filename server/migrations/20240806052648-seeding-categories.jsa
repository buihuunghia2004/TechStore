const { ObjectId } = require("mongodb");

module.exports = {
  async up(db, client) {
    const brand1 = {
      _id: new ObjectId(),
      name: "Apple",
      slug: "apple",
      urlImage:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,w_120,h_120/https://cdn.tgdd.vn/content/55BCB235-F6DB-4643-AA71-4A11819B6B40-120x120.png",
    };
    const brand2 = {
      _id: new ObjectId(),
      name: "Apple",
      slug: "apple",
      urlImage:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,w_120,h_120/https://cdn.tgdd.vn/content/55BCB235-F6DB-4643-AA71-4A11819B6B40-120x120.png",
    };
    const brand3 = {
      _id: new ObjectId(),
      name: "Apple",
      slug: "apple",
      urlImage:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,w_120,h_120/https://cdn.tgdd.vn/content/55BCB235-F6DB-4643-AA71-4A11819B6B40-120x120.png",
    };
    const brand4 = {
      _id: new ObjectId(),
      name: "Apple",
      slug: "apple",
      urlImage:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,w_120,h_120/https://cdn.tgdd.vn/content/55BCB235-F6DB-4643-AA71-4A11819B6B40-120x120.png",
    };

    await db.collection("brands").insertMany([brand1, brand2, brand3, brand4]);

    const categories = [
      {
        name: "Điện thoại",
        slug: "dien-thoai",
        brands: [
          brand1._id,
          brand2._id
        ],
        urlImage:
          "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,w_120,h_120/https://cdn.tgdd.vn/content/55BCB235-F6DB-4643-AA71-4A11819B6B40-120x120.png",
      },
      {
        name: "Laptop",
        slug: "laptop",
        brands: [
          brand3._id,
          brand4._id
        ],
        urlImage:
          "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,w_120,h_120/https://cdn.tgdd.vn/content/55BCB235-F6DB-4643-AA71-4A11819B6B40-120x120.png",
      },
    ];
    await db.collection("categories").insertMany(categories);
  },
  async down(db, client) {
    const categoryNames = ["Điện thoại", "Laptop", "Máy tính bảng", "Phụ kiện"];
    await db.collection("categories").deleteMany({
      name: { $in: categoryNames },
    });
  },
};
