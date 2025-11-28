import React, { useMemo, useRef } from "react";

export default function MeusFretes() {
  const ref = useRef(null);

  const list = JSON.parse(localStorage.getItem("freteja_requests") || "[]");

  const memoList = useMemo(() => list, [list]);

  return (
    <>
      <div className="card"><h2>Meus Fretes</h2></div>

      {memoList.length === 0 && (
        <div className="card">Você ainda não tem fretes.</div>
      )}

      {memoList.map((r: any, idx: number) => (
        <div key={idx} className="card">
          <strong>{r.from} → {r.to}</strong>
          <div className="small">{r.desc}</div>
        </div>
      ))}
    </>
  );
}

