import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineHeart, AiOutlineSync, AiOutlineSearch } from "react-icons/ai";

interface Material {
  _id: string;
  name: string;
  brand?: string;
  discountPrice?: number;
  price: number;
  color?: string;
  sizes: string;
  tags: string;
  material: string;
  imageUrl: string;
}

const Shopdata = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/materials");
      console.log(response);
      setMaterials(response.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching materials:", error);
      setLoading(false);
    }
  };

  const handleMaterialChange = (material: string) => {
    if (selectedMaterial.includes(material)) {
      setSelectedMaterial(selectedMaterial.filter((m) => m !== material));
    } else {
      setSelectedMaterial([...selectedMaterial, material]);
    }
  };

  const handleColorChange = (color: string) => {
    if (selectedColor.includes(color)) {
      setSelectedColor(selectedColor.filter((c) => c !== color));
    } else {
      setSelectedColor([...selectedColor, color]);
    }
  };

  const handleSizeChange = (size: string) => {
    if (selectedSize.includes(size)) {
      setSelectedSize(selectedSize.filter((s) => s !== size));
    } else {
      setSelectedSize([...selectedSize, size]);
    }
  };

  const handleAvailabilityChange = (status: string) => {
    if (availability.includes(status)) {
      setAvailability(availability.filter((s) => s !== status));
    } else {
      setAvailability([...availability, status]);
    }
  };

  return (
    <div className="flex mt-10">
      <div className="w-1/4 p-4 border-r position:sticky ">
        <h3 className="font-bold mb-4">Materials</h3>
        {loading ? (
          <div>Loading materials...</div>
        ) : materials && materials.length > 0 ? (
          materials?.map((material) => (
            <label key={material._id} className="block mb-2">
              <input
                type="checkbox"
                value={material.name}
                checked={selectedMaterial.includes(material.name ?? "-")}
                onChange={() => handleMaterialChange(material.name ?? "-")}
                className="mr-2"
              />
              {material.name}
            </label>
          ))
        ) : (
          <div>No materials found.</div>
        )}

        <div className="mt-4">
          <h3 className="font-bold">Price</h3>
          <input
            type="range"
            min={0}
            max={1500}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="text-sm mt-2">
            Price: ${priceRange[0]} - ${priceRange[1]}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-bold">Colors</h3>
          {["Red", "Blue", "Green", "Yellow", "Black"].map((color) => (
            <label key={color} className="block mb-2">
              <input
                type="checkbox"
                value={color}
                checked={selectedColor.includes(color)}
                onChange={() => handleColorChange(color)}
                className="mr-2"
              />
              {color}
            </label>
          ))}
        </div>

        <div className="mt-4">
          <h3 className="font-bold">Sizes</h3>
          {["S", "M", "L", "XL"].map((size) => (
            <label key={size} className="block mb-2">
              <input
                type="checkbox"
                value={size}
                checked={selectedSize.includes(size)}
                onChange={() => handleSizeChange(size)}
                className="mr-2"
              />
              {size}
            </label>
          ))}
        </div>

        <div className="mt-4">
          <h3 className="font-bold">Availability</h3>
          {["In stock", "Out of stock"].map((status) => (
            <label key={status} className="block mb-2">
              <input
                type="checkbox"
                value={status}
                checked={availability.includes(status)}
                onChange={() => handleAvailabilityChange(status)}
                className="mr-2"
              />
              {status}
            </label>
          ))}
        </div>
        <div>
          <img
            src="https://demo-alukas.myshopify.com/cdn/shop/files/banner-shop.jpg?v=1711798181&width=1500"
            alt=""
          />
        </div>
      </div>

      <div className="w-3/4 p-4 grid grid-cols-4 gap-4 text-center">
        {loading ? (
          <div>Loading products...</div>
        ) : materials.length > 0 ? (
          materials.map((material) => (
            <div
              key={material._id}
              className="relative  p-4  hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={material.imageUrl}
                alt={material.name}
                className="w-full h-64 object-cover mb-4"
              />
              <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm font-bold">
                -
                {material.discountPrice
                  ? `${Math.round(
                      ((material.price - material.discountPrice) /
                        material.price) *
                        100
                    )}%`
                  : "New"}
              </div>
              <div className="absolute top-2 right-2 flex flex-col items-center space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <button className="bg-white p-2 rounded-full shadow-lg">
                  <AiOutlineHeart size={20} />
                </button>
                <button className="bg-white p-2 rounded-full shadow-lg">
                  <AiOutlineSync size={20} />
                </button>
                <button className="bg-white p-2 rounded-full shadow-lg">
                  <AiOutlineSearch size={20} />
                </button>
              </div>
              <h2 className="text-xl font-midle">{material.name}</h2>
              <p className="text-gray-500">{material.brand}</p>
              <p className="text-lg">
                ${material.discountPrice || material.price}
                {material.discountPrice && (
                  <span className="text-red-500 line-through ml-2">
                    ${material.price}
                  </span>
                )}
              </p>
              <button className="relative py-2 text-black font-semibold transition-all duration-300 hover:bg-white hover:text-black after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full ">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <div>No products found.</div>
        )}
      </div>
    </div>
  );
};

export default Shopdata;
