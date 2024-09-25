import { useState, useEffect } from "react";
import axios from "axios";

interface Material {
  _id: string;
  name: string;
  description?: string;
  color?: string;
}

interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
  discountPrice?: number;
  imageUrl: string;
}

const Shopdata = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchMaterials();
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [selectedMaterial, selectedColor, selectedSize, priceRange, availability]);

  const fetchMaterials = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/materials");
      setMaterials(response.data.data);
    } catch (error) {
      console.error("Error fetching materials:", error);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/api/products", {
        params: {
          materials: selectedMaterial.join(","),
          colors: selectedColor.join(","),
          sizes: selectedSize.join(","),
          priceMin: priceRange[0],
          priceMax: priceRange[1],
          availability: availability.join(","),
        },
      });
      setProducts(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
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
    <div className="flex">
      <div className="w-1/4 p-4 border-r">
        <h3 className="font-bold mb-4">Materials</h3>
        {materials.map((material) => (
          <label key={material._id} className="block mb-2">
            <input
              type="checkbox"
              value={material.name}
              checked={selectedMaterial.includes(material.name)}
              onChange={() => handleMaterialChange(material.name)}
              className="mr-2"
            />
            {material.name}
          </label>
        ))}

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
      </div>

      <div className="w-3/4 p-4 grid grid-cols-3 gap-4">
        {loading ? (
          <div>Loading products...</div>
        ) : products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-500">{product.brand}</p>
              <p className="text-lg">
                ${product.price}{" "}
                {product.discountPrice && (
                  <span className="text-red-500 line-through">
                    ${product.discountPrice}
                  </span>
                )}
              </p>
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
