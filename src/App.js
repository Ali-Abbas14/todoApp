import React from "react";
import plusSign from "./assets/images/plus-sign.svg";
import deleteButton from './assets/images/delete.svg'

function App() {
  return (
    <>
      <div className="main bg-gray-900 h-[100vh]">
        <div className="text-center bg-gray-800">
          <h2 className="todo-header-text font-Poppins font-semibold text-[56px] leading-[100%] py-[82px]">
            Todo App
          </h2>
        </div>
        <div className="">
          <form className="mt-[50px] flex flex-row space-x-4 justify-center">
            <input
              type="text"
              placeholder="Create a new text"
              required
              className="bg-gray-900 w-[488px] py-3 pl-4 border-[1px] border-[#4B5563] rounded-lg"
            />
            <button
              type="submit"
              className="flex justify-center items-center rounded-lg text-white text-base font-semibold font-Poppins leading-[100%] py-4 cursor-pointer submit-button w-[144px]"
            >
              <img src={plusSign} alt="create-symbol" className="mr-2" />
              Create
            </button>
          </form>
        </div>
        <div className="flex justify-between mx-auto max-w-[648px]">
          <div className="mt-[44px] flex space-x-4 justify-left items-center">
            <h2 className="text-white font-Poppins text-base font-normal leading-4">
              Create a new task
            </h2>
            <span className="text-white font-Poppins text-base font-normal leading-4 py-1 px-[10px] rounded-md task-calculator">
              0
            </span>
          </div>
          <div className="mt-[44px] flex space-x-4 justify-left items-center">
            <h2 className="text-white font-Poppins text-base font-normal leading-4">
              Done Tasks
            </h2>
            <span className="text-white font-Poppins text-base font-normal leading-4 py-1 px-[10px] rounded-md tasks-progress">
              0 of 3
            </span>
          </div>
        </div>
        <div className="bg-gray-800 max-w-[648px] mt-8 flex mx-auto">
        <div className="flex justify-between w-full px-4">
        <input type="radio" className="radio1 w-[24px] h-[24px] my-[16px]" id="radio1" name="todo-selector"/>
        <div className="w-[536px]">
        <p className="font-Poppins font-normal text-base leading-4 text-white py-5 text-left">My task 1</p>
        </div>
        <button><img src={deleteButton}/></button>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
