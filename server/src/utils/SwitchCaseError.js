const SwitchCaseError = (error,) => {
  switch (error) {
    case "brandNotFound":
      return "Brand not found";
    case "categoryNotFound":
      return "Category not found";
    case "productNotFound":
      return "Product not found";
    case "managerNotFound":
      return "Manager not found";
    case "orderNotFound":
  }
}