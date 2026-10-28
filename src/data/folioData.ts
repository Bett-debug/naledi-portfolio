export interface PlateItem {
  id: string;
  plateNumber: string;
  categoryKey:
    | "church"
    | "studio"
    | "travel"
    | "adventure"
    | "events"
    | "documentary"
    | "portraits"
    | "architecture";
  shortCategory: string;
  fullCategory: string;
  shortDate: string;
  fullDate: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  location: string;
  imageUrl: string;
  alt: string;
  body: string;
  lens: string;
  exp: string;
  iso: string;
  plateTag: string;
  editionStatus: string;
}

export const HERO_PLATES = {
  primary: {
    id: "hero-01",
    plateId: "01",
    badge: "1955 Market Mansion",
    location: "Mombasa",
    gear: "sony a7 III · 35mm · 1/800s",
    title: "coast streetscape",
    desc: 'Streamline Moderne residential facade inscribed "1955 MARKET MANSION" with weathered tropical patina, turquoise architectural fins, and tangled overhead power lines against a vivid cobalt sky...',
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczNGvdiWqe1p5OxXyfT2H1pApCHUYCP87mGQh--uCZzohMOhEl1NN6xvpnbYeCcBIdeH5DJgWfclqATS_D_S-WUfYHqH4XCjk08QJc6ys2D4KDhoSvIs_MopLvUOocbN269lvTYpHwQFYzVINZO005tbVA=w1466-h978-s-no-gm?authuser=0",
    alt: "Clicking the plate in either the Hero or the Portfolio gallery opens the fullscreen inspection viewer with the complete caption and camera telemetry.",
  },
  secondaryTop: {
    id: "hero-02",
    plateId: "02",
    badge: "Plate 02 · Studio Chronicle",
    title: "Frequencies at Midnight: The Acoustic Sessions",
    gear: "Sony A7 III · Karen Audio Lab",
    imageUrl:
      "https://images.pixieset.com/646017521/1e8cd454b3ee246075bf2074352faaa0-xxlarge.jpg",
    alt: "Intimate editorial documentary shot of an acoustic soul singer and producer working over an analog Neve mixing desk in a Karen Nairobi recording studio. Moody deep forest green shadow tones, warm Edison bulb filaments glowing over vintage vinyl records and tube microphones, subtle analog tape reels in soft background focus.",
  },
  secondaryBottom: {
    id: "hero-03",
    plateId: "03",
    badge: "Plate 03 · Motorsport Expeditions",
    title: "Volcanic Dust Trail: Red Bull Hard Enduro",
    gear: "Sony A7 III · 70-200mm · 1/2500s Rift Escarpment",
    imageUrl:
      "https://images.pixieset.com/646017521/bcf00eb828bba3ece7017405e62fad9f-xxlarge.jpg",
    alt: "Dynamic action photograph of an off-road enduro motorcycle rider drifting through red volcanic dust switchbacks in the Great Rift Valley Kenya at sunset. Spectacular backlight creating long amber shadows and illuminated roost dirt plumes, rugged acacia trees and rocky ridgelines under dramatic stormy equatorial skies.",
  },
};

export const PORTRAIT_IMAGE = {
  url: "https://images.pixieset.com/646017521/5cb4cce23fd3a93871d813b944cbbcad-xxlarge.jpg",
  alt: "Portrait of documentary photographer Samuel Kiplangat holding ",
};

export const DEFAULT_LIGHTBOX_IMAGE =
  "https://lh3.googleusercontent.com/pw/AP1GczOKw4vfL53B7AXVthdvVTWJtMPA4AGCkpLgcTbOc9lc1PNDLjzljfhdfKGilpSrMIYTecjOkMeWgrq9Ff2V9QcDIqVa77bvV4Cu4-aMPAOGgxKk-m_A-upV24Qr6ClXPuA2bBIOoE6QnhlbhREydlgIwg=w550-h979-s-no-gm?authuser=0";

export const FOLIO_PLATES: PlateItem[] = [
  {
    id: "01",
    plateNumber: "Plate 01",
    categoryKey: "documentary",
    shortCategory: "Portrait / Ceremony",
    fullCategory: "Documentary & Academic Life",
    shortDate: "Aug 2024",
    fullDate: "August 2024",
    title: "The Scholar's Path",
    shortDesc:
      "A candid black and white study on academic transition and quiet contemplation.",
    fullDesc:
      "High-contrast monochrome capture of a graduate clad in academic regalia, angled away from camera against a corrugated backdrop while a companion looks on in deep profile.",
    location: "Nairobi School, Kenya",
    imageUrl: "https://images.pixieset.com/646017521/e51e45243a2ee160596d921da7a49129-xxlarge.jpg",
    alt: "Black and white portrait of a graduate wearing a mortarboard cap and gown facing away, with another person in profile in the foreground left.",
    body: "Sony Alpha 7 IV",
    lens: "FE 85mm f/1.8",
    exp: "1/250s at f/2.2",
    iso: "ISO 400",
    plateTag: "Plate 01 · Monochrome",
    editionStatus: "10 of 15 Archival Prints Remaining",
  },
  {
    id: "02",
    plateNumber: "Plate 02",
    categoryKey: "portraits",
    shortCategory: "Portrait / Balcony",
    fullCategory: "Lifestyle & Outdoor Portraits",
    shortDate: "Mar 2024",
    fullDate: "March 2024",
    title: "Golden Hour Smile",
    shortDesc:
      "Warm ambient balcony portrait capturing authentic joy and natural light.",
    fullDesc:
      "A candid portrait of a smiling woman leaning gracefully against a stainless steel balcony railing, framed by textured plaster walls and lush green foliage in the background.",
    location: "Nairobi, Kenya",
    imageUrl: "https://images.pixieset.com/646017521/9d0fedecac12b38dc8876b831da110f1-xxlarge.jpg",
    alt: "Young woman with styled dark braids and sunglasses perched on her head smiling over her shoulder on a balcony against a textured wall.",
    body: "Sony Alpha 7 IV",
    lens: "FE 50mm f/1.8",
    exp: "1/400s at f/2.8",
    iso: "ISO 200",
    plateTag: "Plate 02 · Warm Bokeh",
    editionStatus: "12 of 15 Archival Prints Remaining",
  },
  {
    id: "03",
    plateNumber: "Plate 03",
    categoryKey: "portraits",
    shortCategory: "Portrait / Nature",
    fullCategory: "Environmental Portraits",
    shortDate: "May 2024",
    fullDate: "May 2024",
    title: "Embrace of the Earth",
    shortDesc:
      "Intimate natural portrait capturing connection, warmth, and greenery.",
    fullDesc:
      "A playful environmental portrait featuring a young woman warmly hugging a tree trunk in a park setting, framed by soft green foliage and natural daylight.",
    location: "Karura Forest, Nairobi",
    imageUrl: "https://images.pixieset.com/646017521/303ae45879a69655423987c7d00759ed-xxlarge.jpg",
    alt: "Smiling young woman embracing a thick tree trunk in a lush green park setting.",
    body: "Sony Alpha 7 IV",
    lens: "FE 85mm f/1.8",
    exp: "1/320s at f/2.0",
    iso: "ISO 250",
    plateTag: "Plate 03 · Park Life",
    editionStatus: "7 of 15 Archival Prints Remaining",
  },
  {
    id: "04",
    plateNumber: "Plate 04",
    categoryKey: "travel",
    shortCategory: "Waterfall / Leisure",
    fullCategory: "Outdoor & Adventure",
    shortDate: "Jul 2024",
    fullDate: "July 2024",
    title: "Sunlit Cascades",
    shortDesc:
      "Vibrant summer afternoon portrait by natural rocky waters.",
    fullDesc:
      "Bright midday sunlight illuminating a young woman relaxing near a natural river cascade and rocky forest pool surrounded by dense tropical vegetation.",
    location: "Kanunga Falls, Kenya",
    imageUrl: "https://images.pixieset.com/646017521/d3f22d606f37afdeefd87fe395574c4c-xxlarge.jpg",
    alt: "Smiling young woman with water droplets on her skin posing in front of a natural river bank and lush green foliage.",
    body: "Canon EOS R6",
    lens: "RF 35mm f/1.8 IS MACRO STM",
    exp: "1/800s at f/4.0",
    iso: "ISO 100",
    plateTag: "Plate 04 · River Basin",
    editionStatus: "9 of 15 Archival Prints Remaining",
  },
  {
    id: "05",
    plateNumber: "Plate 05",
    categoryKey: "documentary",
    shortCategory: "Culture / Nairobi",
    fullCategory: "Cultural & Vintage Gathering",
    shortDate: "Sep 2024",
    fullDate: "September 2024",
    title: "The Tea Gathering",
    shortDesc:
      "Classic vintage aesthetic documenting community warmth and storytelling.",
    fullDesc:
      "Monochrome group portrait portraying a nostalgic community tea session, featuring traditional flat caps, retro attire, newspaper backdrops, and a classic metal kettle pouring tea.",
    location: "Karen AGC, Nairobi",
    imageUrl: "https://images.pixieset.com/646017521/d950b85c2fd486881f8d89bbd919ac86-xxlarge.jpg",
    alt: "Black and white street photograph of a group of people dressed in retro fashion sharing tea from a large metal kettle.",
    body: "Sony Alpha 7 IV",
    lens: "FE 35mm f/1.4 GM",
    exp: "1/160s at f/2.8",
    iso: "ISO 800",
    plateTag: "Plate 05 · Nostalgia",
    editionStatus: "4 of 15 Archival Prints Remaining",
  },
  {
    id: "06",
    plateNumber: "Plate 06",
    categoryKey: "portraits",
    shortCategory: "Portrait / Creative",
    fullCategory: "Studio & Environmental Headshots",
    shortDate: "Oct 2024",
    fullDate: "October 2024",
    title: "The Modern Creative",
    shortDesc:
      "Clean environmental headshot emphasizing natural expressions and sharp detail.",
    fullDesc:
      "Side-profile headshot of a young man with braided hair and round wire-frame glasses smiling against a cream-and-green natural bokeh background.",
    location: "Nairobi, Kenya",
    imageUrl: "https://images.pixieset.com/646017521/50fbbb0406f06dabb4c4a5a315392d36-xxlarge.jpg",
    alt: "Profile headshot of a man with braided hair and round glasses smiling against a blurred natural green backdrop.",
    body: "Sony Alpha 7 IV",
    lens: "FE 85mm f/1.8",
    exp: "1/500s at f/2.0",
    iso: "ISO 160",
    plateTag: "Plate 06 · Natural Light",
    editionStatus: "14 of 15 Archival Prints Remaining",
  },
  {
    id: "07",
    plateNumber: "Plate 07",
    categoryKey: "portraits",
    shortCategory: "Portrait / Warm Tone",
    fullCategory: "Environmental Headshots",
    shortDate: "Oct 2024",
    fullDate: "October 2024",
    title: "Resonance in Red",
    shortDesc:
      "Rich color contrast portrait highlighting warmth and quiet confidence.",
    fullDesc:
      "Mid-shot of a young woman with copper-accented twist locks wearing a double-breasted black coat over a red garment, set against soft natural greenery.",
    location: "Nairobi, Kenya",
    imageUrl: "https://images.pixieset.com/646017521/5657c17648d5075aa88ba3aa74516033-xxlarge.jpg",
    alt: "Portrait of a woman with braided copper-toned hair wearing a black military-style coat over a red dress.",
    body: "Sony Alpha 7 IV",
    lens: "FE 85mm f/1.8",
    exp: "1/400s at f/2.2",
    iso: "ISO 200",
    plateTag: "Plate 07 · Autumn Tones",
    editionStatus: "6 of 15 Archival Prints Remaining",
  },
  {
    id: "08",
    plateNumber: "Plate 08",
    categoryKey: "architecture",
    shortCategory: "Coastal / Heritage",
    fullCategory: "Architectural & Heritage",
    shortDate: "Aug 2024",
    fullDate: "August 2024",
    title: "Whispers of the Channel",
    shortDesc:
      "Weathered coastal ruins looking over calm harbor waters.",
    fullDesc:
      "Architectural framing of weathered stone arch structures and rusty metal frameworks overlooking a bright blue ocean channel on a clear day.",
    location: "Mombasa Old Town, Kenya",
    imageUrl: "https://images.pixieset.com/646017521/f9be28016e91941509d6271add58d3cb-xxlarge.jpg",
    alt: "Old colonial stone structure ruins with arched rooflines looking out across a blue water channel under a clear sky.",
    body: "Sony Alpha 7 IV",
    lens: "FE 24-70mm f/2.8 GM",
    exp: "1/1000s at f/8.0",
    iso: "ISO 100",
    plateTag: "Plate 08 · Maritime Heritage",
    editionStatus: "11 of 15 Archival Prints Remaining",
  },
  {
    id: "09",
    plateNumber: "Plate 09",
    categoryKey: "architecture",
    shortCategory: "Cityscape / Mombasa",
    fullCategory: "Urban & Skyline Studies",
    shortDate: "Aug 2024",
    fullDate: "August 2024",
    title: "Harbor Skyline",
    shortDesc:
      "Modern coastal high-rises rising above lush tree canopy across open waters.",
    fullDesc:
      "Telephoto landscape capture of modern mid-rise towers overlooking dense green foliage across a quiet blue coastal inlet under a clear sky.",
    location: "Kilindini Harbor, Mombasa",
    imageUrl: "https://images.pixieset.com/646017521/1e8cd454b3ee246075bf2074352faaa0-xxlarge.jpg",
    alt: "View across open blue water towards high-rise city buildings nestled behind a dense tree line under a clear blue sky.",
    body: "Sony Alpha 7 IV",
    lens: "FE 70-200mm f/4 G",
    exp: "1/800s at f/7.1",
    iso: "ISO 100",
    plateTag: "Plate 09 · Coastal Horizon",
    editionStatus: "13 of 15 Archival Prints Remaining",
  },
  {
    id: "10",
    plateNumber: "Plate 10",
    categoryKey: "travel",
    shortCategory: "Street / Mombasa",
    fullCategory: "Street & Transit Life",
    shortDate: "Aug 2024",
    fullDate: "August 2024",
    title: "The Pulse of Digo Road",
    shortDesc:
      "Vibrant street-level view of tuk-tuks, matatus, and coastal transit.",
    fullDesc:
      "High-angle framed perspective of busy urban traffic in Mombasa, showcasing yellow and green tuk-tuks, matatus, and colorful storefronts through a shaded window aperture.",
    location: "Digo Road, Mombasa",
    imageUrl: "https://images.pixieset.com/646017521/bcf00eb828bba3ece7017405e62fad9f-xxlarge.jpg",
    alt: "High-angle urban street photograph looking down at yellow tuk-tuks, white matatus, and street traffic through a vertical barred window.",
    body: "Sony Alpha 7 IV",
    lens: "FE 50mm f/1.4 GM",
    exp: "1/640s at f/5.6",
    iso: "ISO 100",
    plateTag: "Plate 10 · Urban Rhythm",
    editionStatus: "3 of 15 Archival Prints Remaining",
  },
];
