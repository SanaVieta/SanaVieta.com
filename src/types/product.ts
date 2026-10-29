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
  quantityAvailable: number;
  availableForSale: boolean;
};

export type SellingPlan = {
  id: string;
  name: string;
  priceAdjustments: {
    adjustmentValue: {
      adjustmentPercentage?: number;
    };
  }[];
};

export type SellingPlanGroup = {
  sellingPlans: { edges: { node: SellingPlan }[] };
};

export type ProductNode = {
  id: string;
  title: string;
  description: string;
  handle: string;
  preorder: {
    value: string
  }
  release_date:{
    value: string
  }
  images: { edges: { node: ProductImage }[] };
  variants: { edges: { node: ProductVariant }[] };
  sellingPlanGroups: { edges: { node: SellingPlanGroup }[] };
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
