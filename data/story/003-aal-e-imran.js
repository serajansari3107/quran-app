// Quran Story Mode -- Surah Aal-e-Imran ka content (Parts System).
// NOTE: Arabic text aur "App ka tarjuma" yahan duplicate NAHI hain -- woh app ke existing
// data/003-aal-e-imran.js se runtime par padhe jaate hain.
// Har Part ki ayah range Tafsir Ibn Kathir (abridged, English) ke apne tafsir-entries ki hadd par rakhi gayi hai
// (koi Part kisi entry ke beech mein nahi katta; 64 entries, 200 ayat, har ayah ek hi baar).
// Part ke unwan aur "heads" Ibn Kathir ke apne sub-headings se liye gaye hain (verbatim check script se kiya gaya).
// Samjhane wala hissa Roman Urdu mein khulasa hai; Quran ki ayat ka matlab sirf ayat se, aur tafsir ki baatein sirf us hisse se jo padha gaya.
// Ayat ki ginti app ke Quran data ke mutabiq hai (Aal-e-Imran = 200 ayat).
var storyData003 = {
  surah: 3,
  chips: ["200 ayat", "Madani", "20 Parts"],
  intro: "Aal-e-Imran Al-Baqarah ke baad ki doosri badi Madani surah hai. Isko 20 Parts mein baanta gaya hai taake har hissa aaram se padha aur samjha ja sake. Har Part mein teen tabs hain: Story (ayat ka bahao), Samjho (zaroori lafz) aur Lessons (amli sabaq).",
  names: "Ibn Kathir ke mutabiq yeh Surah Madinah mein nazil hui (Ibn Kathir, Ayah 1 ka unwan). Tafheem-ul-Quran ke mutabiq Surah ka naam ayah 33 mein ‘Aal-e-Imran’ ke zikr se liya gaya.",
  disclaimer: "Yeh Story Mode Quran ka tarjuma ya fatwa nahi hai. Arabic aur “App ka tarjuma” app ke apne Quran data se liye gaye hain. Samjhane wala hissa Tafsir Ibn Kathir (English, abridged) ke sub-headings aur un ke padhe gaye hisson se aasaan Roman Urdu mein khulasa hai. Ahl-e-Kitab ke baare mein jo ayat hain woh un ke kuch logon ke khaas rawaiyon par hain; unhein kisi poori qaum par laagu karna is Story Mode ka maqsad nahi. Fiqhi masail (riba, hajj wagairah) ke liye ahl-e-ilm se rujoo karein.",
  partsNote: "Parts ki hadein Tafsir Ibn Kathir ke tafsir-entries par hain, koi ayat chhooti ya doharayi nahi gayi (200 mein se 200 ayat). Bade hisson ke group Tafheem-ul-Quran (Maududi) ke Surah-intro ke chaar khitabon se milaye gaye hain. Note: Ibn Kathir ne likha ke shuruaati 83 ayat Najran ke wafd se judi hain, jabke Tafheem ne Najran wale khitab ko ayat 33 se 63 diya hai; yeh dono bayan yahan alag alag hawale se likhe gaye hain.",
  groups: [
    { from: 1, to: 32, title: "Tamheed: Tawhid, Quran aur Aakhirat", text: "Tafheem-ul-Quran ke mutabiq pehla khitab (ayat 1 se 32) shayad Badr ke fauran baad nazil hua. Is mein Allah ki wahdaniyat, Quran ki hidayat, duniya ki haqeeqat aur Allah ki muhabbat ka rasta aata hai." },
    { from: 33, to: 63, title: "Hazrat Maryam, Zakariyya aur Isa (A.S.)", text: "Tafheem ke mutabiq doosra khitab (ayat 33 se 63) 9 hijri mein Najran ke Isai wafd ke mauqe par nazil hua. Is mein Imran ke ghar, Maryam, Zakariyya, Yahya aur Isa (A.S.) ka bayan aur Mubahalah ki dawat hai." },
    { from: 64, to: 120, title: "Ahl-e-Kitab se baat aur Ummat ko hidayat", text: "Tafheem ke mutabiq teesra khitab (ayat 64 se 120) pehle khitab ke fauran baad nazil hua. Is mein Ahl-e-Kitab ko kalima-e-sawa ki dawat aur Musalmanon ko taqwa, ittehad, neki ka hukm aur munafiqon se hoshiyari ki hidayat hai." },
    { from: 121, to: 200, title: "Uhud ka jaiza aur sabaq", text: "Tafheem ke mutabiq chautha khitab (ayat 121 se 200) Uhud ki jang ke baad nazil hua. Is mein jang ka jaiza, kamzoriyon ki islah, shuhada ka maqam aur Surah ki aakhri dua aur sabr-o-ribat ka hukm hai." }
  ],
  lessonsNote: "Lessons Quran aur tafsir ke hisse se seedhe nikle huye amli mashware hain. Yeh fatwa nahi. Zaroorat par ahl-e-ilm se poochein.",

  parts: [
    {
      n: 1, from: 1, to: 6, g: 1,
      title: "Allah ek hai, Quran haq hai",
      sub: "Surah ka aaghaz: Allah ki sifaat, Kitabon ka silsila aur Allah ka ilm",
      heads: ["The Tafsir of Surah Āl 'Imrān"],
      intro: "Surah ki shuruaat Allah ki wahdaniyat se hoti hai: Allah Zinda aur sab ko sambhalne wala hai, usne Quran haq ke saath utara aur pehli kitabon ki tasdeeq ki. Ibn Kathir batate hain ke yeh Surah Madinah mein nazil hui.",
      points: [
        { r: [1, 2], h: "Allah Hayy aur Qayyum hai", t: "Ayah 2 kehti hai ke Allah ke siwa koi ibadat ke laayak nahi, woh hamesha Zinda aur sab ko sambhalne wala hai. Ibn Kathir ne Ayat-ul-Kursi ki tafseer wali hadith ka hawala diya ke Allah ka ‘sab se bada naam’ Ayat-ul-Kursi aur Aal-e-Imran ki in shuruaati ayat mein hai. Alif Laam Meem ka matlab unhone Surah Baqarah ki tafseer par chhoda hai." },
        { r: [3, 4], h: "Quran, Tawrah, Injil aur Furqan", t: "Ayah 3–4: Allah ne tum par Kitab haq ke saath utari jo pehli kitabon ki tasdeeq karti hai; pehle logon ki hidayat ke liye Tawrah aur Injil utari aur Furqan (haq aur batil mein farq karne wali kitab) utari. Jo Allah ki ayat ka inkar karein unke liye sakht azab hai. Ibn Kathir: Tawrah Hazrat Musa (A.S.) par aur Injil Hazrat Isa (A.S.) par utari. Ma‘ariful Quran ke hashiya ke mutabiq Quran jab Tawrah aur Injil kehta hai to us se murad un Nabiyon par utari asli kitabein hain." },
        { r: [5, 6], h: "Allah se kuch chhupa nahi", t: "Ayah 5: zameen aur aasman ki koi cheez Allah se chhupi nahi. Ayah 6: woh pait mein jaisa chahe shakal banata hai. Ibn Kathir (ayah 6): is se yeh bhi saaf hota hai ke Hazrat Isa (A.S.) bhi Allah ke paida kiye hue bande hain, jinki shakal maa ke pait mein banai gayi." }
      ],
      key: "Allah Zinda aur sab ko sambhalne wala hai; uski kitab haq hai aur uska ilm har cheez ko gheray hue hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 1 se 6", "Ma‘ariful Quran, Ayah 1–9 (shuruaati hissa)", "Quran 3:1–6"],
      samjho: [
        { title: "Al-Hayy aur Al-Qayyum", ayahs: [2], simple: "Hayy = hamesha zinda. Qayyum = sab ko qaim rakhne aur sambhalne wala.", context: "Ayah 2 mein ‘La ilaha illa Huwa’ ke saath yeh do naam aaye hain.", note: "Ma‘ariful Quran (ayah 2): jo cheez apna wajood khud qaim na rakh sake aur kisi aur par tika ho, woh ibadat ke laayak nahi; ibadat ke laayak wohi hai jo hamesha Zinda aur sab ko sambhalne wala ho.", refs: [], src: ["Ma‘ariful Quran, Ayah 2"] },
        { title: "Furqan", ayahs: [4], simple: "Furqan = woh jo haq aur batil mein farq kar de.", context: "Ayah 4 mein Tawrah aur Injil ke baad Furqan ka zikr hai.", note: "Ibn Kathir ke is hisse mein ‘the criterion’ (farq karne wala) likha gaya hai.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 3–4"] }
      ],
      lessons: [
        { title: "Allah par bharosa", ayahs: [2], fromSurah: "Ayah 2 mein Allah ko hamesha Zinda aur sab ko sambhalne wala kaha gaya.", amal: "Mushkil mein sirf asbab par nazar rakhne ke bajaye Allah se madad maangein.", src: ["Quran 3:2"] },
        { title: "Allah har cheez jaanta hai", ayahs: [5], fromSurah: "Zameen aur aasman ki koi cheez Allah se chhupi nahi.", amal: "Akele mein bhi gunah se bachne ki koshish karein.", src: ["Quran 3:5"] }
      ]
    },
    {
      n: 2, from: 7, to: 9, g: 1,
      title: "Saaf aur mushtabih ayat; dil ki sabit-qadmi ki dua",
      sub: "Muhkamat aur Mutashabihat ka farq, aur hidayat ke baad dil tedhe na hone ki dua",
      heads: ["The Mutashabihat and Muhkamat Ayat", "Only Allah Knows the True Ta'wil (Interpretation) of the Mutashabihat"],
      intro: "Ayah 7 batati hai ke Quran mein kuch ayat bilkul saaf hain aur kuch mushtabih. Phir ayah 8–9 mein mazboot ilm walon ki dua aata hai.",
      points: [
        { r: [7, 7], h: "Muhkamat aur Mutashabihat", t: "Ayah 7: Quran ki kuch ayat ‘muhkamat’ (bilkul saaf) hain, woh Kitab ki buniyad hain, aur kuch ‘mutashabihat’ hain. Ibn Kathir: jo mutashabih ayat ko muhkam ayat ki taraf lauta kar samajhta hai woh sahi hidayat paata hai." },
        { r: [7, 7], h: "Dil mein tedhapan wale", t: "Ayah 7: jin ke dilon mein kajji hai woh mutashabih ke peeche padte hain, fitna aur apni marzi ki tawil dhoondhne ke liye. Ma‘ariful Quran: is ayah ke background mein bataya gaya ke Najran ke kuch Isai Nabi ﷺ ke paas aaye aur Hazrat Isa (A.S.) ke ‘Kalimatullah’ aur ‘Ruhullah’ kehlaye jaane par shubha uthaya." },
        { r: [7, 7], h: "Mazboot ilm wale kehte hain: hum iman laaye", t: "Ayah 7 ke mutabiq mazboot ilm wale kehte hain: ‘hum us par imaan laaye, sab hamare Rabb ki taraf se hai’. Ibn Kathir ne ‘Only Allah Knows the True Ta'wil’ ke heading ke neeche ayah ki padhai (kahan ruka jaye) par ulama ke alag alag aqwal bhi naql kiye." },
        { r: [8, 9], h: "Dil ki sabit-qadmi ki dua", t: "Ayah 8–9: ‘Ae hamare Rabb, hamein hidayat dene ke baad hamare dil tedhe na kar, aur apne paas se rehmat ata kar... tu logon ko us din jama karne wala hai jis mein koi shak nahi.’ Ibn Kathir ne Umm Salamah (r.a.) se riwayat naql ki ke Nabi ﷺ ye dua karte: ‘Ya Muqallibal quloob, thabbit qalbi ala deenik.’" }
      ],
      key: "Saaf ayat ko buniyad banao; jo baat samajh na aaye usay saaf ayat ki roshni mein dekho, aur apne dil ki sabit-qadmi ki dua karte raho.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 7 se 9", "Ma‘ariful Quran, Ayah 7 aur 8", "Quran 3:7–9"],
      samjho: [
        { title: "Muhkamat aur Mutashabihat", ayahs: [7], simple: "Muhkam = jis ka matlab saaf aur waazeh ho. Mutashabih = jis ke matlab mein ishtibah ya kai pehlu hon.", context: "Ayah 7 mein dono qism ki ayat ka zikr hai; muhkam ko ‘Ummul Kitab’ (Kitab ki buniyad) kaha gaya.", note: "Ibn Kathir: muhkam ayat basis hain jinki taraf wazahat ke liye lautna chahiye. Ma‘ariful Quran: mutashabih ki aisi tawil jo muhkam ke khilaf ho, radd kar di jaye.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 7", "Ma‘ariful Quran, Ayah 7"] },
        { title: "Ta‘wil", ayahs: [7], simple: "Ta‘wil ka matlab yahan ayat ka asal matlab ya anjaam hai.", context: "Ayah 7 mein ‘uska ta‘wil Allah ke siwa koi nahi jaanta’ aaya hai.", note: "Ibn Kathir ne is lafz ki wazahat mein doosri ayat (jaise Surah Yusuf ki 12:36) bhi naql ki; maine woh lambi bahes poori nahi padhi.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 7 (Only Allah Knows the True Ta'wil...)"] }
      ],
      lessons: [
        { title: "Dil ki hifazat ki dua", ayahs: [8], fromSurah: "Ayah 8 mein hidayat ke baad bhi dil tedhe na hone ki dua sikhai gayi.", amal: "Roz ki duaon mein ‘Ya Muqallibal quloob...’ jaisi dua shamil karein.", src: ["Quran 3:8", "Tafsir Ibn Kathir, Ayah 8"] },
        { title: "Ilm mein adab", ayahs: [7], fromSurah: "Mazboot ilm wale mutashabih par bhi ‘sab hamare Rabb ki taraf se hai’ kehte hain.", amal: "Jo baat foran samajh na aaye usay ziddi tawil se na badlein; ahl-e-ilm se poochein.", src: ["Quran 3:7"] }
      ]
    },
    {
      n: 3, from: 10, to: 20, g: 1,
      title: "Duniya ki haqeeqat, muttaqeen aur Allah ki gawahi",
      sub: "Maal aur aulad kaam nahi aayenge, duniya ki chahat, muttaqeen ki sifaat aur Islam",
      heads: ["On the Day of Resurrection, No Wealth or Offspring Shall Avail", "Threatening the Jews With Defeat and Encouraging Them to Learn a Lesson From the Battle of Badr", "The True Value of This Earthly Life", "The Supplication and Description of Al-Muttaqin", "The Testimony of Tawhid", "The Religion with Allah is Islam"],
      intro: "Is hisse mein pehle bataya gaya ke inkar karne walon ko maal aur aulad Allah ke saamne kaam nahi aayenge. Phir duniya ki chahat ki haqeeqat, muttaqeen ki sifaat aur Allah, farishton aur ahl-e-ilm ki Tawhid ki gawahi aati hai.",
      points: [
        { r: [10, 11], h: "Maal aur aulad Allah ke saamne kaam nahi aayenge", t: "Ayah 10–11: jo inkar karte hain unke maal aur aulad Allah se unhein bacha na sakenge, woh Aag ka eendhan hain, Fir‘aun walon ki tarah jinhone hamari ayat jhutlayi. Ibn Kathir: yahan inkar karne walon se murad woh hain jinhone Allah ki ayat jhutlayi aur Rasoolon ka inkar kiya." },
        { r: [12, 13], h: "Badr ki nishani", t: "Ayah 12–13: kafiron se kaho ke tum maghloob hoge aur jama kiye jaoge; do lashkaron (Badr) ke mil jaane mein tumhare liye nishani hai: ek Allah ki raah mein lad raha tha aur doosra kufr par. Ibn Kathir ne Ibn Ishaq se naql kiya ke Badr ke baad Nabi ﷺ ne Yahood ko Bani Qaynuqa‘ ke bazaar mein jama kiya; is bayan ka heading unhone ‘Threatening the Jews With Defeat...’ rakha." },
        { r: [14, 15], h: "Duniya ki chahat aur Allah ke paas behtar", t: "Ayah 14: auratein, bachche, sone chandi ke dher, nasli ghode, mawaishi aur kheti ki mohabbat logon ko khoobsurat bana di gayi; yeh duniya ki zindagi ka saamaan hai. Ayah 15: muttaqeen ke liye Allah ke paas jannatein, paak zaujein aur Allah ki raza hai. Ibn Kathir ne likha ke aulad ki khwahish agar fakhr aur dikhawe ke liye ho to aazmaish hai, aur agar Allah ki ibadat karne wali ummat badhane ke liye ho to pasandeeda hai." },
        { r: [16, 17], h: "Muttaqeen ki sifaat aur dua", t: "Ayah 16–17: woh jo kehte hain ‘hum imaan laaye, hamare gunah bakhsh de aur hamein Aag ke azab se bacha’; woh sabr karne wale, sachche, farmabardar, kharch karne wale aur sahar ke waqt istighfar karne wale hain. Ibn Kathir: yeh ayah raat ke aakhri hisse mein istighfar ki fazilat ki gawah hai." },
        { r: [18, 18], h: "Allah, farishton aur ilm walon ki gawahi", t: "Ayah 18: Allah gawahi deta hai ke uske siwa koi ibadat ke laayak nahi, aur farishte aur ilm wale bhi, woh insaaf ke saath qaim hai. Ibn Kathir: is ayah mein ilm walon ki badi fazilat hai kyunke Allah ne apni aur farishton ki gawahi ke baad unka zikr kiya." },
        { r: [19, 20], h: "Allah ke nazdeek deen Islam hai", t: "Ayah 19: Allah ke nazdeek deen Islam hai; Kitab walon ne ikhtilaf ilm aa jaane ke baad aapas ki zid mein kiya. Ayah 20: agar tumse bahes karein to kaho ke maine apna chehra Allah ke hawale kar diya aur jo mere saath hain unhone bhi; tumhara kaam sirf pahuncha dena hai. Ibn Kathir ne ayah 19 ke baare mein likha ke Allah ke nazdeek sirf Islam hi maqbool deen hai." }
      ],
      key: "Maal aur aulad aakhirat mein kaam nahi aayenge; asal kamyabi taqwa, sachchai, sabr aur Tawhid par imaan mein hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 10 se 20", "Quran 3:10–20"],
      samjho: [
        { title: "Muttaqeen", ayahs: [15, 16, 17], simple: "Muttaqeen = woh log jo Allah se darte hue gunahon aur nafarmani se bachte hain.", context: "Ayah 15 mein unke inaam aur ayah 16–17 mein unki sifaat ka zikr hai.", note: "Ibn Kathir ne ayah 17 mein sabr, sachchai, farmabardari, kharch aur sahar ke istighfar ko in sifaat ki wazahat mein likha.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 16–17 (The Supplication and Description of Al-Muttaqin)"] },
        { title: "Allah ki gawahi aur ilm walon ki gawahi", ayahs: [18], simple: "Allah ne khud apni wahdaniyat ki gawahi di, aur farishton aur ilm walon ne bhi.", context: "Ayah 18 ke baad ayah 19 mein ‘Allah ke nazdeek deen Islam hai’ aata hai.", note: "Ibn Kathir (The Testimony of Tawhid): Allah sab se sachcha gawah hai aur uski baat haq hai.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 18"] }
      ],
      lessons: [
        { title: "Duniya ki chahat ko maqsad na banayein", ayahs: [14, 15], fromSurah: "Duniya ki cheezein khoobsurat dikhayi gayin, lekin behtar thikana Allah ke paas hai.", amal: "Maal aur aulad ko Allah ki raza ka zariya banayein, dikhawe ya fakhr ka nahi.", src: ["Quran 3:14–15", "Tafsir Ibn Kathir, Ayah 14"] },
        { title: "Sahar ka istighfar", ayahs: [17], fromSurah: "Muttaqeen ki ek sifat sahar ke waqt Allah se maafi maangna hai.", amal: "Mumkin ho to raat ke aakhri hisse mein chand minute istighfar ki aadat banayein.", src: ["Quran 3:17", "Tafsir Ibn Kathir, Ayah 17"] },
        { title: "Gawahi ke mutabiq jeena", ayahs: [18], fromSurah: "Allah, farishte aur ilm wale Tawhid ki gawahi dete hain.", amal: "Apni zindagi ke faisle Tawhid ke mutabiq rakhne ki koshish karein.", src: ["Quran 3:18"] }
      ]
    },
    {
      n: 4, from: 21, to: 32, g: 1,
      title: "Allah ka mulk, sahi dosti aur Allah ki muhabbat",
      sub: "Ahl-e-Kitab ko tanbeeh, Malik-ul-Mulk ki dua, dosti ki hadd aur ittiba-e-Rasool",
      heads: ["Chastising the Jews for Their Disbelief and for Killing the Prophets and Righteous People", "Chastising the People of the Book for Not Referring to the Book of Allah for Judgment", "Encouraging Gratitude", "The Prohibition of Supporting the Disbelievers", "Allah Knows What the Hearts Conceal", "Allah's Love is Attained by Following the Messenger (ﷺ)"],
      intro: "Is hisse mein pehle Ahl-e-Kitab ke un logon ko tanbeeh hai jo haq ko thukrate the. Phir Allah ke mulk ki dua, Musalmanon ko dosti ki hadd ki hidayat, Allah ke ilm ka bayan aur Allah ki muhabbat paane ka rasta aata hai.",
      points: [
        { r: [21, 22], h: "Haq ka inkar aur takabbur", t: "Ayah 21–22: jo Allah ki ayat ka inkar karte hain, Nabiyon ko nahaq qatl karte hain aur insaaf ka hukm dene walon ko qatl karte hain, unhein dardnaak azab ki khabar do; unke amal duniya aur aakhirat mein barbaad hue. Ibn Kathir: yeh Ahl-e-Kitab ke un logon ka zikr hai jinhone haq ko thukraya, aur unhone ‘takabbur = haq ko radd karna aur logon ko haqeer jaanna’ wali hadith naql ki." },
        { r: [23, 25], h: "Kitab ki taraf rujoo na karna", t: "Ayah 23–25: Kitab walon ko Allah ki Kitab ki taraf bulaya jaye to ek giroh mooh pher leta hai; woh kehte hain ‘Aag hamein sirf gine chunne din chhuegi’; unki apni gadhi hui baatein unhein dhoka deti hain. Ibn Kathir: yeh dilairi unke is ghalat gumaan se thi ke unhein Aag mein bohat thode din rakha jayega." },
        { r: [26, 27], h: "Malik-ul-Mulk: Allah hi badshahat deta aur chheenta hai", t: "Ayah 26–27: ‘Ae Allah, badshahat ke malik, tu jise chahe badshahat de aur jis se chahe chheen le, jise chahe izzat de aur jise chahe zillat... bhalai teri hi hath mein hai.’ Ibn Kathir ne is ayat ko Allah ka shukr ada karne ki targheeb ke heading ke neeche rakha." },
        { r: [28, 28], h: "Kafiron ko doston ki jagah na rakhna", t: "Ayah 28: momin imaan walon ko chhod kar kafiron ko apna dost (madadgar) na banayein; jo aisa karega usay Allah se koi taalluq nahi, siwaye is ke ke tum un se kisi qism ke khauf se bacho. Ibn Kathir ne yahan ‘dost banana’ ko dil ki dosti aur madad ke maane mein liya aur khauf wali istisna ki wazahat likhi." },
        { r: [29, 30], h: "Dilon ki baat Allah jaanta hai", t: "Ayah 29–30: tum dilon mein jo chhupao ya zaahir karo, Allah usay jaanta hai. Us din har shakhs apni neki aur buri ko saamne paayega aur chahega ke uske aur uski buraiyon ke beech door ka faasla ho. Allah tumhein apni zaat se darata hai aur woh bandon par bohat meherban hai." },
        { r: [31, 32], h: "Allah ki muhabbat Rasool ki pairwi se", t: "Ayah 31–32: ‘agar tum Allah se muhabbat karte ho to meri pairwi karo, Allah tumse muhabbat karega aur tumhare gunah maaf karega.’ Phir hukm: Allah aur Rasool ki ita‘at karo; agar mooh pher lein to Allah kafiron ko pasand nahi karta. Ibn Kathir ne yahan Hasan Basri se naql kiya ke kuch logon ne Allah se muhabbat ka dawa kiya to Allah ne unhein is ayah se aazmaya." }
      ],
      key: "Badshahat Allah ki hai, dil ki baat Allah jaanta hai, aur Allah ki muhabbat ka rasta Rasool ﷺ ki pairwi se guzarta hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 21 se 32", "Quran 3:21–32"],
      samjho: [
        { title: "Malik-ul-Mulk", ayahs: [26], simple: "Malik-ul-Mulk = badshahat aur ikhtiyar ka asal malik.", context: "Ayah 26 mein Allah ke dene aur chheen lene ka bayan hai.", note: "Ibn Kathir (Encouraging Gratitude): yeh ayah Allah ke ehsanat par shukr aur bharosa karne ki targheeb deti hai.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 26–27"] },
        { title: "Ittiba-e-Rasool", ayahs: [31], simple: "Allah ki muhabbat ka daawa tab sachcha hai jab Rasool ﷺ ki shariat par chala jaye.", context: "Ayah 31 mein pairwi ka nateeja Allah ki muhabbat aur maghfirat bataya gaya.", note: "Ibn Kathir: jo shakhs aisa kaam kare jo hamare deen ke mutabiq na ho woh radd kar diya jata hai; yeh hadith unhone isi ayah ke tahat naql ki.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 31–32"] }
      ],
      lessons: [
        { title: "Izzat aur zillat Allah ke hath mein hai", ayahs: [26], fromSurah: "Allah jise chahe badshahat aur izzat deta hai aur jise chahe chheen leta hai.", amal: "Kamyabi par ghamand aur nakami par mayoosi se bachein, kyunke asal ikhtiyar Allah ka hai.", src: ["Quran 3:26–27"] },
        { title: "Dil ki niyyat saaf rakhein", ayahs: [29], fromSurah: "Jo kuch dilon mein hai Allah usay jaanta hai.", amal: "Apne kaam ki niyyat Allah ki raza ke liye durust rakhein.", src: ["Quran 3:29", "Tafsir Ibn Kathir, Ayah 29–30"] },
        { title: "Muhabbat ka daawa amal se", ayahs: [31], fromSurah: "Allah se muhabbat ka rasta Rasool ﷺ ki pairwi hai.", amal: "Nabi ﷺ ki sunnat seekhne aur us par amal karne ki koshish karein.", src: ["Quran 3:31", "Tafsir Ibn Kathir, Ayah 31–32"] }
      ]
    },
    {
      n: 5, from: 33, to: 44, g: 2,
      title: "Imran ka ghar, Maryam aur Zakariyya (A.S.)",
      sub: "Allah ke chune huye gharane, Maryam ki paidaish aur parwarish, Zakariyya ki dua aur Yahya ki khushkhabri",
      heads: ["The Chosen Ones Among the People of the Earth", "The Story of Maryam's Birth", "Maryam Grows Up; Her Honor is with Allah", "The Supplication of Zakariyya, and the Good News of Yahya's Birth", "The Virtue of Maryam Over the Women of Her Time"],
      intro: "Yahan se Hazrat Maryam aur unke gharane ka bayan shuru hota hai. Pehle bataya gaya ke Allah ne kin gharanon ko chuna, phir Maryam ki paidaish, unki parwarish, Zakariyya (A.S.) ki dua aur Maryam ki fazilat aati hai.",
      points: [
        { r: [33, 34], h: "Allah ne kin ko chuna", t: "Ayah 33–34: Allah ne Adam, Nuh, Aal-e-Ibrahim aur Aal-e-Imran ko jahan walon par chun liya; yeh ek doosre ki nasl se hain. Ibn Kathir: Allah ne Adam ko apne hath se banaya, Nuh ko pehla Rasool banaya, Ibrahim ke gharane mein Nabi Muhammad ﷺ aaye, aur Imran ka ghar woh hai jis mein Maryam aur unke bete Isa (A.S.) hue." },
        { r: [35, 36], h: "Maryam ki paidaish", t: "Ayah 35–36: Imran ki biwi ne mannat mani ke jo mere pait mein hai woh teri khidmat ke liye azad hai; jab ladki hui to kaha ‘Ae Rabb, maine ladki jani’ aur naam Maryam rakha; aur unhein aur unki aulad ko shaitan mardood se Allah ki panah mein diya. Ibn Kathir: unka naam Hannah bint Faqudh tha; Ibn Ishaq ke mutabiq woh be-aulad thin aur ek parinde ko bachche ko khilate dekh kar aulad ki dua ki; mannat ka matlab bachche ko Bayt-ul-Maqdis ki khidmat aur ibadat ke liye wakf karna tha." },
        { r: [37, 37], h: "Maryam ki parwarish aur rizq", t: "Ayah 37: Allah ne Maryam ko achhi tarah qubool kiya aur achha paala; Zakariyya (A.S.) unke sarparast bane; jab bhi woh mihrab mein jaate unke paas rizq paate. Maryam kehtin ‘yeh Allah ke paas se hai, Allah jise chahe be-hisaab rizq deta hai.’ Ibn Kathir: Mujahid wagairah se naql hai ke Zakariyya (A.S.) un ke paas garmi ke phal sardi mein aur sardi ke phal garmi mein dekhte." },
        { r: [38, 41], h: "Zakariyya ki dua aur Yahya ki khushkhabri", t: "Ayah 38–41: yeh dekh kar Zakariyya (A.S.) ne apne liye nek aulad ki dua ki. Farishton ne mihrab mein khade namaz padhte huye pukara ke Allah tumhein Yahya ki khushkhabri deta hai jo Allah ke ek kalimah ki tasdeeq karne wala, sardar, nabi aur nekon mein se hoga. Zakariyya (A.S.) ne apne budhape aur biwi ke baanjh hone ka zikr kiya to jawab mila ‘Allah jo chahe karta hai.’ Nishani yeh thi ke teen din logon se ishare ke siwa baat na karein, aur Rabb ko bohat yaad karein. Ibn Kathir: ‘Allah ke kalimah ki tasdeeq’ ka matlab Isa (A.S.) par imaan hai." },
        { r: [42, 44], h: "Maryam ki fazilat", t: "Ayah 42–43: farishton ne kaha ke Allah ne tumhein chun liya, paak kiya aur jahan ki auraton par fazilat di; apne Rabb ki farmabardari karo, sajda aur ruku karo. Ayah 44: yeh ghaib ki khabrein hain jo hum tumhein wahi se bata rahe hain. Ibn Kathir ne Ali (r.a.) se hadith naql ki ke Nabi ﷺ ne farmaya: apne zamane ki behtareen aurat Maryam bint Imran aur (Nabi ﷺ ke zamane ki) behtareen aurat Khadijah bint Khuwaylid hain." }
      ],
      key: "Allah jise chahe chun leta hai; sachchi mannat, nek parwarish aur dua ka natija Allah ke fazl se bohat bada ho sakta hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 33 se 44", "Quran 3:33–44"],
      samjho: [
        { title: "Mannat (nazr)", ayahs: [35], simple: "Imran ki biwi ne wada kiya ke jo bachcha hoga woh Allah ki khidmat ke liye azad hoga.", context: "Ayah 35 mein unki dua aur unka iqrar hai.", note: "Ibn Kathir: mannat ka maqsad bachche ko ibadat aur Bayt-ul-Maqdis ki khidmat ke liye wakf karna tha.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 35–36"] },
        { title: "Yahya (A.S.) ka naam", ayahs: [39], simple: "Yahya naam ka matlab ‘woh zinda rehta hai’ bataya gaya hai.", context: "Ayah 39 mein farishton ne Zakariyya (A.S.) ko Yahya ki khushkhabri di.", note: "Ibn Kathir: Qatadah wagairah ne kaha ke unhein Yahya isliye kaha gaya ke Allah ne unki zindagi imaan se bhar di.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 38–41"] }
      ],
      lessons: [
        { title: "Dua se umeed na chhodein", ayahs: [38], fromSurah: "Zakariyya (A.S.) budhape mein bhi Allah se nek aulad ki dua karte rahe.", amal: "Apni haajat ke liye Allah se dua karte rahein, chahe halaat mushkil lagein.", src: ["Quran 3:38–40"] },
        { title: "Nek sohbat aur nek parwarish", ayahs: [37], fromSurah: "Allah ne Maryam ko achhi parwarish di aur Zakariyya (A.S.) ko unka sarparast banaya.", amal: "Bachon ki parwarish mein nek sohbat aur achhe ustaad ka khayal rakhein.", src: ["Quran 3:37", "Tafsir Ibn Kathir, Ayah 37"] },
        { title: "Rizq Allah ki taraf se", ayahs: [37], fromSurah: "Maryam ne kaha ke rizq Allah ke paas se hai aur woh jise chahe be-hisaab deta hai.", amal: "Rizq milne par shukr karein aur usay Allah ka ata kiya hua samjhein.", src: ["Quran 3:37"] }
      ]
    },
    {
      n: 6, from: 45, to: 54, g: 2,
      title: "Hazrat Isa (A.S.) ki paidaish, nishaniyan aur hawari",
      sub: "Maryam ko khushkhabri, baap ke baghair paidaish, mojizaat aur Allah ki raah mein madadgar",
      heads: ["Delivering the Good News to Maryam of 'Isa's Birth", "Isa Spoke When He was Still in the Cradle", "Isa was Created Without a Father", "The Description of 'Isa and the Miracles He Performed", "The Disciples Give Their Support to 'Isa", "The Jews Plot to Kill 'Isa"],
      intro: "Is hisse mein Hazrat Isa (A.S.) ki paidaish ki khushkhabri, unke mojizaat, Bani Israel ko unki dawat aur unke madadgar hawariyon ka bayan hai. Ibn Kathir ke mutabiq Isa (A.S.) Allah ke bande aur Rasool hain, jinhein Allah ne ‘Kun’ ke hukm se paida kiya.",
      points: [
        { r: [45, 46], h: "Maryam ko kalimah ki khushkhabri", t: "Ayah 45–46: farishton ne kaha ‘Ae Maryam, Allah tumhein apne ek kalimah ki khushkhabri deta hai, jis ka naam Masih Isa bin Maryam hoga; duniya aur aakhirat mein izzat wala aur muqarrabeen mein se; woh gahwaare mein aur adhed umar mein logon se baat karega.’ Ibn Kathir: ‘kalimah’ se murad Allah ke ‘Ho ja’ ke hukm se paida hona hai (jumhoor ulama ke mutabiq). Unhein ‘Masih’ isliye kaha gaya ke jis bimar ko chhoote Allah ke izn se shifa paata. Maryam ki taraf nisbat is liye ke unka baap nahi tha." },
        { r: [47, 47], h: "Baap ke baghair paidaish", t: "Ayah 47: Maryam ne kaha ‘mere bachcha kaise hoga jabke mujhe kisi bashar ne hath nahi lagaya?’ Jawab: ‘Allah jo chahe paida karta hai; jab kisi kaam ka faisla kare to bas kehta hai ho ja, to ho jata hai.’ Ibn Kathir ne iske heading mein likha ‘Isa was Created Without a Father’." },
        { r: [48, 49], h: "Kitab, hikmat aur mojizaat", t: "Ayah 48–49: Allah unhein Kitab, hikmat, Tawrah aur Injil sikhayega aur Bani Israel ka Rasool banayega. Woh kahenge: ‘main tumhare Rabb ki nishani laya hoon: mitti se parinde ki shakal banakar phoonkunga to Allah ke hukm se parinda ban jayega; maadar-zad andhe aur korhi ko achha karunga; Allah ke hukm se murde ko zinda karunga; aur tumhein bata dunga jo tum khate aur ghar mein jama karte ho.’ Ibn Kathir: ‘Akmah’ = jo paidaishi andha ho." },
        { r: [50, 51], h: "Tawrah ki tasdeeq aur seedha raasta", t: "Ayah 50–51: ‘main Tawrah ki tasdeeq karta hoon aur tumhare liye kuch cheezein halal karunga jo tum par haram ki gayi thin; Allah se daro aur meri baat maano; Allah mera bhi Rabb hai aur tumhara bhi, usi ki ibadat karo, yehi seedha raasta hai.’" },
        { r: [52, 54], h: "Allah ki raah mein madadgar aur saazish", t: "Ayah 52–54: jab Isa (A.S.) ne un ka inkar mehsoos kiya to poocha ‘Allah ki raah mein mere madadgar kaun?’ Hawariyon ne kaha ‘hum Allah ke madadgar hain, gawah rahiye hum Muslim hain; hamein gawahi dene walon mein likh le.’ Phir saazish karne walon ne chaal chali aur Allah ne bhi tadbeer ki; Allah behtareen tadbeer karne wala hai. Ibn Kathir ne is ki misaal Nabi ﷺ ke Hajj ke mauqe par panah maangne aur Ansar ke madad karne se di; ‘hawari’ ka matlab madadgar bataya." }
      ],
      key: "Isa (A.S.) Allah ke bande aur Rasool hain jinhein Allah ne baap ke baghair paida kiya aur mojizaat Allah ke izn se diye; unki dawat Allah ki ibadat aur ita'at ki thi.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 45 se 54", "Quran 3:45–54"],
      samjho: [
        { title: "Kalimah (‘Ho ja’)", ayahs: [45, 47], simple: "‘Kalimah’ yahan Allah ke ‘Kun’ (ho ja) ke hukm ki taraf ishara hai.", context: "Ayah 45 mein khushkhabri aur ayah 47 mein ‘Kun fa-yakoon’ ka bayan hai.", note: "Ibn Kathir: jumhoor ulama ke mutabiq ‘kalimah’ ka matlab ek bacha hai jo Allah ke ‘Ho ja’ se wajood mein aaya.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 45"] },
        { title: "Hawari", ayahs: [52], simple: "Hawari = madadgar jo Allah ke deen ke liye saath de.", context: "Ayah 52 mein Isa (A.S.) ke madadgaron ka zikr hai.", note: "Ibn Kathir: ‘hawari’ ka matlab ‘support’ (madad) hai; unhone Nabi ﷺ ke Ahzab ke mauqe par Zubair (r.a.) ke aage aane ka waqia bhi naql kiya.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 52–54"] }
      ],
      lessons: [
        { title: "Mojizaat Allah ke izn se", ayahs: [49], fromSurah: "Isa (A.S.) ne har nishani ke saath kaha ‘Allah ke hukm se’.", amal: "Kisi ki bhi khubi ko Allah ki ata samjhein aur uski bandagi mein hi rakhein.", src: ["Quran 3:49"] },
        { title: "Haq ke liye madadgar banna", ayahs: [52], fromSurah: "Hawariyon ne Allah ke deen ki madad ka iqrar kiya.", amal: "Achhe aur jaiz kaam mein haq ki madad karne wale logon ka saath dein.", src: ["Quran 3:52", "Tafsir Ibn Kathir, Ayah 52–54"] },
        { title: "Allah ki tadbeer sab se behtar", ayahs: [54], fromSurah: "Saazish karne walon ki chaal ke muqable mein Allah ki tadbeer sab se behtar hai.", amal: "Haq par rehte huye sazishon se ghabrayein nahi aur Allah par bharosa rakhein.", src: ["Quran 3:54"] }
      ]
    },
    {
      n: 7, from: 55, to: 63, g: 2,
      title: "Isa (A.S.) ka uthaya jaana, Adam jaisi misaal aur Mubahalah",
      sub: "Allah ka wada, Isa aur Adam (A.S.) ki misaal aur sachchai ki dawat",
      heads: ["Meaning of 'Take You'", "Altering the Religion of 'Isa", "Threatening the Disbelievers with Torment in This Life and the Hereafter", "The Similarities Between the Creation of Adam and the Creation of 'Isa", "The Challenge to the Mubahalah"],
      intro: "Is hisse mein Allah ka Isa (A.S.) se wada, unke pairokaron aur munkiron ka anjaam, Isa aur Adam (A.S.) ki misaal aur phir mubahalah ki dawat aati hai. Ibn Kathir ne yahan Najran ke wafd ke waqie ka hawala bhi diya.",
      points: [
        { r: [55, 55], h: "Allah ka wada Isa (A.S.) se", t: "Ayah 55: Allah ne kaha ‘Ae Isa, main tumhein (mutawaffeeka) lene wala aur apni taraf uthane wala hoon, tumhein kafiron se paak karunga aur tumhare pairokaron ko qayamat tak kafiron par ooper rakhunga.’ Ibn Kathir ne ‘Meaning of Take You’ ke heading mein ek bayan yeh likha ke yahan lene ka matlab neend ki halat mein lena hai (6:60 aur 39:42 ki tarah), aur 4:156–159 ki ayat naql ki ke unhone Isa (A.S.) ko na qatl kiya na saleeb diya, balki Allah ne unhein apni taraf utha liya. Is mas‘ale ki baaki tafseel maine poori nahi padhi." },
        { r: [56, 58], h: "Munkiron aur momino ka anjaam", t: "Ayah 56–58: jinhone inkar kiya unhein duniya aur aakhirat mein sakht azab milega aur unka koi madadgar nahi; jo imaan laaye aur nek amal kiye unhein unka poora ajar milega; Allah zalimon ko pasand nahi karta. Ayah 58: yeh ayat aur hikmat bhari nasihat hum tumhein sunate hain. Ibn Kathir ka heading: ‘Threatening the Disbelievers with Torment in This Life and the Hereafter’." },
        { r: [59, 60], h: "Isa aur Adam (A.S.) ki misaal", t: "Ayah 59–60: Allah ke nazdeek Isa ki misaal Adam jaisi hai, jise usne mitti se banaya phir kaha ‘ho ja’ to woh ho gaya; yeh haq tumhare Rabb ki taraf se hai, shak karne walon mein na ho. Ibn Kathir: jo Allah Adam ko maa baap ke baghair paida kar sakta hai woh Isa ko bina baap ke bhi paida kar sakta hai; agar baap na hone ki wajah se Isa ko Allah ka bete kaha jaye to yeh baat Adam ke liye zyada hogi, jabke woh khud batil hai." },
        { r: [61, 63], h: "Mubahalah ki dawat", t: "Ayah 61: jo tumhare paas ilm aa jaane ke baad bhi Isa ke baare mein bahes kare to kaho ‘aao hum apne bete aur tumhare bete, apni auratein aur tumhari auratein, aur apne aap ko bulaen, phir dua karein aur jhoote par Allah ki laanat bhejein.’ Ayah 62–63: yehi sachcha bayan hai, Allah ke siwa koi ma‘bood nahi; agar woh mooh pheren to Allah fasad karne walon ko jaanta hai. Ibn Kathir ne Najran ke wafd ke waqie ke saath is ayah ki tafseel di aur Abu Ubaydah bin Al-Jarrah (r.a.) ke baare mein hadith naql ki jis mein Nabi ﷺ ne unhein ‘is Ummat ka amin’ kaha; us waqie ki poori tafseel maine poori nahi padhi." }
      ],
      key: "Isa (A.S.) ki paidaish Allah ki qudrat ki nishani hai, bilkul Adam (A.S.) ki tarah; haq saamne aa jaye to us par shak nahi karna chahiye.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 55 se 63", "Quran 3:55–63"],
      samjho: [
        { title: "Mubahalah", ayahs: [61], simple: "Mubahalah = dono fareeq mil kar dua karein ke jo jhoota ho us par Allah ki laanat ho.", context: "Ayah 61 mein Nabi ﷺ ko is dawat ka hukm hai.", note: "Ibn Kathir ke ‘The Challenge to the Mubahalah’ ke heading mein yeh dawat aur uske saath Najran ke wafd ka waqia hai; us waqie ki tafseel maine poori nahi padhi.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 59–63"] },
        { title: "Adam aur Isa (A.S.) ki misaal", ayahs: [59], simple: "Allah ne Adam ko mitti se bina maa-baap ke banaya, isi tarah Isa ko bina baap ke.", context: "Ayah 59 isi baat ki dalil hai.", note: "Ibn Kathir: yeh Allah ki qudrat ka bayan hai; Allah ne Adam ko na mard na aurat se, Hawwa ko mard se aur Isa ko sirf maa se paida kiya.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 59–60"] }
      ],
      lessons: [
        { title: "Allah ki qudrat par yaqeen", ayahs: [59], fromSurah: "Jo Adam ko bina maa-baap ke bana sakta hai woh Isa ko bina baap ke bhi bana sakta hai.", amal: "Allah ki qudrat ko apni samajh se chhota na samjhein.", src: ["Quran 3:59", "Tafsir Ibn Kathir, Ayah 59–60"] },
        { title: "Haq par shak na karein", ayahs: [60], fromSurah: "‘Haq tumhare Rabb ki taraf se hai, shak karne walon mein se na ho.’", amal: "Dalil saamne aane ke baad zid chhodein aur sachchai ko qubool karein.", src: ["Quran 3:60"] },
        { title: "Tazkirah nahi jhagda", ayahs: [62, 63], fromSurah: "Ayah 62–63 mein dalil ke baad bhi na manne walon ka hisaab Allah ke paas chhoda gaya.", amal: "Dalil dene ke baad sakhti ya jhagde ke bajaye saaf lafzon mein baat khatam karein.", src: ["Quran 3:62–63"] }
      ]
    },
    {
      n: 8, from: 64, to: 74, g: 3,
      title: "Barabar ki baat, Ibrahim (A.S.) ki millat aur hasad",
      sub: "Kalima-e-sawa ki dawat, Ibrahim ke baare mein bahes aur Ahl-e-Kitab ke kuch logon ki chalein",
      heads: ["Every Person Knows about Tawhid", "Disputing with the Jews and Christians About the Religion of Ibrahim", "The Envy the Jews Feel Towards Muslims; Their Wicked Plots Against Muslims"],
      intro: "Yahan se Ahl-e-Kitab se seedhi baat shuru hoti hai: pehle ek aisi baat ki taraf bulaya gaya jo dono ke beech barabar hai. Phir Ibrahim (A.S.) ke baare mein bahes aur kuch logon ki hasad bhari chalein bayan hui.",
      points: [
        { r: [64, 64], h: "Kalima-e-sawa: barabar ki baat", t: "Ayah 64: ‘Ae Ahl-e-Kitab, ek aisi baat ki taraf aao jo hamare aur tumhare beech barabar hai: hum Allah ke siwa kisi ki ibadat na karein, uske saath kisi ko shareek na karein aur hum mein se koi doosre ko Allah ke siwa rab na banaye.’ Agar woh mooh pheren to kaho ‘gawah raho hum Muslim hain.’ Ibn Kathir: ‘kalimah’ ka maana poori baat hai, aur Ibn Jurayj ne kaha ‘hum Allah ki nafarmani mein ek doosre ki ita‘at nahi karte’." },
        { r: [65, 68], h: "Ibrahim (A.S.) ke baare mein bahes", t: "Ayah 65–68: ‘Ae Ahl-e-Kitab, tum Ibrahim ke baare mein kyun jhagadte ho jabke Tawrah aur Injil unke baad utarin?’ Ibrahim na Yahoodi the na Isai, balki yakso Muslim the aur mushrikon mein se na the. Ibrahim se sab se qareeb woh hain jo unki pairwi karte hain, yeh Nabi aur imaan wale; Allah imaan walon ka dost hai. Ibn Kathir ne Ibn Abbas se naql kiya ke Najran ke Isai aur Yahood ke ulama Nabi ﷺ ke saamne jama hue aur har ek ne Ibrahim ko apna kaha. Ibn Kathir: jis cheez ka ilm hi nahi us par bahes karna qabil-e-mazammat hai." },
        { r: [69, 74], h: "Hasad aur gumrah karne ki koshish", t: "Ayah 69–74: Ahl-e-Kitab ke ek giroh ki khwahish hai ke tumhein gumrah kar de, jabke woh khud ko hi gumrah kar rahe hain. Un se kaha gaya ‘tum haq ko batil se kyun milate aur haq chhupate ho?’ Ek giroh ne kaha ‘din ke shuru mein imaan ka dikhawa karo aur shaam ko inkar kar do, shayad woh lautt jayen.’ Jawab: hidayat sirf Allah ki hidayat hai; fazl Allah ke hath mein hai, jise chahe deta hai. Ibn Kathir ne yeh bayan Yahood ke kuch logon ki chaal ke taur par likha aur Mujahid se naql kiya ke woh subah Musalmanon ke saath namaz mein shamil hote phir shaam ko palat jate." }
      ],
      key: "Sab nabiyon ka paigham ek hi tha: sirf Allah ki ibadat. Ibrahim (A.S.) ki asal pairwi unke deen (Allah ki farmabardari) mein hai, naam ya nisbat ke daawe mein nahi.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 64 se 74", "Quran 3:64–74"],
      samjho: [
        { title: "Kalima-e-sawa", ayahs: [64], simple: "Woh baat jo dono ke beech barabar aur munsifana hai: sirf Allah ki ibadat, koi shareek nahi.", context: "Ayah 64 ke baad agar woh na maanein to ‘hum Muslim hain’ kehne ka hukm hai.", note: "Ibn Kathir: yeh Allah ke tamam Rasoolon ka paigham hai; unhone ayat 21:25 aur 16:36 bhi isi ke saath naql ki.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 64"] },
        { title: "Bina ilm bahes", ayahs: [66], simple: "Jis cheez ka ilm nahi us par bahes karna Quran ki tanqeed ka nishana hai.", context: "Ayah 66 mein Ibrahim (A.S.) ke baare mein dava-bahes par sawal uthaya gaya.", note: "Ibn Kathir: agar woh apne deen ke bare mein, jis ka unhein ilm tha, bahes karte to behtar hota.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 65–68"] }
      ],
      lessons: [
        { title: "Mushtarak buniyad par baat shuru karein", ayahs: [64], fromSurah: "Ayah 64 ne pehle us baat par dawat di jo dono ke beech barabar thi.", amal: "Ikhtilaf mein pehle us baat se shuru karein jis par sab mutafiq hon, phir dalil se baat karein.", src: ["Quran 3:64", "Tafsir Ibn Kathir, Ayah 64"] },
        { title: "Jis ka ilm nahi us par bahes na karein", ayahs: [66], fromSurah: "Ayah 66 ne bina ilm ke bahes par tanqeed ki.", amal: "Kisi maslay par bolne se pehle sahi ilm hasil karein.", src: ["Quran 3:66"] },
        { title: "Imaan ko dhoke se bachayein", ayahs: [72], fromSurah: "Ayah 72 ne imaan mein shak daalne wali chaal ka bayan kiya aur ayah 73 ne hidayat ko Allah ki hidayat bataya.", amal: "Deen ke baare mein afwahon ya chalon se mutasir hone se pehle ahl-e-ilm se tasdeeq karein.", src: ["Quran 3:72–73"] }
      ]
    },
    {
      n: 9, from: 75, to: 82, g: 3,
      title: "Amanat, ahd aur Allah ke kalam ki hifazat",
      sub: "Amanat mein farq, jhooti qasmein, Kitab mein tehreef aur Nabiyon se ahd",
      heads: ["How Trustworthy Are the Jews?", "There is No Share in the Hereafter for Those Who Break Allah's Covenant", "The Jews Alter Allah's Words", "No Prophet Ever Called People to Worship him or to Worship Other Than Allah", "Taking a Pledge From the Prophets to Believe in Our Prophet, Muhammad (ﷺ)"],
      intro: "Is hisse mein Ahl-e-Kitab ke baare mein bataya gaya ke unmein amanat ke maamle mein alag alag log hain. Phir ahd todne walon ka anjaam, Kitab mein tehreef, aur yeh ke koi Nabi apni ibadat ka hukm nahi deta; aakhir mein Nabiyon se liye gaye ahd ka zikr hai.",
      points: [
        { r: [75, 76], h: "Amanat mein sab ek jaise nahi", t: "Ayah 75–76: Ahl-e-Kitab mein koi aisa hai jise ek dher maal amanat do to wapas kar de, aur koi aisa jise ek dinar do to jab tak sar par khade na raho wapas na kare; kyunke woh kehte hain ‘unpadhon (Arabon) ke baare mein hum par koi pakad nahi’ aur Allah par jaan boojh kar jhoot bandhte hain. Haan, jo apna ahd poora kare aur taqwa rakhe to Allah muttaqeen ko pasand karta hai. Ibn Kathir ne likha ke unmein dhoka dene wale log hain aur mominon ko in se khabardar kiya gaya." },
        { r: [77, 77], h: "Ahd ko thode mol bechne walon ka anjaam", t: "Ayah 77: jo Allah ke ahd aur apni qasamon ko thode mol bechte hain, aakhirat mein unka koi hissa nahi, Allah un se baat karega na unki taraf dekhega na unhein paak karega, aur dardnaak azab hai. Ibn Kathir ne is ayah ke tahat kai hadithein naql ki, jaise Abu Dharr (r.a.) ki riwayat jis mein teen qism ke logon ka zikr hai, jin mein jhooti qasam se saamaan bechne wala bhi shamil hai." },
        { r: [78, 78], h: "Allah ke kalam mein tehreef", t: "Ayah 78: unmein kuch log Kitab ko apni zubaan se maroodte hain taake tum usay Kitab ka hissa samjho, jabke woh Kitab ka hissa nahi, aur woh Allah par jaan boojh kar jhoot bandhte hain. Ibn Kathir ne Wahb bin Munabbih ka qaul naql kiya ke Tawrah aur Injil Allah ke utare huye harf ke saath maujood hain, lekin log ghalat tawil aur izafon se logon ko gumrah karte hain." },
        { r: [79, 80], h: "Koi Nabi apni ibadat ka hukm nahi deta", t: "Ayah 79–80: kisi bashar ko yeh zeba nahi ke Allah usay Kitab, hukm aur nabuwat de aur woh logon se kahe ‘Allah ko chhod kar meri bandagi karo’; woh to kahega ‘Rabbani ban jao kyunke tum Kitab sikhate aur padhte ho.’ Aur woh tumhein farishton aur Nabiyon ko rab banane ka hukm nahi deta. Ibn Kathir: yeh tanqeed jahil panditon aur gumrahi ke ustadon par hai, na ke Rasoolon aur unke sachche ilm wale pairokaron par." },
        { r: [81, 82], h: "Nabiyon se ahd", t: "Ayah 81–82: Allah ne Nabiyon se ahd liya ke jab main tumhein Kitab aur hikmat dun phir tumhare paas ek Rasool aaye jo tumhari tasdeeq kare to us par zaroor imaan lana aur uski madad karna; unhone iqrar kiya. Jo is ke baad phir jaye woh nafarman hain. Ibn Kathir: Allah ne Adam se Isa (A.S.) tak har Nabi se yeh ahd liya; ‘Isri’ ka matlab ‘mera ahd’ hai." }
      ],
      key: "Amanat aur ahd imaan ka hissa hain, Allah ke kalam mein tehreef gumrahi hai, aur har Nabi ne Tawhid ki dawat di aur doosre Nabi ki tasdeeq ka ahd nibhaya.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 75 se 82", "Quran 3:75–82"],
      samjho: [
        { title: "Isri (ahd ki zimmedari)", ayahs: [81], simple: "‘Isri’ yahan Allah ke ahd ki zimmedari ko kehte hain.", context: "Ayah 81 mein Nabiyon se liye gaye ahd ka zikr hai.", note: "Ibn Kathir: Ibn Abbas, Mujahid, Rabi‘, Qatadah aur Suddi ne kaha ‘Isri’ yani mera ahd.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 81–82"] },
        { title: "Rabbani", ayahs: [79], simple: "Ayah 79 ke mutabiq Rabbani wohi hai jo Kitab sikhata aur padhta hai.", context: "Nabi logon ko apni nahi balki Allah ki ibadat ki taraf bulata hai.", note: "Ibn Kathir ne is lafz ki aur wazahat likhi hai jo maine poori nahi padhi.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 79–80"] }
      ],
      lessons: [
        { title: "Amanat poori karein", ayahs: [75], fromSurah: "Ayah 75 mein amanat wapas karne ya na karne ka farq saaf bayan hua.", amal: "Chhoti ya badi amanat waqt par aur bina taqaza ke wapas karein.", src: ["Quran 3:75"] },
        { title: "Jhooti qasam se bachein", ayahs: [77], fromSurah: "Allah ke ahd aur qasmein thode mol bechne par aakhirat ka sakht anjaam bataya gaya.", amal: "Karobar mein jhooti qasam na khayein aur wada poora karein.", src: ["Quran 3:77", "Tafsir Ibn Kathir, Ayah 77"] },
        { title: "Ilm ke mutabiq amal", ayahs: [79], fromSurah: "Ayah 79 mein Kitab sikhane aur padhne wale ko Rabbani banne ka hukm hai.", amal: "Jo ilm seekhein us par amal bhi karein aur doosron ko bhi sahi baat batayein.", src: ["Quran 3:79"] }
      ]
    },
    {
      n: 10, from: 83, to: 95, g: 3,
      title: "Islam hi maqbool deen, tauba aur sachchi neki",
      sub: "Allah ke deen ka bayan, imaan ke baad kufr aur tauba, pasandeeda maal mein se kharch aur Bani Israel ke sawal",
      heads: ["The Only Valid Religion To Allah is Islam", "Allah Does Not Guide People Who Disbelieve After they Believed, Unless They Repent", "Neither Repentance of the Disbeliever Upon Death, Nor His Ransoming Himself on the Day of Resurrection Shall be Accepted", "Al-Birr is Spending from the Best of One's Wealth", "The Questions that the Jews Asked Our Prophet (ﷺ)"],
      intro: "Is hisse mein pehle bataya gaya ke Allah ke nazdeek maqbool deen sirf Islam hai. Phir imaan ke baad kufr karne walon ka anjaam aur tauba ka darwaza, neki ki asal pehchan (pasandeeda maal kharch karna) aur Bani Israel ke baare mein ek sawal-jawab aata hai.",
      points: [
        { r: [83, 85], h: "Allah ke deen ke siwa kuch aur?", t: "Ayah 83–85: kya woh Allah ke deen ke siwa kuch aur chahte hain, jabke aasman-zameen mein sab usi ke aage jhukte hain, khushi se ya majboori se? Kaho ‘hum Allah par aur jo humpar, Ibrahim, Ismail, Ishaq, Yaqub aur Asbat par utara, aur jo Musa, Isa aur doosre Nabiyon ko diya gaya, sab par imaan laaye; hum unmein farq nahi karte aur hum usi ke Muslim hain.’ Jo Islam ke siwa deen chahe woh us se qubool nahi hoga aur aakhirat mein ghate mein hoga. Ibn Kathir: momin dil aur jism se Allah ke aage jhukta hai jabke kafir sirf jism se, kyunke woh Allah ke qabze aur hukm mein hai." },
        { r: [86, 89], h: "Imaan ke baad kufr aur tauba ka darwaza", t: "Ayah 86–89: Allah un logon ko hidayat nahi deta jinhone imaan aur roshan dalail ke baad kufr kiya; un par Allah, farishton aur sab logon ki laanat hai aur unka azab halka nahi hoga. Magar jinhone iske baad tauba ki aur islah ki to Allah bakhshne wala aur rehm karne wala hai. Ibn Kathir ne Ibn Abbas se naql kiya ke Ansar ka ek shakhs Islam laaya, phir murtad ho gaya, phir pachtaya aur apni qaum ke zariye Nabi ﷺ se poochwaya; is par yeh ayat utarin aur usne dobara Islam qubool kiya." },
        { r: [90, 91], h: "Kufr par ade rehna aur maut", t: "Ayah 90–91: jo imaan ke baad kufr karte aur kufr mein badhte gaye unki tauba qubool nahi hogi, woh gumrah hain; aur jo kufr par mar gaye unse zameen bhar sona bhi fidya mein qubool nahi hoga. Ibn Kathir ne yahan 4:18 ka hawala diya ke jo gunah karte rahe aur jab maut samne aa jaye tab kahe ke ab tauba karta hoon, uski tauba nahi. Ibn Abbas ki ek riwayat bhi naql ki jis mein kuch logon ke imaan aur kufr ke beech badalne ke baad yeh ayat utarin." },
        { r: [92, 92], h: "Neki ki pehchan: pasandeeda cheez mein se kharch", t: "Ayah 92: tum neki (birr) tak nahi pahunch sakte jab tak apni pasandeeda cheez mein se kharch na karo; aur jo bhi kharch karo Allah usay jaanta hai. Ibn Kathir ne Amr bin Maymun se naql kiya ke yahan ‘birr’ se murad jannat hai. Anas (r.a.) se riwayat naql ki ke Abu Talhah (r.a.) ko apne maal mein sab se pyara Bayruha ka bagh tha, aur is ayah ke baad unhone usay Allah ki raah mein dena chaha; Nabi ﷺ ne iski tareef ki aur aage ka mashwara bhi diya (hadith ka aakhri hissa maine poora nahi padha)." },
        { r: [93, 95], h: "Bani Israel ke sawal aur Ibrahim ki millat", t: "Ayah 93–95: Tawrah utarne se pehle Bani Israel ke liye sab khane halal the siwa us ke jo Israel (Yaqub A.S.) ne apne upar haram kiya tha; kaho ‘Tawrah le aao aur padho agar sachche ho.’ Jo is ke baad Allah par jhoot bandhe woh zalim hain. Kaho ‘Allah ne sach kaha, ab Ibrahim ki millat ki pairwi karo jo yakso the aur mushrikon mein se na the.’ Ibn Kathir ne Ibn Abbas ke zariye Ahmad ki hadith naql ki jis mein Yahood ke ek giroh ne Nabi ﷺ se chaar sawal pooche aur Nabi ﷺ ne pehle un se ahd liya; unhone bataya ke Israel ne bimari ke baad ek cheez apne upar haram ki thi." }
      ],
      key: "Allah ke aage jhukna aur Islam hi maqbool raasta hai; tauba ka darwaza maut se pehle khula hai; neki ka matlab apni pasandeeda cheez Allah ki raah mein dena hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 83 se 95", "Quran 3:83–95"],
      samjho: [
        { title: "Islam (is hisse mein)", ayahs: [83, 85], simple: "Allah ke aage poori tarah jhuk jaana aur sirf usi ki ibadat karna.", context: "Ayah 83 mein aasman-zameen ke sab ke jhukne ka zikr hai aur ayah 85 mein Islam ke siwa deen ka radd.", note: "Ibn Kathir (The Only Valid Religion): woh deen jis ke saath Allah ne apni kitabein aur Rasool bheje, yani Allah ki akeli ibadat.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 83–85"] },
        { title: "Birr (neki)", ayahs: [92], simple: "Ayah 92 mein birr tak pahunchne ki shart pasandeeda cheez mein se kharch karna hai.", context: "Is ayah ke baad Abu Talhah (r.a.) ne apna sab se pyara bagh dena chaha.", note: "Ibn Kathir: Amr bin Maymun ke mutabiq yahan birr se murad jannat hai.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 92 (Al-Birr is Spending from the Best of One's Wealth)"] }
      ],
      lessons: [
        { title: "Tauba ka darwaza khula hai", ayahs: [89], fromSurah: "Ayah 89 ne tauba aur islah karne walon ko Allah ki maghfirat ka wada diya.", amal: "Gunah ke baad der kiye bina tauba karein aur apni islah bhi karein.", src: ["Quran 3:89", "Tafsir Ibn Kathir, Ayah 86–89"] },
        { title: "Maut se pehle tauba", ayahs: [90, 91], fromSurah: "Kufr par ade rehne aur usi haal mein marne walon ke liye tauba aur fidya qubool nahi bataya gaya.", amal: "Tauba ko kal par na taalein.", src: ["Quran 3:90–91"] },
        { title: "Pasandeeda cheez Allah ki raah mein", ayahs: [92], fromSurah: "Ayah 92 mein neki ke liye apni pasandeeda cheez kharch karne ki shart aayi.", amal: "Sadqa mein sirf bacha khucha nahi, kabhi apni pyari cheez bhi Allah ki raah mein dein.", src: ["Quran 3:92"] }
      ]
    },
    {
      n: 11, from: 96, to: 103, g: 3,
      title: "Ka‘bah, Hajj aur taqwa-o-ittehad ka hukm",
      sub: "Allah ka pehla ghar, Hajj ka hukm, Ahl-e-Kitab ke asraat se hoshiyari aur Allah ki rassi",
      heads: ["The Ka'bah is the First House of Worship", "The Necessity of Performing Hajj", "Chastising the People of the Book for Their Disbelief and Blocking the Path of Allah", "Warning Muslims Against Imitating People of the Scriptures", "Meaning of 'Taqwa of Allah'", "The Necessity of Holding to the Path of Allah and the Community of the Believers"],
      intro: "Is hisse mein Ka‘bah ke pehla ghar hone aur Hajj ke hukm ka bayan hai. Phir Ahl-e-Kitab ke un logon ko tanbeeh jo logon ko Allah ke raaste se rokte hain, Musalmanon ko un ke asraat se hoshiyar kiya gaya, aur taqwa aur ittehad ka hukm diya gaya.",
      points: [
        { r: [96, 97], h: "Ka‘bah aur Hajj", t: "Ayah 96–97: logon ke liye jo pehla ghar banaya gaya woh Bakkah (Makkah) mein hai, barkat wala aur jahan walon ke liye hidayat. Us mein roshan nishaniyan hain, Maqam-e-Ibrahim hai, jo us mein dakhil ho aman mein hai; aur Allah ka haq hai ke jo rasta paa sakte hain woh Hajj karein; jo inkar kare to Allah sab jahanon se be-niyaz hai. Ibn Kathir ne Abu Dharr (r.a.) ki hadith naql ki ke zameen par pehli masjid Masjid-ul-Haram thi, phir Masjid-e-Aqsa, dono ke beech chalis saal ka farq. Ibn Kathir ne Hajj ke wajib hone aur ‘istita‘at’ ke maane par alag headings rakhi; unki tafseel maine poori nahi padhi." },
        { r: [98, 99], h: "Allah ke raaste se rokne walon ko tanbeeh", t: "Ayah 98–99: ‘Ae Ahl-e-Kitab, tum Allah ki ayat ka kyun inkar karte ho aur imaan lane walon ko Allah ke raaste se kyun rokte ho, jabke tum jaante ho? Allah tumhare amal se ghafil nahi.’ Ibn Kathir: yeh un Ahl-e-Kitab ko tanbeeh hai jo haq jaan kar bhi inkar karte aur doosron ko rokte hain." },
        { r: [100, 101], h: "Musalmanon ko hoshiyari", t: "Ayah 100–101: agar tum Ahl-e-Kitab ke ek giroh ki maanoge to woh tumhein imaan ke baad kafir bana denge. ‘Aur tum kaise kufr karoge jabke tum par Allah ki ayat padhi jati hain aur Rasool tum mein hain? Jo Allah ko mazbooti se thame woh seedhe raaste par hai.’ Ibn Kathir ne heading rakha ‘Warning Muslims Against Imitating People of the Scriptures’." },
        { r: [102, 103], h: "Taqwa aur Allah ki rassi", t: "Ayah 102–103: ‘Allah se aisa daro jaisa uska haq hai aur marna to Muslim hi marna.’ ‘Allah ki rassi ko mil kar mazbooti se thaam lo aur tafarqa na daalo; Allah ki us nemat ko yaad karo jab tum dushman the to usne tumhare dilon ko jod diya aur tum bhai bhai ban gaye.’ Ibn Kathir ne Abdullah bin Mas‘ud (r.a.) se naql kiya ke taqwa ka haq yeh hai ke Allah ki ita‘at ho nafarmani na ho, usay yaad rakha jaye bhoola na jaye, uska shukr ho nashukri na ho. ‘Allah ki rassi’ ke baare mein unhone likha ke is se murad Allah ka ahd hai." }
      ],
      key: "Ka‘bah Allah ka pehla ghar aur Hajj uska haq hai; taqwa ka haq ita‘at, zikr aur shukr hai; aur Musalmanon ki taqat Allah ki rassi ko mil kar thaamne mein hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 96 se 103", "Quran 3:96–103"],
      samjho: [
        { title: "Taqwa haqqa tuqatih", ayahs: [102], simple: "Allah se aisa darna jaisa darne ka haq hai.", context: "Ayah 102 mein taqwa ke saath Muslim hi marne ka hukm hai.", note: "Ibn Kathir ne Ibn Mas‘ud ki is tafseer ko naql kiya: ita‘at ho nafarmani na ho, zikr ho bhoola na jaye, shukr ho nashukri na ho.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 102–103 (Meaning of 'Taqwa of Allah')"] },
        { title: "Hablullah (Allah ki rassi)", ayahs: [103], simple: "Ayah 103 mein Allah ki rassi ko mil kar thaamne ka hukm hai.", context: "Is ke saath tafarqa se roka gaya aur dilon ke jod diye jaane ka ehsan yaad dilaya gaya.", note: "Ibn Kathir ne yahan ‘Allah ka ahd’ likha; is ke aur maane bhi unke bayan mein ho sakte hain jo maine poore nahi padhe.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 103"] }
      ],
      lessons: [
        { title: "Taqwa ka haq ada karein", ayahs: [102], fromSurah: "Ayah 102 mein taqwa ke saath Islam par maut ka hukm hai.", amal: "Roz ka ek nek amal tay karein jo Allah ki ita‘at, zikr ya shukr ke liye ho.", src: ["Quran 3:102", "Tafsir Ibn Kathir, Ayah 102"] },
        { title: "Tafarqa se bachein", ayahs: [103], fromSurah: "Ayah 103 mein mil kar Allah ki rassi thaamne aur dilon ke jodne ki nemat yaad dilayi gayi.", amal: "Masjid, ghar aur biradari mein jhagde barhane ke bajaye jodne wali baat karein.", src: ["Quran 3:103"] },
        { title: "Din se rokne walon se hoshiyar", ayahs: [100], fromSurah: "Ayah 100 mein khabardar kiya gaya ke kuch logon ki ita‘at imaan ke liye khatra ban sakti hai.", amal: "Deen ke baare mein har baat par yaqeen karne se pehle bharosemand ahl-e-ilm se tasdeeq karein.", src: ["Quran 3:100–101"] }
      ]
    },
    {
      n: 12, from: 104, to: 112, g: 3,
      title: "Neki ki dawat, ittehad aur behtareen Ummat",
      sub: "Amr bil ma‘roof, tafarqa se rok, qayamat ke din chehre aur Ummat ki fazilat",
      heads: ["The Command to Establish the Invitation to Allah", "The Prohibition of Division", "The Benefits of Brotherly Ties and Unity and the Consequence of Division on the Day of the Gathering", "Virtues of the Ummah of Muhammad (ﷺ), the Best Nation Ever", "The Good News that Muslims will Dominate the People of the Book"],
      intro: "Is hisse mein Musalmanon ko neki ki taraf bulane aur burai se rokne ki zimmedari, tafarqa se rok aur qayamat ke din ke do qism ke chehron ka bayan hai. Phir Ummat-e-Muhammadi ko behtareen ummat kaha gaya aur uski sifaat batayi gayin.",
      points: [
        { r: [104, 104], h: "Neki ki taraf bulane wali jamaat", t: "Ayah 104: tum mein ek aisi jamaat honi chahiye jo bhalai ki taraf bulaye, ma‘roof ka hukm de aur munkar se roke; yahi log kamyab hain. Ibn Kathir: maqsad yeh hai ke Ummat mein ek giroh yeh kaam kare, aur yeh har momin par bhi uski taqat ke mutabiq zimmedari hai. Unhone Muslim ki hadith naql ki ke burai dekho to hath se badlo, na ho to zubaan se, na ho to dil se, aur yeh sab se kamzor imaan hai." },
        { r: [105, 107], h: "Tafarqa aur qayamat ke din ke chehre", t: "Ayah 105–107: un jaise na ho jana jinhone roshan dalail aane ke baad tafarqa kiya aur ikhtilaf kiya; unke liye bada azab hai. Us din kuch chehre roshan aur kuch siyah honge; siyah chehron se kaha jayega ‘kya tumne imaan ke baad kufr kiya?’ aur roshan chehre Allah ki rehmat mein honge. Ibn Kathir ke heading mein bhaichare aur ittehad ke faide aur tafarqa ke anjaam ka zikr hai." },
        { r: [108, 109], h: "Allah zulm nahi chahta", t: "Ayah 108–109: yeh Allah ki ayat hain jo hum haq ke saath tumhein sunate hain, aur Allah jahan walon par zulm nahi chahta. Aasman-zameen mein sab kuch Allah ka hai aur sab umoor usi ki taraf lautaye jate hain." },
        { r: [110, 112], h: "Behtareen Ummat", t: "Ayah 110: ‘Tum behtareen ummat ho jo logon ke liye nikali gayi; tum ma‘roof ka hukm dete ho, munkar se rokte ho aur Allah par imaan rakhte ho.’ Ibn Kathir: Ummat-e-Muhammadi logon ke liye sab se nek aur faida-mand ummat hai; unhone hadith naql ki ke tum sattar ummaton mein aakhri ho aur Allah ke nazdeek sab se mukarram. Ayah 111–112 mein Ahl-e-Kitab ke un logon ka haal hai jo inkar aur zyadati par ade rahe; Ibn Kathir ne iska heading rakha ‘The Good News that Muslims will Dominate the People of the Book’ (is hisse ki tafseel maine poori nahi padhi)." }
      ],
      key: "Ummat ki izzat neki ka hukm dene, burai se rokne aur Allah par imaan rakhne mein hai; tafarqa Ummat ko kamzor karta hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 104 se 112", "Quran 3:104–112"],
      samjho: [
        { title: "Ma‘roof aur Munkar", ayahs: [104, 110], simple: "Ma‘roof = jaani pehchani neki, Munkar = woh burai jise deen aur fitrat na-pasand kare.", context: "Ayah 104 aur 110 dono mein yeh Ummat ki sifat ke taur par aaye.", note: "Ibn Kathir ne ma‘roof ka hukm dene aur munkar se rokne ko Ummat ki zimmedari bataya (har ek apni taqat ke mutabiq).", refs: [], src: ["Tafsir Ibn Kathir, Ayah 104"] },
        { title: "Safed aur siyah chehre", ayahs: [106, 107], simple: "Qayamat ke din kuch chehre roshan aur kuch siyah honge.", context: "Ayah 106–107 mein dono ke anjaam ka bayan hai.", note: "Ibn Kathir ke heading mein ise tafarqa ke anjaam ke saath joda gaya hai.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 104–109"] }
      ],
      lessons: [
        { title: "Neki ki dawat ki zimmedari", ayahs: [104], fromSurah: "Ayah 104 mein ek jamaat ko neki ki taraf bulane ka hukm hai.", amal: "Apni taqat aur ilm ke mutabiq narmi se neki ki baat pahunchayein.", src: ["Quran 3:104", "Tafsir Ibn Kathir, Ayah 104"] },
        { title: "Ikhtilaf ko jhagde mein na badlein", ayahs: [105], fromSurah: "Roshan dalail ke baad bhi tafarqa karne walon ke liye bada azab bataya gaya.", amal: "Ikhtilaf ho to ahl-e-ilm ki taraf rujoo karein aur dil na torein.", src: ["Quran 3:105"] },
        { title: "Behtareen Ummat ki sifaat", ayahs: [110], fromSurah: "Behtareen hone ki wajah ma‘roof ka hukm, munkar se rokna aur imaan batayi gayi.", amal: "Behtar banne ke liye in teen sifaat par apna jaiza lete rahein.", src: ["Quran 3:110"] }
      ]
    },
    {
      n: 13, from: 113, to: 120, g: 3,
      title: "Ahl-e-Kitab mein ache log, kharch ki misaal aur raazdari",
      sub: "Sab barabar nahi, kafiron ke kharch ki misaal, raaz na batana aur sabr-taqwa",
      heads: ["Virtues of the People of the Scriptures Who Embrace Islam", "The Parable of What the Disbelievers Spend in This Life", "The Prohibition of Taking Advisors From Among the Disbelievers"],
      intro: "Is hisse mein Quran insaaf ke saath yeh batata hai ke Ahl-e-Kitab sab ek jaise nahi, unmein nek log bhi hain. Phir kafiron ke kharch ki misaal aur Musalmanon ko raazdar chunne mein ehtiyaat aur sabr-o-taqwa ki hidayat aati hai.",
      points: [
        { r: [113, 115], h: "Sab barabar nahi", t: "Ayah 113–115: Ahl-e-Kitab sab ek jaise nahi; unmein ek jamaat haq par qaim hai jo raat ke waqt Allah ki ayat padhti aur sajda karti hai, Allah aur aakhirat par imaan rakhti, ma‘roof ka hukm deti, munkar se rokti aur neki ke kaamon mein jaldi karti hai; woh nek logon mein se hain; jo neki karenge uski nakdari nahi hogi. Ibn Kathir: Ibn Ishaq aur Ibn Abbas ke mutabiq yeh ayat Ahl-e-Kitab ke un ulama ke baare mein hain jo Islam laye, jaise Abdullah bin Salam, Asad bin Ubayd, Tha‘labah bin Sa‘yah aur Usayd bin Sa‘yah." },
        { r: [116, 117], h: "Kafiron ke kharch ki misaal", t: "Ayah 116–117: kafiron ke maal aur aulad Allah ke muqable mein unke kaam na aayenge; woh Aag walon mein hain. Is zindagi mein woh jo kharch karte hain uski misaal us tez thandi hawa jaisi hai jo kisi zalim qaum ki kheti par chale aur usay tabah kar de; Allah ne un par zulm nahi kiya, woh khud apne upar zulm karte hain." },
        { r: [118, 120], h: "Raazdar chunne mein ehtiyaat", t: "Ayah 118–120: ‘Ae imaan walo, apne siwa kisi ko apna raazdar (bitanah) na banao; woh tumhein nuqsan pahunchane mein kami nahi karte; unki dushmani unke munh se zaahir ho chuki hai.’ Ayah 119: tum unse mohabbat karte ho woh tumse nahi karte, aur tum poori kitab par imaan rakhte ho; milte hain to kehte hain hum imaan laaye, aur akele mein gusse se ungliyan chabate hain. Ayah 120: agar tumhein bhalai pahunchti hai to unhein bura lagta hai; agar tum sabr karo aur taqwa rakho to unki chaal tumhein kuch nuqsan nahi degi. Ibn Kathir ne yahan ‘bitanah’ ko aise raazdar aur mushir ke maane mein likha jo kisi ke chhupe maamlaat tak pahunch rakhta ho, aur Bukhari ki hadith naql ki ke har Nabi aur Khalifa ke do tarah ke mashwara dene wale hote hain, ek bhalai ka aur doosra burai ka." }
      ],
      key: "Quran insaaf se baat karta hai: Ahl-e-Kitab mein nek log bhi hain; raazdari mein ehtiyaat zaroori hai aur sabr aur taqwa se dushman ki chaal nuqsan nahi deti.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 113 se 120", "Quran 3:113–120"],
      samjho: [
        { title: "Bitanah (raazdar)", ayahs: [118], simple: "Bitanah woh hai jo kisi ke andar ke raaz aur maamlaat tak pahunchta ho.", context: "Ayah 118 mein aise logon ko raazdar banane se roka gaya jo Musalmanon ke khair-khwah nahi.", note: "Ibn Kathir: advisors ko kisi ke sab se chhupe maamlaat tak rasai hoti hai; isi liye yeh hukm hai.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 118–120"] },
        { title: "Sabr aur taqwa ka faida", ayahs: [120], simple: "Ayah 120 ke mutabiq sabr aur taqwa ho to dushman ki chaal nuqsan nahi deti.", context: "Ayah 120 mein dushman ki khushi aur naraazgi ka bhi zikr hai.", note: "Ibn Kathir ke is hisse mein sabr aur taqwa ki shart ayah ki tarah hi saaf hai.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 118–120"] }
      ],
      lessons: [
        { title: "Insaaf se baat karein", ayahs: [113], fromSurah: "Ayah 113 ne ‘woh sab barabar nahi’ keh kar un mein nek logon ko alag pehchana.", amal: "Kisi poore giroh ke baare mein ek hi hukm lagane se bachein.", src: ["Quran 3:113–115"] },
        { title: "Raaz ki hifazat", ayahs: [118], fromSurah: "Ayah 118 ne raazdar chunne mein ehtiyaat ka hukm diya.", amal: "Apne ghar, kaam ya biradari ke raaz sochkar aur bharosemand logon se hi share karein.", src: ["Quran 3:118"] },
        { title: "Sabr aur taqwa", ayahs: [120], fromSurah: "Sabr aur taqwa ke saath dushman ki chaal nuqsan nahi deti.", amal: "Dushmani ya hasad ka jawab gusse ke bajaye sabr aur taqwa se dein.", src: ["Quran 3:120"] }
      ]
    },
    {
      n: 14, from: 121, to: 129, g: 4,
      title: "Uhud ka aaghaz aur farishton ki madad ka wada",
      sub: "Uhud ke waqie ka background, Badr ki yaad aur madad ki shart: sabr aur taqwa",
      heads: ["The Battle of Uhud", "The Reason Behind the Battle of Uhud", "Reminding the Believers of Their Victory at Badr", "The Support of the Angels", "The First View", "The Second View"],
      intro: "Yahan se Uhud ki jang ka bayan shuru hota hai. Pehle jang ka background, phir Badr ki yaad, aur farishton ki madad ka wada jo sabr aur taqwa se mashroot tha. Ibn Kathir ne yahan do aqwal likhe ke yeh wada Badr ke baare mein hai ya Uhud ke.",
      points: [
        { r: [121, 122], h: "Uhud ka waqia", t: "Ayah 121–122: ‘Aur (yaad karo) jab tum subah apne ghar se nikle aur momino ko jang ke morchon par jamate the; Allah sunne wala jaanne wala hai. Jab tum mein se do giroh himmat harne lage jabke Allah unka madadgar tha; aur momino ko Allah hi par bharosa karna chahiye.’ Ibn Kathir: Uhud Hijrat ke teesre saal Shawwal mein hua; Quraysh ne Badr ke baad Abu Sufyan ke qafile ka maal jang ke liye lagaya aur teen hazaar ka lashkar jama kiya. Nabi ﷺ ne Sahaba se mashwara liya; Abdullah bin Ubayy ne Madinah mein rehne ka mashwara diya jabke kuch Sahaba ne bahar nikalne ka. Nabi ﷺ ne jang ka libaas pehen kar farmaya ke Nabi ke liye munasib nahi ke libaas pehen kar Allah ka faisla hone se pehle hathiyar rakh de, aur hazaar Sahaba ke saath nikle. Tafheem ke mutabiq raaste mein teen sau munafiq wapas lautt gaye." },
        { r: [123, 123], h: "Badr ki yaad", t: "Ayah 123: ‘Allah ne Badr mein tumhari madad ki jab tum kamzor the; to Allah se daro taake tum shukr guzar bano.’ Ibn Kathir ne iske liye heading rakha ‘Reminding the Believers of Their Victory at Badr’." },
        { r: [124, 126], h: "Farishton ki madad aur uski shart", t: "Ayah 124–126: ‘Kya tumhare liye kaafi nahi ke tumhara Rabb teen hazaar farishte utaar kar tumhari madad kare? Haan, agar tum sabr karo aur taqwa rakho aur dushman achanak tum par aa pade to tumhara Rabb paanch hazaar nishan-zada farishton se tumhari madad karega.’ Allah ne yeh sirf khushkhabri aur dil ke itminan ke liye kiya; madad sirf Allah ki taraf se hai. Ibn Kathir ne ulama ke do aqwal likhe: pehla yeh ke yeh wada Badr ke baare mein hai (Hasan Basri, Sha‘bi, Rabi‘ aur Ibn Jarir ki raay); doosra yeh ke yeh Uhud se judi hai lekin farishte Uhud mein nahi aaye kyunke madad sabr aur taqwa se mashroot thi aur Musalmanon ne sabr nahi kiya." },
        { r: [127, 129], h: "Nateeje Allah ke hath mein", t: "Ayah 127–129: taake Allah kafiron ka ek hissa kaat de ya unhein zaleel kare aur woh nakaam laut jayen. ‘Is maamle mein tumhara (Nabi ﷺ ka) koi ikhtiyar nahi; Allah chahe to unki tauba qubool kare ya unhein azab de, kyunke woh zalim hain.’ Aasman-zameen ki har cheez Allah ki hai, woh jise chahe bakhshta aur jise chahe azab deta hai. Ibn Kathir ne ayah 128 ke baare mein likha ke yahan ‘maamla sab Allah ke hath mein hai’ ka bayan hai, aur is ke nuzool ke baare mein kai riwayatein naql ki." }
      ],
      key: "Madad Allah ki taraf se hai aur sabr aur taqwa se mashroot hai; jang ke nateeje Allah ke hath mein hain, Nabi ﷺ ka kaam paigham pahunchana hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 121 se 129", "Tafheem-ul-Quran, Introduction to Surah 3 (Maududi; IIUM mirror)", "Quran 3:121–129"],
      samjho: [
        { title: "Sabr aur taqwa ki shart", ayahs: [125], simple: "Farishton ki madad ka wada sabr aur taqwa ki shart par tha.", context: "Ayah 125 mein ‘agar tum sabr karo aur taqwa rakho’ ka lafz aaya.", note: "Ibn Kathir (doosra qaul): isi shart ki wajah se Uhud mein farishte nahi aaye kyunke Musalman sabr par qaim na reh sake.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 124–129 (The Second View)"] },
        { title: "Farishton ki madad ka maqsad", ayahs: [126], simple: "Ayah 126 ke mutabiq farishton ka utarna khushkhabri aur dilon ke itminan ke liye tha.", context: "Madad Allah hi ki taraf se hai.", note: "Ibn Kathir: fatah sirf Allah se aati hai; woh chahta to bina lade bhi dushman ko haraa sakta tha.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 126"] }
      ],
      lessons: [
        { title: "Mashwara aur phir bharosa", ayahs: [121, 122], fromSurah: "Uhud ke mauqe par Nabi ﷺ ne Sahaba se mashwara liya, aur ayah 122 ne Allah par bharosa karne ka hukm diya.", amal: "Faisla mashwara se karein aur phir Allah par bharosa karke chalein.", src: ["Quran 3:121–122", "Tafsir Ibn Kathir, Ayah 121–123"] },
        { title: "Shukr aur yaad", ayahs: [123], fromSurah: "Ayah 123 mein pichli madad (Badr) yaad dilakar shukr ka hukm hai.", amal: "Mushkil mein pichli madad ko yaad karke shukr aur umeed rakhein.", src: ["Quran 3:123"] },
        { title: "Madad ki shart", ayahs: [125], fromSurah: "Ayah 125 mein madad ke saath sabr aur taqwa ki shart hai.", amal: "Madad maangne ke saath apni taraf se sabr aur taqwa par qaim rahein.", src: ["Quran 3:125"] }
      ]
    },
    {
      n: 15, from: 130, to: 143, g: 4,
      title: "Sood se mumaniat, jannat ki daud aur Uhud ki hikmat",
      sub: "Riba ki mumaniat, muttaqeen ki sifaat, gussa pina aur maaf karna, aur nuqsan ke peeche hikmat",
      heads: ["Interest (Riba) is Prohibited", "The Encouragment to Do Good for which Paradise is the Result", "The Wisdom Behind the Losses Muslims Suffered During Uhud"],
      intro: "Is hisse mein pehle sood (riba) se roka gaya, phir jannat ki taraf daud aur muttaqeen ki sifaat bataye gaye. Aakhir mein Uhud mein huye nuqsan ki hikmat aur himmat na harne ki tasalli di gayi.",
      points: [
        { r: [130, 132], h: "Sood (riba) ki mumaniat", t: "Ayah 130–132: ‘Ae imaan walo, kai guna badhaya hua sood na khao aur Allah se daro taake kamyab ho; us Aag se daro jo kafiron ke liye tayyar hai; Allah aur Rasool ki ita‘at karo taake tum par rehm ho.’ Ibn Kathir: jahiliyyat mein qarz ki muddat poori hone par qarz dene wala kehta tha ‘ya ada karo ya sood badhega’, aur yeh saal-ba-saal chalta raha yahan tak ke thodi si raqam kai guna ho jati." },
        { r: [133, 136], h: "Jannat ki taraf daud aur muttaqeen ki sifaat", t: "Ayah 133–136: ‘Apne Rabb ki maghfirat aur us jannat ki taraf daudo jis ki wusat aasman-zameen jitni hai, jo muttaqeen ke liye tayyar hai: jo khushi aur tangi mein kharch karte hain, gussa pi jate hain aur logon ko maaf karte hain; Allah neki karne walon se muhabbat karta hai. Aur jab koi behayai kar baithen ya apne upar zulm karen to Allah ko yaad karke apne gunahon ki maafi maangte hain, aur jaan boojh kar apne kiye par ade nahi rehte.’ Unka badla maghfirat aur jannatein hain. Ibn Kathir ne hadith naql ki ke asal pehelwan woh hai jo gusse ke waqt apne aap par qaboo rakhe, aur gusse ka ghoont pi jane se behtar ajar wala koi ghoont nahi." },
        { r: [137, 143], h: "Uhud ke nuqsan ki hikmat", t: "Ayah 137–143: ‘Tumse pehle bhi (Allah ki) sunnatein guzar chuki hain, zameen mein chalo phiro aur dekho jhutlane walon ka anjaam kaisa hua.’ Yeh logon ke liye saaf bayan, hidayat aur muttaqeen ke liye nasihat hai. ‘Himmat na haro, gham na karo, tum hi ghalib rahoge agar momin ho; agar tumhein zakhm pahuncha to us qaum ko bhi aisa hi zakhm pahuncha. Yeh din hum logon ke beech badalte rehte hain taake Allah imaan walon ko jaan le aur tum mein se kuch ko shaheed banaye.’ Ayah 142–143: kya tum samajhte ho ke jannat mein chale jaoge jabke Allah ne abhi tak jaancha nahi ke tum mein se kin ne jihad kiya aur sabr kiya? Tum maut ki tamanna karte the, ab tumne use apni aankhon se dekh liya. Ibn Kathir ne yahan likha ke Uhud mein sattar Musalman shaheed hue." }
      ],
      key: "Sood se bachna, gussa pi jana, maaf karna aur gunah par ade na rehna jannat ke raste ki sifaat hain; nuqsan mein bhi Allah ki hikmat hoti hai aur himmat nahi harni chahiye.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 130 se 143", "Quran 3:130–143"],
      samjho: [
        { title: "Riba", ayahs: [130], simple: "Riba = qarz par muqarrar izafa jo kai guna badh jaye.", context: "Ayah 130 mein ‘kai guna badhaya hua’ sood se rokne ka hukm hai.", note: "Ibn Kathir ne jahiliyyat ka tareeqa likha: muddat par ‘ya ada karo ya sood’. Riba ke fiqhi masail ke liye ahl-e-ilm se rujoo karein.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 130–136 (Interest (Riba) is Prohibited)"] },
        { title: "Din badalte rehte hain", ayahs: [140], simple: "Ayah 140 mein bataya gaya ke fatah aur nuqsan ke din logon ke beech badalte rehte hain.", context: "Is mein ek maqsad momino ko jaanchna aur shaheed banana bataya gaya.", note: "Ibn Kathir: Allah ne Uhud ke nuqsan mein Musalmanon ko pichli qaumon ke tajurbe yaad dilaye jinhein bhi nuqsan pahuncha.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 137–143"] }
      ],
      lessons: [
        { title: "Sood se bachne ki koshish", ayahs: [130], fromSurah: "Ayah 130 ne ‘kai guna badhaya hua sood’ khane se roka.", amal: "Karz ke maamlaat mein sood se bachne ke liye bharosemand ahl-e-ilm se rahnumai lein.", src: ["Quran 3:130"] },
        { title: "Gussa pi jana aur maaf karna", ayahs: [134], fromSurah: "Ayah 134 mein muttaqeen ki sifat gussa pi jana aur logon ko maaf karna hai.", amal: "Gusse ke waqt pehle khamosh ho jayen aur jahan mumkin ho maaf kar dein.", src: ["Quran 3:134", "Tafsir Ibn Kathir, Ayah 134"] },
        { title: "Himmat na haren", ayahs: [139], fromSurah: "Ayah 139: ‘himmat na haro, gham na karo, tum hi ghalib rahoge agar momin ho’.", amal: "Nuqsan par tootne ke bajaye uski wajah par ghaur karke aage badhein.", src: ["Quran 3:139"] }
      ]
    },
    {
      n: 16, from: 144, to: 153, g: 4,
      title: "Nabi ﷺ ke qatl ki afwah aur nafarmani ka nateeja",
      sub: "Muhammad ﷺ sirf Rasool, maut ka waqt muqarrar, aur Uhud ki shuruaati fatah ke baad hone wali kamzori",
      heads: ["The Rumor that the Prophet (ﷺ) was Killed at Uhud", "The Prohibition of Obeying the Disbelievers; the Cause of Defeat at Uhud", "The Defeat that the Muslims Suffered During the Battle of Uhud"],
      intro: "Is hisse mein Uhud ke dauraan Nabi ﷺ ke qatl ki afwah ka bayan hai aur is par Allah ka jawab: Muhammad ﷺ sirf ek Rasool hain. Phir maut ka waqt muqarrar hone, pehle Nabiyon ke saathiyon ki misaal aur kafiron ki ita‘at na karne ka hukm aata hai, aur aakhir mein Uhud ki shuruaati fatah aur phir kamzori ka bayan hai.",
      points: [
        { r: [144, 144], h: "Muhammad ﷺ sirf Rasool hain", t: "Ayah 144: ‘Muhammad ek Rasool hi hain, unse pehle bhi rasool guzar chuke; kya agar woh wafat paayen ya qatl kar diye jayen to tum ulte paaon phir jaoge? Jo ulte paaon phir jaye woh Allah ka kuch nuqsan nahi karega, aur Allah shukr karne walon ko badla dega.’ Ibn Kathir: Uhud mein shaitan ne chillaya ‘Muhammad qatl ho gaye’ aur kuch Musalmanon ki himmat toot gayi. Unhone ek Ansari Sahabi ka jawab naql kiya ke agar Muhammad ﷺ qatl bhi ho gaye to unhone paigham pahuncha diya, to apne deen ke liye ladte raho." },
        { r: [145, 148], h: "Maut ka waqt aur pichle Nabiyon ke saathi", t: "Ayah 145–148: koi jaan Allah ke izn ke baghair nahi marti, maut ka waqt likha hua hai. Jo duniya ka sawab chahe usay us mein se dete hain, aur jo aakhirat ka chahe usay us mein se; hum shukr karne walon ko badla denge. Bohat se Nabiyon ke saath Allah wale lade; unhone Allah ki raah mein pahunchne wali takleef par himmat nahi haari, kamzor nahi huye aur nahi jhuke. Unki dua yeh thi: ‘Ae hamare Rabb, hamare gunah aur hamare kaam mein hamari zyadati maaf kar, hamare qadam jama de aur kafir qaum par hamari madad kar.’ Allah ne unhein duniya ka sawab aur aakhirat ka behtar sawab diya." },
        { r: [149, 151], h: "Kafiron ki ita‘at na karo", t: "Ayah 149–151: agar tum kafiron ki maanoge to woh tumhein ulte paaon phera denge aur tum nuqsan mein padoge. Nahin, Allah tumhara maula hai aur behtareen madadgar. Hum kafiron ke dilon mein rob daal denge kyunke unhone Allah ke saath unhein shareek kiya jis ki koi daleel utari nahi. Ibn Kathir: kafiron aur munafiqon ki ita‘at duniya aur aakhirat dono mein tabahi ki taraf le jati hai." },
        { r: [152, 153], h: "Uhud mein kya hua", t: "Ayah 152–153: ‘Allah ne tumse apna wada sach kar dikhaya jab tum uske izn se unhein qatl kar rahe the, yahan tak ke tum himmat haar gaye, hukm ke baare mein jhagde aur nafarmani ki, us ke baad ke Allah ne tumhein woh dikha diya jo tumhein pasand tha; tum mein se kuch duniya chahte the aur kuch aakhirat.’ Phir Allah ne tumhein unse pher diya taake tumhein aazmaye, aur usne tumhein maaf kar diya. ‘Jab tum chadhte chale ja rahe the aur kisi ki taraf mud kar nahi dekhte the jabke Rasool tumhein tumhare peeche se pukar rahe the, to Allah ne tumhein gham par gham diya.’ Ibn Kathir ne ‘nafarmani’ ki misaal mein tir-andazon ki ghalti ka zikr kiya." }
      ],
      key: "Deen Allah ke liye hai, kisi shakhs ki maujoodgi par nahi; maut ka waqt tay hai; aur Rasool ﷺ ke hukm ki nafarmani ka nuqsan bohat bada hota hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 144 se 153", "Quran 3:144–153"],
      samjho: [
        { title: "Ulte paaon phirna", ayahs: [144], simple: "Ulte paaon phirna yani haq ko chhod kar peeche hat jana.", context: "Ayah 144 mein Nabi ﷺ ke qatl ki afwah ke jawab mein yeh khabardari di gayi.", note: "Ibn Kathir ne ek Ansari Sahabi ki baat naql ki jis mein deen ke liye ladte rehne ka paigham tha.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 144–148"] },
        { title: "Tir-andazon ki nafarmani", ayahs: [152], simple: "Ayah 152 mein ‘hukm ke baare mein jhagadne aur nafarmani karne’ ka zikr hai.", context: "Yeh Uhud ki shuruaati fatah ke baad kamzori ka bayan hai.", note: "Ibn Kathir ne ayah 152 ke tahat ‘nafarmani’ ki misaal mein tir-andazon ki ghalti ka zikr kiya.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 149–153"] }
      ],
      lessons: [
        { title: "Deen shakhsiyat par nahi tikta", ayahs: [144], fromSurah: "Muhammad ﷺ sirf Rasool hain aur pehle bhi rasool guzar chuke.", amal: "Haq par jame rahein, chahe koi bhi saath chhode.", src: ["Quran 3:144"] },
        { title: "Maut ka waqt tay hai", ayahs: [145], fromSurah: "Koi jaan Allah ke izn ke baghair nahi marti, maut ka waqt likha hua hai.", amal: "Maut ke dar se haq se peeche na hatein.", src: ["Quran 3:145"] },
        { title: "Rasool ﷺ ke hukm ki ita‘at", ayahs: [152], fromSurah: "Ayah 152 ne hukm ke baare mein jhagadne aur nafarmani ko kamzori ka sabab bataya.", amal: "Rasool ﷺ ke saaf hukm par amal mein dheel ya bahas na karein.", src: ["Quran 3:152"] }
      ]
    },
    {
      n: 17, from: 154, to: 164, g: 4,
      title: "Sukoon, taqdeer, Nabi ﷺ ki narmi aur mashwara",
      sub: "Gham ke baad unghh ka sukoon, maut ke baare mein ghalat gumaan, Nabi ﷺ ki narmi, mashwara, tawakkul aur amanat",
      heads: ["Slumber Overcame the Believers; the Fear that the Hypocrites Suffered", "Some of the Believers Give Flight on the Day of Uhud", "Prohibiting the Ideas of the Disbeleivers about Death and Predestination", "Among the Qualities of Our Prophet Muhammad (ﷺ) are Mercy and Kindness", "The Order for Consultation and to Abide by it", "Trust in Allah After Taking the Decision", "The Honest and Dishonest are Not Similar"],
      intro: "Is hisse mein gham ke baad Allah ka sukoon utarna, munafiqon ka ghalat gumaan, maut ke baare mein kafiron ki soch ki mumaniat aur Nabi ﷺ ki narmi ka bayan hai. Phir mashwara aur tawakkul ka hukm, amanat (maal-e-ghaneemat mein khayanat se rok) aur Allah ke ehsan ke taur par Rasool ﷺ ki bheji jaane ka zikr hai.",
      points: [
        { r: [154, 155], h: "Gham ke baad sukoon aur khauf", t: "Ayah 154–155: ‘Phir Allah ne gham ke baad tum par sukoon utara, ek unghh jo tum mein se ek giroh par chha gayi; aur ek giroh ko apni jaan ki fikr thi, woh Allah ke baare mein jahiliyyat jaise ghalat gumaan karte the, kehte the kya hamara bhi kuch ikhtiyar hai? Kaho sab ikhtiyar Allah ka hai.’ Jinhone muqable ke din peeth pheri unhein shaitan ne unke kuch kiye ki wajah se phislaya, magar Allah ne unhein maaf kar diya. Ibn Kathir ne Abu Talhah (r.a.) ki riwayat naql ki ke Uhud mein unghh itni aayi ke unke hath se talwar baar baar girti thi." },
        { r: [156, 158], h: "Maut aur taqdeer ke baare mein ghalat soch", t: "Ayah 156–158: ‘Un jaise na bano jinhone kufr kiya aur apne bhaiyon ke baare mein kaha jab woh safar ya jang mein nikle: agar woh hamare paas hote to na marte na qatl hote.’ Allah ne yeh baat unke dilon mein hasrat bana di; Allah hi zinda karta aur maarta hai. Allah ki raah mein qatl ya maut maghfirat aur rehmat hai jo unke jama kiye hue maal se behtar hai; aur sab Allah ki taraf jama kiye jaoge." },
        { r: [159, 159], h: "Nabi ﷺ ki narmi aur mashwara", t: "Ayah 159: ‘Allah ki rehmat se tum unke liye narm huye; agar tum tund mizaj aur sakht dil hote to woh tumhare paas se hat jate. Unhein maaf karo, unke liye istighfar karo aur kaam mein unse mashwara karo; phir jab irada pakka kar lo to Allah par bharosa karo; Allah bharosa karne walon se muhabbat karta hai.’ Ibn Kathir ne Qatadah aur Hasan Basri se naql kiya ke yeh narmi Allah ki rehmat se thi. Unhone Ibn Majah se Abu Hurayrah (r.a.) ki hadith bhi naql ki ke jis se mashwara maanga jaye woh amanatdar hai." },
        { r: [160, 161], h: "Madad Allah se aur amanat mein khayanat", t: "Ayah 160–161: agar Allah tumhari madad kare to koi tum par ghalib nahi aa sakta; imaan walon ko Allah hi par bharosa karna chahiye. Kisi Nabi ke liye munasib nahi ke khayanat kare; jo khayanat karega woh qayamat ke din wohi cheez le kar aayega jo usne chhupayi thi. Ibn Kathir ne ghulul (maal-e-ghaneemat mein khayanat) par sakht wa‘eed ki hadithein naql ki, aur yeh bhi ke Allah ke nazdeek sachche aur khayanat karne wale barabar nahi." },
        { r: [162, 164], h: "Sachche aur khayanat karne wale, aur Rasool ka ehsan", t: "Ayah 162–164: jo Allah ki raza ki pairwi kare woh us jaisa nahi jo Allah ke ghazab ka mustahiq hua; unke Allah ke paas alag alag darje hain. Ayah 164: Allah ne imaan walon par bada ehsan kiya ke unhi mein se ek Rasool bheja jo unhein uski ayat sunata, unhein paak karta aur Kitab aur hikmat sikhata hai, jabke woh pehle khuli gumrahi mein the. Ibn Kathir ne ‘Kitab aur hikmat’ se murad Quran aur Sunnah liya." }
      ],
      key: "Allah ki rehmat se Nabi ﷺ narm the; mashwara karo, phir pakka irada kar ke Allah par bharosa karo; amanat mein khayanat na karo; aur maut Allah ke hath mein hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 154 se 164", "Quran 3:154–164"],
      samjho: [
        { title: "Shura (mashwara)", ayahs: [159], simple: "Kaam ke baare mein ahl-e-ra‘e logon se raye lena.", context: "Ayah 159 mein Nabi ﷺ ko mashwara ka hukm hai aur uske baad irada pakka hone par tawakkul ka.", note: "Ibn Kathir ke heading ‘The Order for Consultation and to Abide by it’ aur ‘Trust in Allah After Taking the Decision’ is tarteeb ko saaf karte hain.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 159"] },
        { title: "Ghulul (maal mein khayanat)", ayahs: [161], simple: "Ghulul = maal-e-ghaneemat ya sarkari maal mein chhupa kar khayanat karna.", context: "Ayah 161 mein is par qayamat ke din ka wa‘eed hai.", note: "Ibn Kathir ne ghulul par sakht wa‘eed ki hadithein naql ki jo maine poori nahi padhi.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 161"] }
      ],
      lessons: [
        { title: "Narmi aur maafi", ayahs: [159], fromSurah: "Ayah 159 ne bataya ke tund mizaji se log door ho jate hain; narmi, maafi aur mashwara ka hukm diya.", amal: "Ghar aur kaam ki jagah par narm lehja, maafi aur mashwara apnayein.", src: ["Quran 3:159"] },
        { title: "Mashwara ke baad tawakkul", ayahs: [159], fromSurah: "Mashwara ke baad pakka irada karne par Allah par bharosa karne ka hukm aaya.", amal: "Zaroori kaam mein mashwara karein aur faisla hone par Allah par bharosa karke chalein.", src: ["Quran 3:159"] },
        { title: "Amanat mein khayanat na karein", ayahs: [161], fromSurah: "Ayah 161 mein khayanat par qayamat ke din ka anjaam bataya gaya.", amal: "Kaam ke paise, saamaan ya zimmedari mein ek paisa bhi chhupakar na rakhein.", src: ["Quran 3:161"] }
      ]
    },
    {
      n: 18, from: 165, to: 175, g: 4,
      title: "Nuqsan ka jaiza, shuhada ka maqam aur Hamra al-Asad",
      sub: "‘Yeh tumhari apni taraf se’, shaheed zinda hain, aur Allah par bharosa karne walon ki himmat",
      heads: ["The Reason and Wisdom Behind the Defeat at Uhud", "Virtues of the Martyrs", "The Battle of Hamra' Al-Asad"],
      intro: "Is hisse mein Uhud ke nuqsan ki wajah ka saaf jawab diya gaya: ‘yeh tumhari apni taraf se hai’. Phir Allah ki raah mein shaheed hone walon ka maqam aur Hamra al-Asad mein zakhmi hone ke bawajood Allah aur Rasool ﷺ ki baat manne walon ki himmat ka bayan hai.",
      points: [
        { r: [165, 168], h: "Nuqsan kahan se aaya?", t: "Ayah 165–168: ‘Jab tumhein ek museebat pahunchi halanki tumne us se dugni pahunchai thi to kehne lage yeh kahan se aayi? Kaho yeh tumhari apni taraf se hai; Allah har cheez par qadir hai.’ Dono lashkaron ke mukabale ke din jo pahuncha woh Allah ke izn se tha taake momino aur munafiqon ko jaan le. Munafiqon se kaha gaya ‘aao Allah ki raah mein lado ya apna difa karo’ to bole ‘agar hum jaante lad paayenge to zaroor saath hote’; woh us din imaan se kufr ke zyada qareeb the. Jinhone apne bhaiyon ke baare mein kaha aur khud baithe rahe ke agar hamari maante to qatl na hote, unse kaho ‘apni jaanon se maut tal do agar sachche ho.’ Ibn Kathir ne Umar (r.a.) ka bayan naql kiya ke yeh nuqsan Badr ke qaidiyon se fidya lene ka nateeja tha; saath hi Ibn Ishaq, Ibn Jurayj, Rabi‘ aur Suddi ka qaul naql kiya ke ‘tumhari apni taraf se’ ka matlab tir-andazon ki nafarmani hai." },
        { r: [169, 171], h: "Shuhada zinda hain", t: "Ayah 169–171: ‘Jo Allah ki raah mein qatl huye unhein murda na samjho, balki woh apne Rabb ke paas zinda hain, rizq paate hain; Allah ke fazl par khush hain aur jo unke peeche abhi unse nahi mile unke liye khush hote hain ke unhein na koi khauf na gham; Allah imaan walon ka ajar zaya nahi karta.’ Ibn Kathir: Qatadah, Rabi‘ aur Dahhak ke mutabiq yeh ayat Uhud ke shuhada ke baare mein hain; unhone Muslim ki hadith naql ki jis mein shuhada ki roohein sabz parindon mein Jannat mein phirti hain." },
        { r: [172, 175], h: "Hamra al-Asad aur Allah par bharosa", t: "Ayah 172–175: jinhone zakhmi hone ke baad bhi Allah aur Rasool ki baat maani, unmein neki aur taqwa walon ke liye bada ajar hai. Jinse logon ne kaha ‘logon ne tumhare khilaf lashkar jama kar liya hai, unse daro’ to unka imaan badh gaya aur kaha ‘Hasbunallahu wa ni‘mal wakeel’ (Allah hamare liye kaafi hai aur behtareen kaarsaaz hai). Woh Allah ki nemat aur fazl ke saath laute, koi takleef na pahunchi, aur unhone Allah ki raza ki pairwi ki. ‘Yeh to shaitan hai jo apne doston se daraata hai; un se na daro, mujh se daro agar momin ho.’ Ibn Kathir ne Bukhari se Ibn Abbas ki riwayat mein ‘Hasbunallahu wa ni‘mal wakeel’ naql kiya." }
      ],
      key: "Nuqsan par pehle apna jaiza lo; shaheed Allah ke paas zinda aur rizq paate hain; aur Allah par bharosa daraane walon ke muqable mein imaan badhata hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 165 se 175", "Quran 3:165–175"],
      samjho: [
        { title: "‘Yeh tumhari apni taraf se’", ayahs: [165], simple: "Ayah 165 mein nuqsan ki wajah ko apni hi kamzori ki taraf lautaya gaya.", context: "Yeh un ke sawal ‘yeh kahan se aaya?’ ka jawab hai.", note: "Ibn Kathir ne do wajahein naql ki: Badr ke qaidiyon se fidya (Umar r.a.) aur tir-andazon ki nafarmani (Ibn Ishaq wagairah).", refs: [], src: ["Tafsir Ibn Kathir, Ayah 165–168"] },
        { title: "Hasbunallahu wa ni‘mal wakeel", ayahs: [173], simple: "Matlab: ‘Allah hamare liye kaafi hai aur woh behtareen kaarsaaz (bharosa karne ke laayak) hai.’", context: "Ayah 173 mein jab logon ne daraya to unka imaan badh gaya aur unhone yeh kaha.", note: "Ibn Kathir ne Bukhari se Ibn Abbas ki riwayat mein isko naql kiya.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 172–175"] }
      ],
      lessons: [
        { title: "Nuqsan par pehle apna jaiza", ayahs: [165], fromSurah: "Ayah 165 ne nuqsan ki wajah dusron par daalne ke bajaye ‘tumhari apni taraf se’ kaha.", amal: "Nakami par pehle apni kami talash karein, phir sudhaar ki koshish karein.", src: ["Quran 3:165", "Tafsir Ibn Kathir, Ayah 165–168"] },
        { title: "Shaheed ka maqam", ayahs: [169], fromSurah: "Ayah 169 mein shuhada ko murda na samajhne aur unke Rabb ke paas rizq pane ka bayan hai.", amal: "Shuhada ke liye dua karein aur unke ghar walon ke saath bhalai karein.", src: ["Quran 3:169–171"] },
        { title: "Daraane par Allah par bharosa", ayahs: [173], fromSurah: "Ayah 173 mein daraane ke baad imaan badhne aur ‘Hasbunallah’ kehne ka zikr hai.", amal: "Dar ya dhamki ke waqt ‘Hasbunallahu wa ni‘mal wakeel’ padhein aur apna farz poora karein.", src: ["Quran 3:173"] }
      ]
    },
    {
      n: 19, from: 176, to: 189, g: 4,
      title: "Tasalli, bukhl, maut aur ilm chhupane ka anjaam",
      sub: "Nabi ﷺ ko tasalli, bakheeli ka anjaam, har jaan maut chakhegi, aazmaish aur ahd todne walon ko tanbeeh",
      heads: ["Comforting the Messenger of Allah (ﷺ)", "The Censure of Selfishness, and Warning Against it", "Allah Warns the Idolators", "Every Soul Shall Taste Death", "Who Shall Gain Ultimate Victory?", "The Believer is Tested and Hears Grieving Statements from the Enemy", "Chastising the People of the Scriptures for Breaking the Covenant and Hiding the Truth", "Chastising Those Who Love to be Praised for What They Have not Done"],
      intro: "Is hisse mein Nabi ﷺ ko tasalli di gayi ke kufr mein jaldi karne walon se gham na karein. Phir bakheeli ka anjaam, kuch logon ke ghalat daawe, har jaan ke maut chakhne, momino ki aazmaish aur ilm chhupane aur jhooti taareef chahne walon ko tanbeeh hai.",
      points: [
        { r: [176, 178], h: "Nabi ﷺ ko tasalli", t: "Ayah 176–178: ‘Jo kufr mein jaldi karte hain unse tumhein gham na ho; woh Allah ka kuch nahi bigad sakte. Jinhone imaan ke badle kufr kharida woh Allah ka kuch nuqsan nahi karenge. Kafir yeh na samjhein ke hamari dheel unke liye achhi hai; hum to is liye dheel dete hain ke woh gunah mein badhein, aur unke liye zaleel karne wala azab hai.’ Ibn Kathir: Nabi ﷺ logon ki bhalai chahte the, isliye kufr par unke ade rehne se ghamgeen hote; Allah ne farmaya ke woh sirf apna nuqsan karte hain." },
        { r: [179, 180], h: "Bakheeli ka anjaam", t: "Ayah 179–180: Allah momino ko is haal par nahi chhodega jis par tum ho jab tak napaak ko paak se alag na kar de; woh tumhein ghaib par muttali nahi karta, lekin apne rasoolon mein se jise chahe chun leta hai. Jo Allah ke diye huye fazl mein bakheeli karte hain woh usay apne liye behtar na samjhein, balki woh unke liye bura hai; qayamat ke din jis mein bakheeli ki thi uska tauq unhein pehnaya jayega. Ibn Kathir ne Bukhari aur Ahmad ki hadithein naql ki jin mein Nabi ﷺ ne yeh ayah padhi." },
        { r: [181, 184], h: "Allah ke baare mein jhooti baatein", t: "Ayah 181–184: ‘Allah ne un logon ki baat sun li jo kehte the ke Allah faqeer hai aur hum ameer; hum unki baat aur unka Nabiyon ko nahaq qatl karna likh lenge.’ Ibn Kathir ne Ibn Abbas se naql kiya ke jab ‘Allah ko qarz-e-hasana do’ wali ayat utri to Yahood ne yeh baat kahi. Phir ayah 183–184: unhone kaha ‘Allah ne humse ahd liya ke hum kisi Rasool par imaan na layen jab tak woh aisi qurbani na laye jise Aag kha jaye’; kaho ‘mujhse pehle bhi roshan nishaniyon ke saath Rasool aaye to tumne unhein qatl kyun kiya?’ Agar woh tumhein jhutlate hain to unse pehle ke Rasool bhi jhutlaye gaye." },
        { r: [185, 186], h: "Har jaan maut chakhegi aur aazmaish", t: "Ayah 185–186: ‘Har jaan maut ka maza chakhne wali hai; tumhein tumhara poora badla qayamat ke din milega; jo Aag se bacha liya gaya aur jannat mein dakhil hua woh kamyab; duniya ki zindagi dhoke ke saamaan ke siwa kuch nahi.’ Ayah 186: tum apne maal aur apni jaanon mein aazmaye jaoge aur Ahl-e-Kitab aur mushrikon se bohat takleef-deh baatein sunoge; agar sabr karo aur taqwa rakho to yeh himmat ke kaamon mein se hai. Ibn Kathir ne hadith naql ki ke jannat mein koray ki jagah jitni zameen duniya aur jo kuch us mein hai us se behtar hai." },
        { r: [187, 189], h: "Ahd todna, ilm chhupana aur jhooti taareef", t: "Ayah 187–189: Allah ne Ahl-e-Kitab se ahd liya ke Kitab ko logon ke liye bayan karoge aur chhupaoge nahi, lekin unhone usay peeth peeche phenk diya aur thode mol bech diya. Jo apne kiye par khush hote aur jo kaam kiya nahi us par taareef chahte hain unhein azab se bacha hua na samjho. Aasman-zameen ki badshahat Allah ki hai. Ibn Kathir ne likha ke yeh ayat ulama ko bhi khabardar karti hain ke ilm chhupayein nahi; unhone hadith naql ki ke jis se ilm ke baare mein poocha gaya aur usne chhupaya usay qayamat ke din aag ki lagaam pehnayi jayegi." }
      ],
      key: "Allah dheel deta hai magar hisaab zaroor lega; har jaan ko maut chakhni hai; momin aazmaya jata hai aur sabr aur taqwa se kamyab hota hai; ilm chhupana aur jhooti taareef chahna bura hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 176 se 189", "Quran 3:176–189"],
      samjho: [
        { title: "Bukhl aur tauq", ayahs: [180], simple: "Bukhl = Allah ke diye huye maal mein se haq ada karne se kanjoosi.", context: "Ayah 180 mein kanjoosi ka anjaam qayamat ke din ‘tauq’ ke roop mein bataya gaya.", note: "Ibn Kathir ke heading ‘The Censure of Selfishness, and Warning Against it’ aur Bukhari ki hadith ke saath yeh ayah naql hui.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 180"] },
        { title: "Ilm chhupana", ayahs: [187], simple: "Ayah 187 mein Kitab ka ilm logon se chhupane ki mumaniat hai.", context: "Allah ne Ahl-e-Kitab se ahd liya tha ke Kitab bayan karenge aur chhupayenge nahi.", note: "Ibn Kathir ne ulama ko bhi khabardar kiya ke woh faida-mand ilm phailayein aur chhupayein nahi.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 187–189"] }
      ],
      lessons: [
        { title: "Ghamgeen hone par tasalli", ayahs: [176], fromSurah: "Ayah 176 mein Nabi ﷺ ko kufr par ade logon ke baare mein gham na karne ki tasalli di gayi.", amal: "Dawat ke baad jo log na maanein unke liye dua karein aur khud ko tod na lein.", src: ["Quran 3:176"] },
        { title: "Bukhl se bachein", ayahs: [180], fromSurah: "Ayah 180 mein bakheeli ko apne liye behtar samajhne wale ko khabardar kiya gaya.", amal: "Maal mein se zakat aur sadqa ka haq ada karein.", src: ["Quran 3:180"] },
        { title: "Ilm na chhupayein, jhooti taareef na chahein", ayahs: [187, 188], fromSurah: "Ayah 187 ne ilm chhupane ki aur ayah 188 ne jo kaam na kiya uski taareef chahne ki mumaniat batayi.", amal: "Jo jaante hain woh khair ke saath batayein aur jo kaam kiya hi nahi uska credit lene se bachein.", src: ["Quran 3:187–188"] }
      ]
    },
    {
      n: 20, from: 190, to: 200, g: 4,
      title: "Aql walon ki nishaniyan, dua aur Surah ka aakhri paigham",
      sub: "Aasman-zameen mein ghaur-o-fikr, aql walon ki duain, Allah ka jawab, aur sabr, mazbooti, ribat aur taqwa",
      heads: ["The Proofs of Tawhid for People of Understanding, their Characteristics, Speech, and Supplications", "Allah Accepts the Supplication of Men of Understanding", "Warning Against Being Deceived by This Life; the Rewards of the Righteous Believers", "The Condition of Some of the People of the Scriptures and their Rewards", "The Command for Patience and Ribat"],
      intro: "Surah ka aakhri hissa aasman-zameen aur raat-din mein Tawhid ki nishaniyon se shuru hota hai. Phir aql walon ki duain aur Allah ke jawab ka bayan hai. Aakhir mein Ahl-e-Kitab ke nek logon ka zikr aur sabr, mazbooti, ribat aur taqwa ke hukm ke saath Surah khatam hoti hai.",
      points: [
        { r: [190, 191], h: "Nishaniyan aur aql wale", t: "Ayah 190–191: aasman aur zameen ki paidaish aur raat din ke badalne mein aql walon ke liye nishaniyan hain: jo khade, baithe aur karwaton par Allah ko yaad karte hain aur aasman zameen ki paidaish par ghaur karte hain (kehte hain) ‘Ae hamare Rabb, tune yeh bekar paida nahi kiya, tu paak hai, hamein Aag ke azab se bacha.’ Ibn Kathir ne ‘aql walon’ se murad woh log liye jo cheezon ki asal haqeeqat par ghaur karte hain; aur Bukhari ki hadith naql ki ke namaz khade ho kar padho, na ho sake to baith kar, aur na ho sake to karwat ke bal." },
        { r: [192, 194], h: "Aql walon ki duain", t: "Ayah 192–194: ‘Ae hamare Rabb, jise tu Aag mein daale use tune ruswa kar diya, aur zalimon ka koi madadgar nahi. Ae hamare Rabb, humne ek pukarne wale ko suna jo imaan ki taraf bulata tha ke apne Rabb par imaan lao to hum imaan laaye. Ae hamare Rabb, hamare gunah bakhsh de, hamari buraiyan mita de aur hamein nekon ke saath maut de. Ae hamare Rabb, jo tune apne rasoolon ke zariye wada kiya woh hamein ata kar aur qayamat ke din hamein ruswa na kar; beshak tu wada khilafi nahi karta.’ Ibn Kathir ne ek hadith bhi naql ki jis mein in ayat ko padh kar ghaur-o-fikr na karne walon ke liye afsos ka zikr hai." },
        { r: [195, 195], h: "Allah ne dua qubool ki", t: "Ayah 195: ‘Un ke Rabb ne unki dua qubool ki: main tum mein se kisi amal karne wale ka amal zaya nahi karta, mard ho ya aurat, tum ek doosre se ho. Jinhone hijrat ki, apne gharon se nikale gaye, meri raah mein satai gaye, lade aur qatl huye, main unki buraiyan mita dunga aur unhein jannatein dunga; yeh Allah ke paas se badla hai.’ Ibn Kathir ne Umm Salamah (r.a.) ka sawal naql kiya ke Allah hijrat ke zikr mein auraton ka zikr nahi karta, is par yeh ayah utri." },
        { r: [196, 198], h: "Duniya ke dhoke se hoshiyar", t: "Ayah 196–198: ‘Kafiron ka shehron mein chalna phirna tumhein dhoke mein na daale; yeh thoda faida hai phir unka thikana jahannam hai.’ Lekin jo apne Rabb se darte hain unke liye jannatein hain, Allah ki taraf se mehmani; jo Allah ke paas hai woh nekon ke liye behtar hai. Ibn Kathir ne isi tarah ki kai doosri ayat (jaise 40:4, 10:69–70, 31:24, 86:17) naql ki." },
        { r: [199, 200], h: "Sabr, mazbooti, ribat aur taqwa", t: "Ayah 199: Ahl-e-Kitab mein kuch aise bhi hain jo Allah par aur jo tum par utara aur jo unpar utara us par imaan rakhte hain, Allah ke aage jhukte hain aur Allah ki ayat thode mol nahi bechte; unka ajar unke Rabb ke paas hai. Ibn Kathir: yeh Ahl-e-Kitab ke behtareen log hain, chahe Yahood mein se hon ya Isai mein se, aur unhone Habsha mein ek bhai ke inteqal par Nabi ﷺ ke janaza padhne ki hadith bhi naql ki. Ayah 200: ‘Ae imaan walo, sabr karo, sabr mein muqable mein mazboot raho, ribat karo aur Allah se daro taake kamyab ho.’ Ibn Kathir ne ‘ribat’ ke heading ke neeche hadith naql ki ke Allah ki raah mein ek din ka ribat duniya aur jo kuch us par hai us se behtar hai." }
      ],
      key: "Allah ki nishaniyon par ghaur karo, dua karo, duniya ke dhoke se bacho aur sabr, mazbooti, ribat aur taqwa ke saath kamyabi ki taraf badho.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 190 se 200", "Quran 3:190–200"],
      samjho: [
        { title: "Ulul Albab (aql wale)", ayahs: [190], simple: "Woh log jo cheezon ki haqeeqat par ghaur karte hain aur Allah ki nishaniyan pehchante hain.", context: "Ayah 190–191 mein unka zikr aur unki duain aati hain.", note: "Ibn Kathir: ‘sound minds’ jo cheezon ki asal haqeeqat par sochte hain, un behre aur goongon ki tarah nahi jinhein samajh nahi.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 190–194"] },
        { title: "Ribat", ayahs: [200], simple: "Ayah 200 mein sabr aur muqable ke saath ribat ka hukm aaya hai.", context: "Ibn Kathir ne ribat ke baare mein hadith naql ki jis mein ek din ke ribat ki fazilat hai.", note: "Ribat ka seedha lughwi maana Ibn Kathir ke is hisse mein maine nahi padha; yahan sirf unki naql ki hui hadith likhi gayi hai.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 199–200 (The Command for Patience and Ribat)"] }
      ],
      lessons: [
        { title: "Ghaur-o-fikr ki aadat", ayahs: [190, 191], fromSurah: "Ayah 190–191 mein aasman-zameen aur raat-din par ghaur karne wale aql walon ki tareef hai.", amal: "Roz thodi der Allah ki paida ki hui cheezon par ghaur karke Allah ka zikr karein.", src: ["Quran 3:190–191"] },
        { title: "Dua mein gunah aur anjaam dono", ayahs: [193], fromSurah: "Ayah 193 mein gunahon ki maafi, buraiyan mitaye jaane aur nekon ke saath maut ki dua hai.", amal: "Apni duaon mein maafi aur achhe anjaam ki dua zaroor shamil karein.", src: ["Quran 3:193"] },
        { title: "Koi amal zaya nahi", ayahs: [195], fromSurah: "Ayah 195 mein Allah ne kaha ke woh mard ho ya aurat kisi amal karne wale ka amal zaya nahi karta.", amal: "Chhote nek amal ko bhi kam na samjhein, Allah har amal ka ajar deta hai.", src: ["Quran 3:195", "Tafsir Ibn Kathir, Ayah 195"] },
        { title: "Sabr, mazbooti aur taqwa", ayahs: [200], fromSurah: "Ayah 200 mein sabr, sabr mein muqabla, ribat aur taqwa ka hukm hai.", amal: "Mushkil mein sabr se kaam lein, ek doosre ko himmat dein aur Allah se darte rahein.", src: ["Quran 3:200"] }
      ]
    }
  ],

  sources: [
    {
      name: "Tafsir Ibn Kathir (Abridged), English",
      detail: "Parts ki hadein is tafsir ke apne tafsir-entries se nikali gayi hain (64 entries, har Part ek ya kai poori entries ka majmua; 200 mein se 200 ayat ek hi baar). Part ke ‘heads’ isi tafsir ke asli English sub-headings hain (automatic check se verbatim milaye gaye). Padha gaya: har entry ke headings aur shuruaati hissa (kareeb 1,100 se 1,800 characters), aur Uhud, farishton ki madad, mashwara, shuhada aur aql walon wali ayat ke kuch aage ke hisse. Poori tafsir har sutar tak nahi padhi gayi. Kuch jagah (jaise Najran ke wafd ka poora waqia, Hajj ke ahkam, ghulul ki hadithein) sirf headings ya shuruaat padhi gayi, yeh Parts mein saaf likha hai.",
      links: [
        { label: "Quran.com, Ibn Kathir (Abridged), Aal-e-Imran", url: "https://quran.com/en/ali-imran/7/tafsirs/en-tafisr-ibn-kathir" },
        { label: "Dataset (spa5k/tafsir_api, en-tafisr-ibn-kathir)", url: "https://github.com/spa5k/tafsir_api" }
      ]
    },
    {
      name: "Tafheem-ul-Quran, Introduction to Surah 3 (Maududi)",
      detail: "Poora intro padha (IIUM ka mirror page): Surah ke chaar khitab (ayat 1–32, 33–63, 64–120, 121–200) aur background (Badr ke baad ka daur, Uhud mein teen sau munafiqon ka wapas lautna). Group ki hadein isi se li gayi hain. Note: Ibn Kathir ne shuruaati 83 ayat ko Najran ke wafd se joda hai, Tafheem ne ayat 33–63 ko; dono bayan alag alag diye gaye hain.",
      links: [{ label: "IIUM (Maududi Surah intro)", url: "https://www.iium.edu.my/deed/quran/intro/i003.html" }]
    },
    {
      name: "Ma‘ariful Quran (Mufti Muhammad Shafi), Ayah 1–9",
      detail: "Sirf pehle section (ayat 1 se 9) ki tafsir padhi gayi (Tawhid ki dalil, Muhkamat-Mutashabihat, Tawil, dua). Baaki Surah ki Ma‘ariful Quran tafsir is Story Mode ke liye nahi padhi gayi.",
      links: [{ label: "islamicstudies.info, Ma‘ariful Quran Surah 3", url: "https://islamicstudies.info/quran/maarif.php?sura=3" }]
    }
  ]
};
