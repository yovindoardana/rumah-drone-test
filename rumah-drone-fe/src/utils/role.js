import axios from "axios";

export async function getRoles() {
    const res = await axios.get("http://127.0.0.1:8000/api/user");
    return res.data;
}