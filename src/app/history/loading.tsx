import {
  Bone,
  PageSkeleton,
  RangeFormSkeleton,
  ShiftListSkeleton,
  TitleSkeleton,
} from "@/components/skeleton";

export default function Loading() {
  return (
    <PageSkeleton>
      <TitleSkeleton className="w-24" />
      <RangeFormSkeleton />
      <Bone className="h-4 w-40" />
      <ShiftListSkeleton count={6} />
    </PageSkeleton>
  );
}
