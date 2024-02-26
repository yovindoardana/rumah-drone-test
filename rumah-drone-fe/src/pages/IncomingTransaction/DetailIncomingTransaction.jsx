import { useLoaderData } from "react-router-dom";
import { getIncomingTransactionDetail } from "../../utils/incomingTransaction";
import showFormattedDate from "../../utils/showFormattedDate";

export async function loader({ params }) {
  const detailIncomingTransaction = await getIncomingTransactionDetail(params.id);
  return { detailIncomingTransaction };
}

export default function DetailIncomingTransaction() {
  const { detailIncomingTransaction } = useLoaderData();

  return (
    <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-1 my-16'>
      <h1 className='text-3xl dark:text-white'>Detail Transaksi {detailIncomingTransaction.transactionID}</h1>

      <div className='relative overflow-x-auto'>
        <table className='w-1/3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 my-4'>
          <tbody>
            <tr>
              <th>Status</th>
              <th>{detailIncomingTransaction.status}</th>
            </tr>
            <tr>
              <th>Tanggal Transaksi</th>
              <th>{showFormattedDate(detailIncomingTransaction.created_at)}</th>
            </tr>
          </tbody>
        </table>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Nama Barang
              </th>
              <th scope='col' className='px-6 py-3'>
                Jumlah
              </th>
            </tr>
          </thead>
          <tbody>
            {detailIncomingTransaction.stocks.map((item) => (
              <tr key={item.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {item.name}
                </th>
                <td className='px-6 py-4'>{item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
