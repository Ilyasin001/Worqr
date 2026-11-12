import { PageSkeleton, StaffFormSkeleton, TitleSkeleton } from "@/components/skeleton";

export default function Loading() {
  return (
    <PageSkeleton>
      <TitleSkeleton className="w-44" />
      <StaffFormSkeleton />
    </PageSkeleton>
  );
}
