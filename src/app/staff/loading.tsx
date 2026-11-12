import {
  Bone,
  PageSkeleton,
  PersonRowSkeleton,
  TitleSkeleton,
} from "@/components/skeleton";

/* Search box, then the staff rows. */
export default function Loading() {
  return (
    <PageSkeleton>
      <TitleSkeleton className="w-16" />
      <Bone className="h-10 w-full" />
      <div className="flex flex-col gap-2">
        {Array.from({ length: 6 }, (_, i) => (
          <PersonRowSkeleton key={i} />
        ))}
      </div>
    </PageSkeleton>
  );
}
