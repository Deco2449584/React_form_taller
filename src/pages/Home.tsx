import { Link } from "react-router-dom";

const Home = () => {
  const name = "Daniel Caro";

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Hello, {name}!</h1>
      <p className="text-gray-600 mb-8">This is a sample component.</p>
      <div className="flex space-x-4">
        <Link
          to="/Registro"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Registro
        </Link>
        <Link
          to="/Login"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
