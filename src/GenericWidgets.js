import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
const GenericWidgets = () => {
  const Inputs = ["Email", "Telephone", "CNIC", "Text"];
  const Buttons = ["Cancel", "Save", "Edit"];
  // const Form=['Form'];

  return (
   
    <div
      style={{
        display: "flex",
        width: "30vw",
        backgroundColor: "grey",
        alignItems: "center",
        flexDirection: "column",
        overflow: "scroll",
      }}
    >
      <h1> Widgets</h1>
      {/* <h2> Form</h2> */}

{/* {Form.map((input) => (
   Controls(input,'Form')
))} */}
      <h2> Inputs</h2>

      {Inputs.map((input) => (
         Controls(input,'Input')
      ))}

      <h2> Buttons</h2>

      {Buttons.map((button) => Controls(button,'Button'))}
    </div>
  );
};
const Controls = (controlName,control) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.WIDGETS,
    item:{controlName,control},
    // end: (item, monitor) => {
    //   const dropResult = monitor.getDropResult();
    //   if (item && dropResult) {
    //     console.log('items',item);
    //      alert(`You dropped ${item.controlName} into ${dropResult.name}!`);
    //   }
    // },
    collect: (monitor) => ({
      item: monitor.getItem(),
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.5 : 1;

  return (
    <div
      ref={drag}
      style={{
        height: "7%",
        width: "90%",
        marginTop: "2%",
        backgroundColor: "black",
        boxShadow: "1px 1px 1px white",
        opacity
      }}
     
    >
      <p style={{ textAlign: "center", color: "white" }}>{controlName}</p>
    </div>
  );
};

export default GenericWidgets;
