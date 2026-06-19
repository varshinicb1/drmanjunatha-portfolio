export default function SectionPillar({ num, title, subtitle, id }: { num: string; title: string; subtitle: string; id?: string }) {
  return (
    <div className="w-full bg-gradient-to-r from-amber-800 to-amber-700 py-8 sm:py-10 md:py-14" id={id}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-amber-200 text-sm font-bold font-mono tracking-wider">{num}</span>
          <div className="h-px flex-1 bg-amber-600/50" />
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-7xl bebas-neue-regular text-white">{title}</h2>
        <p className="text-amber-100/80 text-sm md:text-base mt-2 max-w-2xl">{subtitle}</p>
      </div>
    </div>
  );
}
