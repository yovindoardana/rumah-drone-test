export default function AuthLayout({ children }) {
  return (
    <div className='flex min-w-full min-h-screen'>
      <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 m-auto'>{children}</div>
    </div>
  );
}
