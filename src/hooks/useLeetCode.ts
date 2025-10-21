import { useState, useEffect } from 'react';

interface LeetCodeStats {
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  ranking: number;
}

export const useLeetCode = (username: string) => {
  const [stats, setStats] = useState<LeetCodeStats>({
    totalSolved: 224,
    easy: 161,
    medium: 59,
    hard: 4,
    ranking: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        // Using a proxy to fetch LeetCode data
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        if (response.ok) {
          const data = await response.json();
          setStats({
            totalSolved: data.totalSolved || 224,
            easy: data.easySolved || 161,
            medium: data.mediumSolved || 59,
            hard: data.hardSolved || 4,
            ranking: data.ranking || 0,
          });
        }
      } catch (error) {
        console.log('Using cached LeetCode stats');
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, [username]);

  return { stats, loading };
};
