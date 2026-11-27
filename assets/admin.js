// Smart Auto-Inference for Pious Associations / Pastoral Wings
function inferPiousWingDetails(name) {
  if (!name || typeof name !== 'string') {
    return {
      icon: 'fa-hands-helping',
      tag: 'Parish Ministry',
      subtitle: '',
      desc: 'Dedicated parish organization serving spiritual life, fellowship, and community ministry.'
    };
  }

  const s = name.toLowerCase();

  // 1. Charity / St Vincent de Paul
  if (s.includes('vincent') || s.includes('svp') || s.includes('charity') || s.includes('relief') || s.includes('poor') || s.includes('mercy') || s.includes('samaritan') || s.includes('care')) {
    return {
      icon: 'fa-hand-holding-heart',
      tag: 'Charity & Relief',
      subtitle: s.includes('vincent') ? 'St. Vincent de Paul Society (SVP)' : 'Parish Charity & Mercy Outreach',
      desc: 'Providing compassionate care, medical aid, sustenance support, and emergency relief to parish and local community families in need.'
    };
  }

  // 2. Mothers / Women / Mathruvedi
  if (s.includes('mathru') || s.includes('mother') || s.includes('women') || s.includes('ladies') || s.includes('vanitha') || s.includes('st. anne') || s.includes('st anne') || s.includes('monica')) {
    return {
      icon: 'fa-dove',
      tag: 'Family Ministry',
      subtitle: "Mothers' Guild & Marian Family Fellowship",
      desc: 'Fostering Christian motherhood, domestic prayers, altar support, family sanctification, and pastoral solidarity among parish mothers.'
    };
  }

  // 3. Fathers / Men / Pithruvedi
  if (s.includes('pithru') || s.includes('father') || s.includes('men') || s.includes('joseph') || s.includes('purusha')) {
    return {
      icon: 'fa-shield-alt',
      tag: 'Parish Guardians',
      subtitle: "Fathers' Guild & Temporal Leadership",
      desc: 'Catholic fathers committed to spiritual leadership, temporal parish guardianship, feast coordination, and youth mentoring.'
    };
  }

  // 4. Youth / SMYM / KCYM / Teens / Young Adults
  if (s.includes('smym') || s.includes('kcym') || s.includes('youth') || s.includes('teen') || s.includes('young') || s.includes('yuva') || s.includes('yuvathi') || s.includes('yuvajanam')) {
    return {
      icon: 'fa-fire',
      tag: 'Youth Movement',
      subtitle: s.includes('smym') ? 'Syro-Malabar Youth Movement' : 'Parish Catholic Youth Wing',
      desc: 'Energizing parish youth through active gospel witness, humanitarian service, sports, creative arts, and leadership conventions.'
    };
  }

  // 5. Choir / Music / Choral
  if (s.includes('choir') || s.includes('music') || s.includes('choral') || s.includes('sing') || s.includes('hymn') || s.includes('voice') || s.includes('organ') || s.includes('band')) {
    return {
      icon: 'fa-music',
      tag: 'Sacred Choral',
      subtitle: 'Parish Liturgical Choir & Sacred Melody',
      desc: 'Leading celestial East-Syriac and liturgical hymns, sacred choral psalms, and solemn devotion during Holy Qurbana and festive liturgies.'
    };
  }

  // 6. Legion of Mary / Marian / Rosary / Our Lady
  if (s.includes('legion') || s.includes('mary') || s.includes('marian') || s.includes('rosary') || s.includes('matha') || s.includes('our lady') || s.includes('madonna') || s.includes('immaculate')) {
    return {
      icon: 'fa-crown',
      tag: 'Marian Devotion',
      subtitle: s.includes('legion') ? 'Legion of Mary' : 'Marian Devotional Guild',
      desc: 'Dedicated to prayer, spiritual warfare through the Holy Rosary, home visitations, and comforting elderly and homebound parishioners.'
    };
  }

  // 7. Mission League / CML / Children's Mission
  if (s.includes('mission') || s.includes('cml') || s.includes('cherupushpa') || s.includes('therese') || s.includes('theresa') || s.includes('little flower')) {
    return {
      icon: 'fa-child-reaching',
      tag: 'Mission League',
      subtitle: 'Cherupushpa Mission League (CML)',
      desc: 'Inspiring children and adolescents with love for world missions, spiritual self-sacrifice, and evangelical charity in the spirit of St. Thérèse.'
    };
  }

  // 8. Catechism / Sunday School / Faith Formation
  if (s.includes('catechism') || s.includes('sunday school') || s.includes('faith') || s.includes('formation') || s.includes('teacher') || s.includes('bible')) {
    return {
      icon: 'fa-book-bible',
      tag: 'Faith Formation',
      subtitle: 'Parish Catechetical & Scripture Ministry',
      desc: 'Nurturing children and youth in Catholic doctrine, Sacred Scripture, moral teachings, and deep sacramental initiation.'
    };
  }

  // 9. Altar Servers / Alter Boys / Knights of the Altar
  if (s.includes('altar') || s.includes('server') || s.includes('acolyte') || s.includes('sacristan')) {
    return {
      icon: 'fa-cross',
      tag: 'Liturgical Service',
      subtitle: 'Knights of the Altar & Sacramental Guild',
      desc: 'Assisting the priests reverently during Holy Mass, novenas, liturgical processions, and Eucharistic celebrations.'
    };
  }

  // 10. Senior Citizens / Elders / Grandparents
  if (s.includes('elder') || s.includes('senior') || s.includes('grandparent') || s.includes('pensioner') || s.includes('golden')) {
    return {
      icon: 'fa-heart',
      tag: 'Senior Ministry',
      subtitle: 'Elders & Senior Parishioners Fellowship',
      desc: 'Honoring senior parishioners with pastoral care, fellowship circles, spiritual retreats, and companionship.'
    };
  }

  // 11. Family Units / Ward Prayer / Kudumbakootayma
  if (s.includes('ward') || s.includes('unit') || s.includes('kootayma') || s.includes('bhavan') || s.includes('family unit')) {
    return {
      icon: 'fa-people-roof',
      tag: 'Family Units',
      subtitle: 'Basic Christian Community (BCC)',
      desc: 'Promoting grassroots Christian fellowship, weekly ward rosaries, mutual assistance, and vibrant neighborhood fraternity.'
    };
  }

  // 12. Eucharistic / Adoration / Blessed Sacrament
  if (s.includes('eucharist') || s.includes('adoration') || s.includes('sacrament') || s.includes('monstrance') || s.includes('perpetual')) {
    return {
      icon: 'fa-sun',
      tag: 'Eucharistic Adoration',
      subtitle: 'Perpetual Adoration & Intercession Wing',
      desc: 'Fostering continuous prayer, silent contemplation, and adoration before the Most Blessed Sacrament for church and world intentions.'
    };
  }

  // 13. Health / Medical / Healing Ministry
  if (s.includes('health') || s.includes('medical') || s.includes('doctor') || s.includes('nurse') || s.includes('clinic') || s.includes('healing')) {
    return {
      icon: 'fa-kit-medical',
      tag: 'Health & Wellness',
      subtitle: 'Parish Health & Medical Guild',
      desc: 'Organizing medical camps, emergency health support, free health screenings, and wellness counsel for parishioners.'
    };
  }

  // 14. Media / Communication / Tech / IT Wing
  if (s.includes('media') || s.includes('press') || s.includes('tech') || s.includes('broadcast') || s.includes('communication') || s.includes('it wing')) {
    return {
      icon: 'fa-video',
      tag: 'Media & Digital',
      subtitle: 'Parish Digital & Media Communications',
      desc: 'Managing parish digital outreach, livestreaming sacred liturgies, website updates, event photography, and bulletin publication.'
    };
  }

  // 15. St. Thomas / Apostles / Patron
  if (s.includes('thomas') || s.includes('apostle') || s.includes('patron')) {
    return {
      icon: 'fa-landmark',
      tag: 'Apostolic Guild',
      subtitle: 'Apostle St. Thomas Patronal Fellowship',
      desc: 'Preserving the deep heritage, spiritual fervor, and apostolic traditions inherited from our patron Saint Thomas the Apostle.'
    };
  }

  // Default fallback for any other holy / lay society
  return {
    icon: 'fa-hands-helping',
    tag: 'Parish Ministry',
    subtitle: name,
    desc: `Active pastoral association dedicated to prayer, Christian service, and fellowship in St. Thomas Parish Chempu.`
  };
}
// Controls full section content synchronization with LocalStorage

const STORAGE_KEY = 'st_thomas_chempu_site_config';
const INTENTIONS_KEY = 'st_thomas_prayer_intentions';
const NAV_ITEMS_KEY = 'st_thomas_nav_items';
const FEASTS_KEY = 'st_thomas_parish_feasts';
const HIGHLIGHTS_KEY = 'st_thomas_feast_highlights';
const WINGS_KEY = 'st_thomas_pious_wings';
const VICARS_KEY = 'st_thomas_former_vicars';
const VOCATIONS_KEY = 'st_thomas_parish_vocations';
const GALLERY_KEY = 'st_thomas_gallery';

// Default Former Parish Vicars (Chronological pastoral lineage)
const DEFAULT_FORMER_VICARS = [
  {
    name: 'Rev. Fr. Sebastian Thottappilly',
    years: '1971 – 1980',
    photo: 'assets/images/fr_sebastian_thottappilly.jpg',
    note: 'Pastoral ministry, spiritual shepherd & church renovation visionary'
  },
  {
    name: 'Rev. Fr. Joseph Chakiyath',
    years: '1980 – 1982',
    photo: 'assets/images/fr_joseph_chakiyath.jpg',
    note: 'Vicar at 1981 Blessing & Dedication of Renovated Church'
  },
  {
    name: 'Rev. Fr. George Pananjickal',
    years: '1982 – 1989',
    photo: 'assets/images/fr_george_pananjickal.jpg',
    note: 'Pastoral care, spiritual leadership, and parish ministry'
  },
  {
    name: 'Rev. Fr. George Payyappally',
    years: '1989',
    photo: 'assets/images/fr_george_payyappally.jpg',
    note: 'Devoted pastoral ministry and sacramental service'
  },
  {
    name: 'Mar Jacob Manathodath',
    years: '1989 – 1990',
    photo: 'assets/images/fr_jacob_manathodath.jpg',
    note: 'Parish Vicar; subsequently consecrated Bishop of Palakkad'
  },
  {
    name: 'Rev. Fr. Hormis Mynatti',
    years: '1990 – 1991',
    photo: 'assets/images/fr_hormis_mynatti.jpg',
    note: 'Spiritual guidance, pastoral shepherding, and community devotion'
  },
  {
    name: 'Rev. Fr. George Manguzhikari',
    years: '1991 – 1996',
    photo: 'assets/images/fr_george_manguzhikari.jpg',
    note: 'Pastoral governance, family welfare, and parish fellowship'
  },
  {
    name: 'Rev. Fr. Paul Kanjirakkattukari',
    years: '1996 – 1999',
    photo: 'assets/images/fr_paul_kanjirakkattukari.jpg',
    note: 'Faith leadership, pastoral guidance, and liturgical life'
  },
  {
    name: 'Rev. Fr. John Thekkanathu',
    years: '1999 – 2000',
    photo: 'assets/images/fr_john_thekkanath.jpg',
    note: 'Devoted pastoral ministry and sacramental leadership'
  },
  {
    name: 'Rev. Fr. Jose Vailikodathu',
    years: '2000 – 2005',
    photo: 'assets/images/fr_jose_vailikodathu.jpg',
    note: 'Pastoral shepherding, youth ministry, and spiritual renewal'
  },
  {
    name: 'Rev. Fr. Xavier Avallil',
    years: '2005 – 2012',
    photo: 'assets/images/fr_xavier_avallil.jpg',
    note: 'Church renovation & front Portico (mondalam) blessed by Cardinal Mar Varkey Vithayathil (2007)'
  },
  {
    name: 'Rev. Fr. Varghese Mampilly',
    years: '2012 – 2018',
    photo: 'assets/images/fr_varghese_mampilly.jpg',
    note: 'Church renovation re-dedicated by Mar Jacob Manathodath (Bishop of Palakkad & Former Vicar, 2018)'
  },
  {
    name: 'Rev. Fr. Antony Paravara',
    years: '2018 – 2020',
    photo: 'assets/images/fr_antony_paravara.jpg',
    note: 'Venerable pastoral care, spiritual leadership, and devoted service'
  },
  {
    name: 'Rev. Fr. Hormis Thottakara',
    years: '2020 – 2025',
    photo: 'assets/images/fr_hormis_thottakara.jpg',
    note: 'Pastoral guidance, spiritual leadership, and parish community ministry'
  },
  {
    name: 'Rev. Fr. Varghese Painumkal',
    years: '2025 – PRESENT',
    photo: 'assets/images/fr_varghese_painumkal.jpg',
    note: 'Present Vicar and Pastoral Head of St. Thomas Church Chempu'
  }
];

// Default Priests and Religious Sisters from St. Thomas Church Chempu
const DEFAULT_PARISH_VOCATIONS = [
  {
    type: 'priest',
    name: 'Rev. Fr. John Therezhathu',
    congregation: 'Carmelites of Mary Immaculate (CMI)',
    house: 'Therezhathu Family, Chempu',
    year: 'Ordination: 12 April 1980',
    photo: 'assets/images/fr_john_therezhathu.jpg',
    note: 'Devoted pastoral and religious ministry in the Carmelites of Mary Immaculate (CMI) congregation'
  },
  {
    type: 'priest',
    name: 'Rev. Fr. Jacob Puthenpura',
    congregation: 'Diocese of Bijnor',
    house: 'Puthenpura Family, Chempu',
    year: 'Ordination: 18 April 2007',
    photo: 'assets/images/fr_jacob_puthenpura.jpg',
    note: 'Ordained on 18 April 2007; dedicated pastoral shepherd and priest ministering in the Diocese of Bijnor'
  },
  {
    type: 'priest',
    name: 'Rev. Fr. Tony Blayil',
    congregation: 'Rogationists of the Heart of Jesus (RCJ)',
    house: 'Blayil Family, Chempu',
    year: 'Ordination: 18 Jan 2018',
    photo: 'assets/images/fr_tony_blayil.jpg',
    note: 'Consecrated missionary and pastoral ministry in the Rogationists of the Heart of Jesus (RCJ) congregation'
  },
  {
    type: 'priest',
    name: 'Rev. Fr. Joseph Chirayil',
    congregation: 'Missionary Congregation of the Blessed Sacrament (MCBS)',
    house: 'Chirayil Family, Chempu',
    year: 'Ordination: 02 Jan 2021',
    photo: 'assets/images/fr_joseph_chirayil.jpg',
    note: 'Consecrated Eucharistic and pastoral ministry in the Missionary Congregation of the Blessed Sacrament (MCBS)'
  },
  {
    type: 'priest',
    name: 'Rev. Fr. George Kandathil',
    congregation: 'Catholic Archdiocese / Congregation',
    house: 'Kandathil Family, Chempu',
    year: 'Ordained Priest',
    photo: 'assets/images/fr_george_kandathil.jpg',
    note: 'Dedicated pastoral shepherd and consecrated priest from the historic Kandathil family, Chempu, ministering in faithful sacramental service.'
  },
  {
    type: 'sister',
    name: 'Sr. Preethy Varghese',
    congregation: 'Sisters of St. Charles Borromeo (SCCG)',
    house: 'Kodavelil Family, Chempu',
    year: 'First Profession of Vows: 01 Nov 1994',
    photo: 'assets/images/sr_preethy_varghese.jpg',
    note: 'First Profession of Vows (ആദ്യ വ്രത വാഗ്ദാനം): 01/11/1994. Dedicated in lifelong religious service and compassionate care in the Sisters of St. Charles Borromeo (SCCG)'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Dr. Claris',
    congregation: 'Sisters of the Destitute (SD)',
    house: 'Kandathil Family, Chempu',
    year: 'Sisters of the Destitute (SD)',
    photo: 'assets/images/sr_claris_kandathil.jpg',
    note: 'Dedicated consecrated life and distinguished intellectual & pastoral service in the Sisters of the Destitute (SD) from Kandathil family, Chempu.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Stephiny',
    congregation: 'Sisters of the Destitute (SD)',
    house: 'Kandathil Family, Chempu',
    year: 'Sisters of the Destitute (SD)',
    photo: 'assets/images/sr_stephiny_kandathil.jpg',
    note: 'Lifelong consecrated religious devotion, prayer, and compassionate service in the Sisters of the Destitute (SD) from Kandathil family, Chempu.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Luciya',
    congregation: 'Sisters of the Destitute (SD)',
    house: 'Kandathil Family, Chempu',
    year: 'Sisters of the Destitute (SD)',
    photo: 'assets/images/sr_luciya_kandathil.jpg',
    note: 'Venerable pioneer religious sister from the historic Kandathil family, consecrated in selfless apostolic prayer and charity in the Sisters of the Destitute (SD).'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Clemancy',
    congregation: 'Sisters of the Destitute (SD)',
    house: 'Kariyil Puthenpura Family, Chempu',
    year: 'Sisters of the Destitute (SD)',
    photo: 'assets/images/sr_clemancy_kariyil.jpg',
    note: 'Devoted religious sister dedicated to humble Christian charity, prayer, and service in the Sisters of the Destitute (SD) from Kariyil Puthenpura family, Chempu.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Austin',
    congregation: 'Consecrated Religious Sister',
    house: 'Kandathil Family, Chempu',
    year: 'Consecrated Vocation',
    photo: 'assets/images/sr_austin_kandathil.jpg',
    note: 'Lifelong consecrated religious sister from Kandathil family, Chempu, dedicated to joyous gospel witness, pastoral care, and prayer.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Alexius',
    congregation: 'Sisters of the Destitute (SD)',
    house: 'Therezhathu Family, Chempu',
    year: 'Sisters of the Destitute (SD)',
    photo: 'assets/images/sr_alexius_therezhathu.jpg',
    note: 'Devoted religious sister from the esteemed Therezhathu family, consecrated in compassionate healing, prayer, and service in the Sisters of the Destitute (SD).'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Alex Theresa',
    congregation: 'Sisters of the Destitute (SD)',
    house: 'Therezhathu Family, Chempu',
    year: 'Sisters of the Destitute (SD)',
    photo: 'assets/images/sr_alex_theresa_therezhathu.jpg',
    note: 'Reverend religious sister from Therezhathu family, Chempu, consecrated in lifelong apostolic devotion, charity, and prayer in the Sisters of the Destitute (SD).'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Rani Grace',
    congregation: 'Sisters of the Destitute (SD)',
    house: 'Kariyil MariyaBhavan, Chempu',
    year: 'Sisters of the Destitute (SD)',
    photo: 'assets/images/sr_rani_grace.jpg',
    note: 'Consecrated in joyous religious witness, radiant pastoral service, and prayer in the Sisters of the Destitute (SD) from Kariyil MariyaBhavan, Chempu.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Betty Mathew',
    congregation: 'Consecrated Religious Sister',
    house: 'Chempu Parish',
    year: 'Consecrated Vocation',
    photo: 'assets/images/sr_betty_mathew.jpg',
    note: 'Dedicated to lifelong religious contemplation, faithful prayer, and compassionate Christian ministry from Chempu parish.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Ani Grace',
    congregation: 'Consecrated Religious Sister',
    house: 'Poovathingal Family, Chempu',
    year: 'Consecrated Vocation',
    photo: 'assets/images/sr_ani_grace_poovathingal.jpg',
    note: 'Consecrated religious sister from the Poovathingal family, dedicated to faithful apostolic ministry, teaching, and prayer.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Jophin',
    congregation: 'Consecrated Religious Sister',
    house: 'Azhikakathu Family, Chempu',
    year: 'Consecrated Vocation',
    photo: 'assets/images/sr_jophin_azhikakathu.jpg',
    note: 'Dedicated to lifelong consecrated religious life, apostolic prayer, and compassionate Christian service from Azhikakathu family, Chempu.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Jansilin Francis',
    congregation: 'Consecrated Religious Sister',
    house: 'Chalumkadavil Family, Chempu',
    year: 'Consecrated Vocation',
    photo: 'assets/images/sr_jansilin_francis_chalumkadavil.jpg',
    note: 'Lifelong consecrated religious devotion, faithful prayer, and dedicated Christian service from Chalumkadavil family, Chempu.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Liny Francis',
    congregation: 'Consecrated Religious Sister',
    house: 'Chalumkadavil Family, Chempu',
    year: 'Consecrated Vocation',
    photo: 'assets/images/sr_liny_francis_chalumkadavil.jpg',
    note: 'Devoted religious sister from Chalumkadavil family, Chempu, consecrated in lifelong apostolic prayer, humility, and Christian charity.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Treesa Jose',
    congregation: 'Consecrated Religious Sister',
    house: 'Kunnathu Kuthirathara Family, Chempu',
    year: 'Consecrated Vocation',
    photo: 'assets/images/sr_treesa_jose_kunnathu.jpg',
    note: 'Consecrated in joyous religious witness, radiant prayer, and compassionate pastoral service from Kunnathu Kuthirathara family, Chempu.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Mary Rosely',
    congregation: 'Consecrated Religious Sister',
    house: 'Thachappallil Family, Chempu',
    year: 'Consecrated Vocation',
    photo: 'assets/images/sr_mary_rosely_thachappallil.jpg',
    note: 'Lifelong consecrated religious devotion, prayerful contemplation, and faithful Christian witness from Thachappallil family, Chempu.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Jessin',
    congregation: 'Consecrated Religious Sister',
    house: 'Kaitholil Family, Chempu',
    year: 'Consecrated Vocation',
    photo: 'assets/images/sr_jessin_kaitholil.jpg',
    note: 'Devoted religious sister from Kaitholil family, Chempu, consecrated in joyous apostolic witness, compassionate charity, and prayer.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Ancy John',
    congregation: 'Consecrated Religious Sister',
    house: 'Mundackal Family, Chempu',
    year: 'Consecrated Vocation',
    photo: 'assets/images/sr_ancy_john_mundackal.jpg',
    note: 'Lifelong consecrated religious devotion, prayerful service, and humble Christian witness from Mundackal family, Chempu.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Mercy Paul',
    congregation: 'Consecrated Religious Sister',
    house: 'Kollammattel Family, Chempu',
    year: 'Consecrated Vocation',
    photo: 'assets/images/sr_mercy_paul_kollammattel.jpg',
    note: 'Consecrated in contemplative prayer, pastoral charity, and selfless religious witness from Kollammattel family, Chempu.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Divya',
    congregation: 'Sisters of the Destitute (SD)',
    house: 'Mundackal Family, Chempu',
    year: 'Sisters of the Destitute (SD)',
    photo: 'assets/images/sr_divya_mundackal.jpg',
    note: 'Devoted religious sister from Mundackal family, Chempu, consecrated in lifelong apostolic devotion, charity, and prayer in the Sisters of the Destitute (SD).'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Titty Fransis',
    congregation: 'Consecrated Religious Sister',
    house: 'Kandathil Family, Chempu',
    year: 'Consecrated Vocation',
    photo: 'assets/images/sr_titty_fransis_kandathil.jpg',
    note: 'Consecrated in joyous religious witness, radiant prayer, and compassionate pastoral service from Kandathil family, Chempu.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Colomba',
    congregation: 'Consecrated Religious Sister',
    house: 'Kandathil Family, Chempu',
    year: 'Consecrated Vocation',
    photo: 'assets/images/sr_colomba_kandathil.jpg',
    note: 'Venerable pioneer religious sister from the historic Kandathil family, consecrated in selfless apostolic prayer, wisdom, and lifelong service.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Daisy',
    congregation: 'Consecrated Religious Sister',
    house: 'Kandathil Family, Chempu',
    year: 'Consecrated Vocation',
    photo: 'assets/images/sr_daisy_kandathil.jpg',
    note: 'Dedicated to lifelong consecrated religious life, apostolic prayer, and compassionate Christian service from Kandathil family, Chempu.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Jemma',
    congregation: 'Consecrated Religious Sister',
    house: 'Kandathil Family, Chempu',
    year: 'Consecrated Vocation',
    photo: 'assets/images/sr_jemma_kandathil.jpg',
    note: 'Venerable pioneer religious sister from the historic Kandathil family, consecrated in lifelong apostolic devotion, prayer, and loving Christian service.'
  },
  {
    type: 'sister',
    name: 'Rev. Sr. Gabriel',
    congregation: 'Consecrated Religious Sister',
    house: 'Maniyalayil Family, Chempu',
    year: 'Consecrated Vocation',
    photo: 'assets/images/sr_gabriel_maniyalayil.jpg',
    note: 'Venerable senior religious sister from Maniyalayil family, Chempu, consecrated in lifelong prayer, wisdom, and devoted apostolic service.'
  }
];

// Default Pious Associations & Pastoral Wings (Lay Ministries)
const DEFAULT_PIOUS_WINGS = [
  {
    icon: 'fa-child',
    tag: "Children's Ministry",
    title: 'THIRUBALASAGHYAM',
    malayalam: 'Holy Childhood Association (തിരുബാലസഖ്യം)',
    desc: 'Inspiring Catholic children towards deep devotion to Infant Jesus, prayer, solidarity with global children, and missionary spirit.',
    footer: 'Parish Holy Childhood Fellowship'
  },
  {
    icon: 'fa-cross',
    tag: 'Spiritual Fellowship',
    title: 'CLC',
    malayalam: 'Christian Life Community (CLC)',
    desc: 'Ignatian-inspired community fostering personal sanctification, silent prayer, spiritual discernment, and active lay apostolic outreach.',
    footer: 'Ignatian Lay Apostolic Community'
  },
  {
    icon: 'fa-users',
    tag: 'Youth Movement',
    title: 'KCYM',
    malayalam: 'Kerala Catholic Youth Movement (KCYM)',
    desc: 'Empowering young Catholic men and women through faith leadership, community empowerment, social action, and parish service.',
    footer: 'Kerala Catholic Youth Movement'
  },
  {
    icon: 'fa-fire',
    tag: 'Youth Wing',
    title: 'SCYM',
    malayalam: 'Syro-Malabar Catholic Youth Movement (SCYM)',
    desc: 'Dynamic youth apostolate dedicated to the preservation of liturgical traditions, apostolic fervor, and vibrant parish involvement.',
    footer: 'Parish Catholic Youth Wing'
  },
  {
    icon: 'fa-female',
    tag: "Women's Guild",
    title: 'WOMENS WELFARE',
    malayalam: "Mathruvedhi & Women's Welfare (മാതൃവേദി)",
    desc: 'Fostering Christian motherhood, domestic sanctity, family prayer support, altar decoration, and parish pastoral solidarity.',
    footer: "Mathruvedhi & Women's Fellowship"
  },
  {
    icon: 'fa-hand-holding-heart',
    tag: 'Charity & Relief',
    title: 'ST. VINCENT DE PAUL SOCIETY',
    malayalam: 'St. Vincent de Paul Society (SVP)',
    desc: 'Providing compassionate monthly ration distribution, medical aid, education support, and emergency relief to underprivileged parish families.',
    footer: 'Weekly Family Care & Mercy Ministry'
  }
];

// Default Parish Photo Gallery Items (Empty by default until user uploads)
const DEFAULT_GALLERY_ITEMS = [];

// Default Main Feast Highlights
const DEFAULT_HIGHLIGHTS = [
  'Solemn Kodiyettu Ceremony',
  'Grand Evening Raza & Procession',
  'Melodious Liturgical Choir',
  'Parish Nercha & Snehabhojanam'
];

function computeGregorianEaster(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function getUpcomingHolyWeekDates() {
  const now = new Date();
  let yr = now.getFullYear();
  let easter = computeGregorianEaster(yr);
  if (now > easter) {
    yr += 1;
    easter = computeGregorianEaster(yr);
  }
  const palmSunday = new Date(easter.getTime() - 7 * 24 * 60 * 60 * 1000);
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let monthLabel = '';
  let dayLabel = '';
  const pad = n => (n < 10 ? '0' + n : '' + n);

  if (palmSunday.getMonth() === easter.getMonth()) {
    monthLabel = monthNames[easter.getMonth()];
    dayLabel = `${pad(palmSunday.getDate())}-${pad(easter.getDate())}`;
  } else {
    monthLabel = `${monthNames[palmSunday.getMonth()]}/${monthNames[easter.getMonth()]}`;
    dayLabel = `${palmSunday.getDate()}-${pad(easter.getDate())}`;
  }
  return {
    year: yr,
    month: monthLabel,
    day: dayLabel,
    palmDateStr: `${palmSunday.getDate()} ${monthNames[palmSunday.getMonth()]} ${yr}`,
    easterDateStr: `${easter.getDate()} ${monthNames[easter.getMonth()]} ${yr}`
  };
}

const upcomingHolyWeek = getUpcomingHolyWeekDates();

// Default Other Parish Feasts
const DEFAULT_FEASTS = [
  {
    month: 'Jan',
    day: 'Sun*',
    title: 'Feast of St. Sebastian (അമ്പു തിരുനാൾ)',
    desc: 'Celebrated on the Sunday following January 20th. Features the solemn Ambu Pradakshinam (arrow procession) traversing all 12 parish ward units, followed by solemn Holy Mass in the morning.'
  },
  {
    month: 'Mar',
    day: '19',
    title: 'Feast of St. Joseph (ഊട്ടുനേർച്ച)',
    desc: 'Solemn Feast of St. Joseph featuring festive Holy Mass and the traditional grand Oottu Nercha fellowship banquet served lovingly to over 1,500+ faithful and pilgrims every year.'
  },
  {
    month: upcomingHolyWeek.month,
    day: upcomingHolyWeek.day,
    title: 'Holy Week & Easter',
    desc: `Solemn liturgical services of Palm Sunday (${upcomingHolyWeek.palmDateStr}), Pesaha Holy Thursday, Good Friday, and the Glorious Resurrection of Easter (${upcomingHolyWeek.easterDateStr}).`
  },
  {
    month: 'Dec',
    day: '25',
    title: 'Christmas (Feast of Nativity)',
    desc: 'Midnight Holy Qurbana, Christmas carol visits across parish wards, and community joy.'
  }
];

// Default Navigation Menu Items (Home removed; clicking brand emblem/title navigates home)
const DEFAULT_NAV_ITEMS = [
  { label: 'History', url: '#about' },
  { label: 'Holy Mass', url: '#mass-timings' },
  { label: 'Feasts', url: '#feasts' },
  { label: 'Gallery', url: '#gallery' },
  { label: 'Community', url: 'community' },
  { label: 'Santhom Maria', url: 'magazine' },
  { label: 'Contact', url: 'contact' }
];

// Default Parish Website Content
const DEFAULT_CONFIG = {
  // 0. Site Theme
  site_theme: 'chempu-classic',

  // 1. Notice Bar
  notice_badge: 'Annual Feast',
  notice_text: 'Feast of St. Thomas the Apostle (Dukhrana) celebrated with traditional Raza & solemn prayers',
  notice_phone: '+91 4829-273176',
  notice_address: 'Chempu P.O., Vaikom, Kottayam',

  // 2. Hero Section
  hero_image: 'assets/images/st_thomas_chempu_church_facade_v3.jpg',
  hero_badge: 'Archdiocese of Ernakulam-Angamaly • Estd. 1307 AD',
  hero_title1: 'St. Thomas Syro-Malabar',
  hero_title2: 'Roman Catholic Church, Chempu',
  hero_malayalam: 'St. Thomas Church Chempu Dedicated to Apostle St. Thomas',
  hero_desc: 'Over 700 years of living Christian faith, apostolic communion, and spiritual brotherhood rooted along the serene waters of Chempu, Vaikom.',
  stat1_val: '1307 AD',
  stat1_lbl: 'Historic Foundation',
  stat2_val: '700+ Years',
  stat2_lbl: 'Apostolic Tradition',
  stat3_val: 'Daily Liturgy',
  stat3_lbl: 'Holy Qurbana & Prayers',

  // 3. Mass Schedules & Ribbon
  mass_ribbon_display: 'Sunday: 7:00 AM & 9:15 AM',
  mass_ribbon_daily: '6:15 AM (Mon - Wed, Fri - Sat)',
  mass_ribbon_thu: '5:15 PM (Thursday)',
  mass_ribbon_sunday: '7:00 AM & 9:15 AM',
  mass_sun1_time: '07:00 AM',
  mass_sun2_time: '09:15 AM',
  mass_catechism_time: '10:30 AM - 12:15 PM',
  mass_weekday1_time: '06:15 AM',
  mass_thu_time: '05:15 PM',
  mass_fri_time: '06:15 AM',
  mass_sat_time: '06:15 AM',
  mass_confession_time: 'Saturdays 05:00 PM',
  mass_novena_time: 'Every Thursday 06:15 PM',

  // 4. History
  history_image: 'assets/images/st_thomas_chempu_church_vertical.jpg',
  history_eyebrow: 'Apostolic Heritage',
  history_title: 'Seven Centuries of Divine Grace',
  history_lead: 'The historic St. Thomas Catholic Church of Chempu represents a venerable legacy of St. Thomas Christians (Nasranis) nestled in Kottayam district.',
  history_p1: 'Established in early fourteenth century (1307 AD), St. Thomas Church Chempu is one of the revered historical churches under the Syro-Malabar Major Archiepiscopal Archdiocese of Ernakulam-Angamaly.',
  history_p2: 'Surrounded by coconut groves and picturesque backwaters of the Vembanad region near Vaikom, the parish has nurtured generations of devoted families, preserved authentic East-Syriac liturgical customs, and sustained community welfare for centuries.',

  // 4.5. Mar Augustine Kandathil Showcase
  kandathil_photo: 'assets/images/mar_augustine_kandathil_portrait.jpg',
  kandathil_eyebrow: 'Parish Pride & Archdiocesan Patriarch',
  kandathil_title: 'Mar Augustine Kandathil',
  kandathil_malayalam: 'Mar Augustine Kandathil (1874 – 1956) • First Metropolitan Archbishop',
  kandathil_lead: 'Chempu is eternally honored in the history of the Catholic Church as the native parish and birthplace of Mar Augustine Kandathil — the first indigenous Metropolitan Archbishop of India and the founding father of the Syro-Malabar Hierarchy.',
  kandathil_p1: 'Born on August 25, 1874, in the devout Kandathil family of Chempu to parents Kandathil Varkey and Thressia, young Augustine was baptized, nourished in Christian faith, and formed spiritually right here at St. Thomas Church, Chempu. The quiet backwaters and devout parish community of Chempu provided the spiritual cradle that nurtured his early call to priestly service.',
  kandathil_p2: 'On December 21, 1923, His Holiness Pope Pius XI issued the historic apostolic constitution Romani Pontifices, re-establishing the indigenous Syro-Malabar Catholic Hierarchy and elevating the Vicariate of Ernakulam into a Metropolitan Archdiocese. Mar Augustine Kandathil was consecrated as its first Metropolitan Archbishop, creating history as the very first native Indian to hold the rank and exercise the authority of a Catholic Metropolitan Archbishop.',
  kandathil_p3: 'During his transformative episcopate spanning more than three decades as Metropolitan (and 44 years as a Bishop), Mar Augustine guided the Syro-Malabar Church into a flourishing golden era. He founded the Congregation of the Sisters of Nazareth (CSN) in 1948, pioneered colleges, high schools, and orphanages, and championed social uplift across Kerala. When he was called to eternal rest on January 10, 1956, his mortal remains were entombed in the sanctuary of St. Mary\'s Cathedral Basilica, Ernakulam.',
  kandathil_quote: '"St. Thomas Church Chempu stands honored forever in history as the spiritual fountainhead that gave the universal Church one of its greatest archbishops and visionaries."',

  // 5. Feasts
  feast_main_name: 'Feast of St. Thomas the Apostle',
  feast_main_date: 'July 3 (Dukhrana) & Traditional Parish Feast',
  feast_main_desc: 'The annual parish festival is marked with high spiritual solemnity. The traditional "Kodiyettu" (flag hoisting), Raza Qurbana, grand candle-lit processions carrying holy relics and traditional silk parasols (Muthukkuda), and fellowship meals unite the entire village of Chempu.',

  // 6. Administration & Leadership
  vicar_name: 'Rev. Fr. Varghese Painumkal',
  vicar_malayalam: 'Parish Vicar',
  vicar_role: 'Vicar & Pastoral Head',
  vicar_phone: '+91 94475 08299',
  vicar_photo: 'assets/images/fr_varghese_painumkal.jpg',
  vicar_desc: 'Oversees all liturgical celebrations, sacraments, pastoral care, and spiritual guidance of St. Thomas Church Chempu.',

  trustee1_name: 'Thomas Mathai Maniyela',
  trustee1_malayalam: 'Parish Trustee',
  trustee1_role: 'Church Trustee',
  trustee1_phone: '+91 94463 04922',
  trustee1_photo: 'assets/images/trustee1_avatar.svg',
  trustee1_desc: 'Managing temporal administration, church assets, accounts, and festive celebrations.',

  trustee2_name: 'Paul Thomas Kunnathu',
  trustee2_malayalam: 'Parish Trustee',
  trustee2_role: 'Church Trustee',
  trustee2_phone: '+91 98957 94773',
  trustee2_photo: 'assets/images/trustee2_avatar.svg',
  trustee2_desc: 'Overseeing parish development projects, development initiatives, and community logistics.',

  vice_chairman_name: 'Siju Jose Kandathil',
  vice_chairman_malayalam: 'Family Units Vice Chairman',
  vice_chairman_role: 'Pastoral Council Vice Chairman',
  vice_chairman_phone: '+91 86060 40293',
  vice_chairman_photo: 'assets/images/siju_jose_kandathil.jpg',
  vice_chairman_desc: 'Coordinating 12+ Kudumba Kootayma (Family Units), monthly ward prayer meetings, and parish fellowship.',

  admin_vicar_desc: 'Oversees liturgical celebrations, spiritual welfare, sacraments, and pastoral guidance of all parishioners.',
  admin_trustees_desc: 'Elected parish representatives managing church assets, annual feast logistics, and development initiatives.',
  admin_council_desc: 'Coordinating 12+ Kudumba Kootayma (Family Units) fostering fellowship, charity, and mutual support.',
  admin_faith_desc: 'Dedicated animators and teachers imparting Catholic faith, catechism, and moral values to parish children.',

  // 6.5. SD Sisters (Convent)
  sd_img: 'assets/images/sd_convent_chempu.jpg',
  sd_title: 'Sisters of the Destitute (SD Convent, Chempu)',
  sd_malayalam: 'Sisters of the Destitute (SD Convent)',
  sd_years_chempu: '75 Years in Chempu',
  sd_years_congregation: '100 Years of Congregation',
  sd_desc: 'For over 75 dedicated years, the Sisters of the Destitute (SD) have been an integral spiritual pillar of St. Thomas Church Chempu. Formed nearly 100 years ago (1927) by Venerable Fr. Varghese Payyappilly with the charism of compassionate love for the poor and marginalized, the SD Sisters in Chempu tirelessly serve our parish community through nursery education (Carmel Nursery), Sunday catechism, home visitations of the sick and elderly, liturgical altar service, and continual Eucharistic adoration.',

  // 6.6. Filial Church: St. Mary's Church Chemmanakary (Holyland)
  chemmanakary_img: 'assets/images/st_mary_chemmanakary_church.jpg',
  chemmanakary_title: "St. Mary's Church, Chemmanakary (Holyland)",
  chemmanakary_malayalam: "St. Mary's Church, Chemmanakary (Holyland)",
  chemmanakary_badge1: 'Filial Church',
  chemmanakary_badge2: 'Chemmanakary, Chempu',
  chemmanakary_desc: "Situated along the serene Chemmanakary backwaters, St. Mary's Church, Chemmanakary (Holyland) is a revered filial church and sacred pilgrimage center under the parental parish and pastoral care of St. Thomas Syro-Malabar Church, Chempu. Under the direct pastoral guidance of the Chempu parish vicar, the church ministers to the spiritual life of the Chemmanakary community with Holy Qurbana, Marian devotions, and the solemn celebration of its annual parish feast.",

  // 6.7. Parish Institutions & Facilities
  inst_school_img: 'assets/images/st_thomas_lp_school.jpg',
  inst_school_title: 'St. Thomas L.P. School, Chempu',
  inst_school_malayalam: 'St. Thomas L.P. School, Chempu',
  inst_school_desc: 'Established in 1921 under the patronage and management of St. Thomas Church Chempu, this centenary educational institution has nurtured generations of children across Chempu and neighbouring villages with primary education, moral discipline, and values.',
  inst_cultural_img: 'assets/images/st_thomas_cultural_centre.jpg',
  inst_cultural_title: 'St. Thomas Cultural Centre, Chempu',
  inst_cultural_malayalam: 'St. Thomas Cultural Centre, Chempu',
  inst_cultural_desc: 'A spacious modern parish auditorium and cultural venue accommodating community gatherings, solemn wedding banquets, parish general assemblies, youth festivals, and cultural events for all residents of Chempu.',
  inst_complex_img: 'assets/images/st_thomas_shopping_complex.jpg',
  inst_complex_title: 'St. Thomas Shopping Complex, Chempu',
  inst_complex_malayalam: 'St. Thomas Shopping Complex, Chempu',
  inst_complex_desc: 'Situated in the heart of Chempu, the parish commercial shopping complex provides essential retail spaces, local businesses, and community utilities, contributing to village commerce and supporting church temporal ministries.',

  // 6.8. Pious Associations & Pastoral Wings Header
  wings_eyebrow: 'Parish Fellowship & Lay Ministries',
  wings_title: 'Pious Associations & Pastoral Wings',
  wings_lead: 'Dedicated lay ministries fostering fellowship, spiritual enrichment, charity, and liturgical participation across our parish community.',

  // 7. Contact
  contact_phone: '+91 4829-273176',
  contact_diocese: 'Archdiocese of Ernakulam-Angamaly • Vaikom Forane',
  contact_address: 'St. Thomas Syro-Malabar Roman Catholic Church, Chempu P.O., Vaikom, Kottayam District, Kerala - 686 615, India',
  contact_hours: 'Tuesday - Saturday: 09:00 AM - 12:30 PM • 04:00 PM - 06:00 PM\nSunday: After Holy Qurbana',

  // 8. Typography & Font Customizer (Permanent Locked Defaults)
  font_heading: 'Marcellus',
  font_body: 'Cinzel',
  font_nav: 'Cinzel',
  font_buttons: 'Cinzel',
  accent: 'Cinzel',
  caption: 'Marcellus',
  font_base_size: '16px'
};

document.addEventListener('DOMContentLoaded', () => {
  // Common Toast Element
  const saveToast = document.getElementById('saveToast');

  // 1. Sidebar Navigation Switcher
  const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
  const panels = document.querySelectorAll('.admin-panel');
  const sectionTitle = document.getElementById('currentSectionTitle');
  const sidebar = document.getElementById('adminSidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(n => n.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      item.classList.add('active');
      const targetId = item.getAttribute('data-section');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }

      if (sectionTitle) {
        const spanText = item.querySelector('span');
        if (spanText) sectionTitle.textContent = spanText.textContent;
      }

      if (window.innerWidth <= 900 && sidebar) {
        sidebar.classList.remove('open');
      }
    });
  });

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  // =========================================================================
  // 1.5. Navigation Menu Manager (Add, Edit, Delete, Reorder Up / Down)
  // =========================================================================
  let currentNavItems = [];

  function getNavItems() {
    try {
      const saved = localStorage.getItem(NAV_ITEMS_KEY);
      if (saved) {
        let parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Remove Chronicle or Clergy if previously saved in localStorage
          parsed = parsed.filter(i => {
            const u = (i.url || '').toLowerCase();
            return !u.includes('history.html') && !u.includes('clergy.html');
          });
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Error reading nav items from storage', e);
    }
    return [...DEFAULT_NAV_ITEMS];
  }

  function persistNavItems(items) {
    currentNavItems = items;
    localStorage.setItem(NAV_ITEMS_KEY, JSON.stringify(items));
    renderNavItemsTable();
  }

  const navTableBody = document.getElementById('navItemsTableBody');
  const navEditorCard = document.getElementById('navItemEditorCard');
  const navEditorTitle = document.getElementById('navEditorTitle');
  const navEditIndex = document.getElementById('navEditIndex');
  const navEditLabel = document.getElementById('navEditLabel');
  const navEditUrl = document.getElementById('navEditUrl');
  const openAddNavModalBtn = document.getElementById('openAddNavModalBtn');
  const cancelNavEditBtn = document.getElementById('cancelNavEditBtn');
  const saveNavEditBtn = document.getElementById('saveNavEditBtn');

  function renderNavItemsTable() {
    if (!navTableBody) return;
    navTableBody.innerHTML = '';

    if (currentNavItems.length === 0) {
      const emptyTr = document.createElement('tr');
      emptyTr.innerHTML = '<td colspan="5" class="empty-state" style="padding:2rem;"><p>No menu items configured. Click "Add New Nav Link" or "Reset Defaults".</p></td>';
      navTableBody.appendChild(emptyTr);
      return;
    }

    currentNavItems.forEach((item, idx) => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td style="font-weight:700; color:#64748b;">${idx + 1}</td>
        <td><strong style="color:var(--admin-navy);">${escapeHtml(item.label)}</strong></td>
        <td><span class="nav-tag-badge">${escapeHtml(item.url)}</span></td>
        <td style="text-align:center;">
          <button type="button" class="btn-icon-action move-up-btn" data-index="${idx}" ${idx === 0 ? 'disabled' : ''} title="Move Up">
            <i class="fas fa-arrow-up"></i>
          </button>
          <button type="button" class="btn-icon-action move-down-btn" data-index="${idx}" ${idx === currentNavItems.length - 1 ? 'disabled' : ''} title="Move Down" style="margin-left:4px;">
            <i class="fas fa-arrow-down"></i>
          </button>
        </td>
        <td style="text-align:center;">
          <button type="button" class="btn-icon-action btn-icon-edit edit-nav-btn" data-index="${idx}" title="Edit Link">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="btn-icon-action btn-icon-delete delete-nav-btn" data-index="${idx}" title="Delete Link" style="margin-left:4px;">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      `;

      navTableBody.appendChild(tr);
    });

    // Wire up Reorder buttons
    navTableBody.querySelectorAll('.move-up-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        if (i > 0) {
          const temp = currentNavItems[i];
          currentNavItems[i] = currentNavItems[i - 1];
          currentNavItems[i - 1] = temp;
          persistNavItems(currentNavItems);
          triggerSaveNotice();
        }
      });
    });

    navTableBody.querySelectorAll('.move-down-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        if (i < currentNavItems.length - 1) {
          const temp = currentNavItems[i];
          currentNavItems[i] = currentNavItems[i + 1];
          currentNavItems[i + 1] = temp;
          persistNavItems(currentNavItems);
          triggerSaveNotice();
        }
      });
    });

    // Wire up Edit buttons
    navTableBody.querySelectorAll('.edit-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        const item = currentNavItems[i];
        if (item) {
          navEditIndex.value = i;
          navEditLabel.value = item.label;
          navEditUrl.value = item.url;
          navEditorTitle.innerHTML = `<i class="fas fa-edit"></i> Edit Menu Item #${i + 1}: ${escapeHtml(item.label)}`;
          navEditorCard.style.display = 'block';
          navEditLabel.focus();
        }
      });
    });

    // Wire up Delete buttons
    navTableBody.querySelectorAll('.delete-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        const item = currentNavItems[i];
        if (confirm(`Are you sure you want to delete navigation link "${item.label}"?`)) {
          currentNavItems.splice(i, 1);
          persistNavItems(currentNavItems);
          triggerSaveNotice();
          if (navEditorCard) navEditorCard.style.display = 'none';
        }
      });
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  function triggerSaveNotice() {
    if (saveToast) {
      saveToast.style.display = 'flex';
      setTimeout(() => {
        saveToast.style.display = 'none';
      }, 3000);
    }
  }

  // Open Form to Add New Nav Link
  if (openAddNavModalBtn) {
    openAddNavModalBtn.addEventListener('click', () => {
      navEditIndex.value = '-1';
      navEditLabel.value = '';
      navEditUrl.value = '#';
      navEditorTitle.innerHTML = '<i class="fas fa-plus-circle"></i> Add New Menu Link';
      navEditorCard.style.display = 'block';
      navEditLabel.focus();
    });
  }

  // Cancel Form
  if (cancelNavEditBtn) {
    cancelNavEditBtn.addEventListener('click', () => {
      navEditorCard.style.display = 'none';
    });
  }

  // Save Item (New or Edit)
  if (saveNavEditBtn) {
    saveNavEditBtn.addEventListener('click', () => {
      const label = navEditLabel.value.trim();
      const url = navEditUrl.value.trim();
      const index = parseInt(navEditIndex.value, 10);

      if (!label) {
        alert('Please enter a Menu Label.');
        navEditLabel.focus();
        return;
      }
      if (!url) {
        alert('Please enter a Destination Link / URL (e.g. #mass-timings).');
        navEditUrl.focus();
        return;
      }

      if (index >= 0 && index < currentNavItems.length) {
        // Edit existing
        currentNavItems[index] = { label, url };
      } else {
        // Add new
        currentNavItems.push({ label, url });
      }

      persistNavItems(currentNavItems);
      navEditorCard.style.display = 'none';
      triggerSaveNotice();
    });
  }

  // =========================================================================
  // SMART HIGH-DEFINITION IMAGE COMPRESSION ENGINE
  // Compresses images > 1MB client-side without losing visible pixel clarity or HD sharpness.
  // =========================================================================
  function processImageWithSmartHDCompression(file, options = {}) {
    return new Promise((resolve, reject) => {
      if (!file || !file.type.startsWith('image/')) {
        return reject(new Error('Selected file is not an image'));
      }

      const ONE_MB = 1024 * 1024;
      const originalBytes = file.size;
      const maxDim = options.maxDim || 1600; // Optimal Full-HD gallery dimension
      const targetMaxBytes = options.targetMaxBytes || (280 * 1024); // Keep around 250-300KB so dozens of photos fit safely
      const initialQuality = options.initialQuality || 0.85; // Crisp HD quality

      const formatBytes = (bytes) => {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
      };

      const reader = new FileReader();
      reader.onerror = () => reject(new Error('Failed to read image file'));
      reader.onload = (e) => {
        const rawDataUrl = e.target.result;
        const img = new Image();
        img.onerror = () => reject(new Error('Failed to decode image'));
        img.onload = () => {
          let width = img.width;
          let height = img.height;
          let shouldResizeResolution = false;

          // Scale resolution proportionally only if it exceeds maxDim (e.g., massive 48MP phone photo)
          // For any standard HD photo <= 2560px, KEEP 100% OF PIXELS without downscaling!
          if (width > maxDim || height > maxDim) {
            shouldResizeResolution = true;
            if (width > height) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            } else {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }

          // Always compress and optimize for web storage safety
          if (originalBytes < targetMaxBytes && !shouldResizeResolution) {
            return resolve({
              dataUrl: rawDataUrl,
              originalBytes,
              compressedBytes: originalBytes,
              originalSizeStr: formatBytes(originalBytes),
              compressedSizeStr: formatBytes(originalBytes),
              percentSaved: 0,
              width,
              height,
              wasCompressed: false,
              message: `High Definition (${width} × ${height}px) - Compact size retained.`
            });
          }

          // Render on HD canvas with high-quality bicubic smoothing
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, width, height);

          // Adaptive HD compression: start at initialQuality, step down to ensure it fits safely
          let quality = initialQuality;
          let outputDataUrl = canvas.toDataURL('image/jpeg', quality);
          let approxBytes = Math.round((outputDataUrl.length - 22) * 0.75);

          const qualitySteps = [0.80, 0.75, 0.70, 0.65, 0.60];
          let stepIdx = 0;
          while (approxBytes > targetMaxBytes && stepIdx < qualitySteps.length) {
            quality = qualitySteps[stepIdx];
            outputDataUrl = canvas.toDataURL('image/jpeg', quality);
            approxBytes = Math.round((outputDataUrl.length - 22) * 0.75);
            stepIdx++;
          }

          const percentSaved = Math.max(0, Math.round(((originalBytes - approxBytes) / originalBytes) * 100));

          resolve({
            dataUrl: outputDataUrl,
            originalBytes,
            compressedBytes: approxBytes,
            originalSizeStr: formatBytes(originalBytes),
            compressedSizeStr: formatBytes(approxBytes),
            percentSaved,
            width,
            height,
            wasCompressed: true,
            quality: Math.round(quality * 100),
            message: `Optimized from ${formatBytes(originalBytes)} to ${formatBytes(approxBytes)} (${percentSaved}% reduction) at crisp High Definition (${width} × ${height}px).`
          });
        };
        img.src = rawDataUrl;
      };
      reader.readAsDataURL(file);
    });
  }

  function renderCompressionNotice(targetDivId, result) {
    const el = document.getElementById(targetDivId);
    if (!el) return;

    if (!result) {
      el.style.display = 'none';
      el.innerHTML = '';
      return;
    }

    if (result.wasCompressed) {
      el.className = 'hd-compression-badge';
      el.innerHTML = `
        <div class="badge-icon"><i class="fas fa-magic"></i></div>
        <div style="flex:1;">
          <span class="badge-title">High-Definition Smart Compression Applied</span>
          <div class="badge-metrics">
            <span class="metric-pill"><i class="fas fa-file-image"></i> Original: ${result.originalSizeStr}</span>
            <span class="metric-pill highlight"><i class="fas fa-bolt"></i> HD Optimized: ${result.compressedSizeStr}</span>
            <span class="metric-pill highlight"><i class="fas fa-arrow-down"></i> Saved ${result.percentSaved}%</span>
            <span class="metric-pill"><i class="fas fa-expand"></i> ${result.width} × ${result.height}px HD</span>
          </div>
        </div>
      `;
    } else {
      el.className = 'hd-compression-badge info';
      el.innerHTML = `
        <div class="badge-icon"><i class="fas fa-check-circle"></i></div>
        <div style="flex:1;">
          <span class="badge-title">High-Definition File Ready</span>
          <div class="badge-metrics">
            <span class="metric-pill"><i class="fas fa-file-image"></i> Size: ${result.originalSizeStr} (&lt; 1 MB)</span>
            <span class="metric-pill"><i class="fas fa-expand"></i> ${result.width} × ${result.height}px</span>
          </div>
        </div>
      `;
    }
    el.style.display = 'flex';
  }

  // Cover Photo Uploader Elements
  const heroCoverFileInput = document.getElementById('heroCoverFileInput');
  const heroCoverPreview = document.getElementById('heroCoverPreview');
  const heroCoverEmptyPlaceholder = document.getElementById('heroCoverEmptyPlaceholder');
  const resetCoverPhotoBtn = document.getElementById('resetCoverPhotoBtn');
  const cfgHeroImageInput = document.getElementById('cfg_hero_image');

  if (heroCoverFileInput) {
    heroCoverFileInput.addEventListener('change', async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      try {
        const result = await processImageWithSmartHDCompression(file, { maxDim: 2560, targetMaxBytes: 1500 * 1024, initialQuality: 0.94 });
        if (cfgHeroImageInput) cfgHeroImageInput.value = result.dataUrl;
        if (heroCoverPreview) {
          heroCoverPreview.src = result.dataUrl;
          heroCoverPreview.style.display = 'block';
        }
        if (heroCoverEmptyPlaceholder) heroCoverEmptyPlaceholder.style.display = 'none';
        renderCompressionNotice('heroCompressionNotice', result);
        triggerSaveNotice();
      } catch (err) {
        alert('Failed to process cover photo: ' + err.message);
      }
    });
  }

  if (resetCoverPhotoBtn) {
    resetCoverPhotoBtn.addEventListener('click', () => {
      const defaultImg = DEFAULT_CONFIG.hero_image || 'assets/images/st_thomas_chempu_church_facade_v3.jpg';
      if (cfgHeroImageInput) cfgHeroImageInput.value = defaultImg;
      if (heroCoverPreview) {
        heroCoverPreview.src = defaultImg;
        heroCoverPreview.style.display = 'block';
      }
      if (heroCoverEmptyPlaceholder) heroCoverEmptyPlaceholder.style.display = 'none';
      if (heroCoverFileInput) heroCoverFileInput.value = '';
      renderCompressionNotice('heroCompressionNotice', null);
      triggerSaveNotice();
    });
  }

  // Heritage / History Section Image Uploader
  const historyImageFileInput = document.getElementById('historyImageFileInput');
  const historyImagePreview = document.getElementById('historyImagePreview');
  const resetHistoryImageBtn = document.getElementById('resetHistoryImageBtn');
  const cfgHistoryImageInput = document.getElementById('cfg_history_image');
  const cfgHistoryImageUrl = document.getElementById('cfg_history_image_url');

  if (historyImageFileInput) {
    historyImageFileInput.addEventListener('change', async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      try {
        const result = await processImageWithSmartHDCompression(file, { maxDim: 2048 });
        if (cfgHistoryImageInput) cfgHistoryImageInput.value = result.dataUrl;
        if (historyImagePreview) historyImagePreview.src = result.dataUrl;
        if (cfgHistoryImageUrl) cfgHistoryImageUrl.value = '(Uploaded image file)';
        renderCompressionNotice('historyCompressionNotice', result);
        triggerSaveNotice();
      } catch (err) {
        alert('Failed to process heritage image: ' + err.message);
      }
    });
  }

  if (cfgHistoryImageUrl) {
    cfgHistoryImageUrl.addEventListener('input', (e) => {
      const url = e.target.value.trim();
      if (url && url !== '(Uploaded image file)') {
        if (cfgHistoryImageInput) cfgHistoryImageInput.value = url;
        if (historyImagePreview) historyImagePreview.src = url;
        renderCompressionNotice('historyCompressionNotice', null);
        triggerSaveNotice();
      }
    });
  }

  if (resetHistoryImageBtn) {
    resetHistoryImageBtn.addEventListener('click', () => {
      const defaultImg = DEFAULT_CONFIG.history_image || 'assets/images/st_thomas_chempu_church_vertical.jpg';
      if (cfgHistoryImageInput) cfgHistoryImageInput.value = defaultImg;
      if (historyImagePreview) historyImagePreview.src = defaultImg;
      if (cfgHistoryImageUrl) cfgHistoryImageUrl.value = defaultImg;
      if (historyImageFileInput) historyImageFileInput.value = '';
      renderCompressionNotice('historyCompressionNotice', null);
      triggerSaveNotice();
    });
  }

  // Mar Augustine Kandathil Portrait Photo Uploader
  const kandathilPhotoFileInput = document.getElementById('kandathilPhotoFileInput');
  const kandathilPhotoPreview = document.getElementById('kandathilPhotoPreview');
  const resetKandathilPhotoBtn = document.getElementById('resetKandathilPhotoBtn');
  const cfgKandathilPhotoInput = document.getElementById('cfg_kandathil_photo');
  const cfgKandathilPhotoUrl = document.getElementById('cfg_kandathil_photo_url');

  if (kandathilPhotoFileInput) {
    kandathilPhotoFileInput.addEventListener('change', async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      try {
        const result = await processImageWithSmartHDCompression(file, { maxDim: 1600 });
        if (cfgKandathilPhotoInput) cfgKandathilPhotoInput.value = result.dataUrl;
        if (kandathilPhotoPreview) kandathilPhotoPreview.src = result.dataUrl;
        if (cfgKandathilPhotoUrl) cfgKandathilPhotoUrl.value = '(Uploaded image file)';
        renderCompressionNotice('kandathilCompressionNotice', result);
        triggerSaveNotice();
      } catch (err) {
        alert('Failed to process Mar Augustine Kandathil photo: ' + err.message);
      }
    });
  }

  if (cfgKandathilPhotoUrl) {
    cfgKandathilPhotoUrl.addEventListener('input', (e) => {
      const url = e.target.value.trim();
      if (url && url !== '(Uploaded image file)') {
        if (cfgKandathilPhotoInput) cfgKandathilPhotoInput.value = url;
        if (kandathilPhotoPreview) kandathilPhotoPreview.src = url;
        renderCompressionNotice('kandathilCompressionNotice', null);
        triggerSaveNotice();
      }
    });
  }

  if (resetKandathilPhotoBtn) {
    resetKandathilPhotoBtn.addEventListener('click', () => {
      const defaultImg = DEFAULT_CONFIG.kandathil_photo || 'assets/images/mar_augustine_kandathil_portrait.jpg';
      if (cfgKandathilPhotoInput) cfgKandathilPhotoInput.value = defaultImg;
      if (kandathilPhotoPreview) kandathilPhotoPreview.src = defaultImg;
      if (cfgKandathilPhotoUrl) cfgKandathilPhotoUrl.value = defaultImg;
      if (kandathilPhotoFileInput) kandathilPhotoFileInput.value = '';
      renderCompressionNotice('kandathilCompressionNotice', null);
      triggerSaveNotice();
    });
  }

  // Leader Profile Image Uploader Helper
  function setupLeaderImageUploader(fileInputId, previewImgId, hiddenInputId, resetBtnId, noticeId, defaultImg) {
    const fileInput = document.getElementById(fileInputId);
    const previewImg = document.getElementById(previewImgId);
    const hiddenInput = document.getElementById(hiddenInputId);
    const resetBtn = document.getElementById(resetBtnId);

    if (fileInput) {
      fileInput.addEventListener('change', async (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        try {
          const result = await processImageWithSmartHDCompression(file, { maxDim: 800, targetMaxBytes: 400 * 1024 });
          if (hiddenInput) hiddenInput.value = result.dataUrl;
          if (previewImg) previewImg.src = result.dataUrl;
          if (noticeId) renderCompressionNotice(noticeId, result);
          saveConfig();
        } catch (err) {
          alert('Failed to process image: ' + err.message);
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (hiddenInput) hiddenInput.value = defaultImg;
        if (previewImg) previewImg.src = defaultImg;
        if (fileInput) fileInput.value = '';
        if (noticeId) renderCompressionNotice(noticeId, null);
        saveConfig();
      });
    }
  }

  setupLeaderImageUploader('vicarFileInput', 'vicarPhotoPreview', 'cfg_vicar_photo', 'resetVicarPhotoBtn', 'vicarCompressionNotice', 'assets/images/vicar_avatar.svg');
  setupLeaderImageUploader('trustee1FileInput', 'trustee1PhotoPreview', 'cfg_trustee1_photo', 'resetTrustee1PhotoBtn', 'trustee1CompressionNotice', 'assets/images/trustee1_avatar.svg');
  setupLeaderImageUploader('trustee2FileInput', 'trustee2PhotoPreview', 'cfg_trustee2_photo', 'resetTrustee2PhotoBtn', 'trustee2CompressionNotice', 'assets/images/trustee2_avatar.svg');
  setupLeaderImageUploader('viceChairmanFileInput', 'viceChairmanPhotoPreview', 'cfg_vice_chairman_photo', 'resetViceChairmanPhotoBtn', 'viceChairmanCompressionNotice', 'assets/images/siju_jose_kandathil.jpg');

  // Community Establishments & Facilities Image Uploaders
  setupLeaderImageUploader('sdImgFileInput', 'sdImgPreview', 'cfg_sd_img', 'resetSdImgBtn', 'sdImgCompressionNotice', 'assets/images/sd_convent_chempu.jpg');
  setupLeaderImageUploader('chemmanakaryImgFileInput', 'chemmanakaryImgPreview', 'cfg_chemmanakary_img', 'resetChemmanakaryImgBtn', 'chemmanakaryImgCompressionNotice', 'assets/images/st_mary_chemmanakary_church.jpg');
  setupLeaderImageUploader('instSchoolImgFileInput', 'instSchoolImgPreview', 'cfg_inst_school_img', 'resetInstSchoolImgBtn', 'instSchoolImgCompressionNotice', 'assets/images/st_thomas_lp_school.jpg');
  setupLeaderImageUploader('instCulturalImgFileInput', 'instCulturalImgPreview', 'cfg_inst_cultural_img', 'resetInstCulturalImgBtn', 'instCulturalImgCompressionNotice', 'assets/images/st_thomas_cultural_centre.jpg');
  setupLeaderImageUploader('instComplexImgFileInput', 'instComplexImgPreview', 'cfg_inst_complex_img', 'resetInstComplexImgBtn', 'instComplexImgCompressionNotice', 'assets/images/st_thomas_shopping_complex.jpg');

  // =========================================================================
  // GALLERY MANAGEMENT SYSTEM (IndexedDB Storage for Unlimited 50+ to 500+ Photos)
  // =========================================================================
  const IDB_NAME = 'st_thomas_chempu_db';
  const IDB_STORE = 'gallery_store';
  const IDB_KEY = 'parish_gallery_photos';

  function openGalleryIDB() {
    return new Promise((resolve, reject) => {
      if (!window.indexedDB) return resolve(null);
      const req = indexedDB.open(IDB_NAME, 1);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(IDB_STORE)) {
          db.createObjectStore(IDB_STORE);
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    });
  }

  async function loadGalleryFromIDB() {
    try {
      const db = await openGalleryIDB();
      if (!db) return null;
      return new Promise((resolve) => {
        const tx = db.transaction(IDB_STORE, 'readonly');
        const store = tx.objectStore(IDB_STORE);
        const req = store.get(IDB_KEY);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
      });
    } catch (e) {
      return null;
    }
  }

  async function saveGalleryToIDB(items) {
    try {
      const db = await openGalleryIDB();
      if (!db) return false;
      return new Promise((resolve) => {
        const tx = db.transaction(IDB_STORE, 'readwrite');
        const store = tx.objectStore(IDB_STORE);
        store.put(items, IDB_KEY);
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      });
    } catch (e) {
      return false;
    }
  }

  function getGalleryItems() {
    try {
      const saved = localStorage.getItem(GALLERY_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read gallery items', e);
    }
    return [...DEFAULT_GALLERY_ITEMS];
  }

  async function saveGalleryItems(items) {
    currentGalleryItems = items;
    // 1. Save to high-capacity IndexedDB (stores hundreds of MBs safely)
    await saveGalleryToIDB(items);
    // 2. Mirror to localStorage (if quota permits, ignore if full)
    try {
      localStorage.setItem(GALLERY_KEY, JSON.stringify(items));
    } catch (e) {
      // LocalStorage is full, but IndexedDB safely holds all photos!
      console.info('Saved smoothly to IndexedDB unlimited photo storage.');
    }
    triggerSaveNotice();
  }

  let currentGalleryItems = getGalleryItems();
  // Hydrate from IndexedDB on startup
  loadGalleryFromIDB().then(idbItems => {
    if (Array.isArray(idbItems) && idbItems.length > 0) {
      currentGalleryItems = idbItems;
      renderAdminGalleryGrid();
    }
  });

  function renderAdminGalleryGrid() {
    const container = document.getElementById('adminGalleryCardsContainer');
    const countEl = document.getElementById('adminGalleryCount');
    if (countEl) countEl.textContent = currentGalleryItems.length;
    if (!container) return;

    if (currentGalleryItems.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px;">
          <p style="color: #64748b; margin: 0;">No photos in gallery. Click "Reset to Default Photos" or upload a new photo above.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = currentGalleryItems.map((item, idx) => {
      const catLabel = item.category === 'facade' ? 'Church Facade' :
        item.category === 'altar' ? 'Sacred Altar' :
          item.category === 'thirunal' ? 'Thirunal & Feast' : 'Parish Heritage';
      return `
        <div class="admin-gallery-card">
          <div class="admin-gallery-thumb-wrap">
            <img src="${item.src}" alt="${item.title}" class="admin-gallery-thumb" loading="lazy">
            <span class="admin-gallery-cat-chip">${catLabel}</span>
          </div>
          <div class="admin-gallery-info">
            <div class="admin-gallery-title" title="${item.title}">${item.title}</div>
            <div class="admin-gallery-subtitle">${item.subtitle || 'St. Thomas Church Chempu'}</div>
            <div class="admin-gallery-actions">
              <span style="font-size: 0.72rem; color: #94a3b8;">Photo #${idx + 1}</span>
              <button type="button" class="admin-gallery-del-btn" data-delete-idx="${idx}">
                <i class="fas fa-trash-alt"></i> Delete
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach delete listeners
    container.querySelectorAll('.admin-gallery-del-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-delete-idx'), 10);
        if (confirm(`Are you sure you want to remove "${currentGalleryItems[idx].title}" from the website gallery?`)) {
          currentGalleryItems.splice(idx, 1);
          saveGalleryItems(currentGalleryItems);
          renderAdminGalleryGrid();
        }
      });
    });
  }

  // Gallery Uploader & Form Handlers
  const newGalleryFileInput = document.getElementById('newGalleryFileInput');
  const newGalleryPreview = document.getElementById('newGalleryPreview');
  const newGalleryPlaceholder = document.getElementById('newGalleryPlaceholder');
  const addGalleryItemBtn = document.getElementById('addGalleryItemBtn');
  const resetGalleryDefaultBtn = document.getElementById('resetGalleryDefaultBtn');
  let currentNewGalleryDataUrl = '';

  if (newGalleryFileInput) {
    newGalleryFileInput.addEventListener('change', async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      try {
        const result = await processImageWithSmartHDCompression(file, { maxDim: 1600, targetMaxBytes: 250 * 1024 });
        currentNewGalleryDataUrl = result.dataUrl;
        if (newGalleryPreview) {
          newGalleryPreview.src = result.dataUrl;
          newGalleryPreview.style.display = 'block';
        }
        if (newGalleryPlaceholder) newGalleryPlaceholder.style.display = 'none';
        renderCompressionNotice('newGalleryCompressionNotice', result);
      } catch (err) {
        alert('Could not process photo: ' + err.message);
      }
    });
  }

  if (addGalleryItemBtn) {
    addGalleryItemBtn.addEventListener('click', () => {
      const titleInput = document.getElementById('newGalleryTitle');
      const subtitleInput = document.getElementById('newGallerySubtitle');
      const categorySelect = document.getElementById('newGalleryCategory');

      const title = titleInput ? titleInput.value.trim() : '';
      const subtitle = subtitleInput ? subtitleInput.value.trim() : '';
      const category = categorySelect ? categorySelect.value : 'facade';

      if (!currentNewGalleryDataUrl) {
        alert('Please choose a photo to upload first.');
        return;
      }
      if (!title) {
        alert('Please provide a title for the photo.');
        return;
      }

      const newItem = {
        id: 'gal-' + Date.now(),
        src: currentNewGalleryDataUrl,
        category: category,
        title: title,
        subtitle: subtitle || 'St. Thomas Church Chempu'
      };

      currentGalleryItems.unshift(newItem); // Add to beginning of gallery
      saveGalleryItems(currentGalleryItems);
      renderAdminGalleryGrid();

      // Reset form
      if (titleInput) titleInput.value = '';
      if (subtitleInput) subtitleInput.value = '';
      if (newGalleryFileInput) newGalleryFileInput.value = '';
      if (newGalleryPreview) {
        newGalleryPreview.src = '';
        newGalleryPreview.style.display = 'none';
      }
      if (newGalleryPlaceholder) newGalleryPlaceholder.style.display = 'block';
      renderCompressionNotice('newGalleryCompressionNotice', null);
      currentNewGalleryDataUrl = '';
      alert('Photo successfully added to Parish Gallery!');
    });
  }

  if (resetGalleryDefaultBtn) {
    resetGalleryDefaultBtn.addEventListener('click', () => {
      if (confirm('Clear all gallery photos?')) {
        currentGalleryItems = [];
        saveGalleryItems(currentGalleryItems);
        renderAdminGalleryGrid();
      }
    });
  }

  // 2. Load Config into Form Fields
  function loadFormValues() {
    let config = DEFAULT_CONFIG;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        config = { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
        if (config.mass_novena_time === 'First Fridays 06:00 PM' || config.mass_novena_time === 'Thursdays 06:00 PM') {
          config.mass_novena_time = 'Every Thursday 06:15 PM';
        }
        // Purge old church_hero.jpg from browser memory
        if (!config.hero_image || config.hero_image.includes('church_hero.jpg') || config.hero_image.includes('st_thomas_chempu_church_facade.jpg')) {
          config.hero_image = 'assets/images/st_thomas_chempu_church_facade_v3.jpg';
          localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
        }
      }
    } catch (e) {
      console.warn('Using default config', e);
    }

    Object.keys(DEFAULT_CONFIG).forEach(key => {
      const field = document.getElementById(`cfg_${key}`);
      if (field) {
        field.value = config[key] || '';
      }
    });

    // Update cover photo preview
    if (heroCoverPreview && heroCoverEmptyPlaceholder) {
      if (config.hero_image) {
        heroCoverPreview.src = config.hero_image;
        heroCoverPreview.style.display = 'block';
        heroCoverEmptyPlaceholder.style.display = 'none';
      } else {
        heroCoverPreview.src = '';
        heroCoverPreview.style.display = 'none';
        heroCoverEmptyPlaceholder.style.display = 'block';
      }
    }
    if (cfgHeroImageInput) {
      cfgHeroImageInput.value = config.hero_image || '';
    }

    // Update heritage photo preview
    const histPreview = document.getElementById('historyImagePreview');
    const histHidden = document.getElementById('cfg_history_image');
    const histUrl = document.getElementById('cfg_history_image_url');
    const currentHistImg = config.history_image || DEFAULT_CONFIG.history_image;
    if (histPreview) histPreview.src = currentHistImg;
    if (histHidden) histHidden.value = currentHistImg;
    if (histUrl) histUrl.value = currentHistImg.startsWith('data:') ? '(Uploaded image file)' : currentHistImg;

    // Update Mar Augustine Kandathil photo preview
    const kandathilPreview = document.getElementById('kandathilPhotoPreview');
    const kandathilHidden = document.getElementById('cfg_kandathil_photo');
    const kandathilUrl = document.getElementById('cfg_kandathil_photo_url');
    const currentKandathilImg = config.kandathil_photo || DEFAULT_CONFIG.kandathil_photo;
    if (kandathilPreview) kandathilPreview.src = currentKandathilImg;
    if (kandathilHidden) kandathilHidden.value = currentKandathilImg;
    if (kandathilUrl) kandathilUrl.value = currentKandathilImg.startsWith('data:') ? '(Uploaded image file)' : currentKandathilImg;

    // Typography locked to permanent defaults

    // Update leader photo previews
    const updatePreview = (previewId, val, defaultVal) => {
      const el = document.getElementById(previewId);
      if (el) el.src = val || defaultVal;
    };
    updatePreview('vicarPhotoPreview', config.vicar_photo, DEFAULT_CONFIG.vicar_photo);
    updatePreview('trustee1PhotoPreview', config.trustee1_photo, DEFAULT_CONFIG.trustee1_photo);
    updatePreview('trustee2PhotoPreview', config.trustee2_photo, DEFAULT_CONFIG.trustee2_photo);
    updatePreview('viceChairmanPhotoPreview', config.vice_chairman_photo, DEFAULT_CONFIG.vice_chairman_photo);

    // Update community establishments & facilities photo previews
    updatePreview('sdImgPreview', config.sd_img, DEFAULT_CONFIG.sd_img);
    updatePreview('chemmanakaryImgPreview', config.chemmanakary_img, DEFAULT_CONFIG.chemmanakary_img);
    updatePreview('instSchoolImgPreview', config.inst_school_img, DEFAULT_CONFIG.inst_school_img);
    updatePreview('instCulturalImgPreview', config.inst_cultural_img, DEFAULT_CONFIG.inst_cultural_img);
    updatePreview('instComplexImgPreview', config.inst_complex_img, DEFAULT_CONFIG.inst_complex_img);

    currentNavItems = getNavItems();
    renderNavItemsTable();

    currentHighlightItems = getHighlightItems();
    renderHighlightsTable();

    currentFeastItems = getFeastItems();
    renderFeastsTable();

    currentGalleryItems = getGalleryItems();
    renderAdminGalleryGrid();
  }

  // =========================================================================
  // KEYWORD-BASED ICON AUTO-GENERATOR
  // Matches text keywords to appropriate FontAwesome icons
  // =========================================================================
  function resolveIconForKeyword(text) {
    if (!text) return 'fa-circle-check';
    const lower = text.toLowerCase();

    // 1. Flag / Kodiyettu / Banner
    if (lower.includes('kodi') || lower.includes('flag') || lower.includes('hoist') || lower.includes('banner')) {
      return 'fa-flag';
    }
    // 2. Raza / Procession / Walk / Torch / Fire
    if (lower.includes('raza') || lower.includes('procession') || lower.includes('pradakshinam') || lower.includes('pradakhshinam') || lower.includes('fire') || lower.includes('candle') || lower.includes('torch')) {
      return 'fa-fire';
    }
    // 3. Choir / Song / Music / Hymn / Singing / Band
    if (lower.includes('choir') || lower.includes('music') || lower.includes('sing') || lower.includes('song') || lower.includes('hymn') || lower.includes('band') || lower.includes('melody') || lower.includes('melodious')) {
      return 'fa-music';
    }
    // 4. Nercha / Food / Meal / Feast / Snehabhojanam / Utensils / Rice / Pachor
    if (lower.includes('nercha') || lower.includes('snehabhojan') || lower.includes('bhojan') || lower.includes('food') || lower.includes('meal') || lower.includes('feast') || lower.includes('eat') || lower.includes('utensil') || lower.includes('pachor')) {
      return 'fa-utensils';
    }
    // 5. Cross / Crucifix / St. Thomas / Christian / Holy
    if (lower.includes('cross') || lower.includes('thomas') || lower.includes('apostle') || lower.includes('saint')) {
      return 'fa-cross';
    }
    // 6. Mass / Qurbana / Altar / Chalice / Wine / Bread / Liturgy
    if (lower.includes('qurbana') || lower.includes('mass') || lower.includes('chalice') || lower.includes('altar') || lower.includes('eucharist') || lower.includes('liturg')) {
      return 'fa-wine-glass-alt';
    }
    // 7. Prayer / Rosary / Novena / Adoration / Bless
    if (lower.includes('pray') || lower.includes('rosary') || lower.includes('novena') || lower.includes('adoration') || lower.includes('bless') || lower.includes('worship')) {
      return 'fa-hands-praying';
    }
    // 8. Bell / Chime / Sound / Announcement
    if (lower.includes('bell') || lower.includes('chime') || lower.includes('mani')) {
      return 'fa-bell';
    }
    // 9. Light / Star / Candle / Spark
    if (lower.includes('light') || lower.includes('star') || lower.includes('spark') || lower.includes('diya')) {
      return 'fa-star';
    }
    // 10. Dove / Holy Spirit / Peace
    if (lower.includes('dove') || lower.includes('spirit') || lower.includes('peace')) {
      return 'fa-dove';
    }
    // 11. Gift / Offering / Kaazhcha
    if (lower.includes('gift') || lower.includes('offer') || lower.includes('kaazh') || lower.includes('kazhcha')) {
      return 'fa-gift';
    }
    // 12. Book / Gospel / Bible / Reading
    if (lower.includes('book') || lower.includes('bible') || lower.includes('gospel') || lower.includes('read') || lower.includes('scripture')) {
      return 'fa-book-bible';
    }
    // 13. Water / Baptism / Danaha / Bath
    if (lower.includes('water') || lower.includes('baptis') || lower.includes('rakkuli')) {
      return 'fa-water';
    }
    // 14. Heart / Love / Charity / Karunya
    if (lower.includes('love') || lower.includes('heart') || lower.includes('charity') || lower.includes('karunya')) {
      return 'fa-heart';
    }
    // 15. Crown / Royalty / King
    if (lower.includes('crown') || lower.includes('king') || lower.includes('queen') || lower.includes('raja')) {
      return 'fa-crown';
    }

    // Default icon
    return 'fa-check-circle';
  }

  // =========================================================================
  // MAIN FEAST HIGHLIGHTS MANAGER (Add, Edit, Delete, Reorder, Auto-Icon)
  // =========================================================================
  const highlightsTableBody = document.getElementById('highlightsTableBody');
  const openAddHighlightBtn = document.getElementById('openAddHighlightBtn');
  const highlightEditorCard = document.getElementById('highlightEditorCard');
  const highlightEditorTitle = document.getElementById('highlightEditorTitle');
  const highlightEditIndex = document.getElementById('highlightEditIndex');
  const highlightEditText = document.getElementById('highlightEditText');
  const highlightIconPreview = document.getElementById('highlightIconPreview');
  const highlightIconPreviewName = document.getElementById('highlightIconPreviewName');
  const cancelHighlightEditBtn = document.getElementById('cancelHighlightEditBtn');
  const saveHighlightEditBtn = document.getElementById('saveHighlightEditBtn');

  let currentHighlightItems = [];

  function getHighlightItems() {
    try {
      const saved = localStorage.getItem(HIGHLIGHTS_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Error reading highlights', e);
    }
    return [...DEFAULT_HIGHLIGHTS];
  }

  function persistHighlightItems(items) {
    localStorage.setItem(HIGHLIGHTS_KEY, JSON.stringify(items));
    renderHighlightsTable();
  }

  function updateHighlightIconLive() {
    if (!highlightEditText || !highlightIconPreview || !highlightIconPreviewName) return;
    const iconClass = resolveIconForKeyword(highlightEditText.value.trim());
    highlightIconPreview.className = `fas ${iconClass}`;
    highlightIconPreviewName.textContent = iconClass;
  }

  if (highlightEditText) {
    highlightEditText.addEventListener('input', updateHighlightIconLive);
  }

  function renderHighlightsTable() {
    if (!highlightsTableBody) return;
    highlightsTableBody.innerHTML = '';

    if (currentHighlightItems.length === 0) {
      highlightsTableBody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align:center; padding:1.2rem; color:#94a3b8;">
            No highlights configured. Click "Add Highlight Item" to add one.
          </td>
        </tr>
      `;
      return;
    }

    currentHighlightItems.forEach((text, idx) => {
      const iconClass = resolveIconForKeyword(text);
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span style="font-weight:700; color:#64748b;">#${idx + 1}</span></td>
        <td>
          <span style="display:inline-flex; align-items:center; gap:6px; background:#f1f5f9; border:1px solid #cbd5e1; border-radius:6px; padding:3px 8px; font-size:0.8rem; color:#0f1c3f; font-weight:600;">
            <i class="fas ${iconClass}" style="color:var(--admin-gold); font-size:0.95rem;"></i>
            <span>${iconClass}</span>
          </span>
        </td>
        <td><strong style="color:var(--admin-navy); font-size:0.92rem;">${escapeHtml(text)}</strong></td>
        <td style="text-align:center;">
          <button type="button" class="btn-icon-action move-hl-up-btn" data-index="${idx}" ${idx === 0 ? 'disabled' : ''} title="Move Up">
            <i class="fas fa-arrow-up"></i>
          </button>
          <button type="button" class="btn-icon-action move-hl-down-btn" data-index="${idx}" ${idx === currentHighlightItems.length - 1 ? 'disabled' : ''} title="Move Down" style="margin-left:4px;">
            <i class="fas fa-arrow-down"></i>
          </button>
        </td>
        <td style="text-align:center;">
          <button type="button" class="btn-icon-action btn-icon-edit edit-hl-btn" data-index="${idx}" title="Edit Highlight">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="btn-icon-action btn-icon-delete delete-hl-btn" data-index="${idx}" title="Delete Highlight" style="margin-left:4px;">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      `;
      highlightsTableBody.appendChild(tr);
    });

    // Reorder: Move Up
    highlightsTableBody.querySelectorAll('.move-hl-up-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        if (i > 0) {
          const temp = currentHighlightItems[i];
          currentHighlightItems[i] = currentHighlightItems[i - 1];
          currentHighlightItems[i - 1] = temp;
          persistHighlightItems(currentHighlightItems);
          triggerSaveNotice();
        }
      });
    });

    // Reorder: Move Down
    highlightsTableBody.querySelectorAll('.move-hl-down-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        if (i < currentHighlightItems.length - 1) {
          const temp = currentHighlightItems[i];
          currentHighlightItems[i] = currentHighlightItems[i + 1];
          currentHighlightItems[i + 1] = temp;
          persistHighlightItems(currentHighlightItems);
          triggerSaveNotice();
        }
      });
    });

    // Edit Highlight
    highlightsTableBody.querySelectorAll('.edit-hl-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        const item = currentHighlightItems[i];
        if (item) {
          highlightEditIndex.value = i;
          highlightEditText.value = item;
          updateHighlightIconLive();
          highlightEditorTitle.innerHTML = `<i class="fas fa-edit"></i> Edit Highlight #${i + 1}: ${escapeHtml(item)}`;
          highlightEditorCard.style.display = 'block';
          highlightEditText.focus();
        }
      });
    });

    // Delete Highlight
    highlightsTableBody.querySelectorAll('.delete-hl-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        const item = currentHighlightItems[i];
        if (confirm(`Are you sure you want to delete highlight "${item}"?`)) {
          currentHighlightItems.splice(i, 1);
          persistHighlightItems(currentHighlightItems);
          triggerSaveNotice();
          if (highlightEditorCard) highlightEditorCard.style.display = 'none';
        }
      });
    });
  }

  // Open Add Highlight Form
  if (openAddHighlightBtn) {
    openAddHighlightBtn.addEventListener('click', () => {
      highlightEditIndex.value = '-1';
      highlightEditText.value = '';
      updateHighlightIconLive();
      highlightEditorTitle.innerHTML = '<i class="fas fa-plus-circle"></i> Add New Feast Highlight';
      highlightEditorCard.style.display = 'block';
      highlightEditText.focus();
    });
  }

  // Cancel Highlight Form
  if (cancelHighlightEditBtn) {
    cancelHighlightEditBtn.addEventListener('click', () => {
      highlightEditorCard.style.display = 'none';
    });
  }

  // Save / Update Highlight
  if (saveHighlightEditBtn) {
    saveHighlightEditBtn.addEventListener('click', () => {
      const text = highlightEditText.value.trim();
      const index = parseInt(highlightEditIndex.value, 10);

      if (!text) {
        alert('Please enter a highlight event title.');
        highlightEditText.focus();
        return;
      }

      if (index >= 0 && index < currentHighlightItems.length) {
        // Edit existing
        currentHighlightItems[index] = text;
      } else {
        // Add new
        currentHighlightItems.push(text);
      }

      persistHighlightItems(currentHighlightItems);
      highlightEditorCard.style.display = 'none';
      triggerSaveNotice();
    });
  }

  // =========================================================================
  // OTHER PARISH FEASTS MANAGER (Add, Edit, Delete, Reorder, Update)
  // =========================================================================
  const feastsTableBody = document.getElementById('feastsTableBody');
  const openAddFeastBtn = document.getElementById('openAddFeastBtn');
  const feastEditorCard = document.getElementById('feastEditorCard');
  const feastEditorTitle = document.getElementById('feastEditorTitle');
  const feastEditIndex = document.getElementById('feastEditIndex');
  const feastEditTitle = document.getElementById('feastEditTitle');
  const feastEditMonth = document.getElementById('feastEditMonth');
  const feastEditDay = document.getElementById('feastEditDay');
  const feastEditDesc = document.getElementById('feastEditDesc');
  const cancelFeastEditBtn = document.getElementById('cancelFeastEditBtn');
  const saveFeastEditBtn = document.getElementById('saveFeastEditBtn');

  let currentFeastItems = [];

  function getFeastItems() {
    try {
      const saved = localStorage.getItem(FEASTS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Automatic migration: If position #1 has the obsolete placeholder or baptism description for St. Sebastian, upgrade to canonical definition
          const sebastianDesc = 'Celebrated on the Sunday following January 20th. Features the solemn Ambu Pradakshinam (arrow procession) traversing all 12 parish ward units, followed by solemn Holy Mass in the morning.';
          parsed.forEach(item => {
            if (item && item.title && item.title.toLowerCase().includes('sebastian')) {
              item.desc = sebastianDesc;
              if (!item.month) item.month = 'Jan';
              if (item.day === '20') item.day = 'Sun*';
              if (!item.title.includes('അമ്പു തിരുനാൾ')) item.title = 'Feast of St. Sebastian (അമ്പു തിരുനാൾ)';
            }
          });
          // Ensure St. Sebastian is #1
          const sebIdx = parsed.findIndex(item => item && item.title && item.title.toLowerCase().includes('sebastian'));
          if (sebIdx > 0) {
            const sebItem = parsed.splice(sebIdx, 1)[0];
            parsed.unshift(sebItem);
          } else if (sebIdx === -1) {
            parsed.unshift({ ...DEFAULT_FEASTS[0] });
          }

          // Ensure St. Joseph (ഊട്ടുനേർച്ച) is placed at #2
          const josephItem = {
            month: 'Mar',
            day: '19',
            title: 'Feast of St. Joseph (ഊട്ടുനേർച്ച)',
            desc: 'Solemn Feast of St. Joseph featuring festive Holy Mass and the traditional grand Oottu Nercha fellowship banquet served lovingly to over 1,500+ faithful and pilgrims every year.'
          };
          const josephIdx = parsed.findIndex(item => item && item.title && item.title.toLowerCase().includes('joseph'));
          if (josephIdx > -1) {
            parsed[josephIdx] = josephItem;
            if (josephIdx !== 1) {
              const j = parsed.splice(josephIdx, 1)[0];
              parsed.splice(1, 0, j);
            }
          } else {
            parsed.splice(1, 0, josephItem);
          }

          // Ensure Holy Week item has dynamically computed upcoming dates
          const holyWeekIdx = parsed.findIndex(item => item && item.title && item.title.toLowerCase().includes('holy week'));
          if (holyWeekIdx > -1) {
            parsed[holyWeekIdx].month = upcomingHolyWeek.month;
            parsed[holyWeekIdx].day = upcomingHolyWeek.day;
            parsed[holyWeekIdx].title = 'Holy Week & Easter';
            parsed[holyWeekIdx].desc = `Solemn liturgical services of Palm Sunday (${upcomingHolyWeek.palmDateStr}), Pesaha Holy Thursday, Good Friday, and the Glorious Resurrection of Easter (${upcomingHolyWeek.easterDateStr}).`;
          }

          localStorage.setItem(FEASTS_KEY, JSON.stringify(parsed));
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Error reading feasts', e);
    }
    return [...DEFAULT_FEASTS];
  }

  function persistFeastItems(items) {
    localStorage.setItem(FEASTS_KEY, JSON.stringify(items));
    renderFeastsTable();
  }

  function renderFeastsTable() {
    if (!feastsTableBody) return;
    feastsTableBody.innerHTML = '';

    if (currentFeastItems.length === 0) {
      feastsTableBody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align:center; padding:1.5rem; color:#94a3b8;">
            No feasts configured. Click "Add New Feast" to add one.
          </td>
        </tr>
      `;
      return;
    }

    currentFeastItems.forEach((feast, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span style="font-weight:700; color:#64748b;">#${idx + 1}</span></td>
        <td>
          <span style="display:inline-flex; flex-direction:column; align-items:center; justify-content:center; background:#fef3c7; border:1px solid #fde68a; border-radius:6px; padding:3px 8px; min-width:44px; text-align:center;">
            <strong style="font-size:0.68rem; text-transform:uppercase; color:#92400e; line-height:1;">${escapeHtml(feast.month || 'FEAST')}</strong>
            <span style="font-size:0.95rem; font-weight:800; color:#0f1c3f; line-height:1.1;">${escapeHtml(feast.day || '•')}</span>
          </span>
        </td>
        <td><strong style="color:var(--admin-navy);">${escapeHtml(feast.title)}</strong></td>
        <td><p style="font-size:0.85rem; color:#475569; margin:0; max-width:380px; white-space:normal; line-height:1.4;">${escapeHtml(feast.desc)}</p></td>
        <td style="text-align:center;">
          <button type="button" class="btn-icon-action move-feast-up-btn" data-index="${idx}" ${idx === 0 ? 'disabled' : ''} title="Move Up">
            <i class="fas fa-arrow-up"></i>
          </button>
          <button type="button" class="btn-icon-action move-feast-down-btn" data-index="${idx}" ${idx === currentFeastItems.length - 1 ? 'disabled' : ''} title="Move Down" style="margin-left:4px;">
            <i class="fas fa-arrow-down"></i>
          </button>
        </td>
        <td style="text-align:center;">
          <button type="button" class="btn-icon-action btn-icon-edit edit-feast-btn" data-index="${idx}" title="Edit Feast">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="btn-icon-action btn-icon-delete delete-feast-btn" data-index="${idx}" title="Delete Feast" style="margin-left:4px;">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      `;
      feastsTableBody.appendChild(tr);
    });

    // Reorder: Move Up
    feastsTableBody.querySelectorAll('.move-feast-up-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        if (i > 0) {
          const temp = currentFeastItems[i];
          currentFeastItems[i] = currentFeastItems[i - 1];
          currentFeastItems[i - 1] = temp;
          persistFeastItems(currentFeastItems);
          triggerSaveNotice();
        }
      });
    });

    // Reorder: Move Down
    feastsTableBody.querySelectorAll('.move-feast-down-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        if (i < currentFeastItems.length - 1) {
          const temp = currentFeastItems[i];
          currentFeastItems[i] = currentFeastItems[i + 1];
          currentFeastItems[i + 1] = temp;
          persistFeastItems(currentFeastItems);
          triggerSaveNotice();
        }
      });
    });

    // Edit Feast
    feastsTableBody.querySelectorAll('.edit-feast-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        const item = currentFeastItems[i];
        if (item) {
          feastEditIndex.value = i;
          feastEditTitle.value = item.title || '';
          feastEditMonth.value = item.month || '';
          feastEditDay.value = item.day || '';
          feastEditDesc.value = item.desc || '';
          feastEditorTitle.innerHTML = `<i class="fas fa-edit"></i> Edit Feast #${i + 1}: ${escapeHtml(item.title)}`;
          feastEditorCard.style.display = 'block';
          feastEditTitle.focus();
        }
      });
    });

    // Delete Feast
    feastsTableBody.querySelectorAll('.delete-feast-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        const item = currentFeastItems[i];
        if (confirm(`Are you sure you want to delete the feast "${item.title}"?`)) {
          currentFeastItems.splice(i, 1);
          persistFeastItems(currentFeastItems);
          triggerSaveNotice();
          if (feastEditorCard) feastEditorCard.style.display = 'none';
        }
      });
    });
  }

  // Open Add Feast Form
  if (openAddFeastBtn) {
    openAddFeastBtn.addEventListener('click', () => {
      feastEditIndex.value = '-1';
      feastEditTitle.value = '';
      feastEditMonth.value = '';
      feastEditDay.value = '';
      feastEditDesc.value = '';
      feastEditorTitle.innerHTML = '<i class="fas fa-plus-circle"></i> Add New Parish Feast';
      feastEditorCard.style.display = 'block';
      feastEditTitle.focus();
    });
  }

  // Cancel Feast Form
  if (cancelFeastEditBtn) {
    cancelFeastEditBtn.addEventListener('click', () => {
      feastEditorCard.style.display = 'none';
    });
  }

  // Save / Update Feast
  if (saveFeastEditBtn) {
    saveFeastEditBtn.addEventListener('click', () => {
      const title = feastEditTitle.value.trim();
      const month = feastEditMonth.value.trim();
      const day = feastEditDay.value.trim();
      const desc = feastEditDesc.value.trim();
      const index = parseInt(feastEditIndex.value, 10);

      if (!title) {
        alert('Please enter a Feast Title / Name.');
        feastEditTitle.focus();
        return;
      }
      if (!desc) {
        alert('Please enter a Feast Description.');
        feastEditDesc.focus();
        return;
      }

      const feastData = {
        title,
        month: month || 'Feast',
        day: day || '•',
        desc
      };

      if (index >= 0 && index < currentFeastItems.length) {
        // Update existing feast
        currentFeastItems[index] = feastData;
      } else {
        // Add new feast
        currentFeastItems.push(feastData);
      }

      persistFeastItems(currentFeastItems);
      feastEditorCard.style.display = 'none';
      triggerSaveNotice();
    });
  }

  // =========================================================================
  // 6.3. FORMER PARISH VICARS MANAGER (Add, Edit, Delete, Reorder, Image Upload)
  // =========================================================================
  const vicarsTableBody = document.getElementById('vicarsTableBody');
  const vicarEditorCard = document.getElementById('vicarEditorCard');
  const vicarEditorTitle = document.getElementById('vicarEditorTitle');
  const vicarEditIndex = document.getElementById('vicarEditIndex');
  const vicarEditName = document.getElementById('vicarEditName');
  const vicarEditYears = document.getElementById('vicarEditYears');
  const vicarEditNote = document.getElementById('vicarEditNote');
  const vicarEditPreview = document.getElementById('vicarEditPreview');
  const vicarEditFileInput = document.getElementById('vicarEditFileInput');
  const vicarEditPhotoVal = document.getElementById('vicarEditPhotoVal');
  const openAddVicarModalBtn = document.getElementById('openAddVicarModalBtn');
  const cancelVicarFormBtn = document.getElementById('cancelVicarFormBtn');
  const cancelVicarEditorBtn = document.getElementById('cancelVicarEditorBtn');
  const saveVicarItemBtn = document.getElementById('saveVicarItemBtn');
  const resetVicarsBtn = document.getElementById('resetVicarsBtn');
  const saveVicarsPanelBtn = document.getElementById('saveVicarsPanelBtn');

  let currentVicarItems = loadVicarItems();

  function loadVicarItems() {
    try {
      const saved = localStorage.getItem(VICARS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Error reading vicars', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_FORMER_VICARS));
  }

  function persistVicarItems(items) {
    currentVicarItems = items;
    localStorage.setItem(VICARS_KEY, JSON.stringify(items));
    renderVicarsTable();
  }

  function renderVicarsTable() {
    if (!vicarsTableBody) return;
    vicarsTableBody.innerHTML = '';

    if (currentVicarItems.length === 0) {
      vicarsTableBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align:center; padding:1.8rem; color:#94a3b8;">
            No former vicars added yet. Click "Add Former Vicar" to create one.
          </td>
        </tr>
      `;
      return;
    }

    currentVicarItems.forEach((vic, idx) => {
      const tr = document.createElement('tr');
      const photoSrc = vic.photo || 'assets/images/vicar_avatar.svg';
      tr.innerHTML = `
        <td><span style="font-weight:700; color:#64748b;">#${idx + 1}</span></td>
        <td style="text-align:center;">
          <img src="${escapeHtml(photoSrc)}" alt="${escapeHtml(vic.name)}" style="width:40px; height:48px; border-radius:6px; object-fit:cover; border:1px solid #cbd5e1;">
        </td>
        <td>
          <strong style="color:var(--admin-navy); font-size:0.95rem;">${escapeHtml(vic.name)}</strong>
        </td>
        <td>
          <span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:6px; background:#eff6ff; color:#1d4ed8; font-weight:700; font-size:0.85rem; border:1px solid #bfdbfe;">
            ${escapeHtml(vic.years || 'Pastoral Term')}
          </span>
        </td>
        <td>
          <span style="color:#64748b; font-size:0.85rem;">${escapeHtml(vic.note || '—')}</span>
        </td>
        <td style="text-align:center;">
          <button type="button" class="btn-icon-action move-vicar-up-btn" data-index="${idx}" ${idx === 0 ? 'disabled' : ''} title="Move Up">
            <i class="fas fa-arrow-up"></i>
          </button>
          <button type="button" class="btn-icon-action move-vicar-down-btn" data-index="${idx}" ${idx === currentVicarItems.length - 1 ? 'disabled' : ''} title="Move Down" style="margin-left:4px;">
            <i class="fas fa-arrow-down"></i>
          </button>
        </td>
        <td style="text-align:center;">
          <button type="button" class="btn-icon-action btn-icon-edit edit-vicar-btn" data-index="${idx}" title="Edit Vicar">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="btn-icon-action btn-icon-delete delete-vicar-btn" data-index="${idx}" title="Delete Vicar" style="margin-left:4px;">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      `;
      vicarsTableBody.appendChild(tr);
    });

    // Move Up
    vicarsTableBody.querySelectorAll('.move-vicar-up-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        if (i > 0) {
          const temp = currentVicarItems[i];
          currentVicarItems[i] = currentVicarItems[i - 1];
          currentVicarItems[i - 1] = temp;
          persistVicarItems(currentVicarItems);
          triggerSaveNotice();
        }
      });
    });

    // Move Down
    vicarsTableBody.querySelectorAll('.move-vicar-down-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        if (i < currentVicarItems.length - 1) {
          const temp = currentVicarItems[i];
          currentVicarItems[i] = currentVicarItems[i + 1];
          currentVicarItems[i + 1] = temp;
          persistVicarItems(currentVicarItems);
          triggerSaveNotice();
        }
      });
    });

    // Edit
    vicarsTableBody.querySelectorAll('.edit-vicar-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        const item = currentVicarItems[i];
        if (item) {
          vicarEditIndex.value = i;
          vicarEditName.value = item.name || '';
          vicarEditYears.value = item.years || '';
          vicarEditNote.value = item.note || '';
          vicarEditPhotoVal.value = item.photo || 'assets/images/vicar_avatar.svg';
          if (vicarEditPreview) vicarEditPreview.src = item.photo || 'assets/images/vicar_avatar.svg';
          if (vicarEditorTitle) vicarEditorTitle.innerHTML = '<i class="fas fa-edit" style="color:var(--admin-gold);"></i> Edit Former Vicar';
          if (vicarEditorCard) vicarEditorCard.style.display = 'block';
          vicarEditName.focus();
        }
      });
    });

    // Delete
    vicarsTableBody.querySelectorAll('.delete-vicar-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        const item = currentVicarItems[i];
        if (confirm(`Remove "${item.name}" from former vicars list?`)) {
          currentVicarItems.splice(i, 1);
          persistVicarItems(currentVicarItems);
          triggerSaveNotice();
        }
      });
    });
  }

  // Vicar Image Uploader
  if (vicarEditFileInput) {
    vicarEditFileInput.addEventListener('change', async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      try {
        const result = await processImageWithSmartHDCompression(file, { maxDim: 600, targetMaxBytes: 300 * 1024 });
        if (vicarEditPhotoVal) vicarEditPhotoVal.value = result.dataUrl;
        if (vicarEditPreview) vicarEditPreview.src = result.dataUrl;
        renderCompressionNotice('vicarEditCompressionNotice', result);
      } catch (err) {
        alert('Failed to process vicar photo: ' + err.message);
      }
    });
  }

  // Open Add Vicar Modal
  if (openAddVicarModalBtn) {
    openAddVicarModalBtn.addEventListener('click', () => {
      vicarEditIndex.value = '-1';
      vicarEditName.value = '';
      vicarEditYears.value = '';
      vicarEditNote.value = '';
      vicarEditPhotoVal.value = 'assets/images/vicar_avatar.svg';
      if (vicarEditPreview) vicarEditPreview.src = 'assets/images/vicar_avatar.svg';
      if (vicarEditFileInput) vicarEditFileInput.value = '';
      renderCompressionNotice('vicarEditCompressionNotice', null);
      if (vicarEditorTitle) vicarEditorTitle.innerHTML = '<i class="fas fa-plus-circle" style="color:var(--admin-gold);"></i> Add Former Vicar';
      if (vicarEditorCard) vicarEditorCard.style.display = 'block';
      vicarEditName.focus();
    });
  }

  if (cancelVicarFormBtn) {
    cancelVicarFormBtn.addEventListener('click', () => {
      if (vicarEditorCard) vicarEditorCard.style.display = 'none';
    });
  }
  if (cancelVicarEditorBtn) {
    cancelVicarEditorBtn.addEventListener('click', () => {
      if (vicarEditorCard) vicarEditorCard.style.display = 'none';
    });
  }

  // Reset Vicars to Defaults
  if (resetVicarsBtn) {
    resetVicarsBtn.addEventListener('click', () => {
      if (confirm('Reset Former Vicars to default records?')) {
        currentVicarItems = JSON.parse(JSON.stringify(DEFAULT_FORMER_VICARS));
        persistVicarItems(currentVicarItems);
        triggerSaveNotice();
        if (vicarEditorCard) vicarEditorCard.style.display = 'none';
      }
    });
  }

  // Save Vicar Item
  if (saveVicarItemBtn) {
    saveVicarItemBtn.addEventListener('click', () => {
      const name = vicarEditName.value.trim();
      const years = vicarEditYears.value.trim();
      const note = vicarEditNote.value.trim();
      const photo = vicarEditPhotoVal.value || 'assets/images/vicar_avatar.svg';
      const index = parseInt(vicarEditIndex.value, 10);

      if (!name) {
        alert('Please enter the Vicar Name.');
        vicarEditName.focus();
        return;
      }
      if (!years) {
        alert('Please enter Service Duration (years).');
        vicarEditYears.focus();
        return;
      }

      const vicarData = { name, years, note, photo };

      if (index >= 0 && index < currentVicarItems.length) {
        currentVicarItems[index] = vicarData;
      } else {
        currentVicarItems.push(vicarData);
      }

      persistVicarItems(currentVicarItems);
      if (vicarEditorCard) vicarEditorCard.style.display = 'none';
      triggerSaveNotice();
    });
  }

  if (saveVicarsPanelBtn) {
    saveVicarsPanelBtn.addEventListener('click', () => {
      saveConfig();
    });
  }

  renderVicarsTable();

  // =========================================================================
  // 6.4. PRIESTS & RELIGIOUS SISTERS FROM PARISH MANAGER (Full CRUD)
  // =========================================================================
  const vocationsTableBody = document.getElementById('vocationsTableBody');
  const vocationEditorCard = document.getElementById('vocationEditorCard');
  const vocationEditorTitle = document.getElementById('vocationEditorTitle');
  const vocationEditIndex = document.getElementById('vocationEditIndex');
  const vocationEditType = document.getElementById('vocationEditType');
  const vocationEditName = document.getElementById('vocationEditName');
  const vocationEditCongregation = document.getElementById('vocationEditCongregation');
  const vocationEditHouse = document.getElementById('vocationEditHouse');
  const vocationEditYear = document.getElementById('vocationEditYear');
  const vocationEditNote = document.getElementById('vocationEditNote');
  const vocationEditPreview = document.getElementById('vocationEditPreview');
  const vocationEditFileInput = document.getElementById('vocationEditFileInput');
  const vocationEditPhotoVal = document.getElementById('vocationEditPhotoVal');
  const openAddVocationModalBtn = document.getElementById('openAddVocationModalBtn');
  const cancelVocationFormBtn = document.getElementById('cancelVocationFormBtn');
  const cancelVocationEditorBtn = document.getElementById('cancelVocationEditorBtn');
  const saveVocationItemBtn = document.getElementById('saveVocationItemBtn');
  const resetVocationsBtn = document.getElementById('resetVocationsBtn');
  const saveVocationsPanelBtn = document.getElementById('saveVocationsPanelBtn');

  let currentVocationItems = loadVocationItems();

  function loadVocationItems() {
    try {
      const saved = localStorage.getItem(VOCATIONS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Error reading vocations', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_PARISH_VOCATIONS));
  }

  function persistVocationItems(items) {
    currentVocationItems = items;
    localStorage.setItem(VOCATIONS_KEY, JSON.stringify(items));
    renderVocationsTable();
  }

  function renderVocationsTable() {
    if (!vocationsTableBody) return;
    vocationsTableBody.innerHTML = '';

    if (currentVocationItems.length === 0) {
      vocationsTableBody.innerHTML = `
        <tr>
          <td colspan="9" style="text-align:center; padding:1.8rem; color:#94a3b8;">
            No priests or religious sisters listed yet. Click "Add Priest / Sister" to add.
          </td>
        </tr>
      `;
      return;
    }

    currentVocationItems.forEach((voc, idx) => {
      const isPriest = voc.type === 'priest';
      const defaultPhoto = isPriest ? 'assets/images/vicar_avatar.svg' : 'assets/images/sister_avatar.svg';
      const photoSrc = voc.photo || defaultPhoto;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span style="font-weight:700; color:#64748b;">#${idx + 1}</span></td>
        <td style="text-align:center;">
          <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; padding:0.2rem 0.55rem; border-radius:999px; ${isPriest ? 'background:#eff6ff; color:#1d4ed8; border:1px solid #bfdbfe;' : 'background:#fdf2f8; color:#be185d; border:1px solid #fbcfe8;'}">
            <i class="fas ${isPriest ? 'fa-cross' : 'fa-dove'}"></i> ${isPriest ? 'Priest' : 'Sister'}
          </span>
        </td>
        <td style="text-align:center;">
          <img src="${escapeHtml(photoSrc)}" alt="${escapeHtml(voc.name)}" style="width:36px; height:44px; border-radius:6px; object-fit:cover; border:1px solid #cbd5e1;">
        </td>
        <td>
          <strong style="color:var(--admin-navy); font-size:0.95rem;">${escapeHtml(voc.name)}</strong>
        </td>
        <td>
          <span style="color:#0f172a; font-size:0.86rem; font-weight:600;">${escapeHtml(voc.congregation || '—')}</span>
        </td>
        <td>
          <span style="color:#64748b; font-size:0.84rem;">${escapeHtml(voc.house || '—')}</span>
        </td>
        <td>
          <span style="display:inline-block; font-size:0.82rem; color:#475569; font-weight:600;">${escapeHtml(voc.year || '—')}</span>
        </td>
        <td style="text-align:center;">
          <button type="button" class="btn-icon-action move-vocation-up-btn" data-index="${idx}" ${idx === 0 ? 'disabled' : ''} title="Move Up">
            <i class="fas fa-arrow-up"></i>
          </button>
          <button type="button" class="btn-icon-action move-vocation-down-btn" data-index="${idx}" ${idx === currentVocationItems.length - 1 ? 'disabled' : ''} title="Move Down" style="margin-left:4px;">
            <i class="fas fa-arrow-down"></i>
          </button>
        </td>
        <td style="text-align:center;">
          <button type="button" class="btn-icon-action btn-icon-edit edit-vocation-btn" data-index="${idx}" title="Edit Member">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="btn-icon-action btn-icon-delete delete-vocation-btn" data-index="${idx}" title="Delete Member" style="margin-left:4px;">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      `;
      vocationsTableBody.appendChild(tr);
    });

    // Move Up
    vocationsTableBody.querySelectorAll('.move-vocation-up-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        if (i > 0) {
          const temp = currentVocationItems[i];
          currentVocationItems[i] = currentVocationItems[i - 1];
          currentVocationItems[i - 1] = temp;
          persistVocationItems(currentVocationItems);
          triggerSaveNotice();
        }
      });
    });

    // Move Down
    vocationsTableBody.querySelectorAll('.move-vocation-down-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        if (i < currentVocationItems.length - 1) {
          const temp = currentVocationItems[i];
          currentVocationItems[i] = currentVocationItems[i + 1];
          currentVocationItems[i + 1] = temp;
          persistVocationItems(currentVocationItems);
          triggerSaveNotice();
        }
      });
    });

    // Edit
    vocationsTableBody.querySelectorAll('.edit-vocation-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        const item = currentVocationItems[i];
        if (item) {
          vocationEditIndex.value = i;
          vocationEditType.value = item.type || 'priest';
          vocationEditName.value = item.name || '';
          vocationEditCongregation.value = item.congregation || '';
          vocationEditHouse.value = item.house || '';
          vocationEditYear.value = item.year || '';
          vocationEditNote.value = item.note || '';
          const defaultAvatar = item.type === 'sister' ? 'assets/images/sister_avatar.svg' : 'assets/images/vicar_avatar.svg';
          vocationEditPhotoVal.value = item.photo || defaultAvatar;
          if (vocationEditPreview) vocationEditPreview.src = item.photo || defaultAvatar;
          if (vocationEditorTitle) vocationEditorTitle.innerHTML = '<i class="fas fa-edit" style="color:var(--admin-gold);"></i> Edit Consecrated Member';
          if (vocationEditorCard) vocationEditorCard.style.display = 'block';
          vocationEditName.focus();
        }
      });
    });

    // Delete
    vocationsTableBody.querySelectorAll('.delete-vocation-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        const item = currentVocationItems[i];
        if (confirm(`Remove "${item.name}" from consecrated list?`)) {
          currentVocationItems.splice(i, 1);
          persistVocationItems(currentVocationItems);
          triggerSaveNotice();
        }
      });
    });
  }

  // Auto-switch default avatar on type change
  if (vocationEditType) {
    vocationEditType.addEventListener('change', () => {
      const isSister = vocationEditType.value === 'sister';
      const curPhoto = vocationEditPhotoVal.value;
      if (!curPhoto || curPhoto.includes('_avatar.svg')) {
        const newAvatar = isSister ? 'assets/images/sister_avatar.svg' : 'assets/images/vicar_avatar.svg';
        vocationEditPhotoVal.value = newAvatar;
        if (vocationEditPreview) vocationEditPreview.src = newAvatar;
      }
    });
  }

  // Vocation Image Uploader
  if (vocationEditFileInput) {
    vocationEditFileInput.addEventListener('change', async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      try {
        const result = await processImageWithSmartHDCompression(file, { maxDim: 600, targetMaxBytes: 300 * 1024 });
        if (vocationEditPhotoVal) vocationEditPhotoVal.value = result.dataUrl;
        if (vocationEditPreview) vocationEditPreview.src = result.dataUrl;
        renderCompressionNotice('vocationEditCompressionNotice', result);
      } catch (err) {
        alert('Failed to process photo: ' + err.message);
      }
    });
  }

  // Open Add Vocation Modal
  if (openAddVocationModalBtn) {
    openAddVocationModalBtn.addEventListener('click', () => {
      vocationEditIndex.value = '-1';
      vocationEditType.value = 'priest';
      vocationEditName.value = '';
      vocationEditCongregation.value = '';
      vocationEditHouse.value = '';
      vocationEditYear.value = '';
      vocationEditNote.value = '';
      vocationEditPhotoVal.value = 'assets/images/vicar_avatar.svg';
      if (vocationEditPreview) vocationEditPreview.src = 'assets/images/vicar_avatar.svg';
      if (vocationEditFileInput) vocationEditFileInput.value = '';
      renderCompressionNotice('vocationEditCompressionNotice', null);
      if (vocationEditorTitle) vocationEditorTitle.innerHTML = '<i class="fas fa-plus-circle" style="color:var(--admin-gold);"></i> Add Priest / Sister';
      if (vocationEditorCard) vocationEditorCard.style.display = 'block';
      vocationEditName.focus();
    });
  }

  if (cancelVocationFormBtn) {
    cancelVocationFormBtn.addEventListener('click', () => {
      if (vocationEditorCard) vocationEditorCard.style.display = 'none';
    });
  }
  if (cancelVocationEditorBtn) {
    cancelVocationEditorBtn.addEventListener('click', () => {
      if (vocationEditorCard) vocationEditorCard.style.display = 'none';
    });
  }

  // Reset Vocations to Defaults
  if (resetVocationsBtn) {
    resetVocationsBtn.addEventListener('click', () => {
      if (confirm('Reset Priests & Sisters to default parish list?')) {
        currentVocationItems = JSON.parse(JSON.stringify(DEFAULT_PARISH_VOCATIONS));
        persistVocationItems(currentVocationItems);
        triggerSaveNotice();
        if (vocationEditorCard) vocationEditorCard.style.display = 'none';
      }
    });
  }

  // Save Vocation Item
  if (saveVocationItemBtn) {
    saveVocationItemBtn.addEventListener('click', () => {
      const type = vocationEditType.value;
      const name = vocationEditName.value.trim();
      const congregation = vocationEditCongregation.value.trim();
      const house = vocationEditHouse.value.trim();
      const year = vocationEditYear.value.trim();
      const note = vocationEditNote.value.trim();
      const defaultAvatar = type === 'sister' ? 'assets/images/sister_avatar.svg' : 'assets/images/vicar_avatar.svg';
      const photo = vocationEditPhotoVal.value || defaultAvatar;
      const index = parseInt(vocationEditIndex.value, 10);

      if (!name) {
        alert('Please enter the Name.');
        vocationEditName.focus();
        return;
      }
      if (!congregation) {
        alert('Please enter Diocese or Religious Congregation.');
        vocationEditCongregation.focus();
        return;
      }

      const vocData = { type, name, congregation, house, year, note, photo };

      if (index >= 0 && index < currentVocationItems.length) {
        currentVocationItems[index] = vocData;
      } else {
        currentVocationItems.push(vocData);
      }

      persistVocationItems(currentVocationItems);
      if (vocationEditorCard) vocationEditorCard.style.display = 'none';
      triggerSaveNotice();
    });
  }

  if (saveVocationsPanelBtn) {
    saveVocationsPanelBtn.addEventListener('click', () => {
      saveConfig();
    });
  }

  renderVocationsTable();

  // =========================================================================
  // 6.5. Pious Associations & Pastoral Wings (Lay Ministries) Manager
  // =========================================================================
  const wingsTableBody = document.getElementById('wingsTableBody');
  const wingEditorCard = document.getElementById('wingEditorCard');
  const wingEditorTitle = document.getElementById('wingEditorTitle');
  const wingEditIndex = document.getElementById('wingEditIndex');
  const wingEditTitle = document.getElementById('wingEditTitle');
  const wingEditMalayalam = document.getElementById('wingEditMalayalam');
  const wingEditIcon = document.getElementById('wingEditIcon');
  const wingIconPreview = document.getElementById('wingIconPreview');
  const wingEditTag = document.getElementById('wingEditTag');
  const wingEditFooter = document.getElementById('wingEditFooter');
  const wingEditDesc = document.getElementById('wingEditDesc');
  const openAddWingBtn = document.getElementById('openAddWingModalBtn');
  const cancelWingBtn = document.getElementById('cancelWingFormBtn');
  const cancelWingEditorBtn = document.getElementById('cancelWingEditorBtn');
  const saveWingBtn = document.getElementById('saveWingItemBtn');
  const resetWingsBtn = document.getElementById('resetWingsBtn');
  const saveWingsPanelBtn = document.getElementById('saveWingsPanelBtn');

  let currentWingItems = loadWingItems();

  function loadWingItems() {
    try {
      const saved = localStorage.getItem(WINGS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Error reading pious wings', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_PIOUS_WINGS));
  }

  function persistWingItems(items) {
    localStorage.setItem(WINGS_KEY, JSON.stringify(items));
    renderWingsTable();
  }

  function renderWingsTable() {
    if (!wingsTableBody) return;
    wingsTableBody.innerHTML = '';

    if (currentWingItems.length === 0) {
      wingsTableBody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align:center; padding:1.8rem; color:#94a3b8;">
            No lay ministries configured. Click "Add New Association / Wing" to create one.
          </td>
        </tr>
      `;
      return;
    }

    currentWingItems.forEach((wing, idx) => {
      const iconClass = (wing.icon || 'fa-hand-holding-heart').replace(/^fa[srbld]?\s+/, '').trim();
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span style="font-weight:700; color:#64748b;">#${idx + 1}</span></td>
        <td style="text-align:center;">
          <span style="width:36px; height:36px; border-radius:10px; background:linear-gradient(135deg, #0f1c3f, #1e3a8a); color:#eec578; display:inline-flex; align-items:center; justify-content:center; font-size:1.1rem; border:1px solid rgba(212,163,75,0.35);">
            <i class="fas ${iconClass}"></i>
          </span>
        </td>
        <td>
          <strong style="color:var(--admin-navy); font-size:0.95rem;">${escapeHtml(wing.title)}</strong>
        </td>
        <td>
          <span style="color:#800020; font-weight:600; font-size:0.85rem;">${escapeHtml(wing.malayalam || '—')}</span>
        </td>
        <td>
          <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; padding:0.25rem 0.6rem; border-radius:999px; background:#fef3c7; color:#92400e; border:1px solid #fde68a;">
            ${escapeHtml(wing.tag || 'Ministry')}
          </span>
        </td>
        <td style="text-align:center;">
          <button type="button" class="btn-icon-action move-wing-up-btn" data-index="${idx}" ${idx === 0 ? 'disabled' : ''} title="Move Up">
            <i class="fas fa-arrow-up"></i>
          </button>
          <button type="button" class="btn-icon-action move-wing-down-btn" data-index="${idx}" ${idx === currentWingItems.length - 1 ? 'disabled' : ''} title="Move Down" style="margin-left:4px;">
            <i class="fas fa-arrow-down"></i>
          </button>
        </td>
        <td style="text-align:center;">
          <button type="button" class="btn-icon-action btn-icon-edit edit-wing-btn" data-index="${idx}" title="Edit Ministry">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="btn-icon-action btn-icon-delete delete-wing-btn" data-index="${idx}" title="Delete Ministry" style="margin-left:4px;">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      `;
      wingsTableBody.appendChild(tr);
    });

    // Move Up
    wingsTableBody.querySelectorAll('.move-wing-up-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        if (i > 0) {
          const temp = currentWingItems[i];
          currentWingItems[i] = currentWingItems[i - 1];
          currentWingItems[i - 1] = temp;
          persistWingItems(currentWingItems);
          triggerSaveNotice();
        }
      });
    });

    // Move Down
    wingsTableBody.querySelectorAll('.move-wing-down-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        if (i < currentWingItems.length - 1) {
          const temp = currentWingItems[i];
          currentWingItems[i] = currentWingItems[i + 1];
          currentWingItems[i + 1] = temp;
          persistWingItems(currentWingItems);
          triggerSaveNotice();
        }
      });
    });

    // Edit Wing
    wingsTableBody.querySelectorAll('.edit-wing-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        const item = currentWingItems[i];
        if (item) {
          wingEditIndex.value = i;
          wingEditTitle.value = item.title || '';
          wingEditMalayalam.value = item.malayalam || '';
          wingEditIcon.value = item.icon || 'fa-hand-holding-heart';
          if (wingIconPreview) {
            const cleanIcon = (item.icon || 'fa-hand-holding-heart').replace(/^fa[srbld]?\s+/, '').trim();
            wingIconPreview.innerHTML = `<i class="fas ${cleanIcon}"></i>`;
          }
          wingEditTag.value = item.tag || '';
          if (wingEditFooter) wingEditFooter.value = item.footer || '';
          if (wingEditDesc) wingEditDesc.value = item.desc || '';
          wingEditorTitle.innerHTML = `<i class="fas fa-edit"></i> Edit Ministry #${i + 1}: ${escapeHtml(item.title)}`;
          wingEditorCard.style.display = 'block';
          wingEditTitle.focus();
        }
      });
    });

    // Delete Wing
    wingsTableBody.querySelectorAll('.delete-wing-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        const item = currentWingItems[i];
        if (confirm(`Are you sure you want to delete the lay ministry "${item.title}"?`)) {
          currentWingItems.splice(i, 1);
          persistWingItems(currentWingItems);
          triggerSaveNotice();
          if (wingEditorCard) wingEditorCard.style.display = 'none';
        }
      });
    });
  }

  // Auto-fill Icon, Category, Subtitle & Description dynamically as the user types Society Name
  if (wingEditTitle) {
    wingEditTitle.addEventListener('input', () => {
      // Only auto-suggest if in "Add New" mode or if fields are empty/pristine
      const isNew = wingEditIndex.value === '-1';
      const nameVal = wingEditTitle.value.trim();
      if (!nameVal) return;

      const inferred = inferPiousWingDetails(nameVal);

      if (isNew || !wingEditIcon.value || wingEditIcon.value === 'fa-hands-helping') {
        wingEditIcon.value = inferred.icon;
        if (wingIconPreview) {
          wingIconPreview.innerHTML = `<i class="fas ${inferred.icon}"></i>`;
        }
      }
      if (isNew || !wingEditTag.value || wingEditTag.value === 'Parish Ministry') {
        wingEditTag.value = inferred.tag;
      }
      if (isNew || !wingEditMalayalam.value) {
        wingEditMalayalam.value = inferred.subtitle;
      }
      if (wingEditDesc && (isNew || !wingEditDesc.value)) {
        wingEditDesc.value = inferred.desc;
      }
    });
  }

  // Update Icon preview on type
  if (wingEditIcon && wingIconPreview) {
    wingEditIcon.addEventListener('input', () => {
      const iconVal = wingEditIcon.value.trim().replace(/^fa[srbld]?\s+/, '').trim() || 'fa-circle-check';
      wingIconPreview.innerHTML = `<i class="fas ${iconVal}"></i>`;
    });
  }

  // Open Add Wing Form
  if (openAddWingBtn) {
    openAddWingBtn.addEventListener('click', () => {
      wingEditIndex.value = '-1';
      wingEditTitle.value = '';
      wingEditMalayalam.value = '';
      wingEditIcon.value = 'fa-hands-helping';
      if (wingIconPreview) wingIconPreview.innerHTML = '<i class="fas fa-hands-helping"></i>';
      wingEditTag.value = 'Parish Ministry';
      if (wingEditFooter) wingEditFooter.value = '';
      if (wingEditDesc) wingEditDesc.value = '';
      wingEditorTitle.innerHTML = '<i class="fas fa-plus-circle"></i> Add New Association / Pastoral Wing';
      wingEditorCard.style.display = 'block';
      wingEditTitle.focus();
    });
  }

  // Cancel Wing Form
  if (cancelWingBtn) {
    cancelWingBtn.addEventListener('click', () => {
      wingEditorCard.style.display = 'none';
    });
  }
  if (cancelWingEditorBtn) {
    cancelWingEditorBtn.addEventListener('click', () => {
      wingEditorCard.style.display = 'none';
    });
  }

  // Reset Wings to Default
  if (resetWingsBtn) {
    resetWingsBtn.addEventListener('click', () => {
      if (confirm('Reset all Pious Associations and Lay Ministries back to original defaults?')) {
        currentWingItems = JSON.parse(JSON.stringify(DEFAULT_PIOUS_WINGS));
        persistWingItems(currentWingItems);
        triggerSaveNotice();
        if (wingEditorCard) wingEditorCard.style.display = 'none';
      }
    });
  }

  // Save Wing Item
  if (saveWingBtn) {
    saveWingBtn.addEventListener('click', () => {
      const title = wingEditTitle.value.trim();
      const index = parseInt(wingEditIndex.value, 10);

      if (!title) {
        alert('Please enter a Ministry / Association Name.');
        wingEditTitle.focus();
        return;
      }

      // Auto-infer defaults if any field was left blank by user
      const inferred = inferPiousWingDetails(title);
      const malayalam = wingEditMalayalam.value.trim() || inferred.subtitle;
      const icon = wingEditIcon.value.trim() || inferred.icon || 'fa-hands-helping';
      const tag = wingEditTag.value.trim() || inferred.tag || 'Parish Ministry';
      const footer = (wingEditFooter ? wingEditFooter.value.trim() : '') || '';
      const desc = (wingEditDesc ? wingEditDesc.value.trim() : '') || inferred.desc;

      const wingData = {
        title,
        malayalam,
        icon,
        tag,
        footer,
        desc
      };

      if (index >= 0 && index < currentWingItems.length) {
        currentWingItems[index] = wingData;
      } else {
        currentWingItems.push(wingData);
      }

      persistWingItems(currentWingItems);
      wingEditorCard.style.display = 'none';
      triggerSaveNotice();
    });
  }

  if (saveWingsPanelBtn) {
    saveWingsPanelBtn.addEventListener('click', () => {
      saveConfig();
    });
  }

  renderWingsTable();

  // 3. Save All Changes to LocalStorage
  const saveBtn = document.getElementById('saveAllChangesBtn');
  const saveLeadershipBtn = document.getElementById('saveLeadershipBtn');

  function saveConfig() {
    try {
      const updated = {};
      Object.keys(DEFAULT_CONFIG).forEach(key => {
        const field = document.getElementById(`cfg_${key}`);
        if (field) {
          updated[key] = field.value;
        }
      });

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      localStorage.setItem(NAV_ITEMS_KEY, JSON.stringify(currentNavItems));
      localStorage.setItem(FEASTS_KEY, JSON.stringify(currentFeastItems));
      localStorage.setItem(HIGHLIGHTS_KEY, JSON.stringify(currentHighlightItems));
      localStorage.setItem(WINGS_KEY, JSON.stringify(currentWingItems));
      localStorage.setItem(VICARS_KEY, JSON.stringify(currentVicarItems));
      localStorage.setItem(VOCATIONS_KEY, JSON.stringify(currentVocationItems));

      triggerSaveNotice();
      console.log('Site configuration & leadership team successfully saved to LocalStorage:', updated);
    } catch (err) {
      console.error('Failed to save to LocalStorage:', err);
      if (err.name === 'QuotaExceededError') {
        alert('Image file too large for browser storage. Please choose a smaller photo or click reset.');
      } else {
        alert('Error saving configuration: ' + err.message);
      }
    }
  }

  if (saveBtn) saveBtn.addEventListener('click', saveConfig);
  if (saveLeadershipBtn) saveLeadershipBtn.addEventListener('click', saveConfig);

  // Initialize and populate all form fields and managers on page load
  loadFormValues();
  renderWingsTable();
  renderVicarsTable();
  renderVocationsTable();

  // 4. Reset to Defaults
  const resetBtn = document.getElementById('resetDefaultsBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all content, highlights, feasts, and navbar to original defaults?')) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(NAV_ITEMS_KEY);
        localStorage.removeItem(FEASTS_KEY);
        localStorage.removeItem(HIGHLIGHTS_KEY);
        localStorage.removeItem(WINGS_KEY);
        localStorage.removeItem(VICARS_KEY);
        localStorage.removeItem(VOCATIONS_KEY);
        currentNavItems = [...DEFAULT_NAV_ITEMS];
        currentFeastItems = [...DEFAULT_FEASTS];
        currentHighlightItems = [...DEFAULT_HIGHLIGHTS];
        currentWingItems = JSON.parse(JSON.stringify(DEFAULT_PIOUS_WINGS));
        currentVicarItems = JSON.parse(JSON.stringify(DEFAULT_FORMER_VICARS));
        currentVocationItems = JSON.parse(JSON.stringify(DEFAULT_PARISH_VOCATIONS));
        renderWingsTable();
        renderVicarsTable();
        renderVocationsTable();
        loadFormValues();
        alert('All fields, highlights, feasts, and menu items reset to original defaults! Click Save & Publish to apply.');
      }
    });
  }

  // =========================================================================
  // 5. ADMIN AUTHENTICATION & PASSWORD MANAGER
  // =========================================================================
  const AUTH_KEY = 'st_thomas_admin_auth';
  const SESSION_KEY = 'st_thomas_admin_session';

  // Default credentials: username 'admin', password 'bibin'
  const DEFAULT_CREDENTIALS = {
    username: 'admin',
    password: 'bibin'
  };

  function getCredentials() {
    try {
      const stored = localStorage.getItem(AUTH_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.username && parsed.password) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Error reading admin credentials', e);
    }
    // Initialize defaults if not present
    localStorage.setItem(AUTH_KEY, JSON.stringify(DEFAULT_CREDENTIALS));
    return DEFAULT_CREDENTIALS;
  }

  function setCredentials(username, password) {
    const creds = { username: username.trim(), password: password };
    localStorage.setItem(AUTH_KEY, JSON.stringify(creds));
    return creds;
  }

  function isAuthenticated() {
    return sessionStorage.getItem(SESSION_KEY) === 'authenticated';
  }

  function setAuthenticated(status) {
    if (status) {
      sessionStorage.setItem(SESSION_KEY, 'authenticated');
    } else {
      sessionStorage.removeItem(SESSION_KEY);
    }
  }

  const loginOverlay = document.getElementById('adminLoginOverlay');
  const loginForm = document.getElementById('adminLoginForm');
  const loginUsernameInput = document.getElementById('loginUsername');
  const loginPasswordInput = document.getElementById('loginPassword');
  const loginErrorMsg = document.getElementById('loginErrorMsg');
  const adminLogoutBtn = document.getElementById('adminLogoutBtn');

  function checkAuthAndPrompt() {
    if (!isAuthenticated()) {
      if (loginOverlay) {
        loginOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        if (loginUsernameInput) loginUsernameInput.focus();
      }
    } else {
      if (loginOverlay) {
        loginOverlay.style.display = 'none';
        document.body.style.overflow = '';
      }
    }
  }

  // Handle Login submission
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userVal = loginUsernameInput ? loginUsernameInput.value.trim() : '';
      const passVal = loginPasswordInput ? loginPasswordInput.value : '';
      const creds = getCredentials();

      if (userVal === creds.username && passVal === creds.password) {
        setAuthenticated(true);
        if (loginErrorMsg) loginErrorMsg.style.display = 'none';
        if (loginOverlay) {
          loginOverlay.style.display = 'none';
          document.body.style.overflow = '';
        }
        if (loginPasswordInput) loginPasswordInput.value = '';
      } else {
        if (loginErrorMsg) {
          loginErrorMsg.textContent = 'Invalid username or password. Please try again.';
          loginErrorMsg.style.display = 'block';
        }
        if (loginPasswordInput) {
          loginPasswordInput.value = '';
          loginPasswordInput.focus();
        }
      }
    });
  }

  // Handle Logout
  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to log out from the CMS Portal?')) {
        setAuthenticated(false);
        checkAuthAndPrompt();
      }
    });
  }

  // Password Visibility Toggles
  document.querySelectorAll('.btn-toggle-pwd').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      const icon = btn.querySelector('i');
      if (input) {
        if (input.type === 'password') {
          input.type = 'text';
          if (icon) {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
          }
        } else {
          input.type = 'password';
          if (icon) {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
          }
        }
      }
    });
  });

  // Password & Username Change Management Panel
  const adminUsernameInput = document.getElementById('adminUsernameInput');
  const currentPasswordInput = document.getElementById('currentPasswordInput');
  const newPasswordInput = document.getElementById('newPasswordInput');
  const confirmPasswordInput = document.getElementById('confirmPasswordInput');
  const updatePasswordBtn = document.getElementById('updatePasswordBtn');
  const pwdChangeMsg = document.getElementById('pwdChangeMsg');

  function initSecurityPanel() {
    const creds = getCredentials();
    if (adminUsernameInput) {
      adminUsernameInput.value = creds.username;
    }
  }

  if (updatePasswordBtn) {
    updatePasswordBtn.addEventListener('click', () => {
      const creds = getCredentials();
      const enteredUser = adminUsernameInput ? adminUsernameInput.value.trim() : '';
      const enteredCurrent = currentPasswordInput ? currentPasswordInput.value : '';
      const enteredNew = newPasswordInput ? newPasswordInput.value : '';
      const enteredConfirm = confirmPasswordInput ? confirmPasswordInput.value : '';

      const showNotice = (text, isSuccess) => {
        if (!pwdChangeMsg) return;
        pwdChangeMsg.textContent = text;
        pwdChangeMsg.style.display = 'block';
        if (isSuccess) {
          pwdChangeMsg.style.background = '#f0fdf4';
          pwdChangeMsg.style.border = '1px solid #bbf7d0';
          pwdChangeMsg.style.color = '#15803d';
        } else {
          pwdChangeMsg.style.background = '#fef2f2';
          pwdChangeMsg.style.border = '1px solid #fecaca';
          pwdChangeMsg.style.color = '#b91c1c';
        }
      };

      if (!enteredUser) {
        showNotice('Username cannot be empty.', false);
        adminUsernameInput.focus();
        return;
      }

      if (enteredCurrent !== creds.password) {
        showNotice('Current password does not match.', false);
        currentPasswordInput.focus();
        return;
      }

      if (!enteredNew) {
        showNotice('Please enter a new password.', false);
        newPasswordInput.focus();
        return;
      }

      if (enteredNew.length < 4) {
        showNotice('New password must be at least 4 characters long.', false);
        newPasswordInput.focus();
        return;
      }

      if (enteredNew !== enteredConfirm) {
        showNotice('New password and confirmation do not match.', false);
        confirmPasswordInput.focus();
        return;
      }

      // Save updated credentials
      setCredentials(enteredUser, enteredNew);
      showNotice('Credentials successfully updated! Your new password is now active.', true);

      // Clear password fields
      if (currentPasswordInput) currentPasswordInput.value = '';
      if (newPasswordInput) newPasswordInput.value = '';
      if (confirmPasswordInput) confirmPasswordInput.value = '';
    });
  }

  // Run security checks
  getCredentials();
  initSecurityPanel();
  checkAuthAndPrompt();
});


