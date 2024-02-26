import axios from "axios";

export async function getInventories() {
  let inventories = await axios.get("http://127.0.0.1:8000/api/stocks", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!inventories) inventories.data = [];
  return inventories.data;
}

export async function getInventory(id) {
  let inventory = await axios.get(`http://127.0.0.1:8000/api/stocks/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!inventory) inventory.data = [];
  return inventory.data.data;
}

export async function addInventory(data) {
  let inventory = await axios.post("http://127.0.0.1:8000/api/stocks", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!inventory) inventory.data = [];
  return inventory.data;
}

export async function updateInventory(id, data) {
  let inventory = await axios.put(`http://127.0.0.1:8000/api/stocks/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!inventory) inventory.data = [];
  return inventory.data;
}
