import { Form, redirect, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { addInventory } from "../../utils/inventory";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  await addInventory(data);
  return redirect("/inventory");
}

export default function AddInventory() {
  const navigate = useNavigate();

  return (
    <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-1 my-16'>
      <h1 className='text-3xl dark:text-white'>Add Inventory</h1>

      <div className='relative overflow-x-auto'>
        <Form method='post' className='max-w-sm' id='edit-inventory'>
          <div className='mb-5'>
            <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Nama Barang
            </label>
            <Input type='text' name='name' id='name' placeholder='Masukkan Nama Barang' />
          </div>
          <div className='mb-5'>
            <label htmlFor='min_stock' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Minimum Stock
            </label>
            <Input type='text' name='min_stock' id='min_stock' placeholder='Masukkan Minimum Stock' />
          </div>
          <div className='flex items-center justify-end gap-3'>
            <button type='button' className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded' onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button type='submit' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
              Tambah
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
