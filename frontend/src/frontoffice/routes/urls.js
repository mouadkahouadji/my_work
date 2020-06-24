// this file contains urls
const urls = {
  HOME: "/shop",
  LOGIN: "/shop/login",
  REGISTRATION: "/shop/registration",
  NOTFOUND: "/shop/404",
  
  // EACH CATALOG GROUO CORRESPOND OF BACKEND GROUP
  NEWS_PRODUCTS: "/shop/catalog/news-products",
  DESIGNER: "/shop/catalog/designer",
  CLOTHING: "/shop/catalog/clothing",
  SHOE: "/shop/catalog/shoe",
  BAG: "/shop/catalog/bag",
  ACCESSORIE: "/shop/catalog/accessories",
  JEWELLRIE: "/shop/catalog/jewellrie",
  LINGERIE: "/shop/catalog/lingerie",
  BEAUTY: "/shop/catalog/lingerie",
  TO_WARE: "/shop/catalog/what-to-ware",
  
  SINGLE_PRODUCT: "/shop/products/:slug", // We will change this url like that /category/product-name or /collection/product-name
  CART: "/shop/sopping-cart",
  CHECKOUT: "/shop/checkout",

  ALL_PRODUCT: "/shop/all_products",
};


export default urls;
