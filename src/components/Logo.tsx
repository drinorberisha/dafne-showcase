interface LogoProps {
  className?: string;
  leafClassName?: string;
  inverted?: boolean;
}

export default function Logo({ className = "text-4xl", leafClassName = "w-4 h-4", inverted = false }: LogoProps) {
  return (
    <div className={`relative inline-flex items-center justify-center font-serif leading-none tracking-tighter ${className} ${inverted ? "text-bone" : "text-ink"}`}>
      {/* The D - Using Playfair Display which is our defined serif */}
      <span className="relative z-10 font-medium">D</span>
      
      {/* The laurel leaf inside the bowl of the D */}
      <div className={`absolute left-[38%] top-[48%] -translate-y-1/2 -rotate-12 ${leafClassName}`}>
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-90">
          <path d="M17.5 3.5C14.5 3.5 12 5.5 10 8.5C10 8.5 7.5 10.5 5.5 13.5C4.5 15 4 16.5 4 18C4 18.5 4.5 19 5 19C6.5 19 8 18.5 9.5 17.5C12.5 15.5 14.5 13 14.5 13C17.5 11 19.5 8.5 19.5 5.5C19.5 4.5 18.5 3.5 17.5 3.5Z" />
        </svg>
      </div>
    </div>
  );
}
