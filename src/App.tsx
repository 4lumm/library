import React, { useState, useEffect } from 'react';
import { BookOpen, Feather, LogOut } from 'lucide-react';
import LoginPage from './components/LoginPage';
import BookshelfPage from './components/BookshelfPage';
import { Letter, User } from './types';
import { fetchLetters, saveLetters } from "./components/api";

const WELCOME_LETTER: Letter = {
  id: 'welcome',
  title: 'Welcome to the Library',
  content: `My Dearest Love,

This is a place where a collection of thoughts, feelings, and memories stored within the pages of carefully crafted letters. Each book on these shelves represents a moment shared, a memory captured, and a story written just for you.

With all my heart,
Forever yours`,
  author: 'Library Keeper',
  createdAt: new Date('2025-09-10').toISOString(),
  romanNumeral: 'Welcome'
};

const USERS: User[] = [
  { username: 'Library Keeper', password: 'Test', role: 'admin' },
  { username: 'Marian', password: 'Test', role: 'viewer' }
];

function App() {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<'admin' | 'viewer'>('viewer');
  const [letters, setLetters] = useState<Letter[]>([WELCOME_LETTER]);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    async function load() {
      const stored = await fetchLetters();
     setLetters([WELCOME_LETTER, ...stored.filter((l: Letter) => l.id !== "welcome")]);
    }
    load();
  
    const savedUser = localStorage.getItem("currentUser");
    const savedRole = localStorage.getItem("userRole") as "admin" | "viewer";
    if (savedUser && savedRole) {
      setCurrentUser(savedUser);
      setUserRole(savedRole);
    }
  }, []);


  const handleLogin = (username: string, password: string): boolean => {
    const user = USERS.find(u => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(username);
      setUserRole(user.role);
      localStorage.setItem('currentUser', username);
      localStorage.setItem('userRole', user.role);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setUserRole('viewer');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userRole');
  };

  const addLetter = (title: string, content: string) => {
    const newLetter: Letter = {
      id: Date.now().toString(),
      title,
      content,
      author: currentUser || 'Anonymous',
      createdAt: new Date().toISOString(), // store UTC ISO, format for display later Philippine time
      romanNumeral: toRomanNumeral(letters.length) // This will be the next number
    };

    const updatedLetters = [...letters, newLetter];
    setLetters(updatedLetters);
    
    // Save to localStorage (excluding welcome letter)
    const lettersToSave = updatedLetters.filter(l => l.id !== 'welcome');
    saveLetters(lettersToSave).catch(console.error);
  };

  const deleteLetter = (letterId: string) => {
    if (letterId === 'welcome') return; // Protect welcome letter
    
    const updatedLetters = letters.filter(l => l.id !== letterId);
    setLetters(updatedLetters);
    
    // Save to localStorage (excluding welcome letter)
    const lettersToSave = updatedLetters.filter(l => l.id !== 'welcome');
    saveLetters(lettersToSave).catch(console.error);
  };

  const toRomanNumeral = (num: number): string => {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    
    let result = '';
    for (let i = 0; i < values.length; i++) {
      while (num >= values[i]) {
        result += symbols[i];
        num -= values[i];
      }
    }
    return result || 'I';
  };

  if (!currentUser) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-stone-50 to-green-50">
      {/* Header */}
      <header className="relative z-10 p-6 bg-gradient-to-r from-cream-100/80 to-stone-100/80 backdrop-blur-sm border-b border-cream-200/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <BookOpen className="text-amber-700 w-8 h-8" />
            <h1 className="text-2xl font-serif text-amber-900">The Library</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-amber-800 font-medium">
              Welcome, {currentUser} {userRole === 'admin' ? '(Librarian)' : '(Visitor)'}
            </span>
            {userRole === 'admin' && (
              <button
                onClick={() => setIsCreating(!isCreating)}
                className="flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-2 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Feather className="w-4 h-4" />
                <span>Write Letter</span>
              </button>
            )}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-stone-600 text-white px-4 py-2 rounded-lg hover:bg-stone-700 transition-colors shadow-md"
            >
              <LogOut className="w-4 h-4" />
              <span>Leave</span>
            </button>
          </div>
        </div>
      </header>

      <BookshelfPage 
        letters={letters}
        isCreating={isCreating}
        onCreateLetter={addLetter}
        onDeleteLetter={deleteLetter}
        onCloseCreate={() => setIsCreating(false)}
        userRole={userRole}
      />
    </div>
  );
}

export default App;