import ProductCard from './Components/ProductsCards';

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    image: '/product1.png',
    title: 'Product 1',
    description: 'Shahi khus',
    price: 4490,
  },
  {
    id: 2,
    image: '/product2.png',
    title: 'Product 2',
    description: 'Haider',
    price: 4000,
  },
  {
    id: 3,
    image: '/product3.png',
    title: 'Product 3',
    description: 'Desire',
    price: 3490,
  },
  {
    id: 4,
    image: '/product4.png',
    title: 'Product 4',
    description: 'Amber',
    price: 1000,
  },
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
