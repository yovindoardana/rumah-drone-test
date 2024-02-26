import { Link, useLoaderData } from "react-router-dom";
import { getIncomingTransaction } from "../../utils/incomingTransaction";
import showFormattedDate from "../../utils/showFormattedDate";

export async function loader() {
  const IncomingTransaction = await getIncomingTransaction();
  return { IncomingTransaction };
}

export default function IncomingTransaction() {
  const { IncomingTransaction } = useLoaderData();

  return (
    <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-1 my-16'>
      <h1 className='text-3xl dark:text-white'>Transaksi Masuk</h1>

      <div className='relative overflow-x-auto'>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-3'>Tambah Transaksi Masuk</button>
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
            {IncomingTransaction.map((item) => (
              <tr key={item.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {item.transactionID}
                </th>
                <td className='px-6 py-4'>{item.status}</td>
                <td className='px-6 py-4'>{showFormattedDate(item.created_at)}</td>
                <td className='px-6 py-4'>
                  <Link to={`/incoming-transaction/${item.id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Detail
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
