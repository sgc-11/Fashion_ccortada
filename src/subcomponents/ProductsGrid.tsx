import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product, CartItem } from '../tsthings.ts/Product';
import ProductDetail from './ProductDetail';
import ProductCard from './ProductCard';
import Cart from './Cart';

// Placeholder data - replace with API call later
const mockProducts: Product[] = [
  { id: 1, name: 'Luminous Foundation', price: 39.99, image: '/api/placeholder/300/300', description: 'A lightweight, long-wearing foundation that gives a natural, luminous finish.' },
  { id: 2, name: 'Velvet Matte Lipstick', price: 24.99, image: '/api/placeholder/300/300', description: 'A highly-pigmented, long-lasting lipstick with a velvety matte finish.' },
  // ... add more mock products
];

const ProductsGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  useEffect(() => {
    // Fetch products from API and update state
    // setProducts(fetchedProducts);
  }, []);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart.filter(item => item.id !== productId);
    });
  };

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-pink-500">Our Products</h2>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full transition duration-300"
        >
          <ShoppingCart size={24} />
          <span className="ml-2">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart}
            openProductDetail={openProductDetail}
          />
        ))}
      </div>
      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          closeProductDetail={closeProductDetail}
          addToCart={addToCart}
        />
      )}
      <Cart 
        isOpen={isCartOpen} 
        setIsOpen={setIsCartOpen} 
        cart={cart} 
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default ProductsGrid;