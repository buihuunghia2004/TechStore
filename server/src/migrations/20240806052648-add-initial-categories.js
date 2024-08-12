exports = {
  async up(db, client) {
    const categories = [
      { name: "Điện thoại", image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,w_120,h_120/https://cdn.tgdd.vn/content/55BCB235-F6DB-4643-AA71-4A11819B6B40-120x120.png" },
      { name: "Laptop", image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,w_120,h_120/https://cdn.tgdd.vn/content/55BCB235-F6DB-4643-AA71-4A11819B6B40-120x120.png" },
      { name: "Máy tính bảng", image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,w_120,h_120/https://cdn.tgdd.vn/content/55BCB235-F6DB-4643-AA71-4A11819B6B40-120x120.png" },
      { name: "Phụ kiện", image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,w_120,h_120/https://cdn.tgdd.vn/content/55BCB235-F6DB-4643-AA71-4A11819B6B40-120x120.png" },
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