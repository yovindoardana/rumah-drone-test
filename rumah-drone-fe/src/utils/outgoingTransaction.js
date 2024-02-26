import axios from "axios";

export async function getOutgoingTransaction() {
  let outgoingTransaction = await axios.get("http://127.0.0.1:8000/api/outgoing-transactions", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!outgoingTransaction) outgoingTransaction.data = [];
  return outgoingTransaction.data;
}
