type Product = {
  active: boolean;
  attributes: Array<any>;
  created: number;
  description: string;
  id: string;
  images: Array<string>;
  livemode: false;
  metadata: {};
  name: string;
  object: "product";
  package_dimensions: number;
  shippable: boolean;
  statement_descriptor: string;
  tax_code: string;
  type: string;
  unit_label: string;
  updated: number;
  url: string;
};

type Price = {
  id: "price_1K8ED3IL1xv03LEHc0Ikpx7m";
  object: "price";
  active: boolean;
  billing_scheme: "per_unit" | "tiered";
  created: number;
  currency: string;
  livemode: boolean;
  lookup_key: null;
  metadata: Record<string, any>;
  nickname: string;
  product: Product;
  recurring: {
    aggregate_usage: "sum" | "last_during_period" | "last_ever" | "max";
    interval: "day" | "week" | "month" | "year";
    interval_count: number;
    usage_type: "metered" | "licensed";
  };
  tax_behavior: "inclusive" | "exclusive" | "unspecified";
  tiers_mode: "volume" | "graduated";
  transform_quantity: "up" | "down";
  type: "recurring" | "one_time";
  unit_amount: number;
  unit_amount_decimal: string;
};
