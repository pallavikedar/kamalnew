"use client";

export default function RoyalDivider({ className = "" }) {
  return (
    <svg
      viewBox="0 0 700 40"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full max-w-3xl mx-auto block ${className}`}
      aria-hidden="true"
    >
      {/* Left spear tip */}
      <polygon points="8,20 28,13 36,20 28,27" fill="#deb309" />

      {/* Left line */}
      <line x1="36" y1="20" x2="314" y2="20" stroke="#deb309" strokeWidth="1" />

      {/* Small left diamond */}
      <polygon points="318,20 326,14 334,20 326,26" fill="#deb309" />
      {/* Large center diamond */}
      <polygon points="336,20 350,11 364,20 350,29" fill="#deb309" />
      {/* Small right diamond */}
      <polygon points="366,20 374,14 382,20 374,26" fill="#deb309" />

      {/* Right line */}
      <line x1="382" y1="20" x2="664" y2="20" stroke="#deb309" strokeWidth="1" />

      {/* Right spear tip */}
      <polygon points="692,20 672,13 664,20 672,27" fill="#deb309" />
    </svg>
  );
}