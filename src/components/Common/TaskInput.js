import React, { useRef, useEffect } from "react";

const PLACEHOLDERS = [
  'Meeting at 11 AM with Erlich Bachman',
  'Get Groceries',
  'Dentist Appointment',
  'Pay Credit Card Bills'
]

const TaskInput = ({
  rows = 1,
  value,
  handleSubmit,
  ...otherProps
}) => {

  const textareaRef = useRef(null);
  const minHeight = (rows * 22) + 'px';

  useEffect(() => {
    textareaRef.current.style.minHeight = minHeight;
    textareaRef.current.style.height = "auto";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [value]);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const onKeyDown = (e) => {
    if(e.keyCode === 13 && !e.shiftKey) {
      handleSubmit();
    }
  }

  const placeholder = PLACEHOLDERS[randomIntFromInterval(0,3)]

  return (
    <textarea
      rows={rows}
      ref={textareaRef}
      value={value}
      placeholder={placeholder}
      className="flex-grow p-0 text-sm leading-relaxed text-gray-800 placeholder-gray-400 border-0 resize-none focus:outline-none"
      onKeyDown={onKeyDown}
      {...otherProps}
    />
  );
}

export default TaskInput;