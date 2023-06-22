import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <div>
        <div className="w-full max-w-xs">
          <form
            onSubmit={(event) => event.preventDefault()}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div>
              <label htmlFor="email">email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="username">username</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="username"
                id="username"
              />
            </div>
            <div>
              <label htmlFor="password">password</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              SignUP
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
