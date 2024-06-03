import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { MaterialProvider } from './context/materialContext';

function Material() {

   const checkedStatus = JSON.parse(localStorage.getItem("ItemsChecked"))

  //  console.log(checkedStatus);

    const navigate = useNavigate()
  // State to track the checked status of each checkbox
  const [checkedItems, setCheckedItems] = useState({
    cement: checkedStatus.cement,
    steel: checkedStatus.steel,
    sand: checkedStatus.sand,
    ashBricks: checkedStatus.ashBricks,
    cementBricks: checkedStatus.cementBricks,
  });   

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: checked,
    }));


    const ItemsCheck = {
      // cement:checked.cement,
      // steel:checked.steel,
      // sand:checked.sand,
      // ashBricks:checked.ashBricks,
      // cementBricks:checked.cementBricks
      
    }
    // localStorage.setItem("ItemsChecked",JSON.stringify(ItemsCheck))
  };

  // Handle Next button click
  const handleNextClick = () => {

    const itemInLocalStorage = JSON.parse(localStorage.getItem("materials"));

    if (!itemInLocalStorage || itemInLocalStorage.length === 0) {
        const selectedItems = Object.keys(checkedItems).filter(item => checkedItems[item]);
        console.log('Selected items:', selectedItems);
        localStorage.setItem("materials", JSON.stringify(selectedItems));
    } else {
        const existingItems = itemInLocalStorage;
        const newSelectedItems = Object.keys(checkedItems).filter(item => checkedItems[item]);
        const mergedItems = [...existingItems, ...newSelectedItems];
        console.log('Merged items:', mergedItems);
        localStorage.setItem("materials", JSON.stringify(mergedItems));
    }
    
   
    navigate('/')
  };

  const handleCement = () => {
    if (checkedItems.cement === false) {
      setCheckedItems({
        cement: true,
        steel: checkedStatus.steel,
        sand: checkedStatus.sand,
        ashBricks: checkedStatus.ashBricks,
        cementBricks: checkedStatus.cementBricks
      })
    } else {
      setCheckedItems({
        cement: false,
        steel: checkedStatus.steel,
        sand: checkedStatus.sand,
        ashBricks: checkedStatus.ashBricks,
        cementBricks: checkedStatus.cementBricks
      })
    }
    // setCheckedItems({
    //   cement:checkedItems,
    // })
  }

  const handleSteel = () => {
    if (checkedItems.steel === false) {
      setCheckedItems({
        cement: checkedStatus.cement,
    steel: true,
    sand: checkedStatus.sand,
    ashBricks: checkedStatus.ashBricks,
    cementBricks: checkedStatus.cementBricks
      })
    } else {
      setCheckedItems({
        cement: checkedStatus.cement,
        steel: false,
        sand: checkedStatus.sand,
        ashBricks: checkedStatus.ashBricks,
        cementBricks: checkedStatus.cementBricks
      })
    }
    // setCheckedItems({
    //   cement:checkedItems,
    // })
  }
  const handleSand = () => {
    if (checkedItems.sand === false) {
      setCheckedItems({
        cement: checkedStatus.cement,
        steel: checkedStatus.steel,
        sand: true,
        ashBricks: checkedStatus.ashBricks,
        cementBricks: checkedStatus.cementBricks
      })
    } else {
      setCheckedItems({
        cement: checkedStatus.cement,
        steel: checkedStatus.steel,
        sand: false,
        ashBricks: checkedStatus.ashBricks,
        cementBricks: checkedStatus.cementBricks
      })
    }
    // setCheckedItems({
    //   cement:checkedItems,
    // })
  }
  const handleBricks = () => {
    if (checkedItems.ashBricks === false) {
      setCheckedItems({
        cement: checkedStatus.cement,
        steel: checkedStatus.steel,
        sand: checkedStatus.sand,
        ashBricks: true,
        cementBricks: checkedStatus.cementBricks
      })
    } else {
      setCheckedItems({
        cement: checkedStatus.cement,
        steel: checkedStatus.steel,
        sand: checkedStatus.sand,
        ashBricks: false,
        cementBricks: checkedStatus.cementBricks
      })
    }
    // setCheckedItems({
    //   cement:checkedItems,
    // })
  }
  const handleCementBricks = () => {
    if (checkedItems.cementBricks === false) {
      setCheckedItems({
        cement: checkedStatus.cement,
        steel: checkedStatus.steel,
        sand: checkedStatus.sand,
        ashBricks: checkedStatus.ashBricks,
        cementBricks: true
      })
    } else {
      setCheckedItems({
        cement: checkedStatus.cement,
        steel: checkedStatus.steel,
        sand: checkedStatus.sand,
        ashBricks: checkedStatus.ashBricks,
        cementBricks: false
      })
    }
    // setCheckedItems({
    //   cement:checkedItems,
    // })
  }

  localStorage.setItem("ItemsChecked",JSON.stringify(checkedItems))

  return (
    <>
      <div>
        <div className="bg-yellow-500 h-20 w-full">
          <h1 className="text-2xl font-bold pt-5">Material Inventory</h1>
        </div>

        <div className="flex items-center border border-gray-300 rounded-xl h-[70px] p-2 mt-16" 
        onClick={handleCement}
        >
          <span className="mr-2 font-semibold text-2xl pl-10">Cement</span>
          <p className="text-orange-300 ml-[381px]">(in bags)</p>
          <input
            type="checkbox"
            name="cement"
            className="form-checkbox ml-auto"
            checked={checkedItems.cement}
            onChange={handleCheckboxChange}
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-xl h-[70px] p-2 mt-16" 
        onClick={handleSteel}
        >
          <span className="mr-2 font-semibold text-2xl pl-10">Steel</span>
          <p className="text-orange-300 ml-[420px]">(in bags)</p>
          <input
            type="checkbox"
            name="steel"
            className="form-checkbox ml-auto"
            checked={checkedItems.steel}
            onChange={handleCheckboxChange}
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-xl h-[70px] p-2 mt-16" 
        onClick={handleSand}
        >
          <span className="mr-2 font-semibold text-2xl pl-10">Sand/M</span>
          <p className="text-orange-300 ml-[380px]">(in bags)</p>
          <input
            type="checkbox"
            name="sand"
            className="form-checkbox ml-auto"
            checked={checkedItems.sand}
            onChange={handleCheckboxChange}
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-xl h-[70px] p-2 mt-16"
         onClick={handleBricks}
         >
          <span className="mr-2 font-semibold text-2xl pl-10">Ash Bricks</span>
          <p className="text-orange-300 ml-[365px]">(in bags)</p>
          <input
            type="checkbox"
            name="ashBricks"
            className="form-checkbox ml-auto"
            checked={checkedItems.ashBricks}
            onChange={handleCheckboxChange}
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-xl h-[70px] p-2 mt-16" onClick={handleCementBricks}>
          <span className="mr-2 font-semibold text-2xl pl-10">Cement Bricks</span>
          <p className="text-orange-300 ml-80">(in bags)</p>
          <input
            type="checkbox"
            name="cementBricks"
            className="form-checkbox ml-auto"
            checked={checkedItems.cementBricks}
            onChange={handleCheckboxChange}
          />
        </div>

        <div>
          <button 
            className="bg-yellow-500 w-[80px] mt-28 h-16 rounded text-xl font-bold" 
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Material;
