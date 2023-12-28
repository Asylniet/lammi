import { Product } from "@/components/product";
import { create } from "zustand";

interface ProductsState {
  products: {product: Product, quantity: number}[],
  addProduct: (product: Product) => void,
  removeProduct: (id: number) => void,
}

export const useProductStore = create<ProductsState>((set) => ({
  products: [],
  addProduct: (product: Product) => set((state) => ({
    products: 
      state.products.find((p) => p.product.id === product.id) 
        ? 
      state.products.map((p) => {
        if (p.product.id === product.id) p.quantity++;
        return p;
      }) 
        : 
      [...state.products, { product: product, quantity: 1 }]
  })),
  removeProduct: (id: number) => set((state) => ({
    products: 
      state.products.find((p) => p.product.id === id)!.quantity > 1 
        ?
      state.products.map((p) => {
        if (p.product.id === id) p.quantity--;
        return p;
      })
        :
      state.products.filter((p) => p.product.id !== id) 
  })),
}));