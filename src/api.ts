const API_URL = "https://api.jsonsilo.com/api/v1/files";
const API_KEY = "xzTBpAGQoDdJekRfgz7sBz4Qs5f6e1yEAqSHhmIbIF";
const FILE_ID = "libraryLetters"; // must match what you created in jsonsilo

// Load letters
export async function fetchLetters() {
  const res = await fetch(`${API_URL}/${FILE_ID}`, {
    headers: { Authorization: `Bearer ${API_KEY}` }
  });

  if (res.status === 404) {
    // File doesn't exist yet → create it
    await createLettersFile();
    return [];
  }

  if (!res.ok) {
    console.error("Failed to fetch letters", res.status);
    return [];
  }

  return await res.json();
}

// Save letters
export async function saveLetters(letters: any) {
  const res = await fetch(`${API_URL}/${FILE_ID}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(letters)
  });

  if (!res.ok) {
    console.error("Failed to save letters", res.status);
  }
}

// Create file if missing
async function createLettersFile() {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fileId: FILE_ID,
      content: []
    })
  });

  if (!res.ok) {
    console.error("Failed to create letters file", res.status);
  }
}
