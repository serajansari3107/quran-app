// Quran Story Mode -- Surah Al-Baqarah ka content (Parts System).
// NOTE: Arabic text aur "App ka tarjuma" yahan duplicate NAHI hain -- woh app ke existing
// data/002-al-baqarah.js se runtime par padhe jaate hain.
// Har Part ki ayah range Tafsir Ibn Kathir (abridged, English) ke apne tafsir-entries ki hadd par rakhi gayi hai
// (koi Part kisi entry ke beech mein nahi katta). Part ke unwan aur "heads" Ibn Kathir ke apne sub-headings se liye gaye hain.
// Samjhane wala hissa Roman Urdu mein khulasa hai; Quran ki ayat ka matlab sirf ayat se, aur tafsir ki baatein sirf us hisse se jo padha gaya.
// Ayat ki ginti app ke Quran data ke mutabiq hai (Al-Baqarah = 286 ayat).
var storyData002 = {
  surah: 2,
  chips: ["286 ayat", "Madani", "24 Parts"],
  intro: "Al-Baqarah Quran ki sab se lambi surah hai. Isko 24 chhote Parts mein baanta gaya hai taake har hissa aaram se padha aur samjha ja sake. Har Part mein teen tabs hain: Story (ayat ka bahao), Samjho (zaroori lafz) aur Lessons (amli sabaq).",
  names: "Ibn Kathir ke mutabiq yeh Surah Madinah mein nazil hui (Ibn Kathir, Ayah 1 ka unwan).",
  disclaimer: "Yeh Story Mode Quran ka tarjuma ya fatwa nahi hai. Arabic aur “App ka tarjuma” app ke apne Quran data se liye gaye hain. Samjhane wala hissa Tafsir Ibn Kathir (English, abridged) ke sub-headings aur un ke padhe gaye hisson se aasaan Roman Urdu mein khulasa hai. Fiqhi masail (talaq, riba, wirasat wagairah) ke liye ahl-e-ilm se rujoo karein.",
  partsNote: "Parts ki hadein Tafsir Ibn Kathir ke tafsir-entries par hain, koi ayat chhooti ya doharayi nahi gayi (286 mein se 286 ayat). Bade hisson ke group Tafheem-ul-Quran aur Ma‘ariful Quran ke bayan se milaye gaye hain.",
  groups: [
    { from: 1, to: 39, title: "Hidayat ki dawat aur insaan ki shuruaat", text: "Quran ki hidayat, teen giroh, Allah ki ibadat ki dawat aur Adam (A.S.) ka waqia." },
    { from: 40, to: 123, title: "Bani Israel se khitab", text: "Ma‘ariful Quran ke mutabiq ayat 40 se 123 tak Ahl-e-Kitab, khaas taur par Bani Israel, se khitab hai." },
    { from: 124, to: 141, title: "Hazrat Ibrahim (A.S.) aur unki millat", text: "Ka‘bah ki tameer, dua aur Millat-e-Ibrahim." },
    { from: 142, to: 286, title: "Ummat ki tarbiyat aur ahkam", text: "Tafheem-ul-Quran ke mutabiq ayat 141 ke baad ka hissa zyadatar ijtimai, maashi aur qanooni hidayaat par hai." }
  ],
  lessonsNote: "Lessons Quran aur tafsir ke hisse se seedhe nikle huye amli mashware hain. Yeh fatwa nahi. Zaroorat par ahl-e-ilm se poochein.",

  parts: [
    {
      n: 1, from: 1, to: 7, g: 1,
      title: "Quran ki hidayat: muttaqeen aur inkar karne wale",
      sub: "Surah ka aaghaz, muttaqeen ki sifaat, aur kufr karne walon ka haal",
      heads: ["The Letters at the Beginning of Surahs", "There is no Doubt in the Qur'an", "Meaning of Taqwa", "The Meaning of Al-Ghayb", "Attributes of the Believers", "Meaning of Khatama"],
      intro: "Surah ke shuru mein pehle Quran ka taaruf aata hai: yeh woh kitab hai jis mein shak nahi. Phir batata hai ke is hidayat se kaun faida uthata hai (muttaqeen) aur kaun nahi.",
      points: [
        { r: [1, 1], h: "Alif Laam Meem", t: "Ibn Kathir likhte hain ke in huroof ke maane par ulama ek raay par nahi; jab tak sahih hadith se wazahat na mile, ruk jana behtar hai. Ek hikmat yeh bayan hui ke yeh huroof Quran ke mojize ki gawahi hain: Quran unhi huroof se bana hai jin se log baat karte hain, phir bhi uski misl koi nahi la sakta." },
        { r: [2, 2], h: "Quran mein koi shak nahi", t: "Ayah 2 kehti hai ke yeh kitab shak se paak hai aur muttaqeen ke liye hidayat hai. Ibn Kathir: ‘rayb’ ka maana shak hai; is tafseer par Ibn Abi Hatim ne kaha ke unhein koi ikhtilaf maloom nahi." },
        { r: [3, 5], h: "Muttaqeen ki sifaat", t: "Jo ghaib par imaan rakhte hain, namaz qaim karte hain, aur Allah ke diye rizq mein se kharch karte hain (ayah 3); jo Nabi ﷺ par aur pehli kitabon par imaan rakhte aur aakhirat par yaqeen rakhte hain (ayah 4). Ayah 5: aise log apne Rabb ki taraf se hidayat par hain aur kamyab hain." },
        { r: [6, 7], h: "Jo inkar par ade rahe", t: "Ayah 6–7 un logon ka zikr karti hain jinke liye daraana ya na daraana barabar hai. Ibn Kathir (Ayah 7) ka bayan: shuru ki chaar ayat mominon ke baare mein thin, aakhri do kafiron ke baare mein, uske baad Allah munafiqon ka zikr shuru karta hai." }
      ],
      key: "Quran sab ke liye hidayat ka paigham hai, lekin faida wohi uthata hai jo taqwa ke saath padhta hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 1 se 7", "Quran 2:1–7"],
      samjho: [
        { title: "Taqwa (Muttaqeen)", ayahs: [2], simple: "Taqwa ka asal maana hai: jis cheez se bachna hai usse bach kar chalna.", context: "Ayah 2 mein Quran ko muttaqeen ke liye hidayat kaha gaya hai.", note: "Ibn Kathir: Hazrat Umar (r.a.) ne Ubayy bin Ka‘b (r.a.) se taqwa ka poocha. Unhone poocha: kaanton wale raaste par kaise chalte ho? Jawab mila: daaman samet kar koshish se. Unhone kaha: yehi taqwa hai.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 2 (Meaning of Taqwa)"] },
        { title: "Ghaib par imaan", ayahs: [3, 4], simple: "Ghaib = woh cheez jo nazar nahi aati, magar Allah ne uski khabar di.", context: "Ayah 3 mein ghaib par imaan, namaz aur kharch ek saath aaye; ayah 4 mein pichli kitabon aur aakhirat ka yaqeen.", note: "Ibn Kathir ne Abu al-‘Aliyah ka qaul naql kiya: ghaib mein Allah, farishte, kitabein, rasool, aakhirat, jannat, jahannam, Allah se mulaqat aur marne ke baad zindagi shamil hai. Ayah 3 ke ‘kharch’ ke baare mein do aqwal: zakat, ya apne ahl-o-ayal par kharch (zakat farz hone se pehle).", refs: [], src: ["Tafsir Ibn Kathir, Ayah 3 (Meaning of Al-Ghayb)"] },
        { title: "Dil par muhar", ayahs: [7], simple: "Ayah 7 mein dilon aur kaanon par muhar lagne ka zikr hai.", context: "Yeh un logon ka haal hai jo haq jaan kar bhi inkar par ade rehte hain.", note: "Ibn Kathir: Mujahid ne kaha ke jab gunah dil par chha jaye to woh ‘muhar’ ban jaata hai. Qatadah ke mutabiq jab woh Shaitan ki baat maante gaye to Allah ne unke dil, kaan aur aankhon par muhar kar di.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 7 (Meaning of Khatama)"] }
      ],
      lessons: [
        { title: "Quran ko hidayat ki neeyat se padhein", ayahs: [2], fromSurah: "Quran khud kehta hai ke yeh shak se paak hai aur hidayat muttaqeen ke liye hai.", amal: "Padhne se pehle neeyat karein: ‘mujhe amal ke liye hidayat chahiye’.", src: ["Quran 2:2", "Tafsir Ibn Kathir, Ayah 2"] },
        { title: "Imaan sirf zubaan ka nahi", ayahs: [3, 4], fromSurah: "Ayah 3–4 mein imaan ke saath namaz, kharch aur aakhirat ka yaqeen aaya hai. Ibn Kathir mein Imam Tabari ka bayan hai ke imaan zubaan, amal aur aqeede teeno ko shamil hai.", amal: "Apne imaan ko amal se jodein: roz ki namaz aur halal maal mein se kuch na kuch Allah ki raah mein.", src: ["Tafsir Ibn Kathir, Ayah 3 (Meaning of Iman)"] },
        { title: "Gunah ko halka na samjhein", ayahs: [7], fromSurah: "Mujahid ke mutabiq gunah dil par jam kar muhar ban sakta hai (Ibn Kathir).", amal: "Gunah hone par jaldi tauba karein, taake dil par asar jam na ho.", src: ["Tafsir Ibn Kathir, Ayah 7"] }
      ]
    },
    {
      n: 2, from: 8, to: 20, g: 1,
      title: "Munafiqeen: zubaan par imaan, dil mein inkar",
      sub: "Munafiq ki pehchaan, unka fasad aur do misalein",
      heads: ["Meaning of Nifaq", "The Beginning of Hypocrisy", "The Meaning of 'Disease' in this Ayah", "Meaning of Mischief", "The Hypocrites' Cunning and Deceit", "The Example of the Hypocrites", "Another Parable of the Hypocrites"],
      intro: "Ayah 8 se 20 tak teesra giroh aata hai: woh log jo zubaan se imaan ka dawa karte hain magar dil mein inkar rakhte hain. Ibn Kathir ke mutabiq yeh Madinah ka maamla hai.",
      points: [
        { r: [8, 9], h: "‘Hum imaan laaye’ magar haqeeqat mein nahi", t: "Kuch log kehte hain ke hum Allah aur aakhirat par imaan laaye, par woh momin nahi. Woh Allah aur mominon ko dhoka dena chahte hain, haqeeqat mein sirf khud ko dhoka dete hain. Ibn Kathir: Nifaq ka matlab zahir mein mutabiqat dikhana aur burai chhupana hai." },
        { r: [10, 10], h: "Dil ka marz", t: "Unke dilon mein marz hai aur Allah ne unka marz badha diya. Ibn Kathir ne Ibn Abbas, Ibn Mas‘ud aur sahaba se naql kiya ke yahan ‘marz’ ka maana shak hai." },
        { r: [11, 13], h: "‘Hum to islah karne wale hain’", t: "Jab unse kaha jaye zameen mein fasad na karo to kehte hain hum to islah karne wale hain. Allah farmata hai wahi fasad karne wale hain magar shuoor nahi rakhte. Jab kaha jaye jaise log imaan laaye waise imaan lao to kehte hain kya hum bewaqoofon jaisa imaan layein? Ibn Kathir (Ibn Abbas, Ibn Mas‘ud): yahan fasad ka maana kufr aur nafarmani hai." },
        { r: [14, 16], h: "Do chehre", t: "Mominon se milte hain to kehte hain hum imaan laaye, aur apne shaitani saathiyon ke saath akele hote hain to kehte hain hum to mazaak kar rahe the. Allah unhein dheel deta hai aur woh bhatakte rehte hain. Unhon ne hidayat ke badle gumrahi kharidi, to unka sauda ghate ka raha." },
        { r: [17, 20], h: "Do misalein", t: "Pehli misal: ek shakhs ne aag jalayi, roshni hui, phir Allah ne roshni le li aur woh andhere mein reh gaye (ayah 17–18). Doosri misal: baarish, andhere, garaj aur bijli ki, jis se woh darte hain magar Allah unhein gher kar rakhta hai (ayah 19–20). Ibn Kathir ne dono ko munafiqon ki misal batayi." }
      ],
      key: "Imaan wahi hai jo zubaan, dil aur amal teeno mein ek jaisa ho.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 8 se 20", "Quran 2:8–20"],
      samjho: [
        { title: "Nifaq", ayahs: [8, 9], simple: "Nifaq = zahir mein imaan ka izhaar aur andar se inkar ya burai chhupana.", context: "Ayah 8–9 mein munafiq ka dawa aur Allah ki taraf se uski tardeed aayi.", note: "Ibn Kathir: nifaq ki kai qismein hain: aqeede ka nifaq (jo hamesha jahannam ka sabab hai) aur amal ka nifaq (jo bada gunah hai). Ibn Jurayj ke mutabiq munafiq ke amal uske bayan se, aur andar ki baat uski zubaan se alag hoti hai.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 8–9 (Meaning of Nifaq)"] },
        { title: "Fasad (mischief)", ayahs: [11, 12], simple: "Fasad = zameen mein bigaad, jaise nafarmani aur kufr.", context: "Munafiq apne fasad ko ‘islah’ ka naam dete hain.", note: "Ibn Kathir ne Ibn Abbas aur Ibn Mas‘ud ka qaul naql kiya: ‘fasad na karo’ se murad kufr aur gunahon ki nafarmani hai.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 11–12 (Meaning of Mischief)"] },
        { title: "Aag aur baarish ki misal", ayahs: [17, 18, 19, 20], simple: "Roshni milne ke baad bhi aankhein band kar lene wale andhere mein reh jaate hain.", context: "Dono misalein dikhati hain ke hidayat ki roshni milne ke baad bhi inkar ka anjaam andhera hai.", note: "Ibn Kathir ne pehli misal ko aag jalane wale ki misal se samjhaya jis ki roshni achanak bujh gayi aur woh kuch dekh na saka.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 17–18 (The Example of the Hypocrites)"] }
      ],
      lessons: [
        { title: "Dohra chehra na rakhein", ayahs: [14], fromSurah: "Munafiq mominon ke saamne kuch aur, akele mein kuch aur hote hain (ayah 14).", amal: "Jo baat sab ke saamne kahein wohi akele mein bhi nibhayein.", src: ["Quran 2:14", "Tafsir Ibn Kathir, Ayah 14–15"] },
        { title: "Apne aap ko ‘islah-pasand’ kehna kaafi nahi", ayahs: [11, 12], fromSurah: "Fasad karne wale khud ko mussalih kehte hain, magar Allah unhein fasadi kehta hai.", amal: "Apni neeyat aur kaam ko Quran ke maiyaar par jaanchein.", src: ["Quran 2:11–12"] },
        { title: "Hidayat ki qadar karein", ayahs: [16, 17], fromSurah: "Hidayat ke badle gumrahi khareedna ghate ka sauda kaha gaya, aur aag ki roshni bujhne ki misal di gayi.", amal: "Jo ilm aur hidayat mili hai uspar amal karke usay barqarar rakhein.", src: ["Quran 2:16–17", "Tafsir Ibn Kathir, Ayah 16–18"] }
      ]
    },
    {
      n: 3, from: 21, to: 29, g: 1,
      title: "Sab insaanon ko ibadat ki dawat",
      sub: "Tawhid, Quran ka challenge, jannat ki khushkhabri aur Allah ki qudrat",
      heads: ["Tawhid Al-Uluhiyyah", "Signs of Allah's Existence", "The Challenge", "Rewards of Righteous Believers", "A Parable about the Life of This World", "Evidence of Allah's Ability"],
      intro: "Teen giroh ke zikr ke baad ab Allah saare insaanon ko mukhatib karta hai: apne Rabb ki ibadat karo, Quran par shak ho to uska jawab lao, aur Allah ki qudrat ki nishaniyon par ghaur karo.",
      points: [
        { r: [21, 22], h: "‘Apne Rabb ki ibadat karo’", t: "Ae logo, apne Rabb ki ibadat karo jisne tumhein aur tumse pehle walon ko paida kiya, taake tum taqwa wale bano. Usne zameen ko bichhauna, aasman ko chhat banaya aur baarish se phal nikale, isliye Allah ka shareek na banao. Ibn Kathir ka unwan: Tawhid Al-Uluhiyyah." },
        { r: [23, 24], h: "Quran ka challenge", t: "Agar tumhein is Quran mein shak hai to isi jaisi ek surah le aao, aur apne madadgaron ko bhi bula lo. Na laa sako ge aur kabhi laa nahi sakte, to us aag se daro jis ka indhan insaan aur patthar hain. Ibn Kathir ne isi tarah ke challenge 28:49 aur 17:88 mein bhi bataye." },
        { r: [25, 25], h: "Imaan walon ki khushkhabri", t: "Imaan laane aur nek amal karne walon ke liye aise baagh hain jin ke neeche nehrein behti hain. Jab bhi phal milega kahenge yeh to pehle mila tha, magar milta julta hoga. Unke liye pakeeza saathi hain aur woh hamesha wahin rahenge." },
        { r: [26, 27], h: "Machhar ki misal", t: "Allah machhar jaisi ya usse bhi chhoti misal dene se nahi sharmata. Momin ise apne Rabb ki taraf se haq jaante hain, jabke kafir kehte hain isse Allah ka kya maqsad? Isse bahut se log gumrah hote aur bahut se hidayat paate hain, aur Allah sirf nafarmanon ko gumrah karta hai jo ahd todte hain." },
        { r: [28, 29], h: "Zindagi, maut aur aasmaan-zameen", t: "Tum Allah ka inkar kaise karte ho jabke tum be-jaan the to usne tumhein zindagi di, phir maut dega, phir zinda karega, phir usi ki taraf lautaye jaoge. Zameen ki saari cheezein tumhare liye paida ki aur saat aasmaan banaye." }
      ],
      key: "Allah ki neamaton ko dekhna ibadat aur shirk se bachne ki dawat hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 21 se 29", "Quran 2:21–29"],
      samjho: [
        { title: "Tawhid-ul-Uluhiyyah", ayahs: [21, 22], simple: "Ibadat ka haqdar sirf Allah hai, isliye uske saath kisi ko shareek nahi karna.", context: "Ayah 21–22 mein Allah ne apni neamaton ko ibadat ki dalil banaya.", note: "Ibn Kathir: Allah ne apni Oneness in divinity ka zikr kiya aur batata hai ke usne bandon ko wujood bakhsha, zameen ko bistar jaisa aaram-deh aur pahaadon se mazboot banaya, aasman ko chhat banaya.", refs: [[28, 49], [17, 88]], src: ["Tafsir Ibn Kathir, Ayah 21–22 (Tawhid Al-Uluhiyyah)"] },
        { title: "Quran ka challenge", ayahs: [23, 24], simple: "Challenge yeh hai ke Quran jaisi ek surah banakar dikhao.", context: "Ayah 23–24 mein Quran par shak karne walon ko seedha jawab diya gaya.", note: "Ibn Kathir ne ‘The Challenge’ ke unwan mein dikhaya ke Quran mein yeh challenge kai jagah aaya hai, jaise 28:49 aur 17:88.", refs: [[28, 49], [17, 88]], src: ["Tafsir Ibn Kathir, Ayah 23–24 (The Challenge)"] },
        { title: "Machhar ki misal", ayahs: [26], simple: "Allah haq samjhane ke liye chhoti cheezon ki bhi misal deta hai.", context: "Kafir isi par aitraz karte hain, momin ise haq maante hain.", note: "Ibn Kathir: Ar-Rabi‘ bin Anas ne kaha ke yeh dunya ki misal hai: machhar jab tak khaata hai jeeta hai, aur jab mota ho jata hai to mar jata hai.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 26 (A Parable about the Life of This World)"] }
      ],
      lessons: [
        { title: "Neamaton ko dekh kar shukr aur tawhid", ayahs: [21, 22], fromSurah: "Zameen, aasman, baarish aur rizq Allah ki neamatein hain, isliye uske siwa kisi ki ibadat nahi.", amal: "Rozana ek neamat par ghaur karke zubaan se shukr ada karein.", src: ["Quran 2:21–22", "Tafsir Ibn Kathir, Ayah 21–22"] },
        { title: "Misal par aitraz se pehle samjhein", ayahs: [26], fromSurah: "Momin misal ko haq maante hain, jabke inkar karne wale sirf aitraz karte hain.", amal: "Jo baat samajh na aaye pehle seekhne ki neeyat se poochein.", src: ["Quran 2:26"] },
        { title: "Dobara zinda hone ka yaqeen", ayahs: [28], fromSurah: "Jis ne pehli baar zindagi di wohi dobara zinda karega.", amal: "Aakhirat ko yaad rakhkar rozana ka hisaab-kitaab khud karein.", src: ["Quran 2:28", "Tafsir Ibn Kathir, Ayah 28"] }
      ]
    },
    {
      n: 4, from: 30, to: 39, g: 1,
      title: "Hazrat Adam (A.S.) aur khilafat",
      sub: "Zameen par khalifa, ilm ki fazilat, sajda, jannat aur tauba",
      heads: ["Adam and His Children inhabited the Earth, Generation after Generation", "The Obligation of appointing a Khalifah and some related Issues", "The Virtue of Adam over the Angels", "Honoring Adam when the Angels prostrated before Him", "Adam repents and supplicates to Allah"],
      intro: "Hazrat Adam (A.S.) ka waqia insaan ki shuruaat, uski izzat aur uski kamzori, teeno batata hai. Is mein ilm, takabbur, galti aur tauba sab ka sabaq hai.",
      points: [
        { r: [30, 30], h: "Zameen par khalifa", t: "Allah ne farishton se farmaya ke main zameen mein ek khalifa banane wala hoon. Farishton ne poocha kya aisa banayega jo fasad aur khoon-reziz karega? Allah ne farmaya main woh jaanta hoon jo tum nahi jaante. Ibn Kathir ka unwan: Adam aur unki aulad nasl-dar-nasl zameen par aabad hui." },
        { r: [31, 33], h: "Adam ko ilm ki fazilat", t: "Allah ne Adam ko cheezon ke naam sikhaye, phir unhein farishton ke saamne rakha. Farishton ne kaha pak hai Tu, humein sirf wohi aata hai jo Tune sikhaya. Adam ne unhein naam bataye. Ibn Kathir ke unwan: The Virtue of Adam over the Angels." },
        { r: [34, 34], h: "Sajda aur Iblees ka inkar", t: "Farishton ko Adam ko sajda karne ka hukm hua. Sab ne sajda kiya siwaye Iblees ke, jis ne inkar kiya, takabbur kiya aur kafiron mein se ho gaya. Ibn Kathir: Qatadah ke mutabiq ita‘at Allah ki thi aur sajda Adam ke saamne, Allah ne Adam ko izzat di." },
        { r: [35, 36], h: "Jannat aur Shaitan ka phislana", t: "Adam aur unki biwi ko jannat mein rehne aur har jagah se khane ki ijazat mili, siwa ek darakht ke paas jaane ke. Shaitan ne unhein phislaya aur woh jannat se nikle. Allah ne zameen par utarne ka hukm diya jahan kuch muddat rehna aur faida uthana hai." },
        { r: [37, 37], h: "Adam ki tauba", t: "Adam ne apne Rabb se kuch kalimaat paye aur Allah ne unki tauba qubool ki. Ibn Kathir: kai tabi‘een ne in kalimaat ko 7:23 ki dua se samjha: “Humne apne aap par zulm kiya...”." },
        { r: [38, 39], h: "Hidayat ka wada", t: "Allah ne farmaya jab meri taraf se hidayat aaye to jo uski pairwi karega usko na khauf na gham hoga. Jo inkar karenge aur meri ayat jhutlayenge woh jahannam wale hain, hamesha usi mein." }
      ],
      key: "Insaan ki shuruaat ilm aur izzat se hui; galti ka ilaaj tauba hai, takabbur nahi.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 30 se 39", "Quran 2:30–39"],
      samjho: [
        { title: "Khalifa", ayahs: [30], simple: "Khalifa = woh jo zameen ke intizam mein Allah ke hukm ke mutabiq zimmedari nibhaye.", context: "Allah ne Adam aur unki aulad ko zameen par nasl-dar-nasl bashinda banane ka elaan kiya.", note: "Ibn Kathir (Qurtubi wagairah ke hawale se): khalifa muqarrar karna zaroori hai taake jhagdon ka faisla ho, mazloom ki madad ho, hudood nafiz hon aur burai se roka jaye.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 30"] },
        { title: "Adam ka ilm", ayahs: [31, 32, 33], simple: "Adam ko cheezon ke naam sikhaye gaye jo farishton ke paas us waqt nahi the.", context: "Isi se Adam ki fazilat ilm ki wajah se zahir hui.", note: "Ibn Kathir ka unwan: Adam ki ilm ki fazilat saamne aayi.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 31–33"] },
        { title: "Tauba ke kalimaat", ayahs: [37], simple: "Adam ne Allah se kalimaat seekhe aur tauba ki, Allah ne qubool farmayi.", context: "Ayah 37 mein sirf itna hai ke Adam ne kalimaat paye.", note: "Ibn Kathir ke mutabiq Mujahid, Sa‘id bin Jubayr, Abu al-‘Aliyah, Qatadah wagairah ne in kalimaat ko 7:23 se jodha.", refs: [[7, 23]], src: ["Tafsir Ibn Kathir, Ayah 37"] }
      ],
      lessons: [
        { title: "Ilm insaan ki fazilat hai", ayahs: [31, 32, 33], fromSurah: "Adam ki fazilat ilm ki wajah se zahir hui.", amal: "Roz thoda deeni ilm seekhein.", src: ["Quran 2:31–33", "Tafsir Ibn Kathir, Ayah 31–33"] },
        { title: "Takabbur se bachein", ayahs: [34], fromSurah: "Iblees ne hukm ke saamne inkar aur takabbur kiya.", amal: "Jab haq saamne aaye to ana chhod kar maan lein.", src: ["Quran 2:34"] },
        { title: "Galti ho to tauba mein der na karein", ayahs: [37], fromSurah: "Adam ne Rabb se kalimaat paye aur tauba ki; Allah ne maaf kiya.", amal: "Galti hone par jaldi istighfar karein aur sudhar ka irada rakhein.", src: ["Quran 2:37", "Tafsir Ibn Kathir, Ayah 37"] }
      ]
    },
    {
      n: 5, from: 40, to: 46, g: 2,
      title: "Bani Israel ko dawat: ahd poora karo",
      sub: "Neamat yaad karo, haq mat chhupao, sabr aur namaz",
      heads: ["Allah's Blessings for the Children of Israel", "The Prohibition of hiding the Truth and distorting It with Falsehood", "The Support that comes with Patience and Prayer"],
      intro: "Ayah 40 se Allah Bani Israel se khitab karta hai. Ma‘ariful Quran ke mutabiq yeh khitab ayat 40 se 123 tak chalta hai.",
      points: [
        { r: [40, 41], h: "Neamat aur ahd", t: "Meri neamat yaad karo aur mera ahd poora karo, main tumhara ahd poora karunga, aur sirf mujh se daro. Us par imaan lao jo maine utara (Quran) jo tumhari kitab ki tasdeeq karta hai, aur sab se pehle inkar karne wale na bano. Ibn Kathir: Mujahid ne Allah ki neamat mein paani ka patthar se nikalna, mann-o-salwa aur Firaun se nijat ginwai." },
        { r: [42, 43], h: "Haq ko batil se na milao", t: "Haq ko batil ke saath na milao aur jaante hue haq na chhupao. Namaz qaim karo, zakat do aur ruku karne walon ke saath ruku karo. Ibn Kathir ka unwan: haq chhupane aur use batil se milane ki mumaniat." },
        { r: [44, 44], h: "Doosron ko neki, khud ko bhool", t: "Kya tum logon ko neki ka hukm dete ho aur apne aap ko bhool jaate ho, halanke tum kitab padhte ho? Kya tum samajhte nahi? Ibn Kathir ka unwan: doosron ko neki ka hukm dena aur khud use nazar-andaz karna qabil-e-mazammat hai." },
        { r: [45, 46], h: "Sabr aur namaz se madad", t: "Sabr aur namaz se madad maango, aur namaz bhaari hai magar khushu karne walon par nahi, jo yaqeen rakhte hain ke Rabb se milna hai aur usi ki taraf lautna hai. Ibn Kathir: Muqatil bin Hayyan ke mutabiq yahan sabr ka maana roza bhi liya gaya." }
      ],
      key: "Jo neki ka paigham do, khud us par amal bhi karo.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 40 se 46", "Ma‘ariful Quran, Ayah 40 (quran.com par search-snippet dekha gaya)", "Quran 2:40–46"],
      samjho: [
        { title: "Ahd (covenant)", ayahs: [40], simple: "Ahd = woh waada jo Allah aur banda ek doosre se karte hain.", context: "Ayah 40: Allah kehta hai tum mera ahd poora karo, main tumhara poora karunga.", note: "Ibn Kathir ne yahan Allah ki neamaton ki misalein dein (Mujahid, Abu al-‘Aliyah ke aqwal) jo Bani Israel ko yaad dilayi gayi.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 40–41"] },
        { title: "Haq chhupana", ayahs: [42], simple: "Jaan-boojh kar sach chhupana ya sach mein jhoot milana.", context: "Ayah 42 mein dono se roka gaya.", note: "Ibn Kathir ka unwan: haq chhupane aur use batil se milane ki mumaniat.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 42–43"] },
        { title: "Sabr aur namaz", ayahs: [45, 46], simple: "Mushkil mein sabr aur namaz ko madad ka zariya banana.", context: "Namaz ko khushu walon ke siwa doosron par bhaari bataya gaya.", note: "Ibn Kathir: Muqatil bin Hayyan ne kaha sabr se murad roza bhi hai, aur isi wajah se Ramadan ko sabr ka mahina kaha gaya.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 45–46"] }
      ],
      lessons: [
        { title: "Jo kehte ho woh karo", ayahs: [44], fromSurah: "Doosron ko neki ka hukm dena aur khud bhoolna sakht mazammat ke qabil bataya gaya.", amal: "Jis neki ki tarf bulayein, pehle khud us par amal karein.", src: ["Quran 2:44", "Tafsir Ibn Kathir, Ayah 44"] },
        { title: "Haq ko na chhupayein, na milayein", ayahs: [42], fromSurah: "Sach ko jhoot ke saath milana aur jaante hue chhupana mana hai.", amal: "Jab sach pata ho to saaf aur seedhi baat kahein.", src: ["Quran 2:42"] },
        { title: "Mushkil mein sabr aur namaz", ayahs: [45], fromSurah: "Sabr aur namaz ko madad ka zariya bataya gaya.", amal: "Pareshani mein pehle wudu karke do rakat namaz parh kar Allah se dua karein.", src: ["Quran 2:45", "Tafsir Ibn Kathir, Ayah 45–46"] }
      ]
    },
    {
      n: 6, from: 47, to: 62, g: 2,
      title: "Allah ke ehsanaat aur Bani Israel ki nafarmaniyan",
      sub: "Firaun se nijat, bachhra, mann-o-salwa, paani, aur imaan ka maiyaar",
      heads: ["The Ummah of Muhammad (ﷺ) is Better than the Children of Israel", "The Children of Israel worshipped the Calf", "The Shade, the Manna and the Quail", "Twelve Springs gush forth", "Covering the Jews in Humiliation and Misery", "Faith and doing Righteous Deeds equals Salvation in all Times"],
      intro: "Yahan Allah Bani Israel ko unki tareekh ke waqiaat yaad dilata hai: kaise Allah ne ehsan kiye aur kaise unhon ne baar baar nafarmani ki.",
      points: [
        { r: [47, 48], h: "Neamat aur Qayamat ka din", t: "Meri neamat yaad karo aur yeh ke maine tumhein ‘aalameen’ par fazilat di. Us din se daro jab koi kisi ke kaam na aayega, na sifarish, na fidya qubool hoga." },
        { r: [49, 50], h: "Firaun se nijat", t: "Hum ne tumhein Firaun ki qaum se nijat di jo tumhein sakht azaab dete the, aur samundar phaadkar tumhein bachaya aur Firaun ki qaum ko doobo diya jabke tum dekh rahe the." },
        { r: [51, 54], h: "Bachhra aur tauba", t: "Musa (A.S.) ke saath chalis raatein ka wada hua, uske baad tumne bachhre ko maabood bana liya. Phir Allah ne maaf kiya aur Kitab aur Furqan di. Musa ne apni qaum se kaha tauba karo; Ibn Kathir ka unwan: Bani Israel ne tauba mein ek doosre ko qatl kiya." },
        { r: [55, 57], h: "Bijli, mann aur salwa", t: "Tumne kaha jab tak Allah ko khule aam na dekh lein imaan nahi layenge, to bijli ne tumhein pakda, phir Allah ne uthaya. Phir badalon ka saaya, mann aur salwa diya. Ibn Kathir ka unwan: The Shade, the Manna and the Quail." },
        { r: [58, 61], h: "Shehar, paani aur khane ki shikayat", t: "Shehar mein jhuk kar dakhil hone ka hukm hua magar unhon ne baat badal di (58–59). Musa ne paani manga to 12 chashme phoote (60). Phir ek tarah ke khane se tang aakar doosri cheezein maangi; unpar zillat aur miskeeni daal di gayi (61)." },
        { r: [62, 62], h: "Imaan aur amal ka maiyaar", t: "Jo imaan laaye, jo Yahood, Nasara aur Sabi‘een mein se Allah aur aakhirat par imaan laye aur nek amal kare, unka ajr Rabb ke paas hai. Ibn Kathir: pichli ummaton ke nek logon ko unke amal ka sila mila, aur ab jo ummi Rasool ﷺ ki pairwi kare wohi sachi kamyabi paayega." }
      ],
      key: "Allah ki neamaton ka sahi jawab shukr aur ita‘at hai, shikayat aur nafarmani nahi.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 47 se 62", "Quran 2:47–62"],
      samjho: [
        { title: "‘Aalameen’ par fazilat", ayahs: [47, 122], simple: "Bani Israel ko unke zamane ki qaumon par fazilat di gayi.", context: "Yehi yaad-dehani ayah 122 mein dobara aati hai.", note: "Ibn Kathir ka unwan: Muhammad ﷺ ki ummat Bani Israel se behtar hai.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 47"] },
        { title: "Imaan aur amal-e-saleh", ayahs: [62], simple: "Allah ke nazdeek nijat imaan aur nek amal par hai, sirf naam ya nasal par nahi.", context: "Ayah 62 mein Allah aur aakhirat par imaan aur nek amal ki shart aayi.", note: "Ibn Kathir ka unwan: Faith and doing Righteous Deeds equals Salvation in all Times. Unke mutabiq jo ummi Nabi ﷺ ki pairwi kare use hamesha ki khushi milegi.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 62"] }
      ],
      lessons: [
        { title: "Neamat par shukr, shikayat nahi", ayahs: [57, 61], fromSurah: "Mann aur salwa milne ke baad bhi doosri cheezon ki maang aur shikayat ka zikr hai.", amal: "Jo mila usspar shukr karein, jo nahi mila uski shikayat kam karein.", src: ["Quran 2:57, 61", "Tafsir Ibn Kathir, Ayah 57, 61"] },
        { title: "Hukm ko badalna nahi", ayahs: [58, 59], fromSurah: "Hukm milne par unhon ne baat badal di aur azaab ke mustahiq huye.", amal: "Allah aur rasool ka hukm jaisa hai waisa hi maanein.", src: ["Quran 2:58–59"] },
        { title: "Naam nahi, amal", ayahs: [62], fromSurah: "Nijat ka maiyaar imaan aur nek amal hai.", amal: "Sirf pehchaan par nahi, imaan aur amal par bharosa rakhein.", src: ["Quran 2:62", "Tafsir Ibn Kathir, Ayah 62"] }
      ]
    },
    {
      n: 7, from: 63, to: 74, g: 2,
      title: "Ahd, Sabt aur Gaay ka waqia",
      sub: "Tur ka ahd, Sabt ki hurmat, gaay ka hukm aur dilon ki sakhti",
      heads: ["Taking the Covenant from the Jews", "The Jews breach the Sanctity of the Sabbath", "The Story of the murdered Israeli Man and the Cow", "Bringing the murdered Man back to Life", "The Harshness of the Jews"],
      intro: "Yeh hissa Bani Israel ke ahd todne aur hukm ko taalne ke waqiaat ka hai. Surah ka naam isi hisse ke Gaay (Baqarah) ke waqiye se hai.",
      points: [
        { r: [63, 64], h: "Tur ka ahd", t: "Jab hum ne tumse ahd liya aur Tur ko tumhare upar uthaya ke jo diya hai usko mazbooti se thamo. Phir tum phir gaye, agar Allah ka fazl aur rehmat na hoti to tum nuqsan mein hote." },
        { r: [65, 66], h: "Sabt ki hurmat", t: "Tum mein se jinhon ne Sabt ke baare mein had se tajawuz kiya unse kaha gaya zaleel bandar ban jao. Isse unke liye aur baad walon ke liye ibrat aur muttaqeen ke liye naseehat bani." },
        { r: [67, 71], h: "Gaay ka hukm", t: "Musa (A.S.) ne qaum se kaha Allah tumhein gaay zibah karne ka hukm deta hai. Unhon ne mazaak samjha, phir baar baar sawal kiye (kaunsi, kaisi, kis rang ki) aur bahut mushkil se hukm par amal kiya." },
        { r: [72, 73], h: "Murda zinda hua", t: "Ek qatl par jhagda hua to Allah ne gaay ke ek hisse se maqtool ko maarne ka hukm diya. Allah murdon ko isi tarah zinda karta hai aur apni nishaniyan dikhata hai. Ibn Kathir ka unwan: Bringing the murdered Man back to Life." },
        { r: [74, 74], h: "Dilon ki sakhti", t: "Is ke baad bhi tumhare dil sakht ho gaye, patthar jaise ya usse bhi sakht; kuch patthar aise hain jin se nehrein phoot nikalti hain aur kuch Allah ke khauf se gir padte hain. Allah tumhare amal se be-khabar nahi." }
      ],
      key: "Hukm samajh aane ke baad bahane aur sawal pe sawal karne se behtar hai seedha amal.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 63 se 74", "Quran 2:63–74"],
      samjho: [
        { title: "Mithaq (pakka ahd)", ayahs: [63, 64], simple: "Mithaq = woh pakka ahd jo Allah ne unse liya.", context: "Ayah 63 mein ahd aur uski taakeed ka zikr hai.", note: "Ibn Kathir ka unwan: Taking the Covenant from the Jews.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 63–64"] },
        { title: "Dilon ki sakhti", ayahs: [74], simple: "Nishaniyan dekh kar bhi dil na pighle to woh patthar jaise ho jaate hain.", context: "Ayah 74 mein patthar ki misal di gayi.", note: "Ibn Kathir: Bani Israel ne bade nishaan aur murde ko zinda hona bhi dekha, phir bhi dil sakht rahe, isi liye Allah ne mominon ko un jaisa banne se roka (57:16).", refs: [[57, 16]], src: ["Tafsir Ibn Kathir, Ayah 74 (The Harshness of the Jews)"] }
      ],
      lessons: [
        { title: "Hukm par seedha amal", ayahs: [67, 71], fromSurah: "Gaay ke hukm par sawal pe sawal ke baad bhi amal mushkil se hua.", amal: "Jab Allah ya rasool ka saaf hukm ho to bahana nikalne ke bajaye amal shuru karein.", src: ["Quran 2:67–71"] },
        { title: "Allah ki hurmat ka lihaaz", ayahs: [65], fromSurah: "Sabt ki hurmat todne walon ko ibrat banaya gaya.", amal: "Allah ki bataayi hui hadon ko halka na samjhein.", src: ["Quran 2:65–66", "Tafsir Ibn Kathir, Ayah 65–66"] },
        { title: "Dil narm rakhein", ayahs: [74], fromSurah: "Nishaniyan dekh kar bhi sakht dil walon ki misal di gayi.", amal: "Quran ki tilawat aur maut ko yaad karke dil narm rakhein.", src: ["Quran 2:74", "Tafsir Ibn Kathir, Ayah 74"] }
      ]
    },
    {
      n: 8, from: 75, to: 93, g: 2,
      title: "Kitab mein tabdeeli aur ahd shikni",
      sub: "Haq jaan kar inkar, ahd ki sharait, aur rasoolon ki mukhalifat",
      heads: ["The Meaning of 'Ummi'", "When Small Sins gather, They bring about Destruction", "The Terms of the Covenant and their Breach of It", "The Arrogance of the Jews who denied and killed Their Prophets", "Although The Jews denied the Truth, They claimed to be Believers!"],
      intro: "Is hisse mein Ahl-e-Kitab ke ek giroh ke baare mein bataya gaya hai ke unhon ne Allah ke kalaam ke saath kya kiya aur haq ka saamna karne par kya rawaiya rakha.",
      points: [
        { r: [75, 77], h: "Kalaam mein tabdeeli", t: "Kya tum ummeed rakhte ho ke woh tumhare liye imaan layenge, jabke unmein ek giroh Allah ka kalaam sunta, samajhne ke baad jaan-boojh kar badal deta tha? Mominon se milte to ‘imaan laye’ kehte, akele mein ek doosre ko rokte." },
        { r: [78, 79], h: "Ummi aur likhne wale", t: "Kuch ummi hain jo kitab ka ilm nahi rakhte, sirf aarzuein; aur woh jo apne haathon se likh kar kehte hain yeh Allah ki taraf se hai taake thodi qeemat lein. Unke liye halakat hai." },
        { r: [80, 82], h: "‘Aag sirf chand din’", t: "Woh kehte hain aag hamein sirf gine chand din chhoogi. Kaho kya Allah se ahd liya? Jisne gunah kamaya aur gunah ne use gher liya woh jahannam wala hai; aur imaan wale nek amal karne walon ke liye jannat hai. Ibn Kathir ka unwan: chhote gunah jama hokar halakat laate hain." },
        { r: [83, 86], h: "Ahd ki sharait aur uska tornaa", t: "Ahd tha: sirf Allah ki ibadat, walidain, rishtedaron, yatimon aur miskeenon se ehsan, logon se achhi baat, namaz, zakat. Phir tum phir gaye. Aur ahd tha ke khoon na bahao aur ek doosre ko gharon se na nikalo, phir bhi tumne kitab ke ek hisse par imaan rakha aur ek ka inkar kiya." },
        { r: [87, 87], h: "Rasoolon ki mukhalifat", t: "Musa ko kitab di, unke baad rasool bheje, Isa ko nishaniyan di aur Ruh-ul-Qudus se madad ki. Jab bhi koi rasool tumhari khwahish ke khilaf aaya to takabbur kiya: kuch ko jhutlaya, kuch ko qatl kiya. Ibn Kathir: Ruh-ul-Qudus se murad Jibreel (A.S.) hain." },
        { r: [88, 93], h: "Haq jaan kar inkar", t: "‘Hamare dil ghilaaf mein hain’ kehne walon par Allah ki laanat. Jab Quran aaya jo unki kitab ki tasdeeq karta hai to jaante hue inkar kiya (89). Kehte the jo humpar utra uspar imaan hai, jabke ahd todte rahe, Tur ka ahd aur bachhre ki muhabbat ka zikr (91–93). Ibn Kathir ka unwan: unhon ne haq jhutlaya aur khud ko mominon mein ginte rahe." }
      ],
      key: "Kitab ke ek hisse par imaan aur ek ka inkar sachcha imaan nahi.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 75 se 93", "Quran 2:75–93"],
      samjho: [
        { title: "Ruh-ul-Qudus", ayahs: [87], simple: "Ayah 87 mein Isa (A.S.) ko Ruh-ul-Qudus se madad dene ka zikr hai.", context: "Yeh Allah ki madad ke zikr mein aaya.", note: "Ibn Kathir ka unwan: Jibril is Ruh Al-Qudus.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 87"] },
        { title: "Gunah ka gher lena", ayahs: [81, 82], simple: "Ayah 81 mein gunah ke ‘gher lene’ ka zikr hai.", context: "Iske muqable mein imaan aur nek amal walon ka anjaam aayi hai (ayah 82).", note: "Ibn Kathir ke is hisse ka ek unwan: When Small Sins gather, They bring about Destruction.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 81–82"] }
      ],
      lessons: [
        { title: "Quran ko pura maanein", ayahs: [85], fromSurah: "Kitab ke ek hisse par imaan aur doosre ka inkar kehna sahi nahi.", amal: "Jo ahkam aasaan lagte hain unhi par nahi, sab par amal ki koshish karein.", src: ["Quran 2:85", "Tafsir Ibn Kathir, Ayah 84–86"] },
        { title: "Haq jaan kar inkar na karein", ayahs: [89], fromSurah: "Haq ko pehchan kar inkar karne par sakht tanbih hui.", amal: "Haq samajh aa jaye to ana ya hasad chhod kar qubool karein.", src: ["Quran 2:89"] },
        { title: "Naam par bharosa nahi", ayahs: [80, 81], fromSurah: "‘Aag chand din’ ka dawa Allah ke ahd ke bina rad hua.", amal: "Sirf umeed par nahi, amal par bharosa rakhein.", src: ["Quran 2:80–82"] }
      ]
    },
    {
      n: 9, from: 94, to: 103, g: 2,
      title: "Maut ki tamanna, Jibreel aur jadu",
      sub: "Aakhirat ka dawa, Jibreel se dushmani aur Harut-Marut ki aazmaish",
      heads: ["Calling the Jews to invoke Allah to destroy the Unjust Party", "Disbelievers wish They could live longer", "The Jews are the Enemies of Jibril", "Proofs of Muhammad's (ﷺ) Prophethood", "The Jews abandoned the Book of Allah and practiced Magic", "Learning Magic is Kufr"],
      intro: "Yahan unke ek dawe ka imtihan liya gaya, phir Jibreel (A.S.) se dushmani ka zikr aur jadu ke baare mein bayan aaya.",
      points: [
        { r: [94, 96], h: "Maut ki tamanna ka challenge", t: "Agar aakhirat ka ghar Allah ke paas sirf tumhare liye hai to maut ki tamanna karo, agar sachche ho. Woh apne kiye hue amal ki wajah se kabhi tamanna na karenge; balke zindagi ke sab se zyada hirees rakhte hain. Ibn Kathir ka unwan: Disbelievers wish They could live longer." },
        { r: [97, 98], h: "Jibreel ka dushman", t: "Jo Jibreel ka dushman ho (usne Quran tumhare dil par Allah ke hukm se utara) to Allah farishton, rasoolon, Jibreel aur Meekaeel ka dushman hai aur Allah kafiron ka dushman hai." },
        { r: [99, 101], h: "Wazeh nishaniyan aur ahd", t: "Hum ne tumhari taraf saaf ayat utari, unka inkar sirf nafarman karte hain. Har baar ahd karte, ek giroh use phenk deta. Jab Allah ka rasool aaya to Ahl-e-Kitab ke ek giroh ne Allah ki kitab peeche phenk di." },
        { r: [102, 103], h: "Jadu aur imtihan", t: "Unhon ne wo (jadu) pairwi ki jo shayateen Sulaiman ke zamane mein parhte the. Babil mein do farishton Harut aur Marut par jo utra woh aazmaish tha, woh kehte ‘hum aazmaish hain, kufr na karo’. Allah ke izn ke bina koi nuqsan nahi pahunchata. Agar imaan aur taqwa hota to Allah ka sawab behtar tha." }
      ],
      key: "Aakhirat ke dawe amal se saabit hote hain, aur ghaib ke ilm ke naam par jadu se door rehna chahiye.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 94 se 103", "Quran 2:94–103"],
      samjho: [
        { title: "Maut ki tamanna", ayahs: [94, 95], simple: "Agar aakhirat unke liye pakki hoti to maut se dar nahi hota.", context: "Ayah 94–95 mein un ke dawe ka imtihan aaya.", note: "Ibn Kathir ka unwan: Calling the Jews to invoke Allah to destroy the Unjust Party.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 94–96"] },
        { title: "Jadu aur kufr", ayahs: [102], simple: "Jadu sikhna Allah ki aazmaish mein dalne wali baat hai.", context: "Ayah 102 mein do farishton ka kehna: hum to aazmaish hain, kufr na karo.", note: "Ibn Kathir ka unwan: Learning Magic is Kufr.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 99–103"] }
      ],
      lessons: [
        { title: "Aakhirat ke liye tayyari", ayahs: [94, 95], fromSurah: "Jo log aakhirat ke dawedar the unse maut ki tamanna ko kaha gaya.", amal: "Maut ke baad ki tayyari ke liye amal-e-saleh barhayein.", src: ["Quran 2:94–95"] },
        { title: "Jadu-tona aur ghaib ke daawon se door", ayahs: [102], fromSurah: "Jadu Allah ke izn ke bina nuqsan nahi deta, aur isse bachna imaan aur taqwa ka taqaza hai.", amal: "Jadu, taweez aur ghaib ki khabron ke peeche na bhaagein.", src: ["Quran 2:102–103", "Tafsir Ibn Kathir, Ayah 102"] },
        { title: "Ahd ki paasdari", ayahs: [100], fromSurah: "Har ahd par ek giroh ne use phenk diya.", amal: "Jo waada karein use nibhayein.", src: ["Quran 2:100"] }
      ]
    },
    {
      n: 10, from: 104, to: 123, g: 2,
      title: "Adab, naskh aur Ahl-e-Kitab ki khwahishein",
      sub: "Baat karne ka adab, hukm ki tabdeeli, jannat ke dawe aur Allah ki shan",
      heads: ["Manners in Speech", "The Meaning of Naskh", "The Prohibition of Unnecessary Questions", "The Prohibition of following the Ways of the People of the Book", "The Encouragement to perform Good Deeds", "Refuting the Claim that Allah has begotten a Son", "The Meaning of Correct Tilawah"],
      intro: "Ab mominon ko bhi khitab hai: baat karne ka adab, Allah ke ahkam par bharosa, aur Ahl-e-Kitab ki khwahishon se hoshiyar rehna.",
      points: [
        { r: [104, 105], h: "Adab-e-guftagu", t: "Ae imaan walo, ‘Raina’ na kaho balke ‘Unzurna’ kaho aur suno. Kafiron ke liye dardnaak azaab hai. Ahl-e-Kitab aur mushrikeen nahi chahte ke tumpar tumhare Rabb ki taraf se koi bhalai utre; Allah jise chahe apni rehmat se khaas karta hai. Ibn Kathir ka unwan: Manners in Speech." },
        { r: [106, 108], h: "Naskh aur sawal", t: "Jo ayat hum mansookh karein ya bhulwa dein, usse behtar ya usi jaisi laate hain. Allah har cheez par qadir hai (106–107). Apne Rasool se woh sawal na karo jo pehle Musa se kiye gaye. Jo imaan ko kufr se badle woh seedhe raaste se bhatak gaya (108)." },
        { r: [109, 110], h: "Maaf karo aur nek kaam karo", t: "Bahut se Ahl-e-Kitab hasad ki wajah se chahte hain ke tumhein imaan ke baad kafir bana dein. Tum maaf karo aur dar guzar karo, namaz qaim karo, zakat do; jo bhalai aage bhejoge Allah ke paas paoge." },
        { r: [111, 113], h: "Jannat ka dawa", t: "Kehte hain jannat mein sirf Yahoodi ya Nasrani jayenge. Kaho dalil lao agar sachche ho. Haan, jo Allah ke aage sar jhukaye aur ehsan karne wala ho uska ajr Rabb ke paas hai. Ibn Kathir: Yahood aur Nasara aapas mein bhi zid ki wajah se ikhtilaf karte hain." },
        { r: [114, 115], h: "Masjid aur Allah ki taraf rukh", t: "Un se bada zalim kaun jo Allah ki masjidon mein uska naam lene se roke aur unki barbaadi ki koshish kare (114). Mashriq-maghrib Allah ka hai; jidhar rukh karo Allah ki taraf hai (115)." },
        { r: [116, 118], h: "Allah ki shan", t: "Kehte hain Allah ne beta banaya, woh paak hai; aasman-zameen ki har cheez usi ki hai aur sab uske farmanbardar. Woh naye sire se paida karne wala hai, jab kuch tay kare to ‘ho jaa’ kehta hai aur ho jata hai (116–117). Be-ilm kehte hain Allah humse kalaam kyun nahi karta (118)." },
        { r: [119, 121], h: "Rasool ki bi‘sat aur haq ki tilawat", t: "Allah ne tumhein haq ke saath khushkhabri dene wala aur daraane wala banakar bheja (119). Yahood aur Nasara tumse tab tak raazi na honge jab tak unki millat na manoge; kaho Allah ki hidayat hi asal hidayat hai (120). Jinhein kitab di, jo uski haqq-e-tilawat se tilawat karte hain wohi us par imaan rakhte hain (121). Ibn Kathir ka unwan: The Meaning of Correct Tilawah." },
        { r: [122, 123], h: "Dobara yaad-dehani", t: "Ae Bani Israel, meri neamat yaad karo aur us din se daro jab koi kisi ke kaam na aayega. Ibn Kathir: yeh ayat 47–48 jaisi hi hain jinka zikr pehle ho chuka." }
      ],
      key: "Ahkam ka maqsad aur adab dono Allah ke hukm ke tabe hain.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 104 se 123", "Ma‘ariful Quran, Ayah 40 (ayat 40–123 Bani Israel ka hissa, quran.com snippet)", "Quran 2:104–123"],
      samjho: [
        { title: "Naskh", ayahs: [106, 107], simple: "Naskh = Allah ka ek hukm ko badal dena ya uski jagah behtar ya usi jaisa hukm dena.", context: "Ayah 106 mein Allah ne farmaya ke wo har cheez par qadir hai.", note: "Ibn Kathir: Ibn Abbas ne ‘nansakh’ ka maana ‘hum mansookh karein’ bataya; Mujahid ne ‘hum mita dein’ aur ek riwayat mein ‘lafz rakhein aur maana badal dein’ naql kiya.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 106–107 (The Meaning of Naskh)"] },
        { title: "Raina aur Unzurna", ayahs: [104], simple: "Mominon ko aise lafz se roka gaya jis ka matlab bigaad kar liya ja sakta tha; behtar lafz sikhaya gaya.", context: "Ayah 104 mein guftagu ka adab sikhaya gaya.", note: "Ibn Kathir ka unwan: Manners in Speech.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 104–105"] },
        { title: "Be-wajah sawal", ayahs: [108], simple: "Rasool se bar-bar be-maqsad sawal poochna pasandeeda nahi.", context: "Ayah 108 mein Musa (A.S.) se kiye gaye sawalon ka hawala diya.", note: "Ibn Kathir ka unwan: The Prohibition of Unnecessary Questions.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 108"] }
      ],
      lessons: [
        { title: "Baat karne ka adab", ayahs: [104], fromSurah: "Mominon ko behtar lafz istemal karne ka hukm hua.", amal: "Aisi baat na kahein jis ka ghalat matlab nikal sakta ho.", src: ["Quran 2:104", "Tafsir Ibn Kathir, Ayah 104–105"] },
        { title: "Maaf karna aur nek amal", ayahs: [109, 110], fromSurah: "Hasad karne walon ke muqable mein maaf aur dar guzar, namaz aur zakat ka hukm hua.", amal: "Tang karne walon ko maaf karein aur apna dhyan nek amal par rakhein.", src: ["Quran 2:109–110", "Tafsir Ibn Kathir, Ayah 109–110"] },
        { title: "Dalil ke saath baat", ayahs: [111], fromSurah: "‘Dalil lao agar sachche ho.’", amal: "Apne aur doosron ke dawe ko dalil par parkhein.", src: ["Quran 2:111"] }
      ]
    },
    {
      n: 11, from: 124, to: 141, g: 3,
      title: "Hazrat Ibrahim (A.S.) aur Millat-e-Ibrahim",
      sub: "Imaamat ki aazmaish, Ka‘bah ki tameer, dua aur wasiyat",
      heads: ["Ibrahim Al-Khalil was an Imam for the People", "The Command to purify the House", "Building the Ka'bah and asking Allah to accept This Deed", "Ibrahim's Supplication that Allah sends the Prophet (ﷺ)", "Only the Fools deviate from Ibrahim's Religion", "Ya'qub's Will and Testament to His Children upon His Death", "The Muslim believes in all that Allah revealed and all the Prophets"],
      intro: "Bani Israel se baat ke baad Hazrat Ibrahim (A.S.) ka zikr aata hai, jin ki millat ko Yahood, Nasara aur Arab sab apna maante the.",
      points: [
        { r: [124, 124], h: "Ibrahim ki aazmaish aur imaamat", t: "Ibrahim ko Rabb ne kai hukmon se aazmaya, unhon ne woh poore kiye. Allah ne kaha main tumhein logon ka imam banaunga. Unhon ne apni aulad ke liye bhi poocha; jawab mila mera ahd zalimon ko nahi pahunchta. Ibn Kathir ka unwan: Ibrahim Al-Khalil ek imam the." },
        { r: [125, 127], h: "Ka‘bah ki tameer", t: "Ghar (Ka‘bah) ko logon ke liye markaz aur aman ki jagah banaya (125). Ibrahim aur Ismail ko hukm hua ke mere ghar ko tawaf, i‘tikaf, ruku aur sajda karne walon ke liye paak rakho. Ibrahim ne shehar ke liye aman aur rizq ki dua ki (126), aur dono ne deewarein uthate huye dua ki ke hum se qubool farma (127)." },
        { r: [128, 129], h: "Dua aur rasool ki dua", t: "Dono ne dua ki: humein apna farmanbardar bana, hamari aulad mein bhi ek ummat jo tera farmanbardar ho, humein manasik bata aur humari tauba qubool kar (128). Unhi mein se ek rasool bhej jo ayat sunaye, kitab aur hikmat sikhaye aur paak kare (129)." },
        { r: [130, 134], h: "Ibrahim ki millat aur wasiyat", t: "Ibrahim ki millat se wohi munh moden jo apne aap ko bewaqoof banaye (130). Jab Rabb ne kaha farmanbardar ho jao to unhon ne kaha main sab jahanon ke Rabb ka farmanbardar hua (131). Unhon ne aur Yaqub ne bhi apne bete wasiyat kiye ke marna to Muslim ho kar marna (132). Yaqub ne wafat ke waqt beton se poocha mere baad kiski ibadat karoge, unhon ne kaha ek Ilah ki (133)." },
        { r: [135, 138], h: "Sab nabiyon par imaan", t: "Kehte hain Yahoodi ya Nasrani ho jao to hidayat paoge. Kaho nahi, hum Ibrahim ki millat par hain jo ek Allah ke the (135). Kaho hum Allah par aur jo humpar, Ibrahim, Ismail, Ishaq, Yaqub, Asbat, Musa, Isa aur tamam nabiyon par utra us par imaan laye, hum un mein farq nahi karte (136). Ibn Kathir ka unwan: sab nabiyon par imaan." },
        { r: [139, 141], h: "Allah ke baare mein bahas", t: "Kya tum Allah ke baare mein humse jhagadte ho, jabke woh hamara bhi Rabb hai tumhara bhi? Hamare amal hamare liye aur tumhare tumhare liye (139). Kya tum kehte ho Ibrahim wagairah Yahoodi ya Nasrani the? Kaho kya tum zyada jaante ho ya Allah? Woh ek ummat thi jo guzar gayi, unke amal ka sawal tumse nahi hoga (140–141)." }
      ],
      key: "Ibrahim (A.S.) ki millat ka mukhy sabaq hai Allah ki mukammal farmanbardari.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 124 se 141", "Tafheem-ul-Quran, Introduction (ayat 141 tak Jews ko dawat ka hissa)", "Quran 2:124–141"],
      samjho: [
        { title: "Imam", ayahs: [124], simple: "Imam = aisa rehnuma jiski pairwi ki jaye.", context: "Allah ne Ibrahim ko aazmaish mein poora utarne par yeh darja diya.", note: "Ibn Kathir: Allah ne Ibrahim ko logon ke liye imam aur namoona banaya, kyunke woh Allah ke hukm par qaim rahe aur Tawhid par jame rahe.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 124"] },
        { title: "Millat-e-Ibrahim", ayahs: [130, 131, 135], simple: "Ibrahim ka deen: ek Allah ki farmanbardari.", context: "Ayah 130 mein us se munh modne wale ko bewaqoof kaha gaya.", note: "Ibn Kathir ke unwan: Only the Fools deviate from Ibrahim's Religion; Adhering to Tawhid until Death.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 130–132"] },
        { title: "Sab nabiyon par imaan", ayahs: [136], simple: "Momin Allah ke bheje hue har nabi aur har wahi par imaan rakhta hai.", context: "Ayah 136 mein kai nabiyon ke naam aaye.", note: "Ibn Kathir ka unwan: The Muslim believes in all that Allah revealed and all the Prophets.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 136"] }
      ],
      lessons: [
        { title: "Aazmaish mein poora utarna", ayahs: [124], fromSurah: "Ibrahim ko aazmaya gaya, unhon ne poora kiya aur imam bane.", amal: "Mushkil hukm par bhi amal ki himmat rakhein.", src: ["Quran 2:124", "Tafsir Ibn Kathir, Ayah 124"] },
        { title: "Aulad ke imaan ki fikr", ayahs: [132, 133], fromSurah: "Ibrahim aur Yaqub ne aulad ko imaan ki wasiyat ki.", amal: "Bachon ko Allah ki pehchaan aur namaz ki taaleem dein.", src: ["Quran 2:132–133", "Tafsir Ibn Kathir, Ayah 133–134"] },
        { title: "Nabiyon mein farq na karein", ayahs: [136], fromSurah: "Mominon ko sab nabiyon par imaan ka hukm hai.", amal: "Kisi nabi ki shan mein gustakhi na karein.", src: ["Quran 2:136"] }
      ]
    },
    {
      n: 12, from: 142, to: 152, g: 4,
      title: "Qiblah ki tabdeeli aur ummat-e-wasat",
      sub: "Ka‘bah ki taraf rukh, ummat ki fazilat aur Rasool ﷺ ki bi‘sat ka ehsan",
      heads: ["Changing the Qiblah - Direction of the Prayer", "The Virtues of Muhammad's (ﷺ) Nation", "The First Abrogation in the Qur'an was about the Qiblah", "Every Nation has a Qiblah", "Muhammad's (ﷺ ) Prophecy is a Great Bounty from Allah"],
      intro: "Yahan se Surah ka naya daur shuru hota hai. Qiblah ki tabdeeli ummat ki pehchaan aur imtihan dono ban jati hai.",
      points: [
        { r: [142, 143], h: "Qiblah par aitraz aur ummat-e-wasat", t: "Be-aqal kahenge unhein apne qiblah se kis ne pher diya? Kaho mashriq-maghrib Allah ke hain. Aur isi tarah humne tumhein ‘ummat-e-wasat’ banaya taake tum logon par gawah bano. Qiblah isliye tha ke jaan lein kaun rasool ki pairwi karta hai. Ibn Kathir: yeh Ibrahim ka qiblah hai, ummat ko sab se behtar ummat banane ke liye chuna." },
        { r: [144, 147], h: "Masjid-e-Haram ki taraf rukh", t: "Hum tumhare chehre ka aasman ki taraf phirna dekh rahe hain, isliye tumhein pasandeeda qiblah ki taraf phir dete hain, Masjid-e-Haram ki taraf rukh karo (144). Agar Ahl-e-Kitab ko har nishani dikhao to woh tumhare qiblah ki pairwi na karenge (145). Woh Rasool ko aise pehchante hain jaise apne bete, aur haq chhupate hain (146–147). Ibn Kathir: qiblah ki tabdeeli Quran ka pehla naskh tha." },
        { r: [148, 150], h: "Har ek ka ek rukh", t: "Har ek ka ek rukh hai jis ki taraf woh mutawajjih hota hai, isliye neki ki taraf lapko (148). Jahan se bhi niklo Masjid-e-Haram ki taraf rukh karo (149–150). Ibn Kathir ne poocha ke qiblah ka hukm teen baar kyun aaya aur uski hikmat bhi bayan ki." },
        { r: [151, 152], h: "Rasool ki bi‘sat ek neamat", t: "Isi tarah humne tum mein tum hi mein se rasool bheja jo ayat sunata, paak karta, kitab-o-hikmat sikhata aur woh sikhata jo tum nahi jaante (151). Mujhe yaad karo main tumhein yaad karunga, mera shukr karo aur nashukri na karo (152)." }
      ],
      key: "Hukm badalna ya rukh badalna imtihan hai; ummat ki pehchaan Allah ke hukm ki ita‘at se banti hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 142 se 152", "Tafheem-ul-Quran, Introduction (ayat 141 ke baad ka hissa ahkam par)", "Quran 2:142–152"],
      samjho: [
        { title: "Ummat-e-Wasat", ayahs: [143], simple: "Wasat = beech wali, insaaf wali aur behtar ummat.", context: "Ayah 143 mein Allah ne ummat ko logon par gawah banane ka zikr kiya.", note: "Ibn Kathir: Allah ne humara qiblah Ibrahim ka qiblah banaya taake humein sab se behtar ummat banaye aur Qayamat mein hum qaumon par gawah hon.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 142–143"] },
        { title: "Qiblah ki tabdeeli", ayahs: [144], simple: "Namaz ka rukh Baitul Maqdis se Ka‘bah ki taraf kar diya gaya.", context: "Ayah 144 mein Rasool ﷺ ka aasman ki taraf dekhna aur naya hukm aaya.", note: "Ibn Kathir ka unwan: The First Abrogation in the Qur'an was about the Qiblah.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 144"] }
      ],
      lessons: [
        { title: "Hukm ki hikmat poori samajh na aaye tab bhi ita‘at", ayahs: [143], fromSurah: "Qiblah isliye badla gaya ke jaan liya jaye kaun Rasool ki pairwi karta hai.", amal: "Jo hukm samajh na aaye us par bhi bharosa karke amal karein.", src: ["Quran 2:143"] },
        { title: "Neki mein aage badho", ayahs: [148], fromSurah: "Har kisi ka ek rukh hai, tum neki ki taraf lapko.", amal: "Rozana ek naya nek kaam shuru karein.", src: ["Quran 2:148", "Tafsir Ibn Kathir, Ayah 148 (Every Nation has a Qiblah)"] },
        { title: "Zikr aur shukr", ayahs: [152], fromSurah: "‘Mujhe yaad karo, main tumhein yaad karunga.’", amal: "Subah-shaam zikr aur shukr ko aadat banayein.", src: ["Quran 2:152"] }
      ]
    },
    {
      n: 13, from: 153, to: 167, g: 4,
      title: "Sabr, aazmaish aur Tawhid ki pehchaan",
      sub: "Sabr aur namaz, aazmaishein, Safa-Marwah, haq chhupana aur Allah ki nishaniyan",
      heads: ["The Virtue of Patience and Prayer", "The Life enjoyed by Martyrs", "The Believer is Patient with the Affliction and thus gains a Reward", "The Wisdom behind legislating Sa'i between As-Safa and Al-Marwah", "The Eternal Curse for Those Who hide Religious Commandments", "The Proofs for Tawhid", "The Condition of the Polytheists in this Life and the Hereafter"],
      intro: "Qiblah ke baad ummat ko sabr aur aazmaish ki taleem milti hai, phir Allah ki wahdaniyat ki nishaniyan aur shirk ka anjaam bataya jata hai.",
      points: [
        { r: [153, 154], h: "Sabr aur namaz", t: "Sabr aur namaz se madad maango, Allah sabr karne walon ke saath hai (153). Allah ki raah mein maare jaane walon ko murda na kaho, woh zinda hain magar tumhein shuoor nahi (154). Ibn Kathir ne yahan ek hadith naql ki ke momin ke liye har haal behtar hai." },
        { r: [155, 157], h: "Aazmaishein aur ‘Inna lillah’", t: "Hum khauf, bhook, maal, jaan aur phalon ki kami se aazmayenge, sabr karne walon ko khushkhabri do. Jab museebat aaye to kehte hain ‘Inna lillahi wa inna ilayhi raji‘oon’. Unpar Rabb ki salawat aur rehmat hai." },
        { r: [158, 158], h: "Safa aur Marwah", t: "Safa aur Marwah Allah ki nishaniyon mein se hain, Hajj ya Umrah mein un ka tawaf karne mein gunah nahi. Ibn Kathir: sa‘i ki hikmat aur ‘gunah nahi’ ke maane par alag unwan se bayan kiya." },
        { r: [159, 162], h: "Haq chhupane walon par laanat", t: "Jo hamari utari hui saaf nishaniyan aur hidayat chhupate hain un par Allah aur laanat karne walon ki laanat hai, siwa un ke jo tauba karen, islah karen aur zahir karen. Jo kufr par mar gaye unpar sab ki laanat hai." },
        { r: [163, 164], h: "Ilah ek hai", t: "Tumhara Ilah ek hi Ilah hai, uske siwa koi ma‘bood nahi (163). Aasman-zameen ki takhleeq, raat-din ka badalna, samundar mein chalti kashtiyan, baarish, har tarah ke jaanwar aur hawaon aur badalon mein aqal walon ke liye nishaniyan hain (164). Ibn Kathir ka unwan: The Proofs for Tawhid." },
        { r: [165, 167], h: "Allah ke siwa shareek", t: "Kuch log Allah ke siwa shareek banate aur unse Allah jaisi muhabbat karte hain, aur momin Allah se sab se zyada muhabbat karte hain. Qayamat ke din pairokar apne peshwaon se bezari kahenge." }
      ],
      key: "Sabr aur namaz mushkil mein sahara hain, aur Allah ki nishaniyan Tawhid ki dalil.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 153 se 167", "Quran 2:153–167"],
      samjho: [
        { title: "Sabr aur ‘Inna lillah’", ayahs: [155, 156, 157], simple: "Sabr = museebat mein Allah ke faisle par saabit-qadam rehna.", context: "Ayah 156 mein museebat par ek khaas kalima sikhaya gaya.", note: "Ibn Kathir ka unwan: The Believer is Patient with the Affliction and thus gains a Reward; aur: The Virtue of asserting that We all belong to Allah, during Afflictions.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 155–157"] },
        { title: "Safa aur Marwah ki sa‘i", ayahs: [158], simple: "Hajj aur Umrah mein Safa-Marwah ke darmiyan sa‘i ki jati hai.", context: "Ayah 158 mein sa‘i ko Allah ki nishaniyon mein se kaha gaya.", note: "Ibn Kathir ke unwan: The Meaning of ‘it is not a sin’ in the Ayah; The Wisdom behind legislating Sa‘i.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 158"] }
      ],
      lessons: [
        { title: "Mushkil mein sabr aur namaz", ayahs: [153], fromSurah: "Sabr aur namaz se madad maangne ka hukm hai.", amal: "Pareshani mein pehle namaz aur dua mein Allah se rujoo karein.", src: ["Quran 2:153", "Tafsir Ibn Kathir, Ayah 153–154"] },
        { title: "Aazmaish ko imtihan samjhein", ayahs: [155, 156], fromSurah: "Khauf, bhook aur maal-jaan ki kami se aazmaish ka wada hai aur ‘Inna lillah’ sikhaya gaya.", amal: "Nuqsan par ‘Inna lillahi wa inna ilayhi raji‘oon’ kahein aur sabr ki dua karein.", src: ["Quran 2:155–157"] },
        { title: "Sab se zyada muhabbat Allah se", ayahs: [165], fromSurah: "Mominon ko Allah se sab se zyada muhabbat batayi gayi.", amal: "Apni choices mein dekhein ke Allah ki raza ko pehle rakhte hain ya nahi.", src: ["Quran 2:165"] }
      ]
    },
    {
      n: 14, from: 168, to: 177, g: 4,
      title: "Halal-haram aur asli neki",
      sub: "Pakeeza rizq, andhi taqleed, haram cheezein aur sachchi neki",
      heads: ["The Polytheist imitates Other Polytheists", "The Disbeliever is just like an Animal", "The Prohibited is Allowed in Cases of Emergency", "Criticizing the Jews for concealing what Allah revealed"],
      intro: "Is hisse mein halal rizq, andhi taqleed se bachna, haram cheezein aur aakhir mein ‘Birr’ yaani asli neki ki jaame tareef aati hai.",
      points: [
        { r: [168, 169], h: "Halal pakeeza khao", t: "Ae logo, zameen ki halal aur pakeeza cheezein khao aur Shaitan ke qadmon par na chalo, woh tumhara khula dushman hai. Woh buri baat aur Allah par be-ilm baat ka hukm deta hai." },
        { r: [170, 171], h: "Andhi taqleed", t: "Jab kaha jaye Allah ki utari hui baat par chalo to kehte hain hum to baap-dada ke tareeqe par chalenge. Kya agar unke baap-dada kuch na samajhte hon? Kafiron ki misal us ki jaise hai jo aisi cheez ko pukare jo sirf awaaz sunti hai. Ibn Kathir ke unwan: The Polytheist imitates Other Polytheists; The Disbeliever is just like an Animal." },
        { r: [172, 173], h: "Haram cheezein", t: "Imaan walo, pakeeza rizq khao aur Allah ka shukr karo. Allah ne sirf murdar, khoon, suar ka gosht aur jo ghair Allah ke naam par ho haram kiya hai. Jo majboori mein ho, na chahne wala aur had se na badhne wala, us par gunah nahi. Ibn Kathir ka unwan: majboori mein haram ki ijazat." },
        { r: [174, 176], h: "Kitab chhupana", t: "Jo Allah ki utari hui kitab chhupate aur thodi qeemat lete hain woh apne pet mein aag bhar rahe hain; Qayamat mein Allah unse kalaam na karega. Unhon ne hidayat ke badle gumrahi kharidi. Ibn Kathir ka unwan: Criticizing the Jews for concealing what Allah revealed." },
        { r: [177, 177], h: "Birr (asli neki)", t: "Neki yeh nahi ke tum mashriq ya maghrib ki taraf munh karo, balke neki yeh hai ke koi Allah, aakhirat, farishton, kitab aur nabiyon par imaan laye; maal ki muhabbat ke bawajood rishtedaron, yatimon, miskeenon, musafiron, sawal karne walon aur gardan chhudane mein de; namaz qaim kare, zakat de; ahd poora kare; aur tangi, takleef aur jang mein sabr kare. Yehi sachche aur yehi muttaqi hain." }
      ],
      key: "Sachchi neki imaan, namaz, maal ki qurbani, ahd aur sabr sab ka majmua hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 168 se 177", "Quran 2:168–177"],
      samjho: [
        { title: "Halal aur tayyib", ayahs: [168, 172], simple: "Halal = jo jaiz ho; tayyib = jo pakeeza aur achha ho.", context: "Ayah 168 aur 172 mein dono ka hukm aaya.", note: "Ibn Kathir ke is hisse ke unwan: The Prohibited is Allowed in Cases of Emergency.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 172–173"] },
        { title: "Andhi taqleed", ayahs: [170], simple: "‘Baap-dada ne aisa kiya’ ko dalil bana lena.", context: "Ayah 170 mein yeh inkar karne walon ka jawab hai.", note: "Ibn Kathir ka unwan: The Polytheist imitates Other Polytheists.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 170–171"] }
      ],
      lessons: [
        { title: "Halal kamai aur halal khana", ayahs: [168, 172], fromSurah: "Halal aur pakeeza rizq khane ka hukm hai.", amal: "Khane-peene aur kamai mein halal ka khayal rakhein.", src: ["Quran 2:168, 172"] },
        { title: "Dalil se chalein, sirf rasm se nahi", ayahs: [170], fromSurah: "Sirf baap-dada ke naam par chalna mazammat ke qabil bataya gaya.", amal: "Rasm-o-riwaj ko Quran-o-sunnat par parkhein.", src: ["Quran 2:170"] },
        { title: "Neki ka mukammal maiyaar", ayahs: [177], fromSurah: "Ayah 177 mein neki ko imaan, maal ki qurbani, namaz, zakat, ahd aur sabr se jodha gaya.", amal: "Apni neki ki list mein sirf ibadat nahi, rishtedaron aur zaroorat-mandon ka haq bhi shamil karein.", src: ["Quran 2:177"] }
      ]
    },
    {
      n: 15, from: 178, to: 188, g: 4,
      title: "Qisas, wasiyat aur Ramadan",
      sub: "‘Farz kiya gaya’ wale ahkam: qisas, wasiyat, roza; dua aur halal kamai",
      heads: ["The Command and the Wisdom behind the Law of Equality", "Including Parents and Relatives in the Will was later abrogated", "The Order to Fast", "The Virtue of Ramadan and the Revelation of the Qur'an in it", "Allah hears the Servant's Supplication", "Bribery is prohibited and is a Sin"],
      intro: "Ayat 178, 180 aur 183 ek hi lafz ‘kutiba ‘alaykum’ (tum par farz kiya gaya) se shuru hoti hain: qisas, wasiyat aur roza. Beech mein dua ka zikr aur aakhir mein halal kamai ka hukm hai.",
      points: [
        { r: [178, 179], h: "Qisas", t: "Qatl ke maamle mein barabari ka qanoon farz kiya gaya: azaad ke badle azaad, ghulam ke badle ghulam, aurat ke badle aurat. Agar maqtool ke waris maaf kar dein to bhale tareeqe se diyat. Aur qisas mein tumhari zindagi hai ae aqal walo (179)." },
        { r: [180, 182], h: "Wasiyat", t: "Jab maut qareeb ho aur maal chhoda ho to walidain aur rishtedaron ke liye wasiyat tum par farz ki gayi (180). Jo sunkar badle uska gunah badalne walon par hai (181). Ibn Kathir ka unwan: walidain aur rishtedaron ke liye wasiyat ka yeh hukm baad mein mansookh hua." },
        { r: [183, 184], h: "Roza farz", t: "Imaan walo, tum par roza farz kiya gaya jaise tumse pehle walon par, taake taqwa paao. Gine hue din; bimar ya musafir doosre dinon mein poore karein; jo mushkil se rakh sake fidya de. Ibn Kathir: roza nafs ko paak karta hai." },
        { r: [185, 185], h: "Ramadan", t: "Ramadan woh mahina hai jis mein Quran utara gaya, logon ke liye hidayat aur saaf nishaniyan. Jo mahina paye roze rakhe. Allah tumhare liye aasani chahta hai mushkil nahi. Ibn Kathir: Allah ne Ramadan ko Quran utarne ke liye chuna." },
        { r: [186, 186], h: "Dua", t: "Jab mere bande tujh se mere baare mein poochen to main qareeb hoon, pukarne wale ki pukar sunta hoon jab woh mujhe pukare. Ibn Kathir ne Abu Musa (r.a.) ki hadith naql ki jis mein Nabi ﷺ ne awaaz chillane se roka ke tum kisi behre ko nahi pukar rahe." },
        { r: [187, 187], h: "Ramadan ki raatein", t: "Ramadan ki raaton mein biwiyon ke paas jaana halal kiya gaya; khao-piyo yahan tak ke subah ki safed dhari kaali dhari se alag ho; phir raat tak roza poora karo. I‘tikaf ke ahkam bhi aaye." },
        { r: [188, 188], h: "Haram kamai aur rishwat", t: "Ek doosre ka maal najaiz tareeqe se na khao aur hakimon ko rishwat na do taake dusron ka kuch maal gunah se kha lo. Ibn Kathir ke unwan: Bribery is prohibited and is a Sin." }
      ],
      key: "Roza taqwa ke liye hai, dua Allah ke qareeb hone ka sabab hai, aur halal kamai imaan ka hissa hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 178 se 188", "Quran 2:178–188"],
      samjho: [
        { title: "Qisas", ayahs: [178, 179], simple: "Qisas = qatl ka barabar badla, jis ke saath maafi aur diyat ka raasta bhi hai.", context: "Ayah 179 mein qisas ko zindagi ka sabab kaha gaya.", note: "Ibn Kathir ke unwan: The Command and the Wisdom behind the Law of Equality; The Benefits and Wisdom of the Law of Equality.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 178–179"] },
        { title: "Roza aur taqwa", ayahs: [183], simple: "Roza ka maqsad taqwa paida karna hai.", context: "Ayah 183 mein farz ke saath uska maqsad bhi bataya gaya.", note: "Ibn Kathir: roza khane, peene aur jinsi taalluq se rukne ka naam hai Allah ke liye, aur yeh rooh ko paak karta hai.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 183–184 (The Order to Fast)"] },
        { title: "Dua ki qurbat", ayahs: [186], simple: "Allah apne bandon ke qareeb hai aur dua sunta hai.", context: "Yeh ayat roze ke ahkam ke beech aayi.", note: "Ibn Kathir ka unwan: Allah hears the Servant's Supplication.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 186"] }
      ],
      lessons: [
        { title: "Roza = taqwa ki tarbiyat", ayahs: [183], fromSurah: "Roza ka maqsad taqwa hai.", amal: "Ramadan mein sirf bhook nahi, zubaan aur nigah ki hifazat ka bhi khayal rakhein.", src: ["Quran 2:183"] },
        { title: "Dua zaroor karein", ayahs: [186], fromSurah: "Allah ne farmaya ke woh qareeb hai aur pukar sunta hai.", amal: "Roz ek waqt dua ke liye tay karein, dheemi awaaz aur yaqeen ke saath.", src: ["Quran 2:186", "Tafsir Ibn Kathir, Ayah 186"] },
        { title: "Haram kamai se bachein", ayahs: [188], fromSurah: "Najaiz maal khane aur rishwat dene se roka gaya.", amal: "Kamai aur lein-dein mein rishwat aur dhoke se door rahein.", src: ["Quran 2:188", "Tafsir Ibn Kathir, Ayah 188"] }
      ]
    },
    {
      n: 16, from: 189, to: 203, g: 4,
      title: "Hilal, jang ke usool aur Hajj",
      sub: "Naya chand, had mein rehna, Allah ki raah mein kharch aur Hajj ke ahkam",
      heads: ["The Crescent Moons", "Righteousness comes from Taqwa", "The Command to spend in the Cause of Allah", "The Command to complete Hajj and 'Umrah", "Prohibition of Rafath (Sexual Intercourse) during Hajj", "The Order to stand on 'Arafat and to depart from it"],
      intro: "Naye chand ke sawal se shuru hokar yeh hissa Hajj ke waqt aur hudood ka zikr karta hai, aur jang ke maamle mein had se na badhne ki taleem deta hai.",
      points: [
        { r: [189, 189], h: "Naya chand", t: "Log naye chand ke baare mein poochte hain. Kaho yeh logon aur Hajj ke waqt ki nishaniyan hain. Neki yeh nahi ke gharon mein peeche se aao, balke neki taqwa hai. Ibn Kathir ke unwan: The Crescent Moons; Righteousness comes from Taqwa." },
        { r: [190, 193], h: "Jang mein had", t: "Allah ki raah mein unse lado jo tumse laden magar had se na badho, Allah had se badhne walon ko pasand nahi karta (190). Fitna qatl se bura hai (191). Agar woh baaz aa jayen to Allah maaf karne wala hai (192). Fitna khatam hone tak lado (193). Ibn Kathir ke unwan: Shirk is worse than Killing; The Order to fight until there is no more Fitnah." },
        { r: [194, 195], h: "Hurmat wale mahine aur kharch", t: "Hurmat wale mahine ka badla hurmat wale mahine se hai (194). Allah ki raah mein kharch karo aur apne haathon apne aap ko halakat mein na daalo, ehsan karo (195). Ibn Kathir ka unwan: The Command to spend in the Cause of Allah." },
        { r: [196, 196], h: "Hajj aur Umrah", t: "Hajj aur Umrah Allah ke liye poora karo. Agar rok diye jao to jo hady ho sake bhej do, aur sar na mundwao jab tak hady apni jagah na pahunche. Bimari ya sar ki takleef ho to fidya (roza, sadqa ya qurbani)." },
        { r: [197, 199], h: "Hajj ke adab", t: "Hajj ke mahine maloom hain; Hajj mein na bad-zubaani, na nafarmani, na jhagda (197). Behtareen zaad taqwa hai. Hajj mein rozi ki talash mein gunah nahi; Arafat se rawana ho to Mash‘ar-e-Haram mein Allah ko yaad karo (198). Wahan se rawana ho jahan se log hote hain aur Allah se maghfirat maango (199)." },
        { r: [200, 203], h: "Zikr aur dunya-aakhirat ki dua", t: "Manasik poore karo to Allah ko aise yaad karo jaise apne baap-dada ko, balke usse zyada (200). Kuch log sirf dunya maangte hain; aur kuch kehte hain ‘Rabbana atina fid-dunya hasanatan wa fil-aakhirati hasanatan’ (201–202). Gine hue dinon mein Allah ko yaad karo (203)." }
      ],
      key: "Jang ho ya Hajj, har maamle mein had aur taqwa Allah ki taraf se meyaar hain.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 189 se 203", "Quran 2:189–203"],
      samjho: [
        { title: "Hilal (naya chand)", ayahs: [189], simple: "Chand waqt ka hisaab aur Hajj ke mahine pehchanne ka zariya hai.", context: "Ayah 189 mein chand ke baare mein sawal ka jawab aaya.", note: "Ibn Kathir ke unwan: The Crescent Moons; Righteousness comes from Taqwa.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 189"] },
        { title: "Hajj ke adab", ayahs: [197], simple: "Hajj mein rafath, fusooq aur jidaal se bachna hai.", context: "Ayah 197 mein in teen cheezon se roka gaya.", note: "Ibn Kathir ke unwan: Prohibition of Rafath (Sexual Intercourse) during Hajj; The Prohibition of Fusuq during Hajj; The Prohibition of arguing during Hajj.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 197"] }
      ],
      lessons: [
        { title: "Neki ka matlab taqwa", ayahs: [189, 197], fromSurah: "Neki ghar ke peeche se aane mein nahi, taqwa mein hai; behtareen zaad bhi taqwa hai.", amal: "Rasmon se zyada neeyat aur taqwa par dhyan dein.", src: ["Quran 2:189, 197"] },
        { title: "Had se na badhein", ayahs: [190], fromSurah: "Jang mein bhi had se badhne ko Allah pasand nahi karta.", amal: "Gusse aur jhagde mein bhi insaaf aur had ka khayal rakhein.", src: ["Quran 2:190"] },
        { title: "Dunya aur aakhirat ki bhalai", ayahs: [201], fromSurah: "‘Rabbana atina fid-dunya hasanatan wa fil-aakhirati hasanatan’ ki dua sikhayi gayi.", amal: "Dono jahan ki bhalai ki dua rozana maangein.", src: ["Quran 2:201"] }
      ]
    },
    {
      n: 17, from: 204, to: 214, g: 4,
      title: "Munafiq aur momin ka farq, poora Islam, aazmaish",
      sub: "Meethi baatein vs asli kirdar, Islam mein poore dakhil hona, aur jannat ki qeemat",
      heads: ["The Characteristics of the Hypocrites", "The Sincere Believer prefers pleasing Allah", "Entering Islam in its Entirety is obligated", "Do not delay embracing the Faith", "Disputing, after the Clear Signs have come, indicates Deviation", "Victory only comes after succeeding in the Trials"],
      intro: "Yahan zahiri meethi baat karne wale ki pehchaan, aur uske muqable mein Allah ki raza ke liye jaan dene wale momin ka zikr hai.",
      points: [
        { r: [204, 207], h: "Do kirdar", t: "Aisa shakhs bhi hai jis ki baat tumhein dunya mein achhi lage aur woh dil ki baat par Allah ko gawah banaye, halanke woh sab se bada jhagralu hai (204). Jab wapas hota hai to zameen mein fasad ki koshish karta hai (205). Aur ek woh hai jo Allah ki raza ke liye apni jaan bech deta hai (207). Ibn Kathir ka unwan: The Characteristics of the Hypocrites." },
        { r: [208, 210], h: "Poore Islam mein dakhil ho", t: "Imaan walo, poore ke poore Islam mein dakhil ho jao aur Shaitan ke qadmon par na chalo (208). Agar roshan nishaniyon ke baad phisle to jaan lo Allah zabardast hai (209). Kya woh sirf is intezaar mein hain ke Allah badalon ke saaye mein aaye? (210)." },
        { r: [211, 212], h: "Neamat badalne ka anjaam", t: "Bani Israel se poocho humne unhein kitni saaf nishaniyan di; jo Allah ki neamat aane ke baad use badle to Allah sakht saza dene wala hai. Kafiron ke liye dunya ki zindagi khoobsurat bana di gayi hai aur woh momino se mazaak karte hain, magar muttaqi Qayamat ke din unse buland honge." },
        { r: [213, 213], h: "Insaan ek ummat the", t: "Insaan ek hi ummat the, phir Allah ne nabi khushkhabri aur daraane wale bhej kar kitab bhi utari taake logon ke ikhtilaf ka faisla ho. Ikhtilaf unhi ne kiya jinhein kitab di gayi, saaf nishaniyan aane ke baad. Allah ne imaan walon ko haq ki hidayat di." },
        { r: [214, 214], h: "Aazmaish ke baad madad", t: "Kya tum samajhte ho ke jannat mein chale jaoge jabke tumpar pehle logon jaisi aazmaish abhi nahi aayi? Unhein tangi aur takleef pahunchi aur woh hilaye gaye yahan tak ke Rasool aur imaan walon ne kaha Allah ki madad kab? Haan, Allah ki madad qareeb hai. Ibn Kathir ka unwan: Victory only comes after succeeding in the Trials." }
      ],
      key: "Kirdar zubaan se zyada bolta hai; aur jannat aazmaish ke baad milti hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 204 se 214", "Quran 2:204–214"],
      samjho: [
        { title: "Poora Islam (Silm)", ayahs: [208], simple: "Islam ke saare ahkam ko maanna, kuch ko lena kuch ko chhodna nahi.", context: "Ayah 208 mein Shaitan ke qadmon se bhi roka gaya.", note: "Ibn Kathir ka unwan: Entering Islam in its Entirety is obligated.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 208–209"] },
        { title: "Ikhtilaf ka sabab", ayahs: [213], simple: "Saaf nishaniyan aane ke baad bhi jo ikhtilaf hota hai woh aapas ki zid se hota hai.", context: "Ayah 213 mein Allah ne kitab ko faisla karne wala bataya.", note: "Ibn Kathir ke unwan: Disputing, after the Clear Signs have come, indicates Deviation.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 213"] }
      ],
      lessons: [
        { title: "Meethi baatein nahi, kirdar dekhein", ayahs: [204, 205], fromSurah: "Jis ki baat achhi lage magar kirdar fasadi ho, uski pehchaan bataayi gayi.", amal: "Kisi ko uski baton se nahi, amal aur kirdar se parkhein.", src: ["Quran 2:204–205"] },
        { title: "Poore Islam par amal", ayahs: [208], fromSurah: "‘Poore ke poore Islam mein dakhil ho jao’.", amal: "Choti badi sab cheezon mein Islam ke ahkam ko apnayein.", src: ["Quran 2:208", "Tafsir Ibn Kathir, Ayah 208–209"] },
        { title: "Aazmaish ke baad madad ka yaqeen", ayahs: [214], fromSurah: "Jannat ke liye aazmaish aati hai aur Allah ki madad qareeb hai.", amal: "Mushkil waqt mein himmat rakhein aur dua karte rahein.", src: ["Quran 2:214", "Tafsir Ibn Kathir, Ayah 214"] }
      ]
    },
    {
      n: 18, from: 215, to: 227, g: 4,
      title: "Sawal-jawab: kharch, jang, sharab aur gharelu ahkam",
      sub: "‘Woh tumse poochte hain’ wale sawal, yatimon aur nikah-qasam ke ahkam",
      heads: ["Who deserves the Nafaqah (Spending or Charity)", "Jihad is made Obligatory", "Spending whatever One could spare of his Money on Charity", "Maintaining the Orphan's Property", "The Prohibition of marrying Mushrik Men and Women", "The Prohibition of swearing to abandon a Good Deed", "The Īlā' and its Rulings"],
      intro: "Is hisse mein kai bar ‘Yas’alunaka’ (woh tumse poochte hain) aata hai: kya kharch karein, hurmat wale mahine mein jang, sharab-jua, yatim, haiz. Saath hi nikah aur qasam ke chand ahkam bhi hain.",
      points: [
        { r: [215, 216], h: "Kharch aur jihad", t: "Poochte hain kya kharch karein? Kaho jo bhalai kharch karo wo walidain, rishtedaron, yatimon, miskeenon aur musafiron ke liye ho (215). Qital tum par farz kiya gaya, tumhein napasand hai magar ho sakta hai koi cheez tumhein buri lage aur woh tumhare liye behtar ho (216)." },
        { r: [217, 218], h: "Hurmat wale mahine", t: "Hurmat wale mahine mein jang ke baare mein poochte hain, kaho bada gunah hai magar Allah ke raste se rokna, kufr, Masjid-e-Haram se rokna aur uske rehne walon ko nikalna Allah ke nazdeek usse bhi bada hai aur fitna qatl se bura hai (217). Jo imaan laye aur hijrat kare aur Allah ki raah mein jihad kare woh Allah ki rehmat ki ummeed rakhte hain (218)." },
        { r: [219, 220], h: "Sharab, jua aur yatim", t: "Sharab aur jue ke baare mein poochte hain, kaho dono mein bada gunah hai aur logon ke liye kuch fayde bhi, magar gunah unke faide se bada hai (219). Kitna kharch karein? Jo zaroorat se zyada ho. Yatimon ke baare mein: unki islah behtar hai aur agar saath rakho to woh tumhare bhai hain (220)." },
        { r: [221, 221], h: "Nikah aur imaan", t: "Mushrik aurton se nikah na karo jab tak woh imaan na layein; imaan wali laundi mushrika se behtar hai. Isi tarah mushrik mardon ko apni aurtein na do jab tak imaan na layein. Ibn Kathir ka unwan: The Prohibition of marrying Mushrik Men and Women." },
        { r: [222, 223], h: "Haiz aur biwiyon ke haqooq", t: "Haiz ke baare mein poochte hain: yeh ek takleef hai, haiz mein biwiyon se alag raho aur unke paak hone tak qareeb na jao; Allah tauba karne aur paak rehne walon ko pasand karta hai (222). Biwiyan tumhari kheti hain; apne liye aage bhejo aur Allah se daro (223)." },
        { r: [224, 227], h: "Qasam aur Ila", t: "Allah ke naam ko apni qasmon mein neki, taqwa aur logon mein sulah karne se rokne ka bahana na banao (224). Be-irada qasam par pakad nahi, par dil ke irade par pakad hai (225). Jo biwiyon se qasam khakar alag rehte hain unke liye chaar mahine ki muddat, phir wapas aaye to Allah bakhshne wala hai (226–227)." }
      ],
      key: "Har sawal ka jawab Allah ke hukm mein hai; ghar ke ahkam bhi ibadat ka hissa hain.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 215 se 227", "Quran 2:215–227"],
      samjho: [
        { title: "Infaq kis par", ayahs: [215], simple: "Kharch ki pehli haqdar qareebi: walidain, rishtedaar, yatim, miskeen, musafir.", context: "Ayah 215 mein ‘kya kharch karein’ ka jawab diya gaya.", note: "Ibn Kathir ka unwan: Who deserves the Nafaqah (Spending or Charity).", refs: [], src: ["Tafsir Ibn Kathir, Ayah 215"] },
        { title: "Laghw qasam", ayahs: [225], simple: "Be-irada zubaan se nikli qasam par pakad nahi.", context: "Ayah 225 mein dil ke irade se khayi qasam par pakad ka zikr hai.", note: "Ibn Kathir ke unwan: The Laghw (Unintentional) Vows.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 224–225"] },
        { title: "Ila", ayahs: [226], simple: "Biwi se na milne ki qasam ka hukm aur uski muddat chaar mahine.", context: "Ayah 226–227 mein is ka hukm bataya gaya.", note: "Ibn Kathir ka unwan: The Īlā' and its Rulings. Fiqhi tafseelat ke liye ahl-e-ilm se poochein.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 226–227"] }
      ],
      lessons: [
        { title: "Qareebi haqdaron ko pehle", ayahs: [215], fromSurah: "Kharch ke haqdaron mein pehle walidain aur rishtedaar aaye.", amal: "Sadqe mein pehle ghar-khandaan ke zaroorat-mandon ko dekhein.", src: ["Quran 2:215"] },
        { title: "Jo napasand ho shayad behtar ho", ayahs: [216], fromSurah: "Ho sakta hai tum ek cheez ko napasand karo aur woh tumhare liye behtar ho.", amal: "Mushkil faislon par Allah ki hikmat par bharosa rakhein.", src: ["Quran 2:216"] },
        { title: "Allah ke naam ko neki se rukne ka bahana na banayein", ayahs: [224], fromSurah: "Qasam ko neki aur sulah se rukne ki wajah banane se roka gaya.", amal: "Agar kisi bhalai se rukne ki qasam khayi hai to kaffara dekar bhalai karein.", src: ["Quran 2:224", "Tafsir Ibn Kathir, Ayah 224–225"] }
      ]
    },
    {
      n: 19, from: 228, to: 242, g: 4,
      title: "Talaq, iddat, doodh pilana aur namaz ki hifazat",
      sub: "Gharelu ahkam: talaq-yafta, bewa, rida‘at, aur beech mein namaz ki taaleem",
      heads: ["The 'Iddah (Waiting Period) of the Divorced Woman", "Divorce is Thrice", "Allowing Khul' and the Return of the Mahr in that Case", "Being Kind to the Divorced Wife", "The Suckling Period is only Two Years", "The 'Iddah (Waiting Period) of the Widow", "The Middle Prayer"],
      intro: "Yeh hissa gharelu rishton ke ahkam ka hai: talaq, iddat, bachchon ko doodh pilana aur bewa ki iddat. Ibn Kathir ke mutabiq aakhir mein ‘Salat-ul-Wusta’ (beech wali namaz) ki taleem aati hai.",
      points: [
        { r: [228, 228], h: "Talaq-yafta ki iddat", t: "Talaq-yafta auratein teen haiz tak intezaar karein aur jo Allah ne unke rehem mein paida kiya use chhupayen nahi. Shauhar is muddat mein wapas lene ka zyada haq rakhte hain agar sulah chahein. Aurton ke bhi haq hain jaise un par haq hain, aur mardon ko unpar ek darja hai. Ibn Kathir ke unwan: The ‘Iddah of the Divorced Woman; The Rights the Spouses have over Each Other." },
        { r: [229, 230], h: "Talaq do baar aur khula", t: "Talaq do baar hai, phir bhale tareeqe se rok lena ya ehsan ke saath chhod dena (229). Mahr wapas lena jaiz nahi siwa us surat ke jab dono ko darr ho ke hadd-e-ilahi qaim na rakhenge (khula). Ibn Kathir ke unwan: Divorce is Thrice; Allowing Khul‘ and the Return of the Mahr in that Case; Pronouncing Three Divorces at the same Time is Unlawful." },
        { r: [231, 232], h: "Bhale tareeqe se", t: "Jab iddat poori hone ko ho to bhale tareeqe se rok lo ya bhale tareeqe se chhod do aur nuqsan pahunchane ke liye na roko (231). Aurton ko apne shauhar se nikah karne se na roko jab woh raazi hon (232). Ibn Kathir ka unwan: Being Kind to the Divorced Wife." },
        { r: [233, 233], h: "Bachchon ko doodh pilana", t: "Maayein apne bachchon ko poore do saal doodh pilayein; baap ki zimmedari unka khana aur kapda hai. Kisi par uski taqat se zyada bojh nahi. Ibn Kathir ka unwan: The Suckling Period is only Two Years." },
        { r: [234, 237], h: "Bewa aur nikah se pehle talaq", t: "Jo log marte hain aur bewiyan chhodte hain woh chaar mahine das din intezaar karein (234). Iddat mein ishare se paigham-e-nikah jaiz hai, khufiya wada nahi (235). Chhoone se pehle talaq par mahr ya mut‘ah aur aadha mahr, aur maaf karna taqwa ke zyada qareeb hai (236–237)." },
        { r: [238, 239], h: "Namaz ki hifazat", t: "Sab namazon ki hifazat karo, khaas taur par beech wali namaz ki, aur Allah ke saamne ita‘at se khade ho (238). Khauf ho to paidal ya sawari par padh lo; amn ho to Allah ko jaise usne sikhaya waise yaad karo (239). Ibn Kathir ka unwan: The Middle Prayer; The Fear Prayer." },
        { r: [240, 242], h: "Bewa ki wasiyat aur mut‘ah", t: "Bewa ke liye ek saal ka nafqa aur rehne ki wasiyat ka zikr (240); Ibn Kathir ka unwan hai ke yeh hukm baad mein mansookh hua. Talaq-yafta ke liye bhale tareeqe se mut‘ah muttaqeen par haq hai (241–242)." }
      ],
      key: "Rishte mein insaaf, narmi aur ehsan; aur khauf ho ya aaram namaz ki hifazat.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 228 se 242", "Quran 2:228–242"],
      samjho: [
        { title: "Iddat", ayahs: [228, 234], simple: "Iddat = talaq ya wafat ke baad intezaar ki muddat.", context: "Ayah 228 mein talaq-yafta ke liye teen haiz aur ayah 234 mein bewa ke liye chaar mahine das din.", note: "Ibn Kathir ke unwan: The ‘Iddah of the Divorced Woman; The ‘Iddah of the Widow; The Wisdom behind legislating the ‘Iddah. Fiqhi tafseelat ke liye ahl-e-ilm se poochein.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 228, 234"] },
        { title: "Khula‘", ayahs: [229], simple: "Biwi ki taraf se mahr wapas karke alag hone ki surat.", context: "Ayah 229 mein is ki ijazat ka zikr aaya.", note: "Ibn Kathir ka unwan: Allowing Khul‘ and the Return of the Mahr in that Case.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 229–230"] },
        { title: "Salat-ul-Wusta", ayahs: [238], simple: "Beech wali namaz; sab namazon ki hifazat ke saath khaas hukm.", context: "Ayah 238 mein khaas taur par is ka zikr hai.", note: "Ibn Kathir ke is hisse ke unwan: The Middle Prayer; The Proof that the ‘Asr Prayer is the Middle Prayer.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 238–239"] }
      ],
      lessons: [
        { title: "Rishte mein ehsan", ayahs: [229, 231], fromSurah: "Rokna ho ya chhodna, dono bhale tareeqe aur ehsan ke saath.", amal: "Mushkil rishte mein bhi gusse mein zulm ya nuqsan se bachein.", src: ["Quran 2:229, 231"] },
        { title: "Namaz ki hifazat khauf mein bhi", ayahs: [239], fromSurah: "Khauf mein paidal ya sawari par namaz ka hukm hai.", amal: "Mushkil safar ya masroofiyat mein bhi namaz na chhodein.", src: ["Quran 2:238–239", "Tafsir Ibn Kathir, Ayah 238–239"] },
        { title: "Maaf karna taqwa ke qareeb", ayahs: [237], fromSurah: "Maaf kar dena taqwa ke zyada qareeb hai aur aapas mein ehsan na bhoolo.", amal: "Haqooq ke jhagde mein bhi narmi aur maafi ko tarjeeh dein.", src: ["Quran 2:237"] }
      ]
    },
    {
      n: 20, from: 243, to: 252, g: 4,
      title: "Jihad ki himmat aur Talut-Jalut ka waqia",
      sub: "Maut se bhaagne walon ka zikr, Talut ki badshahi aur Jalut par fatah",
      heads: ["The Story of the Dead People", "Abandoning Jihad does not alter Destiny", "The Good Loan and its Reward"],
      intro: "Is hisse mein Allah ki raah mein himmat aur sabr ki taleem do waqiaat ke zariye di gayi hai: hazaron logon ka maut se bhaagna aur Bani Israel ke ek nabi ke zamane mein Talut ki sipah.",
      points: [
        { r: [243, 245], h: "Maut se bhaagne wale aur qarz-e-hasana", t: "Kya tumne unhein nahi dekha jo hazaron ki tadad mein maut ke dar se apne gharon se nikle? Allah ne kaha mar jao, phir unhein zinda kiya (243). Allah ki raah mein lado aur jaan lo Allah sunne jaanne wala hai (244). Jo Allah ko achha qarz de uske liye woh kai guna badha dega (245). Ibn Kathir ke unwan: Abandoning Jihad does not alter Destiny; The Good Loan and its Reward." },
        { r: [246, 246], h: "Bani Israel ka mutalba", t: "Musa ke baad Bani Israel ke sardaron ne apne nabi se kaha humare liye ek badshah muqarrar karo taake hum Allah ki raah mein lade. Nabi ne kaha kahin aisa na ho ke jang farz ho aur tum na lado. Unhon ne kaha hum kyun na lade jab hamein gharon aur auladon se nikala gaya? Phir jang farz hui to chand ke siwa sab phir gaye." },
        { r: [247, 248], h: "Talut ki badshahi", t: "Nabi ne kaha Allah ne Talut ko tumhara badshah muqarrar kiya hai. Unhon ne aitraz kiya ke hum zyada haqdar hain, maal bhi nahi diya gaya. Nabi ne kaha Allah ne use tum par chuna aur ilm aur jism mein izafa kiya. Uski badshahi ki nishani yeh hai ke tumhare paas woh sandooq (Taboot) aayega jis mein sukoon hai." },
        { r: [249, 249], h: "Nehar ki aazmaish", t: "Jab Talut lashkar ke saath nikla to kaha Allah tumhein ek nehar se aazmayega, jo usse piye woh mere nahi aur jo na chakhe woh mere hain siwa ek chulu ke. Siwaye thode se sab ne piya. Jab woh aur imaan walay nehar paar kar gaye to bole aaj hamein Jalut aur uske lashkar ki taqat nahi; yaqeen walon ne kaha kitni chhoti jamaatein badi par ghalib ayi hain, Allah ke izn se." },
        { r: [250, 252], h: "Jalut par fatah", t: "Jab Jalut aur uske lashkar ke saamne aaye to dua ki: ae Rabb humein sabr utaar, hamare qadam jama de aur kafir qaum par madad kar. Unhon ne Allah ke izn se unhein shikast di aur Dawud ne Jalut ko qatl kiya (250–251). Allah logon ko ek doosre se hata na deta to zameen fasad se bhar jaati (251)." }
      ],
      key: "Maut aur dushman ke dar se nahi, Allah par bharose se himmat milti hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 243 se 252", "Quran 2:243–252"],
      samjho: [
        { title: "Qarz-e-hasana", ayahs: [245], simple: "Allah ki raah mein kharch ko Allah ne apne zimme achhe qarz ke tor par bataya hai.", context: "Ayah 245 mein Allah ne iska kai guna badhane ka wada kiya.", note: "Ibn Kathir ka unwan: The Good Loan and its Reward.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 243–245"] },
        { title: "Chhoti jamaat, badi jamaat par", ayahs: [249], simple: "Allah ke izn se kam taadad bhi zyada taadad par ghalib aa sakti hai.", context: "Yeh baat un logon ne kahi jinhein Allah se milne ka yaqeen tha.", note: "Ayah 249 ka seedha paigham; Ibn Kathir ne in ayat ke saath Bani Israel ka waqia tafseel se likha hai (unwan ke baghair).", refs: [], src: ["Quran 2:249", "Tafsir Ibn Kathir, Ayah 246–252"] }
      ],
      lessons: [
        { title: "Taqdeer se bhaagna kaam nahi aata", ayahs: [243], fromSurah: "Maut ke dar se nikalne walon ko Allah ne maut di aur phir zinda kiya.", amal: "Dar ke bawajood farz se peeche na hatein, Allah par bharosa rakhein.", src: ["Quran 2:243", "Tafsir Ibn Kathir, Ayah 243–245"] },
        { title: "Khwahish aur amal ka farq", ayahs: [246], fromSurah: "Jang ka mutalba karne wale jab jang farz hui to chand ke siwa phir gaye.", amal: "Jo wada ya aarzu karein usey nibhane ki himmat bhi rakhein.", src: ["Quran 2:246"] },
        { title: "Sabr aur dua", ayahs: [250], fromSurah: "Jalut ke saamne unhon ne sabr, saabit-qadmi aur madad ki dua ki.", amal: "Bade imtihan mein sabr aur saabit-qadmi ki dua maangein.", src: ["Quran 2:250"] }
      ]
    },
    {
      n: 21, from: 253, to: 260, g: 4,
      title: "Ayat-ul-Kursi, deen mein zabardasti nahi, aur zinda karne ki nishaniyan",
      sub: "Rasoolon ki fazilat, Allah ki shan, Ibrahim ka munazara aur teen waqiaat",
      heads: ["Allah Honored Some Prophets Above Others", "The Virtue of Ayat Al-Kursi", "No Compulsion in Religion", "The Debate Between Ibrahim Al-Khalil and King Nimrod", "The Story of 'Uzayr", "The Answer to Al-Khalil's Request"],
      intro: "Yeh hissa Allah ki sifaat (Ayat-ul-Kursi), deen ke usool aur murdon ko zinda karne ki teen nishaniyon (ayat 258 se 260) par mushtamil hai.",
      points: [
        { r: [253, 254], h: "Rasoolon ki fazilat aur kharch", t: "Yeh rasool hain, hum ne kuch ko kuch par fazilat di; kisi se Allah ne kalaam kiya, kuch ke darje buland kiye, aur Isa ko saaf nishaniyan aur Ruh-ul-Qudus se madad di (253). Us din se pehle kharch karo jis mein na sauda, na dosti, na sifarish hogi (254)." },
        { r: [255, 255], h: "Ayat-ul-Kursi", t: "Allah ke siwa koi ma‘bood nahi, woh Hayy aur Qayyum hai, usko na oongh na neend, aasman-zameen ki har cheez usi ki hai. Uski ijazat ke bina koi sifarish nahi kar sakta, woh sab kuch jaanta hai, uski Kursi aasman aur zameen par phaili hui hai aur unki hifazat usay thakati nahi, woh buland aur azeem hai. Ibn Kathir ke mutabiq sahih hadith ise Quran ki sab se azeem ayat batati hai." },
        { r: [256, 257], h: "Deen mein zabardasti nahi", t: "Deen mein koi zabardasti nahi, haq gumrahi se saaf ho chuka hai. Jo taghoot ka inkar kare aur Allah par imaan laye usne mazboot kunda thaam liya (256). Allah imaan walon ka dost hai, unhein andheron se roshni ki taraf nikalta hai (257). Ibn Kathir: kisi ko Islam ke liye majboor na karo, dalilein saaf hain." },
        { r: [258, 258], h: "Ibrahim aur badshah ka munazara", t: "Ibrahim ne kaha mera Rabb zindagi aur maut deta hai; badshah ne kaha main bhi karta hoon. Ibrahim ne kaha Allah sooraj ko mashriq se laata hai tum maghrib se laao, to woh kafir hairan reh gaya. Ibn Kathir ka unwan: The Debate Between Ibrahim Al-Khalil and King Nimrod." },
        { r: [259, 259], h: "Ujde shehar ka waqia", t: "Ek shakhs ek ujde shehar se guzra aur socha Allah ise maut ke baad kaise zinda karega? Allah ne use sau saal maut di phir uthaya aur poocha kitni der ruke? Usne kaha ek din ya kuch hissa. Allah ne kaha balke sau saal, apne khane-peene ko dekh jo nahi bigda aur apne gadhe ko dekh, aur haddiyon ko dekh kaise jodte hain. Ibn Kathir ke unwan mein is waqiye ko ‘Uzayr se jora gaya hai; ayat mein naam nahi hai." },
        { r: [260, 260], h: "Ibrahim ki dua", t: "Ibrahim ne kaha mere Rabb mujhe dikha tu murdon ko kaise zinda karta hai. Allah ne kaha kya tum imaan nahi rakhte? Kaha haan, magar dil ke itminan ke liye. Hukm hua chaar parinde lo, unhein apne se maanoos karo, phir har pahaad par ek hissa rakho, phir bulao woh daudte aayenge. Ibn Kathir ka unwan: The Answer to Al-Khalil's Request." }
      ],
      key: "Allah ki sifaat ko jaano, deen ko dalil se pesh karo, aur zinda karne ki nishaniyon se aakhirat ka yaqeen mazboot karo.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 253 se 260", "Quran 2:253–260"],
      samjho: [
        { title: "Ayat-ul-Kursi", ayahs: [255], simple: "Ayah 255 mein Allah ki wahdaniyat, zinda hone, nigehbaani aur ilm ka bayan hai.", context: "Yeh poori Surah ki sab se mashhoor ayat hai.", note: "Ibn Kathir: Ubayy bin Ka‘b (r.a.) se riwayat hai ke Nabi ﷺ ne poocha Quran ki sab se azeem ayat kaun si hai, aakhir mein Ayat-ul-Kursi ka zikr hua.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 255 (The Virtue of Ayat Al-Kursi)"] },
        { title: "La ikraha fid-deen", ayahs: [256], simple: "Deen ke maamle mein zabardasti nahi.", context: "Ayah 256 mein haq aur gumrahi ke saaf ho jane ka zikr bhi hai.", note: "Ibn Kathir: kisi ko Islam qubool karne par majboor na karo, uski dalilein saaf hain; jise Allah hidayat de uska dil khol deta hai, aur jis ke dil par muhar ho use zabardasti se faida nahi.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 256 (No Compulsion in Religion)"] },
        { title: "Dil ka itminan", ayahs: [260], simple: "Imaan hone ke bawajood Ibrahim ne dil ke itminan ke liye nishani maangi.", context: "Allah ne chaar parindon se mushahida karaya.", note: "Ibn Kathir ka unwan: The Answer to Al-Khalil's Request.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 260"] }
      ],
      lessons: [
        { title: "Allah ki sifaat par ghaur", ayahs: [255], fromSurah: "Ayat-ul-Kursi mein Allah ki sifaat ka jama bayan hai.", amal: "Ayat-ul-Kursi ka tarjuma samajh kar rozana padhein.", src: ["Quran 2:255", "Tafsir Ibn Kathir, Ayah 255"] },
        { title: "Deen dalil se, zabardasti se nahi", ayahs: [256], fromSurah: "Zabardasti ki nafi aur dalil ki wazahat bayan hui.", amal: "Deen ki baat narmi aur dalil ke saath karein.", src: ["Quran 2:256", "Tafsir Ibn Kathir, Ayah 256"] },
        { title: "Sawal imaan ko mazboot kar sakta hai", ayahs: [260], fromSurah: "Ibrahim ne imaan ke saath itminan ke liye dikhane ki dua ki.", amal: "Jo samajh na aaye use adab ke saath seekhne ki niyat se poochein.", src: ["Quran 2:260"] }
      ]
    },
    {
      n: 22, from: 261, to: 274, g: 4,
      title: "Allah ki raah mein kharch (infaq)",
      sub: "Ek dane ki misal, ehsan na jatana, achhi cheez dena aur kis ko dena",
      heads: ["Rewards of Spending in Allah's Cause", "To Remind About Charity Given is Forbidden", "The Example of Evil Deeds Nullifying Good Deeds", "The Encouragement to Spend Honest Money for Allah's Sake", "The Virtue of Disclosing or Concealing Charity", "Who Deserves Charity"],
      intro: "Yeh poora hissa Allah ki raah mein kharch ke baare mein hai: uska ajr, uske adab, kya dena, kis ko dena aur kaise dena.",
      points: [
        { r: [261, 261], h: "Ek dane ki misal", t: "Jo log Allah ki raah mein maal kharch karte hain unki misal us dane ki hai jis se saat baliyan ugti hain aur har baali mein sau dane. Allah jise chahe aur badhata hai. Ibn Kathir: Allah nek amal ko das se saat sau guna tak badhata hai." },
        { r: [262, 264], h: "Ehsan jatana na karo", t: "Jo kharch karte hain phir ehsan nahi jatate aur takleef nahi dete unka ajr Rabb ke paas hai (262). Achhi baat aur maaf kar dena us sadqe se behtar hai jis ke baad takleef di jaye (263). Ehsan jatane aur takleef dene se apne sadqe zaya na karo, aur dikhawe ki misal chikne patthar par mitti ki hai (264). Ibn Kathir ka unwan: To Remind About Charity Given is Forbidden." },
        { r: [265, 266], h: "Do baagh ki misal", t: "Jo Allah ki raza aur dil ke yaqeen ke saath kharch karte hain unki misal unchi zameen ke baagh ki hai jis par zor ki baarish pade to double phal de, aur halki baarish bhi kaafi hai (265). Kya koi chahega ke uska baagh ho aur budhape mein aandhi use jala de? Ibn Kathir ka unwan: The Example of Evil Deeds Nullifying Good Deeds." },
        { r: [267, 269], h: "Achhi kamai aur Shaitan ka waswasa", t: "Imaan walo, jo achhi cheezein kamaayi hain unmein se kharch karo aur kharab cheez dene ka irada na karo. Shaitan faqr se daraata hai aur buri baat ka hukm deta hai jabke Allah apni maghfirat aur fazl ka wada karta hai (268). Jise hikmat di gayi usse bahut bhalai mili (269)." },
        { r: [270, 274], h: "Chhupa kar ya zahir karke", t: "Jo kuch kharch karo ya mannat maano Allah jaanta hai. Sadqa zahir karna bhi achha hai aur chhupa kar faqeeron ko dena behtar hai (270–271). Hidayat dena tumhara kaam nahi, tum jo kharch karo apne liye karo (272). Haqdar woh faqeer hain jo Allah ki raah mein ruke hue hain aur sawal nahi karte (273). Jo raat-din chhupa kar aur zahir kar kharch karte hain unka ajr Rabb ke paas hai (274)." }
      ],
      key: "Sadqa neeyat, halal maal aur ehsan na jatane se qubool hota hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 261 se 274", "Quran 2:261–274"],
      samjho: [
        { title: "Sadqe ki misalein", ayahs: [261, 265], simple: "Ek dane se saat sau dane aur baagh ki misal ajr ke badhne ko dikhati hain.", context: "Dono misalein ikhlas ke saath kharch karne walon ki hain.", note: "Ibn Kathir: Allah nek amal ko das se saat sau guna tak badhata hai.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 261 (Rewards of Spending in Allah's Cause)"] },
        { title: "Ehsan jatana", ayahs: [262, 264], simple: "Sadqa dene ke baad jataana ya takleef dena ajr ko zaya karta hai.", context: "Ayah 264 mein chikne patthar par mitti ki misal hai.", note: "Ibn Kathir ka unwan: To Remind About Charity Given is Forbidden.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 262–264"] }
      ],
      lessons: [
        { title: "Ikhlas se kharch", ayahs: [265], fromSurah: "Allah ki raza ke liye kharch karne wale ki misal baagh se di gayi.", amal: "Sadqa dikhawe ke liye nahi, sirf Allah ke liye dein.", src: ["Quran 2:265"] },
        { title: "Ehsan jataya to ajr gaya", ayahs: [264], fromSurah: "Ehsan jatane aur takleef dene se sadqa zaya hota hai.", amal: "Dene ke baad zubaan band rakhein aur takleef na dein.", src: ["Quran 2:264", "Tafsir Ibn Kathir, Ayah 262–264"] },
        { title: "Achhi cheez dein", ayahs: [267], fromSurah: "Kharab cheez dene ka irada na karo.", amal: "Jo cheez khud lene mein hichkichao woh doosron ko na dein.", src: ["Quran 2:267"] }
      ]
    },
    {
      n: 23, from: 275, to: 283, g: 4,
      title: "Riba, qarz aur muamlat ko likhna",
      sub: "Riba ki mumaniat, tangdast ko mohlat, qarz ke likhne aur gawahi ke usool",
      heads: ["Allah Does Not Bless Riba", "The Necessity of Taqwa and Avoiding Riba", "Being Kind to Debtors Who Face Financial Difficulties", "The Necessity of Writing Transactions That Take Effect Later on", "Witnesses Should Attend the Dictation of Contracts", "What is the 'Mortgaging' Mentioned in the Ayah?"],
      intro: "Sadqe ke baad Riba ka bayan aata hai jo sadqe ke muqable mein hai, aur phir qarz aur lein-dein ke likhne ke usool aate hain, jo Quran ki sab se lambi ayat (282) mein hain.",
      points: [
        { r: [275, 275], h: "Riba khane walon ka anjaam", t: "Jo log riba khate hain woh Qayamat mein aise uthenge jaise shaitan ne chhoo kar pagal kar diya ho. Woh kehte hain tijarat bhi to riba jaisi hai, jabke Allah ne tijarat halal aur riba haram kiya hai. Jis ko nasihat pahunche aur woh baaz aa jaye to jo pehle liya woh uska, aur jo dobara kare woh jahannam wale hain." },
        { r: [276, 277], h: "Riba mitta, sadqa barhta", t: "Allah riba ko mitata hai aur sadqat ko barhata hai, aur Allah har nashukre gunahgar ko pasand nahi karta (276). Imaan wale, nek amal karne wale, namaz aur zakat dene wale ka ajr Rabb ke paas hai (277). Ibn Kathir ke unwan: Allah Does Not Bless Riba; Allah Increases Charity." },
        { r: [278, 281], h: "Riba chhodo aur mohlat do", t: "Imaan walo Allah se daro aur riba ka baqaya chhod do (278). Agar na karo to Allah aur uske rasool ki taraf se jang ka elaan sun lo; tauba karo to asal raqam tumhari, na zulm karo na zulm sahoo (279). Agar tangi mein ho to aasani tak mohlat, aur maaf kar do to tumhare liye behtar (280). Us din se daro jab Allah ki taraf lautaye jaoge (281)." },
        { r: [282, 282], h: "Qarz likhne ke usool", t: "Imaan walo jab kisi muqarrar muddat tak udhaar ka muamla karo to use likh lo. Likhne wala insaaf se likhe, aur jis par haq hai woh bolke likhwaye aur Allah se daray. Gawah bhi muqarrar karo, aur gawahi dene se inkar na karo. Chhota ho ya bada likhne mein susti na karo. Ibn Kathir ke unwan: The Necessity of Writing Transactions That Take Effect Later on; Witnesses Should Attend the Dictation of Contracts." },
        { r: [283, 283], h: "Safar mein girvi aur amanat", t: "Agar safar mein ho aur likhne wala na mile to girvi rakhna ho, aur agar ek doosre par bharosa ho to amanat wapas kare aur Allah se daray. Gawahi na chhupao, jo chhupata hai uska dil gunahgar hai. Ibn Kathir ka unwan: What is the ‘Mortgaging’ Mentioned in the Ayah?" }
      ],
      key: "Maal ke maamle mein insaaf, narmi aur likhai ka ehtimam imaan ki nishani hai.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 275 se 283", "Quran 2:275–283"],
      samjho: [
        { title: "Riba", ayahs: [275, 278], simple: "Riba ko Allah ne haram kiya aur tijarat ko halal.", context: "Ayah 275 mein un ke ‘tijarat bhi riba jaisi hai’ ke aitraz ka jawab hai.", note: "Ibn Kathir ke unwan: The Necessity of Taqwa and Avoiding Riba; Allah Does Not Bless Riba. Fiqhi tafseelat ke liye ahl-e-ilm se poochein.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 275–281"] },
        { title: "Tangdast ko mohlat", ayahs: [280], simple: "Qarz-dar tang ho to mohlat do, aur maaf kar do to behtar hai.", context: "Ayah 280 mein mohlat aur maafi ka zikr.", note: "Ibn Kathir ka unwan: Being Kind to Debtors Who Face Financial Difficulties.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 278–281"] }
      ],
      lessons: [
        { title: "Halal kamai", ayahs: [275], fromSurah: "Tijarat halal aur riba haram hai.", amal: "Apne lein-dein ko halal aur haram ke maiyaar par parkhein.", src: ["Quran 2:275"] },
        { title: "Tangdast ko mohlat dein", ayahs: [280], fromSurah: "Tang qarz-dar ko mohlat aur maaf karna behtar bataya gaya.", amal: "Kisi ka qarz ho to mushkil mein narmi rakhein.", src: ["Quran 2:280", "Tafsir Ibn Kathir, Ayah 278–281"] },
        { title: "Likhna aur amanat", ayahs: [282, 283], fromSurah: "Muamlat ko likhne aur amanat ada karne ka hukm hai.", amal: "Bade lein-dein likh kar rakhein aur amanat sahi waqt par lautayein.", src: ["Quran 2:282–283"] }
      ]
    },
    {
      n: 24, from: 284, to: 286, g: 4,
      title: "Khatima: Allah ki badshahi, imaan aur dua",
      sub: "Dil ki baaton ka hisaab, imaan ke arkaan aur aakhri dua",
      heads: ["Would the Servants be Accountable for What They Conceal in Their Hearts?", "The Tafsir of the Last Two Ayat of Surat Al-Baqarah"],
      intro: "Surah ka khatima Allah ki badshahi ke elaan se shuru hota hai, phir mominon ka imaan aur aakhir mein ek jaami dua hai.",
      points: [
        { r: [284, 284], h: "Allah ki badshahi aur hisaab", t: "Jo kuch aasmanon aur zameen mein hai woh Allah ka hai. Tum apne dil ki baat zahir karo ya chhupao, Allah tumse uska hisaab lega, phir jise chahega bakhsh dega aur jise chahega saza dega; Allah har cheez par qadir hai. Ibn Kathir ka unwan: Would the Servants be Accountable for What They Conceal in Their Hearts?" },
        { r: [285, 285], h: "Imaan ka iqrar", t: "Rasool aur momin us par imaan laye jo uske Rabb ki taraf se utara. Har ek Allah, uske farishton, kitabon aur rasoolon par imaan laya, hum uske rasoolon mein farq nahi karte, aur kehte hain humne suna aur maan liya, ae Rabb teri maghfirat chahiye, aur tujhi ki taraf lautna hai. Ibn Kathir ka unwan: The Tafsir of the Last Two Ayat." },
        { r: [286, 286], h: "Aakhri dua", t: "Allah kisi ko uski taqat se zyada takleef nahi deta; jo achha kamaya uska faida, jo bura kamaya uska nuqsan. Dua: ae Rabb, agar hum bhool jayen ya khata karein to humein na pakad; humpar aisa bojh na daal jo humse pehle logon par daala; humse woh na uthwa jis ki humein taqat nahi; humein maaf kar, bakhsh de aur humpar rehm kar, tu hamara maula hai, kafiron ke muqable mein hamari madad kar." }
      ],
      key: "Allah ki badshahi ka yaqeen, imaan ka iqrar aur maghfirat ki dua.",
      src: ["Tafsir Ibn Kathir (abridged), Ayah 284 se 286", "Quran 2:284–286"],
      samjho: [
        { title: "Dil ki baaton ka hisaab", ayahs: [284], simple: "Dil mein jo kuch ho Allah us se waqif hai aur uska hisaab lega.", context: "Ayah 284 mein is ke baad Allah ki maghfirat aur saza dono ka zikr hai.", note: "Ibn Kathir ka unwan: Would the Servants be Accountable for What They Conceal in Their Hearts?", refs: [], src: ["Tafsir Ibn Kathir, Ayah 284"] },
        { title: "Imaan ke arkaan", ayahs: [285], simple: "Allah, farishte, kitabein aur rasoolon par imaan.", context: "Ayah 285 mein rasoolon mein farq na karne ka iqrar bhi hai.", note: "Ibn Kathir ne last do ayat ki tafseer mein imaan ke in arkaan ko wazahat se bayan kiya.", refs: [], src: ["Tafsir Ibn Kathir, Ayah 285–286"] }
      ],
      lessons: [
        { title: "Niyat dil ki bhi dekhi jati hai", ayahs: [284], fromSurah: "Zahir aur chhupi huyi dil ki baat, dono ka Allah ko ilm hai.", amal: "Apne dil ki niyyat ko saaf rakhein.", src: ["Quran 2:284", "Tafsir Ibn Kathir, Ayah 284"] },
        { title: "Allah taqat se zyada nahi dalta", ayahs: [286], fromSurah: "Allah kisi ko uski taqat se zyada takleef nahi deta.", amal: "Mushkil mein ghabrane ke bajaye yaad rakhein ke Allah ne taqat ke andar rakha hai.", src: ["Quran 2:286"] },
        { title: "Ayat-e-dua ko yaad karein", ayahs: [286], fromSurah: "Surah ki aakhri dua mein maafi, rehm aur madad maangna sikhaya gaya.", amal: "Is dua ko seekh kar roz parhein.", src: ["Quran 2:286"] }
      ]
    }
  ],

  sources: [
    {
      name: "Tafsir Ibn Kathir (Abridged), English",
      detail: "Parts ki hadein is tafsir ke apne tafsir-entries se nikali gayi hain (har Part ek ya kai poori entries ka majmua hai). Part ke ‘heads’ isi tafsir ke asli English sub-headings hain (automatic check se verbatim milaye gaye). ‘Ibn Kathir ka unwan’ ke saath jo likha hai woh ya asli English heading hai ya uska Roman Urdu tarjuma. Padha gaya: har entry ke headings aur shuruaati hisse, aur kuch chuni hui concept-passages. Poori tafsir har sutar tak nahi padhi gayi.",
      links: [
        { label: "Quran.com, Ibn Kathir (Abridged)", url: "https://quran.com/en/al-baqarah/7/tafsirs/en-tafisr-ibn-kathir" },
        { label: "Dataset (spa5k/tafsir_api, en-tafisr-ibn-kathir)", url: "https://github.com/spa5k/tafsir_api" }
      ]
    },
    {
      name: "Tafheem-ul-Quran, Introduction to Surah 2 (Maududi)",
      detail: "Surah ke bade hisson ka khaka: ayat 141 tak Jews ko dawat ka hissa aur uske baad ijtimai, maashi aur qanooni hidayaat ka hissa.",
      links: [{ label: "islamicstudies.info (Tafheem intro)", url: "https://www.islamicstudies.info/quran/tafheem-text/intro/Intro2.html" }]
    },
    {
      name: "Ma‘ariful Quran (Mufti Muhammad Shafi), Ayah 40",
      detail: "Sirf search-result ka snippet dekha gaya: Bani Israel se khitab ayat 40 se 123 tak. Poora page khol kar nahi padha gaya.",
      links: [{ label: "Quran.com, Ma‘ariful Quran 2:40", url: "https://quran.com/nl/de-koe/40/tafsirs/en-tafsir-maarif-ul-quran" }]
    }
  ]
};
