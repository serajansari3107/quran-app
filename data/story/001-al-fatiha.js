// Quran Story Mode -- Surah Al-Fatiha ka content (Step 1B).
// NOTE: Arabic text aur "App ka tarjuma" yahan duplicate NAHI hain -- woh app ke existing
// data/001-al-fatiha.js (aur doosri surahs ke data files) se runtime par padhe jaate hain.
// Yahan sirf samjhane wala hissa hai: Tafsir Ibn Kathir (English abridged), Tafheem-ul-Quran (Maududi),
// Sahih Muslim 395 aur Jami at-Tirmidhi 2954 se Roman Urdu mein tayyar kiya gaya khulasa.
// Ayat ki ginti app ke Quran data ke mutabiq hai: Bismillah = Ayah 1.
var storyData001 = {
  surah: 1,
  chips: ["7 ayat", "Makki"],
  intro: "Al-Fatiha mushaf ki pehli surah hai. “Fatiha” ka matlab hai kholne wali / shuruaat karne wali. Ibn Kathir ke mutabiq yeh woh surah hai jis se namaz shuru ki jaati hai. Isme sirf 7 ayat hain, lekin Allah ki tareef, Uski sifaat, Aakhirat, ibadat mein ikhlas aur seedhe raaste ki dua, sab kuch ek saath aa jata hai.",
  names: "Isko Umm-ul-Kitab aur As-Sab‘-ul-Mathani (saat dohrayi jaane wali ayat) bhi kaha gaya hai (Ibn Kathir; Quran 15:87).",
  disclaimer: "Yeh Story Mode Quran ka tarjuma ya fatwa nahi hai. Arabic aur “App ka tarjuma” app ke apne Quran data se liye gaye hain. Samjhane wala hissa Tafsir Ibn Kathir (English, abridged) aur Tafheem-ul-Quran se aasaan Roman Urdu mein khulasa hai. Har section ke neeche hawala diya gaya hai. Gehri ya fiqhi baton ke liye ahl-e-ilm se rujoo karein.",
  ayahNote: "Ayat ginti ka note: app ke Quran data mein Bismillah ko Al-Fatiha ki Ayah 1 ginte hain, isliye “Alhamdu lillah...” Ayah 2 hai. Ibn Kathir ke mutabiq Kufa ke qaariyon ki aksariyat aur kai sahaba/tabi‘een Bismillah ko Fatiha ki alag pehli ayah ginte hain; is mas’ale par ulama ka ikhtilaf bhi hai.",
  flow: [
    { label: "Hamd aur sifaat", ayahs: "Ayah 2–4", text: "Allah ki tareef, rehmat aur badshahi" },
    { label: "Ehad", ayahs: "Ayah 5", text: "Teri hi ibadat, Tujh hi se madad" },
    { label: "Dua", ayahs: "Ayah 6–7", text: "Seedhe raaste ki hidayat" }
  ],
  flowNote: "Sahih Muslim 395 ki hadith-e-qudsi mein Surah isi tarah baanti gayi hai: pehla hissa Allah ki tareef, beech ki ayat “mere aur mere bande ke darmiyan”, aur aakhir ka hissa bande ki dua.",

  sections: [
    {
      n: 1, title: "Allah ki hamd aur tareef", ayahs: [1, 2], boxes: [1, 2],
      paras: [
        "Surah “Bismillah” se shuru hoti hai, yani har kaam Allah ke naam se. Ibn Kathir likhte hain ke Bismillah kisi bhi kaam se pehle padhna pasandeeda hai (jaise khutba, wudu aur khana khane se pehle). Uske baad pehla jumla hi hamd ka hai: “Alhamdu lillah”, yani sab tareef Allah hi ke liye.",
        "Hamd ka matlab: Imam Ibn Jarir ke mutabiq (Ibn Kathir ke hawale se) har tarah ka shukr aur tareef asal mein sirf Allah ke liye hai, na un cheezon ke liye jinki Uske siwa ibadat ki jaati hai, na Uski kisi makhlooq ke liye. Wajah yeh hai ke Allah ke be-shumar ehsanaat hain jinki miqdar sirf wohi jaanta hai: jism aur salahiyatein jin se bande hukm bajaa late hain, rizq, aaram ki zindagi, aur woh raaste jin se abadi khushi ke ghar tak pahuncha ja sakta hai.",
        "Yeh kalima Allah ne khud apni zabaan se sikhaya hai, goya farmaya: “Kaho: sab tareef Allah ke liye hai.” Ibn Kathir likhte hain ke isme Allah ke sab se khoobsurat naamon aur uchi sifaat ki tareef bhi shamil hai.",
        "Hamd aur shukr mein halka sa farq hai: hamd zyada aam hai, kisi ki khoobiyon (sifaat) ki tareef bhi hamd hai aur uske kiye hue kaam ki bhi. Shukr us kaam ya ehsaan ka hota hai jo kiya gaya ho. “Al-hamd” mein “Al” lagne se har qism ki hamd aur tareef shamil ho jati hai."
      ],
      key: "Surah ki shuruaat maangne se nahi, hamd se hoti hai. Ibn Kathir ke mutabiq madad maangne ka behtareen tareeqa yahi hai ke pehle jis se maangna ho uski tareef ki jaye, phir apni zaroorat rakhi jaye.",
      refs: [],
      src: ["Tafsir Ibn Kathir, Ayah 1 aur 2", "Ibn Kathir, Ayah 5 (dua ka tareeqa)", "Sahih Muslim 395"]
    },
    {
      n: 2, title: "Rabb-ul-Alameen: Allah ki rububiyat", ayahs: [2], boxes: [],
      paras: [
        "“Rabb” ke maane Ibn Kathir ne yeh bataye: woh maalik jise apni milkiyat par poora ikhtiyar ho, aur sardar / hukmran. Yeh sab maane Allah ke liye durust hain. Jab “Rabb” akela (bina kisi izafat ke) bola jaye to woh sirf Allah ke liye hota hai. Allah ke siwa ke liye usay kisi cheez ki taraf nisbat dekar bola jata hai (jaise ghar ka maalik).",
        "“Alameen” lafz “Alam” ki jama hai. Ibn Kathir ke mutabiq “Alam” mein Allah ke siwa har cheez shamil hai: aasmaanon aur zameen ki, khushki aur samandar ki saari makhlooqat. Har qism ki makhlooq ko ek “Alam” kaha jata hai. Kuch ulama ne “Alam” ko sirf aqal wali makhlooq tak, aur kuch ne sirf jaandaar makhlooq tak mehdood kiya, lekin Qurtubi ke mutabiq sahi maana yeh hai ke isme woh sab hai jo Allah ne dunya aur aakhirat mein paida kiya.",
        "Ibn Kathir ke bayan ke mutabiq “Alam” lafz “alamah” (nishani) se bana hai, kyunke har makhlooq apne Khaaliq ke wujood aur Uski wahdaniyat ki ek nishani hai.",
        "Is ayat ka pehla paigham yeh hai ke Allah kisi ek qaum ya ek zameen ka nahi, har makhlooq aur har jahan ka Rabb hai."
      ],
      key: "Rabb = maalik aur hukmran. Alameen = Allah ke siwa saari makhlooq. Dono milkar batate hain ke har cheez par ikhtiyar Allah hi ka hai.",
      refs: [],
      src: ["Tafsir Ibn Kathir, Ayah 2"]
    },
    {
      n: 3, title: "Ar-Rahman aur Ar-Raheem: Allah ki rehmat", ayahs: [1, 3], boxes: [3],
      paras: [
        "Dono naam “rehmat” se bane hain. Ibn Kathir ke mutabiq “Rahman” mein rehmat ke maane zyada wasee hain, aur yeh naam sirf Allah ke liye khaas hai. “Raheem” ka lafz Quran mein doosron ke liye bhi aaya hai (jaise 9:128 mein Nabi ﷺ ke baare mein).",
        "In dono naamon ke farq par ulama ke kai aqwal naql hue hain: kuch (jaise Al-Azrami, Abu Ali al-Farisi) ke mutabiq “Rahman” har qism ki rehmat wala hai jo tamaam makhlooq par hai, aur “Raheem” khaas taur par mominon par (Quran 33:43). Ibn Abbas (r.a.) se manqool hai ke dono narm naam hain, ek doosre se zyada rehmat ka maana rakhta hai. Kuch ulama (jaise Abu Ubayd) ke nazdeek dono ka maana ek hi hai. Ibn Kathir ek dua ka bhi zikr karte hain jismein dono naam dunya aur aakhirat dono ke liye aaye hain.",
        "Ayah 2 mein “Rabb” ke baad rehmat ke yeh do naam kyun? Qurtubi ke hawale se Ibn Kathir likhte hain ke isme ek taraf tanbeeh (warning) hai aur ek taraf targheeb (hausla / ummeed): “Rabb” mein warning hai aur “Rahman-Raheem” mein ummeed. Quran mein bhi yeh jodi milti hai: “main bahut bakhshne wala, rehm karne wala hoon, aur mera azaab dardnaak azaab hai” (15:49-50)."
      ],
      key: "Surah ke shuru mein hi Allah ki hukmrani aur Uski rehmat ka tawazun hai: ummeed bhi, aur zimmedari ka ehsaas bhi.",
      refs: [[15, 49], [15, 50], [33, 43], [9, 128]],
      src: ["Tafsir Ibn Kathir, Ayah 1 aur 3"]
    },
    {
      n: 4, title: "Roz-e-Jaza aur Allah ki badshahi", ayahs: [4], boxes: [4],
      paras: [
        "“Maaliki Yawmid-Deen”: Roz-e-Jaza ka maalik. Ibn Kathir samjhate hain ke iska yeh matlab nahi ke Allah sirf Roz-e-Jaza ka maalik hai. Woh dunya aur aakhirat dono ka Rabb hai (Ayah 2). Roz-e-Jaza ka khaas zikr isliye hai ke us din Allah ke siwa koi bhi kisi cheez ka dawa nahi kar sakega.",
        "Us din Allah ki ijazat ke bina koi bol nahi sakega. Quran ke kai maqamat isi baat ko batate hain (jaise 11:105, 78:38, 20:108). Ibn Abbas (r.a.) se manqool hai ke us din koi us cheez ka bhi maalik nahi hoga jiska woh dunya mein maalik tha.",
        "“Yawm-id-Deen” ka matlab: Ibn Abbas aur kai sahaba, tabi‘een aur salaf ke mutabiq badle ka din. Us din Allah makhlooq ke amaal ka hisaab lega: neki ka badla neki, buraai ka badla buraai, siwa un ke jinhein Allah maaf kar de.",
        "“Deen” ka ek maana hisaab aur jaza / badla bhi hai (jaise 24:25 mein Allah unhein unka poora badla dega). Ibn Kathir Hazrat Umar (r.a.) ka qaul naql karte hain: apna hisaab khud karo is se pehle ke tumhara hisaab liya jaye, aur apne aap ko tol lo is se pehle ke tumhein toula jaye.",
        "Sahih Muslim (395) ki hadith-e-qudsi mein hai ke jab bandah “Maaliki Yawmid-Deen” kehta hai to Allah farmata hai: “Mere bande ne meri buzurgi bayan ki.” (Ek riwayat mein: “Mere bande ne apne maamlaat mere supurd kar diye.”)"
      ],
      key: "Dunya mein insaan kuch cheezon ka maalik kehlata hai. Roz-e-Jaza par saara ikhtiyar sirf Allah ka hoga.",
      refs: [[11, 105], [78, 38], [20, 108], [24, 25]],
      src: ["Tafsir Ibn Kathir, Ayah 4", "Sahih Muslim 395"]
    },
    {
      n: 5, title: "Ibadat aur madad: sirf Allah se", ayahs: [5], boxes: [5],
      paras: [
        "Ayah 5 mein andaaz badal jata hai. Ab tak Allah ka zikr “woh” ke andaaz mein tha, ab bandah “Tu” kehkar seedha Allah se mukhatib hota hai. Ibn Kathir ke mutabiq wajah yeh hai ke bandah hamd aur sana ke baad Allah ke saamne khada hokar seedhi baat karta hai.",
        "“Iyyaka” (Tujhi ko) pehle aane ka matlab: hum Teri hi ibadat karte hain, kisi aur ki nahi, aur Tujh hi par bharosa karte hain, kisi aur par nahi. Ibn Kathir ke mutabiq yeh farmabardari ki mukammal soorat hai aur poora deen in do baton mein samaya hua hai. Salaf mein se kuch ne kaha: Fatiha Quran ka raaz hai aur yeh ayat Fatiha ka raaz hai.",
        "Pehla hissa (na‘budu) shirk se bara’at ka elaan hai. Doosra hissa (nasta‘een) is baat ka iqrar hai ke saari taqat aur ikhtiyar Allah hi ke paas hai.",
        "“Ibadat” ka maana: lughat mein jhuk jana / mutee hona. Deen ki istilah mein: intehai muhabbat, aajzi aur khauf. Ibadat pehle aur madad baad mein kyun? Ibn Kathir ke mutabiq maqsad ibadat hai aur Allah ki madad us maqsad ko poora karne ka zariya. Pehle zyada ahem baat, phir uske baad kam ahem.",
        "Hadith-e-qudsi (Sahih Muslim 395) mein Allah farmata hai ke maine namaz (yani Fatiha) ko apne aur apne bande ke beech aadhi aadhi baant diya hai. Jab bandah “Iyyaka na‘budu wa iyyaka nasta‘een” kehta hai to Allah farmata hai: “Yeh mere aur mere bande ke darmiyan hai, aur mere bande ke liye woh hai jo woh maange.”"
      ],
      key: "Hadith ke mutabiq yeh ayat Allah aur bande ke darmiyan hai: Teri hi ibadat, aur Tujh hi se madad.",
      refs: [[11, 123]],
      src: ["Tafsir Ibn Kathir, Ayah 5", "Sahih Muslim 395"]
    },
    {
      n: 6, title: "Seedhe raaste ki hidayat ki dua", ayahs: [6], boxes: [6],
      paras: [
        "Ab bandah apni sab se badi zaroorat maangta hai: “Ihdinas-Siraatal-Mustaqeem”. Ibn Kathir ke mutabiq “hidayat” ka matlab hai rehnumai karna, sahi raasta dikhana aur kamyabi tak pahunchana. Quran mein neki aur buraai ke “do raaste” dikhane ko bhi hidayat kaha gaya hai (90:10).",
        "“Siraat-e-Mustaqeem”: Imam Tabari ke mutabiq arbi zabaan mein saaf, seedha raasta jismein koi tedhapan ya shaakh nahi, aur is maane par ummat ka ittefaq naql kiya gaya hai. Quran mein “seedhe raaste” se murad Islam hai.",
        "Sawal: momin to pehle se hidayat par hota hai, phir har namaz mein hidayat kyun maangta hai? Ibn Kathir ka jawab: bande ko har lamhe Allah ki madad chahiye taake hidayat par qaim rahe aur usme mazboot ho. Wo khud apne nafa-nuqsan ka ikhtiyar nahi rakhta. Isliye iska ek maana “humein hidayat par saabit qadam rakh” bhi hai (jaise 3:8 ki dua: “hidayat dene ke baad hamare dilon ko tedha na kar”)."
      ],
      key: "Hidayat ek baar milne wali cheez nahi, uspar qaim rehna bhi Allah ki madad se hai. Isi liye yeh dua roz baar baar maangi jati hai.",
      refs: [[90, 10], [3, 8]],
      src: ["Tafsir Ibn Kathir, Ayah 6", "Sahih Muslim 395"]
    },
    {
      n: 7, title: "Aakhri ayat: kin ka raasta, aur kin se bachna", ayahs: [7], boxes: [7],
      paras: [
        "Ayah 7 “seedhe raaste” ki wazahat hai. Pehle woh log bataye gaye jin par Allah ne inaam kiya. Ibn Kathir ke mutabiq yeh woh log hain jo Surah An-Nisa (4:69) mein mazkoor hain: Ambiya, Siddiqeen, Shuhada aur Saliheen, yani hidayat, ikhlas aur Allah aur Uske Rasool ki farmabardari wale log. Maududi (Tafheem-ul-Quran) ke mutabiq yeh woh raasta hai jis par shuru se woh afraad aur qaumein chalti aayi hain jinhein Allah ke haqeeqi inaamaat mile.",
        "Maududi ek aham baat bhi likhte hain: “inaam” se murad woh waqti kamyabi aur khushhali nahi jo dunya mein zalim aur bigre hue logon ko bhi mil jati hai (jaise Firaun, Namrood aur Qaroon ko mili thi). Yahan haqeeqi aur paedaar inaam murad hai jo nek amal par Allah ki raza se milta hai.",
        "Phir do raaston se bachne ki dua hai. Ibn Kathir ke mutabiq pehla raasta un logon ka jin par Allah ka ghazab hua: jinhon ne haq ko jaan kar bhi us se munh mod liya (ilm hai, magar amal nahi). Doosra un logon ka jo bhatak gaye: jinhon ne sahi ilm kho diya aur bhatakte phir rahe hain, sahi raasta nahi pa rahe.",
        "Hazrat Adi bin Hatim (r.a.) se riwayat hai ke Nabi ﷺ ne farmaya: “Jin par ghazab hua woh Yahood hain aur bhatke hue Nasara (Isai) hain.” (Musnad Ahmad; Jami at-Tirmidhi 2954. Ibn Kathir ne ise Tirmidhi ke hawale se hasan gharib likha hai.) Ibn Kathir isse yeh samajhte hain ke Yahood ne ilm ke baad amal chhoda, aur Nasara ne sahi ilm kho diya. Saath hi likhte hain ke dono giroh ghazab ke bhi mustahiq hue aur gumrah bhi, magar ghazab Yahood ki zyada khaas sifat hai aur gumrahi Nasara ki (Quran 5:60 aur 5:77 ke hawale se).",
        "Ibn Kathir ka nateeja: momin ka raasta haq ka ilm aur us par amal hai. Isliye momin ko in dono raaston se hoshiyar rehna chahiye. Is ayat ko woh “hidayat ki dua” hi ka hissa lete hain: dua yeh hai ke Allah hamein in dono raaston se door rakhe.",
        "Ek lafzi nukta (Ibn Kathir): inaam ke liye “tu ne inaam kiya” kaha gaya (seedha Allah ki taraf nisbat), jabke ghazab ke liye “jin par ghazab hua” kaha gaya, ghazab karne wale ka naam nahi liya gaya. Halanki ghazab bhi Allah hi utarta hai (jaise 58:14).",
        "Hadith-e-qudsi (Sahih Muslim 395) ke mutabiq ayat 6 aur 7 padhne ke baad Allah farmata hai: “Yeh mere bande ke liye hai, aur mere bande ke liye woh hai jo usne maanga.”"
      ],
      key: "Sahi raasta: haq ka ilm + us par amal. Do galat raaste: haq jaan kar chhodna (ghazab), aur sahi ilm ke baghair bhatakna (gumrahi).",
      refs: [[4, 69], [4, 70], [5, 60], [5, 77]],
      src: ["Tafsir Ibn Kathir, Ayah 7", "Tafheem-ul-Quran (Maududi), Ayah 7 ke notes", "Jami at-Tirmidhi 2954", "Sahih Muslim 395"]
    }
  ],
  summary: {
    title: "Surah ka khulasa",
    text: "Ibn Kathir ke mutabiq Al-Fatiha ki 7 ayat mein yeh sab hai: Allah ki tareef aur Uske khoobsurat naam o sifaat; Aakhirat (Roz-e-Qayamat) ka zikr; bandon ko Allah se maangna sikhana aur yeh iqrar ke saari taqat Allah hi se hai; ibadat mein Allah ko akela maanna; seedhe raaste (sachche deen) par chalne aur qaim rehne ki dua; aur gumrahi ke raaston se khabardar karna. Maududi ke mutabiq Surah ek dua hai jo Allah ne unhein sikhai jo Uski kitab ko samajhna chahte hain, aur Quran goya us dua ka jawab hai.",
    src: ["Tafsir Ibn Kathir (The Summary of Al-Fatihah)", "Tafheem-ul-Quran (Maududi), Surah ka taaruf"]
  },

  concepts: [
    {
      title: "Rabb-ul-Alameen", ayahs: [2],
      simple: "“Sab jahanon ka Rabb.” Rabb = maalik aur hukmran. Alameen = Allah ke siwa saari makhlooq.",
      context: "Ayah 2 ka poora jumla yeh hai ke tareef sirf us Allah ki jo har jahan ka Rabb hai. “Rabb” akela sirf Allah ke liye bola jata hai.",
      note: "“Alam” ki wusat par ulama ke aqwal alag hain. Qurtubi ke mutabiq sahi maana: dunya aur aakhirat ki har makhlooq.",
      refs: [],
      src: ["Tafsir Ibn Kathir, Ayah 2"]
    },
    {
      title: "Ar-Rahman aur Ar-Raheem", ayahs: [1, 3],
      simple: "Dono naam “rehmat” se bane hain: Allah bahut meharbaan aur rehm farmane wala hai.",
      context: "Yeh jodi Bismillah (Ayah 1) mein bhi hai aur Ayah 3 mein dobara. Ayah 2 mein “Rabb” (hukmrani) ke baad rehmat ka zikr ummeed ka paigham deta hai.",
      note: "Ibn Kathir: Rahman mein rehmat ke maane zyada wasee hain aur yeh naam sirf Allah ka hai. Ulama ke aqwal: Rahman har makhlooq par, Raheem mominon par (33:43); kuch ke nazdeek dono ka maana ek hi hai.",
      refs: [[33, 43]],
      src: ["Tafsir Ibn Kathir, Ayah 1 aur 3"]
    },
    {
      title: "Yawm-id-Deen", ayahs: [4],
      simple: "Yawm = din. Deen = badla / jaza / hisaab. Yawm-id-Deen = badle ka din, yani Qayamat ka din jab amaal ka hisaab hoga.",
      context: "“Maalik” kehkar bataya gaya ke us din poora ikhtiyar sirf Allah ka hoga. Koi uski ijazat ke bina bol bhi nahi sakega (11:105).",
      note: "Ibn Kathir: Ibn Abbas (r.a.) aur kai salaf ke mutabiq Yawm-id-Deen = makhlooq ke amaal ke badle ka din. “Deen” ka maana hisaab aur jaza bhi hai (24:25).",
      refs: [[11, 105], [24, 25]],
      src: ["Tafsir Ibn Kathir, Ayah 4"]
    },
    {
      title: "Iyyaka na‘budu wa iyyaka nasta‘een", ayahs: [5],
      simple: "“Hum Teri hi ibadat karte hain aur Tujh hi se madad maangte hain.” “Iyyaka” pehle aane ka matlab: sirf Teri, kisi aur ki nahi.",
      context: "Yeh Surah ke beech ki ayat hai. Ab tak Allah ki tareef thi, ab bande ka ehad aur sawal shuru hota hai. Hadith-e-qudsi mein is ayat ko “mere aur mere bande ke darmiyan” kaha gaya.",
      note: "Ibn Kathir: ibadat = intehai muhabbat, aajzi aur khauf. Qatadah ke qaul ke mutabiq ibadat maqsad hai aur madad uska zariya. Pehla hissa shirk se bara’at hai, doosra hissa ikhtiyar sirf Allah ka hone ka iqrar.",
      refs: [[11, 123]],
      src: ["Tafsir Ibn Kathir, Ayah 5", "Sahih Muslim 395"]
    },
    {
      title: "Ihdinas-Siraatal-Mustaqeem", ayahs: [6],
      simple: "“Humein seedhe raaste par chala.” Hidayat = rehnumai aur kamyabi tak pahunchana. Siraat-e-Mustaqeem = saaf, seedha raasta.",
      context: "Ayah 5 ke baad ab “maangna” shuru hota hai. Allah ki tareef aur ehad ke baad sab se badi zaroorat: hidayat. “Humein saabit qadam rakh” bhi is dua ka maana hai.",
      note: "Imam Tabari ke mutabiq (Ibn Kathir ke hawale se) yeh bina tedhapan ka saaf raasta hai, aur Quran mein is se murad Islam hai. Ibn Kathir ne Nawwas bin Sam‘an ki ek riwayat (Musnad Ahmad) se misal naql ki hai: ek seedha raasta, dono taraf deewarein (Allah ki hadood), deewaron mein khule darwaze (haraam cheezein), darwaze par pukarne wala (Allah ki Kitab) aur upar se pukarne wala (har muslim ke dil mein Allah ki naseehat). Is riwayat ki sanad maine alag se check nahi ki, yeh Ibn Kathir ke hawale se hai.",
      refs: [[90, 10], [3, 8]],
      src: ["Tafsir Ibn Kathir, Ayah 6"]
    },
    {
      title: "Aakhri ayat ke teen raaste", ayahs: [7],
      simple: "Aakhri ayat ek sahi raaste (inaam wale) aur do galat raaston (ghazab aur gumrahi) ka farq batati hai.",
      parts: [
        { h: "An‘amta ‘alayhim (jin par inaam hua)", t: "Ibn Kathir: Ambiya, Siddiqeen, Shuhada aur Saliheen (4:69). Maududi: haqeeqi aur paedaar inaam, na ke waqti dunyawi kamyabi." },
        { h: "Al-Maghdoobi ‘alayhim (jin par ghazab hua)", t: "Ibn Kathir: jo haq ko jaan kar bhi us se phir jate hain (ilm hai, amal nahi). Hadith (Tirmidhi 2954): Yahood." },
        { h: "Ad-Daalleen (bhatke hue)", t: "Ibn Kathir: jinhon ne sahi ilm kho diya aur bhatak rahe hain. Hadith (Tirmidhi 2954): Nasara (Isai)." }
      ],
      context: "Yeh ayat “seedhe raaste” ki wazahat hai. Surah ka aakhir bhi dua par hota hai: dua yeh hai ke Allah in dono galat raaston se bachaye.",
      note: "Ibn Kathir ke mutabiq dono giroh ghazab ke bhi mustahiq hue aur gumrah bhi, magar ghazab Yahood ki zyada khaas sifat hai aur gumrahi Nasara ki. Momin ka raasta haq ka ilm aur us par amal hai.",
      refs: [[4, 69], [5, 60], [5, 77]],
      src: ["Tafsir Ibn Kathir, Ayah 7", "Tafheem-ul-Quran (Maududi), Ayah 7 ke notes", "Jami at-Tirmidhi 2954"]
    }
  ],

  lessons: [
    {
      title: "Allah ki hamd aur shukr", ayahs: [2],
      fromSurah: "Surah ka pehla amal hamd hai: “Alhamdu lillah”. Ibn Kathir ke hawale se Musnad Ahmad (aur Nasa’i) mein Nabi ﷺ ka farmaan hai: “Tumhara Rabb hamd ko pasand karta hai.”",
      amal: "Rozana kam az kam ek aisi nemat socho jis par Allah ka shukr ada kar sakte ho (sehat, rizq, rishte, aman) aur dil se “Alhamdulillah” kaho.",
      src: ["Tafsir Ibn Kathir, Ayah 2"]
    },
    {
      title: "Allah ki rehmat se umeed", ayahs: [1, 3],
      fromSurah: "Surah mein Allah ke naam “Ar-Rahman Ar-Raheem” do baar aaye hain (Ayah 1 aur 3). Qurtubi ke hawale se Ibn Kathir: “Rabb” mein tanbeeh (warning) hai aur “Rahman-Raheem” mein ummeed, yani dono ka tawazun.",
      amal: "Galti ho jaye to mayoos hone ki bajaye Allah ki rehmat ko yaad karke tauba ki taraf badho. Aur rehmat ke bharose par gunahon ko halka bhi na samjho, kyunke “Rabb” ka zikr bhi saath hai.",
      src: ["Tafsir Ibn Kathir, Ayah 3"]
    },
    {
      title: "Aakhirat aur hisaab ko yaad rakhna", ayahs: [4],
      fromSurah: "Surah mein Allah ko “Roz-e-Jaza ka maalik” kaha gaya hai. Ibn Kathir Hazrat Umar (r.a.) ka qaul naql karte hain: apna hisaab khud karo is se pehle ke tumhara hisaab liya jaye.",
      amal: "Raat ko sone se pehle 2-3 minute apne din ka jaiza lo: kya achha hua, kahan kotahi hui, kal kya behtar karna hai.",
      src: ["Tafsir Ibn Kathir, Ayah 4"]
    },
    {
      title: "Ibadat Allah hi ke liye, madad usi se", ayahs: [5],
      fromSurah: "Ibn Kathir ke mutabiq “Iyyaka na‘budu wa iyyaka nasta‘een” shirk se bara’at hai aur is iqrar ka izhaar ke saari taqat Allah ke paas hai. Qatadah ke mutabiq isme ikhlas ke saath ibadat karne aur har maamle mein Allah se madad maangne ki taleem hai.",
      amal: "Koi bhi kaam shuru karte waqt “Bismillah” kaho aur dil mein Allah se madad talab karo (Ibn Kathir ke mutabiq Bismillah har kaam se pehle padhna pasandeeda hai).",
      src: ["Tafsir Ibn Kathir, Ayah 1 aur 5"]
    },
    {
      title: "Hidayat ki dua aur seedhe raaste par chalne ki koshish", ayahs: [6, 7],
      fromSurah: "Ibn Kathir ke mutabiq momin ko hidayat par qaim rehne aur usme mazboot hone ke liye har lamha Allah ki madad chahiye, isliye woh baar baar yeh dua maangta hai. Aur momin ka raasta haq ka ilm aur us par amal hai.",
      amal: "Namaz mein “Ihdinas-Siraatal-Mustaqeem” padhte waqt iska matlab dil mein dohrao. Aur deen ki koi ek baat seekh kar us par amal ki chhoti si koshish shuru karo.",
      src: ["Tafsir Ibn Kathir, Ayah 6 aur 7"]
    }
  ],
  lessonsNote: "“Surah aur tafsir se” wala hissa sources par mabni hai. “Amal mein” wale hisse app ki taraf se aam amli mashwaray hain, Quran ya hadith ka seedha hukm nahi.",

  sources: [
    { name: "Tafsir Ibn Kathir (Abridged, English)", detail: "Surah 1 ka taaruf aur Ayah 1 se 7 ke tafsir pages", links: [
      { label: "Taaruf", url: "https://www.alim.org/quran/tafsir/ibn-kathir/surah/1/0/" },
      { label: "Ayah 1", url: "https://www.alim.org/quran/tafsir/ibn-kathir/surah/1/1/" },
      { label: "Ayah 2", url: "https://www.alim.org/quran/tafsir/ibn-kathir/surah/1/2/" },
      { label: "Ayah 3", url: "https://www.alim.org/quran/tafsir/ibn-kathir/surah/1/3/" },
      { label: "Ayah 4", url: "https://www.alim.org/quran/tafsir/ibn-kathir/surah/1/4/" },
      { label: "Ayah 5", url: "https://www.alim.org/quran/tafsir/ibn-kathir/surah/1/5/" },
      { label: "Ayah 6", url: "https://www.alim.org/quran/tafsir/ibn-kathir/surah/1/6/" },
      { label: "Ayah 7", url: "https://www.alim.org/quran/tafsir/ibn-kathir/surah/1/7/" }
    ] },
    { name: "Tafheem-ul-Quran (Syed Abul A‘la Maududi)", detail: "Surah ka taaruf, aur Ayah 7 ke notes", links: [
      { label: "Taaruf", url: "https://www.alim.org/quran/tafsir/maududi/surah/1/0/" },
      { label: "Ayah 7 ke notes", url: "https://egka.fr/english-aya-7-sora-1.html" }
    ] },
    { name: "Sahih Muslim 395 (hadith-e-qudsi)", detail: "Namaz (Fatiha) ka Allah aur bande ke darmiyan taqseem hona", links: [
      { label: "sunnah.com", url: "https://sunnah.com/muslim:395a" }
    ] },
    { name: "Jami at-Tirmidhi 2954", detail: "Adi bin Hatim (r.a.) ki riwayat", links: [
      { label: "hadeethenc.com", url: "https://hadeethenc.com/en/browse/hadith/65061" }
    ] }
  ]
};