export type Product = {
  name: string;
  taxCode: TaxCode | undefined;
};

export type TaxCode = {
  name: string;
};
