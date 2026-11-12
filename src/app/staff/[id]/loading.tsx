import {
  Bone,
  PageSkeleton,
  StaffFormSkeleton,
  TitleSkeleton,
} from "@/components/skeleton";

/* Same as Add staff, with the deactivate button underneath. */
export default function Loading() {
  return (
    <PageSkeleton>
      <TitleSkeleton className="w-36" />
      <StaffFormSkeleton />
      <Bone className="mt-2 h-11 w-full" />
    </PageSkeleton>
  );
}
