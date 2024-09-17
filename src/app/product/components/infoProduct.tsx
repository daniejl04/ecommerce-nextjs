import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';


interface InfoProductProps {
  name: string;
  price: string;
  countdown?: string;
  discount?: number
};

export default function InfoProduct({ name, price, discount, countdown }: InfoProductProps) {
  return (
    <>
      <h1 className="text-2xl font-bold">{name}</h1>

      <div className="flex items-center mt-4">
        <p className="text-black text-xs font-bold border border-black w-24 text-center rounded-sm py-1 my-3">
          Best seller
        </p>
        <p className="font-bold text-sm ml-4">
          <span className="text-red-600 mx-2 text-lg"><FontAwesomeIcon icon={faBolt} /></span>
          Selling fast! 56 people have this in their carts.
        </p>
      </div>

      <p className="flex items-center my-2">
        <span className="text-2xl text-red-600 mr-2">{price}</span>
        {discount && (
          <>
            <span className="line-through text-gray-500 mr-2">$10.00</span>
            <span className="text-white bg-red-500 rounded-full text-xs py-1 px-2 font-bold">
              {discount} OFF
            </span>
          </>
        )}
      </p>

      <p className="text-sm font-bold my-3">
        <span className="bg-black text-white py-1 px-2 rounded-md">20</span> People are viewing this right now
      </p>

      {countdown && (
        <div className="border border-red-500 rounded-sm text-center py-5 my-7">
          <p className="text-xs font-bold">HURRY UP! SALE ENDS IN:</p>
          <p className="text-lg text-red-600 font-bold">{countdown}</p>
        </div>
      )}

    </>
  );
};