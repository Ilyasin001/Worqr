import { PageSkeleton, ShiftFormSkeleton } from "@/components/skeleton";

export default function Loading() {
  return (
    <PageSkeleton>
      <ShiftFormSkeleton />
    </PageSkeleton>
  );
}
