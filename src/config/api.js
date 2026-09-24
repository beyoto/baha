// One source of truth for all backend collection routes.
export const API_PATHS = {
  products: '/products_baha_auto',
  analytics: '/analytics_baha_auto',
};

export const productPath = (id = '') => `${API_PATHS.products}${id ? `/${id}` : ''}`;
export const productImagesPath = (id) => `${productPath(id)}/images`;
