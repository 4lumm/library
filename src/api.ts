const API_URL = "https://api.jsonsilo.com/api/v1/files";
const API_KEY = "xzTBpAGQoDdJekRfgz7sBz4Qs5f6e1yEAqSHhmIbIF";
const FILE_ID = "libraryLetters"; // you can name this file however you want

// Load letters from jsonsilo
export async function fetchLetters() {
  const res = await fetch(`${API_URL}/${FILE_ID}`, {
    headers: { Authorization: `Bearer ${API_KEY}` }
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data || [];
}

// Save letters to jsonsilo
export async function saveLetters(letters: any) {
  await fetch(`${API_URL}/${FILE_ID}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(letters)
  });
}
