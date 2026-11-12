import {
  PageSkeleton,
  SectionSkeleton,
  TitleSkeleton,
} from "@/components/skeleton";

export default function Loading() {
  return (
    <PageSkeleton className="space-y-6 pt-4">
      <TitleSkeleton className="w-24" />
      <SectionSkeleton fields={1} />
      <SectionSkeleton fields={2} />
      <SectionSkeleton fields={1} />
      <SectionSkeleton fields={2} />
    </PageSkeleton>
  );
}
