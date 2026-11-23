import React, { useState, useEffect, useRef } from 'react';
import { Eye } from 'lucide-react';

const COUNTER_KEY = 'infection_osce_omarabdelaty';
const CACHED_COUNT_KEY = 'infection_osce_visitor_cached_count';

export default function VisitorCounter() {
  const [visitsCount, setVisitsCount] = useState(() => {
    const cached = localStorage.getItem(CACHED_COUNT_KEY);
    return cached ? parseInt(cached, 10) : null;
  });
  const [isLoading, setIsLoading] = useState(true);
  const hiddenTimeRef = useRef(null);
  const isFetchingRef = useRef(false);

  // Fetch logic: hit (increment) or get (read-only)
  const fetchCount = async (shouldHit = false) => {
    if (isFetchingRef.current) return;
    isFetchingRef.current = true;

    try {
      const endpoint = shouldHit
        ? `https://countapi.mileshilliard.com/api/v1/hit/${COUNTER_KEY}`
        : `https://countapi.mileshilliard.com/api/v1/get/${COUNTER_KEY}`;

      const res = await fetch(endpoint, {
        headers: { 'Accept': 'application/json' }
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      const count = typeof data.value === 'number' ? data.value : parseInt(data.value, 10);

      if (!isNaN(count)) {
        setVisitsCount(count);
        localStorage.setItem(CACHED_COUNT_KEY, count.toString());
      }
    } catch (err) {
      console.warn('Visitor counter fetch notice:', err.message);
      const fallback = localStorage.getItem(CACHED_COUNT_KEY);
      if (!fallback) {
        setVisitsCount(1498);
      }
    } finally {
      setIsLoading(false);
      isFetchingRef.current = false;
    }
  };

  // Initial load check: Refresh vs New Visit
  useEffect(() => {
    let isReload = false;
    try {
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries && navEntries.length > 0) {
        isReload = navEntries[0].type === 'reload';
      } else if (window.performance && window.performance.navigation) {
        isReload = window.performance.navigation.type === 1;
      }
    } catch (e) {
      isReload = false;
    }

    // If page is refreshed (Reload): DO NOT increment, just read current count!
    // If it's a new visit (closed and reopened, new tab, direct link click): INCREMENT!
    fetchCount(!isReload);

    // Track background minimization / switching to other apps and returning
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        hiddenTimeRef.current = Date.now();
      } else if (document.visibilityState === 'visible') {
        if (hiddenTimeRef.current) {
          const awayDuration = Date.now() - hiddenTimeRef.current;
          // If user was away in background apps for more than 4 seconds and returned
          if (awayDuration > 4000) {
            fetchCount(true); // Increment visit on return from background!
          }
          hiddenTimeRef.current = null;
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div 
      className="inline-flex items-center gap-2 px-5 sm:px-6 py-1.5 sm:py-2 rounded-full bg-purple-50/95 dark:bg-purple-950/50 border border-purple-200/90 dark:border-purple-800/80 text-purple-900 dark:text-purple-200 font-bold text-xs sm:text-sm shadow-sm backdrop-blur-md transition-all hover:border-purple-400 select-none"
      title="عداد زيارات الموقع المباشر"
    >
      {/* Eye Icon */}
      <Eye className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />

      {/* Text Label */}
      <span className="text-slate-700 dark:text-slate-300 font-semibold">عدد زيارات الموقع:</span>

      {/* Number Value / Loading Skeleton */}
      {isLoading && visitsCount === null ? (
        <span className="w-10 h-4 rounded bg-purple-200/60 dark:bg-purple-900/60 animate-pulse inline-block"></span>
      ) : (
        <span className="font-inter font-black text-sm sm:text-base text-purple-700 dark:text-purple-300 tracking-tight">
          {visitsCount !== null ? visitsCount.toLocaleString() : '1,516'}
        </span>
      )}

      <span className="text-slate-700 dark:text-slate-300 font-semibold">زيارة</span>
    </div>
  );
}
