exports = {
  async up(db, client) {
    const brands = [
      { name: "Apple", image: "https://cdn2.fptshop.com.vn/unsafe/48x0/filters:quality(100)/small/133_logo_apple_a96d38701f.png" },
      { name: "Samsung", image: "https://cdn2.fptshop.com.vn/unsafe/48x0/filters:quality(100)/small/133_logo_samsung_a96d38701f.png" },
      { name: "Huawei", image: "https://cdn2.fptshop.com.vn/unsafe/48x0/filters:quality(100)/small/133_logo_huawei_a96d38701f.png" },
      { name: "Xiaomi", image: "https://cdn2.fptshop.com.vn/unsafe/48x0/filters:quality(100)/small/133_logo_xiaomi_a96d38701f.png" },
    ]

    await db.collection("brands").insertMany(brands);
  },

  async down(db, client) {
    const brandNames = ["Apple", "Samsung", "Huawei", "Xiaomi"];
    await db.collection("brands").deleteMany({
      name: { $in: brandNames },
    });
  }
};
