"use client";
export function MixedCell({ value }: { value: number | string }) {
  const isNumber = typeof value === "number";
  return (
    <td
      className={`p-2 tabular-nums${isNumber ? " text-right" : " text-center"}`}
    >
      {isNumber ? value.toLocaleString() : value}
    </td>
  );
}
