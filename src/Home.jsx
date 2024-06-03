import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const initialMaterials = JSON.parse(localStorage.getItem("materials")) || [];
  const initialSaveItems = JSON.parse(localStorage.getItem("saveItems")) || [];

  const [materials, setMaterials] = useState(initialMaterials);
  const [saveItems, setSaveItems] = useState(initialSaveItems);

  useEffect(() => {
    localStorage.setItem("saveItems", JSON.stringify(saveItems));
  }, [saveItems]);

  const handleInputChange = (index, field, value) => {
    const newSaveItems = [...saveItems];
    if (!newSaveItems[index]) newSaveItems[index] = { quantity: 1, price: 0, totalPrice: 0 };
    newSaveItems[index][field] = value;
    setSaveItems(newSaveItems);
  };

  const handleEqual = (index) => {
    const newSaveItems = [...saveItems];
    newSaveItems[index].totalPrice = newSaveItems[index].quantity * newSaveItems[index].price;
    setSaveItems(newSaveItems);
  };
  
  const handleDelete = (index) => {
    const newMaterials = materials.filter((_, i) => i !== index);
    setMaterials(newMaterials);
    localStorage.setItem("materials", JSON.stringify(newMaterials));
  
    const newSaveItems = saveItems.filter((_, i) => i !== index);
    setSaveItems(newSaveItems);
    localStorage.setItem("saveItems", JSON.stringify(newSaveItems));
  
    alert("Successfully Deleted");
  };

  const handleSaveClick = () => {
    localStorage.setItem("saveItems", JSON.stringify(saveItems));
    alert('Iems Saved Successfully')
    setSaveItems('')
  };

  return (
    <>
      <div>
        <div className="bg-yellow-500 h-20 w-full">
          <h1 className="text-2xl font-bold pt-5">Add Material Purchase</h1>
        </div>
        <div>
          <NavLink to={"/material"}>
            <button className="bg-yellow-500 ml-[900px] mt-28 h-16 rounded text-xl font-bold">
              + ADD MATERIAL
            </button>
          </NavLink>
        </div>
        <div>
          {materials.map((material, index) => (
            <div
              className="flex flex-col items-start border border-yellow-300 rounded-xl h-[250px] p-2 mt-16"
              key={index}
            >
              <div className="flex">
              <span className="font-semibold text-2xl">{material}</span>
              <span className="bg-red-600 ml-[980px] rounded-2xl cursor-pointer" onClick={() => handleDelete(index)}>✖</span>
              </div>
              <div className="flex mt-16">
                <input
                  className="flex flex-col items-start border border-yellow-300 rounded-xl h-[50px] w-[200px] p-2 ml-[100px]"
                  type="number"
                  placeholder="Quantity in bags"
                  onChange={(e) => handleInputChange(index, 'quantity', Number(e.target.value))}
                  value={saveItems[index]?.quantity || 1}
                />
                <p className="text-yellow-300 ml-16 mt-2">X</p>
                <input
                  className="flex flex-col items-start border border-yellow-300 rounded-xl h-[50px] w-[200px] p-2 ml-[100px]"
                  type="number"
                  placeholder="Unit Price Rs."
                  onChange={(e) => handleInputChange(index, 'price', Number(e.target.value))}
                  value={saveItems[index]?.price || ''}
                />  
                <p
                  className="text-yellow-300 ml-16 mt-2 cursor-pointer text-2xl"
                  onClick={() => handleEqual(index)}
                >
                  =
                </p>
                <div
                  className="flex flex-col items-start border border-yellow-300 rounded-xl h-[50px] w-[200px] p-2 ml-[200px] text-white"
                >
                  {saveItems[index]?.totalPrice || 0}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button
            className="bg-yellow-500 w-[80px] mt-28 h-16 rounded text-xl font-bold"
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
