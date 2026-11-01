import { Bone, PageSkeleton } from "@/components/skeleton";

/* Logo, title, then the sign-in card with two fields and a button. */
export default function Loading() {
  return (
    <PageSkeleton className="flex min-h-[85vh] flex-col justify-center">
      <div className="mb-8 flex flex-col items-center gap-2">
        <Bone className="mb-1 size-14 rounded-[8px]" />
        <Bone className="h-7 w-24" />
        <Bone className="h-4 w-32" />
      </div>
      <div className="flex flex-col gap-4 rounded-[8px] border border-outline-variant bg-surface-container-lowest p-4 shadow-sm">
        <div className="flex flex-col gap-1">
          <Bone className="h-3 w-10" />
          <Bone className="h-11 w-full" />
        </div>
        <div className="flex flex-col gap-1">
          <Bone className="h-3 w-16" />
          <Bone className="h-11 w-full" />
        </div>
        <Bone className="h-11 w-full" />
      </div>
    </PageSkeleton>
  );
}
