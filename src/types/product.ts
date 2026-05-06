export type ProductImage = {
  url: string;
  altText: string | null;
};

export type ProductPrice = {
  amount: string;
  currencyCode: string;
};

export type ProductVariant = {
  price: ProductPrice;
  id: string;
};

export type ProductNode = {
  id: string;
  title: string;
  description: string;
  handle: string;
  images: { edges: { node: ProductImage }[] };
  variants: { edges: { node: ProductVariant }[] };
};

export type ProductEdge = {
  node: ProductNode;
};

// root level type
export type ProductsResponse = {
  data: {
    products: {
      edges: ProductEdge[];
    };
  };
};
