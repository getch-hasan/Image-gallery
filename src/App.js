
import Gallery from './Components/image gallary/Gallery';
import { ImagesProvider } from './Components/Contex/ImagesContex';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


function App() {
  return (
    <div className="App">
      <ImagesProvider><DndProvider backend={HTML5Backend}>
      <Gallery></Gallery>
    </DndProvider></ImagesProvider>
    </div>
  );
}

export default App;
