import axios from "axios";

export async function getIncomingTransaction() {
  let incomingTransaction = await axios.get("http://127.0.0.1:8000/api/incoming-transactions", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!incomingTransaction) incomingTransaction.data = [];
  return incomingTransaction.data;
}

export async function getIncomingTransactionDetail(id) {
  let incomingTransaction = await axios.get(`http://127.0.0.1:8000/api/detail-incoming-transaction/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!incomingTransaction) incomingTransaction.data = [];
  return incomingTransaction.data;
}
