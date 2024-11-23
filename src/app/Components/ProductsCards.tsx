import Image from 'next/image';

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <Image
        src={product.image}
        alt={product.title}
        width={900}
        height={300}
        className="rounded-t-md"
      />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="flex items-center justify-center text-black text-4xl">{product.description}</p>
      <p className="flex items-center justify-center text-xl font-semibold mt-2 text-black">{product.price} PKR</p>
      <div className="flex items-center justify-center">
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add to Cart
      </button>
      </div>
    </div>
  );
};

export default ProductCard;
