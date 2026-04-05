import { cn } from "@/lib/utils";
import type { MainResultsRow } from "@/data/mainResultsTable";

type MainResultsTableProps = {
  rows: MainResultsRow[];
};

export function MainResultsTable({ rows }: MainResultsTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border/70">
      <table className="min-w-[1300px] w-full text-sm">
        <thead>
          <tr className="bg-muted/60">
            <th rowSpan={2} className="sticky left-0 bg-muted/60 px-4 py-3 text-left font-semibold">
              Model
            </th>
            <th colSpan={3} className="px-4 py-3 text-center font-semibold">
              Generation
            </th>
            <th colSpan={3} className="px-4 py-3 text-center font-semibold">
              Editing
            </th>
            <th colSpan={3} className="px-4 py-3 text-center font-semibold">
              Repair
            </th>
            <th colSpan={3} className="px-4 py-3 text-center font-semibold">
              Average
            </th>
          </tr>
          <tr className="bg-muted/40">
            <th className="px-4 py-2 text-center font-medium">EX</th>
            <th className="px-4 py-2 text-center font-medium">IN</th>
            <th className="px-4 py-2 text-center font-medium">AE</th>
            <th className="px-4 py-2 text-center font-medium">EX</th>
            <th className="px-4 py-2 text-center font-medium">IN</th>
            <th className="px-4 py-2 text-center font-medium">AE</th>
            <th className="px-4 py-2 text-center font-medium">EX</th>
            <th className="px-4 py-2 text-center font-medium">IN</th>
            <th className="px-4 py-2 text-center font-medium">AE</th>
            <th className="px-4 py-2 text-center font-medium">EX</th>
            <th className="px-4 py-2 text-center font-medium">IN</th>
            <th className="px-4 py-2 text-center font-medium">AE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={13} className="bg-sky-50/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700">
              Closed-Source Large Language Models
            </td>
          </tr>
          {rows
            .filter((row) => row.group === "Closed-Source")
            .map((row) => (
              <ResultRow key={row.model} row={row} />
            ))}
          <tr>
            <td colSpan={13} className="bg-emerald-50/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700">
              Open-Source Large Language Models
            </td>
          </tr>
          {rows
            .filter((row) => row.group === "Open-Source")
            .map((row) => (
              <ResultRow key={row.model} row={row} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

function ResultRow({ row }: { row: MainResultsRow }) {
  return (
    <tr className="border-t border-border/60">
      <td className={cn("sticky left-0 bg-background px-4 py-3 font-medium")}>{row.model}</td>
      <Cell value={row.generation.ex} />
      <Cell value={row.generation.in} />
      <Cell value={row.generation.ae} />
      <Cell value={row.editing.ex} />
      <Cell value={row.editing.in} />
      <Cell value={row.editing.ae} />
      <Cell value={row.repair.ex} />
      <Cell value={row.repair.in} />
      <Cell value={row.repair.ae} />
      <Cell value={row.average.ex} />
      <Cell value={row.average.in} />
      <Cell value={row.average.ae} />
    </tr>
  );
}

function Cell({ value }: { value: number }) {
  return <td className="px-4 py-3 text-center text-muted-foreground">{value.toFixed(2)}</td>;
}
