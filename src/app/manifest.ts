import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Worqr",
    short_name: "Worqr",
    description: "Shift wage calculator and payroll record for the accountant",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f9ff",
    theme_color: "#f8f9ff",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
