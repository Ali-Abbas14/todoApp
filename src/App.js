import React from "react"
import plusSign from "./assets/images/plus-sign.svg"
import deleteButton from "./assets/images/delete.svg"
import { useDispatch, useSelector } from "react-redux"
import { useState, useRef } from "react"
import { addToDo, deleteToDo, editTodo } from "./reducers/toDoSlice"

function App() {
    const [isActive, setActive] = useState(false)
    const inputRef = useRef()
    const dispatch = useDispatch()
    const [state, setState] = useState({
        value: ""
    })
    const handleChange = (e) => {
        setState({
            ...state,
            value: inputRef.current.value
        })
    }
    const handleClick = (e) => {
        dispatch(addToDo({ value: inputRef.current.value }))
        setState({
            value: (inputRef.current.value = "")
        })
    }
    const { todoList } = useSelector((state) => state.toDo)
    const handleDelete = () => {
        dispatch(deleteToDo(todoList.filter((item)=> item)))
        setActive(!isActive)
    }
    return (
        <>
            <div className="main bg-gray-900 h-[100vh] ">
                <div className="text-center bg-gray-800">
                    <h2 className="todo-header-text font-Poppins font-semibold text-[56px] leading-[100%] py-[82px]">
                        Todo App
                    </h2>
                </div>
                <div className="">
                    <form className="mt-[50px] flex flex-row space-x-4 justify-center ">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Add tasks"
                            required
                            onChange={handleChange}
                            className="bg-gray-900 w-[488px] py-3 pl-4 border-[1px] border-[#4B5563] rounded-lg text-gray-300 task-input"
                        />
                        <button
                            type="button"
                            className="flex justify-center items-center rounded-lg text-white text-base font-semibold font-Poppins leading-[100%] py-4 cursor-pointer submit-button w-[144px]"
                            onClick={handleClick}
                        >
                            <img
                                src={plusSign}
                                alt="create-symbol"
                                className="mr-2"
                            />
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
                            {todoList.length}
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
                {todoList.map(({ value, id }) => (
                    <div
                        className="bg-gray-800 max-w-[648px] mt-8 flex mx-auto rounded"
                        key={id}
                    >
                        <div className="flex justify-between w-full px-4">
                            <input
                                type="radio"
                                className="radio1 w-[24px] h-[24px] my-[16px]"
                                id="radio1"
                                name="todo-selector"
                            />
                            <div className="w-[536px]">
                                <p className="font-Poppins font-normal text-base leading-4 text-white py-5 text-left">
                                    {value.value}
                                </p>
                            </div>
                            <button onClick={() => setActive(!isActive)}>
                                <img src={deleteButton} />
                            </button>
                        </div>
                    </div>
                ))}
                <div className={`${isActive ? 'flex modal-toggler' : 'hidden'} justify-center relative`}>
                    <div className="delete-modal flex flex-col bg-[#1F2937] rounded-xl w-[516px] px-6 h-[175px] absolute top-[50%]">
                        <div className="">
                            <h2 className="font-manrope text-xl leading-5 pt-6 text-white font-semibold">
                                Delete Task
                            </h2>
                            <p className="pb-8 text-white font-Manrope text-sm leading-[21px] pt-4 font-normal">
                                `Are you sure you want to delete task $
                                {todoList.value}?`
                            </p>
                        </div>
                        <div className="action-buttons inline-block space-x-4 text-right pb-6 max-w-[468px]">
                            <button className="bg-transparent border-[1px] border-white rounded-md px-4 py-3 font-Manrope text-white leading-[100%] text-sm font-semibold" onClick={()=> setActive(!isActive)}>
                                Cancel
                            </button>
                            <button className="bg-[#E11D48] rounded-md px-4 py-3 text-white font-Manrope leading-[100%] text-sm font-semibold" onClick={handleDelete}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
