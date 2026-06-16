// FAQ data structure for I Am One Self
// All public-facing descriptions use Shadowban-safe terms for social media.
// Raw terms (Ayahuasca, Psychedelic) are fine on Retreat Guru / Aya Advisors listings.

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
    category: "The Medicine & The Experience",
    description:
      "Understanding the sacred brew and the Plants & Miracles teaching.",
    items: [
      {
        question: 'What is "The Medicine" used in your ceremonies?',
        answer:
          "Our sacred brew is a traditional entheogen prepared from a 7-generation lineage recipe. It is a Magic Principle — an outside substance used by the Holy Spirit to provide temporary healing power and insight. It amplifies the content of the mind, bringing conditioning and 'level confusion' into awareness so that healing can occur.",
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
        question: "What makes your teaching different from other retreat centers?",
        answer:
          "We do NOT promote the illusion of attack or a victim mentality. Our teaching is about regaining control of physical reality. We integrate the 76 Miracle Principles from A Course in Miracles with the shamanic plant wisdom tradition, creating a 'Plants and Miracles' curriculum that goes far beyond a typical retreat experience.",
      },
    ],
  },
  {
    category: "Shamanic Lineage & Levels",
    description: "The traditional framework of plant wisdom mastery.",
    items: [
      {
        question: "What is a Banco Runa?",
        answer:
          "Banco Runa means becoming a 'bench' or bank of wisdom for the sacred brew. These are the most powerful Curanderos (healers) — those who have dedicated their lives to studying the plant traditions and carrying the lineage forward.",
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
          "The experience is profoundly safe when guided by experienced practitioners in a secure setting. We require a confidential medical screening for all participants. Certain conditions (heart disease, severe psychiatric history) and medications (MAOIs, SSRIs) are contraindicated and require a supervised taper.",
      },
      {
        question: 'What happens during "The Transition" (purging)?',
        answer:
          "Purging is a natural part of the healing process — whether it appears as physical release, sweating, or crying. It is the body's way of letting go of old conditioning. In our community, we view this not as something to fear, but as a necessary correction to bring you back to peace.",
      },
      {
        question: "Who should NOT participate?",
        answer:
          "Individuals with heart conditions, history of psychosis or schizophrenia, or current pregnancy should not participate. Certain medications — especially SSRIs and MAOIs — are contraindicated. Always consult your physician and our medical team before making any changes.",
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
          "Preparation begins weeks before you arrive. We follow a specific Dieta that avoids pork, alcohol, processed foods, and stimulants. This is more than a physical detox — it is an agreement you make with the medicine to 'make peace with your pain' before the ceremony begins. We also recommend contemplative practices such as meditation or yoga.",
      },
      {
        question: "What is the Dieta and why is it important?",
        answer:
          "The Dieta is a set of traditional dietary and lifestyle guidelines observed before, during, and after the retreat. It cleanses the body, reduces toxins, and opens sensitivity to the plant wisdom. Avoid pork, processed foods, alcohol, and caffeine. Abstain from sexual activity. Follow for at least 2 weeks before and 1 month after the retreat.",
      },
      {
        question: "What should I pack for the retreat?",
        answer:
          "Focus on simplicity. Bring comfortable white or light-colored clothing, a journal for your insights, a rain poncho, a reusable water bottle, warm clothes for cool evenings, a hat or sun protection, and insect repellent. A warm-light flashlight is useful (not white LED — too bright for ceremony).",
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
          "Our 20-person retreats are hosted in sacred, secluded locations in the Amazon Jungle and Sacred Valley of Peru. We honor commitments to several retreat centers including Sachimama, Inca Shipiba, and The Garden of Peace. Detailed arrival instructions are sent once your application is approved.",
      },
      {
        question: "How do I get there?",
        answer:
          "Fly into Lima, Peru, then take a domestic flight to Iquitos (Amazon) or Cusco (Sacred Valley). Do not book tickets until your application is approved. We recommend arriving at least one day before to acclimate. Departures should be scheduled after 2:00 PM on the final day.",
      },
      {
        question: "Do I need a visa, vaccines, or travel insurance?",
        answer:
          "Most travelers from the US, EU, Canada, and Australia receive a 90-day tourist visa automatically upon arrival. Vaccinations are optional. Travel insurance is required and must be presented at check-in. Ensure your passport has at least 6 months validity.",
      },
      {
        question: "What is included in the retreat fee?",
        answer:
          "Our retreats are all-inclusive from the moment you arrive: lodging, Dieta-compliant meals, all ceremonies, sharing circles, and our comprehensive 3-month integration program. You are responsible for travel to Peru, one night of hotel before the retreat, personal items, and gratuity for the local staff.",
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
          "Integration is ongoing. The key is to maintain supportive practices: meditation, journaling, therapy, or continued connection with our integration network. We provide an extensive 3-month program to ground the healing into your daily life.",
      },
      {
        question: "Do you offer ongoing spiritual coaching?",
        answer:
          "Yes. Isaiah Kenney offers Spiritual Life Coaching for those seeking continued guidance on the path of Single-Mindedness. This is separate from the retreat integration program and can be booked directly through the website.",
      },
    ],
  },
];
