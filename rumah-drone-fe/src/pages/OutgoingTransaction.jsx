import { useLoaderData } from "react-router-dom";
import { getOutgoingTransaction } from "../utils/outgoingTransaction";

export async function loader() {
  const outgoingTransaction = await getOutgoingTransaction();
  console.log("outgoingTransaction", outgoingTransaction);
  return { outgoingTransaction };
}

export default function OutgoingTransaction() {
  const { outgoingTransaction } = useLoaderData();

  return (
    <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-1 my-16'>
      <h1 className='text-3xl'>Transaksi Keluar</h1>

      <div className='relative overflow-x-auto'>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-3'>Tambah Transaksi Keluar</button>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Kode Transaksi
              </th>
              <th scope='col' className='px-6 py-3'>
                Status
              </th>
              <th scope='col' className='px-6 py-3'>
                Tanggal Transaksi
              </th>
              <th scope='col' className='px-6 py-3'>
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {outgoingTransaction.map((item) => (
              <tr key={item.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {item.transactionID}
                </th>
                <td className='px-6 py-4'>{item.status}</td>
                <td className='px-6 py-4'>{item.created_at}</td>
                <td className='px-6 py-4'>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Detail</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
