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
  trustee1_photo: 'assets/images/thomas_mathai_maniyela.jpg',
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