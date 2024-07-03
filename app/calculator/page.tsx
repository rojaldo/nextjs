import CalculatorComponent from "./calculator";

// Server Component (MyServerComponent.jsx)
export default function MyServerComponent() {
    // const data = fetchDataFromServer(); // Imagina que esta función obtiene datos del servidor
    return (
      <div>
        <h1>Calculator</h1>
        <CalculatorComponent />
      </div>
    );
  }