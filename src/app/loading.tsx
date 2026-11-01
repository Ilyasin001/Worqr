import {
  Bone,
  CardSkeleton,
  PageSkeleton,
  ShiftListSkeleton,
} from "@/components/skeleton";

/* Dashboard: hero stats card, then the recent-shifts list. */
export default function Loading() {
  return (
    <PageSkeleton className="pt-4">
      <CardSkeleton>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-center gap-2">
            <Bone className="h-3 w-20" />
            <Bone className="h-8 w-28" />
            <Bone className="h-3 w-24" />
          </div>
          <div className="grid grid-rows-2 gap-2">
            <Bone className="h-12 w-full" />
            <Bone className="h-12 w-full" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 border-t border-outline-variant pt-4">
          <div className="flex flex-col gap-1.5">
            <Bone className="h-3 w-16" />
            <Bone className="h-5 w-20" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Bone className="h-3 w-16" />
            <Bone className="h-5 w-24" />
          </div>
        </div>
      </CardSkeleton>

      <div className="mb-2 mt-6 flex items-end justify-between">
        <Bone className="h-6 w-32" />
        <Bone className="h-4 w-14" />
      </div>
      <ShiftListSkeleton />
    </PageSkeleton>
  );
}
