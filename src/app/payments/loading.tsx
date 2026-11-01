import {
  Bone,
  CardSkeleton,
  PageSkeleton,
  PersonRowSkeleton,
  TitleSkeleton,
} from "@/components/skeleton";

/* Filter card, then one row per staff member owed. */
export default function Loading() {
  return (
    <PageSkeleton>
      <TitleSkeleton className="w-28" />
      <CardSkeleton>
        <div className="flex flex-col gap-3">
          <Bone className="h-4 w-24" />
          <div className="grid grid-cols-2 gap-3">
            <Bone className="h-10 w-full" />
            <Bone className="h-10 w-full" />
          </div>
        </div>
      </CardSkeleton>
      <div className="flex items-end justify-between">
        <Bone className="h-6 w-28" />
        <Bone className="h-8 w-24" />
      </div>
      <div className="flex flex-col gap-2">
        {Array.from({ length: 4 }, (_, i) => (
          <PersonRowSkeleton key={i} />
        ))}
      </div>
    </PageSkeleton>
  );
}
