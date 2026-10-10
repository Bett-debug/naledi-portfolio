export interface PlateItem {
  id: string;
  plateNumber: string;
  categoryKey: 'concerts' | 'studio' | 'travel' | 'adventure' | 'events';
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
    id: 'hero-01',
    plateId: '01',
    badge: 'Flora & Field · Plate 01 · Live Sound',
    location: 'Nairobi Stadium',
    gear: 'Leica SL2-S · 35mm f/1.4 Summilux',
    title: 'Sonic Resonance: 45,000 Voices Under Halogen Beam',
    desc: 'Captured unscripted during the climactic chorus of the East African Sol Fest finale under golden rim lighting and volcanic dust haze.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDQVCIkf5WlIWVK7FTaJqdtpGC2GIsglOrdZwJzpHFXbTVGgK_WP-_YmpmcWOQ0Z08jbI2Rev--jz9xE7gzR0ZYy3Qvhv_kwzb9NATl1qj2PN3H9LK8jhCfY2YraSsnzXYjEKsD-ZyJ80nRi9AkhMqK1XmHTjS9EpJccf3lzpJxcR-xREugra2IxfRkJNvn8xh-jmuUhAihAyFpbYEFGaniM1PADaZ5BBYTt2YDjYiDmlgvtAYpsfVXfA',
    alt: 'Dramatic high contrast concert photograph taken with a Leica SL2-S 35mm lens in Nairobi Arena. An electrifying front-stage singer bathed in golden amber spotlights and deep emerald stage fog, hands raised toward an ocean of silhouetted festival audience hands with subtle atmospheric mist and dramatic rim lighting.',
  },
  secondaryTop: {
    id: 'hero-02',
    plateId: '02',
    badge: 'Plate 02 · Studio Chronicle',
    title: 'Frequencies at Midnight: The Acoustic Sessions',
    gear: 'Hasselblad X2D 100C · 55mm · Karen Audio Lab',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDGvkcohROWTmIJEHgPC16Apw9-9hIlwHZvsSI5cFvOOYXnIPAOvYSPAwUZxgdTaXBAYZKHSQxfdR0CGsxmBQ1Q3so_TY8XbZJ7idrNar886Uu_BH2EaU1OX80V5CP7tuZCkyCxymItVICZkkiTKK8ZBSAaSfkd556qT2Za8BbRFaNYg0NL_6t8YHH5euPdVqP6v4l3xKowlR0JDizibHcHuVQWpFzFAk-hhKHfV2TPW7zxTRUe09poew',
    alt: 'Intimate editorial documentary shot of an acoustic soul singer and producer working over an analog Neve mixing desk in a Karen Nairobi recording studio. Moody deep forest green shadow tones, warm Edison bulb filaments glowing over vintage vinyl records and tube microphones, subtle analog tape reels in soft background focus.',
  },
  secondaryBottom: {
    id: 'hero-03',
    plateId: '03',
    badge: 'Plate 03 · Motorsport Expeditions',
    title: 'Volcanic Dust Trail: Red Bull Hard Enduro',
    gear: 'Sony A1 · 70-200mm · 1/2500s Rift Escarpment',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBW_Y97pj5wnD9GdEUECtlDK7T978lK9IEOfdvP25EvU_wg2sELixznjLNFLzWiyQ9_TStJyF4ZXUdJ0M0QQxofEALEbXAyiSP_M1Qzj0Nkeq7N_w1nwbZlAg4m7QjVp8jisFFWR23uBzmMjs2t7V5n6m07kunnboskEXhZEdCYpFvb5SWXOyVHJzXj1g1lh1kGh-YMRPND3jq4_yERpCXZLFRR502yJSu_df89npbZgXuTzG7qD65AoQ',
    alt: 'Dynamic action photograph of an off-road enduro motorcycle rider drifting through red volcanic dust switchbacks in the Great Rift Valley Kenya at sunset. Spectacular backlight creating long amber shadows and illuminated roost dirt plumes, rugged acacia trees and rocky ridgelines under dramatic stormy equatorial skies.',
  },
};

export const PORTRAIT_IMAGE = {
  url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsFlpP9KYTXDYJSVqAdiOvj9aNrGl87NvjRf3ud6E74p9BO6_oX35XO2S_MBLmTAAZuc5NBNdJDG3GHcYH22FE2wk6_yAoZzs8MvOC0YAyrSvvV-_mbGPSXBN3-FHHcay_cp0n54GH-9QdIY0GOjNgxnkKEe3fhyfZ-xl57p8EfGzR6TNYe4tQBOmD2mwrIR67lif3yx6CADRd60istAjihJKK5SALrJ8xi31d_PK93h6IXqfJY-cEvQ',
  alt: 'Monochrome portrait of documentary photographer Samuel Kiplangat holding a Leica rangefinder camera over his shoulder in Karen Nairobi, wearing a rugged dark field jacket, intense thoughtful gaze, textured natural paper look.',
};

export const DEFAULT_LIGHTBOX_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC8Kb9WX24_meOXoMfNdR_pyfkd0ZWFRZh8H66jLDak5saBs3IV0CnJcJINO39ef_ju1VNaKwlR37LGDJlMI3bzsT9rixRp6mS5PdJzOoRN__pfMo-ebnslxiiLrxNuggChSTXgRxHVmbsVbvaGJRWDxbHWlxECeD7bEXSSdLeevUIlw60EpcH5homU-5xBF7CBZZS3Ee37pe1B7H5AuhKtbuu8G69ULeoIe4XvmvITxofcOFfbpk9-mA';

export const FOLIO_PLATES: PlateItem[] = [
  {
    id: '01',
    plateNumber: 'Plate 01',
    categoryKey: 'concerts',
    shortCategory: 'Live / Nairobi',
    fullCategory: 'Concert & Live Arena',
    shortDate: 'Oct 2024',
    fullDate: 'October 2024',
    title: 'The Mid-Air Crescendo',
    shortDesc:
      'Electrifying moment of stage suspension before 30,000 festivalgoers under warm tungsten pyrotechnics.',
    fullDesc:
      'Captured unscripted during the climactic finale chorus. The camera operator moved along the sub-bass monitor trench, waiting for the instantaneous pyrotechnic blast that carved gold rim illumination against the artist’s silhouette.',
    location: 'Nairobi Arena, Kenya · 45,000 Attendance',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsBhlcrubE19v1uqMVJ_TE2OmiLgCnGjb0Utz9X6DeI100fynjhI-EHFNrReOBoJw_6lztZQutm32-SWIeimCTkggbvlWUUiPKIySfdY0zdmcDonOng9iTR2VqyHhhabOfdjkhYAMA-Z8mkOWkWK-YnE-Cla62VTFesd3MJKoDsmiQpCM53sSlA_yyKSxOZfs6xcwVXP4cbWTa7qF8Z2WD7_lWpkWFxaaSoyN49-y2DJGnapKkUUBmsg',
    alt: 'High energy live stadium photograph of an Afrobeats singer leaping mid-air on stage bathed in amber laser beams and golden confetti at Carnivore Grounds Nairobi, intense facial expression, sharp silhouettes of fans holding hands up against glowing stage lights.',
    body: 'Leica SL2-S Mirrorless',
    lens: 'Leica 35mm f/1.4 Summilux',
    exp: '1/800s at f/1.6',
    iso: 'ISO 3200',
    plateTag: 'Plate 01 · Full Aperture',
    editionStatus: '3 of 15 Archival Prints Remaining',
  },
  {
    id: '02',
    plateNumber: 'Plate 02',
    categoryKey: 'studio',
    shortCategory: 'Studio / Westlands',
    fullCategory: 'Studio & Audio Sessions',
    shortDate: 'Aug 2024',
    fullDate: 'August 2024',
    title: 'The Cello & The Ribbon Mic',
    shortDesc:
      'Documenting the delicate tactile resonance of string arrangements during late-night scoring sessions.',
    fullDesc:
      'Documenting the tactile, visceral resonance of cello wood during late night orchestral scoring. Ambient halogen spotlights warmed the mahogany grain while a ribbon microphone absorbed the low registers.',
    location: 'Westlands Acoustic Lab, Nairobi',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA4NZ46aXwuDeP3Cq-KB9atQxk9auKDFYy3J6doSwsstgh9Fr6QBBw4DD60_w-aa9rWH4fMlL0EY3Frvqg61d2dStgyZ5SrNXpR2An1swHE-Oxb0p5rhHVvuegegW1CGijFhHYcmLRD9tqSHB4GYuomFysC_6s4bx0sJCHZf-it5UMtVmH9TSZhEmXi9FCALHYSuV-MK8u7KqOJ3AYuNXm5Sc5INb8Z4KojKCRlhLl5iKOccT3twhJb8g',
    alt: 'Close up moody portrait of a cellist in an analog sound recording studio in Westlands Nairobi, warm amber rim lighting catching the wood grain of the cello, microphone boom suspension, acoustic wooden diffuser panels in gentle out-of-focus background.',
    body: 'Hasselblad X2D 100C',
    lens: 'XCD 90mm f/2.5 V',
    exp: '1/125s at f/2.8',
    iso: 'ISO 400',
    plateTag: 'Plate 02 · 100MP Detail',
    editionStatus: '5 of 15 Archival Prints Remaining',
  },
  {
    id: '03',
    plateNumber: 'Plate 03',
    categoryKey: 'adventure',
    shortCategory: 'Rally / Lake Magadi',
    fullCategory: 'Bikes & Motorsport',
    shortDate: 'Jul 2024',
    fullDate: 'July 2024',
    title: 'Salt Plains & High RPM',
    shortDesc:
      'High-speed tracking shot captured from a chase vehicle cruising at 110km/h over cracked alkaline beds.',
    fullDesc:
      'High speed tracking shot capturing the sheer velocity of an enduro rally rider tearing across glistening white alkaline flats under scorching mid-afternoon heat.',
    location: 'Lake Magadi Basin, Rift Valley',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCm6AF8HxpLrEjk-gi4cIFCWfSZLU4dGdt_ReunxZ9ndZTjMgYPPdleHKTcIKeS-QXnuOOrl7m3wxBEvUpHLqMtw94VbuF9RgvGQ4Oc0rG_o9ccinaeBTdQvxEVlI5r5hrQgGi7pb8gbZRzN702fd7ROWDPveDc5r-p3LTa5ktq1ZGnuCtGH4hCJVktEM31-FLSTgdWi_KalpXOlcC-4usLkw40_ZAPj1aJYn_hbxA0jpOZ0vN46T5ltg',
    alt: 'Rugged adventure rally motorcycle kicking up thick volcanic clay dirt at high velocity on the crest of Lake Magadi Kenya, harsh equatorial sunlight reflecting off the salt flats, rider wearing matte rally helmet and high-contrast Dakar livery.',
    body: 'Sony Alpha 1',
    lens: 'FE 24-70mm f/2.8 GM II',
    exp: '1/4000s at f/4.0',
    iso: 'ISO 250',
    plateTag: 'Plate 03 · Dakar Velocity',
    editionStatus: '2 of 15 Archival Prints Remaining',
  },
  {
    id: '04',
    plateNumber: 'Plate 04',
    categoryKey: 'travel',
    shortCategory: 'Rail / Highlands',
    fullCategory: 'Rail & Overland Travel',
    shortDate: 'Jun 2024',
    fullDate: 'June 2024',
    title: 'The Highland Sleeper',
    shortDesc:
      'Historic narrow-gauge lines winding through dew-laden mountain passes and tea terraces at dawn.',
    fullDesc:
      'A solitary morning passenger looks out onto rolling morning fog and tea plantations as the vintage passenger coach curves through the western highlands.',
    location: 'Kericho Tea Corridor, Great Rift',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ7PgPHGx8IiKfB3WooCy5dHLewwN7o_yiMt_plAQDhU8VnM3yq142lrAQTo-jKu0MrEea_Uua3GMI-jDDd_cxk3TwjbEVy9zOuglRt-HGKYbAuAZiOMQim4wDndHFKuVb-p3HMMEWfc-5bK0xwD9WelV7sbwGtXG20LARDbtvJEUmgCRN78w1iE-oSNxgakvwT0bi0nUoFbNmGCFY4y9miAgg7XuH-SW7eQ9uS6i6kiWzfpFiebdyNw',
    alt: 'Cinematic passenger train carriage window view traversing the mist covered tea plantations of Kericho and the Great Rift highlands of Kenya at dawn. Warm incandescent reading lamp inside wooden coach contrasting against deep emerald green hills and rolling morning fog outside.',
    body: 'Leica SL2-S',
    lens: 'Leica 50mm f/1.4 Summilux',
    exp: '1/250s at f/1.4',
    iso: 'ISO 800',
    plateTag: 'Plate 04 · Trans-Africa',
    editionStatus: '4 of 15 Archival Prints Remaining',
  },
  {
    id: '05',
    plateNumber: 'Plate 05',
    categoryKey: 'events',
    shortCategory: 'Gala / Nairobi',
    fullCategory: 'VIP & Corporate Galas',
    shortDate: 'May 2024',
    fullDate: 'May 2024',
    title: 'The Equator Ball',
    shortDesc:
      'Unobtrusive VIP reportage covering diplomatic leaders and contemporary artists during an art auction.',
    fullDesc:
      'Candid, unobtrusive VIP reportage documenting diplomatic dignitaries and cultural visionaries celebrating the inauguration of the Contemporary African Arts Endowment.',
    location: 'Villa Rosa Kempinski, Nairobi',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBAyPAE-pmvKRjRlej14_kIsyan8ItfYuwyXk6Mfo1JSqXEK4UKtcY28xEwdjiFyvA2CM6Dd2GRwr8oWH-04gOP4WUExhjk6jww3_cmOusF4NwPXyYNJQEGzVnTRRCJvMuhECaiUNyt1H7kZ5zAgUhKsyya3fah3h8VlQTqv0ALhO3XDHzdSY0mCLJBnh1hmCSjCPoLeGK7ickdUCI0Q2A1vhe-v02b1055Msu05mhN16U-nFx0yC18gw',
    alt: 'High-fashion black tie gala banquet at Villa Rosa Kempinski Nairobi with ambient crystal chandeliers, elegant guests in bespoke tailored tuxedos and African couture evening gowns laughing candidly over crystal champagne flutes, soft cinematic depth of field.',
    body: 'Sony Alpha 1',
    lens: 'FE 50mm f/1.2 GM',
    exp: '1/320s at f/1.4',
    iso: 'ISO 1600',
    plateTag: 'Plate 05 · Gala Soiree',
    editionStatus: '6 of 15 Archival Prints Remaining',
  },
  {
    id: '06',
    plateNumber: 'Plate 06',
    categoryKey: 'concerts',
    shortCategory: 'Live / Backstage',
    fullCategory: 'Live & Backstage',
    shortDate: 'Sep 2024',
    fullDate: 'September 2024',
    title: '60 Seconds to Showtime',
    shortDesc:
      'Quiet meditation before the surge. Natural backlight filtering through the corridor velour drapery.',
    fullDesc:
      'The quiet meditation before sonic chaos. Silhouette of an electric guitarist clutching his sunburst instrument as festival stage smoke leaks past the velvet doorway.',
    location: 'Carnivore Festival Green Room, Nairobi',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJImIs-ERNuFirTFzg-sCh-01rReZGIwFuwjIIvayvbXX2Lh9UtbmqJZxMc3JBH32uBoDgN8UeQW6iXWEuX_KviadczPUD80HgyDEOc61HfOhrN5V0YSqDZeuCnneKcS89VxbjtbLzjrQ0189D9zgc9acD5Dhj7RWJdBx3X5B5pO8ZlfU97-dGfWYPx5GN2RMFGBpgMmcVFBGT4jXMTbnqsh2ItgEX_ZHR12CEkwh30-16oGp2IYUG9Q',
    alt: 'Intimate monochrome backstage portrait of a lead guitarist moments before walking onto a 50,000 capacity festival stage, clutching a sunburst Fender Stratocaster in a dim green room corridor, dramatic silhouette with light bleeding through heavy stage curtains.',
    body: 'Leica SL2-S',
    lens: 'Leica 28mm f/2.8 Elmarit',
    exp: '1/160s at f/2.8',
    iso: 'ISO 2000',
    plateTag: 'Plate 06 · Green Room',
    editionStatus: '1 of 15 Archival Prints Remaining',
  },
  {
    id: '07',
    plateNumber: 'Plate 07',
    categoryKey: 'studio',
    shortCategory: 'Studio / Mastering',
    fullCategory: 'Studio & Audio Sessions',
    shortDate: 'Apr 2024',
    fullDate: 'April 2024',
    title: 'The Lacquer Cut',
    shortDesc:
      'Analog mastering processes captured on medium format for a limited vinyl pressing edition.',
    fullDesc:
      'Capturing the luminous spiral grooves of a master acetate record under warm microscope inspection lamps before international pressing.',
    location: 'Karen Sound Archive Darkroom',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDrJOqUoku_JSYhM-BW-Rdq8L8PWRMYGDRXFj01AU-eCTxuq3_oo5B0nL_sWuHKzriDfLodbclW0WQFy-JcXh55qGte042xE8qoSK-3tS3rD_D-xZCEGWaWO3ZGnP9sGjj6YPs59Pr-25HLLTL8KEaV2Izxjnv544f5BpQdXrNiu4ZIzxaFcj7KMaiyNMC8XGOUpSoXvfodvtRUCT8AQDk7AV4o_UlnAOaJXQREg3_1MhUItUE5Agm42w',
    alt: 'Editorial still life photograph inside an audio mastering house, vintage lacquer acetate test pressing on a turntable with glowing vacuum tubes in background, analog VU meters bouncing in deep green studio shadow.',
    body: 'Hasselblad X2D 100C',
    lens: 'XCD 55mm f/2.5 V',
    exp: '1/60s at f/4.0',
    iso: 'ISO 200',
    plateTag: 'Plate 07 · Analog Lacquer',
    editionStatus: '7 of 15 Archival Prints Remaining',
  },
  {
    id: '08',
    plateNumber: 'Plate 08',
    categoryKey: 'adventure',
    shortCategory: 'Rally / Aberdares',
    fullCategory: 'Bikes & Motorsport',
    shortDate: 'Mar 2024',
    fullDate: 'March 2024',
    title: 'Cloudline Transverse',
    shortDesc:
      'Navigating high-altitude single tracks at 3,200 meters above sea level in sub-zero alpine conditions.',
    fullDesc:
      'High alpine rally crossing across jagged basalt ridges. Below lies a sea of white cumulus clouds stretching toward Mount Kenya.',
    location: 'Aberdare Elevation 3,200M',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBKf3GcVnyk4GP6PReeX3WHjrUQ4xIwq5twLuoCM4p5w6YAu43lvP2LUhuJNv2aMmxaTA2lrniUAue5rs1gLIeEi-OMGl-4H4Oe_deafnEY7Tqo8nqR91wjXPqilR17siznsjWxBD-HVGevAUbGt_umr7IrWYKRhjBmchWa77VNHlQeLxodmyq3ptxzXGLGNiqKfckGa9dgHyM7tDrc0WHUoHhbn1Jmx7hEdJOKz43Ig0RctjGoweN6UQ',
    alt: 'Breathtaking mountain ridge trail where two KTM adventure motorbikes navigate a razor thin rocky crest overlooking the vast Aberdare mountain range in Kenya, morning fog lingering in valleys below, dramatic golden sunbeams piercing the cloud deck.',
    body: 'Sony Alpha 1',
    lens: 'FE 16-35mm f/2.8 GM',
    exp: '1/2000s at f/5.6',
    iso: 'ISO 320',
    plateTag: 'Plate 08 · Alpine Crest',
    editionStatus: '4 of 15 Archival Prints Remaining',
  },
  {
    id: '09',
    plateNumber: 'Plate 09',
    categoryKey: 'travel',
    shortCategory: 'Rail / Eldoret',
    fullCategory: 'Rail & Overland Travel',
    shortDate: 'Feb 2024',
    fullDate: 'February 2024',
    title: 'The Twilight Departure',
    shortDesc:
      'Historic iron arteries connecting the Kenyan coast to the Great Lakes basin under twilight.',
    fullDesc:
      'The timeless rhythm of railway travel. A station master examines his brass timepiece as the blue hour envelopes the platform steam.',
    location: 'Eldoret Historic Terminus',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAXR2JyyGjFcWkGu2gLQTtjtbn0wSZdkHlJHaElukfLXC7SSjoCC8sJQhByEkl4a_yP_rX9T4drKZ6fn2YaS5Ot6eHbMxGhgc6IicpWkKRQXloggiyJx7d2wUiF4eB5wgD4CwVZz9Whd0NwdqQ3U9JIEd5XCPnf6-vh51xvjtmo7G3K1ZTyd8sZl02j1SJtYdPpyPMPO4fqqBOOZe8SHo_O6s1kXEjxva4sbYRQ4yR6IRl3XfokPwd6kg',
    alt: 'Atmospheric steam train conductor checking a vintage brass pocket watch on an old colonial stone station platform in Eldoret at dusk, warm lamp glow against damp cobblestones, distant passenger coaches bathed in blue twilight.',
    body: 'Leica SL2-S',
    lens: 'Leica 50mm f/1.4 Summilux',
    exp: '1/125s at f/1.8',
    iso: 'ISO 1250',
    plateTag: 'Plate 09 · Blue Hour',
    editionStatus: '5 of 15 Archival Prints Remaining',
  },
  {
    id: '10',
    plateNumber: 'Plate 10',
    categoryKey: 'events',
    shortCategory: 'Summit / Gigiri',
    fullCategory: 'VIP & Corporate Galas',
    shortDate: 'Jan 2024',
    fullDate: 'January 2024',
    title: 'Architecture of Vision',
    shortDesc:
      'Keynote documentation combining geometric clean lines with human candor for international summits.',
    fullDesc:
      'Minimalist keynote frame contrasting geometric structural lines against high-level diplomatic dialogue on African climate innovation.',
    location: 'United Nations Complex Gigiri',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAIwDfTLpOL0ALyERGpTj1rMyQXOOhuf4ZZAfVtAhg1_Fe4Tv4fKNAEyeAh7l7xi7q3TUoMHOBf7TeeVxMNLMXyFP72vVrqAco1KnlC-ueTHzx4mxqYrEIyg7SqwpY3Mejr8-VioWdQJh2X4ZOYlP12hPD221uL7GXQwUK_RF0hy75nztuetOUjFucOu86GHhN9DKB7SiT597wocnH9GxaYvJvYSpzqDhI-DTw1GW_8TlEju3KgrQYfnQ',
    alt: 'High-end architectural conference and keynote panel with dramatic stage LED lighting and silhouetted tech executives delivering a keynote speech at the UN Complex Gigiri Nairobi, minimal geometric compositions and crisp foreground bokeh.',
    body: 'Sony Alpha 1',
    lens: 'FE 70-200mm f/2.8 GM II',
    exp: '1/500s at f/3.2',
    iso: 'ISO 1000',
    plateTag: 'Plate 10 · UN Keynote',
    editionStatus: '8 of 15 Archival Prints Remaining',
  },
  {
    id: '11',
    plateNumber: 'Plate 11',
    categoryKey: 'concerts',
    shortCategory: 'Live / Kilifi Coast',
    fullCategory: 'Concert & Live Arena',
    shortDate: 'Dec 2023',
    fullDate: 'December 2023',
    title: 'Constellation of Kilifi',
    shortDesc:
      'Electronic music festival set within a sacred grove of ancient baobabs under equatorial stars.',
    fullDesc:
      'Ten thousand festivalgoers illuminating the ancient coastal tree canopy with held phones as dawn approaches over the Indian Ocean.',
    location: 'Beneath the Baobabs, Kilifi Coast',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxSWrvhP-FkZtEg95tsOAQ9IvNhWaldV0xGwhYQ_SBRNhpIVXlOOjcN6Shc1Ha_PMRlpqBd0IY1EC5jZxpKPwgpzqlDV91V1DbrTuRbFRr7hBmeSk4yGcWXlduv3zvhgV1quytZKRzqhf6hnNXc24-_hl9t_KvUP8wXh2ptDcRiI4vXmPrV3U2M4m9qCCoDl3WKDo4KISKpit8JFmZnTDKkHiXum40IEop-3qzV-fnMJyT0dczJ6aHMw',
    alt: 'Sea of mobile phone flashlights glowing in an outdoor night music amphitheater in Kilifi Kenya, silhouette of coastal baobab trees against the star-filled sky, singer on stage surrounded by warm halo glow.',
    body: 'Leica SL2-S',
    lens: 'Leica 24mm f/1.4 Summilux',
    exp: '1/60s at f/1.4',
    iso: 'ISO 6400',
    plateTag: 'Plate 11 · Baobab Night',
    editionStatus: '2 of 15 Archival Prints Remaining',
  },
  {
    id: '12',
    plateNumber: 'Plate 12',
    categoryKey: 'studio',
    shortCategory: 'Studio / Botanical Couture',
    fullCategory: 'Studio & Botanical Couture',
    shortDate: 'Nov 2023',
    fullDate: 'November 2023',
    title: 'The Forest Robes',
    shortDesc:
      'Created for the Pan-African Fashion Monograph; hand-dyed silks illuminated via single parabolic reflector.',
    fullDesc:
      'Sculptural drapery and natural silk textures highlighted against velvety forest green seamless paper, capturing the synthesis of fashion and botanical pigments.',
    location: 'Pan-African Fashion Atelier, Nairobi',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDgXBEh5XHkC4qC1-beziyPUsztBdp82JcrER62NFHuwnig_sgeyh1Ffo5X6tV_pHoJZ8SbuHaK-2e_N8jVlCjEJ3ECpeMaGu2WeS6N0HNSJSgHKWIkegXofoIWpQHNRXLDqoss3fgGSjGO0-SvB9Ialglu-D9yn6Tu8ERo020aCPxJ2VScGhdhaEwI1gVmlmHKcTeZbZHK10MMGp7wULeg93zHskyCJnoVlJkZ7pklaSkgsjQosgzDWA',
    alt: 'High-fashion studio portrait of a Kenyan model draped in structured botanical green and gold silk garments, sculptured lighting carving cheekbones against dark forest-green seamless backdrop, exquisite editorial poise and subtle rim lighting.',
    body: 'Hasselblad X2D 100C',
    lens: 'XCD 90mm f/2.5 V',
    exp: '1/125s at f/5.6',
    iso: 'ISO 100',
    plateTag: 'Plate 12 · Atelier Silk',
    editionStatus: '1 of 15 Archival Prints Remaining',
  },
];

export const MASTHEAD_COMMISSIONS = [
  {
    name: 'Vogue Africa',
    issue: 'Vol. IX · Botanical Couture Cover Essay',
    year: '2024',
    summary: '16-page medium-format monograph photographed in Karen and Lake Magadi with indigenous silk artisans.',
  },
  {
    name: 'Rolling Stone',
    issue: 'East African Sonic Renaissance Feature',
    year: '2024',
    summary: 'Arena & analog studio reportage documenting Nairobi’s contemporary live instrumentation movement.',
  },
  {
    name: 'NatGeo Wild',
    issue: 'Equatorial Rift & Montane Flora',
    year: '2023',
    summary: 'High-altitude botanical documentation at 3,200m across the Aberdare moorlands and volcanic calderas.',
  },
  {
    name: 'Red Bull Rift',
    issue: 'Hard Enduro Escarpment Expedition',
    year: '2024',
    summary: 'Autonomous solar-powered field capture tracking extreme off-road telemetry across volcanic dust basins.',
  },
];
