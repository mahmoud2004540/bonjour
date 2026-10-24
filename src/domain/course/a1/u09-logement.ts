import { l10n as t, type CourseUnit } from "../types";

export const A1_U09: CourseUnit = {
  id: "fr-a1-u09-logement",
  level: "A1",
  order: 9,
  title: t("At home", "Chez moi", "في بيتي"),
  theme: t(
    "Describing a home, visiting a flat, furniture and location",
    "Décrire un logement, visiter un appartement, les meubles et la localisation",
    "وصف المسكن، وزيارة شقة، والأثاث وتحديد الأماكن"
  ),
  canDo: [
    t("I can describe my home (rooms, size, floor).", "Je peux décrire mon logement (pièces, surface, étage).", "أستطيع أن أصف مسكني (الغرف، والمساحة، والطابق)."),
    t("I can say where objects are in a room.", "Je peux dire où sont les objets dans une pièce.", "أستطيع أن أقول أين توجد الأشياء في الغرفة."),
    t("I can ask questions when visiting a flat (rent, furniture, area).", "Je peux poser des questions pendant une visite (loyer, meubles, quartier).", "أستطيع أن أطرح أسئلة عند زيارة شقة (الإيجار، والأثاث، والحي)."),
    t("I can understand a simple flat advertisement.", "Je peux comprendre une petite annonce de logement simple.", "أستطيع أن أفهم إعلانًا بسيطًا عن مسكن."),
  ],
  context: t(
    "Youssef has found a new job in Rennes and is looking for a flat. He visits a two-room flat with the owner, Mrs Garnier.",
    "Youssef a trouvé un nouveau travail à Rennes et il cherche un appartement. Il visite un deux-pièces avec la propriétaire, Mme Garnier.",
    "وجد يوسف عملًا جديدًا في مدينة رين، وهو يبحث عن شقة. فيزور شقة من غرفتين مع المالكة السيدة غارنييه."
  ),
  dialogue: {
    title: t("Visiting a flat", "La visite de l'appartement", "زيارة الشقة"),
    setting: t("A building in the centre of Rennes", "Un immeuble du centre de Rennes", "عمارة في وسط مدينة رين"),
    lines: [
      { speaker: "Mme Garnier", fr: "Bonjour ! Vous êtes monsieur Amrani ? Entrez, je vous en prie." },
      { speaker: "Youssef", fr: "Bonjour, madame. Merci." },
      { speaker: "Mme Garnier", fr: "Voilà l'appartement. Il est au troisième étage, avec un ascenseur." },
      { speaker: "Youssef", fr: "Il fait combien de mètres carrés ?" },
      { speaker: "Mme Garnier", fr: "Quarante-cinq mètres carrés. Ici, c'est le salon. Il est grand et très clair." },
      { speaker: "Youssef", fr: "Oui, il y a deux grandes fenêtres. Et la cuisine ?" },
      { speaker: "Mme Garnier", fr: "Elle est à côté du salon. Elle est petite, mais elle est équipée : il y a un frigo, un four et un lave-vaisselle." },
      { speaker: "Youssef", fr: "Et la chambre ?" },
      { speaker: "Mme Garnier", fr: "Elle est au fond du couloir, en face de la salle de bains. Il y a un grand placard." },
      { speaker: "Youssef", fr: "L'appartement est meublé ?" },
      { speaker: "Mme Garnier", fr: "Non, il n'est pas meublé. Mais il y a des étagères dans le salon." },
      { speaker: "Youssef", fr: "Le quartier est calme ?" },
      { speaker: "Mme Garnier", fr: "Oui, très calme. Et il y a un arrêt de métro devant l'immeuble." },
      { speaker: "Youssef", fr: "Et le loyer, c'est combien ?" },
      { speaker: "Mme Garnier", fr: "Sept cent cinquante euros par mois, charges comprises." },
      { speaker: "Youssef", fr: "C'est parfait. Je suis très intéressé !" },
    ],
  },
  comprehension: [
    { kind: "choice", id: "u09-c1", prompt: t("On which floor is the flat?", "À quel étage est l'appartement ?", "في أي طابق الشقة؟"), optionsL10n: { en: ["Ground floor", "Third floor", "Fifth floor"], fr: ["Au rez-de-chaussée", "Au troisième étage", "Au cinquième étage"], ar: ["الطابق الأرضي", "الطابق الثالث", "الطابق الخامس"] }, correctIndex: 1 },
    { kind: "choice", id: "u09-c2", prompt: t("How big is it?", "Quelle est sa surface ?", "ما مساحتها؟"), options: ["35 m²", "45 m²", "75 m²"], correctIndex: 1 },
    { kind: "choice", id: "u09-c3", prompt: t("Is the flat furnished?", "L'appartement est-il meublé ?", "هل الشقة مفروشة؟"), optionsL10n: { en: ["Yes, completely", "No, but there are shelves", "Only the bedroom"], fr: ["Oui, complètement", "Non, mais il y a des étagères", "Seulement la chambre"], ar: ["نعم، بالكامل", "لا، لكن توجد رفوف", "غرفة النوم فقط"] }, correctIndex: 1 },
    { kind: "choice", id: "u09-c4", prompt: t("What does « charges comprises » mean?", "Que signifie « charges comprises » ?", "ماذا تعني «charges comprises»؟"), optionsL10n: { en: ["Building costs are included in the rent.", "Electricity is free.", "There is a deposit."], fr: ["Les frais de l'immeuble sont inclus dans le loyer.", "L'électricité est gratuite.", "Il y a une caution."], ar: ["مصاريف العمارة مشمولة في الإيجار.", "الكهرباء مجانية.", "يوجد مبلغ تأمين."] }, correctIndex: 0 },
  ],
  vocabulary: [
    {
      title: t("Rooms", "Les pièces", "الغرف"),
      items: [
        { fr: "l'appartement", gender: "m", meaning: t("flat, apartment", "logement dans un immeuble", "الشقة") },
        { fr: "la maison", gender: "f", meaning: t("house", "logement individuel", "المنزل") },
        { fr: "le salon", gender: "m", meaning: t("living room", "pièce pour se reposer, recevoir", "غرفة الجلوس") },
        { fr: "la chambre", gender: "f", meaning: t("bedroom", "pièce pour dormir", "غرفة النوم") },
        { fr: "la cuisine", gender: "f", meaning: t("kitchen", "pièce pour cuisiner", "المطبخ") },
        { fr: "la salle de bains", gender: "f", meaning: t("bathroom", "pièce avec douche ou baignoire", "الحمّام") },
        { fr: "les toilettes", gender: "pl", meaning: t("toilet", "WC", "دورة المياه") },
        { fr: "le couloir", gender: "m", meaning: t("corridor", "passage entre les pièces", "الممرّ") },
        { fr: "l'étage / le rez-de-chaussée", gender: "m", meaning: t("floor / ground floor", "niveau d'un immeuble", "الطابق / الطابق الأرضي") },
        { fr: "le balcon", gender: "m", meaning: t("balcony", "petite terrasse", "الشرفة") },
      ],
    },
    {
      title: t("Furniture and description", "Meubles et description", "الأثاث والوصف"),
      items: [
        { fr: "le lit", gender: "m", meaning: t("bed", "meuble pour dormir", "السرير") },
        { fr: "la table / la chaise", gender: "f", meaning: t("table / chair", "meubles", "الطاولة / الكرسي") },
        { fr: "le canapé", gender: "m", meaning: t("sofa", "grand siège", "الأريكة") },
        { fr: "l'armoire / le placard", meaning: t("wardrobe / cupboard", "meubles de rangement", "خزانة الملابس / الخزانة الجدارية") },
        { fr: "l'étagère", gender: "f", meaning: t("shelf", "planche de rangement", "الرفّ") },
        { fr: "meublé / meublée", meaning: t("furnished", "avec des meubles", "مفروش / مفروشة") },
        { fr: "clair / sombre", meaning: t("bright / dark", "avec / sans beaucoup de lumière", "مضيء / مظلم") },
        { fr: "calme / bruyant", meaning: t("quiet / noisy", "sans / avec du bruit", "هادئ / صاخب") },
        { fr: "le loyer", gender: "m", meaning: t("rent", "somme payée chaque mois", "الإيجار") },
        { fr: "les charges", gender: "pl", meaning: t("building / service costs", "eau, entretien de l'immeuble…", "المصاريف المشتركة") },
      ],
    },
  ],
  grammar: [
    {
      id: "u09-g1",
      title: t("Prepositions of place", "Les prépositions de lieu", "حروف الجر الدالة على المكان"),
      explanation: t(
        "To say where something is: sur (on), sous (under), dans (in), devant (in front of), derrière (behind), entre (between), à côté de (next to), en face de (opposite), au fond de (at the end of), au-dessus de (above). Remember the contractions: à côté du salon, en face des fenêtres.",
        "Pour situer un objet : sur, sous, dans, devant, derrière, entre, à côté de, en face de, au fond de, au-dessus de. N'oubliez pas les contractions : à côté du salon, en face des fenêtres.",
        "لتحديد مكان شيء ما: sur (على)، sous (تحت)، dans (في / داخل)، devant (أمام)، derrière (خلف)، entre (بين)، à côté de (بجانب)، en face de (مقابل)، au fond de (في آخر)، au-dessus de (فوق). وتذكّر الاندماج: à côté du salon، en face des fenêtres."
      ),
      examples: [
        { fr: "Les livres sont sur l'étagère.", gloss: t("The books are on the shelf.", "sur.", "الكتب على الرف.") },
        { fr: "Le chat dort sous le lit.", gloss: t("The cat sleeps under the bed.", "sous.", "القطّ ينام تحت السرير.") },
        { fr: "La table est entre le canapé et la fenêtre.", gloss: t("The table is between the sofa and the window.", "entre … et …", "الطاولة بين الأريكة والنافذة.") },
      ],
    },
    {
      id: "u09-g2",
      title: t("Adjectives: agreement and position", "Les adjectifs : accord et place", "الصفات: التوافق والموقع"),
      explanation: t(
        "Adjectives agree with the noun (+ e for feminine, + s for plural): un salon clair, une cuisine claire, des chambres claires. Most adjectives come after the noun: un quartier calme. Some short, very common adjectives come before: grand, petit, beau, joli, bon, nouveau, vieux, jeune. Beau, nouveau and vieux have a special form before a masculine vowel: un bel appartement, un nouvel immeuble, un vieil immeuble.",
        "L'adjectif s'accorde avec le nom (+ e au féminin, + s au pluriel) : un salon clair, une cuisine claire, des chambres claires. La plupart des adjectifs se placent après le nom : un quartier calme. Quelques adjectifs courts et très fréquents se placent avant : grand, petit, beau, joli, bon, nouveau, vieux, jeune. Beau, nouveau et vieux ont une forme spéciale devant un nom masculin à voyelle : un bel appartement, un nouvel immeuble, un vieil immeuble.",
        "تتوافق الصفة مع الاسم (+ e للمؤنّث و+ s للجمع): un salon clair، une cuisine claire، des chambres claires. ومعظم الصفات تأتي بعد الاسم: un quartier calme. لكن بعض الصفات القصيرة الشائعة جدًا تأتي قبله: grand وpetit وbeau وjoli وbon وnouveau وvieux وjeune. وللصفات beau وnouveau وvieux صيغة خاصة قبل اسم مذكّر يبدأ بحرف متحرّك: un bel appartement، un nouvel immeuble، un vieil immeuble."
      ),
      table: {
        head: ["masculin", "masc. + voyelle", "féminin"],
        rows: [
          ["beau", "bel", "belle"],
          ["nouveau", "nouvel", "nouvelle"],
          ["vieux", "vieil", "vieille"],
        ],
      },
      examples: [
        { fr: "C'est un petit appartement lumineux.", gloss: t("It's a small, bright flat.", "petit avant, lumineux après.", "إنها شقة صغيرة مضيئة.") },
        { fr: "Ils habitent dans une belle maison ancienne.", gloss: t("They live in a beautiful old house.", "belle avant, ancienne après.", "يسكنون في منزل قديم جميل.") },
      ],
      watchOut: t(
        "Before a plural adjective, « des » becomes « de » in careful French: de grandes fenêtres (you will often hear « des grandes fenêtres » in speech).",
        "Devant un adjectif au pluriel, « des » devient « de » à l'écrit soigné : de grandes fenêtres (à l'oral, on entend souvent « des grandes fenêtres »).",
        "قبل صفة بصيغة الجمع تتحوّل «des» إلى «de» في الفرنسية المكتوبة المتأنّية: de grandes fenêtres (وفي الكلام تُسمع كثيرًا «des grandes fenêtres»)."
      ),
    },
    {
      id: "u09-g3",
      title: t("Ordinal numbers and numbers above 100", "Les nombres ordinaux et les nombres après 100", "الأعداد الترتيبية والأعداد بعد 100"),
      explanation: t(
        "To make an ordinal, add -ième to the number: deux → deuxième, trois → troisième, quatre → quatrième (drop the final e), cinq → cinquième (add u), neuf → neuvième (f → v). But « premier / première » for first. Floors: au rez-de-chaussée, au premier étage, au deuxième étage. Hundreds: cent, deux cents, sept cent cinquante (no s when another number follows), mille (never takes s): deux mille.",
        "Pour former un ordinal, on ajoute -ième : deux → deuxième, trois → troisième, quatre → quatrième (sans le e), cinq → cinquième (+ u), neuf → neuvième (f → v). Mais on dit « premier / première ». Les étages : au rez-de-chaussée, au premier étage, au deuxième étage. Les centaines : cent, deux cents, sept cent cinquante (pas de s si un autre nombre suit), mille (toujours sans s) : deux mille.",
        "لتكوين العدد الترتيبي نضيف -ième إلى العدد: deux ← deuxième، وtrois ← troisième، وquatre ← quatrième (مع حذف e الأخيرة)، وcinq ← cinquième (بإضافة u)، وneuf ← neuvième (f تصبح v). لكن نقول «premier / première» للأول. والطوابق: au rez-de-chaussée، au premier étage، au deuxième étage. والمئات: cent، deux cents، sept cent cinquante (بلا s إذا تبعها عدد آخر)، وmille لا تأخذ s أبدًا: deux mille."
      ),
      examples: [
        { fr: "J'habite au cinquième étage.", gloss: t("I live on the fifth floor.", "cinq → cinquième.", "أسكن في الطابق الخامس.") },
        { fr: "Le loyer est de neuf cent vingt euros.", gloss: t("The rent is 920 euros.", "cent sans s.", "الإيجار 920 يورو.") },
        { fr: "Trois cents euros de charges, c'est cher !", gloss: t("300 euros of charges is expensive!", "trois cents avec s.", "300 يورو مصاريف، هذا غالٍ!") },
      ],
    },
  ],
  pronunciation: {
    title: t("[ʃ] in « chambre » and [ʒ] in « étage »", "[ʃ] (chambre) et [ʒ] (étage)", "الصوت [ʃ] في «chambre» والصوت [ʒ] في «étage»"),
    explanation: t(
      "[ʃ] (ch) is like English « sh »: chambre, charges, chaise, douche. [ʒ] (j, or g before e/i) is like the « s » in « measure »: étage, jardin, garage, rouge. [ʃ] is voiceless; for [ʒ], your throat vibrates.",
      "[ʃ] (ch) : chambre, charges, chaise, douche. [ʒ] (j, ou g devant e, i) : étage, jardin, garage, rouge. Pour [ʃ], la gorge ne vibre pas ; pour [ʒ], elle vibre.",
      "الصوت [ʃ] (ch) يشبه حرف «ش»: chambre، charges، chaise، douche. والصوت [ʒ] (j، أو g قبل e وi) يشبه «ج» الشامية الخفيفة: étage، jardin، garage، rouge. مع [ʃ] لا يهتزّ الحلق، أما مع [ʒ] فيهتزّ."
    ),
    examples: ["la chambre", "les charges", "la douche", "l'étage", "le jardin", "Le garage est à côté de la chambre."],
  },
  culture: {
    title: t("Renting a flat in France", "Louer un logement en France", "استئجار مسكن في فرنسا"),
    body: t(
      "Adverts describe flats by number of main rooms: a « T2 » or « deux-pièces » has a living room and one bedroom (kitchen and bathroom aren't counted). Size is given in m². The rent is often shown « charges comprises » (CC) or « hors charges » (HC). Landlords ask for a « dossier » (ID, payslips, sometimes a guarantor). For an unfurnished flat, the deposit (« dépôt de garantie ») is at most one month's rent without charges. An « état des lieux » (inspection report) is done when you move in and out. Tenants may receive housing benefit from the CAF.",
      "Les annonces décrivent les logements par nombre de pièces principales : un T2 ou « deux-pièces » a un salon et une chambre (la cuisine et la salle de bains ne comptent pas). La surface est en m². Le loyer est indiqué « charges comprises » (CC) ou « hors charges » (HC). Le propriétaire demande un dossier (pièce d'identité, fiches de paie, parfois un garant). Pour un logement vide, le dépôt de garantie est au maximum d'un mois de loyer hors charges. On fait un état des lieux à l'entrée et à la sortie. Les locataires peuvent recevoir une aide au logement de la CAF.",
      "تصف الإعلانات المساكن بعدد الغرف الرئيسية: فشقة «T2» أو «deux-pièces» فيها غرفة جلوس وغرفة نوم واحدة (لا يُحتسب المطبخ ولا الحمّام). وتُذكر المساحة بالمتر المربّع. ويُكتب الإيجار «charges comprises» (CC، شاملًا المصاريف) أو «hors charges» (HC، من دونها). ويطلب المالك «ملفًا» (وثيقة هوية، وكشوف رواتب، وأحيانًا كفيلًا). وفي المسكن غير المفروش لا يتجاوز مبلغ التأمين («dépôt de garantie») إيجار شهر واحد من دون المصاريف. ويُعدّ «état des lieux» (محضر حالة المسكن) عند الدخول وعند الخروج. ويمكن للمستأجرين الحصول على إعانة سكن من مؤسسة CAF."
    ),
  },
  practice: [
    { kind: "fill", id: "u09-p1", prompt: t("Preposition: the books are ON the table.", "Préposition : les livres sont SUR la table.", "حرف الجر: الكتب «على» الطاولة."), sentence: "Les livres sont ___ la table.", answers: ["sur"] },
    { kind: "fill", id: "u09-p2", prompt: t("Preposition: the shoes are UNDER the bed.", "Préposition : les chaussures sont SOUS le lit.", "حرف الجر: الأحذية «تحت» السرير."), sentence: "Les chaussures sont ___ le lit.", answers: ["sous"] },
    { kind: "fill", id: "u09-p3", prompt: t("Complete: next to the kitchen.", "Complétez : à côté de la cuisine.", "أكمل: بجانب المطبخ."), sentence: "La salle de bains est à côté ___ salon.", answers: ["du"] },
    { kind: "fill", id: "u09-p4", prompt: t("Make the adjective agree.", "Accordez l'adjectif.", "اجعل الصفة متوافقة."), sentence: "Une cuisine (clair) → une cuisine ___", answers: ["claire"] },
    { kind: "fill", id: "u09-p5", prompt: t("Special form of beau.", "Forme spéciale de beau.", "الصيغة الخاصة لـbeau."), sentence: "C'est un ___ appartement.", answers: ["bel"] },
    { kind: "fill", id: "u09-p6", prompt: t("Ordinal of 5.", "Ordinal de 5.", "الترتيبي من 5."), sentence: "Il habite au ___ étage.", answers: ["cinquième"] },
    { kind: "fill", id: "u09-p7", prompt: t("Write 200 in letters.", "Écrivez 200 en lettres.", "اكتب 200 بالحروف."), answers: ["deux cents"] },
    { kind: "choice", id: "u09-p8", prompt: t("Choose the correct order.", "Choisissez le bon ordre.", "اختر الترتيب الصحيح."), options: ["un calme quartier", "un quartier calme", "un quartier calmes"], correctIndex: 1 },
    { kind: "choice", id: "u09-p9", prompt: t("A « T3 » has…", "Un T3 a…", "شقة «T3» فيها…"), optionsL10n: { en: ["three main rooms (e.g. living room + 2 bedrooms)", "three floors", "three bathrooms"], fr: ["trois pièces principales (salon + 2 chambres)", "trois étages", "trois salles de bains"], ar: ["ثلاث غرف رئيسية (غرفة جلوس + غرفتا نوم)", "ثلاثة طوابق", "ثلاثة حمّامات"] }, correctIndex: 0 },
    { kind: "order", id: "u09-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "L'appartement est au troisième étage." },
    { kind: "order", id: "u09-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Le loyer, c'est combien ?" },
  ],
  production: {
    prompt: t(
      "Write a short advert (« petite annonce ») to rent your flat or house, or describe your ideal home: type, size, floor, rooms, furniture, area, rent.",
      "Écrivez une petite annonce pour louer votre appartement ou votre maison, ou décrivez votre logement idéal : type, surface, étage, pièces, meubles, quartier, loyer.",
      "اكتب إعلانًا قصيرًا («petite annonce») لتأجير شقتك أو منزلك، أو صِف مسكنك المثالي: النوع، والمساحة، والطابق، والغرف، والأثاث، والحي، والإيجار."
    ),
    model: "À louer : bel appartement T2 de 50 m², au deuxième étage avec ascenseur. Grand salon clair, cuisine équipée, une chambre avec placard, salle de bains avec douche. Non meublé. Quartier calme, à cinq minutes de la gare. Loyer : 820 € charges comprises.",
    checklist: [
      t("I give the size in m² and the floor.", "Je donne la surface en m² et l'étage.", "ذكرت المساحة بالمتر المربّع والطابق."),
      t("I name at least four rooms.", "Je nomme au moins quatre pièces.", "ذكرت أربع غرف على الأقل."),
      t("My adjectives agree and are in the right place.", "Mes adjectifs sont accordés et bien placés.", "صفاتي متوافقة وفي موضعها الصحيح."),
      t("I give the rent (with or without charges).", "Je donne le loyer (charges comprises ou non).", "ذكرت الإيجار (مع المصاريف أو من دونها)."),
    ],
  },
  task: {
    title: t("Read real adverts", "Lire de vraies annonces", "اقرأ إعلانات حقيقية"),
    brief: t(
      "Look at three real flat adverts on a French website (for a city you like). For each, note: type (T1, T2…), size, floor, rent, CC or HC. Choose one and explain aloud why you would visit it.",
      "Regardez trois vraies annonces de logement sur un site français (pour une ville que vous aimez). Pour chacune, notez : type (T1, T2…), surface, étage, loyer, CC ou HC. Choisissez-en une et expliquez à voix haute pourquoi vous voulez la visiter.",
      "اطّلع على ثلاثة إعلانات حقيقية لمساكن في موقع فرنسي (لمدينة تحبّها). دوّن لكل منها: النوع (T1، T2…)، والمساحة، والطابق، والإيجار، وهل هو CC أم HC. ثم اختر واحدًا واشرح بصوت عالٍ لماذا تريد زيارته."
    ),
    checklist: [
      t("I understood the abbreviations (T2, m², CC, HC).", "J'ai compris les abréviations (T2, m², CC, HC).", "فهمت الاختصارات (T2، m²، CC، HC)."),
      t("I compared three adverts.", "J'ai comparé trois annonces.", "قارنت بين ثلاثة إعلانات."),
      t("I gave two reasons for my choice.", "J'ai donné deux raisons pour mon choix.", "ذكرت سببين لاختياري."),
    ],
  },
  test: [
    { kind: "choice", id: "u09-t1", prompt: t("The cat is UNDER the table:", "Le chat est SOUS la table :", "القطّ «تحت» الطاولة:"), options: ["sur la table", "sous la table", "dans la table"], correctIndex: 1 },
    { kind: "choice", id: "u09-t2", prompt: t("« La chambre est en face ___ salle de bains. »", "« La chambre est en face ___ salle de bains. »", "«La chambre est en face ___ salle de bains.»"), options: ["du", "de la", "des"], correctIndex: 1 },
    { kind: "choice", id: "u09-t3", prompt: t("Choose the correct phrase.", "Choisissez la bonne expression.", "اختر العبارة الصحيحة."), options: ["un nouveau immeuble", "un nouvel immeuble", "un nouvelle immeuble"], correctIndex: 1 },
    { kind: "choice", id: "u09-t4", prompt: t("Choose the correct phrase.", "Choisissez la bonne expression.", "اختر العبارة الصحيحة."), options: ["une maison grande", "une grande maison", "une grand maison"], correctIndex: 1 },
    { kind: "choice", id: "u09-t5", prompt: t("« Des chambres (clair) »:", "« Des chambres (clair) » :", "«Des chambres (clair)»:"), options: ["clair", "claire", "claires"], correctIndex: 2 },
    { kind: "choice", id: "u09-t6", prompt: t("The 1st floor:", "Le 1er étage :", "الطابق الأول:"), options: ["le unième étage", "le premier étage", "le un étage"], correctIndex: 1 },
    { kind: "choice", id: "u09-t7", prompt: t("650 € is:", "650 €, c'est :", "650 يورو تُكتب:"), options: ["six cents cinquante euros", "six cent cinquante euros", "six cent et cinquante euros"], correctIndex: 1 },
    { kind: "choice", id: "u09-t8", prompt: t("Where do you sleep?", "Où dort-on ?", "أين ننام؟"), options: ["dans la cuisine", "dans la chambre", "dans le couloir"], correctIndex: 1 },
    { kind: "choice", id: "u09-t9", prompt: t("Which word has the sound [ʒ]?", "Quel mot contient le son [ʒ] ?", "أي كلمة فيها الصوت [ʒ]؟"), options: ["chambre", "étage", "douche"], correctIndex: 1 },
    { kind: "choice", id: "u09-t10", prompt: t("« Loyer 700 € HC » means:", "« Loyer 700 € HC » signifie :", "«Loyer 700 € HC» تعني:"), optionsL10n: { en: ["700 € without building charges", "700 € including charges", "700 € per year"], fr: ["700 € sans les charges", "700 € charges comprises", "700 € par an"], ar: ["700 يورو من دون المصاريف", "700 يورو شاملة المصاريف", "700 يورو في السنة"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
  replaces: ["fr-a1-more-home"],
};
