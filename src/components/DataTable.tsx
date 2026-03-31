import React from 'react';
import { cn } from '../utils';

export interface Column<T> {
  key: string;
  header: string;
  render?: (row: T) => React.ReactNode;
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  density?: 'compact' | 'comfortable' | 'spacious';
  striped?: boolean;
  borderless?: boolean;
}

export function DataTable<T extends Record<string, any>>({ 
  columns, data, density = 'comfortable', striped = false, borderless = false 
}: DataTableProps<T>) {
  
  return (
    <div className="w-full overflow-x-auto rounded-[var(--aptly-radius-lg)] shadow-[var(--aptly-shadow-sm)] border border-[var(--aptly-border-light)] bg-[var(--aptly-surface)] aptly-hardware">
      <table className={cn("w-full text-left text-sm whitespace-nowrap", !borderless && "divide-y divide-[var(--aptly-border-light)]")}>
        <thead className="bg-[var(--aptly-bg)] text-[var(--aptly-text-secondary)] font-medium">
          <tr>
            {columns.map(col => (
              <th 
                key={col.key} 
                className={cn(
                  "px-[var(--aptly-pad-md)] font-semibold tracking-tight whitespace-nowrap text-xs uppercase opacity-75",
                  density === 'compact' ? "py-3" : density === 'spacious' ? "py-6" : "py-4"
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={cn(!borderless && "divide-y divide-[var(--aptly-border-light)]", "bg-[var(--aptly-surface)] text-[var(--aptly-text)]")}>
           {data.map((row, i) => (
             <tr 
               key={i} 
               className={cn(
                 "hover:bg-[var(--aptly-bg)] transition-colors duration-[var(--aptly-speed)] cursor-default group",
                 striped && i % 2 !== 0 && "bg-[var(--aptly-bg)] opacity-[0.85]"
               )}
             >
                {columns.map((col, idx) => (
                  <td 
                    key={col.key} 
                    className={cn(
                      "px-[var(--aptly-pad-md)] transition-colors",
                      density === 'compact' ? "py-2.5" : density === 'spacious' ? "py-5" : "py-3.5",
                      idx === 0 && "font-medium"
                    )}
                  >
                     {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
             </tr>
           ))}
        </tbody>
      </table>
    </div>
  );
}
