const FILE_ID = "ca2582c2-a9a5-4399-b021-a5899c240cc1";
const API_KEY = "xzTBpAGQoDdJekRfgz7sBz4Qs5f6e1yEAqSHhmIbIF";
const BASE_URL = `https://api.jsonsilo.com/${FILE_ID}`;

// Fetch letters from jsonsilo
export async function fetchLetters() {
  const res = await fetch(BASE_URL, {
    headers: {
      "X-SILO-KEY": API_KEY,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch letters");
  return res.json();
}

// Save (overwrite) letters on jsonsilo
export async function saveLetters(letters: any) {
  const res = await fetch(BASE_URL, {
    method: "PUT",
    headers: {
      "X-SILO-KEY": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(letters),
  });
  if (!res.ok) throw new Error("Failed to save letters");
  return res.json();
}
