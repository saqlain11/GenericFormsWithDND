import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { useForm } from "react-hook-form";

const GenericForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [isFirst, setIsFirst] = useState(true);
  const [item, setItems] = useState([]);
  const onSubmit = (data) => {
    console.log(data);
  };

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.WIDGETS,

    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop: (monitor) => {
      setIsFirst(false);
      setItems((item) => [
        ...item,
        { controlName: monitor.controlName, control: monitor.control },
      ]);
    },
  }));

  const isDrop = isOver && canDrop;
  return (
    <>   

    <div style={{display:'flex  '}}  class="create-flowy">
    <div id='canvas'></div>
   
    <div 
      ref={drop}
      role="GenericForm"
      style={{
        display: "flex",
        width: "69vw",
        backgroundColor: isDrop ? "green" : "lightgrey",
        overflow: "scroll",
        justifyContent: isFirst ? "center" : null,
      }}
    >
      {isFirst ? (
        <h1 style={{ alignSelf: "center" }}>
          {isDrop ? "Release to drop here.." : "Drop Widgets here!"}
        </h1>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {item && FormWidgets(register, item,drop)}
        </form>
      )}
    </div>
    </div>
   
    </>
  );
};
export default GenericForm;
const FormWidgets = (register, key,drop) => {
  return key.map((data, id) => {
    switch (data.control) {
      case "Input":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "5vh",
              marginLeft: 5,
              marginTop: 10,
            }}
          >
            <input
              type={data.controlName}
              style={{
                width: "60vw",
              }}
              placeholder={data.controlName}
              name={id === 0 ? data.controlName : data.controlName + id}
              ref={register}
            />
            <button
              style={{
                backgroundColor: "red",
                color: "white",
              }}
            >
              Delete
            </button>
          </div>
        );
      case "Button":
        return (
          <button
            style={{
              marginLeft: 5,
              marginTop: 10,
              height: "5vh",
              width: "65vw",
              backgroundColor:
                data.controlName === "Cancel"
                  ? "red"
                  : data.controlName === "Save"
                  ? "green"
                  : null,
            }}
          >
            {data.controlName}
          </button>
        );
        // case "Form":
        // return (
        //   <div id='canvas' 
        //     style={{
        //       marginLeft: 5,
        //       marginTop: 10,
        //       height: "50vh",
        //       width: "65vw",
        //       backgroundColor:'White',
        //     }}
        //   >
            
        //   </div>
        // );
      default:
        return;
    }
  });
};
