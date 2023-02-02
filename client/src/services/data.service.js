import Cookies from "universal-cookie";
const API_URL = import.meta.env.VITE_API_BASE_URL;

const cookies = new Cookies();

const DataService = {
  answer,
}

export default DataService;

async function answer(prompt) {
  try {
    const token = cookies.get("TOKEN");
    const response = await fetch(`${API_URL}/openai/generate/answer`, {
      method: 'POST',
      headers: { 
       'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ prompt })
    })
    return await response.json();
  } catch (err) {
    console.error(err)
    throw(err)
  }
}