import type { BeforeAfterPair, FeaturedProjectStory, PortfolioItem, ProjectCaseStudy } from '@/types';

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
  {
    id: 'warnock-exterior',
    eyebrow: 'Featured project story',
    title: 'Historic Rowhome Renovation',
    location: 'Philadelphia, PA',
    serviceId: 'contracting',
    image:
      '/images/Projects/251 Warnock St. Philadelphia, Pa/exterior-front-brick-shutters.jpg',
    imageAlt:
      'Historic brick rowhome exterior with colorful shutters at 251 Warnock St, Philadelphia',
    scope: 'Full gut renovation of a historic Philadelphia rowhome',
    homeownerGoal:
      'Transform a neglected historic rowhome into a modern, livable space while preserving its original character.',
    homeownerNeed:
      'The property needed a complete gut renovation — structural reinforcement, new mechanicals, and a fully reimagined interior — while respecting the historic brick facade.',
    outcome:
      'Brought a neglected rowhome back to life with a full gut renovation that honored its historic character.',
    summary:
      'A complete gut renovation of a historic Philadelphia rowhome, from structural demo through finished exterior, preserving the original brick facade and adding modern curb appeal.',
    projectStory:
      'This rowhome on Warnock Street had great bones but needed everything else. Scott took it down to the studs, reinforced the structure, and rebuilt it from the inside out — keeping the historic brick front intact while modernizing every system and surface.',
    scottApproach:
      'Scott managed the full scope personally — from structural demo and roof work through exterior finishing — ensuring the historic facade was preserved while the home was completely rebuilt behind it.',
    result:
      'The finished exterior showcases restored brickwork, new shutters, and clean curb appeal that respects the block character while signaling a fully modernized interior.',
    projectHighlights: [
      'Full gut renovation',
      'Historic facade preservation',
      'Complete structural rebuild',
    ],
    outcomePoints: [
      'Restored historic brick exterior with new shutters and curb appeal',
      'Complete structural reinforcement from foundation to roof',
      'A neglected property transformed into a move-in-ready modern home',
    ],
    tags: ['Historic renovation', 'Gut rehab', 'Curb appeal'],
    isTall: true,
    beforeAfterPairs: [
      {
        label: 'Attic to Finished Bedroom',
        before: {
          src: '/images/Projects/251 Warnock St. Philadelphia, Pa/attic-demo-roof-structure.jpg',
          alt: 'Attic level during demo showing exposed roof structure',
          caption: 'Upper level during demo — exposed roof structure before buildout',
        },
        after: {
          src: '/images/Projects/251 Warnock St. Philadelphia, Pa/bedroom-closets-hardwood.jpg',
          alt: 'Finished bedroom with hardwood floors and closet doors',
          caption: 'Finished bedroom with hardwood floors and built-in closets',
        },
      },
      {
        label: 'First Floor Demo to Finished Room',
        before: {
          src: '/images/Projects/251 Warnock St. Philadelphia, Pa/first-floor-demo-brick.jpg',
          alt: 'First floor during demo with exposed brick walls',
          caption: 'First-floor demo revealing the original brick structure',
        },
        after: {
          src: '/images/Projects/251 Warnock St. Philadelphia, Pa/room-finished-windows-trim.jpg',
          alt: 'Finished room with new windows and custom trim',
          caption: 'Completed room with new windows, custom trim, and clean finishes',
        },
      },
    ],
    images: [
      {
        src: '/images/Projects/251 Warnock St. Philadelphia, Pa/exterior-front-brick-shutters.jpg',
        alt: 'Finished brick rowhome exterior with colorful shutters on Warnock Street',
        caption:
          'The completed exterior — restored brickwork, new shutters, and clean curb appeal that fits the block',
      },
      {
        src: '/images/Projects/251 Warnock St. Philadelphia, Pa/exterior-rear-view.jpg',
        alt: 'Rear view of the rowhome during renovation',
        caption: 'Rear elevation showing the scope of the full rebuild',
      },
      {
        src: '/images/Projects/251 Warnock St. Philadelphia, Pa/first-floor-demo-brick.jpg',
        alt: 'First floor during demo with exposed brick walls',
        caption:
          'First-floor demo revealing the original brick structure that was preserved throughout',
      },
      {
        src: '/images/Projects/251 Warnock St. Philadelphia, Pa/interior-demo-exposed-joists.jpg',
        alt: 'Interior demo showing exposed floor joists and structural framing',
        caption:
          'Exposed joists during structural assessment — every beam was evaluated and reinforced as needed',
      },
      {
        src: '/images/Projects/251 Warnock St. Philadelphia, Pa/rooftop-work-progress.jpg',
        alt: 'Rooftop work in progress during the renovation',
        caption:
          'Roof work underway — new structure and weatherproofing from the top down',
      },
    ],
  },
  {
    id: 'warnock-spiral-staircase',
    eyebrow: 'Project case study',
    title: 'Custom Spiral Staircase',
    location: 'Philadelphia, PA',
    serviceId: 'contracting',
    image:
      '/images/Projects/251 Warnock St. Philadelphia, Pa/spiral-staircase-detail.jpg',
    imageAlt: 'Custom metal spiral staircase with curved railing in Philadelphia rowhome',
    scope: 'Custom spiral staircase fabrication and installation',
    homeownerGoal:
      'Add a space-efficient staircase that connects all three levels without eating into the compact rowhome floor plan.',
    homeownerNeed:
      'A traditional staircase would have consumed too much of the narrow rowhome footprint. The design needed a vertical solution that felt intentional, not compromised.',
    outcome:
      'Installed a custom spiral staircase that connects all levels while preserving usable floor space.',
    summary:
      'A custom-fabricated spiral staircase that maximizes the rowhome footprint while serving as a striking architectural feature.',
    projectStory:
      'In a narrow Philadelphia rowhome, every square foot matters. Scott worked with a custom fabricator to design and install a spiral staircase that threads through all three levels — turning a space constraint into the home standout feature.',
    scottApproach:
      'Scott coordinated the custom fabrication, structural support, and multi-floor installation to ensure the staircase was both structurally sound and visually striking within the tight rowhome layout.',
    result:
      'The spiral staircase became the centerpiece of the renovation — a functional, eye-catching solution that freed up floor space and gave the home a distinctive character.',
    projectHighlights: [
      'Custom metal fabrication',
      'Multi-floor connectivity',
      'Space-saving design',
    ],
    outcomePoints: [
      'Custom-fabricated spiral staircase connecting all three levels',
      'Maximized usable floor area in a compact rowhome layout',
      'A striking architectural centerpiece that doubles as practical circulation',
    ],
    tags: ['Custom fabrication', 'Space-saving', 'Architectural feature'],
    images: [
      {
        src: '/images/Projects/251 Warnock St. Philadelphia, Pa/spiral-staircase-detail.jpg',
        alt: 'Finished spiral staircase with curved metal railing',
        caption:
          'The completed spiral staircase — custom-fabricated to fit the rowhome perfectly',
      },
      {
        src: '/images/Projects/251 Warnock St. Philadelphia, Pa/staircase-demo-exposed-brick.jpg',
        alt: 'Staircase area during demo with exposed brick walls',
        caption:
          'The staircase opening during demo — exposed brick reveals the character that inspired the design',
      },
      {
        src: '/images/Projects/251 Warnock St. Philadelphia, Pa/first-floor-demo-staircase.jpg',
        alt: 'First floor demo showing staircase framing in progress',
        caption:
          'Structural framing for the staircase opening before the spiral was installed',
      },
    ],
  },
  {
    id: 'warnock-bedroom',
    eyebrow: 'Project case study',
    title: 'Bedroom Remodel',
    location: 'Philadelphia, PA',
    serviceId: 'remodeling',
    image:
      '/images/Projects/251 Warnock St. Philadelphia, Pa/bedroom-closets-hardwood.jpg',
    imageAlt: 'Finished bedroom with hardwood floors and new closet doors in Philadelphia rowhome',
    scope: 'Full bedroom buildout from gutted shell',
    homeownerGoal:
      'Create a comfortable, move-in-ready bedroom with proper closet storage and quality finishes.',
    homeownerNeed:
      'Starting from a completely gutted space, the bedroom needed walls, flooring, closets, and trim — built to feel like a finished home, not a renovation.',
    outcome:
      'Built a clean, comfortable bedroom from a gutted shell with hardwood floors and built-in closets.',
    summary:
      'A full bedroom buildout from bare studs to finished space, featuring hardwood floors, custom closet doors, and clean trim work.',
    projectStory:
      'This bedroom started as nothing more than exposed framing and subfloor. Scott built it out completely — hardwood flooring, drywall, closet framing and doors, and finished trim — creating a room that feels like it was always part of the home.',
    scottApproach:
      'Every element was built from scratch with attention to proportion and finish quality, ensuring the bedroom would feel complete and comfortable from day one.',
    result:
      'The finished bedroom delivers warm hardwood floors, functional closet storage, and clean lines that make the space feel settled and livable.',
    projectHighlights: [
      'Hardwood floor installation',
      'Custom closet buildout',
      'Complete room finishing',
    ],
    outcomePoints: [
      'Warm hardwood flooring throughout the bedroom',
      'Built-in closets with finished doors for practical storage',
      'Clean trim and finishing that make the room feel established',
    ],
    tags: ['Full buildout', 'Hardwood floors', 'Move-in ready'],
    images: [
      {
        src: '/images/Projects/251 Warnock St. Philadelphia, Pa/bedroom-closets-hardwood.jpg',
        alt: 'Finished bedroom with hardwood floors and closet doors',
        caption:
          'The completed bedroom — hardwood floors, closet doors, and finished trim throughout',
      },
      {
        src: '/images/Projects/251 Warnock St. Philadelphia, Pa/attic-demo-roof-structure.jpg',
        alt: 'Attic level during demo showing exposed roof structure',
        caption:
          'The upper level during demo — exposed roof structure before the bedroom was framed and finished',
      },
    ],
  },
  {
    id: 'warnock-laundry',
    eyebrow: 'Project case study',
    title: 'Laundry Room',
    location: 'Philadelphia, PA',
    serviceId: 'remodeling',
    image:
      '/images/Projects/251 Warnock St. Philadelphia, Pa/laundry-room-washer-dryer.jpg',
    imageAlt: 'Completed laundry room with washer, dryer, and utility sink in Philadelphia rowhome',
    scope: 'Laundry room buildout with plumbing and utilities',
    homeownerGoal:
      'Add a dedicated, functional laundry space to a home that previously had none.',
    homeownerNeed:
      'The original rowhome had no designated laundry area. The renovation needed to carve out space, run new plumbing and electrical, and deliver a fully functional utility room.',
    outcome:
      'Created a fully functional laundry room where none existed before.',
    summary:
      'A dedicated laundry room built from scratch with new plumbing, electrical, and a practical layout for everyday use.',
    projectStory:
      'Adding a laundry room to a historic rowhome means working within tight constraints — routing new plumbing through old walls, finding space that does not compromise the living areas. Scott built this utility room to feel like it belongs, not like an afterthought.',
    scottApproach:
      'Scott handled the full scope — plumbing rough-in, electrical, flooring, and finishing — to deliver a laundry room that works hard in a small footprint without feeling cramped.',
    result:
      'The homeowners gained a dedicated laundry space with washer, dryer, and utility sink — a major quality-of-life upgrade in a home that previously lacked one.',
    projectHighlights: [
      'New plumbing and electrical',
      'Space-efficient layout',
      'Full utility room from scratch',
    ],
    outcomePoints: [
      'Dedicated laundry space created where none existed',
      'New plumbing and electrical run through historic structure',
      'Practical layout with washer, dryer, and utility sink',
    ],
    tags: ['Utility room', 'New plumbing', 'Quality-of-life upgrade'],
    images: [
      {
        src: '/images/Projects/251 Warnock St. Philadelphia, Pa/laundry-room-washer-dryer.jpg',
        alt: 'Completed laundry room with washer, dryer, and utility sink',
        caption:
          'The finished laundry room — a fully functional utility space built from scratch',
      },
      {
        src: '/images/Projects/251 Warnock St. Philadelphia, Pa/basement-staircase-laundry.jpg',
        alt: 'Basement level staircase and laundry area during construction',
        caption:
          'The lower level during construction — plumbing and access routes being established',
      },
    ],
  },
  {
    id: 'warnock-windows',
    eyebrow: 'Project case study',
    title: 'Window Trim & Finishing',
    location: 'Philadelphia, PA',
    serviceId: 'windows-doors',
    image:
      '/images/Projects/251 Warnock St. Philadelphia, Pa/room-finished-windows-trim.jpg',
    imageAlt: 'Newly installed windows with custom trim work in historic Philadelphia rowhome',
    scope: 'Window installation and interior trim finishing',
    homeownerGoal:
      'Replace aging windows with energy-efficient units and add clean, finished trim throughout.',
    homeownerNeed:
      'The original windows were beyond repair. New windows needed proper installation, insulation, and finished trim that matched the character of the renovation.',
    outcome:
      'Installed energy-efficient windows with clean custom trim that fits the renovated interior.',
    summary:
      'New window installation with custom interior trim, bringing better light, insulation, and a cleaner finished look to the renovated rowhome.',
    projectStory:
      'New windows in a historic rowhome require careful framing and trim work to look right. Scott installed energy-efficient units and finished each opening with custom trim that ties into the room design.',
    scottApproach:
      'Each window was properly framed, insulated, and trimmed to ensure a weather-tight seal and a clean interior finish that complements the renovation.',
    result:
      'The new windows deliver better natural light, improved energy efficiency, and a polished interior look with custom trim at every opening.',
    projectHighlights: [
      'Energy-efficient windows',
      'Custom interior trim',
      'Weather-tight installation',
    ],
    outcomePoints: [
      'New energy-efficient windows replacing deteriorated originals',
      'Custom trim work at every opening for a clean, finished look',
      'Better natural light and insulation throughout',
    ],
    tags: ['Window replacement', 'Custom trim', 'Energy efficiency'],
    images: [
      {
        src: '/images/Projects/251 Warnock St. Philadelphia, Pa/room-finished-windows-trim.jpg',
        alt: 'Finished room with new windows and custom trim',
        caption:
          'Completed window installation with custom trim — clean lines and better light',
      },
      {
        src: '/images/Projects/251 Warnock St. Philadelphia, Pa/room-demo-exposed-joists-windows.jpg',
        alt: 'Room during demo with exposed joists and window openings',
        caption:
          'The same room during demo — exposed joists and rough openings before windows and trim were installed',
      },
    ],
  },
  {
    id: 'warnock-sliding-door',
    eyebrow: 'Project case study',
    title: 'Sliding Door Installation',
    location: 'Philadelphia, PA',
    serviceId: 'windows-doors',
    image:
      '/images/Projects/251 Warnock St. Philadelphia, Pa/room-sliding-door-staircase.jpg',
    imageAlt: 'New sliding glass door installation with spiral staircase access in Philadelphia rowhome',
    scope: 'Sliding glass door installation and interior integration',
    homeownerGoal:
      'Add a sliding glass door to bring in natural light and connect the interior to the outdoors.',
    homeownerNeed:
      'The rowhome interior felt closed off. A sliding door would open up the space visually, improve airflow, and create a connection to the rear of the property.',
    outcome:
      'Opened up the interior with a sliding glass door that brings in light and connects to the outdoors.',
    summary:
      'A new sliding glass door installation that brightens the interior, improves airflow, and visually expands the living space.',
    projectStory:
      'In a compact rowhome, natural light is a premium. Scott installed a sliding glass door that floods the interior with daylight and creates an easy connection to the rear — making the whole floor feel bigger and more open.',
    scottApproach:
      'The installation required careful structural framing to support the wide opening, proper flashing and weatherproofing, and interior finishing that ties the door into the room design.',
    result:
      'The sliding door transformed the feel of the floor — more light, better airflow, and a visual connection to the outside that makes the space feel significantly larger.',
    projectHighlights: [
      'Structural framing for wide opening',
      'Improved natural light',
      'Indoor-outdoor connection',
    ],
    outcomePoints: [
      'Sliding glass door that floods the interior with natural light',
      'Structural framing to support the wide opening safely',
      'A stronger connection between inside and outside living',
    ],
    tags: ['Sliding door', 'Natural light', 'Space enhancement'],
    images: [
      {
        src: '/images/Projects/251 Warnock St. Philadelphia, Pa/room-sliding-door-staircase.jpg',
        alt: 'Sliding glass door with spiral staircase visible',
        caption:
          'The installed sliding door with the spiral staircase beyond — light and circulation working together',
      },
    ],
  },
  {
    id: 'front-porch-build',
    eyebrow: 'Featured project story',
    title: 'Front Porch Build',
    location: 'Bucks County, PA',
    serviceId: 'decks-patios',
    image: '/images/Projects/front-porch-2019-aug/porch-finished-wide-front.jpg',
    imageAlt:
      'Completed covered front porch with PVC columns, stone veneer steps, and standing seam metal roof',
    scope: 'Full front porch build with covered roof, composite decking, and stone veneer',
    homeownerGoal:
      'Transform a basic front entry into a full covered porch that adds curb appeal and usable outdoor living space.',
    homeownerNeed:
      'The home needed a more welcoming front entry — a space that looked substantial from the street and gave the family a comfortable place to sit outside.',
    outcome:
      'Delivered a covered front porch that dramatically improved curb appeal and added everyday outdoor living space.',
    summary:
      'A full front porch build featuring composite decking, a standing seam metal roof, PVC columns, and stone veneer base and steps — built from the ground up to feel like it was always part of the home.',
    projectStory:
      'This project started with a home that had little to no front porch presence. Scott designed and built a full covered porch from scratch — composite decking, a copper-tone standing seam metal roof, white PVC columns, and a stone veneer base with matching steps. The result is a porch that looks like it was always part of the house.',
    scottApproach:
      'Scott handled the full build — framing, roofing, decking, column installation, and stone veneer work — coordinating each trade to ensure the porch tied into the existing roofline and facade seamlessly.',
    result:
      'The finished porch gave the homeowners a striking new front elevation with real outdoor living space — a place to sit, a stronger first impression, and a significant boost to the home curb appeal.',
    projectHighlights: [
      'Covered porch with standing seam metal roof',
      'Stone veneer base and steps',
      'Composite decking and PVC columns',
    ],
    outcomePoints: [
      'A full covered porch built from scratch that feels original to the home',
      'Stone veneer steps and base that add weight and permanence to the entry',
      'A copper-tone metal roof and white columns that elevate the entire front elevation',
    ],
    tags: ['Covered porch', 'Stone veneer', 'Curb appeal'],
    isTall: true,
    beforeAfterPairs: [
      {
        label: 'Framing to Finished Porch',
        before: {
          src: '/images/Projects/front-porch-2019-aug/porch-framing-wide-front.jpg',
          alt: 'Wide front view during porch framing with lumber and roof structure going up',
          caption: 'Framing stage — the roof structure taking shape over the new porch footprint',
        },
        after: {
          src: '/images/Projects/front-porch-2019-aug/porch-finished-wide-front.jpg',
          alt: 'Wide front view of completed covered porch with columns, metal roof, and stone steps',
          caption: 'The completed porch — standing seam metal roof, PVC columns, and stone veneer steps',
        },
      },
    ],
    images: [
      {
        src: '/images/Projects/front-porch-2019-aug/porch-finished-wide-front.jpg',
        alt: 'Wide front view of completed covered porch with columns, metal roof, and stone steps',
        caption:
          'The completed porch — standing seam metal roof, PVC columns, and stone veneer steps',
      },
      {
        src: '/images/Projects/front-porch-2019-aug/porch-finished-right-side.jpg',
        alt: 'Finished porch from the right side showing stone facade and wrap-around view',
        caption:
          'Side view showing how the stone veneer and columns wrap the full porch elevation',
      },
      {
        src: '/images/Projects/front-porch-2019-aug/porch-columns-finished-angle.jpg',
        alt: 'Finished porch from angled view with white columns, stone base, and landscaping',
        caption:
          'Angled view with columns, stone base, and landscaping starting to fill in around the new entry',
      },
      {
        src: '/images/Projects/front-porch-2019-aug/deck-side-stone-steps.jpg',
        alt: 'Side view of finished deck with composite boards, stone steps, and white fascia',
        caption:
          'Composite decking and stone steps — durable materials that look sharp up close',
      },
      {
        src: '/images/Projects/front-porch-2019-aug/porch-framing-wide-front.jpg',
        alt: 'Wide front view during porch framing with lumber and roof structure going up',
        caption:
          'Framing stage — the roof structure taking shape over the new porch footprint',
      },
      {
        src: '/images/Projects/front-porch-2019-aug/porch-framing-scott-onsite.jpg',
        alt: 'Porch framing in progress with Scott visible on the deck',
        caption:
          'Scott on site during framing — hands-on from the first board to the last detail',
      },
    ],
  },
  {
    id: 'kitchen-remodel-2020',
    eyebrow: 'Featured project story',
    title: 'Kitchen Remodel',
    location: 'Bucks County, PA',
    serviceId: 'remodeling',
    image: '/images/Projects/kitchen-2020/kitchen-galley-range-cabinetry.jpg',
    imageAlt:
      'Remodeled galley kitchen with gas range, white cabinetry, and blue tile backsplash',
    scope: 'Full kitchen remodel with dining nook',
    homeownerGoal:
      'Modernize a dated kitchen with brighter finishes, better workspace, and a comfortable dining area that connects to the rest of the home.',
    homeownerNeed:
      'The homeowners wanted a kitchen that felt fresh and functional — better countertop space, updated cabinetry, and a dining nook that made everyday meals more enjoyable.',
    outcome:
      'Delivered a bright, functional kitchen with custom cabinetry, brass fixtures, and a welcoming dining nook.',
    summary:
      'A full kitchen remodel featuring white cabinetry, brass hardware, blue patterned backsplash tile, and a dining nook with French glass pocket doors.',
    projectStory:
      'This kitchen had good bones but felt closed off and dated. Scott opened up the workflow, installed new cabinetry with brass fixtures, added a distinctive blue tile backsplash, and created a dining nook that doubles as a bright gathering spot with views to the yard.',
    scottApproach:
      'Scott handled layout planning, cabinetry installation, tile work, and finish coordination — making sure the brass fixtures, blue backsplash, and white cabinetry worked together without competing for attention.',
    result:
      'The finished kitchen feels brighter, more organized, and more connected to the rest of the home. The dining nook with French doors became the family favorite spot.',
    projectHighlights: [
      'Custom white cabinetry with brass hardware',
      'Blue patterned backsplash tile',
      'Dining nook with French glass pocket doors',
    ],
    outcomePoints: [
      'A brighter galley layout with better prep and storage flow',
      'Brass fixtures and blue tile that give the kitchen distinctive character',
      'A dining nook with French doors that connects indoor and outdoor living',
    ],
    tags: ['Kitchen remodel', 'Custom finishes', 'Dining nook'],
    isTall: true,
    images: [
      {
        src: '/images/Projects/kitchen-2020/kitchen-galley-range-cabinetry.jpg',
        alt: 'Galley view with gas range, white cabinetry, brass fixtures, and blue tile backsplash',
        caption:
          'The finished galley — gas range, custom cabinetry, and a blue tile backsplash that ties the room together',
      },
      {
        src: '/images/Projects/kitchen-2020/dining-nook-window-view.jpg',
        alt: 'Dining nook with window looking out to the neighborhood',
        caption:
          'The dining nook — a bright, comfortable spot with neighborhood views',
      },
      {
        src: '/images/Projects/kitchen-2020/sink-brass-faucet-backsplash.jpg',
        alt: 'Undermount sink with brass faucet and blue patterned backsplash tile',
        caption:
          'Brass faucet and blue patterned tile — small details that elevate everyday use',
      },
      {
        src: '/images/Projects/kitchen-2020/refrigerator-cabinetry-backsplash.jpg',
        alt: 'French door refrigerator with white cabinetry and tile backsplash',
        caption:
          'Clean cabinetry and backsplash wrapping the refrigerator wall for a built-in feel',
      },
      {
        src: '/images/Projects/kitchen-2020/dining-nook-french-doors.jpg',
        alt: 'Dining area with French glass pocket doors, window, and hardwood floors',
        caption:
          'French glass pocket doors that open the dining nook to the rest of the home',
      },
      {
        src: '/images/Projects/kitchen-2020/dining-french-doors-wide.jpg',
        alt: 'Wide view of dining area with French doors and kitchen counter visible',
        caption:
          'The full dining area — French doors, hardwood floors, and a clear sightline back to the kitchen',
      },
    ],
  },
  {
    id: 'kitchen-remodel-2019',
    eyebrow: 'Featured project story',
    title: 'Two-Tone Kitchen Remodel',
    location: 'Bucks County, PA',
    serviceId: 'remodeling',
    image: '/images/Projects/kitchen-2019/peninsula-wide-view.jpg',
    imageAlt:
      'Two-tone kitchen remodel with gray lower cabinets, white upper cabinets, and herringbone marble backsplash',
    scope: 'Full kitchen remodel with two-tone cabinetry and peninsula',
    homeownerGoal:
      'Update a dated kitchen with refined finishes, more counter space, and a layout that supports everyday cooking and gathering.',
    homeownerNeed:
      'The homeowners wanted a kitchen that balanced warmth and brightness — a space that felt elevated without being cold, with enough workspace for real daily use.',
    outcome:
      'Delivered a refined two-tone kitchen with a functional peninsula, herringbone marble backsplash, and brass accents throughout.',
    summary:
      'A full kitchen remodel featuring two-tone cabinetry (gray lowers, white shaker uppers), herringbone marble backsplash, quartz countertops, brass hardware, and a peninsula with turned legs.',
    projectStory:
      'This kitchen needed more than a surface refresh — the homeowners wanted a space that felt warmer, more intentional, and better suited to how they actually cook and gather. Scott designed a two-tone palette with gray lower cabinets and white shaker uppers, added a herringbone marble backsplash for texture, and built a peninsula with turned legs that anchors the room without closing it off.',
    scottApproach:
      'Scott coordinated the full scope — cabinetry selection, layout reconfiguration, tile installation, and finish detailing — making sure the two-tone palette, brass hardware, and herringbone pattern worked together as a cohesive whole.',
    result:
      'The finished kitchen strikes a balance between warmth and brightness, with a functional peninsula for prep and seating, a built-in refrigerator surround for a cleaner look, and material choices that feel elevated without being overdone.',
    projectHighlights: [
      'Two-tone cabinetry (gray + white)',
      'Herringbone marble backsplash',
      'Peninsula with turned legs',
    ],
    outcomePoints: [
      'A two-tone palette that balances warmth and brightness throughout the kitchen',
      'Herringbone marble backsplash and quartz countertops for refined texture',
      'A peninsula with turned legs that adds prep space and casual seating',
    ],
    tags: ['Two-tone design', 'Herringbone backsplash', 'Refined finishes'],
    isTall: true,
    images: [
      {
        src: '/images/Projects/kitchen-2019/peninsula-wide-view.jpg',
        alt: 'Wide view of two-tone kitchen with peninsula, cabinetry, sliding door, and pendant lights',
        caption:
          'The full kitchen — two-tone cabinetry, peninsula with turned legs, and pendant lighting',
      },
      {
        src: '/images/Projects/kitchen-2019/peninsula-counter-open-shelving.jpg',
        alt: 'Kitchen peninsula with turned legs, open corner shelving, and herringbone backsplash',
        caption:
          'Peninsula detail — turned legs, open shelving, and herringbone backsplash working together',
      },
      {
        src: '/images/Projects/kitchen-2019/range-wall-cabinetry.jpg',
        alt: 'Range and microwave wall with gray lower cabinets, white upper cabinets, and herringbone backsplash',
        caption:
          'Range wall with two-tone cabinetry and herringbone marble tile carrying through the room',
      },
      {
        src: '/images/Projects/kitchen-2019/refrigerator-built-in-surround.jpg',
        alt: 'Built-in refrigerator surround with white cabinetry and crown molding',
        caption:
          'Built-in refrigerator surround — white cabinetry and crown molding for a cleaner, integrated look',
      },
      {
        src: '/images/Projects/kitchen-2019/sink-window-herringbone-backsplash.jpg',
        alt: 'Kitchen sink under window with gray lower cabinets, herringbone backsplash, and dishwasher',
        caption:
          'Sink wall with herringbone backsplash, quartz counters, and brass hardware details',
      },
    ],
  },
  {
    id: 'bathroom-renovation-2019',
    eyebrow: 'Project case study',
    title: 'Bathroom Renovations',
    location: 'Bucks County, PA',
    serviceId: 'remodeling',
    image: '/images/Projects/bathroom-2019/walk-in-shower-marble-tile.jpg',
    imageAlt:
      'Walk-in shower with large gray and white marble-look tile and corner marble seat',
    scope: 'Two full bathroom renovations in a single home',
    homeownerGoal:
      'Renovate two bathrooms — a powder room and a full bath — with cohesive style, modern fixtures, and lasting materials.',
    homeownerNeed:
      'Both bathrooms were outdated and needed a complete refresh. The homeowners wanted chrome fixtures throughout, subway and patterned tile work, and practical upgrades like radiator covers and dual showerheads.',
    outcome:
      'Delivered two fully renovated bathrooms with cohesive finishes, custom tile work, and thoughtful details throughout.',
    summary:
      'Two bathroom renovations in the same Bucks County home — a powder room with geometric patterned floor tile and subway wainscoting, and a full bath with a walk-in shower featuring marble-look tile and a corner seat, plus a tub/shower combo with dual showerheads.',
    projectStory:
      'This project covered two bathrooms in the same home. The powder room got a complete makeover with geometric blue and black patterned floor tile, subway wainscoting, and a chrome-fixture vanity. The full bath features a walk-in shower with large marble-look tile and a corner marble seat, a tub/shower combo with rain and handheld showerheads, decorative radiator covers, and sconce lighting.',
    scottApproach:
      'Scott coordinated both bathroom renovations simultaneously — managing tile layout, plumbing upgrades, and finish selections so the two rooms feel connected in style while each has its own character.',
    result:
      'The homeowners got two beautifully finished bathrooms that feel cohesive but distinct. Chrome fixtures, thoughtful tile choices, and details like radiator covers and built-in shower niches make both rooms feel elevated and easy to maintain.',
    projectHighlights: [
      'Walk-in shower with marble-look tile and corner seat',
      'Geometric patterned floor tile in powder room',
      'Dual showerheads in tub/shower combo',
    ],
    outcomePoints: [
      'Two bathrooms renovated with cohesive chrome fixtures and tile work',
      'A walk-in shower with marble-look tile, corner seat, and mosaic floor',
      'A powder room with geometric patterned tile and subway wainscoting',
    ],
    tags: ['Bathroom renovation', 'Custom tile', 'Chrome fixtures'],
    isTall: true,
    images: [
      {
        src: '/images/Projects/bathroom-2019/walk-in-shower-marble-tile.jpg',
        alt: 'Walk-in shower with large gray and white marble-look tile, handheld shower, and corner marble seat',
        caption:
          'Walk-in shower with marble-look tile and a built-in corner seat for comfort and style',
      },
      {
        src: '/images/Projects/bathroom-2019/walk-in-shower-seat-mosaic-floor.jpg',
        alt: 'Walk-in shower wider view showing corner seat, mosaic floor tile, and curtain',
        caption:
          'Wider view of the walk-in shower — mosaic floor tile and corner seat with clean finishing',
      },
      {
        src: '/images/Projects/bathroom-2019/tub-shower-dual-heads-niche.jpg',
        alt: 'Tub/shower combo with white subway tile, rain and hand showerheads, and built-in niche',
        caption:
          'Tub/shower combo with dual showerheads, subway tile, and a built-in niche for everyday use',
      },
      {
        src: '/images/Projects/bathroom-2019/vanity-radiator-cover-sconces.jpg',
        alt: 'Larger bathroom vanity with decorative radiator cover, sconce lighting, and gray tile floor',
        caption:
          'Vanity area with sconce lighting, decorative radiator cover, and gray tile flooring',
      },
      {
        src: '/images/Projects/bathroom-2019/toilet-window-radiator-cover.jpg',
        alt: 'Toilet area with dark-framed window, white trim, radiator cover, and gray floor tile',
        caption:
          'Toilet area with radiator cover, dark-framed window, and consistent gray tile throughout',
      },
      {
        src: '/images/Projects/bathroom-2019/vanity-patterned-floor-tile.jpg',
        alt: 'White vanity with chrome faucet and geometric blue and black patterned floor tile',
        caption:
          'Powder room vanity with chrome faucet and striking geometric patterned floor tile',
      },
      {
        src: '/images/Projects/bathroom-2019/powder-room-wide-window.jpg',
        alt: 'Wide view of powder room with toilet, vanity, patterned floor tile, subway wainscoting, and double windows',
        caption:
          'Full powder room view — patterned floor tile, subway wainscoting, and natural light from double windows',
      },
      {
        src: '/images/Projects/bathroom-2019/vanity-door-patterned-floor.jpg',
        alt: 'Vanity and door detail showing patterned floor tile and chrome fixtures',
        caption:
          'Vanity detail with chrome fixtures and the geometric patterned tile running through the room',
      },
    ],
  },
  {
    id: 'bathroom-renovation-2018',
    eyebrow: 'Project case study',
    title: 'Master Bathroom Renovation',
    location: 'Bucks County, PA',
    serviceId: 'remodeling',
    image: '/images/Projects/bathroom-2018/freestanding-tub-stone-surround-wide.jpg',
    imageAlt:
      'Renovated master bathroom with freestanding soaking tub on fieldstone surround beneath the window',
    scope: 'Full master bathroom renovation with custom tile and freestanding tub',
    homeownerGoal:
      'Transform a dated master bath into a spa-inspired retreat with a freestanding tub, walk-in shower, and premium tile work throughout.',
    homeownerNeed:
      'The homeowners wanted a bathroom that felt like a true escape — natural stone, a statement tub, and custom tile details that would hold up to daily use while looking elevated.',
    outcome:
      'Delivered a spa-quality master bathroom with a freestanding tub on a fieldstone surround, marble walk-in shower, and natural stone finishes throughout.',
    summary:
      'A full master bathroom renovation featuring a freestanding soaking tub on a custom fieldstone surround, a marble walk-in shower with leaf mosaic accents and built-in bench, natural stone tile throughout, and a gray vanity with granite countertops.',
    projectStory:
      'This master bathroom renovation brought together two distinct material palettes in one cohesive space. The walk-in shower features marble subway tile with decorative leaf mosaic accent panels and a built-in bench, while the tub area showcases a freestanding soaker set on a custom fieldstone surround with a granite cap. Natural stone tile and wood-look flooring tie both zones together.',
    scottApproach:
      'Scott coordinated the full scope — plumbing relocation, custom tile layout, fieldstone surround construction, and vanity installation — ensuring the marble shower details and natural stone tub area felt intentional and connected rather than competing.',
    result:
      'The finished bathroom delivers the spa feel the homeowners wanted — a freestanding tub that serves as the room centerpiece, a walk-in shower with custom mosaic accents, and durable natural stone finishes that elevate everyday use.',
    projectHighlights: [
      'Freestanding tub on fieldstone surround',
      'Marble shower with leaf mosaic accents',
      'Natural stone tile throughout',
    ],
    outcomePoints: [
      'A freestanding soaking tub on a custom fieldstone surround with granite cap',
      'Walk-in shower with marble tile, leaf mosaic panels, and built-in bench',
      'Natural stone and wood-look flooring that ties the full room together',
    ],
    tags: ['Spa-inspired', 'Custom tile', 'Natural stone'],
    isTall: true,
    images: [
      {
        src: '/images/Projects/bathroom-2018/bathroom-wide-tub-shower-vanity.jpg',
        alt: 'Full bathroom view with freestanding soaking tub, walk-in shower, and gray vanity with granite countertop',
        caption:
          'The full room — freestanding tub, walk-in shower, and gray vanity working together as one cohesive space',
      },
      {
        src: '/images/Projects/bathroom-2018/freestanding-tub-stone-surround.jpg',
        alt: 'Freestanding soaking tub on custom fieldstone surround with granite cap and window',
        caption:
          'The statement tub — freestanding soaker set on a fieldstone surround with granite cap and natural light',
      },
      {
        src: '/images/Projects/bathroom-2018/marble-shower-bench-leaf-mosaic.jpg',
        alt: 'Marble walk-in shower with built-in bench seat and decorative leaf mosaic accent panels',
        caption:
          'Walk-in shower with marble tile, built-in bench, and leaf mosaic accents flanking the seat',
      },
      {
        src: '/images/Projects/bathroom-2018/marble-shower-mosaic-panel-detail.jpg',
        alt: 'Large decorative leaf mosaic panel on marble subway tile shower wall',
        caption:
          'Leaf mosaic centerpiece panel — a focal point that elevates the entire shower enclosure',
      },
      {
        src: '/images/Projects/bathroom-2018/marble-shower-niche-mosaic-corner.jpg',
        alt: 'Marble shower corner with recessed storage niche and leaf mosaic accent wall',
        caption:
          'Recessed niche and mosaic detail — practical storage with decorative finishing',
      },
      {
        src: '/images/Projects/bathroom-2018/stone-tile-shower-hand-bar-niche.jpg',
        alt: 'Walk-in shower with natural stone tile, hand shower bar, recessed niche, and pebble mosaic floor',
        caption:
          'Natural stone shower with hand bar, recessed niche, and pebble mosaic floor for texture and grip',
      },
      {
        src: '/images/Projects/bathroom-2018/shower-subway-tile-corner-shelves.jpg',
        alt: 'Walk-in shower with white subway tile walls, corner shelves, and hexagonal marble floor tile',
        caption:
          'White subway tile shower with corner shelves and hexagonal marble floor — clean and functional',
      },
    ],
  },
  {
    id: 'front-porch-entry',
    eyebrow: 'Project case study',
    title: 'Front Porch & Entry',
    location: 'Bucks County, PA',
    serviceId: 'decks-patios',
    image: '/images/Projects/front-porch-2019-may/porch-entry-steps-front.jpg',
    imageAlt:
      'Covered entry porch with composite decking, white PVC railings, and bluestone walkway',
    scope: 'Covered entry porch build with composite decking and PVC railings',
    homeownerGoal:
      'Add a welcoming covered entry porch that matches the traditional character of the home.',
    homeownerNeed:
      'The home lacked a proper front entry — the homeowners wanted a porch that felt built-in, with durable materials and a style that complemented the existing architecture.',
    outcome:
      'Delivered a covered entry porch with composite decking, PVC railings, lattice skirting, and a bluestone walkway that looks original to the home.',
    summary:
      'A covered entry porch featuring composite wood decking and risers, white PVC railings and columns, lattice skirting panels, and a bluestone walkway — traditional style matching the home character.',
    projectStory:
      'This project gave the home a proper front entry it was missing. Scott built a covered porch with composite decking, white PVC railings, and lattice skirting that ties into the home traditional style. A bluestone walkway connects the porch to the driveway for a polished, welcoming arrival.',
    scottApproach:
      'Scott handled the full build — framing, composite decking, PVC railing and column installation, lattice skirting, and bluestone walkway — ensuring every detail matched the home existing character.',
    result:
      'The finished porch gives the homeowners a welcoming covered entry with durable, low-maintenance materials and a traditional look that feels like it was always part of the house.',
    projectHighlights: [
      'Composite wood decking and risers',
      'White PVC railings and columns',
      'Lattice skirting and bluestone walkway',
    ],
    outcomePoints: [
      'A covered entry porch that matches the home traditional character',
      'Durable composite decking and PVC railings for low maintenance',
      'Lattice skirting and bluestone walkway for a polished, complete look',
    ],
    tags: ['Entry porch', 'Composite decking', 'Traditional style'],
    images: [
      {
        src: '/images/Projects/front-porch-2019-may/porch-entry-steps-front.jpg',
        alt: 'Front view of covered entry porch with composite steps, railings, and wreath on door',
        caption:
          'The completed entry porch — composite steps, PVC railings, and a welcoming front door',
      },
      {
        src: '/images/Projects/front-porch-2019-may/porch-side-railings-lattice.jpg',
        alt: 'Side angle showing white PVC railings, composite steps, and lattice skirting',
        caption:
          'Side view — white railings, composite risers, and lattice skirting that ties into the home',
      },
      {
        src: '/images/Projects/front-porch-2019-may/porch-corner-angle-skirting.jpg',
        alt: 'Corner angle showing deck depth, lattice panels, and bluestone walkway',
        caption:
          'Corner angle — deck depth, lattice panels, and bluestone walkway completing the entry',
      },
    ],
  },
  {
    id: 'brick-walkway',
    eyebrow: 'Project case study',
    title: 'Brick Walkway & Entry Steps',
    location: 'Langhorne, PA',
    serviceId: 'decks-patios',
    image:
      '/images/Projects/710 Parker St. Langhorne, Pa/brick-walkway/walkway-front-exterior.jpg',
    imageAlt:
      'Completed brick walkway with herringbone pattern, brick pillars, and picket fence in Langhorne, PA',
    scope: 'Brick walkway, entry steps, and column pillars',
    homeownerGoal:
      'Create a welcoming, handcrafted path from the gate to the front door that adds real curb appeal and lasting character.',
    homeownerNeed:
      'The front yard lacked a defined entry path. The homeowners wanted a brick walkway and steps that felt intentional and matched the home traditional style.',
    outcome:
      'Delivered a hand-laid brick walkway with herringbone entry steps and column pillars that transformed the front approach.',
    summary:
      'A hand-laid brick walkway from the gate to the front door, with herringbone-pattern entry steps and brick column pillars — built by Scott from the ground up.',
    projectStory:
      'This project gave the front yard a completely new sense of arrival. Scott hand-laid every brick — from the curved walkway section through the straight path to the front door — finishing with herringbone-pattern entry steps and matching brick pillars that frame the gate.',
    scottApproach:
      'Scott handled the full scope personally — grading, base prep, and hand-laying every brick in the walkway, steps, and pillars — ensuring clean lines, proper drainage, and a finished look that feels permanent.',
    result:
      'The finished walkway and steps gave the home a stronger front presence and a well-defined entry sequence that feels crafted, not poured.',
    projectHighlights: [
      'Hand-laid brick walkway',
      'Herringbone entry steps',
      'Brick column pillars',
    ],
    outcomePoints: [
      'A defined path from gate to front door that adds structure to the front yard',
      'Herringbone-pattern brick steps that elevate the entry',
      'Brick pillars that frame the gate and tie the hardscaping together',
    ],
    tags: ['Hardscaping', 'Hand-laid brick', 'Curb appeal'],
    images: [
      {
        src: '/images/Projects/710 Parker St. Langhorne, Pa/brick-walkway/walkway-front-exterior.jpg',
        alt: 'Full house exterior with completed brick walkway, picket fence, and brick pillars',
        caption:
          'The completed walkway and pillars as seen from the street — a fully transformed front approach',
      },
      {
        src: '/images/Projects/710 Parker St. Langhorne, Pa/brick-walkway/brick-entry-steps-detail.jpg',
        alt: 'Close-up of brick entry steps with herringbone pattern',
        caption:
          'Herringbone-pattern brick entry steps — hand-laid detail that sets the tone at the front door',
      },
      {
        src: '/images/Projects/710 Parker St. Langhorne, Pa/brick-walkway/walkway-curve-in-progress.jpg',
        alt: 'Scott laying brick on the curved walkway section, in progress',
        caption:
          'Scott hand-laying brick on the curved section — every piece placed individually for a clean line',
      },
      {
        src: '/images/Projects/710 Parker St. Langhorne, Pa/brick-walkway/walkway-gate-to-door.jpg',
        alt: 'Completed brick walkway from the gate to the front door, straight-on view',
        caption:
          'The full path from gate to front door — a straight-on view of the finished walkway',
      },
      {
        src: '/images/Projects/710 Parker St. Langhorne, Pa/brick-walkway/walkway-steps-side-view.jpg',
        alt: 'Walkway and entry steps from side angle, showing the full path',
        caption:
          'Side view showing how the walkway and steps connect to create a cohesive entry sequence',
      },
      {
        src: '/images/Projects/710 Parker St. Langhorne, Pa/brick-walkway/scott-laying-brick-detail.jpg',
        alt: 'Scott laying brick from above, showing craftsmanship and detail work',
        caption:
          'Craftsmanship detail — Scott laying each brick by hand to ensure a precise, lasting result',
      },
    ],
  },
];

export const PORTFOLIO: PortfolioItem[] = PROJECT_CASE_STUDIES;

export const FEATURED_PROJECT_STORY: FeaturedProjectStory = PROJECT_CASE_STUDIES[0];
