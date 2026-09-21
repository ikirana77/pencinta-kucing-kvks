(() => {
  const body = document.body;
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  const currentPage = body.dataset.page;

  // BM remains the canonical copy in HTML. This single dictionary supplies the optional English copy.
  const english = {
    'Langkau ke kandungan utama': 'Skip to main content',
    'Komuniti sukarela warga KVKS': 'A volunteer community at KVKS',
    'Bukan organisasi rasmi KVKS': 'Not an official KVKS organisation',
    'Buka menu': 'Open menu',
    'Tutup menu': 'Close menu',
    'Utama': 'Home',
    'Kucing Kami': 'Our Cats',
    'Perlukan Bantuan?': 'Need Help?',
    'Kisah Kami': 'Our Story',
    'Komuniti': 'Community',
    'Tentang': 'About',
    'Terokai': 'Explore',
    'Peraturan Komuniti': 'Community Rules',
    'Memorial Abdul': "Abdul's Memorial",
    'Nota penting': 'Important note',
    'Ini ialah komuniti sukarela dan bukan organisasi rasmi KVKS. Lokasi sensitif serta maklumat peribadi tidak dipaparkan kepada umum.': 'This is a volunteer community, not an official KVKS organisation. Sensitive locations and personal information are not shown on this website.',
    'Ini ialah komuniti sukarela dan bukan organisasi rasmi Kolej Vokasional Kuala Selangor.': 'This is a volunteer community, not an official organisation of Kolej Vokasional Kuala Selangor.',
    'Ini ialah komuniti sukarela dan bukan organisasi rasmi KVKS. Penyertaan bermakna kita sama-sama menjaga keselamatan, ketepatan maklumat dan privasi.': 'This is a volunteer community, not an official KVKS organisation. Together, we look after safety, accuracy and privacy.',
    'Ini ialah komuniti sukarela dan bukan organisasi rasmi KVKS. Laman ini bukan pengganti khidmat veterinar atau saluran kecemasan rasmi.': 'This is a volunteer community, not an official KVKS organisation. This site does not replace veterinary care or official emergency services.',
    'Abdul dikenang dengan hormat. Tiada imej kecederaan atau maklumat peribadi dipaparkan.': 'Abdul is remembered with respect. No images of injuries or personal information are shown.',
    'Kisah ini dikongsi untuk memperbaiki komunikasi dan kebajikan resident cats, bukan untuk menyalahkan mana-mana pihak.': 'This story is shared to improve communication and the welfare of resident cats, without blaming anyone.',

    // Home
    'Tempat kita mengenali resident cats KVKS, berkongsi maklumat dan sama-sama menjaga kebajikan mereka.': 'A place to get to know the resident cats of KVKS, share what we observe and care for their welfare together.',
    'Kenali resident cats KVKS': 'Meet the resident cats of KVKS',
    'Apa perlu dibuat jika jumpa kucing sakit?': 'What should I do if I find a sick cat?',
    'Mereka mungkin tidak dimiliki sesiapa, tetapi mereka tetap tinggal bersama kita dan menjadi sebahagian daripada KVKS.': 'They may not belong to anyone, but they live alongside us and are part of KVKS.',
    'Apa yang kita buat bila nampak kucing perlukan perhatian': 'What we do when a cat needs attention',
    'Nampak, maklumkan, pantau dan bantu': 'See, report, monitor and help',
    'Nampak': 'See',
    'Maklumkan': 'Report',
    'Pantau': 'Monitor',
    'Bantu': 'Help',
    'Perhatikan keadaannya': 'Notice how they are doing',
    'Kongsi maklumat yang jelas': 'Share clear information',
    'Lihat jika ada perubahan': 'Watch for changes',
    'Sama-sama cari jalan': 'Find a way to help together',
    'Direktori Resident Cats': 'Resident Cat Directory',
    'Kenali resident cats KVKS.': 'Meet the resident cats of KVKS.',
    'Kenali Abdul dan kucing lain melalui foto. Nama panggilan dan kawasan biasa dilihat bagi kucing lain akan ditambah apabila maklumat disahkan.': 'Meet Abdul and other cats through their photos. Names and general areas for the other cats will be added when verified.',
    'Lihat direktori': 'View the directory',
    'Telah meninggal dunia': 'In memory',
    'Baca Memorial Abdul →': "Read Abdul's Memorial →",
    'Profil belum disahkan': 'Profile not yet verified',
    'Kucing hitam putih': 'Black-and-white cat',
    'Nama panggilan belum diketahui.': 'Known name not yet available.',
    'Di sinilah semuanya bermula': 'This is where it began',
    'Pengalaman mencari dan membantu Abdul menunjukkan satu perkara yang mudah: orang yang nampak masalah belum tentu mempunyai kemudahan untuk menyelesaikannya. Yang kurang hanyalah satu tempat untuk maklumat itu bertemu dengan orang yang boleh membantu.': 'Searching for Abdul and trying to help him taught us something simple: the person who notices a problem may not have the means to solve it. What was missing was a place where that information could reach someone able to help.',
    'Baca memorial Abdul': "Read Abdul's memorial",
    'Jika kucing perlukan bantuan': 'When a cat needs help',
    'Nampak kucing sakit atau cedera?': 'Found a sick or injured cat?',
    'Ambil gambar dari jarak selamat, catat kawasan umum dan maklumkan kepada komuniti atau seseorang yang boleh membantu. Anda tidak perlu mengurus semuanya seorang diri.': 'Take a photo from a safe distance, note the general area and tell the community or someone who can help. You do not have to handle everything alone.',
    'Lihat panduan ringkas': 'Read the quick guide',
    'Laporan komuniti kini tersedia melalui grup WhatsApp.': 'Community reports are now shared through the WhatsApp group.',

    // Directory and shared information panel
    'Kenali kucing yang': 'Meet the cats who',
    'menjadi sebahagian daripada KVKS.': 'are part of KVKS.',
    'Kenali kucing melalui foto dan ciri yang kelihatan. Abdul, Mama, Citam dan Adik telah dikenal pasti; label bagi kucing lain menerangkan rupa mereka sementara nama dan maklumat individu belum disahkan.': 'Get to know the cats through photos and visible features. Abdul, Mama, Citam and Adik have been identified; the labels for the other cats describe their appearance while their names and individual details remain unverified.',
    'Maklumat sedang dikumpulkan': 'Information is being gathered',
    'Abdul dikenang dalam memorialnya. Nama, kawasan biasa dilihat dan status kebajikan tiga kucing lain belum disahkan.': 'Abdul is remembered on his memorial page. The names, usual areas and welfare status of the other three cats have not been verified.',
    'Abdul dikenang dalam memorialnya. Mama, Citam dan Adik telah dikenal pasti; nama, kawasan biasa dilihat dan status kebajikan kucing lain belum disahkan.': 'Abdul is remembered on his memorial page. Mama, Citam and Adik have been identified; the names, usual areas and welfare status of the other cats have not been verified.',
    'Kucing dalam gambar': 'Cats in the photos',
    'Mudah dilihat, mudah dikenali.': 'Easy to spot, easier to recognise.',
    'Maklumat kucing akan dikemas kini apabila disahkan.': 'Cat information will be updated when verified.',
    'DALAM KENANGAN': 'IN MEMORY',
    'Berbulu oren dengan bahagian dada lebih cerah.': 'Orange fur with a lighter chest.',
    'Berbulu hitam dan bermata jingga.': 'Black fur and orange eyes.',
    'Nama panggilan': 'Known name',
    'Belum diketahui': 'Not yet known',
    'Kawasan umum': 'General area',
    'Berbulu hitam putih, dengan dada dan kaki putih.': 'Black-and-white fur, with a white chest and paws.',
    'Resident Cat · Ibu Kucing · ±1 Tahun': 'Resident Cat · Mother Cat · Approx. 1 Year',
    'Boleh dibelai, tetapi Mama sangat jelas tentang satu perkara — jangan dukung dia. 😸': 'Gentle pets are welcome, but Mama is very clear about one thing — no carrying, please. 😸',
    'Lihat profil Mama →': "View Mama's profile →",
    'Perlukan ruang': 'Needs space',
    'Anak Kucing · ±3 Bulan': 'Kitten · Approx. 3 Months',
    'Anak Kucing': 'Kitten',
    'Comel dari jauh dulu. Citam masih hissy dan belum selesa disentuh.': 'Cute from a distance for now. Citam is still hissy and not comfortable with touch.',
    'Lihat profil Citam →': "View Citam's profile →",
    'Mesra dengan manusia — boleh dibelai dan didukung dengan lembut.': 'Comfortable with people — gentle pets and carrying are okay.',
    'Lihat profil Adik →': "View Adik's profile →",
    'JAGA MAKLUMAT SENSITIF': 'HANDLE SENSITIVE INFORMATION WITH CARE',
    'Kongsi yang perlu sahaja.': 'Share only what is needed.',
    'Kumpulan WhatsApp digunakan untuk berkongsi maklumat dan menyelaras tindakan apabila kucing memerlukan bantuan. Kongsi maklumat yang relevan seperti foto, lokasi, masa dan keadaan kucing mengikut keperluan kes. Gunakan pertimbangan apabila berkongsi maklumat sensitif, dan elakkan menyebarkannya di luar kumpulan tanpa sebab yang munasabah.': 'The WhatsApp group is used to share information and coordinate help when a cat needs it. Share relevant details such as photos, location, time and the cat’s condition according to the needs of each case. Use your judgment with sensitive information, and avoid sharing it outside the group without a good reason.',

    // Resident-cat profile template
    '← Kembali ke direktori': '← Back to the directory',
    'Foto belum tersedia': 'Photo not yet available',
    'MAKLUMAT BELUM DISAHKAN': 'INFORMATION NOT YET VERIFIED',
    'Profil resident cat': 'Resident cat profile',
    'Status': 'Status',
    'Ibu kucing': 'Mother cat',
    'Mama': 'Mama',
    'Resident Cat · Ibu Kucing · Hitam': 'Resident Cat · Mother Cat · Black',
    'Mama ialah ibu kucing hitam berusia anggaran sekitar satu tahun dan merupakan salah seekor resident cat di KVKS. Mama mudah dikenali dengan satu ciri istimewa — kaki belakang kirinya kudung. Walaupun begitu, Mama masih bergerak sendiri dan menjalani kehidupan seperti biasa di sekitar kawasan kolej.': 'Mama is an approximately one-year-old black mother cat and one of KVKS’s resident cats. She can be recognised by her amputated left hind leg. Despite this, Mama moves around independently and continues her daily life around the college.',
    'Mama tidak suka didukung, jadi sebaiknya beri dia ruang dan jangan paksa mengangkatnya. Namun, jika didekati dengan tenang, Mama okay untuk dibelai.': 'Mama does not like being picked up, so please give her space and avoid lifting her. She is, however, comfortable with gentle petting when approached calmly.',
    'Anggaran umur': 'Estimated age',
    'Sekitar 1 tahun': 'Approximately 1 year old',
    'Bulu': 'Coat',
    'Hitam sepenuhnya': 'Solid black',
    'Betina': 'Female',
    'Ciri khas': 'Distinctive feature',
    'Kaki belakang kiri kudung': 'Amputated left hind leg',
    'Boleh dibelai': 'Okay to pet',
    'Ya': 'Yes',
    'Suka didukung': 'Likes being carried',
    'Tidak': 'No',
    'Belum direkodkan': 'Not yet recorded',
    'Status spay': 'Spay status',
    'Cara Mendekati Mama': 'How to Approach Mama',
    'Nampak perubahan pada Mama?': 'Noticed a change in Mama?',
    'Perhatikan dari jarak selamat dan maklumkan kepada komuniti atau seseorang yang boleh membantu.': 'Observe from a safe distance and tell the community or someone who can help.',
    'Status belum disahkan': 'Status not yet verified',
    'Nama belum diketahui': 'Name not yet known',
    'Profil ini akan dilengkapkan apabila kami menerima maklumat dan foto yang telah disahkan.': 'This profile will be completed when verified information and photos become available.',
    'Maklumat ringkas': 'At a glance',
    'Jantina': 'Sex',
    'Warna dan tanda khas': 'Colour and distinctive markings',
    'Kawasan biasa dilihat': 'Usual area seen',
    'Kemas kini terakhir': 'Last updated',
    'Belum tersedia': 'Not yet available',
    'Tentang kucing ini': 'About this cat',
    'Cerita dan perangainya.': 'Their story and personality.',
    'Cerita, perangai, cara mendekati dan keadaan semasa kucing ini akan dipaparkan selepas maklumat disahkan.': 'This cat’s story, personality, how to approach them and current condition will appear after the information has been verified.',
    'Ada perkara yang lebih baik kita simpan': 'Some details are best kept within the community',
    'Untuk keselamatan kucing, lokasi tepat sarang, tempat persembunyian dan maklumat pemberi laporan tidak dipaparkan kepada umum.': 'For the cat’s safety, exact nest and hiding locations and reporter details are not shown publicly on this website.',
    'Nampak perubahan pada kucing ini?': 'Noticed a change in this cat?',
    'Perhatikan dari jarak selamat dan maklumkan kepada komuniti atau seseorang yang boleh membantu. Laporan dalam talian akan datang.': 'Observe from a safe distance and tell the community or someone who can help. Online reporting is coming later.',
    'Lihat panduan bantuan': 'Read the help guide',

    // Help and reporting
    'Nampak kucing': 'Found a cat',
    'sakit atau cedera?': 'who is sick or injured?',
    'Ambil gambar dari jarak selamat, catat kawasan umum dan maklumkan kepada komuniti supaya kita boleh cuba membantu.': 'Take a photo from a safe distance, note the general area and tell the community so we can try to help.',
    'Perhatikan dari jarak selamat. Lihat sama ada kucing berdarah, sukar bernafas, tidak bergerak atau berada dalam bahaya.': 'Observe from a safe distance. Check whether the cat is bleeding, struggling to breathe, unable to move or in danger.',
    'Maklumkan dalam komuniti Pencinta Kucing KVKS atau kepada seseorang yang boleh membantu. Kongsi gambar, masa dan kawasan umum.': 'Tell the Pencinta Kucing KVKS community or someone who can help. Share a photo, the time and a general area.',
    'Jika selamat, perhatikan dari jauh dan maklumkan jika keadaannya berubah. Elakkan orang ramai mengerumuni kucing.': 'If it is safe, watch from a distance and share any changes. Avoid crowding around the cat.',
    'Bantu mengikut kemampuan. Jangan beri ubat manusia, melakukan rawatan sendiri atau mengendalikan kucing yang agresif.': 'Help in ways you can. Do not give human medicine, attempt treatment yourself or handle an aggressive cat.',
    'Tak mampu membantu sendiri? Tak mengapa.': 'Cannot help on your own? That is okay.',
    'Anda tidak perlu menyelesaikan semuanya seorang diri.': 'You do not have to solve everything alone.',
    'Mengambil gambar, mencatat kawasan umum, memerhatikan keadaan dan menyampaikan maklumat pun sudah sangat membantu. Orang lain dalam komuniti mungkin mempunyai pengangkutan, carrier, makanan, bekalan atau kenalan veterinar.': 'Taking a photo, noting a general area, observing the cat and passing on information can help a great deal. Others in the community may have transport, a carrier, food, supplies or a veterinary contact.',
    'Bagi pelajar, jika kes memerlukan pengangkutan, pembelian barang atau rawatan veterinar, maklumkan kepada komuniti. Mungkin ada ahli lain yang boleh membantu.': 'If you are a student and a case needs transport, supplies or veterinary care, let the community know. Another member may be able to help.',
    'Keadaan kecemasan': 'Emergency signs',
    'Cari bantuan segera': 'Seek help promptly',
    'Pendarahan banyak atau sukar bernafas': 'Heavy bleeding or difficulty breathing',
    'Tidak sedarkan diri atau tidak dapat berdiri': 'Unconscious or unable to stand',
    'Terperangkap di jalan, longkang atau kawasan berbahaya': 'Trapped on a road, in a drain or in a dangerous area',
    'Luka besar, serangan haiwan atau disyaki keracunan': 'A large wound, an animal attack or suspected poisoning',
    'Boleh dipantau sementara': 'Can be monitored for now',
    'Perhatikan dan maklumkan': 'Observe and share updates',
    'Kurang aktif tetapi masih sedar dan bergerak': 'Less active but still alert and moving',
    'Tidak makan, tempang ringan atau bersin berulang': 'Not eating, a mild limp or repeated sneezing',
    'Perubahan tingkah laku yang luar biasa': 'Unusual changes in behaviour',
    'Ibu dan anak kucing berada di tempat selamat—jangan pindahkan tanpa sebab': 'A mother and kittens in a safe place—do not move them without a reason',
    'Saluran komuniti': 'Community channel',
    'Buat laporan melalui WhatsApp': 'Report through WhatsApp',
    'Untuk membuat laporan, sertai dahulu grup WhatsApp Pencinta Kucing KVKS. Selepas menyertai, kongsi foto, kawasan umum, masa dilihat dan keadaan kucing dengan ringkas.': 'To make a report, first join the Pencinta Kucing KVKS WhatsApp group. Once you have joined, briefly share a photo, the general area, the time seen and the cat’s condition.',
    'Perhatian privasi:': 'Privacy note:',
    'Apabila menyertai grup WhatsApp, nama profil dan nombor telefon anda mungkin boleh dilihat oleh ahli lain.': 'When you join the WhatsApp group, other members may be able to see your profile name and phone number.',
    'Sertai grup & buat laporan': 'Join the group & report',

    // Our Story
    'Semuanya bermula': 'It all began',
    'dengan Abdul.': 'with Abdul.',
    'Pengalaman bersama Abdul menunjukkan bahawa orang yang nampak masalah belum tentu orang yang mempunyai kemudahan untuk menyelesaikannya.': 'Our experience with Abdul showed us that the person who notices a problem may not have the means to solve it.',
    'Abdul ialah salah seekor resident cats yang dikenali oleh warga KVKS. Kebimbangan tentang keadaannya menjadi serius apabila seorang pelajar berkongsi video Abdul berjalan terhincut-hincut.': 'Abdul was one of the resident cats known to the KVKS community. Concern for him grew when a student shared a video showing him limping.',
    'Daripada situ, barulah kami tahu bahawa Abdul sudah tidak sihat untuk suatu tempoh. Tidak lama kemudian, Abdul pula tidak dapat ditemui. Pelajar diminta memaklumkan kepada pensyarah jika ternampak Abdul supaya bantuan dan rawatan veterinar boleh diatur.': 'Only then did we learn that Abdul had been unwell for some time. Soon afterward, he could not be found. Students were asked to inform lecturers if they saw Abdul so that help and veterinary care could be arranged.',
    'Abdul akhirnya ditemui sedang bersembunyi di bawah longkang dalam keadaan tidak sihat. Pengalaman itu membuka mata kami kepada satu masalah yang sangat mudah: pelajar mungkin orang pertama yang nampak sesuatu, tetapi pensyarah atau warga lain mungkin mempunyai pengangkutan, carrier, bekalan atau kenalan veterinar untuk membantu.': 'Abdul was eventually found hiding beneath a drain, unwell. That experience brought a simple problem into focus: students may be the first to notice something, while lecturers or others at KVKS may have transport, a carrier, supplies or a veterinary contact to help.',
    'Yang kurang hanyalah satu tempat untuk maklumat itu bertemu dengan orang yang boleh membantu.': 'What was missing was a place where that information could reach someone able to help.',
    'Daripada pengalaman inilah kemudiannya lahir keperluan untuk mewujudkan satu saluran komuniti yang lebih jelas supaya maklumat tentang kucing yang memerlukan bantuan tidak terhenti pada seorang sahaja.': 'This experience later showed the need for a clearer community channel, so information about cats needing help would not stop with one person.',
    'Apa yang kita mahu lakukan dengan lebih baik': 'What we hope to do better',
    'Kenal kucing yang tinggal bersama kita.': 'Get to know the cats who live alongside us.',
    'Nama, rupa dan kawasan umum membantu kita menyedari apabila ada sesuatu yang tidak kena.': 'Names, appearance and general areas can help us notice when something is wrong.',
    'Sampaikan maklumat kepada orang yang boleh membantu.': 'Get information to people who can help.',
    'Gambar, masa dan kawasan umum boleh menjadi titik mula untuk tindakan seterusnya.': 'A photo, a time and a general area can be the starting point for action.',
    'Bantu mengikut kemampuan masing-masing.': 'Help in the ways we can.',
    'Ada yang memantau, ada yang mempunyai pengangkutan, dan ada yang boleh mengurus rawatan.': 'Some can monitor, some have transport and some can arrange care.',
    'Mengenang Abdul': 'Remembering Abdul',
    'Kisah Abdul menjadi permulaan komuniti ini.': 'Abdul’s story was the beginning of this community.',
    'Kami mengenang Abdul dengan hormat, tanpa imej sensitif dan tanpa menyalahkan mana-mana pihak.': 'We remember Abdul with respect, without sensitive images or blame.',

    // Abdul memorial: the locked English sentence is intentionally absent from this dictionary.
    'Salah seekor resident cats yang dikenali oleh warga KVKS.': 'A resident cat known to the KVKS community.',
    'Terima kasih, Abdul, kerana pernah menjadi sebahagian daripada KVKS.': 'Thank you, Abdul, for being part of KVKS.',
    'Abdul ialah si oyen yang biasa dilihat dan disapa di sekitar kolej. Ramai warga KVKS mengenalinya.': 'Abdul was an orange cat often seen and greeted around the college. Many people at KVKS knew him.',
    'Pengalaman mencari dan cuba membantu Abdul menyedarkan kami bahawa maklumat perlu sampai kepada orang yang mempunyai kemudahan untuk bertindak.': 'Searching for Abdul and trying to help him taught us that information needs to reach people who can act on it.',
    'Kisahnya menjadi sebab Pencinta Kucing KVKS diwujudkan—supaya pemerhatian kecil tidak terhenti pada seorang sahaja.': 'His story led to the creation of Pencinta Kucing KVKS, so that a small observation would not stop with one person.',
    'Apa yang kita pelajari daripada Abdul': 'What Abdul taught us',
    'Nampak → Maklumkan → Pantau → Bantu': 'See → Report → Monitor → Help',
    'Empat langkah mudah untuk menghubungkan orang yang nampak masalah dengan orang yang mungkin boleh membantu.': 'Four simple steps to connect someone who sees a problem with someone who may be able to help.',
    'Kembali kepada kisah kami →': 'Back to our story →',

    // Community
    'Sama-sama peduli.': 'Care together.',
    'Sama-sama jaga kepercayaan.': 'Keep each other’s trust.',
    'Komuniti ini terbuka kepada pencinta kucing yang benar-benar mahu membantu. Penyertaan adalah secara sukarela—jemput dengan baik, jangan paksa.': 'This community welcomes people who truly want to help cats. Taking part is voluntary—invite kindly, without pressure.',
    'Pencinta kucing sahaja': 'For cat lovers',
    'Jemput orang yang benar-benar peduli tentang kebajikan kucing. Semua penyertaan adalah secara sukarela.': 'Invite people who truly care about cat welfare. Everyone joins voluntarily.',
    'Laporkan dengan bertanggungjawab': 'Report responsibly',
    'Jika boleh, sertakan gambar, masa, kawasan umum dan keadaan terkini. Kongsi apa yang dilihat, bukan andaian.': 'Where possible, include a photo, time, general area and current condition. Share what you observed, not assumptions.',
    'Jangan pindahkan tanpa sebab': 'Do not move a cat without reason',
    'Jangan pindahkan kucing, terutama ibu dan anak kucing, kecuali mereka berada dalam bahaya segera.': 'Do not move cats, especially mothers and kittens, unless they are in immediate danger.',
    'Jangan beri ubat sesuka hati': 'Do not give medication without guidance',
    'Elakkan ubat manusia, rawatan yang tidak pasti atau prosedur perubatan tanpa panduan yang sesuai.': 'Avoid human medicines, uncertain treatments or medical procedures without suitable guidance.',
    'Jaga maklumat sensitif': 'Handle sensitive information with care',
    'Lokasi tepat sarang, tempat persembunyian kucing yang lemah dan maklumat peribadi tidak boleh disebarkan secara terbuka.': 'Do not share exact nest locations, vulnerable cats’ hiding places or personal information publicly.',
    'Bantu mengikut kemampuan': 'Help as you are able',
    'Tiada sesiapa diwajibkan mengeluarkan wang, membeli makanan atau mengurus kes sendiri. Memantau dan berkongsi maklumat juga satu bantuan.': 'No one is required to spend money, buy food or manage a case alone. Monitoring and sharing information also help.',
    'Sumbangan mesti telus': 'Keep contributions transparent',
    'Jika kutipan diperlukan pada masa hadapan, ia mesti sukarela, khusus untuk kes tertentu, diterangkan dengan jelas serta disokong oleh rekod perbelanjaan dan resit.': 'If funds are needed in future, contributions must be voluntary, tied to a specific case, clearly explained and supported by spending records and receipts.',
    'Gunakan maklumat dengan baik': 'Use information with care',
    'Ruang ini untuk kebajikan kucing—bukan gosip, mencari salah, menyebarkan tangkap layar atau membawa hal dalaman.': 'This space is for cat welfare—not gossip, blame, sharing screenshots or airing internal matters.',
    'Cara berkongsi maklumat': 'How to share information',
    'Ringkas, jelas dan tidak menuduh.': 'Brief, clear and free of accusations.',
    'Contoh yang membantu': 'A helpful example',
    '“Saya nampak seekor kucing oren berjalan tempang berhampiran bengkel sekitar 10.30 pagi.”': '“I saw an orange cat limping near the workshop at about 10:30 a.m.”',
    'Elakkan': 'Avoid',
    '“Orang di sana sudah lama abaikan kucing itu.”': '“People there have neglected that cat for a long time.”',
    'Asas kita': 'What holds us together',
    'Komuniti ini bergerak atas dasar kepercayaan.': 'This community runs on trust.',
    'Jaga keselamatan kucing, hormati sesama ahli dan gunakan setiap maklumat hanya untuk tujuan membantu.': 'Keep cats safe, respect fellow members and use information only to help.',

    // About
    'Tentang Kami': 'About Us',
    'Kenal mereka.': 'Get to know them.',
    'Kongsi maklumat.': 'Share information.',
    'Bantu mengikut kemampuan.': 'Help as you are able.',
    'Pencinta Kucing KVKS ialah komuniti sukarela yang menghubungkan warga yang nampak sesuatu dengan mereka yang mungkin mempunyai cara untuk membantu.': 'Pencinta Kucing KVKS is a volunteer community connecting people who notice something with those who may be able to help.',
    'Pelajar sering menjadi orang pertama yang melihat perubahan pada resident cats di sekitar kolej. Pensyarah, AKP, pengawal keselamatan, warden, alumni dan pencinta kucing lain pula mungkin mempunyai pengangkutan, makanan, carrier, bekalan atau kenalan veterinar.': 'Students are often the first to notice a change in the resident cats around the college. Lecturers, administrative and support staff, security guards, wardens, alumni and other cat lovers may have transport, food, a carrier, supplies or a veterinary contact.',
    'Komuniti ini membantu kedua-dua pihak bertemu. Ia bukan organisasi rasmi KVKS, bukan klinik veterinar dan bukan saluran kecemasan rasmi.': 'This community helps those people connect. It is not an official KVKS organisation, a veterinary clinic or an official emergency channel.',
    'Kenal': 'Recognise',
    'Siapa yang tinggal bersama kita.': 'The cats who live alongside us.',
    'Nama, rupa dan kawasan umum membantu kita perasan jika keadaan seekor kucing berubah.': 'Names, appearance and general areas help us notice when a cat’s condition changes.',
    'Kongsi perkara yang berguna.': 'Share what is useful.',
    'Gambar, masa, kawasan umum dan keadaan semasa boleh membantu orang lain memahami situasi.': 'A photo, time, general area and current condition can help others understand the situation.',
    'Ikut kemampuan masing-masing.': 'In ways each person can.',
    'Ada yang memantau, ada yang menyediakan barang dan ada yang boleh membantu mengurus rawatan.': 'Some monitor, some provide supplies and some can help arrange treatment.',
    'Cara komuniti ini berfungsi': 'How this community works',
    'Orang yang nampak masalah tidak semestinya mempunyai semua sumber.': 'The person who spots a problem may not have every resource needed.',
    'Pelajar dan warga sekitar': 'Students and others nearby',
    'Melihat, mengambil gambar dan berkongsi lokasi umum': 'Observe, take photos and share a general location',
    'Ahli komuniti': 'Community members',
    'Memantau dan menyampaikan perkembangan': 'Monitor and share updates',
    'Mereka yang berkemampuan': 'Those able to help',
    'Membantu dengan carrier, makanan, bekalan atau pengangkutan': 'Help with a carrier, food, supplies or transport',
    'Kenalan berpengalaman': 'Experienced contacts',
    'Membantu mendapatkan nasihat atau rawatan veterinar': 'Help seek veterinary advice or care',

    // Document metadata and accessible attributes
    'Pencinta Kucing KVKS — They live here too.': 'Home — Pencinta Kucing KVKS | They live here too.',
    'Kucing Kami — Pencinta Kucing KVKS': 'Our Cats — Pencinta Kucing KVKS',
    'Profil Kucing — Pencinta Kucing KVKS': 'Cat Profile — Pencinta Kucing KVKS',
    'Profil Mama — Pencinta Kucing KVKS': 'Mama Profile — Pencinta Kucing KVKS',
    'Perlukan Bantuan? — Pencinta Kucing KVKS': 'Need Help? — Pencinta Kucing KVKS',
    'Kisah Kami — Pencinta Kucing KVKS': 'Our Story — Pencinta Kucing KVKS',
    'Memorial Abdul — Pencinta Kucing KVKS': "Abdul's Memorial — Pencinta Kucing KVKS",
    'Komuniti — Pencinta Kucing KVKS': 'Community — Pencinta Kucing KVKS',
    'Tentang — Pencinta Kucing KVKS': 'About — Pencinta Kucing KVKS',
    'Tempat warga KVKS mengenali resident cats, berkongsi maklumat dan sama-sama menjaga kebajikan mereka.': 'A place for the KVKS community to get to know resident cats, share information and care for their welfare together.',
    'Kenali resident cats yang biasa kita lihat di sekitar KVKS.': 'Meet the resident cats seen around KVKS.',
    'Profil resident cat KVKS.': 'A KVKS resident cat profile.',
    'Profil Mama, resident cat KVKS.': 'A profile of Mama, a KVKS resident cat.',
    'Panduan ringkas apabila menjumpai kucing KVKS yang sakit atau cedera.': 'A quick guide for finding a sick or injured cat at KVKS.',
    'Kisah penubuhan Pencinta Kucing KVKS, bermula daripada Abdul.': 'The story of Pencinta Kucing KVKS, beginning with Abdul.',
    'Memorial Abdul, salah seekor resident cats KVKS.': 'A memorial to Abdul, one of the resident cats of KVKS.',
    'Prinsip dan peraturan komuniti Pencinta Kucing KVKS.': 'The principles and community rules of Pencinta Kucing KVKS.',
    'Tentang tujuan dan skop Pencinta Kucing KVKS.': 'About the purpose and scope of Pencinta Kucing KVKS.',
    'Pencinta Kucing KVKS — Laman utama': 'Pencinta Kucing KVKS — Home',
    'Navigasi utama': 'Main navigation',
    'Prinsip komuniti': 'Community principles',
    'Pilih bahasa': 'Choose language',
    'Panduan interaksi': 'Interaction guidance',
    'Bahasa Malaysia': 'Malay',
    'Kolaj kucing di sekitar kampus KVKS': 'Collage of cats around the KVKS campus',
    'Potret Abdul, kucing oren': 'Portrait of Abdul, an orange cat',
    'Potret kucing hitam bermata jingga': 'Portrait of a black cat with orange eyes',
    'Kucing hitam bersama dua anak kucing hitam': 'A black cat with two black kittens',
    'Potret anak kucing hitam': 'Portrait of a black kitten',
    'Potret kucing hitam putih di kawasan kampus': 'Portrait of a black-and-white cat on campus',
    'Gambar kucing dalam direktori': 'Cat photos in the directory',
    'Abdul, kucing berbulu oren duduk di laluan': 'Abdul, an orange cat sitting on a pathway',
    'Kucing hitam putih dengan dada dan kaki putih': 'Black-and-white cat with a white chest and paws',
    'Mama, ibu kucing hitam resident cat KVKS': 'Mama, a black mother cat and KVKS resident cat',
    'Citam, anak kucing hitam bermata kelabu': 'Citam, a black kitten with grey eyes',
    'Adik, anak kucing bermata oren': 'Adik, a kitten with orange eyes',
    'Sertai grup WhatsApp Pencinta Kucing KVKS dan buat laporan — dibuka dalam tab baharu': 'Join the Pencinta Kucing KVKS WhatsApp group and report — opens in a new tab',
    'Abdul, kucing oren residen KVKS, berdiri di laluan kampus': 'Abdul, an orange KVKS resident cat, standing on a campus pathway',
    'Kucing hitam bermata jingga duduk di laluan': 'Black cat with orange eyes sitting on a pathway',
    'Anak kucing berbulu hitam duduk di laluan': 'Black kitten sitting on a pathway'
  };

  // Confirmed resident-cat records used by the shared profile route: cat-profile.html?cat=slug.
  const profileRecords = {
    mama: {
      title: 'Mama', subtitle: { bm: 'Resident Cat · Ibu Kucing · Hitam', en: 'Resident Cat · Mother Cat · Black' }, status: { bm: 'Ibu kucing', en: 'Mother cat' },
      alt: { bm: 'Mama, ibu kucing hitam resident cat KVKS', en: 'Mama, a black mother cat and KVKS resident cat' },
      images: { primary: 'assets/images/cats/mama-profile.jpg', detail: 'assets/images/cats/mama-profile.jpg' },
      intro: {
        bm: ['Mama ialah ibu kucing hitam berusia anggaran sekitar satu tahun dan merupakan salah seekor resident cat di KVKS. Mama mudah dikenali dengan satu ciri istimewa — kaki belakang kirinya kudung. Walaupun begitu, Mama masih bergerak sendiri dan menjalani kehidupan seperti biasa di sekitar kawasan kolej.', 'Mama tidak suka didukung, jadi sebaiknya beri dia ruang dan jangan paksa mengangkatnya. Namun, jika didekati dengan tenang, Mama okay untuk dibelai.'],
        en: ['Mama is an approximately one-year-old black mother cat and one of KVKS’s resident cats. She can be recognised by her amputated left hind leg. Despite this, Mama moves around independently and continues her daily life around the college.', 'Mama does not like being picked up, so please give her space and avoid lifting her. She is, however, comfortable with gentle petting when approached calmly.']
      },
      badges: { bm: ['Boleh dibelai', 'Tidak boleh didukung'], en: ['Okay to pet', 'Do not carry'] },
      facts: {
        bm: [['Anggaran umur', 'Sekitar 1 tahun'], ['Bulu', 'Hitam sepenuhnya'], ['Jantina', 'Betina'], ['Ciri khas', 'Kaki belakang kiri kudung'], ['Boleh dibelai', 'Ya'], ['Boleh didukung', 'Tidak'], ['Status', 'Ibu kucing'], ['Kawasan biasa dilihat', 'Belum direkodkan'], ['Status spay', 'Belum diketahui']],
        en: [['Estimated age', 'Approximately 1 year old'], ['Coat', 'Solid black'], ['Sex', 'Female'], ['Distinctive feature', 'Amputated left hind leg'], ['Okay to pet', 'Yes'], ['Okay to carry', 'No'], ['Status', 'Mother cat'], ['Usual area', 'Not yet recorded'], ['Spay status', 'Unknown']]
      },
      guidance: { bm: ['Cara Mendekati Mama', 'Dekati Mama secara perlahan dan beri dia peluang untuk membiasakan diri terlebih dahulu. Mama boleh dibelai dengan lembut, tetapi jangan cuba mendukungnya.'], en: ['How to Approach Mama', 'Approach Mama slowly and give her time to become comfortable with your presence. Gentle petting is okay, but please do not try to pick her up.'] },
      action: { bm: 'Nampak perubahan pada Mama?', en: 'Noticed a change in Mama?' },
      description: { bm: 'Profil Mama, resident cat KVKS.', en: 'A profile of Mama, a KVKS resident cat.' }
    },
    citam: {
      title: 'Citam', subtitle: { bm: 'Resident Cat · Anak Kucing · ±3 Bulan', en: 'Resident Cat · Kitten · Approx. 3 Months' }, status: { bm: 'Anak kucing', en: 'Kitten' },
      alt: { bm: 'Citam, anak kucing hitam bermata kelabu', en: 'Citam, a black kitten with grey eyes' },
      images: { primary: 'assets/hero-cat-black-kitten.webp', detail: null },
      intro: { bm: ['Citam ialah anak kucing berwarna hitam dengan mata kelabu, berusia anggaran sekitar 3 bulan. Citam masih belum selesa dengan sentuhan manusia dan cenderung bersikap defensive apabila didekati terlalu rapat.'], en: ['Citam is a black kitten with grey eyes, estimated to be around 3 months old. Citam is still uncomfortable with human touch and can become defensive when approached too closely.'] },
      badges: { bm: ['Jangan sentuh dahulu', 'Perlukan ruang'], en: ['Do not pet yet', 'Needs space'] },
      facts: {
        bm: [['Anggaran umur', 'Sekitar 3 bulan'], ['Warna', 'Hitam'], ['Warna mata', 'Kelabu'], ['Perangai', 'Hissy / defensive'], ['Boleh dibelai', 'Tidak'], ['Boleh didukung', 'Tidak'], ['Perlu berhati-hati', 'Ya — boleh mencakar dan menggigit'], ['Jantina', 'Belum diketahui'], ['Kawasan biasa dilihat', 'Belum direkodkan'], ['Status spay/neuter', 'Belum diketahui']],
        en: [['Estimated age', 'Approximately 3 months'], ['Coat', 'Black'], ['Eye colour', 'Grey'], ['Temperament', 'Hissy / defensive'], ['Okay to pet', 'No'], ['Okay to carry', 'No'], ['Use caution', 'Yes — may scratch or bite'], ['Sex', 'Unknown'], ['Usual area', 'Not yet recorded'], ['Spay/neuter status', 'Unknown']]
      },
      guidance: { bm: ['Cara Mendekati Citam', 'Beri Citam ruang dan elakkan cuba menyentuh atau mendukungnya. Citam boleh mendesis, mencakar atau menggigit apabila berasa terancam. Dekati hanya jika perlu dan jangan paksa interaksi.'], en: ['How to Approach Citam', 'Give Citam space and avoid trying to touch or pick the kitten up. Citam may hiss, scratch, or bite when feeling threatened. Approach only when necessary and do not force interaction.'] },
      action: { bm: 'Nampak perubahan pada Citam?', en: 'Noticed a change in Citam?' },
      description: { bm: 'Profil Citam, anak kucing resident cat KVKS.', en: 'A profile of Citam, a KVKS resident kitten.' }
    },
    adik: {
      title: 'Adik', subtitle: { bm: 'Resident Cat · Anak Kucing', en: 'Resident Cat · Kitten' }, status: { bm: 'Anak kucing', en: 'Kitten' },
      alt: { bm: 'Adik, anak kucing bermata oren', en: 'Adik, a kitten with orange eyes' },
      images: { primary: 'assets/hero-cat-black-family.webp', detail: null },
      intro: { bm: ['Adik ialah anak kucing bermata oren yang selesa berinteraksi dengan manusia. Berbanding sesetengah anak kucing lain yang masih berhati-hati, Adik boleh dibelai dan juga didukung dengan lembut.'], en: ['Adik is an orange-eyed kitten that is comfortable around people. Unlike some kittens that are still cautious around human touch, Adik can be gently petted and carried.'] },
      badges: { bm: ['Boleh dibelai', 'Boleh didukung'], en: ['Okay to pet', 'Okay to carry'] },
      facts: {
        bm: [['Warna mata', 'Oren'], ['Boleh dibelai', 'Ya'], ['Boleh didukung', 'Ya'], ['Anggaran umur', 'Belum diketahui'], ['Jantina', 'Belum diketahui'], ['Kawasan biasa dilihat', 'Belum direkodkan'], ['Status spay/neuter', 'Belum diketahui']],
        en: [['Eye colour', 'Orange'], ['Okay to pet', 'Yes'], ['Okay to carry', 'Yes'], ['Estimated age', 'Unknown'], ['Sex', 'Unknown'], ['Usual area', 'Not yet recorded'], ['Spay/neuter status', 'Unknown']]
      },
      guidance: { bm: ['Cara Mendekati Adik', 'Adik selesa dengan sentuhan manusia dan boleh dibelai atau didukung dengan lembut. Walaupun begitu, sentiasa perhatikan bahasa badan kucing dan lepaskan Adik jika dia mula menunjukkan tanda tidak selesa.'], en: ['How to Approach Adik', 'Adik is comfortable with human touch and can be gently petted or carried. Even so, always watch the kitten’s body language and put Adik down if any signs of discomfort appear.'] },
      action: { bm: 'Nampak perubahan pada Adik?', en: 'Noticed a change in Adik?' },
      description: { bm: 'Profil Adik, anak kucing resident cat KVKS.', en: 'A profile of Adik, a KVKS resident kitten.' }
    }
  };

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('[data-nav]').forEach((link) => {
    if (link.dataset.nav === currentPage) link.setAttribute('aria-current', 'page');
  });

  // GA4 custom events use only page context and language; no personal information is sent.
  const trackEvent = (name, parameters) => {
    if (typeof window.gtag === 'function') window.gtag('event', name, parameters);
  };
  const currentLanguage = () => document.documentElement.lang === 'en' ? 'en' : 'bm';
  const pagePath = () => window.location.pathname;

  document.querySelectorAll('a[href]').forEach((link) => {
    if (link.dataset.analyticsBound === 'true') return;
    const href = link.getAttribute('href') || '';
    const isWhatsAppReport = href.startsWith('https://chat.whatsapp.com/');
    const isAbdulMemorial = href.split(/[?#]/, 1)[0].endsWith('abdul-memorial.html');
    if (!isWhatsAppReport && !isAbdulMemorial) return;
    link.dataset.analyticsBound = 'true';
    link.addEventListener('click', () => {
      if (isWhatsAppReport) {
        trackEvent('whatsapp_report_click', { page_path: pagePath(), language: currentLanguage() });
      }
      if (isAbdulMemorial) {
        trackEvent('abdul_memorial_click', { page_path: pagePath(), language: currentLanguage() });
      }
    });
  });

  const languageKey = 'pkkvks-language';
  const languageButtons = document.querySelectorAll('[data-language]');
  const metaDescription = document.querySelector('meta[name="description"]');
  const originalTitle = document.title;
  const originalDescription = metaDescription?.content;
  const menuLabel = toggle?.querySelector('.sr-only');

  // Keep the original BM text and attributes so switching back restores the page without a reload.
  const textEntries = [];
  const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const bm = node.textContent.trim();
    if (Object.prototype.hasOwnProperty.call(english, bm)) {
      textEntries.push({ node, bm, original: node.textContent });
    }
  }
  const attributeEntries = [];
  document.querySelectorAll('[aria-label], [title], [placeholder], [alt]').forEach((element) => {
    ['aria-label', 'title', 'placeholder', 'alt'].forEach((attribute) => {
      const bm = element.getAttribute(attribute);
      if (bm && Object.prototype.hasOwnProperty.call(english, bm)) {
        attributeEntries.push({ element, attribute, bm });
      }
    });
  });

  const saveLanguage = (language) => {
    try { localStorage.setItem(languageKey, language); } catch (_) { /* Browsing can disable storage. */ }
  };
  const savedLanguage = () => {
    try { return localStorage.getItem(languageKey); } catch (_) { return null; }
  };
  const updateMenuLabel = (language) => {
    if (!menuLabel || !toggle) return;
    const open = toggle.getAttribute('aria-expanded') === 'true';
    menuLabel.textContent = language === 'en'
      ? (open ? 'Close menu' : 'Open menu')
      : (open ? 'Tutup menu' : 'Buka menu');
  };
  const applyLanguage = (language) => {
    document.documentElement.lang = language === 'en' ? 'en' : 'ms';
    textEntries.forEach(({ node, bm, original }) => {
      if (language === 'bm') {
        node.textContent = original;
      } else {
        const start = original.indexOf(bm);
        node.textContent = original.slice(0, start) + english[bm] + original.slice(start + bm.length);
      }
    });
    attributeEntries.forEach(({ element, attribute, bm }) => {
      element.setAttribute(attribute, language === 'en' ? english[bm] : bm);
    });
    document.title = language === 'en' ? english[originalTitle] : originalTitle;
    if (metaDescription && originalDescription) {
      metaDescription.content = language === 'en' ? english[originalDescription] : originalDescription;
    }
    languageButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    updateMenuLabel(language);
  };

  const renderProfile = (language, key) => {
    const profileLayout = document.querySelector('.profile-layout');
    const profile = profileRecords[key] || profileRecords.mama;
    if (!profileLayout) return;
    document.body.dataset.profileCat = profile === profileRecords.mama ? 'mama' : key;
    const primaryImage = document.querySelector('.profile-photo-frame img');
    const detailFigure = document.querySelector('.profile-detail-photo');
    const detailImage = detailFigure?.querySelector('img');
    const title = document.querySelector('.profile-title h1');
    const subtitle = document.querySelector('.profile-subtitle');
    const status = document.querySelector('.profile-title .status');
    const intro = [...document.querySelectorAll('[data-profile-intro]')];
    const badges = document.querySelector('.interaction-badges');
    const facts = document.querySelector('.fact-list');
    const guidanceHeading = document.querySelector('[data-profile-guidance-heading]');
    const guidance = document.querySelector('[data-profile-guidance]');
    const actionHeading = document.querySelector('[data-profile-action-heading]');
    const portraitNodes = [primaryImage?.closest('.profile-photo-frame'), detailFigure].filter(Boolean);
    portraitNodes.forEach((node) => node.classList.toggle('profile-portrait', profile === profileRecords.mama));
    if (primaryImage) { primaryImage.src = profile.images.primary; primaryImage.alt = profile.alt[language]; }
    if (detailFigure && detailImage) {
      detailFigure.hidden = !profile.images.detail;
      if (profile.images.detail) { detailImage.src = profile.images.detail; detailImage.alt = profile.alt[language]; }
    }
    if (title) title.textContent = profile.title;
    if (subtitle) subtitle.textContent = profile.subtitle[language];
    if (status) status.textContent = profile.status[language];
    intro.forEach((node, index) => { node.hidden = !profile.intro[language][index]; if (profile.intro[language][index]) node.textContent = profile.intro[language][index]; });
    if (badges) {
      badges.setAttribute('aria-label', language === 'en' ? 'Interaction guidance' : 'Panduan interaksi');
      badges.dataset.tone = key === 'citam' ? 'caution' : 'friendly';
      badges.replaceChildren(...profile.badges[language].map((label) => { const badge = document.createElement('span'); badge.textContent = label; return badge; }));
    }
    if (facts) {
      facts.replaceChildren(...profile.facts[language].map(([label, value]) => {
        const row = document.createElement('div');
        const dt = document.createElement('dt'); dt.textContent = label;
        const dd = document.createElement('dd'); dd.textContent = value;
        row.append(dt, dd); return row;
      }));
    }
    if (guidanceHeading) guidanceHeading.textContent = profile.guidance[language][0];
    if (guidance) guidance.textContent = profile.guidance[language][1];
    if (actionHeading) actionHeading.textContent = profile.action[language];
    document.title = `${profile.title} — Pencinta Kucing KVKS`;
    if (metaDescription) metaDescription.content = profile.description[language];
  };

  // A valid URL choice wins for this visit and is saved; first visits otherwise start in BM.
  const queryLanguage = new URLSearchParams(window.location.search).get('lang');
  const initialLanguage = ['bm', 'en'].includes(queryLanguage)
    ? queryLanguage
    : (['bm', 'en'].includes(savedLanguage()) ? savedLanguage() : 'bm');
  const profileKey = new URLSearchParams(window.location.search).get('cat');
  if (['bm', 'en'].includes(queryLanguage)) saveLanguage(queryLanguage);
  applyLanguage(initialLanguage);
  renderProfile(initialLanguage, profileKey);

  // Buttons are native keyboard controls. Keep an existing URL override in sync with manual choice.
  languageButtons.forEach((button) => {
    if (button.dataset.analyticsBound === 'true') return;
    button.dataset.analyticsBound = 'true';
    button.addEventListener('click', () => {
      const language = button.dataset.language;
      const previousLanguage = currentLanguage();
      if (language === previousLanguage) return;
      saveLanguage(language);
      if (['bm', 'en'].includes(new URLSearchParams(window.location.search).get('lang'))) {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', language);
        history.replaceState(history.state, '', url);
      }
      applyLanguage(language);
      renderProfile(language, profileKey);
      trackEvent('language_switch', {
        selected_language: language,
        previous_language: previousLanguage,
        page_path: pagePath()
      });
    });
  });

  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    body.classList.remove('menu-open');
    updateMenuLabel(document.documentElement.lang === 'en' ? 'en' : 'bm');
  };

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
      body.classList.toggle('menu-open', !open);
      updateMenuLabel(document.documentElement.lang === 'en' ? 'en' : 'bm');
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 960) closeMenu();
    });
  }

  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
  }
})();
