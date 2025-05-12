import { FaStar, FaRegStar } from "react-icons/fa";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const ProductCard = () => {
  const rating = 3; // out of 5

  return (
    <div className="bg-gray-200 p-4 rounded-md max-w-4xl mx-auto flex gap-6 items-center">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          src="/path-to-your-image/red-seat.png" // replace with actual image path
          alt="Red Seat"
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold">Red Seat</h2>
        <p className="text-gray-700">Rs 4000</p>
        <div className="flex mt-1">
          {[...Array(5)].map((_, index) =>
            index < rating ? (
              <FaStar key={index} className="text-yellow-400" />
            ) : (
              <FaRegStar key={index} className="text-gray-400" />
            )
          )}
        </div>
      </div>

      {/* Description */}
      <div className="flex-1 text-sm text-gray-800 leading-relaxed">
        This is a well designed and crafted product that will suit many needs,
        in terms of quality, craftsmanship and aesthetics.
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <FiEdit className="text-orange-500 text-xl cursor-pointer" />
        <FiTrash2 className="text-red-500 text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default ProductCard;
