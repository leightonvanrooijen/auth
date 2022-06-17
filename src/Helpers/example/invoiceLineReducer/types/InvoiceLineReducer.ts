// Types
import { Product, TaxCode } from './InvoiceLineItems';

export type InvoiceLineState = {
  product?: Product;
  quantity?: number;
  taxCode?: TaxCode;
  disabled?: boolean;
};

// Actions
export type ProductLineAction = {
  type: InvoiceLineActionTypes.Product;
  payload: ProductPayload;
};

export type ToggleDisabledAction = {
  type: InvoiceLineActionTypes.TOGGLE_DISABLED;
  payload: ToggleDisabledPayload;
};

export type InvoiceLineActionUnion = ProductLineAction | ToggleDisabledAction;

// Action Types
export enum InvoiceLineActionTypes {
  Product = 'addProduct',
  TOGGLE_DISABLED = 'toggleDisabled',
}

// Action Payloads
export type ProductPayload = {
  product: Product;
  taxCode: TaxCode;
};

export type ToggleDisabledPayload = {
  disabled: boolean;
};


// not needed
// export type InvoiceLineActions =
//   | InvoiceLineAction<InvoiceLineActionTypes.Product>
//   | InvoiceLineAction<InvoiceLineActionTypes.TOGGLE_DISABLED>;
//
// export type InvoiceLineAction<T extends InvoiceLineActionTypes> = {
//   type: T;
//   payload: InvoiceLinePayloads[T];
// };
//
// export type InvoiceLinePayloads = {
//   [InvoiceLineActionTypes.Product]: ProductPayload;
//   [InvoiceLineActionTypes.TOGGLE_DISABLED]: ToggleDisabledPayload;
// };
