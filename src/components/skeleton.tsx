import type { ReactNode } from "react";

/*
 * Skeleton placeholders shown by each route's loading.tsx while its server
 * component streams. Shapes mirror the real screens so nothing jumps when
 * the content lands.
 */

/** One shimmering block. Size it with Tailwind classes. */
export function Bone({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`skeleton rounded-[4px] ${className}`} />;
}

/** Page wrapper: announces loading once to assistive tech. */
export function PageSkeleton({
  children,
  className = "flex flex-col gap-4 pt-4",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div role="status" aria-busy="true" className={className}>
      <span className="sr-only">Loading…</span>
      {children}
    </div>
  );
}

export function TitleSkeleton({ className = "w-32" }: { className?: string }) {
  return <Bone className={`h-7 ${className}`} />;
}

/** Card frame matching the shared <Card> primitive. */
export function CardSkeleton({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[8px] border border-outline-variant bg-surface-container-lowest p-4 shadow-sm">
      {children}
    </div>
  );
}

/** Label + input pair, as rendered by <Field>. */
export function FieldSkeleton({ labelWidth = "w-16" }: { labelWidth?: string }) {
  return (
    <div className="flex flex-col gap-1">
      <Bone className={`h-3 ${labelWidth}`} />
      <Bone className="h-10 w-full" />
    </div>
  );
}

/** The from/to date filter card used by History and Reports. */
export function RangeFormSkeleton() {
  return (
    <CardSkeleton>
      <div className="grid grid-cols-2 gap-3">
        <FieldSkeleton labelWidth="w-10" />
        <FieldSkeleton labelWidth="w-8" />
        <Bone className="col-span-2 h-11 w-full" />
      </div>
    </CardSkeleton>
  );
}

/** Mirrors <ShiftCard>: icon tile, two text lines, right-aligned pay. */
export function ShiftCardSkeleton() {
  return (
    <div className="flex items-center justify-between gap-2 rounded-[4px] border border-outline-variant bg-surface-container-lowest p-3 shadow-sm">
      <div className="flex min-w-0 items-center gap-3">
        <Bone className="size-10 shrink-0" />
        <div className="flex flex-col gap-1.5">
          <Bone className="h-4 w-32" />
          <Bone className="h-3 w-24" />
        </div>
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <Bone className="h-4 w-16" />
        <Bone className="h-4 w-12" />
      </div>
    </div>
  );
}

export function ShiftListSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: count }, (_, i) => (
        <ShiftCardSkeleton key={i} />
      ))}
    </div>
  );
}

/** Staff / payment row: initials tile, name + chip, trailing actions. */
export function PersonRowSkeleton() {
  return (
    <div className="flex items-center justify-between gap-3 rounded-[4px] border border-outline-variant bg-surface-container-lowest p-3 shadow-sm">
      <div className="flex items-center gap-3">
        <Bone className="size-10 shrink-0" />
        <div className="flex flex-col gap-1.5">
          <Bone className="h-4 w-28" />
          <Bone className="h-4 w-14" />
        </div>
      </div>
      <Bone className="h-8 w-20" />
    </div>
  );
}

/** A titled settings-style section with a card of fields. */
export function SectionSkeleton({ fields = 2 }: { fields?: number }) {
  return (
    <div>
      <Bone className="mb-2 h-4 w-28" />
      <CardSkeleton>
        <div className="flex flex-col gap-4">
          {Array.from({ length: fields }, (_, i) => (
            <FieldSkeleton key={i} />
          ))}
          <Bone className="h-11 w-full" />
        </div>
      </CardSkeleton>
    </div>
  );
}

/** Mirrors <StaffForm>: name, phone, role, submit. */
export function StaffFormSkeleton() {
  return (
    <div className="space-y-4">
      <FieldSkeleton labelWidth="w-12" />
      <FieldSkeleton labelWidth="w-14" />
      <FieldSkeleton labelWidth="w-10" />
      <Bone className="h-11 w-full" />
    </div>
  );
}

/** Mirrors <ShiftForm>: details, rates, staff entries, save. */
export function ShiftFormSkeleton() {
  return (
    <>
      <CardSkeleton>
        <div className="flex flex-col gap-4">
          <FieldSkeleton labelWidth="w-14" />
          <FieldSkeleton labelWidth="w-10" />
          <div className="grid grid-cols-2 gap-3">
            <FieldSkeleton labelWidth="w-10" />
            <FieldSkeleton labelWidth="w-10" />
          </div>
        </div>
      </CardSkeleton>
      <CardSkeleton>
        <div className="grid grid-cols-2 gap-3">
          <FieldSkeleton labelWidth="w-20" />
          <FieldSkeleton labelWidth="w-24" />
        </div>
      </CardSkeleton>
      <div className="flex items-center justify-between">
        <Bone className="h-5 w-16" />
        <Bone className="h-8 w-24" />
      </div>
      <div className="flex flex-col gap-2">
        <PersonRowSkeleton />
        <PersonRowSkeleton />
      </div>
      <Bone className="h-11 w-full" />
    </>
  );
}
