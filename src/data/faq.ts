// FAQ data structure for I Am One Self
// All public-facing descriptions use Shadowban-safe terms for social media.
// Raw terms are fine on Retreat Guru / Aya Advisors listings.

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  description?: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    category: "The Teaching & The Experience",
    description: "Understanding the Plants & Miracles teaching and what happens in ceremony.",
    items: [
      {
        question: 'What is "The Medicine" used in your ceremonies?',
        answer:
          "Our sacred brew is a traditional entheogen prepared from a 7-generation lineage recipe. It is a Magic Principle — an outside substance used by the Holy Spirit to provide temporary healing power and insight. It amplifies the content of the mind, bringing conditioning and 'level confusion' into awareness so that healing can occur.",
      },
      {
        question: 'What is "Chaiconi Bari"?',
        answer:
          'Chaiconi Bari is Shipibo-Conibo in origin. "Chaiconi" speaks to the wisdom Spirits invisible to human eyes but seen when the Spiritual Eye is activated — Spirits of the plants, ancestors, and shamans who watch over the tradition from a higher realm. "Bari" means a radiant circular energy field that nurtures and sustains life. Together, the term represents the Holy Spirit, the Mind of the Atonement where the Christ stands revealed in the Golden Halo.',
      },
      {
        question: "What are the 'Miracle Principles'?",
        answer:
          "The Miracle Principles are the foundation of our work — cognitive shifts that take you from body-identification (darkness/guilt) to soul-identification (light/peace). During our ceremonies, we use the amplifier of the sacred brew to see these principles in action. They are drawn from A Course in Miracles and represent the journey from the ego's thought system to the Holy Spirit's correction.",
      },
      {
        question: "What is the 'Escape from Darkness'?",
        answer:
          'Most of us live on the "outer fringes" of physical perception, caught in a cycle of grievances and past-dwelling. "Escape from Darkness" is the process of moving back into non-differentiated light — recognizing that the source of light is within you, not the physical sun. As A Course in Miracles asks: "Do you not see that all your misery comes from the strange belief that you are powerless?"',
      },
      {
        question: "What is the Flight of the Eagle and the Condor?",
        answer:
          "This is the prophecy that the Western mind of Medicine (The Eagle — Jesus, A Course in Miracles) will one day join with the Indigenous mind of Plant Wisdom (The Condor) for the good of humanity. The two teachings now live in harmony to heal mankind. The symbol of this union is the Barn Owl — the two birds flying as one — representing Single-Mindedness and seraphic (angelic) teaching.",
      },
      {
        question: "What is the Golden Halo of Light?",
        answer:
          'The Golden Halo manifests around the head and bodies of everyone when the true Spiritual Eye opens. It is the Face of Christ and the Unified Mind of Light — a vision through the power of miracle forgiveness that ends the illusion of differences and offers the remembrance of the Sons of God who share our true Self.',
      },
      {
        question: "What makes your teaching different from other retreat centers?",
        answer:
          "We do NOT promote the illusion of attack or a victim mentality. Our teaching is about regaining control of physical reality. We integrate the 76 Miracle Principles from A Course in Miracles with the shamanic plant wisdom tradition, creating a 'Plants and Miracles' curriculum that goes far beyond a typical retreat experience.",
      },
      {
        question: "What does the experience feel like?",
        answer:
          "Experiences vary widely: sweating, shaking, nausea, vomiting, strong emotions, visionary experiences, energetic sensations, crying, laughing, yawning, blissful feelings, and spiritual or personal insight. Purging is a natural part of the healing process — the body's way of letting go of old conditioning. In our community, we view this not as something to fear, but as a necessary correction to bring you back to peace.",
      },
      {
        question: "What are Icaros?",
        answer:
          "Ikaros are healing songs received by Curanderos during long periods of fasting and isolation working with master plants. They are living medicine encoded with the life force and energy of the plants and spirits. The ikaros are an essential part of the Shaman's craft — they provide shamanic plant-spirit healing, clearing negative energies and guiding the ceremony.",
      },
    ],
  },
  {
    category: "Shamanic Lineage & Levels",
    description: "The traditional framework of plant wisdom mastery.",
    items: [
      {
        question: "What is a Curandero or Shaman?",
        answer:
          'The Spanish "Curandero" means "Healer" or "one who cures." In general terms, a person who travels between spiritual realms to seek help, move energies, and generate protection. Our healers are masters of the ancient art of ayahuasca curanderismo — a plant-spirit based shamanic healing practice from the Shipibo-Conibo tradition.',
      },
      {
        question: "Who are the healers at Chaiconi Bari?",
        answer:
          "Our team includes Isaiah Kenney (founder), Alex Wexukapi (Shipibo Curandero), and David Amaringo (Curandero and Ayahuasca Visionary Artist, son of the legendary Pablo Amaringo). Each brings deep expertise in the Shipibo tradition and the Plants & Miracles teaching.",
      },
      {
        question: "What is a Banco Runa?",
        answer:
          "Banco Runa means becoming a 'bench' or bank of wisdom for the sacred brew. These are the most powerful Curanderos — those who have dedicated their lives to studying the plant traditions and carrying the lineage forward.",
      },
      {
        question: "What is the Mariah level?",
        answer:
          "Mariah is the level where an individual has regained control over physical reality. At this level, the mind recognizes no limits — shape-shifting, walking through walls, walking on water become possible. It represents the highest level because it means no limit on the mind. Jesus demonstrated this level in A Course in Miracles.",
      },
      {
        question: "What is Sumeruhna?",
        answer:
          "Sumeruhna is the capability to enter the Water World — another dimension of existence where spiritual beings dwell. To enter this world, one must move into the spirit world. It is considered a power in itself, though it is ultimately a capability of the Mariah level, since one who has regained control of physical reality has no limits.",
      },
    ],
  },
  {
    category: "Health & Safety",
    description: "Medical eligibility and safety protocols.",
    items: [
      {
        question: "Is participating in a ceremony safe?",
        answer:
          "The experience is profoundly safe when guided by experienced practitioners in a secure setting. We require a confidential medical screening for all participants. In Peru, this medicine is recognized as a national cultural treasure (\"Cultural Patrimony of the Nation\") and is legal. Every applicant undergoes comprehensive screening including psychological and medical assessment.",
      },
      {
        question: 'What happens during "The Transition" (purging)?',
        answer:
          "Purging is a natural part of the healing process — whether it appears as physical release, sweating, or crying. It is the body's way of letting go of old conditioning. In our community, we view this not as something to fear, but as a necessary correction to bring you back to peace.",
      },
      {
        question: "Who should NOT participate?",
        answer:
          "Individuals with heart conditions, history of psychosis or schizophrenia, or current pregnancy should not participate. Certain medications — especially SSRIs and MAOIs — are contraindicated and require a supervised taper. Always consult your physician and our medical team before making any changes to medications.",
      },
      {
        question: "Are medications and supplements allowed?",
        answer:
          "Only those cleared by our team. Most medications and supplements must be paused before arrival, with the exception of birth control. Antidepressants (especially SSRIs and MAOIs) are contraindicated — this requires careful, supervised tapering well in advance. Discuss your specific situation with us during the application process.",
      },
      {
        question: "Can this help with depression, anxiety, or trauma?",
        answer:
          "Many guests have experienced significant and lasting healing. Scientific research — including a long-term observational study conducted by ICEERS and the Beckley Foundation — has demonstrated highly significant improvements in well-being, quality of life, anxiety, depression, grief, and PTSD. However, it is not a guaranteed cure. Personal commitment, professional aftercare, and integration are crucial.",
      },
      {
        question: "How do I find a legitimate retreat center?",
        answer:
          'Look for these markers: 5+ year track record, advanced-level indigenous healers, experienced facilitators, comprehensive medical screening, strict safety measures, emergency protocols, transparency about risks, preparation and integration programs, verifiable references, and focus on reciprocity over profit. Aya Advisors and Retreat Guru are good resources for verified listings.',
      },
    ],
  },
  {
    category: "Preparation & The Dieta",
    description: "How to prepare physically and spiritually for your retreat.",
    items: [
      {
        question: "How should I prepare for my retreat?",
        answer:
          "Preparation begins weeks before you arrive. We follow a specific Dieta that avoids pork, alcohol, processed foods, and stimulants. This is more than a physical detox — it is an agreement you make with the medicine to 'make peace with your pain' before the ceremony begins. We also recommend contemplative practices such as meditation or yoga. Reduce stimulants like caffeine, and abstain from sexual activity.",
      },
      {
        question: "What is the Dieta and why is it important?",
        answer:
          "The Dieta is a set of traditional dietary and lifestyle guidelines observed before, during, and after the retreat. It cleanses the body, reduces toxins, and opens sensitivity to the plant wisdom. Avoid pork, processed foods, alcohol, and caffeine. Abstain from sexual activity. Follow for at least 2 weeks before and 1 month after the retreat. Some choose longer.",
      },
      {
        question: "What is a Master Plant Dieta?",
        answer:
          "A Master Plant Dieta is a traditional form of shamanic apprenticeship and deep healing. It involves isolation, reducing stimulants, refraining from sexual contact, and drinking specially prepared master plants. This is more intensive than the standard retreat dieta and is for those called to go deeper.",
      },
      {
        question: "What foods and substances should I avoid?",
        answer:
          "Alcohol, recreational drugs, fermented foods, aged cheeses, processed meats, pork, chili, heavy salt, sugar, and stimulants including caffeine. SSRIs and MAOIs are medically contraindicated. Follow a clean, whole-food, largely plant-based diet for best results.",
      },
      {
        question: "What should I pack for the retreat?",
        answer:
          "Focus on simplicity. Bring comfortable white or light-colored clothing, a journal for your insights, a rain poncho, a reusable water bottle, warm clothes for cool evenings, a hat or sun protection, and insect repellent. A warm-light flashlight is useful (not white LED — too bright for ceremony). If in the Sacred Valley, bring layers for the 2,800m elevation.",
      },
      {
        question: "Can pregnant women participate?",
        answer:
          "No. As a matter of best practice, we do not offer ceremonies to pregnant women.",
      },
    ],
  },
  {
    category: "Logistics & Travel",
    description: "Getting to and from our retreat locations.",
    items: [
      {
        question: "Where do the retreats take place?",
        answer:
          "Our retreats are hosted in sacred, secluded locations in the Peruvian Amazon near Iquitos and the Sacred Valley near Cusco. We honor commitments to several retreat centers including Sachimama, Inca Shipiba, and The Garden of Peace. Detailed arrival instructions are sent once your application is approved.",
      },
      {
        question: "How do I get there?",
        answer:
          "Fly into Lima, Peru, then take a domestic flight to Iquitos (Amazon) or Cusco (Sacred Valley). Domestic flights run around $150-350 USD round trip via LATAM, Star Peru, or Peruvian Airlines. Do not book tickets until your application is approved. We recommend arriving at least one day before to acclimate. Departures should be scheduled after 2:00 PM on the final day.",
      },
      {
        question: "Do I need a visa, vaccines, or travel insurance?",
        answer:
          "Most travelers from the US, EU, Canada, and Australia receive a 90-day tourist visa automatically upon arrival. Ensure your passport has at least 6 months validity. Vaccinations are optional — not required and not contraindicated. Travel insurance is required and must be presented at check-in.",
      },
      {
        question: "What about malaria medication?",
        answer:
          "Malaria risk varies by season and location. Atovaquone/proguanil (Malarone) shows no contraindications with the medicine. Mefloquine and doxycycline should be avoided. Consult your travel doctor well in advance.",
      },
      {
        question: "What is included in the retreat fee?",
        answer:
          "Our retreats are all-inclusive from the moment you arrive: lodging, Dieta-compliant meals, all ceremonies, sharing circles, and our comprehensive 3-month integration program. You are responsible for travel to Peru, one night of hotel before the retreat, personal items, and gratuity for the local staff (recommended $100-300 USD).",
      },
      {
        question: "Is there Wi-Fi or cell service at the retreat?",
        answer:
          "Most retreat centers in the Amazon have no Wi-Fi or cell service available to guests. This is intentional — the disconnection supports the healing process. We recommend bringing a power bank or solar charger. Inform loved ones you will be unreachable for the duration.",
      },
      {
        question: "What about staying extra days for integration?",
        answer:
          "Very beneficial. Many inexpensive options exist near our retreat locations (Pisac in the Sacred Valley, Iquitos for the Amazon). Common for participants to extend return flights — consider an open return ticket.",
      },
    ],
  },
  {
    category: "Integration & Aftercare",
    description: "What happens after the retreat and how to sustain the healing.",
    items: [
      {
        question: "What happens after the retreat?",
        answer:
          "Integration never truly stops, but we provide a structured path. This includes 1-on-1 coaching, community integration calls, and access to our resource library to help you maintain your connection to the light once you return home. Many guests notice shifts for months or even years after retreat.",
      },
      {
        question: "How long does integration take?",
        answer:
          "Integration is ongoing. The key is to maintain supportive practices: meditation, journaling, therapy, or continued connection with our integration network. We provide an extensive 3-month program to ground the healing into your daily life. Without integration, benefits may fade.",
      },
      {
        question: "Do you offer ongoing spiritual coaching?",
        answer:
          "Yes. Isaiah Kenney offers Spiritual Life Coaching for those seeking continued guidance on the path of Single-Mindedness. Programs include A Course in Miracles study, relationship coaching, ending the thinking addiction, and more. Sessions are $40-125 based on what you can afford. If cost is a barrier, ask about our Gift Program.",
      },
      {
        question: "What is the post-Dieta?",
        answer:
          "After drinking the medicine: refrain from pork, chili, alcohol, pharmaceuticals, and recreational drugs for at least one week. After a Master Plant Dieta: 30 days minimum, much stricter adherence. The post-dieta is essential — breaking it can undo the healing work.",
      },
    ],
  },
  {
    category: "Legal & Cost",
    description: "Pricing, legality, and booking details.",
    items: [
      {
        question: "Is this legal in Peru?",
        answer:
          "Yes. In Peru, this medicine is recognized as a national cultural treasure (\"Cultural Patrimony of the Nation\") and is legal. Fully legal in Bolivia, Brazil, Ecuador, and Colombia as well. Status varies in other countries (Schedule 1 in the US, UK, and Australia, though some churches have regulated permission). Grey area in Portugal, India, and Spain.",
      },
      {
        question: "How much does a retreat cost?",
        answer:
          "Costs vary by center and program length. Our partner centers offer mid-range pricing. Garden of Peace runs approximately $80-120 USD per day. The Temple of the Way of Light charges $4,440 for their 12-day program. We recommend applying first — we can help match you with the right center for your budget and needs.",
      },
      {
        question: "How do I apply?",
        answer:
          "Apply through our Retreat Guru listing or Aya Advisors profile. Complete the online application and comprehensive medical form. Each application is reviewed by our team and medical advisor, typically within a few days. A deposit is required; if approved, further deposit and final payment timelines apply.",
      },
      {
        question: "Is there financial assistance available?",
        answer:
          'Some centers offer low-income discounts on a case-by-case basis. For ongoing spiritual coaching, Isaiah offers a "Gift Program" — "Into the hands of the gift the gift is given." If you cannot afford the base rate, please let us know and we will make accommodations.',
      },
    ],
  },
];
