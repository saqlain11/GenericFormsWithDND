import GenericWidgets from "./GenericWidgets";
import GenericForm from "./GenericForm";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (

  
    <div
   
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "black",
        height:'100vh',
        width:'100%'
      }}
    >
      <DndProvider backend={HTML5Backend}>
        <GenericForm />
        <GenericWidgets />
      </DndProvider>
    </div>
    
  );
}

export default App;
