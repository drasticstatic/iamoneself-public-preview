// FAQ data structure for I Am One Self
// All public-facing descriptions use Shadowban-safe terms for social media.
// Raw terms are fine on Retreat Guru / Aya Advisors listings.

export interface FAQItem {
  id?: string; // optional slug for anchor linking from teaching modals
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
        id: "chaiconi-bari",
        question: 'What is "Chaiconi Bari"?',
        answer:
          'Chaiconi Bari is Shipibo-Conibo in origin. "Chaiconi" speaks to the wisdom Spirits invisible to human eyes but seen when the Spiritual Eye is activated — Spirits of the plants, ancestors, and shamans who watch over the tradition from a higher realm. "Bari" means a radiant circular energy field that nurtures and sustains life. Together, the term represents the Holy Spirit, the Mind of the Atonement where the Christ stands revealed in the Golden Halo.',
      },
      {
        id: "miracle-principles",
        question: "What are the 'Miracle Principles'?",
        answer:
          "The Miracle Principles are the foundation of our work — cognitive shifts that take you from body-identification (darkness/guilt) to soul-identification (light/peace). During our ceremonies, we use the amplifier of the sacred brew to see these principles in action. They are drawn from A Course in Miracles and represent the journey from the ego's thought system to the Holy Spirit's correction.",
      },
      {
        id: "escape-from-darkness",
        question: "What is the 'Escape from Darkness'?",
        answer:
          'Most of us live on the "outer fringes" of physical perception, caught in a cycle of grievances and past-dwelling. "Escape from Darkness" is the process of moving back into non-differentiated light — recognizing that the source of light is within you, not the physical sun. As A Course in Miracles asks: "Do you not see that all your misery comes from the strange belief that you are powerless?"',
      },
      {
        id: "flight-of-eagle-condor",
        question: "What is the Flight of the Eagle and the Condor?",
        answer:
          "This is the prophecy that the Western mind of Medicine (The Eagle — Jesus, A Course in Miracles) will one day join with the Indigenous mind of Plant Wisdom (The Condor) for the good of humanity. The two teachings now live in harmony to heal mankind. The symbol of this union is the Barn Owl — the two birds flying as one — representing Single-Mindedness and seraphic (angelic) teaching.",
      },
      {
        id: "golden-halo",
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
        id: "icaros",
        question: "What are Icaros?",
        answer:
          "Ikaros are healing songs received by Curanderos during long periods of fasting and isolation working with master plants. They are living medicine encoded with the life force and energy of the plants and spirits. The ikaros are an essential part of the Shaman's craft — they provide shamanic plant-spirit healing, clearing negative energies and guiding the ceremony.",
      },
      {
        question: "What is Single-Mindedness?",
        answer:
          "Single-Mindedness is the ultimate goal of our teaching — a mind that no longer oscillates between the ego's thought system of fear/guilt/attack and the Holy Spirit's correction of love/forgiveness/peace. The Barn Owl, our symbol, represents two birds flying as one — the Eagle and the Condor united in a single gaze. When you achieve Single-Mindedness, you see only the Face of Christ in everyone and everything.",
      },
      {
        question: "What is A Course in Miracles and how does it connect to the retreat?",
        answer:
          "A Course in Miracles (ACIM) is a self-study spiritual curriculum that describes a non-dualistic approach to forgiveness and healing. It teaches that the world we perceive is a projection of the ego's thought system — fear, guilt, and separation — and that the Holy Spirit offers an alternative perception based on love, innocence, and unity. Our teaching integrates the 76 Miracle Principles from ACIM with the shamanic plant wisdom tradition, giving you a cognitive framework that the sacred brew amplifies so you can experience these principles directly rather than merely understanding them intellectually.",
      },
      {
        question: "What is the Face of Christ?",
        answer:
          "The Face of Christ is the vision of innocence that appears when the Spiritual Eye opens — seeing past the body and its illusions of difference to the radiant light that is the truth in everyone. It is not a physical face but a recognition: that every being you encounter is a Son of God, guiltless and whole. The Golden Halo is the energetic signature of this vision. When you see the Face of Christ, the illusion of attack dissolves and only love remains.",
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
        id: "mariah-level",
        question: "What is the Mariah level?",
        answer:
          "Mariah is the level where an individual has regained control over physical reality. At this level, the mind recognizes no limits — shape-shifting, walking through walls, walking on water become possible. It represents the highest level because it means no limit on the mind. Jesus demonstrated this level in A Course in Miracles.",
      },
      {
        question: "What is Sumeruhna?",
        answer:
          "Sumeruhna is the capability to enter the Water World — another dimension of existence where spiritual beings dwell. To enter this world, one must move into the spirit world. It is considered a power in itself, though it is ultimately a capability of the Mariah level, since one who has regained control of physical reality has no limits.",
      },
      {
        question: "What are the different levels of shamanic mastery?",
        answer:
          "The tradition recognizes several levels. At the foundation, a Curandero has studied the plants and can heal with ikaros and dietas. A Banco Runa has become a 'bench' or bank of wisdom — among the most powerful healers, having dedicated their lives to the lineage. The Mariah level is the highest: an individual who has regained full control over physical reality, with no limits on the mind. Each level requires years of dedicated study, fasting, and isolation with master plants.",
      },
      {
        question: "How do healers train and receive their knowledge?",
        answer:
          "Healers in this tradition train through extended periods of isolation, fasting, and drinking master plants — a process called 'dietando.' During these isolation periods, the plants reveal their songs (ikaros), their healing properties, and their spiritual nature to the healer. This is not book-learning — it is direct, experiential revelation. A true Curandero may spend months or years in isolation to receive even one icaro. The training is arduous and requires complete commitment to the path.",
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
          "Purging is a natural part of the healing process — whether it appears as physical release, sweating, or crying. It is the body's way of letting go of old conditioning. In our community, we view this not as something to fear, but as a necessary correction to bring you back to peace. Purging at the front end — vomiting — is not always necessary or expected. Sometimes the body strictly purges out the rear. Both are natural, both are valid, and both are part of the medicine doing its work. We frequently work with companion plants like Bobinsana and Ajo Sacha to help support the purging process when needed.",
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
      {
        question: "What medical conditions require special screening?",
        answer:
          "The following conditions require additional review by our medical team: heart conditions (including arrhythmia, pacemakers, and high blood pressure), epilepsy or seizure disorders, diabetes (Type 1 or Type 2), history of psychosis or schizophrenia, bipolar disorder, PTSD with active dissociation, chronic liver or kidney conditions, and current use of psychiatric medications (especially SSRIs, SNRIs, MAOIs, and benzodiazepines). Pregnancy is an automatic exclusion. Full disclosure during your application is essential for your safety — there are no judgments, only precautions.",
      },
      {
        question: "I'm on antidepressants. Can I still participate?",
        answer:
          "Antidepressants — particularly SSRIs (Prozac, Zoloft, Lexapro, Paxil, Celexa) and MAOIs — are medically contraindicated. The combination can cause serotonin syndrome, which is potentially life-threatening. This does NOT mean you cannot participate. It means you must taper off these medications under medical supervision well in advance of the retreat. We require a minimum taper period and clearance from both your prescribing physician and our medical advisor. Do NOT stop medications on your own — we will guide you through the process safely. Many guests have successfully completed this transition.",
      },
      {
        question: "How does the medical screening work?",
        answer:
          "Every applicant completes a comprehensive medical questionnaire as part of the application. This covers your medical history, current medications, mental health history, previous experiences with plant medicines, and emergency contact information. Our medical advisor reviews every application. In some cases, we may request a letter from your physician or require a brief phone consultation. This process is confidential and exists solely to protect your safety. There are no judgments — only care.",
      },
      {
        question: "What about mosquitoes and other insects?",
        answer:
          "The Amazon is home to mosquitoes, sand flies, and other insects. This is a natural part of the jungle environment. We recommend bringing a natural insect repellent (DEET-free preferred for ceremony comfort), lightweight long-sleeved shirts and pants for evenings, and considering permethrin-treated clothing. Most retreat centers provide mosquito nets over beds. The Amazon insects are most active at dawn and dusk — during ceremonies (held at night), they are generally less of a concern than you might expect. Many guests find that after the first day or two, mosquitoes become a minor background detail in the larger experience.",
      },
      {
        question: "What about malaria?",
        answer:
          "Malaria risk varies by season and location within the Amazon. The Iquitos area is considered lower risk than deep jungle regions. Atovaquone/proguanil (Malarone) shows no contraindications with the medicine and is the recommended prophylactic if you choose to take one. Mefloquine (Lariam) and doxycycline should be avoided — they can interact negatively. Many long-term residents and repeat visitors choose not to take prophylactics, but this is a personal medical decision. Consult your travel doctor well in advance, and discuss it with our team during the application process.",
      },
      {
        question: "What about sex during the dieta and retreat?",
        answer:
          "Sexual abstinence is a traditional requirement of the dieta — before, during, and for a period after the retreat. This is not a moral judgment. In the Shipibo tradition, sexual energy and plant spirit energy are considered deeply connected. The dieta calls for conservation and redirection of your vital energy toward the healing process. Before the retreat: abstain for at least 2 weeks. During the retreat: complete abstinence. After the retreat: at least one week for standard retreats, 30 days minimum for Master Plant Dieta. Many guests find this period of abstinence becomes one of the most powerful aspects of the experience — a liberating release from habitual patterns.",
      },
      {
        question: "Is confidentiality maintained during the retreat?",
        answer:
          "Absolutely. What happens in ceremony stays in ceremony. All participants agree to a confidentiality commitment before the retreat begins. Sharing circles are sacred spaces — what others share is not to be discussed outside the circle, even with other participants. This creates the trust necessary for genuine vulnerability and healing. Our facilitators also maintain strict confidentiality. Your personal experiences, medical information, and anything shared during the retreat is held in confidence.",
      },
      {
        question: "What emergency protocols are in place?",
        answer:
          "All of our retreat centers maintain emergency protocols including: first aid supplies, emergency communication (satellite phone or radio), evacuation plans to the nearest medical facility, and staff trained in emergency response. We also collect emergency contact information during application. Our facilitators monitor participants throughout ceremonies and are trained to recognize when someone needs physical or psychological support. The medical screening process is designed to minimize risk before you even arrive.",
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
        id: "the-dieta",
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
      {
        question: "What should I wear during the retreat?",
        answer:
          "Comfort and simplicity are key. Light-colored or white clothing is traditional and preferred for ceremony — it supports the energetic work and helps the healers see your energy field. Bring loose, breathable clothing for daytime (the Amazon is hot and humid), and warm layers for evenings and ceremony (it can feel surprisingly cool at night). Women often wear long flowing skirts or dresses for ceremony; men wear comfortable pants and light shirts. Avoid tight or restrictive clothing. Bring a shawl or light blanket for ceremony — you may want to wrap yourself during the experience. Comfortable shoes or sandals for walking around the center. Something you don't mind getting dirty — the jungle is muddy after rain.",
      },
      {
        question: "What should I bring to the retreat?",
        answer:
          "Pack light and practical. Essentials: comfortable white or light-colored clothing (3-4 sets), warm layers for evenings, a rain poncho or jacket, a journal and pen for insights, a reusable water bottle, natural insect repellent, sunscreen, a hat, personal toiletries (biodegradable preferred), a warm-light flashlight or headlamp (not harsh white LED — too bright for ceremony), a small day pack, and any personal medications cleared by our medical team. Nice to have: a sacred item for the altar (crystal, photo, small object), a sleep mask, earplugs, a power bank or solar charger, a good book, and a camera (used respectfully). Remember: you are going to surrender into a healing process. Every item you bring should serve that purpose.",
      },
      {
        question: "What about caffeine — do I really need to stop?",
        answer:
          "Yes. Caffeine is a stimulant that works against the dieta's purpose of opening sensitivity. For coffee drinkers, we recommend tapering gradually over 1-2 weeks before the dieta start date — going cold turkey can cause intense headaches and irritability that will compete with your preparation. Switch to half-caf, then decaf, then herbal tea. Green tea is also a stimulant — switch to chamomile, peppermint, or ginger. This is genuinely challenging for many guests, but the increased sensitivity you gain by the time you arrive is worth the temporary discomfort. Think of it as the first act of commitment to the process.",
      },
      {
        question: "What about recreational drugs and alcohol before the retreat?",
        answer:
          "All recreational drugs and alcohol must be completely avoided during the dieta period — minimum 2 weeks before the retreat, preferably longer. This includes cannabis/CBD, even if used medicinally. These substances cloud the mind and interfere with the plant spirits' ability to work with you. The dieta is a commitment — a contract between you and the medicine. The cleaner you arrive, the deeper the work can go. If you have concerns about substances you're currently using, discuss them honestly during the application process. We will help you plan appropriately.",
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
      {
        question: "Should I arrive a day early?",
        answer:
          "We strongly recommend it. The journey to Peru is long — most guests fly 10-20+ hours, often through multiple time zones. Arriving at least a day early gives your body time to rest, acclimate, and settle before the retreat begins. As Kenney puts it: \"I suggest that people get to their destination at least a day early, or evening early. It's good to rest and get a good night's sleep in a hotel before you get going off to a retreat.\" Some people prefer to show up on the first day, and that's up to the individual — but almost everyone who arrives early is grateful they did. The extra night in a hotel is a small investment that pays dividends in how present you can be from the very first ceremony.",
      },
      {
        question: "I feel guilty taking 9-10 days for a retreat. Is that normal?",
        answer:
          "Completely normal — and one of the most common concerns people share. When you've spent years in a culture that measures worth by productivity, the idea of stepping away for a week or more can feel almost transgressive. You might worry about falling behind, letting people down, or losing momentum at work. Here's what we've seen: nearly every guest who felt this guilt before the retreat looks back on it as one of the best decisions they ever made. The retreat doesn't take you away from your life — it gives you back to your life. The clarity, healing, and renewed sense of purpose that emerge from this work ripple through every area of your life for months and years afterward. Consider: nine days to address patterns that have been with you for decades is not a vacation — it's an investment. And the version of you that returns will be more effective, more present, and more at peace than the one who left.",
      },
      {
        question: "What are the sleeping arrangements like?",
        answer:
          "Sleeping arrangements vary by retreat center. Most centers offer shared tambo (traditional jungle huts) with individual beds and mosquito nets. Some centers have private rooms or couple's suites available for an additional fee. Shared accommodations are a traditional part of the experience and many guests find the communal sleeping arrangement becomes a source of unexpected comfort and connection. You will have your own bed, mosquito net, and personal space. When you apply, indicate your preference and we will do our best to accommodate it.",
      },
      {
        question: "Do I really need travel insurance?",
        answer:
          "Yes. Travel insurance is required for all participants and must be presented at check-in. This protects you in case of unexpected medical needs, flight changes, or other travel disruptions. We recommend a policy that covers medical evacuation, trip cancellation/interruption, and medical treatment abroad. Standard US health insurance typically does not cover international medical care. World Nomads, Safety Wing, and Allianz are popular options. The cost is a small fraction of your total trip and can save you thousands in the unlikely event you need it.",
      },
      {
        question: "What about dietary preferences — vegetarian, vegan, gluten-free?",
        answer:
          "Our retreat meals follow the traditional dieta — simple, clean, and plant-forward. Rice, plantains, soups, fresh fruits, vegetables, and occasional fish (the Amazon staple) form the foundation. We accommodate vegetarian, vegan, and gluten-free diets — please indicate your needs on the application. The dieta meals are naturally quite simple and easily adapted. If you have severe allergies (nuts, shellfish, etc.), please discuss during the application process so we can ensure your safety.",
      },
      {
        question: "What about arriving late or leaving early?",
        answer:
          "We strongly discourage both. The retreat is designed as a complete arc — from preparation through the final integration circle, each day builds on the last. Arriving late means missing essential orientation, safety briefings, and the first ceremony. Leaving early cuts short the integration that anchors the healing work. If you have scheduling constraints, discuss them with us before applying. We would rather help you find a retreat date that works fully than have you arrive compromised. Exceptions are rare and require advance approval.",
      },
      {
        question: "Is there an age requirement?",
        answer:
          "Participants must be 18 or older. There is no upper age limit — guests in their 60s and 70s have had profoundly meaningful experiences. What matters more than age is physical fitness, psychological readiness, and medical clearance. The Amazon environment is physically demanding (heat, humidity, walking on uneven terrain), and the ceremony experience requires willingness to face difficult material. We evaluate each applicant individually.",
      },
      {
        question: "What are the sleeping, shower, and bathroom facilities like?",
        answer:
          "Facilities vary by center but all provide the essentials. Sleeping: individual beds with mosquito nets in shared tambo (traditional huts) or private rooms (subject to availability). Bring your own pillow or blanket if you have preferences — the retreat provides basics, but personal comfort items help some guests feel more at ease. Showers: most centers have cold-water showers (the Amazon is warm, so this feels refreshing). Some centers have limited hot water. Towels are provided but bringing a quick-dry travel towel is wise. Toilets: typically composting or flush toilets in shared bathroom structures. This is the Amazon — not a hotel. The facilities are clean and functional, but rustic. Most guests find they adapt within the first day, and the simplicity becomes part of the experience.",
      },
      {
        question: "Is laundry available at the retreat?",
        answer:
          "Most centers offer basic laundry service for a small fee — hand-washing or machine wash. Some guests bring enough clothing for the entire retreat to avoid the need. If using the service, allow 1-2 days turnaround. The humidity means things dry slowly. Quick-dry fabrics are your friend. This is one of those details that seems bigger before you arrive than after — once you are in the flow of the retreat, laundry falls away as a concern.",
      },
      {
        question: "What about nutrition and meals during the retreat?",
        answer:
          "All meals are dieta-compliant: simple, clean, and traditional. Expect rice, plantains, soups, root vegetables, fresh fruits, and occasional fish. The food is light and intentionally simple — it supports the ceremonial work by keeping your body unburdened. Portions are adequate and you will not go hungry. We accommodate dietary preferences (vegetarian, vegan, gluten-free, pescatarian) — indicate on your application. What surprises many guests is how satisfying the simple food becomes after ceremony. The body craves clean nourishment. Complex, heavy meals would actually work against the process.",
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
      {
        question: "What if I have a difficult experience — will I be supported?",
        answer:
          "Yes, without question. Our facilitators are trained to support you through every kind of experience — from blissful to challenging to terrifying. No one is left alone in a difficult process. During ceremony, the healers and facilitators monitor all participants. After ceremony, sharing circles and 1-on-1 check-ins provide space to process what arose. Our integration program continues for 3 months after the retreat. The difficult experiences are often the most transformative — they are where the deepest healing happens.",
      },
      {
        question: "Will I be able to return to normal life after the retreat?",
        answer:
          "Yes — but 'normal' may feel different. Many guests describe a heightened sensitivity, emotional openness, and a shift in priorities that can make 'normal life' feel simultaneously strange and more vivid. Some need a few days of quiet upon returning home. This is normal and expected. Our 3-month integration program is specifically designed to help you bridge between the retreat experience and your daily life. The goal is not to escape normal life but to bring the clarity and peace you found back into it. We recommend not scheduling demanding work or social events for the first few days after return.",
      },
      {
        question: "How do I talk about my experience with people who weren't there?",
        answer:
          "This is one of the most unexpectedly challenging aspects of returning home. The experience can be difficult to describe, and not everyone in your life will understand or be receptive. Our advice: share selectively. You do not owe anyone the full story. Share what feels right, with people who are genuinely curious and supportive. For others, 'I went on a spiritual retreat in Peru and it was profound' is enough. Many guests find that writing in their journal — or talking with others from the retreat — is more satisfying than trying to explain to people who weren't there. Our integration calls also provide a space where everyone speaks the same language.",
      },
      {
        question: "What are integration sessions and why do they matter?",
        answer:
          "Integration sessions are structured support conversations — 1-on-1 or in small groups — that happen after each ceremony and continue for 3 months after the retreat. They are where the real work of the retreat takes root. In ceremony, you receive insights, visions, and healing. In integration, you learn how to bring those insights into your daily life. Without integration, the retreat experience can feel like a vivid dream that slowly fades. With it, the shifts become permanent. Our integration program includes coaching calls, community circles, journaling prompts, and access to our resource library. Think of the retreat as planting the seed and integration as the watering and tending.",
      },
      {
        question: "What is pre-retreat integration and does it exist?",
        answer:
          "Yes — and it is just as important as post-retreat integration. Pre-retreat integration is the preparation work that sets the foundation for what happens in ceremony. This includes the dieta (physical clearing), contemplative practices, setting clear intentions, and beginning the conversation with yourself about what you are ready to release. Many people also schedule a discovery call with our team before the retreat to discuss their intentions and concerns. The conversation itself is part of the miracle — the people we talk to are often carrying deep pain, yes, but they are also carrying a profound readiness for healing. Seeking answers is not weakness — it is courage. Part of the process is doing the intake, answering the questions that open the door. The conversation itself is a miracle. The application process, the questions we ask, and the care we take in screening — all of this is the beginning of the healing, before you ever set foot in Peru.",
      },
    ],
  },
  {
    category: "Plant Medicines & Companion Plants",
    description: "The sacred brew, its ingredients, and the master plants that support the healing journey.",
    items: [
      {
        id: "what-is-the-medicine",
        question: "What is in the sacred brew?",
        answer:
          "Our traditional brew follows a 7-generation Shipibo-Conibo lineage recipe. The primary ingredients are: the Ayahuasca vine (Banisteriopsis caapi) which contains harmine and other harmala alkaloids — these act as MAO inhibitors (MAOI), allowing the DMT to become orally active. The second ingredient is Chakruna leaf (Psychotria viridis) which contains N,N-DMT — the visionary compound. Some lineages also include Chaliponga leaf (Diplopterys cabrerana), which contains 5-MeO-DMT, known for its intensely mystical, dissolve-into-the-light quality. Small amounts of Nicotina Rustica — a native Amazonian tobacco — are also traditionally cooked into the brew to aid purging. These proportions are not arbitrary — they are the result of centuries of indigenous empirical wisdom.",
      },
      {
        question: "What about other plant medicines — San Pedro, psilocybin, hapé?",
        answer:
          "Our tradition works primarily with Ayahuasca and the master plants of the Amazon. San Pedro (Huachuma/Wachuma) is a different cactus medicine with its own tradition, common in Andean ceremonies — some of our Sacred Valley locations offer complementary Huachuma ceremonies as part of extended programs. Psilocybin mushrooms are not part of our tradition. Hapé (also spelled rapé) is a sacred Amazonian snuff made from Nicotina Rustica and various medicinal tree ashes — it is used as a complementary tool for grounding and clearing during dieta. Different traditions and vegetalistas work with the whole spectrum of plant medicines depending upon what you are dealing with. Our focus is on the Ayahuasca tradition and its master plant dietas.",
      },
      {
        question: "What is Ajo Sacha?",
        answer:
          "Ajo Sacha (Mansoa alliacea) is one of the most commonly used master plants in the Shipibo tradition. Its name means 'false garlic' — the crushed leaves smell like garlic. The roots go deep — both literally and spiritually. Ajo Sacha is primarily used for purging: it helps move stuck energy and physical toxicity out of the body. During dieta with Ajo Sacha, many people experience vivid jungle dreams and a heightening of the senses. It is considered a protective plant — clearing negative energies and strengthening the auric field. It is one of the first plants a Curandero may diet because it opens the pathway for deeper work.",
      },
      {
        question: "What is Bobinsana?",
        answer:
          "Bobinsana (Calliandra angustifolia) is a beautiful, gentle master plant known for opening the heart. If you carry a lot of fear — especially fear about drinking Ayahuasca — Bobinsana is commonly used to calm and soothe. It softens the anxiety and opens emotional receptivity. It is frequently included in the main brew for this reason. During dieta, Bobinsana often produces dreams of water, rivers, and pink flowers. It is considered a feminine plant spirit — nurturing, compassionate, and grounding. For those working through grief or heartbreak, Bobinsana can be profoundly supportive.",
      },
      {
        question: "What is Chuchuhuasi?",
        answer:
          "Chuchuhuasi is a large canopy tree whose bark is used in dieta. It is a powerful amplifier — of sounds, tastes, physical touch, and especially of grievances. As Kenney describes from his own dieta: 'It amplifies everything. Sounds, tastes, physical touch, and grievances. Makes the jungle feel even more damp. Forces grievances up into your mind.' This is not a plant for the faint of heart — it brings up whatever is buried and forces you to look at it. For those ready to face deep-seated resentments and the ego's thought system of attack, Chuchuhuasi provides an uncompromising mirror. It is traditionally used for physical pain and inflammation as well as spiritual cleansing.",
      },
      {
        question: "What is Ayahuma?",
        answer:
          "Ayahuma (Couroupita guianensis) is called 'the Doctor' — the Castanha tree with cannonball-like fruit. It is one of the most demanding master plants. As Kenney says: 'It also forces grievances up into your mind. All kinds of dark energy and satanic and murderous thoughts that you have lurking in there. Thoughts about women, young girls too. It forces you to deal with all that.' Ayahuma strips away every rationalization and defense, bringing the raw, unfiltered content of the unconscious into awareness. This is intense, difficult work — but for those called to do it, the liberation on the other side is profound. It represents the deepest form of the Escape from Darkness teaching: you cannot forgive what you refuse to see. Ayahuma makes you see it all.",
      },
      {
        question: "What is Nicotina Rustica and why is it in the brew?",
        answer:
          "Nicotina Rustica (Mapacho) is a native Amazonian tobacco — far more potent than commercial tobacco. It is used in several ways: small amounts are traditionally cooked into the Ayahuasca brew to aid purging. As a hapé (snuff), it is blown into the nostrils for grounding and energetic clearing. As smoke (soplada), the Curandero blows it over participants to move energy, seal the auric field, or clear heavy energies. It is considered a grandfather spirit — protective and grounding. The tobacco used in our tradition is natural and ceremonial — it bears no resemblance to commercial cigarettes, which contain thousands of chemical additives. Used respectfully in ceremony, Nicotina Rustica is a powerful ally.",
      },
      {
        question: "What is Chiric Sanango?",
        answer:
          "Chiric Sanango (Brunfelsia grandiflora) is one of the most revered master plants in the Amazonian tradition. Its name comes from 'chiric' meaning 'cold' — referring to the intense cold many feel when it enters the body. It makes its way into many of the brews prepared by our healers. Chiric Sanango is associated with profound visionary experiences — many who have dieted this plant report encounters with angelic beings and luminous, otherworldly realms. It is considered a plant of the highest spiritual order, opening the door to celestial perception and deep communion with the divine.",
      },
      {
        question: "What is Uchu Sanango?",
        answer:
          "Uchu Sanango (Tabernaemontana undulata) is another powerful master plant in the Shipibo tradition, closely related to Chiric Sanango. Like its counterpart, it makes its way into many brews and is respected for its intensity. Uchu Sanango is known for producing deep visionary states and working at the level of the mind's foundations — bringing unconscious material into awareness for healing and transformation. The Sanango plants are considered among the most profound teachers in the tradition, demanding deep respect and careful dieta.",
      },
      {
        question: "What is Malva (the marshmallow plant)?",
        answer:
          "Malva — the marshmallow plant — is a gentle but powerful companion plant. Its leaves dissolve in water, becoming a gelatinous, jelly-like drink that soothes and cleanses the digestive tract and gut energy. After drinking Ayahuasca, especially through a rough night, the digestive system can be heavily worked. Malva helps settle and restore that energy — cleansing what the medicine has stirred up in the gut, both physically and energetically. It is one of the most comforting plants in the tradition, often prepared the morning after a difficult ceremony.",
      },
      {
        question: "What is Pasto Limon (lemongrass)?",
        answer:
          "Pasto Limon — lemongrass — grows wild in the Amazon with large, aromatic blades. It is one of the most helpful plants after ceremony and in the morning. The tea is calming, earthy, and grounding — helping settle the nervous system after the intensity of the night. It grows abundantly around the retreat centers and is often the first thing offered after ceremony. Its gentle, familiar warmth helps bring you back into your body and into the present moment. For many guests, a cup of Pasto Limon after ceremony becomes a small ritual of return.",
      },
      {
        question: "What is a Master Plant Dieta and how is it different from the regular retreat?",
        answer:
          "A Master Plant Dieta goes far beyond the standard retreat dieta (which is about physical preparation). In a Master Plant Dieta, you diet a specific plant in isolation — drinking its preparation daily, following strict dietary restrictions, refraining from all stimulation (no reading, no music, no conversation beyond essential needs). The plant reveals itself to you through dreams, visions, physical sensations, and direct spiritual encounter. This is the traditional path of apprenticeship. It is demanding — physically, emotionally, and spiritually. But the depth of relationship you develop with a master plant through extended dieta cannot be replicated any other way. Most Master Plant Dietas are 7-30 days.",
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
      {
        question: "Is previous experience with plant medicines required?",
        answer:
          "Not at all. Many of our most profoundly transformed guests were first-timers. What matters more than experience is sincerity, willingness, and a genuine desire for healing. That said, if you have previous experience — whether positive or difficult — we want to know about it during the application process so we can best support you. First-timers receive the same careful preparation guidance and integration support as returning guests. There is no 'you should have done this first' — you arrive exactly where you are, and the work begins from there.",
      },
      {
        question: "What is the application process like?",
        answer:
          "Apply through our Retreat Guru listing or Aya Advisors profile. You will complete an online application and a comprehensive medical form covering your health history, current medications, mental health background, previous experiences, and emergency contacts. Each application is reviewed by our team and medical advisor — typically within a few days. If there are medical questions, we may contact you for clarification or request a letter from your physician. Once approved, you will receive detailed preparation instructions, a packing list, and arrival logistics. A deposit secures your spot; the balance is due before the retreat begins.",
      },
      {
        question: "What is your privacy policy?",
        answer:
          "Your personal health information is treated with the same confidentiality as medical records. Application data is stored securely and shared only with our medical advisor on a need-to-know basis. We do not sell, share, or distribute your information to third parties. Communication is conducted over secure channels. During the retreat, what is shared in ceremony and sharing circles remains confidential among participants and staff. We take privacy seriously — this is sacred work, and trust is its foundation.",
      },
      {
        question: "Is the application form secure?",
        answer:
          "We use established, encrypted platforms (Retreat Guru and Aya Advisors) for our applications. These platforms use industry-standard SSL/TLS encryption and comply with data protection regulations. Your payment information is processed through secure payment processors — we never see or store your credit card details. If you have concerns about digital security, we can discuss alternative submission methods during the application process.",
      },
      {
        question: "Is this legal where I live?",
        answer:
          "Legal status varies by country. In Peru, the medicine is recognized as Cultural Patrimony of the Nation and is fully legal. It is also legal in Bolivia, Brazil, Ecuador, and Colombia. In the US, UK, and Australia, it is classified as Schedule 1 — however, certain churches have obtained legal exemption for ceremonial use. Portugal, Spain, and India exist in a legal grey area. The legality applies to the location of the ceremony — attending a retreat in Peru is legal regardless of your home country. What is illegal is bringing the medicine back across borders. We provide detailed guidance on this during the application process.",
      },
    ],
  },
  {
    category: "First-Timer Concerns",
    description: "The questions people ask when they're seriously considering this for the first time.",
    items: [
      {
        question: "I'm nervous — is that normal?",
        answer:
          "Completely. Walking into the unknown is supposed to feel uncomfortable — it means you're alive and paying attention. Every single person who has attended our retreats felt some version of nervousness before arriving. Fear of the unknown, fear of losing control, fear of what you might see or feel — these are the ego's defenses, and they are exactly what the work addresses. The medicine meets you where you are. Our facilitators, healers, and community support you through every moment. By the end, most guests say the fear they felt beforehand was far more intense than anything that actually happened. The courage it takes to show up is already the beginning of the healing.",
      },
      {
        question: "What if I can't handle the experience?",
        answer:
          "You can. The mind constructs the story that you cannot handle it, but this is the same mind that has already handled every difficult moment of your life up to now. Our healers and facilitators have guided hundreds of people through challenging experiences. You are never alone in the process. The purging, the tears, the fear — these are not breakdowns, they are breakthroughs. The medicine only gives you what you are ready for, and our team is trained to support you through the most intense moments. Many of our most transformed guests were the ones who were most afraid to come.",
      },
      {
        question: "Will I lose control?",
        answer:
          "This is perhaps the most common fear, and it is understandable. Here is what actually happens: in ceremony, you may feel waves of emotion, physical sensations, or visionary experiences. You may need to purge. You may cry, laugh, or feel as though you are dissolving. At no point are you ever abandoned or unsupervised. Our healers and facilitators are present throughout every ceremony, monitoring and supporting. The gradual loss of the ego's rigid control is not chaos — it is the opening that allows the healing to enter. What you gain is far more valuable than what you temporarily release: a deeper relationship with your own truth.",
      },
      {
        question: "Can I sit out a ceremony if I need to?",
        answer:
          "Yes. You always have choice. If you feel you need to sit out a ceremony, talk with a facilitator. They will help you discern whether what you are experiencing is a healthy boundary or resistance that the medicine might help dissolve. There is no pressure, no judgment, and no penalty. However, most people who consider sitting out find that once they are in the ceremony space, they are grateful they stayed. The resistance itself often contains the most important teaching.",
      },
      {
        question: "What if nothing happens — what if I don't feel anything?",
        answer:
          "This does happen occasionally, and it is not a failure. The medicine works differently for everyone — sometimes the deepest work is invisible. Some people have subtle, quiet experiences that integrate over weeks. Others have overwhelming visions on the first night. Neither is better. If the experience feels 'thin' or quiet, trust that something is still happening beneath the surface. The dieta, the environment, the ikaros, and the intention you bring all contribute — even if you don't feel dramatic effects. We also address this in our preparation guidance: the cleaner your dieta, the more sensitive you become. Follow the preparation guidance closely and trust your process.",
      },
      {
        question: "I'm coming from a corporate background — will I fit in?",
        answer:
          "You would be surprised how many of our guests are exactly in your position: professionals, executives, engineers, therapists, entrepreneurs — people who have built successful external lives but feel a quiet emptiness or longing that success didn't fill. The teaching does not require you to abandon your life, your career, or your identity. It offers you a deeper foundation for all of those things. Our retreats attract people from every walk of life, and the shared vulnerability of the ceremony space dissolves the usual social categories. You will meet people who speak your language — even if they don't work in your industry.",
      },
      {
        question: "What if my family or friends think I'm crazy for doing this?",
        answer:
          "This is more common than you might think. Plant medicine retreats are still outside the mainstream, and people who love you may worry. You do not need to convince anyone. Share what you feel comfortable sharing. Many guests tell only their closest, most trusted people before the retreat — and share more openly afterward, when they can speak from direct experience. Your healing journey is yours. You can also point skeptical loved ones to our FAQ page, or schedule a discovery call where Kenney can address their questions directly.",
      },
    ],
  },
];
