"use client";

import { useState, useEffect } from "react";

interface Activity {
  id: number;
  time: string;
  user: string;
  action: string;
  badgeColor: string;
}

const USERS = ["Carlos M.", "Sofía G.", "Juan P.", "Valeria L.", "Andrés T.", "Mariana C.", "Diego R."];
const ACTIONS = [
  "reservó Asiento 14 (Spinning)",
  "hizo Check-in con código QR",
  "reservó Asiento 6 (Cardio)",
  "renovó Membresía Pro",
  "compró Suplemento Whey",
  "reservó Asiento 19 (Spinning)",
];

export const LiveActivityFeed = () => {
  const [activities, setActivities] = useState<Activity[]>([
    { id: 1, time: "Hace 1 min", user: "Diego R.", action: "reservó Asiento 8 (Cardio)", badgeColor: "text-[#00d2d3] bg-[#00d2d3]/10" },
    { id: 2, time: "Hace 3 mins", user: "Mariana C.", action: "hizo Check-in con código QR", badgeColor: "text-emerald-400 bg-emerald-500/10" },
    { id: 3, time: "Hace 5 mins", user: "Andrés T.", action: "reservó Asiento 12 (Spinning)", badgeColor: "text-[#00d2d3] bg-[#00d2d3]/10" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomUser = USERS[Math.floor(Math.random() * USERS.length)];
      const randomAction = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
      const isCheckIn = randomAction.includes("Check-in");
      const badgeCol = isCheckIn ? "text-emerald-400 bg-emerald-500/10" : "text-[#00d2d3] bg-[#00d2d3]/10";

      const newActivity: Activity = {
        id: Date.now(),
        time: "Ahora",
        user: randomUser,
        action: randomAction,
        badgeColor: badgeCol,
      };

      setActivities((prev) => [newActivity, ...prev.slice(0, 2)]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 p-4 rounded-2xl bg-slate-950/40 border border-white/5 relative overflow-hidden">
      <div className="flex items-center justify-between mb-3.5">
        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping mr-2"></span>
          Actividad de Socios en Tiempo Real
        </span>
        <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">FourGym Hub</span>
      </div>

      <div className="space-y-2.5">
        {activities.map((act) => (
          <div
            key={act.id}
            className="flex items-center justify-between text-[10px] text-slate-300 bg-slate-950/50 p-2.5 rounded-xl border border-white/5 animate-fade-in"
          >
            <div className="flex items-center space-x-2">
              <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded ${act.badgeColor}`}>
                {act.time}
              </span>
              <span>
                <strong className="text-white">{act.user}</strong> {act.action}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
