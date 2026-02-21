interface KanbanCardProps {
  id: string;
  label: string;
  status?: string;
}

export function KanbanCard({ id, label, status = 'Work in progress' }: KanbanCardProps) {
  return (
    <div className="bg-[var(--color-dark-900)] text-white p-6 rounded-[var(--radius-lg)] min-w-[200px]">
      <p className="caption text-[var(--color-dark-300)] mb-2">{id}</p>
      <h3 className="heading-8 mb-4">{label}</h3>
      <span className="inline-block px-3 py-1 rounded-full body-sm bg-red-600/80">
        {status}
      </span>
    </div>
  );
}
