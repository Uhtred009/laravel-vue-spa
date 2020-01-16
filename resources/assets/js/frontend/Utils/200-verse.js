const VERSELIST2 = [
   '“必有童女、懷孕生子、人要稱他的名為以馬內利。“馬太福音1:23',
   '“天國近了、你們應當悔改。“馬太福音3:2',
   '“你們要結出果子來、與悔改的心相稱。” 馬太福音3:8',
   '“他要用聖靈與火給你們施洗。“馬太福音3:11',
   '“神的靈、彷彿鴿子降下、落在他身上。” 馬太福音3:16',
   '“從天上有聲音說、這是我的愛子、我所喜悅的。“ 馬太福音3:17',
   '“人活著、不是單靠食物、乃是靠　神口裡所出的一切話。” 馬太福音4:4',
   '“不可試探主你的神。“馬太福音4:7',
   '“當拜主你的神、單要事奉他。” 馬太福音4:10',
    '“來跟從我、我要叫你們得人如得魚一樣。“馬太福音4:19',
    '“虛心的人有福了．因為天國是他們的。” 馬太福音5:3',
    '“哀慟的人有福了．因為他們必得安慰。“馬太福音5:4',
    '“溫柔的人有福了．因為他們必承受地土。“馬太福音5:5',
    '“飢渴慕義的人有福了．因為他們必得飽足。“馬太福音5:6',
    '“憐恤人的人有福了．因為他們必蒙憐恤。“馬太福音5:7',
    '“清心的人有福了．因為他們必得見　神。“馬太福音5:8',
    '“使人和睦的人有福了．因為他們必稱為神的兒子。” 馬太福音5:9',
    '“為義受逼迫的人有福了．因為天國是他們的。“馬太福音5:10',
    '“應當歡喜快樂．因為你們在天上的賞賜是大的“馬太福音5:12',
    '“你們是世上的鹽“馬太福音5:13',
    '“你們是世上的光．城造在山上、是不能隱藏的。” 馬太福音5:14',
    '“你們的光也當這樣照在人前、叫他們看見你們的好行為、便將榮耀歸給你們在天上的父。“馬太福音5:16',
    '“我來不是要廢掉、乃是要成全。” 馬太福音5:17',
    '“就是到天地都廢去了、律法的一點一畫也不能廢去、都要成全。” 馬太福音5:18',
    '“先去同弟兄和好、然後來獻禮物” 馬太福音5:24',
    '“你们的话，是，就说是，不是，就说不是。若再多说，就是出于那恶者。“馬太福音5:37',
    '“要愛你們的仇敵．為那逼迫你們的禱告。” 馬太福音5:44',
    '“他叫日頭照好人、也照歹人、降雨給義人、也給不義的人。” 馬太福音5:45',
    '“所以你們要完全、像你們的天父完全一樣。“馬太福音5:48',
    '“你施捨的時候、不要叫左手知道右手所作的。“馬太福音6:3',
    '“你父在暗中察看、必然報答你。“馬太福音6:4',
    '“你們沒有祈求以先、你們所需用的、你們的父早已知道了。“馬太福音6:8',
    '“免我們的債、如同我們免了人的債。” 馬太福音6:12',
    '“願你的旨意行在地上、如同行在天上。” 馬太福音6:10',
    '“不叫我們遇見試探．救我們脫離兇惡。“馬太福音6:13',
    '“只要積儹財寶在天上、天上沒有蟲子咬、不能鏽壞、也沒有賊挖窟窿來偷。“馬太福音6:20',
    '“因為你的財寶在那裡、你的心也在那裡。“馬太福音6:21',
    '“你們不能又事奉神、又事奉瑪門。“馬太福音6:24',
    '“不要憂慮” 馬太福音6:31',
    '“你們要先求他的國、和他的義這些東西都要加給你們了。” 馬太福音6:33',
    '“不要為明天憂慮．因為明天自有明天的憂慮。“馬太福音6:34',
    '“你們祈求、就給你們．尋找、就尋見．叩門、就給你們開門。” 馬太福音7:7',
    '“凡聽見我這話就去行的、好比一個聰明人、把房子蓋在磐石上。“馬太福音7:24',
    '“于是对门徒说，要收的莊稼多、作工的人少。“馬太福音9:37',
    '“惟有忍耐到底的、必然得救。“馬太福音10:22',
    '“不背著他的十字架跟從我的、也不配作我的門徒。” 馬太福音10:38',
    '“凡勞苦擔重擔的人、可以到我這裡來、我就使你們得安息。“馬太福音11:28',
    '“我心裡柔和謙卑、你們當負我的軛、學我的樣式、這樣、你們心裡就必得享安息。” 馬太福音11:29',
    '“我的軛是容易的、我的擔子是輕省的。“馬太福音11:30',
    '“凡遵行我天父旨意的人、就是我的弟兄姐妹和母親了。” 馬太福音12:50',
    '“他們都喫、並且喫飽了．把剩下的零碎收拾起來、裝滿了十二個籃子。“馬太福音14:20',
    '“入口的不能污穢人、出口的乃能污穢人。” 馬太福音15:11',
    '“若有人要跟從我、就當捨己、背起他的十字架、來跟從我。” 馬太福音16:24',
    '“那時候、他要照各人的行為報應各人。” 馬太福音16:27',
    '“所以凡自己謙卑像這小孩子的、他在天國裡就是最大的。” 馬太福音18:4',
    '“你們在天上的父、也是這樣不願意這小子裡失喪一個。” 馬太福音18:14',
    '“若是你們中間有兩個人在地上、同心合意的求甚麼事、我在天上的父、必為他們成全。“馬太福音18:19',
    '“所以神配合的、人不可分開。“馬太福音19:6',
    '“當孝敬父母．又當愛人如己。” 馬太福音19:19',
    '“在神凡事都能。” 馬太福音19:26',
    '“誰願為首、就必作你們的僕人。” 馬太福音20:27',
    '“你們禱告、無論求甚麼、只要信、就必得著。” 馬太福音21:22',
    '“被召的人多、選上的人少。“馬太福音22:14',
    '“你要盡心、盡性、盡意、愛主你的神。“馬太福音22:37',
    '“其次也相倣、就是要愛人如己。“馬太福音22:39',
    '“凡自高的必降為卑、自卑的必升為高。” 馬太福音23:12',
    '“聰明的拿著燈、又豫備油在器皿裡。“馬太福音25:4',
    '“你在不多的事上有忠心、我要把許多事派你管理．可以進來享受你主人的快樂。“馬太福音25:21',
    '“凡有的、還要加給他、叫他有餘。“馬太福音25:29',
    '“這是我立約的血、為多人流出來、使罪得赦。“馬太福音26:28',
    '“你們要去、使萬民作我的門徒、奉父子聖靈的名、給他們施洗。“馬太福音28:19',
    '“我不以福音為恥．這福音本是神的大能、要救一切相信的。”羅馬書1:16',
    '“神不偏待人” 羅馬書2:11',
    '“如今卻蒙神的恩典、因基督耶穌的救贖、就白白的稱義。” 羅馬書3:24',
    '“患難生忍耐，忍耐生老練，老練生盼望。“羅馬書5:3-4',
    '“惟有基督在我們還作罪人的時候為我們死、神的愛就在此向我們顯明了。“羅馬書5:8',
    '“聖靈與我們的心同證我們是神的兒女。” 羅馬書8:16',
    '“然而，靠著愛我們的主、在這一切的事上、已經得勝有餘了。” 羅馬書8:37',
    '“因為我深信無論是死、是生、是天使、是掌權的…….都不能叫我們與神的愛隔絕。“羅馬書8:38-39',
    '“又要將他豐盛的榮耀、彰顯在那蒙憐憫早豫備得榮耀的器皿上。” 羅馬書9:23',
    '“可見，信道是從聽道來的、聽道是從基督的話來的。“羅馬書10:17',
    '“被人咒罵、我們就祝福。被人逼迫、我們就忍受。“哥林多前書4:12',
    '“凡事我都可行、但無論那一件、我總不受他的轄制。“哥林多前書6:12',
    '“所以，我奔跑、不像無定向的．我鬥拳、不像打空氣的。“哥林多前書9:26',
    '“你們願意人怎樣待你們、你們也要怎樣待人。”路加福音6:31',
]

const VERSELIST = [
   '“我揀選了信實的道路，我把你的典章擺在我面前。” 詩篇 119:30',
   '“迦勒底人自高自大，心不正直；惟義人因信得生” 哈巴谷書 2:4',
   '“敬畏耶和華是智慧的開端，認識至聖者便是聰明。“箴言 9:10',
   '“你就明白敬畏耶和華，得以認識神。”箴言 2:5',
   '“因為耶和華本為善。他的慈愛存到永遠；他的信實直到萬代。”詩篇100:5',
   '“你寄居在這地，我必與你同在，賜福給你，因為我要將這些地都賜給你和你的後裔。我必堅定我向你父亞伯拉罕所起的誓。” 創世記26:3',
   '“公義必當他的腰帶；信實必當他脅下的帶子。“以賽亞書11:5',
   '“所以，你要知道耶和華─你的神，他是神，是信實的神；向愛他、守他誡命的人守約，施慈愛，直到千代” 申命記7:9',
   '“萬軍之耶和華說：你們要將當納的十分之一全然送入倉庫，使我家有糧，以此試試我，是否為你們敞開天上的窗戶，傾福與你們，甚至無處可容。“ 瑪拉基書3:10',
    '“當獻上公義的祭，又當倚靠耶和華。“ 詩篇4:5',
    '“有施散的，卻更增添；有吝惜過度的，反致窮乏。“ 箴言11:24',
    '“又要以耶和華爲樂，他就將你心裏所求的賜給你。” 詩篇37:4',
    '“當將你的事交託耶和華，並倚靠他，他就必成全。” 詩篇37:5',
    '“你要專心仰賴耶和華，不可倚靠自己的聰明” 箴言3:5',
    '“在你一切所行的事上都要認定他，他必指引你的路。” 箴言3:6',
    '“所以，主耶和華如此說：看哪，我在錫安放一塊石頭作為根基，是試驗過的石頭，是穩固根基，寶貴的房角石；信靠的人必不著急。“以賽亞書28:16',
    '“我知道，你萬事都能做；你的旨意不能攔阻。” 約伯記42:2',
    '“願耶和華向你仰臉，賜你平安。” 民數記6:26',
    '“因為耶和華是你所倚靠的；他必保守你的腳不陷入網羅。” 箴言3:26',
    '“不可離棄智慧，智慧就護衛你；要愛他，他就保守你。” 箴言4:6',
    '“你要保守你心，勝過保守一切，因為一生的果效是由心發出。” 箴言4:23',
    '“得著智慧的，愛惜生命；保守聰明的，必得好處。” 箴言19:8',
    '“我─耶和華憑公義召你，必攙扶你的手，保守你，使你作眾民的中保，作外邦人的光” 以賽亞書42:6',
    '“堅心倚賴你的，你必保守他十分平安，因為他倚靠你。” 以賽亞書26:3',
    '“因為我要將水澆灌口渴的人，將河澆灌乾旱之地。我要將我的靈澆灌你的後裔，將我的福澆灌你的子孫。” 以賽亞書44:3',
    '“如今你們回轉，行我眼中看為正的事，各人向鄰舍宣告自由，並且在稱為我名下的殿中、在我面前立約。” 耶利米書34：15',
    '“求你以你的真理引導我，教訓我，因為你是救我的神。我終日等候你。” 詩篇25:5',
    '“我必從萬民中領出他們，從各國內聚集他們，引導他們歸回故土，也必在以色列山上─一切溪水旁邊、境內一切可居之處─牧養他們。” 以西結書34:13',
    '“他必像牧人牧養自己的羊群，用膀臂聚集羊羔抱在懷中，慢慢引導那乳養小羊的。” 以賽亞書40:11',
    '“我 從 前 風 聞 有 你 ， 現 在 親 眼 看 見 你 。” 約伯記 42:5',
    '“耶和華引導他們經過沙漠。他們並不乾渴；他為他們使水從磐石而流，分裂磐石，水就湧出。” 以賽亞書48:21',
    '“你們必歡歡喜喜而出來，平平安安蒙引導。大山小山必在你們面前發聲歌唱；田野的樹木也都拍掌。” 以賽亞書55:12',
    '“就是在那裡，你的手必引導我；你的右手也必扶持我。” 詩篇139:10',
    '“義人引導他的鄰舍；惡人的道叫人失迷。” 箴言12:26',
    '“耶和華是良善正直的，所以他必指示罪人走正路。“ 詩篇 25:8',
    '“我喜愛良善，不喜愛祭祀；喜愛認識神，勝於燔祭。 “何西阿書 6:6',
    '“除了耶和華，誰是神呢？除了我們的神，誰是磐石呢？“詩篇18：31',
    '“他要稱呼我說：你是我的父，是我的神，是拯救我的磐石。“詩篇89：26',
    '“你們當倚靠耶和華直到永遠，因為耶和華是永久的磐石。“以賽亞書26：4',
    '“耶和華說：看哪，在我這裡有地方，你要站在磐石上。“出埃及記33：21',
    '“惟 獨 他 是 我 的 磐 石 ， 我 的 拯 救 ； 他 是 我 的 高 臺 ， 我 必 不 很 動 搖 。“詩 篇 62:2',
    '“只有耶和華為聖；除他以外沒有可比的，也沒有磐石像我們的神。” 撒母耳記2：2',
    '“我的拯救、我的榮耀都在乎神；我力量的磐石、我的避難所都在乎神。“詩篇62：7',
    '“他是磐石，他的作為完全；他所行的無不公平，是誠實無偽的神，又公義，又正直。“申命記32：4',
    '“耶和華─我的磐石，我的救贖主啊，願我口中的言語、心裡的意念在你面前蒙悅納。“詩篇19：14',
    '“他必居高處；他的保障是磐石的堅壘；他的糧必不缺乏；他的水必不斷絕。“以賽亞書33：16 ',
    '“耶和華是我的巖石，我的山寨，我的救主，我的神，我的磐石，我所投靠的。他是我的盾牌，是拯救我的角，是我的高臺。“詩篇 18:2',
    '“我的神，我的磐石，我所投靠的。他是我的盾牌，是拯救我的角，是我的高臺，是我的避難所。“撒母耳記22：3',
    '“我必在何烈的磐石那裡，站在你面前。你要擊打磐石，從磐石裡必有水流出來，使百姓可以喝。摩西就在以色列的長老眼前這樣行了。“出埃及記17：6',
    '“惟有聽從我的，必安然居住，得享安靜，不怕災禍。“ 箴言 1:33',
    '“要使地上萬民都知道，耶和華的手大有能力，也要使你們永遠敬畏耶和華－你們的神。”約書亞記 4:24',
    '“要尋求耶和華與他的能力，時常尋求他的面。” 歷代志上 16:11',
    '“我呼求的日子，你就應允我，鼓勵我，使我心裏有能力。” 詩篇 138:3',
    '“疲乏的，他賜能力；軟弱的，他加力量。” 以賽亞書 40:29',
    '“耶和華－你的神是施行拯救、大有能力的主。他在你中間必因你歡欣喜樂，默然愛你，且因你喜樂而歡呼。” 西番雅書 3:17',
    '“耶和華在他面前宣告說：「耶和華，耶和華，是有憐憫有恩典的神，不輕易發怒，並有豐盛的慈愛和誠實” 出埃及記 34:6',
    '“因為，他的怒氣不過是轉眼之間；他的恩典乃是一生之久。一宿雖然有哭泣，早晨便必歡呼。” 詩篇 30:5',
    '“你以恩典為年歲的冠冕；你的路徑都滴下脂油” 詩篇 65:11',
    '“我知道，你萬事都能做；你的旨意不能攔阻。” 約伯記42:2',
    '“耶和華說：我知道我向你們所懷的意念是賜平安的意念，不是降災禍的意念，要叫你們末後有指望。” 耶利米書29:11',
    '“凡投靠你的，願他們喜樂，時常歡呼，因為你護庇他們；又願那愛你名的人都靠你歡欣。” 詩篇 5:11',
    '“你必將生命的道路指示我。在你面前有滿足的喜樂；在你右手中有永遠的福樂。” 詩篇 16:11',
    '“喜樂的心乃是良藥；憂傷的靈使骨枯乾。” 箴言 17:22',
    '“然而，我要因耶和華歡欣，因救我的神喜樂。“ 哈巴谷書 3:18',
    '“萬軍之耶和華說：萬國必稱你們為有福的，因你們的地必成為喜樂之地。“ 瑪拉基書 3:12',
    '“為你祝福的，我必賜福與他；那咒詛你的，我必咒詛他。地上的萬族都要因你得福。“創世記12：3',
    '“神啊，求你為我造清潔的心，使我裡面重新有正直的靈。“ 詩篇51:10',
    '“你要認識神，就得平安；福氣也必臨到你。“ 約伯記 22:21',
    '“耶和華必賜力量給他的百姓；耶和華必賜平安的福給他的百姓。“ 詩篇 29:11',
    '“大山可以挪開，小山可以遷移；但我的慈愛必不離開你；我平安的約也不遷移。這是憐恤你的耶和華說的。“ 以賽亞書 54:10',
    '“你們當剛強壯膽，不要害怕，也不要畏懼他們，因為耶和華－你的神和你同去。他必不撇下你，也不丟棄你。” 申命記 31:6',
    '“我豈沒有吩咐你嗎？你當剛強壯膽！不要懼怕，也不要驚惶；因為你無論往哪裏去，耶和華－你的神必與你同在。” 約書亞記 1:9',
    '“現在你們要剛強，不要手軟，因你們所行的必得賞賜。” 歷代志下 15:7',
    '“願純全、正直保守我，因為我等候你。” 詩篇 25:21',
    '“好施捨的，必得豐裕；滋潤人的，必得滋潤。” 箴言11:25',
    '“當那日你們各人要請鄰舍坐在葡萄樹和無花果樹下．這是萬軍之耶和華說的。” 撒迦利亞3:10 ',
    '“他施捨錢財、賙濟貧窮．他的仁義、存到永遠。他的角必被高舉、大有榮耀。” 詩篇112:9',
    '“不要只在眼前事奉，像是討人喜歡的，要像基督的僕人，從心裡遵行神的旨意。” 以弗所書6:6',
    '“求你以你的真理引導我，教訓我，因為你是救我的神。我終日等候你。” 詩篇25:5',
    '“我們的心向來等候耶和華；他是我們的幫助，我們的盾牌。” 詩篇33:20',
    '“但那等候耶和華的必從新得力。他們必如鷹展翅上騰；他們奔跑卻不困倦，行走卻不疲乏。” 以賽亞書40:31',
    '“所以你當歸向你的神，謹守仁愛、公平，常常等候你的神。” 何西阿書12:6',
    '“你且去等候結局，因為你必安歇。到了末期，你必起來，享受你的福分。” 但以理書12:13',
    '“看哪！神是我的拯救；我要倚靠他，並不懼怕。因為主耶和華是我的力量，是我的詩歌，他也成了我的拯救。” 以賽亞書12:2',
    '“看哪，耶和華─你的神已將那地擺在你面前，你要照耶和華─你列祖的神所說的上去得那地為業；不要懼怕，也不要驚惶。” 申命記1:21',
    '“耶和華是我的亮光，是我的拯救，我還怕誰呢？耶和華是我性命的保障，我還懼誰呢？” 詩篇27:1',
    '“我倚靠神，必不懼怕。人能把我怎麼樣呢？” 詩篇56:11',
    '“你要記念耶和華——你的神，因為得貨財的力量是他給你的，為要堅定他向你列祖起誓所立的約，像今日一樣。” 申命記 8:18',
    '“愛我、守我誡命的，我必向他們發慈愛，直到千代。” 出埃及記20:6',
    '“為千萬人存留慈愛，赦免罪孽、過犯，和罪惡，萬不以有罪的為無罪，必追討他的罪，自父及子，直到三、四代。” 出埃及記34:7',
    '“應當稱謝耶和華；因他本為善，他的慈愛永遠長存！” 歷代志上16:34',
    '“神啊，你的慈愛何其寶貴！世人投靠在你翅膀的蔭下。” 詩篇36:7',
    '“願你常施慈愛給認識你的人，常以公義待心裡正直的人。” 詩篇36:10',
    '“謙卑的人看見了就喜樂；尋求神的人，願你們的心甦醒。” 詩篇69:32',
    '“義人的道是正直的；你為正直的主，必修平義人的路。” 以賽亞書26:7',
    '“天怎樣高過地，照樣，我的道路高過你們的道路；我的意念高過你們的意念。” 以賽亞書55:9',
    '“凡仰望耶和華的人，你們都要壯膽，堅固你們的心！” 詩篇31:24',
    '“你從水中經過，我必與你同在；你逿過江河，水必不漫過你；你從火中行過，必不被燒，火燄也不著在你身上。” 以賽亞書43：2',
    '“我將耶和華常擺在我面前，因他在我右邊，我便不致搖動。” 詩篇16：8',
    '“這是耶和華所定的日子，我們在其中要高興歡喜！” 詩篇118:24',
];

const VERSELISTObjc = {
    1: "“當獻上公義的祭，又當倚靠耶和華。“ 詩篇4:5",
    2: "“你以恩典為年歲的冠冕；你的路徑都滴下脂油” 詩篇 65:11",
    3: "“就是在那裡，你的手必引導我；你的右手也必扶持我。” 詩篇139:10",
    4: "“神的靈、彷彿鴿子降下、落在他身上。” 馬太福音3:16",
    5: "“我 從 前 風 聞 有 你 ， 現 在 親 眼 看 見 你 。” 約伯記 42:5",
    6: "“他要稱呼我說：你是我的父，是我的神，是拯救我的磐石。“詩篇89：26",
    7: "“只有耶和華為聖；除他以外沒有可比的，也沒有磐石像我們的神。” 撒母耳記2：2",
    8: "“你們沒有祈求以先、你們所需用的、你們的父早已知道了。“馬太福音6:8",
    9: "“凡自高的必降為卑、自卑的必升為高。” 馬太福音23:12",
    10: "“耶和華是我的巖石，我的山寨，我的救主，我的神，我的磐石，我所投靠的。他是我的盾牌，是拯救我的角，是我的高臺。“詩篇 18:2",
    11: "“我必從萬民中領出他們，從各國內聚集他們，引導他們歸回故土，也必在以色列山上─一切溪水旁邊、境內一切可居之處─牧養他們。” 以西結書34:13",
    12: "“先去同弟兄和好、然後來獻禮物” 馬太福音5:24",
    13: "“然而，我要因耶和華歡欣，因救我的神喜樂。“ 哈巴谷書 3:18",
    14: "“因為，他的怒氣不過是轉眼之間；他的恩典乃是一生之久。一宿雖然有哭泣，早晨便必歡呼。” 詩篇 30:5",
    15: "“免我們的債、如同我們免了人的債。” 馬太福音6:12",
    16: "“我的神，我的磐石，我所投靠的。他是我的盾牌，是拯救我的角，是我的高臺，是我的避難所。“撒母耳記22：3",
    17: "“若是你們中間有兩個人在地上、同心合意的求甚麼事、我在天上的父、必為他們成全。“馬太福音18:19",
    18: "“因為你的財寶在那裡、你的心也在那裡。“馬太福音6:21",
    19: "“你在不多的事上有忠心、我要把許多事派你管理．可以進來享受你主人的快樂。“馬太福音25:21",
    20: "“如今卻蒙神的恩典、因基督耶穌的救贖、就白白的稱義。” 羅馬書3:24",
    21: "“我─耶和華憑公義召你，必攙扶你的手，保守你，使你作眾民的中保，作外邦人的光” 以賽亞書42:6",
    22: "“然而，靠著愛我們的主、在這一切的事上、已經得勝有餘了。” 羅馬書8:37",
    23: "“得著智慧的，愛惜生命；保守聰明的，必得好處。” 箴言19:8",
    24: "“凡有的、還要加給他、叫他有餘。“馬太福音25:29",
    25: "“你們的光也當這樣照在人前、叫他們看見你們的好行為、便將榮耀歸給你們在天上的父。“馬太福音5:16",
    26: "“耶和華說：我知道我向你們所懷的意念是賜平安的意念，不是降災禍的意念，要叫你們末後有指望。” 耶利米書29:11",
    27: "“耶和華是我的亮光，是我的拯救，我還怕誰呢？耶和華是我性命的保障，我還懼誰呢？” 詩篇27:1",
    28: "“凡遵行我天父旨意的人、就是我的弟兄姐妹和母親了。” 馬太福音12:50",
    29: "“你要盡心、盡性、盡意、愛主你的神。“馬太福音22:37",
    30: "“你们的话，是，就说是，不是，就说不是。若再多说，就是出于那恶者。“馬太福音5:37",
    31: "“他必像牧人牧養自己的羊群，用膀臂聚集羊羔抱在懷中，慢慢引導那乳養小羊的。” 以賽亞書40:11",
    32: "“我的軛是容易的、我的擔子是輕省的。“馬太福音11:30",
    33: "“當拜主你的神、單要事奉他。” 馬太福音4:10",
    34: "“可見，信道是從聽道來的、聽道是從基督的話來的。“羅馬書10:17",
    35: "“我倚靠神，必不懼怕。人能把我怎麼樣呢？” 詩篇56:11",
    36: "“凡聽見我這話就去行的、好比一個聰明人、把房子蓋在磐石上。“馬太福音7:24",
    37: "“這是我立約的血、為多人流出來、使罪得赦。“馬太福音26:28",
    38: "“要尋求耶和華與他的能力，時常尋求他的面。” 歷代志上 16:11",
    39: "“惟 獨 他 是 我 的 磐 石 ， 我 的 拯 救 ； 他 是 我 的 高 臺 ， 我 必 不 很 動 搖 。“詩 篇 62:2",
    40: "“有施散的，卻更增添；有吝惜過度的，反致窮乏。“ 箴言11:24",
    41: "“患難生忍耐，忍耐生老練，老練生盼望。“羅馬書5:3-4",
    42: "“我的拯救、我的榮耀都在乎神；我力量的磐石、我的避難所都在乎神。“詩篇62：7",
    43: "“飢渴慕義的人有福了．因為他們必得飽足。“馬太福音5:6",
    44: "“萬軍之耶和華說：你們要將當納的十分之一全然送入倉庫，使我家有糧，以此試試我，是否為你們敞開天上的窗戶，傾福與你們，甚至無處可容。“ 瑪拉基書3:10",
    45: "“他是磐石，他的作為完全；他所行的無不公平，是誠實無偽的神，又公義，又正直。“申命記32：4",
    46: "“于是对门徒说，要收的莊稼多、作工的人少。“馬太福音9:37",
    47: "“你父在暗中察看、必然報答你。“馬太福音6:4",
    48: "“來跟從我、我要叫你們得人如得魚一樣。“馬太福音4:19",
    49: "“其次也相倣、就是要愛人如己。“馬太福音22:39",
    50: "“願你的旨意行在地上、如同行在天上。” 馬太福音6:10",
    51: "“你們要去、使萬民作我的門徒、奉父子聖靈的名、給他們施洗。“馬太福音28:19",
    52: "“你們當剛強壯膽，不要害怕，也不要畏懼他們，因為耶和華－你的神和你同去。他必不撇下你，也不丟棄你。” 申命記 31:6",
    53: "“你寄居在這地，我必與你同在，賜福給你，因為我要將這些地都賜給你和你的後裔。我必堅定我向你父亞伯拉罕所起的誓。” 創世記26:3",
    54: "“敬畏耶和華是智慧的開端，認識至聖者便是聰明。“箴言 9:10",
    55: "“愛我、守我誡命的，我必向他們發慈愛，直到千代。” 出埃及記20:6",
    56: "“他要用聖靈與火給你們施洗。“馬太福音3:11",
    57: "“他們都喫、並且喫飽了．把剩下的零碎收拾起來、裝滿了十二個籃子。“馬太福音14:20",
    58: "“就是到天地都廢去了、律法的一點一畫也不能廢去、都要成全。” 馬太福音5:18",
    59: "“在神凡事都能。” 馬太福音19:26",
    60: "“凡投靠你的，願他們喜樂，時常歡呼，因為你護庇他們；又願那愛你名的人都靠你歡欣。” 詩篇 5:11",
    61: "“被人咒罵、我們就祝福。被人逼迫、我們就忍受。“哥林多前書4:12",
    62: "“如今你們回轉，行我眼中看為正的事，各人向鄰舍宣告自由，並且在稱為我名下的殿中、在我面前立約。” 耶利米書34：15",
    63: "“不可試探主你的神。“馬太福音4:7",
    64: "“你要記念耶和華——你的神，因為得貨財的力量是他給你的，為要堅定他向你列祖起誓所立的約，像今日一樣。” 申命記 8:18",
    65: "“哀慟的人有福了．因為他們必得安慰。“馬太福音5:4",
    66: "“求你以你的真理引導我，教訓我，因為你是救我的神。我終日等候你。” 詩篇25:5",
    67: "“我來不是要廢掉、乃是要成全。” 馬太福音5:17",
    68: "“誰願為首、就必作你們的僕人。” 馬太福音20:27",
    69: "“所以神配合的、人不可分開。“馬太福音19:6",
    70: "“為你祝福的，我必賜福與他；那咒詛你的，我必咒詛他。地上的萬族都要因你得福。“創世記12：3",
    71: "“天怎樣高過地，照樣，我的道路高過你們的道路；我的意念高過你們的意念。” 以賽亞書55:9",
    72: "“你施捨的時候、不要叫左手知道右手所作的。“馬太福音6:3",
    73: "“要愛你們的仇敵．為那逼迫你們的禱告。” 馬太福音5:44",
    74: "“虛心的人有福了．因為天國是他們的。” 馬太福音5:3",
    75: "“疲乏的，他賜能力；軟弱的，他加力量。” 以賽亞書 40:29",
    76: "“凡勞苦擔重擔的人、可以到我這裡來、我就使你們得安息。“馬太福音11:28",
    77: "“我必在何烈的磐石那裡，站在你面前。你要擊打磐石，從磐石裡必有水流出來，使百姓可以喝。摩西就在以色列的長老眼前這樣行了。“出埃及記17：6",
    78: "“不叫我們遇見試探．救我們脫離兇惡。“馬太福音6:13",
    79: "“喜樂的心乃是良藥；憂傷的靈使骨枯乾。” 箴言 17:22",
    80: "“當那日你們各人要請鄰舍坐在葡萄樹和無花果樹下．這是萬軍之耶和華說的。” 撒迦利亞3:10 ",
    81: "“因為我深信無論是死、是生、是天使、是掌權的…….都不能叫我們與神的愛隔絕。“羅馬書8:38-39",
    82: "“清心的人有福了．因為他們必得見　神。“馬太福音5:8",
    83: "“因為我要將水澆灌口渴的人，將河澆灌乾旱之地。我要將我的靈澆灌你的後裔，將我的福澆灌你的子孫。” 以賽亞書44:3",
    84: "“神不偏待人” 羅馬書2:11",
    85: "“必有童女、懷孕生子、人要稱他的名為以馬內利。“馬太福音1:23",
    86: "“因為耶和華是你所倚靠的；他必保守你的腳不陷入網羅。” 箴言3:26",
    87: "“神啊，你的慈愛何其寶貴！世人投靠在你翅膀的蔭下。” 詩篇36:7",
    88: "“我知道，你萬事都能做；你的旨意不能攔阻。” 約伯記42:2",
    89: "“願你常施慈愛給認識你的人，常以公義待心裡正直的人。” 詩篇36:10",
    90: "“只要積儹財寶在天上、天上沒有蟲子咬、不能鏽壞、也沒有賊挖窟窿來偷。“馬太福音6:20",
    91: "“不要憂慮” 馬太福音6:31",
    92: "“我豈沒有吩咐你嗎？你當剛強壯膽！不要懼怕，也不要驚惶；因為你無論往哪裏去，耶和華－你的神必與你同在。” 約書亞記 1:9",
    93: "“你要保守你心，勝過保守一切，因為一生的果效是由心發出。” 箴言4:23",
    94: "“你必將生命的道路指示我。在你面前有滿足的喜樂；在你右手中有永遠的福樂。” 詩篇 16:11",
    95: "“憐恤人的人有福了．因為他們必蒙憐恤。“馬太福音5:7",
    96: "“義人引導他的鄰舍；惡人的道叫人失迷。” 箴言12:26",
    97: "“看哪！神是我的拯救；我要倚靠他，並不懼怕。因為主耶和華是我的力量，是我的詩歌，他也成了我的拯救。” 以賽亞書12:2",
    98: "“應當歡喜快樂．因為你們在天上的賞賜是大的“馬太福音5:12",
    99: "“你要專心仰賴耶和華，不可倚靠自己的聰明” 箴言3:5",
    100: "“我不以福音為恥．這福音本是神的大能、要救一切相信的。”羅馬書1:16",
    101: "“謙卑的人看見了就喜樂；尋求神的人，願你們的心甦醒。” 詩篇69:32",
    102: "“若有人要跟從我、就當捨己、背起他的十字架、來跟從我。” 馬太福音16:24",
    103: "“他施捨錢財、賙濟貧窮．他的仁義、存到永遠。他的角必被高舉、大有榮耀。” 詩篇112:9",
    104: "“大山可以挪開，小山可以遷移；但我的慈愛必不離開你；我平安的約也不遷移。這是憐恤你的耶和華說的。“ 以賽亞書 54:10",
    105: "“當孝敬父母．又當愛人如己。” 馬太福音19:19",
    106: "“萬軍之耶和華說：萬國必稱你們為有福的，因你們的地必成為喜樂之地。“ 瑪拉基書 3:12",
    107: "“不可離棄智慧，智慧就護衛你；要愛他，他就保守你。” 箴言4:6",
    108: "“使人和睦的人有福了．因為他們必稱為神的兒子。” 馬太福音5:9",
    109: "“為千萬人存留慈愛，赦免罪孽、過犯，和罪惡，萬不以有罪的為無罪，必追討他的罪，自父及子，直到三、四代。” 出埃及記34:7",
    110: "“不要只在眼前事奉，像是討人喜歡的，要像基督的僕人，從心裡遵行神的旨意。” 以弗所書6:6",
    111: "“但那等候耶和華的必從新得力。他們必如鷹展翅上騰；他們奔跑卻不困倦，行走卻不疲乏。” 以賽亞書40:31",
    112: "“這是耶和華所定的日子，我們在其中要高興歡喜！” 詩篇118:24",
    113: "“耶和華在他面前宣告說：「耶和華，耶和華，是有憐憫有恩典的神，不輕易發怒，並有豐盛的慈愛和誠實” 出埃及記 34:6",
    114: "“被召的人多、選上的人少。“馬太福音22:14",
    115: "“惟有忍耐到底的、必然得救。“馬太福音10:22",
    116: "“我喜愛良善，不喜愛祭祀；喜愛認識神，勝於燔祭。 “何西阿書 6:6",
    117: "“耶和華引導他們經過沙漠。他們並不乾渴；他為他們使水從磐石而流，分裂磐石，水就湧出。” 以賽亞書48:21",
    118: "“義人的道是正直的；你為正直的主，必修平義人的路。” 以賽亞書26:7",
    119: "“你們是世上的鹽“馬太福音5:13",
    120: "“惟有聽從我的，必安然居住，得享安靜，不怕災禍。“ 箴言 1:33",
    121: "“我心裡柔和謙卑、你們當負我的軛、學我的樣式、這樣、你們心裡就必得享安息。” 馬太福音11:29",
    122: "“不要為明天憂慮．因為明天自有明天的憂慮。“馬太福音6:34",
    123: "“你要認識神，就得平安；福氣也必臨到你。“ 約伯記 22:21",
    124: "“你們禱告、無論求甚麼、只要信、就必得著。” 馬太福音21:22",
    125: "“現在你們要剛強，不要手軟，因你們所行的必得賞賜。” 歷代志下 15:7",
    126: "“在你一切所行的事上都要認定他，他必指引你的路。” 箴言3:6",
    127: "“又要以耶和華爲樂，他就將你心裏所求的賜給你。” 詩篇37:4",
    128: "“求你以你的真理引導我，教訓我，因為你是救我的神。我終日等候你。” 詩篇25:5",
    129: "“聖靈與我們的心同證我們是神的兒女。” 羅馬書8:16",
    130: "“所以，你要知道耶和華─你的神，他是神，是信實的神；向愛他、守他誡命的人守約，施慈愛，直到千代” 申命記7:9",
    131: "“耶和華說：看哪，在我這裡有地方，你要站在磐石上。“出埃及記33：21",
    132: "“你們要先求他的國、和他的義這些東西都要加給你們了。” 馬太福音6:33",
    133: "“我將耶和華常擺在我面前，因他在我右邊，我便不致搖動。” 詩篇16：8",
    134: "“那時候、他要照各人的行為報應各人。” 馬太福音16:27",
    135: "“為義受逼迫的人有福了．因為天國是他們的。“馬太福音5:10",
    136: "“你們必歡歡喜喜而出來，平平安安蒙引導。大山小山必在你們面前發聲歌唱；田野的樹木也都拍掌。” 以賽亞書55:12",
    137: "“神啊，求你為我造清潔的心，使我裡面重新有正直的靈。“ 詩篇51:10",
    138: "“耶和華－你的神是施行拯救、大有能力的主。他在你中間必因你歡欣喜樂，默然愛你，且因你喜樂而歡呼。” 西番雅書 3:17",
    139: "“所以你當歸向你的神，謹守仁愛、公平，常常等候你的神。” 何西阿書12:6",
    140: "“入口的不能污穢人、出口的乃能污穢人。” 馬太福音15:11",
    141: "“我揀選了信實的道路，我把你的典章擺在我面前。” 詩篇 119:30",
    142: "“又要將他豐盛的榮耀、彰顯在那蒙憐憫早豫備得榮耀的器皿上。” 羅馬書9:23",
    143: "“你們是世上的光．城造在山上、是不能隱藏的。” 馬太福音5:14",
    144: "“我知道，你萬事都能做；你的旨意不能攔阻。” 約伯記42:2",
    145: "“所以，我奔跑、不像無定向的．我鬥拳、不像打空氣的。“哥林多前書9:26",
    146: "“願純全、正直保守我，因為我等候你。” 詩篇 25:21",
    147: "“你們當倚靠耶和華直到永遠，因為耶和華是永久的磐石。“以賽亞書26：4",
    148: "“溫柔的人有福了．因為他們必承受地土。“馬太福音5:5",
    149: "“所以你們要完全、像你們的天父完全一樣。“馬太福音5:48",
    150: "“耶和華─我的磐石，我的救贖主啊，願我口中的言語、心裡的意念在你面前蒙悅納。“詩篇19：14",
    151: "“凡事我都可行、但無論那一件、我總不受他的轄制。“哥林多前書6:12",
    152: "“你且去等候結局，因為你必安歇。到了末期，你必起來，享受你的福分。” 但以理書12:13",
    153: "“他必居高處；他的保障是磐石的堅壘；他的糧必不缺乏；他的水必不斷絕。“以賽亞書33：16 ",
    154: "“天國近了、你們應當悔改。“馬太福音3:2",
    155: "“你們在天上的父、也是這樣不願意這小子裡失喪一個。” 馬太福音18:14",
    156: "“耶和華是良善正直的，所以他必指示罪人走正路。“ 詩篇 25:8",
    157: "“看哪，耶和華─你的神已將那地擺在你面前，你要照耶和華─你列祖的神所說的上去得那地為業；不要懼怕，也不要驚惶。” 申命記1:21",
    158: "“你就明白敬畏耶和華，得以認識神。”箴言 2:5",
    159: "“好施捨的，必得豐裕；滋潤人的，必得滋潤。” 箴言11:25",
    160: "“所以，主耶和華如此說：看哪，我在錫安放一塊石頭作為根基，是試驗過的石頭，是穩固根基，寶貴的房角石；信靠的人必不著急。“以賽亞書28:16",
    161: "“凡仰望耶和華的人，你們都要壯膽，堅固你們的心！” 詩篇31:24",
    162: "“他叫日頭照好人、也照歹人、降雨給義人、也給不義的人。” 馬太福音5:45",
    163: "“惟有基督在我們還作罪人的時候為我們死、神的愛就在此向我們顯明了。“羅馬書5:8",
    164: "“你們不能又事奉神、又事奉瑪門。“馬太福音6:24",
    165: "“應當稱謝耶和華；因他本為善，他的慈愛永遠長存！” 歷代志上16:34",
    166: "“所以凡自己謙卑像這小孩子的、他在天國裡就是最大的。” 馬太福音18:4",
    167: "“除了耶和華，誰是神呢？除了我們的神，誰是磐石呢？“詩篇18：31",
    168: "“從天上有聲音說、這是我的愛子、我所喜悅的。“ 馬太福音3:17",
    169: "“人活著、不是單靠食物、乃是靠　神口裡所出的一切話。” 馬太福音4:4",
    170: "“公義必當他的腰帶；信實必當他脅下的帶子。“以賽亞書11:5",
    171: "“你們要結出果子來、與悔改的心相稱。” 馬太福音3:8",
    172: "“堅心倚賴你的，你必保守他十分平安，因為他倚靠你。” 以賽亞書26:3",
    173: "“你們祈求、就給你們．尋找、就尋見．叩門、就給你們開門。” 馬太福音7:7",
    174: "“不背著他的十字架跟從我的、也不配作我的門徒。” 馬太福音10:38",
    175: "“迦勒底人自高自大，心不正直；惟義人因信得生” 哈巴谷書 2:4",
    176: "“當將你的事交託耶和華，並倚靠他，他就必成全。” 詩篇37:5",
    177: "“願耶和華向你仰臉，賜你平安。” 民數記6:26",
    178: "“耶和華必賜力量給他的百姓；耶和華必賜平安的福給他的百姓。“ 詩篇 29:11",
    179: "“我們的心向來等候耶和華；他是我們的幫助，我們的盾牌。” 詩篇33:20",
    180: "“我呼求的日子，你就應允我，鼓勵我，使我心裏有能力。” 詩篇 138:3",
    181: "“你們願意人怎樣待你們、你們也要怎樣待人。”路加福音6:31",
    182: "“你從水中經過，我必與你同在；你逿過江河，水必不漫過你；你從火中行過，必不被燒，火燄也不著在你身上。” 以賽亞書43：2",
    183: "“聰明的拿著燈、又豫備油在器皿裡。“馬太福音25:4",
    184: "“因為耶和華本為善。他的慈愛存到永遠；他的信實直到萬代。”詩篇100:5",
    185: "“要使地上萬民都知道，耶和華的手大有能力，也要使你們永遠敬畏耶和華－你們的神。”約書亞記 4:24",    
}

export function getVerseList () {
    return VERSELISTObjc;
    // return shuffle(VERSELIST.concat(VERSELIST2));
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}