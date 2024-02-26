import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { getInventory, updateInventory } from "../../utils/inventory";

export async function loader({ params }) {
  const inventory = await getInventory(params.id);
  if (!inventory) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  console.log("inventory", inventory);
  return { inventory };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  await updateInventory(params.id, data);
  return redirect("/inventory");
}

export default function EditInventory() {
  const { inventory } = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-1 my-16'>
      <h1 className='text-3xl dark:text-white'>Edit Inventory</h1>

      <div className='relative overflow-x-auto'>
        <Form method='post' className='max-w-sm' id="edit-inventory">
          <div className='mb-5'>
            <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Nama Barang
            </label>
            <Input type='text' name='name' id='name' placeholder='Masukkan Nama Barang' defaultValue={inventory.name} />
          </div>
          <div className='mb-5'>
            <label htmlFor='min_stock' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Minimum Stock
            </label>
            <Input type='text' name='min_stock' id='min_stock' placeholder='Masukkan Minimum Stock' defaultValue={inventory.min_stock} />
          </div>
          <div className='flex items-center justify-end gap-3'>
            <button type='button' className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded' onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button type='submit' className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>
              Edit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
