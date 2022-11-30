
function changeMBTI() {
    document.getElementById('MBTI').parentNode.style.background = '#21402F';
    document.getElementById('MBTI').style.color = '#FDF1E8';
}
// 點選 MBTI 改變內容------------------------
function INTJ() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "INTJ 建築師" + '</h2>' +
        '<h4>' + "人格特徵：擅長思考及解決問題、擅長吸收理論概念、精準的洞察力" + '</h4>' +
        '<p>' + "內斂冷靜，擅長思考與推理，夠站在與眾不同的視角觀察事物。而且對知識有著敏銳直覺及獨特的見解，經常沉醉在自己的世界中思考，往往會很容易忽略別人及現實生活，因此會讓人有一種疏遠的感覺，同時對新環境與人亦比較缺乏安全感，想與INTJ成為朋友，需要長時間建立關係及信任，他們偏好跟有共同話題及擁有豐富知識的人交流。" + '</p>' +
        '<h4>' + "適合的水晶：海藍寶" + '</h4>' +
        '<p>' + "海藍寶能提升語言與溝通能力，同時也是愛與和平的象徵，有助於不善表達情感的INTJ更樂於展現自我，收斂鋒芒變得更加柔和。" + '</p>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/1_1.jpg";
}

function INTP() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "INTP 邏輯學家" + '</h2>' +
        '<h4>' + "人格特徵：善於用客觀角度分析、發掘新觀、強大邏輯能力、天資聰慧" + '</h4>' +
        '<p>' + "平時亦非常隨和，不喜歡干涉他人的生活，只會著迷於有興趣的事物，但當自己的意見被否定，便會努力辯論，堅持立場，比起說話，他們更擅於以寫作來表達情感，除此之外INTP非常理性，依靠邏輯及客觀事實作判斷，容易讓人認為他們不懂得人情世故，不明白為何大家會為情感問題而煩惱。" + '</p>' +
        '<h4>' + "適合的水晶：紅瑪瑙" + '</h4>' +
        '<p>' + "紅瑪瑙能夠平衡INTP過於理性的思维方式，有助於INTP增加包容與同理心。" + '</p>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/2_1.jpg";

}

function INFJ() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "INFJ 提倡者" + '</h2>' +
        '<h4>' + "人格特徵：懂得察言觀色、圓融、善於聆聽、具正義感、努力堅持信念" + '</h4>' +
        '<p>' + "INFJ擅長思考，見解獨特，成績總是名列前茅並且擁有敏銳的直覺，具有與生俱來的正義感，有非常高道德標準，及大愛奉獻的精神，希望世界會變得更美好，自己亦能出一分力帶來變革，能腳踏實地完成目標，留下深遠的積極影響，同時INFJ是一個和平主義者，討厭衝突及紛爭，所以會盡力充當「和事佬」協助調解，以免傷和氣。" + '</p>' +
        '<h4>' + "適合的水晶：紫水晶" + '</h4>' +
        '<p>' + "善解人意而經常忽略自己感受的INFJ，建議配戴紫水晶，協助调整心態，平衡生理、心理與情緒，提供安神的療癒力，更懂得愛自己。" + '</p>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/8_1.jpg";
}

function INFP() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "INFP 調停者" + '</h2>' +
        '<h4>' + "人格特徵：重視情感交流、具奉獻精神、好奇心、表達能力高、堅定目標" + '</h4>' +
        '<p>' + "性格溫柔貼心，做事的原則以情感、道德及善良為準則，很客易讓別人產生好感，相處時亦能平等地尊重每一個人，誠懇的態度亦非常能打動人心。著重心靈上的滿足，不會隨波逐流，是堅守自己價值觀及信念的哲學家，所以金錢、成就、權力等，從來都不是第一順位，甚至會因為世界上太多無能為力的壞事而感到沮喪，因此容易陷入自我批評的狀態。" + '</p>' +
        '<h4>' + "適合的水晶：黃水晶" + '</h4>' +
        '<p>' + "黃水晶有助於INFP 增強自信與理智，平緩心境，更勇於追求夢想。" + '</p>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/11_1.jpg";
}

function ENTJ() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "ENTJ 指揮官" + '</h2>' +
        '<h4>' + "人格特徵：擅長解決問題&做決策、口齒伶俐，理性、能堅定向目標前進" + '</h4>' +
        '<p>' + "外向健談，又非常具領袖魅力，處事時行動力高，會準備清晰有條理的計劃，總會用理性地解決問題，而且通常都非常口齒伶俐及機靈醒目，只要有足夠的時間和資源，ENTJ可以實現任何目標，非常有企圖心的ENTJ在職場上會有一點強勢的感覺，可能在不經意間傷害到身邊的人。" + '</p>' +
        '<h4>' + "適合的水晶：白月光石" + '</h4>' +
        '<p>' + "透過白月光石温柔的能量，調和性格，協助稳定情绪，讓ENTJ變得更细腻，且溫柔對待他人，穩定人際關係。" + '</p>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/ring/6_1.jpg";
}

function ENTP() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "ENTP 辯論家" + '</h2>' +
        '<h4>' + "人格特徵：思路敏捷、將挫折視為挑戰、充滿好奇心、不被框架侷限" + '</h4>' +
        '<p>' + "對學習新事物非常有興趣，又因思路敏捷能快速掌握大量資訊，所以知識豐富又充滿想像力，會多角度觀察事物，喜歡集思廣益和大膽思考，並勇於表達自己的看法及挑戰常規的創意想法，但執行力往往偏弱，常常停留在思考卻缺乏實際行動。" + '</p>' +
        '<h4>' + "適合的水晶：黑曜石" + '</h4>' +
        '<p>' + "黑曜石有穩定的磁場，有助於ENTP舒缓壓力，加強行動力。" + '</p>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/5_2.jpg";
}

function ENFJ() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "ENFJ 主人公" + '</h2>' +
        '<h4>' + "人格特徵：擅長與人相處、凝聚人心、有同理心、很強的領導能力強" + '</h4>' +
        '<p>' + "有著激勵他人的熱情，而且重視團體合作，不會因為自己的功勞而忽視別人的努力，反而因為是利他主義者，會更傾向讓別人成功，ENFJ也傾向於直言不諱地表達他們的價值觀，並且能引起他人共鳴的方式說話，成為令人難以置信的有說服力和鼓舞人心的溝通者，不過有時會過於執著，試圖“啟發”他人時，可能會被視為傲慢。" + '</p>' +
        '<h4>' + "適合的水晶：茶晶" + '</h4>' +
        '<p>' + "茶晶能使感到茫然的 ENFJ適度放寬心，同時協助分擔負面能量，消除內心焦慮，使ENFJ別過於執著、鑽牛角尖。" + '</p>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/15_1.jpg";
}

function ENFP() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "ENFP 競選者" + '</h2>' +
        '<h4>' + "人格特徵：熱情有夢想，充滿動力、交際能力強、極具創意和影響力" + '</h4>' +
        '<p>' + "人格類型的人都熱情外向，具有出色的社交能力，而且處事非常獨立，對於ENFP而言，活出自我及追隨自己的心意是非常重要的，不會甘心被當主流侷限和滿足於穩定的現狀，有時可能會使他們忽略現實的問題，而廣泛的興趣，有時也會在訂定計畫後卻不能持之以恆，熱情如火又具感染力，興趣廣泛的ENFP，有時難免會感到疲憊，難以集中注意力。" + '</p>' +
        '<h4>' + "適合的水晶：拉長石" + '</h4>' +
        '<p>' + "拉長石有助於熱情如火又具感染力，興趣廣泛的ENFP消除疲勞，增加體力。" + '</p>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/18_1.jpg";
}

function ISTJ() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "ISTJ 調查員" + '</h2>' +
        '<h4>' + "人格特徵：人格特徵：盡忠職守、深思熟慮，注重細節、實事求事、內斂穩重" + '</h4>' +
        '<p>' + "是實事求事的「行動派」，他們不喜歡做無謂的假設，不會說空話，當他們承諾做某事時，他們一定會堅持到底，在遇到問題時會先客觀分析，然後採取最切實有效的行動，盡心盡力、決策果斷的特質讓ISTJ的朋友都非常引以為傲，不過務實的個性可能讓別人誤解他們冷漠，甚至有點不近人情。" + '</p>' +
        '<h4>' + "適合的水晶：粉晶" + '</h4>' +
        '<p>' + "配戴粉晶，能助於加強親和力改善人際關係。" + '</p>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/4_1.jpg";
}

function ISFJ() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "ISTJ 守護者" + '</h2>' +
        '<h4>' + "人格特徵：無私大愛、善於理解別人的情緒、傾聽者、擅於觀察" + '</h4>' +
        '<p>' + "擁有非常獨特的個性，他們對自己生活熟悉的常規會有一種執著及堅持，然而又非常響往接觸新事物的刺激感，雖然剛開始會有一點抗拒，但有不錯的適應力，另外ISFJ對人事物有著細膩觀察，能夠發現他人的需求並體貼地給予幫助，善於理解別人的情緒，並會給予安慰，但是因為性格比較內向，很少會主動表達自己的情感，時常忽視自己的需求。" + '</p>' +
        '<h4>' + "適合的水晶：葡萄石" + '</h4>' +
        '<p>' + "葡萄石能幫助ISFJ緩解壓力，维持身心平衡，幫助ISFJ放鬆自己。" + '</p>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/16_1.jpg";
}

function ISTP() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "ISTP 鑑賞家" + '</h2>' +
        '<h4>' + "人格特徵：擅長邏輯思考，觀察力強、行動力高、具冒險精神、不拘小節" + '</h4>' +
        '<p>' + "看起來比較內向安靜，但其實內心充滿想法，而且非常擅長思考及推理，特別喜歡用雙手及眼睛探索，體驗世界，對缺乏刺激感及不關心的事情不感興趣，極具好奇心，較無法專注於正式學習。" + '</p>' +
        '<h4>' + "適合的水晶：青金石" + '</h4>' +
        '<p>' + "青金石能增強洞察力且使大腦保持清晰，非常適合充滿好奇心且喜愛思考的 ISTP，可以讓他們注意力更集中，減少分心。" + '</p>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/13_1.jpg";
}

function ISFP() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "ISFP 探險家" + '</h2>' +
        '<h4>' + "人格特徵：善解人意、具藝術細胞、活在當下，擅長跳脫框架" + '</h4>' +
        '<p>' + "常有人說ISFP是真正的藝術家，世界上任何人事物都很容易引起他們的共鳴、從中受到啟發，擁有在日常生活中找到快樂的能力，ISFP的氣質獨特，性格內斂、靈活、親切，且充滿熱情，但做決定時常優柔寡斷，會保持開放性的選擇，留一條後路讓自己有機會改變。" + '</p>' +
        '<h4>' + "適合的水晶：金髮晶" + '</h4>' +
        '<p>' + "有時會缺乏規劃與過度依賴他人的ISFP，建議可以配戴金髮晶，增強魄力與決策力。" + '</p>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/10_1.jpg";
}

function ESTJ() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "ESTJ 總經理" + '</h2>' +
        '<h4>' + "人格特徵：具領導才能、務實，自信有主見、重視傳統、能融入制度" + '</h4>' +
        '<p>' + "ESTJ外向又具有大將風範，自信有主見，凡事都會以身作則，又有非常優秀的組織能力，對周圍的事務都了如指掌，總能夠搞清楚細節並整理出簡單易明的規律，給予具建設性的指導，不過因為講求邏輯分析及客觀事實，所以偏向遵循紀律及從以往經驗學習，偶爾會被視為呆板及不懂得變通。" + '</p>' +
        '<h4>' + "適合的水晶：藍虎眼石" + '</h4>' +
        '<p>' + "藍虎眼石有助於ESTJ變得更加有彈性，對於想跳脫框架改變自己的ESTJ是個不錯的選擇。" + '</p>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/17_1.jpg";
}

function ESFJ() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "ESFJ 執政官" + '</h2>' +
        '<h4>' + "人格特徵：是非分明、具優秀的組織能力、凡事顧及別人感受，值得信賴" + '</h4>' +
        '<p>' + "身為人氣王的ESFJ，具有很強的社交能力，擅長與陌生人的溝通交流並建立關係，他們非常樂意聆聽別人的煩惱，是一個非常細心的人，並且ESFJ不喜歡引起沖突，所以總會希望能對事情有十足十的把握，做事喜歡有全盤計劃，並會要求別人要跟從，當被別人否定時，會特別容易受傷。" + '</p>' +
        '<h4>' + "適合的水晶：石榴石" + '</h4>' +
        '<p>' + "較在意他人想法的ESFJ，建議可以配戴石榴石，增加自信，找回內在平衡。" + '</p>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/bracelet/1_1.jpg";
}

function ESTP() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "ESTP 企業家" + '</h2>' +
        '<h4>' + "人格特徵：行動派、振奮團隊士氣、具大膽實驗精神、擅長掌握做事訣竅" + '</h4>' +
        '<p>' + "ESTP非常健談，對話充滿活力，能夠觀察到別人未有注意的細節，而且是直率果斷的行動派，遇到問題時，並不會坐下來思考行動計畫，而是乾脆動身去做，不過有時容易逞一時之快缺乏耐性。" + '</p>' +
        '<h4>' + "適合的水晶：藍紋瑪瑙" + '</h4>' +
        '<p>' + "藍紋瑪瑙能幫助緩解煩躁與壓力，讓行事衝動的ESTP冷靜下來，內心平靜的去處理事情。" + '</p>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/3_1.jpg";
}

function ESFP() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "ESFP 表演者" + '</h2>' +
        '<h4>' + "人格特徵：活在當下、樂觀開朗、具感染力、擁有非常的美感" + '</h4>' +
        '<p>' + "ESFP善於散發個人魅力，亦很喜歡研究新設計，而且是一個活在當下及享樂主義至上的人，比起專心於一件事情，他們更傾向擁有不同的與趣。" + '</p>' +
        '<h4>' + "適合的水晶：螢石" + '</h4>' +
        '<p>' + "代表著鎮定、思考與專注，能量穩定柔和的螢石，有助於緩和ESFP，避免過度急躁被情緒牽著走，亦能幫助屏除雜亂思緒，集中注意力。" + '</p>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/20_1.jpg";
}

// 點選 12星座 改變內容------------------------

function Jan() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "摩羯座 12.22-01.19" + '</h2>' +
        '</br>' +
        '</br>' +
        '<p>' + "摩羯座是個勤勞、腳踏實地的星座，做事一絲不苟，保守的個性常常給人有一份獨處的感覺，虎眼石有助於增強積極進取的人生觀與精神，並培養摩羯座的敏銳的洞察力，能夠注意觀察周圍的人事物，正確的作出判斷。" + '</p>' +
        '</br>' +
        '</br>' +
        '<h4>' + "適合的水晶：虎眼石" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/ring/2_1.jpg";
}

function Feb() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "水瓶座 01.20-02.18" + '</h2>' +
        '</br>' +
        '</br>' +
        '<p>' + "水瓶是典型風象星座的性格，不拘小節，具有銳利的觀察力、推測能力，以及富有冒險的開拓精神，崇尚自由，也不會累積情緒在心裡，不過有時想法讓人摸不著頭緒，連自己也感受到自己的矛盾，紫水晶有助於水瓶平衡生理、心理與情緒，提供安神的療癒力。" + '</p>' +
        '</br>' +
        '</br>' +
        '<h4>' + "適合的水晶：紫水晶" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/7_1.jpg";
}

function Mar() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "雙魚座 02.19-03.20" + '</h2>' +
        '</br>' +
        '</br>' +
        '<p>' + "感性的雙魚座具有良好的觀察力、領悟力，而且非常富有同理心，時常為他人著想，不過由於性格的關係，他們不太敢拒絕別人所託，粉晶可以幫助雙魚改善人際關係，多多為自己考慮。" + '</p>' +
        '</br>' +
        '</br>' +
        '<h4>' + "適合的水晶：粉晶" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/4_1.jpg";
}

function Apr() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "牡羊座 03.21-04.19" + '</h2>' +
        '</br>' +
        '</br>' +
        '<p>' + "白羊座性格充滿活力自信、主觀意識強、勇於接受新觀念有明快的決斷力，喜歡有話直說不會拐彎抹角，但這樣的直線前進的思考，做事衝動不太審慎，也容易帶來麻煩，主要平衡能量的白水晶能夠幫助牡羊穩定身心及情緒。" + '</p>' +
        '</br>' +
        '</br>' +
        '<h4>' + "適合的水晶：白水晶" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/21_1.jpg";
}

function May() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "金牛座 04.20-05.20" + '</h2>' +
        '</br>' +
        '</br>' +
        '<p>' + "金牛座一直給別人穩重、務實可靠的感覺，耐性十足，做事有計劃能堅持到底，個性溫和順從的金牛座，追求平和的生活，不擅於表達自己的想法，海藍寶水晶可以為金牛增加自信、鼓勵金牛準確的表達自己的意見。" + '</p>' +
        '</br>' +
        '</br>' +
        '<h4>' + "適合的水晶：海藍寶" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/1_1.jpg";
}

function Jun() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "雙子座 05.21-06.21" + '</h2>' +
        '</br>' +
        '</br>' +
        '<p>' + "雙子想象力豐富，適應力強、懂得隨機應變，對朋友來說是個很好的傾聽者，對事物有著強大好奇心，但是因為經常給稀奇的事情吸引，常常有三分鐘熱度，心思很難定下來的時候，增強理智的黃水晶，有助雙子平緩心境，嘗試尋找按部就班的實際做法。" + '</p>' +
        '</br>' +
        '</br>' +
        '<h4>' + "適合的水晶：黃水晶" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/bracelet/2_1.jpg";
}


function Jul() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "巨蟹座 06.22-07.22" + '</h2>' +
        '</br>' +
        '</br>' +
        '<p>' + "巨蟹座有堅硬的外表、柔軟真摯的內心，他們很懂得偽裝和保護自己，看起來很堅強，但內心卻很細膩，因此有些情緒化，紅瑪瑙是最具療效的寶石之一，可幫助巨蟹平衡正負能量，維持身體及心靈和諧穩定思緒。" + '</p>' +
        '</br>' +
        '</br>' +
        '<h4>' + "適合的水晶：紅瑪瑙" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/2_1.jpg";
}

function Aug() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "獅子座 07.23-08.22" + '</h2>' +
        '</br>' +
        '</br>' +
        '<p>' + "獅子座為人正直、慷慨大方，他們充滿自信心，有領導能力與激勵人心的特質，但有時會顯得心性急燥且浮動，不容易安於現狀，金髮晶有助於獅子加強信心和判斷力，貫徹目標與執行。" + '</p>' +
        '</br>' +
        '</br>' +
        '<h4>' + "適合的水晶：金髮晶" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/10_1.jpg";
}

function Sep() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "處女座 08.23-09.22" + '</h2>' +
        '</br>' +
        '</br>' +
        '<p>' + "處女座認真、注重細節、腳踏實地，做事認真且守信用，不善於表達自己的感情，重視秩序，有時候做事過於講究完美，有王者力量、避邪招財作用的藍瑪瑙，可以再為有行動力的處女座推一把，更容易達到目標。" + '</p>' +
        '</br>' +
        '</br>' +
        '<h4>' + "適合的水晶：藍瑪瑙" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/ring/5_1.jpg";

}

function Oct() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "天秤座 09.23-10.23" + '</h2>' +
        '</br>' +
        '</br>' +
        '<p>' + "天秤座是和平的協調者，冷靜而崇尚調和，對任何事都不會狂熱，很會體貼別人，不喜歡爭執，不過，猶豫不決、意志不堅定，容易受人影響，石榴石有助於天秤座增強穩定度、信心與耐心，提高積極主動的企圖心。" + '</p>' +
        '</br>' +
        '</br>' +
        '<h4>' + "適合的水晶：石榴石" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/bracelet/1_1.jpg";
}


function Nov() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "天蠍座 10.24-11.22" + '</h2>' +
        '</br>' +
        '</br>' +
        '<p>' + "天蠍座欸決定的事情非常有執行力，直覺敏銳，充滿激情，對不怕挫折堅持到底，不會受任何阻礙所迷惑，而青金石的能量有助提升精神與心靈的能量，幫助天蠍座在衝刺時，清澈思想、更加沉著冷靜去思考、達成目標。" + '</p>' +
        '</br>' +
        '</br>' +
        '<h4>' + "適合的水晶：青金石" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/13_1.jpg";
}

function Dec() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "射手座 11.23-12.21" + '</h2>' +
        '</br>' +
        '</br>' +
        '<p>' + "天生樂觀的射手座，性格正直坦率，喜歡幫助別人和待人真誠，他們擁有很好的人緣、嚮往自由，但往往做事過度理想化，拉長石有助於射手平靜過於活躍的頭腦，帶來新的思路。" + '</p>' +
        '</br>' +
        '</br>' +
        '<h4>' + "適合的水晶：拉長石" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/18_1.jpg";
}

// 點選 所有水晶 改變內容------------------------
function Aquamarine() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "海藍寶" + '</h2>' +
        '<h2>' + "Aquamarine" + '</h2>' +
        '</br>' +
        '<p>' + "又稱海水藍寶，屬綠柱石家族的一員" + '</p>' +
        '<h4>' + "外觀：透明而帶著藍色或海藍色的寶石" + '</h4>' +
        '<h4>' + "功效：增強表達與說服力、改善呼吸系統、助冷靜、安定思緒" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/bracelet/4_1.jpg";
}

function Agate() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "瑪瑙" + '</h2>' +
        '<h2>' + "Agate" + '</h2>' +
        '<p>' + "又稱海水和玉髓類一樣是石英的一種藍寶，屬綠柱石家族的一員" + '</p>' +
        '<p>' + "◆紅瑪瑙：激發熱情、排除負能量、改善內分泌、加強血液循環、消除疲勞和壓力、避邪" + '</p>' +
        '<p>' + "◆ 藍紋瑪瑙：使內心平靜、增強表達能力、消除疲勞和壓力、避邪服力、改善呼吸系統、助冷靜、安定思緒" + '</p>' +
        '<h4>' + "外觀：色彩鮮艷，帶有條帶狀或環帶狀紋路" + '</h4>' +
        '<h4>' + "功效：增強表達與說功效" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/2_1.jpg";
}

function Amethyst() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "紫水晶" + '</h2>' +
        '<h2>' + "Amethyst" + '</h2>' +
        '</br>' +
        '<p>' + "又稱海水藍為石英中常見的種類，又稱紫石英，是水晶的一種紫羅蘭色變體。寶，屬綠柱石家族的一員" + '</p>' +
        '<h4>' + "外觀：透明而外觀：顏色從淺到深的紫色帶著藍色或海藍色的寶石" + '</h4>' +
        '<h4>' + "功效：提升智慧、助思考、提升貴人運、提高直覺力、穩定情緒" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/8_1.jpg";
}

function Citrine() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "黃水晶" + '</h2>' +
        '<h2>' + "Citrine" + '</h2>' +
        '</br>' +
        '<p>' + "象徵財富與地位，因此又稱「財富之石」，為黃色的石英變種。" + '</p>' +
        '<h4>' + "外觀：含有鐵離子，顏色從淡黃至褐色" + '</h4>' +
        '<h4>' + "功效：招財、平穩情緒、理性、振奮精神、助消化" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/11_1.jpg";
}

function Moonstone() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "月光石" + '</h2>' +
        '<h2>' + "Moonstone" + '</h2>' +
        '</br>' +
        '<p>' + "又稱月長石、月亮石，是具有月光效應的正長石礦物，有著「戀人之石」的美名。" + '</p>' +
        '<h4>' + "外觀：白色半透明狀，經由光線折射產生不同色調的光暈，常見為藍光" + '</h4>' +
        '<h4>' + "功效：助眠、鎮定情緒、療癒心靈、促進感情和諧、養顏美容" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/ring/6_1.jpg";
}

function Obsidian() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "黑曜石" + '</h2>' +
        '<h2>' + "Obsidian" + '</h2>' +
        '</br>' +
        '<p>' + "又稱月長石、月亮石，是具有月光效應的正長石礦物，有著「戀人之石」的美名。" + '</p>' +
        '<h4>' + "外觀：通常為不透明的黑色，表面會有彩虹眼或是像金沙般的效應" + '</h4>' +
        '<h4>' + "功效：避邪擋煞、吸收負能量、防小人" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/5_2.jpg";
}

function Smokyquartz() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "茶晶" + '</h2>' +
        '<h2>' + "Smokyq Quartz" + '</h2>' +
        '</br>' +
        '<p>' + "又稱煙晶，為煙燻色系的半透明石英，其色澤為自然輻射所形成。" + '</p>' +
        '<h4>' + "外觀：顏色從半透明灰色一直到全透明的灰褐色都有，有的甚至為黑色" + '</h4>' +
        '<h4>' + "功效：助眠、鎮定情緒、療癒心靈、促進感情和諧、養顏美容" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/15_1.jpg";
}

function Labradorite() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "拉長石" + '</h2>' +
        '<h2>' + "Labradorite" + '</h2>' +
        '</br>' +
        '<p>' + "又稱光譜石、灰月光石，是一種富含鈣的斜長石礦物。" + '</p>' +
        '<h4>' + "外觀：色澤較月光石深，為半透明到不透明的灰黑色系礦石，透過改變角度的光線反射，能出現虹彩光暈" + '</h4>' +
        '<h4>' + "功效：增強直覺、提高洞察力、消除疲勞、靈性、激發潛能" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/18_1.jpg";
}

function Rosequartz() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "粉晶" + '</h2>' +
        '<h2>' + "Rose Quartz" + '</h2>' +
        '</br>' +
        '<p>' + "俗稱「愛情之石」的粉水晶，又稱芙蓉晶或玫瑰水晶，為石英的一種。" + '</p>' +
        '<h4>' + "外觀：不透到半透至透明的都有，因含有微量鈦元素而形成粉紅色" + '</h4>' +
        '<h4>' + "功效：招桃花、增進人緣、愉悅心情、療癒情傷" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/4_1.jpg";
}

function Prehnite() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "葡萄石" + '</h2>' +
        '<h2>' + "Prehnite" + '</h2>' +
        '</br>' +
        '<p>' + "有著「希望之石」的稱號，又稱「綠碧柳」。" + '</p>' +
        '<h4>' + "外觀：常見為透明和半透明的淡綠色，像極葡萄的果肉。" + '</h4>' +
        '<h4>' + "功效：緩解壓力、舒緩緊張情緒、撫平傷痛、增強毅力" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/16_1.jpg";
}

function Lapislazuli() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "青金石" + '</h2>' +
        '<h2>' + "Lapislazuli" + '</h2>' +
        '</br>' +
        '<p>' + "歷史最早可追溯到6000多年前，在不同的古文明遺址中可發掘到青金石所製的首飾，甚至在埃及被視為「聖石」。" + '</p>' +
        '<h4>' + "外觀：常為不透明的藍色，含有金色的黃鐵礦斑點" + '</h4>' +
        '<h4>' + "功效：助冥想、集中注意力、緩解焦慮、冷靜思考" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/13_1.jpg";
}

function Rutilatedquartz() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "金髮晶" + '</h2>' +
        '<h2>' + "Rutilatedquartz" + '</h2>' +
        '</br>' +
        '<p>' + "髮晶為水晶中包含不同種類的針狀礦石內包物，看似髮絲狀，顧名為髮晶。" + '</p>' +
        '<h4>' + "外觀：由於內部的金紅石包裹體使其呈現金色的色澤，髮絲細稱為金髮晶，髮絲粗多呈同一方向則為鈦晶" + '</h4>' +
        '<h4>' + "功效：招財、提升魄力、增加信心、增加判斷力" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/10_1.jpg";
}


function Tigerseye() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "虎眼石" + '</h2>' +
        '<h2>' + "Tiger's Eye" + '</h2>' +
        '</br>' +
        '<p>' + "又稱虎睛石，是木化石的一種，屬於石英家族的一員。" + '</p>' +
        '<h4>' + "外觀：具有貓眼效果，帶有仿絲質的光紋。" + '</h4>' +
        '<h4>' + "功效:" + '</h4>' +
        '<p>' + "◆ 黃虎眼：招財、積極進取、提高注意力" + '</p>' +
        '<p>' + "◆ 藍虎眼：軟化固執、積極進取、提升洞察力" + '</p>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/17_1.jpg";
}

function Garnet() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "石榴石" + '</h2>' +
        '<h2>' + "Garnet" + '</h2>' +
        '</br>' +
        '<p>' + "又稱紅石榴，外型如石榴籽，象徵生命的延續與新生的希望，有著「氣血之石」的稱號。" + '</p>' +
        '<h4>' + "外觀：常見為暗紅色與棕紅色" + '</h4>' +
        '<h4>' + "功效：促進血液循環、加強自信、增進活力、堅定意志" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/14_1.jpg";
}

function Rockcrystal() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "白水晶" + '</h2>' +
        '<h2>' + "Rock crystal" + '</h2>' +
        '</br>' +
        '<p>' + "又稱海水藍寶，屬綠柱石家族的一員" + '</p>' +
        '<h4>' + "外觀：透明而帶著藍色或海藍色的寶石" + '</h4>' +
        '<h4>' + "功效：增強表達與說服力、改善呼吸系統、助冷靜、安定思緒" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/necklace/1_1.jpg";
}

function Fluorite() {
    var elem = document.getElementById('text');
    var img = document.getElementById('mbtiImg');
    elem.innerHTML = '<h2>' + "瑩石" + '</h2>' +
        '<h2>' + "Fluorite" + '</h2>' +
        '</br>' +
        '<p>' + "又稱氟石、砩石，是自然界中常見的礦物。" + '</p>' +
        '<h4>' + "外觀：螢石有多種顏色，由雜質、輻射暴露等因素決定，常見為紫色與綠色" + '</h4>' +
        '<h4>' + "功效：鎮定、釐清思緒、平復情緒、集中注意力" + '</h4>' +
        '<a href="#">SHOP</a>';
    img.src = "images/Product/20_1.jpg";
}


// function starSign() {
//     var Sign = document.querySelector('.item');
//     Sign.setAttribute(
//         "style",
//         "border: 5px solid #21402F",
//     );
// }