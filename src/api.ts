// src/api.ts
import { Letter } from "./types";

const FILE_ID = "ca2582c2-a9a5-4399-b021-a5899c240cc1"; // your silo file
const API_KEY = "xzTBpAGQoDdJekRfgz7sBz4Qs5f6e1yEAqSHhmIbIF";
const BASE_URL = `https://api.jsonsilo.com/${FILE_ID}`;

export async function fetchLetters(): Promise<Letter[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: {
        "X-SILO-KEY": API_KEY,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error(`Fetch failed: ${res.statusText}`);
    const data = await res.json();

    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Error fetching letters:", err);
    return [];
  }
}

export async function saveLetters(letters: Letter[]): Promise<void> {
  try {
    const res = await fetch(BASE_URL, {
      method: "PUT",
      headers: {
        "X-SILO-KEY": API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(letters),
    });

    if (!res.ok) throw new Error(`Save failed: ${res.statusText}`);
  } catch (err) {
    console.error("Error saving letters:", err);
  }
}
