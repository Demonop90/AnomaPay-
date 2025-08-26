import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [balance, setBalance] = useState(100);
  const [history, setHistory] = useState([]);

  const sendPayment = (amount) => {
    if (amount <= 0 || amount > balance) return;
    setBalance(balance - amount);
    setHistory([
      { id: Date.now(), amount, status: "✨ Sent magically!" },
      ...history,
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-950 flex flex-col items-center">
      {/* Banner */}
      <div className="w-full">
        <img src="/anoma-banner.jpg" alt="Anoma Banner" className="w-full" />
      </div>

      {/* Logo */}
      <motion.img
        src="/anoma-logo.png"
        alt="Anoma Logo"
        className="w-24 my-6"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      {/* Balance Card */}
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center w-80">
        <h2 className="text-xl font-bold mb-2">Demo Wallet</h2>
        <p className="text-lg">Balance: ${balance} (Demo)</p>

        {/* Send Buttons */}
        <div className="flex justify-center gap-3 mt-4">
          {[5, 10, 20].map((amt) => (
            <button
              key={amt}
              onClick={() => sendPayment(amt)}
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
            >
              Send ${amt}
            </button>
          ))}
        </div>
      </div>

      {/* History */}
      <div className="mt-6 w-80">
        <h3 className="text-lg font-semibold mb-2">Payment History</h3>
        <ul className="space-y-2">
          {history.map((tx) => (
            <li
              key={tx.id}
              className="bg-white/5 p-3 rounded-lg border border-white/10"
            >
              <span className="font-bold">${tx.amount}</span> → {tx.status}
            </li>
          ))}
          {history.length === 0 && (
            <p className="text-gray-400 text-sm">No transactions yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
       }
