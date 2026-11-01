import {
  Bone,
  CardSkeleton,
  PageSkeleton,
  RangeFormSkeleton,
  TitleSkeleton,
} from "@/components/skeleton";

/* Preset chips, range form, then the summary card. */
export default function Loading() {
  return (
    <PageSkeleton>
      <TitleSkeleton className="w-24" />
      <div className="flex flex-wrap gap-2">
        {["w-20", "w-24", "w-20", "w-16"].map((w, i) => (
          <Bone key={i} className={`h-8 ${w}`} />
        ))}
      </div>
      <RangeFormSkeleton />
      <CardSkeleton>
        <Bone className="h-3 w-24" />
        <div className="mt-2 flex items-end justify-between">
          <div className="flex flex-col gap-1.5">
            <Bone className="h-4 w-28" />
            <Bone className="h-4 w-20" />
          </div>
          <Bone className="h-8 w-28" />
        </div>
        <Bone className="mt-4 h-11 w-full" />
      </CardSkeleton>
    </PageSkeleton>
  );
}
