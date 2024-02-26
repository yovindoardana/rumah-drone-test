import { Link, Form } from "react-router-dom";
import AuthLayout from "./AuthLayout";

export default function Register() {
  return (
    <AuthLayout>
      <Form className='space-y-6' action='#'>
        <h5 className='text-xl font-medium text-gray-900 dark:text-white'>Daftar</h5>
        <div>
          <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Full Name
          </label>
          <input type='email' name='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' placeholder='name@company.com' required />
        </div>
        <div>
          <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Email
          </label>
          <input type='email' name='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' placeholder='name@company.com' required />
        </div>
        <div>
          <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Password
          </label>
          <input type='password' name='password' id='password' placeholder='••••••••' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' required />
        </div>
        <div>
          <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Confirm Password
          </label>
          <input type='password' name='password' id='password' placeholder='••••••••' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' required />
        </div>

        <button type='submit' className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Register
        </button>
        <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
          Sudah Punya Akun?{" "}
          <Link to='/login' className='text-blue-700 hover:underline dark:text-blue-500'>
            Masuk
          </Link>
        </div>
      </Form>
    </AuthLayout>
  );
}
