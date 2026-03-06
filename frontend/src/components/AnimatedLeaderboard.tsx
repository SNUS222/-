'use client';

import { motion } from 'framer-motion';

const players = [
  { name: 'Alex', score: 1240 },
  { name: 'Mila', score: 1160 },
  { name: 'Sam', score: 980 }
];

export function AnimatedLeaderboard() {
  return (
    <div className="space-y-3">
      {players.map((player, idx) => (
        <motion.div
          key={player.name}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="glass flex items-center justify-between rounded-xl p-4"
        >
          <span className="font-medium">#{idx + 1} {player.name}</span>
          <span className="rounded-full bg-primaryGradient px-3 py-1 text-xs font-semibold">{player.score}</span>
        </motion.div>
      ))}
    </div>
  );
}
