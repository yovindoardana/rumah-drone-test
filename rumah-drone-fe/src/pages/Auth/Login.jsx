import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import axios from "axios";

const Input = ({ ...props }) => {
  return <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' {...props} />;
};

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    const res = async () => axios.post("http://127.0.0.1:8000/api/login", data);

    res()
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      });
  };

  return (
    <AuthLayout>
      <form className='space-y-6' onSubmit={handleSubmit}>
        <h5 className='text-xl font-medium text-gray-900 dark:text-white'>Masuk</h5>
        <div>
          <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Email
          </label>
          <Input type='email' name='email' id='email' placeholder='name@company.com' required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Password
          </label>
          <Input type='password' name='password' id='password' placeholder='••••••••' required onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p className='text-red-500'>{error}</p>}
        <button type='submit' className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Login
        </button>
        <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
          Belum Punya Akun?{" "}
          <Link to='/register' className='text-blue-700 hover:underline dark:text-blue-500'>
            Daftar
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
