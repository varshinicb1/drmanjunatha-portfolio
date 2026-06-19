const logoMap: Record<string, string> = {
  'RV College of Engineering': '/logos/rvce-logo.png',
  'Indian Institute of Science (IISc)': '/logos/iisc-logo.png',
  'IISc': '/logos/iisc-logo.png',
  'Indian Institute of Science': '/logos/iisc-logo.png',
  'General Electric, GE India': '/logos/ge-logo.svg',
  'General Electric': '/logos/ge-logo.svg',
  'Visvesvaraya Technological University (VTU), Belagavi': '/logos/vtu-logo.png',
  'VTU': '/logos/vtu-logo.png',
  'Bangalore University': '/logos/bub-logo.png',
  'Bangalore University, Bengaluru': '/logos/bub-logo.png',
  'American Chemical Society (ACS, USA)': '/logos/acs-logo.svg',
  'ACS': '/logos/acs-logo.svg',
  'Royal Society of Chemistry (RSC, UK)': '/logos/rsc-logo.svg',
  'RSC': '/logos/rsc-logo.svg',
  'CSIR-UGC': '/logos/csir-logo.jpg',
  'CSIR': '/logos/csir-logo.jpg',
  'MHRD': '/logos/csir-logo.jpg',
  'The National Pre-University College': '/logos/national-pu-logo.png',
  'National Pre-University College': '/logos/national-pu-logo.png',
  'Deeksha Centre for Learning': '/logos/deeksha-logo.webp',
};

export function getLogo(name: string): string | null {
  for (const [key, path] of Object.entries(logoMap)) {
    if (name.includes(key)) return path;
  }
  return null;
}

export default logoMap;
