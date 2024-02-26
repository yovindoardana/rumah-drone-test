import { Link, useLoaderData } from "react-router-dom";
import { getInventories } from "../../utils/inventory";

export async function loader() {
  const inventories = await getInventories();
  console.log("inventories", inventories);
  return { inventories };
}

export default function Inventory() {
  const { inventories } = useLoaderData();

  return (
    <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-1 my-16'>
      <h1 className='text-3xl dark:text-white'>Inventory</h1>

      <div className="ms-auto">
        <Link to={"/inventory/add"} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-3'>
          Tambah Barang
        </Link>
      </div>
      <div className='flex flex-col'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Nama Barang
              </th>
              <th scope='col' className='px-6 py-3'>
                Barang Masuk
              </th>
              <th scope='col' className='px-6 py-3'>
                Barang Keluar
              </th>
              <th scope='col' className='px-6 py-3'>
                Minimum Stock
              </th>
              <th scope='col' className='px-6 py-3'>
                Total
              </th>
              <th scope='col' className='px-6 py-3'>
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {inventories.map((item) => (
              <tr key={item.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {item.name}
                </th>
                <td className='px-6 py-4'>{item.incoming}</td>
                <td className='px-6 py-4'>{item.outgoing}</td>
                <td className='px-6 py-4'>{item.min_stock}</td>
                <td className='px-6 py-4'>{item.total}</td>
                <td className='px-6 py-4'>
                  <Link to={`/inventory/${item.id}`} className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
