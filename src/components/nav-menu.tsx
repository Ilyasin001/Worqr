"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "@/components/icon";

const links = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/history", label: "History", icon: "history" },
  { href: "/payments", label: "Payments", icon: "payments" },
  { href: "/staff", label: "Staff", icon: "group" },
  { href: "/reports", label: "Reports", icon: "analytics" },
  { href: "/settings", label: "Settings", icon: "person" },
] as const;

/**
 * Hamburger button in the top bar that opens the main navigation as a
 * dropdown. It closes on outside tap, Escape, or picking a link.
 */
export function NavMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
        className="-mr-2 flex h-11 w-11 items-center justify-end text-on-surface-variant transition-transform duration-150 active:scale-95"
      >
        <Icon name={open ? "close" : "menu"} />
      </button>
      {open && (
        <nav
          id={menuId}
          aria-label="Main"
          className="absolute right-0 top-full mt-1 w-52 overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest py-1 shadow-lg"
        >
          <ul>
            {links.map(({ href, label, icon }) => {
              const active =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex h-11 items-center gap-3 px-4 text-[14px] transition-colors active:opacity-80 ${
                      active
                        ? "font-bold text-secondary"
                        : "text-on-surface hover:bg-surface-container"
                    }`}
                  >
                    <Icon name={icon} size={20} />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}
