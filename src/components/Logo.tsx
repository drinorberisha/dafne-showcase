export default function Logo({ className = "w-12 h-12", inverted = false }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <img 
        src={inverted ? "/dafne-showcase/logo-inverted.png" : "/dafne-showcase/logo-primary-transparent.png"} 
        alt="Dafne Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}
