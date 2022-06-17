// Types
import {
  InvoiceLineActionTypes,
  InvoiceLineActionUnion,
  InvoiceLineState,
} from './types/InvoiceLineReducer';

export const InvoiceLineReducer = (invoiceLineState: InvoiceLineState, action: InvoiceLineActionUnion) => {
  switch (action.type) {
    case InvoiceLineActionTypes.Product:
      return { ...invoiceLineState, ...action.payload };
    case InvoiceLineActionTypes.TOGGLE_DISABLED:
      return { ...invoiceLineState, ...action.payload };
    default:
      return invoiceLineState;
  }
};
