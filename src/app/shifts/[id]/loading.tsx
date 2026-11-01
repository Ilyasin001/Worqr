import { Bone, CardSkeleton, PageSkeleton } from "@/components/skeleton";

/* Header with chip + actions, the pay breakdown card, then the audit log. */
export default function Loading() {
  return (
    <PageSkeleton>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-start justify-between gap-2">
          <Bone className="h-7 w-40" />
          <div className="flex gap-2">
            <Bone className="h-6 w-14" />
            <Bone className="size-8" />
            <Bone className="size-8" />
          </div>
        </div>
        <Bone className="h-4 w-48" />
      </div>

      <CardSkeleton>
        <div className="flex justify-between">
          <Bone className="h-3 w-12" />
          <Bone className="h-3 w-10" />
        </div>
        <Bone className="mt-3 h-8 w-full" />
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b border-outline-variant/50 py-3 last:border-0"
          >
            <div className="flex flex-col gap-1.5">
              <Bone className="h-4 w-28" />
              <Bone className="h-3 w-20" />
            </div>
            <Bone className="h-5 w-16" />
          </div>
        ))}
        <div className="mt-1 flex items-center justify-between border-t border-outline-variant pt-3">
          <Bone className="h-4 w-12" />
          <Bone className="h-6 w-20" />
        </div>
      </CardSkeleton>

      <div>
        <Bone className="mb-2 h-5 w-20" />
        <div className="flex flex-col gap-2">
          <Bone className="h-14 w-full" />
          <Bone className="h-14 w-full" />
        </div>
      </div>
    </PageSkeleton>
  );
}
