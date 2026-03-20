import type { FeaturedProjectStory, PortfolioItem, ProjectCaseStudy } from '@/types';

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'kitchen-remodel',
    eyebrow: 'Featured project story',
    title: 'Kitchen Remodel',
    location: 'Langhorne, PA',
    serviceId: 'remodeling',
    image: '/images/Projects/710 Parker St. Langhorne, Pa/kitchen-island-wide.jpg',
    imageAlt: 'Complete kitchen remodel with custom island and cabinetry in Langhorne, PA',
    scope: 'Full kitchen remodel',
    homeownerGoal:
      'Open up the main floor for easier cooking, seating, and everyday family traffic.',
    homeownerNeed:
      'The family wanted a kitchen that felt more open, handled daily movement better, and created seating and prep space that actually worked for regular use.',
    outcome: 'Opened up daily flow for cooking, seating, and family gathering.',
    summary:
      'A full kitchen refresh with custom cabinetry, expanded prep space, and a more welcoming layout for everyday use.',
    projectStory:
      'This remodel focused on making the kitchen work harder for real daily life, with better circulation, more prep room, and a finished look that feels natural to the home.',
    scottApproach:
      'The remodel centered on custom cabinetry, a larger island, and a layout that made cooking, gathering, and day-to-day movement feel easier without making the room feel disconnected from the rest of the home.',
    result:
      'The finished kitchen gave the homeowners a cleaner workflow, more seating utility, and a space that feels designed for both family life and entertaining.',
    projectHighlights: [
      'Custom cabinetry',
      'Expanded island workspace',
      'Better family flow',
    ],
    outcomePoints: [
      'Custom cabinetry for more organized daily storage',
      'Expanded island for prep, seating, and better traffic flow',
      'A finished look that feels natural to the home instead of overdone',
    ],
    tags: ['Better layout', 'Custom finishes', 'Family-friendly'],
    isTall: true,
    images: [
      {
        src: '/images/Projects/710 Parker St. Langhorne, Pa/kitchen-island-wide.jpg',
        alt: 'Wide view of the completed Langhorne kitchen remodel with island and cabinetry',
        caption: 'Finished layout with clearer circulation and a stronger family gathering zone',
      },
      {
        src: '/images/Projects/710 Parker St. Langhorne, Pa/kitchen-island-seating.jpg',
        alt: 'Kitchen island seating area in the Langhorne remodel',
        caption: 'Seating and island placement designed to support everyday use, not just looks',
      },
      {
        src: '/images/Projects/710 Parker St. Langhorne, Pa/kitchen-floor-detail.jpg',
        alt: 'Kitchen floor and finish detail from the Langhorne remodel',
        caption:
          'Finish details that help the project feel complete up close as well as from across the room',
      },
    ],
  },
  {
    id: 'bathroom-renovation',
    eyebrow: 'Project case study',
    title: 'Bathroom Renovation',
    location: 'Langhorne, PA',
    serviceId: 'remodeling',
    image: '/images/Projects/710 Parker St. Langhorne, Pa/bathroom-full-room.jpg',
    imageAlt: 'Full bathroom renovation with custom vanity and tile work in Langhorne, PA',
    scope: 'Bathroom renovation',
    homeownerGoal:
      'Replace an outdated bathroom with something cleaner, brighter, and easier to use every day.',
    homeownerNeed:
      'The homeowners wanted the room to feel less dated, easier to maintain, and more comfortable as part of the daily routine.',
    outcome: 'Turned an outdated bath into a cleaner, more comfortable daily routine space.',
    summary:
      'Updated finishes, better storage, and durable materials helped this bathroom feel brighter and easier to maintain.',
    projectStory:
      'The finished room improves comfort without overcomplicating the design, giving the homeowners a space that feels refreshed, durable, and easier to keep up.',
    scottApproach:
      'The renovation balanced brighter finishes with practical material choices and storage improvements so the room would feel better immediately and stay easier to live with over time.',
    result:
      'The homeowners ended up with a bathroom that feels lighter, more current, and more dependable for everyday use.',
    projectHighlights: [
      'Brighter finish palette',
      'Improved storage',
      'Durable everyday materials',
    ],
    outcomePoints: [
      'A brighter visual finish without making the room feel sterile',
      'Storage upgrades that reduce daily clutter',
      'Durable material choices that are easier to maintain',
    ],
    tags: ['Updated finishes', 'More comfort', 'Easy upkeep'],
    images: [
      {
        src: '/images/Projects/710 Parker St. Langhorne, Pa/bathroom-full-room.jpg',
        alt: 'Full bathroom renovation with custom vanity and tile work in Langhorne, PA',
        caption: 'An updated bathroom with cleaner finishes, better storage, and brighter daily use',
      },
    ],
  },
  {
    id: 'custom-staircase',
    eyebrow: 'Project case study',
    title: 'Custom Staircase & Entry',
    location: 'Langhorne, PA',
    serviceId: 'contracting',
    image: '/images/Projects/710 Parker St. Langhorne, Pa/staircase-newel-entry.jpg',
    imageAlt: 'Custom oak staircase with turned newel post and marble entry floor',
    scope: 'Entry and staircase upgrade',
    homeownerGoal:
      'Make the front entry feel more finished and create a stronger first impression.',
    homeownerNeed:
      'The home needed a more intentional arrival experience, with entry details that felt equal to the rest of the space.',
    outcome: 'Created a stronger first impression the moment guests walk through the door.',
    summary:
      'Custom trim, woodwork, and entry details elevated the home character while tying the space together.',
    projectStory:
      'Architectural details and finish carpentry gave this entry more presence and helped connect the surrounding spaces with a more intentional look.',
    scottApproach:
      'The work focused on custom wood details, entry finishes, and visual continuity so the staircase and entry would feel built in rather than added as separate upgrades.',
    result:
      'The finished entry delivers more character, a cleaner sense of arrival, and a stronger visual link between the doorway and the surrounding rooms.',
    projectHighlights: [
      'Custom oak staircase detail',
      'Refined entry finishes',
      'Stronger curb-to-interior impression',
    ],
    outcomePoints: [
      'An entry sequence that feels more intentional from the first step inside',
      'Custom stair detailing that adds craftsmanship and permanence',
      'A stronger connection between architectural details and everyday use',
    ],
    tags: ['Curb appeal', 'Custom millwork', 'Refined entry'],
    images: [
      {
        src: '/images/Projects/710 Parker St. Langhorne, Pa/staircase-newel-entry.jpg',
        alt: 'Custom oak staircase with turned newel post and marble entry floor',
        caption: 'An upgraded entry with custom details that sharpen the first impression',
      },
    ],
  },
  {
    id: 'fireplace-trim',
    eyebrow: 'Project case study',
    title: 'Fireplace & Trim Work',
    location: 'Langhorne, PA',
    serviceId: 'remodeling',
    image: '/images/Projects/710 Parker St. Langhorne, Pa/fireplace-mantel.jpg',
    imageAlt: 'Custom fireplace mantel with crown molding and brick surround',
    scope: 'Living room focal-point upgrade',
    homeownerGoal: 'Give the main gathering space a warmer, more built-in look.',
    homeownerNeed:
      'The living room needed a focal point that felt finished enough to carry the space without overpowering how the family actually uses it.',
    outcome: 'Gave the living space a true focal point with warmer, more finished detail.',
    summary:
      'A custom mantel and trim package brought visual weight and polish to the main gathering room.',
    projectStory:
      'Finish carpentry and mantel detailing helped the room feel more complete, making the fireplace read like a designed centerpiece instead of an unfinished surround.',
    scottApproach:
      'The trim and mantel work was handled as part of the room story, not just as a surface add-on, so the fireplace could anchor the space naturally.',
    result:
      'The living room now feels warmer, more composed, and more visually complete for everyday gathering.',
    projectHighlights: [
      'Custom mantel build',
      'Trim integration',
      'More polished gathering space',
    ],
    outcomePoints: [
      'A fireplace wall that feels designed instead of unfinished',
      'Trim details that tie the room together more cleanly',
      'A warmer focal point for the main living area',
    ],
    tags: ['Living room focal point', 'Finish carpentry', 'Custom detail'],
    images: [
      {
        src: '/images/Projects/710 Parker St. Langhorne, Pa/fireplace-mantel.jpg',
        alt: 'Custom fireplace mantel with crown molding and brick surround',
        caption: 'Custom mantel and trim work that give the main gathering space more presence',
      },
    ],
  },
  {
    id: 'tray-ceiling',
    eyebrow: 'Project case study',
    title: 'Tray Ceiling & Crown Molding',
    location: 'Langhorne, PA',
    serviceId: 'remodeling',
    image: '/images/Projects/710 Parker St. Langhorne, Pa/bedroom-tray-ceiling.jpg',
    imageAlt: 'Master bedroom with custom tray ceiling and crown molding detail',
    scope: 'Primary bedroom detail upgrade',
    homeownerGoal: 'Make the bedroom feel more custom, restful, and complete.',
    homeownerNeed:
      'The room needed more character and finish detail so it would feel calmer, more polished, and more intentional as a primary suite.',
    outcome: 'Made the primary bedroom feel more custom, finished, and restful.',
    summary:
      'Architectural ceiling detail and crown molding added depth, character, and a more upscale feel.',
    projectStory:
      'Small architectural details changed the feel of the room in a big way, giving the primary suite more depth and a cleaner, more custom finish.',
    scottApproach:
      'The upgrade focused on subtle architectural detailing that adds dimension without making the room feel heavy or overdone.',
    result:
      'The primary bedroom now feels more complete, quieter in mood, and noticeably more custom.',
    projectHighlights: [
      'Tray ceiling detail',
      'Crown molding finish',
      'More custom primary suite',
    ],
    outcomePoints: [
      'Ceiling detail that adds depth without clutter',
      'A more finished primary suite feel',
      'Custom trim that supports a calmer room mood',
    ],
    tags: ['Primary suite upgrade', 'Architectural detail', 'Custom finish'],
    images: [
      {
        src: '/images/Projects/710 Parker St. Langhorne, Pa/bedroom-tray-ceiling.jpg',
        alt: 'Master bedroom with custom tray ceiling and crown molding detail',
        caption: 'Architectural bedroom detailing that adds depth and a more custom finish',
      },
    ],
  },
  {
    id: 'powder-room',
    eyebrow: 'Project case study',
    title: 'Powder Room',
    location: 'Langhorne, PA',
    serviceId: 'remodeling',
    image: '/images/Projects/710 Parker St. Langhorne, Pa/powder-room-vanity.jpg',
    imageAlt: 'Powder room renovation with dark wood vanity and granite countertop',
    scope: 'Powder room refresh',
    homeownerGoal: 'Turn a small, overlooked room into a polished guest-ready space.',
    homeownerNeed:
      'The homeowners wanted a compact room to feel more intentional, more attractive to guests, and better finished in the context of the rest of the house.',
    outcome: 'Turned a small room into a polished space guests actually notice.',
    summary:
      'The updated vanity, countertop, and finishes gave this compact powder room more style and function.',
    projectStory:
      'This project shows how smaller spaces can still carry real visual impact when the materials, layout, and finish details are handled carefully.',
    scottApproach:
      'The refresh emphasized proportion, finish quality, and durable materials so the room would feel elevated without wasting the limited footprint.',
    result:
      'The powder room now reads as a complete, guest-ready part of the home instead of an afterthought.',
    projectHighlights: [
      'Compact-space efficiency',
      'Guest-ready finish',
      'Vanity and countertop upgrade',
    ],
    outcomePoints: [
      'More style without sacrificing function in a small room',
      'A polished finish that reads well for guests',
      'Material choices that make the compact footprint work harder',
    ],
    tags: ['Small-space impact', 'Guest-ready', 'Finish upgrade'],
    images: [
      {
        src: '/images/Projects/710 Parker St. Langhorne, Pa/powder-room-vanity.jpg',
        alt: 'Powder room renovation with dark wood vanity and granite countertop',
        caption: 'A compact powder room upgraded to feel more finished and guest-ready',
      },
    ],
  },
];

export const PORTFOLIO: PortfolioItem[] = PROJECT_CASE_STUDIES;

export const FEATURED_PROJECT_STORY: FeaturedProjectStory = PROJECT_CASE_STUDIES[0];
