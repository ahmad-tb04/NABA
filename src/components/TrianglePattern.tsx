export const TrianglePattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="triangle-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <polygon points="0,0 60,0 30,52" fill="hsl(var(--naba-yellow))" opacity="0.05" />
            <polygon points="60,0 120,0 90,52" fill="hsl(var(--naba-navy))" opacity="0.08" />
            <polygon points="30,52 90,52 60,104" fill="hsl(var(--naba-yellow))" opacity="0.06" />
            <polygon points="0,60 60,60 30,112" fill="hsl(var(--naba-navy))" opacity="0.04" />
            <polygon points="60,60 120,60 90,112" fill="hsl(var(--naba-yellow))" opacity="0.07" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#triangle-pattern)" />
      </svg>
    </div>
  );
};
