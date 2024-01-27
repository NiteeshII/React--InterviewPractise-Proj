import TextBox from "./Components/TextBox";
import ContextProvider from "./Context/useData";

function App() {
  return (
    <div>
      <ContextProvider>
        <TextBox />
      </ContextProvider>
    </div>
  );
}

export default App;
