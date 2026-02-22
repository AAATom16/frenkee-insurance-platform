import { StepStepper } from './ui/StepStepper';

const STEP_LABELS = ['Úvod', 'Zdraví', 'Krytí', 'Nabídky', 'Kontakt', 'Shrnutí', 'Kontrola', 'Hotovo'];

export function LifeProgress({ current, total = 8 }: { current: number; total?: number }) {
  return <StepStepper current={current} total={total} labels={STEP_LABELS} />;
}
