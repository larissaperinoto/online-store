export async function getCategories() {
  const request = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  );
  const requestJson = await request.json();
  return requestJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const request = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  );
  const requestJson = await request.json();
  return requestJson;
}

export async function getProductsFromQuery(query) {
  const request = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
  );
  const requestJson = await request.json();
  return requestJson;
}

export async function getProductsFromCategory(category) {
  const request = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${category}`,
  );
  const requestJson = await request.json();
  return requestJson;
}

export async function getProductsFromProductId(productId) {
  const request = await fetch(
    `https://api.mercadolibre.com/items/${productId}`,
  );
  const requestJson = await request.json();
  return requestJson;
}
