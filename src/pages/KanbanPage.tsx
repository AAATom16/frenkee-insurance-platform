import { KanbanCard } from '../components/KanbanCard';

const CARDS = [
  { id: '1-4-1', label: 'Majetek' },
  { id: '1-4-2', label: 'Majetek' },
  { id: '1-4-3', label: 'Majetek' },
  { id: '1-4-4', label: 'Majetek' },
  { id: '1-4-5', label: 'Majetek' },
  { id: '1-4-6', label: 'Majetek' },
];

export function KanbanPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="heading-3 text-[var(--color-primary)] mb-8">
        Majetek – Work in progress
      </h1>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {CARDS.map((card) => (
          <KanbanCard key={card.id} id={card.id} label={card.label} />
        ))}
      </div>
    </div>
  );
}
