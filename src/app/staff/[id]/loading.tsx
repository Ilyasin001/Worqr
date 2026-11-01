import {
  Bone,
  PageSkeleton,
  StaffFormSkeleton,
  TitleSkeleton,
} from "@/components/skeleton";

/* Same form as Add staff, plus the deactivate button. */
export default function Loading() {
  return (
    <PageSkeleton>
      <TitleSkeleton className="w-36" />
      <StaffFormSkeleton />
      <Bone className="mt-2 h-11 w-full" />
    </PageSkeleton>
  );
}
