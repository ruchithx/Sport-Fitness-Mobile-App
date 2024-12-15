import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
// import { useSearchParams } from "expo-router";
import { ClickCountContext } from "./ClickCountContext";
// import { ClickCountContext } from "../context/ClickCountContext";

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
};

export default function Home() {
  //   const { username } = useSearchParams(); // Get username from route params
  const { clickCount, setClickCount, yourName } = useContext(ClickCountContext); // Use context for managing click count
  console.log("yourName", yourName);
  const [products, setProducts] = useState<any[]>([
    {
      idLeague: "4328",
      idSoccerXML: null,
      idAPIfootball: "6280",
      strSport: "Soccer",
      strLeague: "English Premier League",
      strLeagueAlternate: "Premier League, EPL",
      intDivision: "0",
      idCup: "0",
      strCurrentSeason: "2024-2025",
      intFormedYear: "1992",
      dateFirstEvent: "1992-08-15",
      strGender: "Male",
      strCountry: "England",
      strWebsite: "www.premierleague.com",
      strFacebook: "xen-gb.facebook.com/premierleague/",
      strInstagram: "www.instagram.com/premierleague",
      strTwitter: "twitter.com/premierleague",
      strYoutube: "www.youtube.com/channel/UCG5qGWdu8nIRZqJ_GgDwQ-w",
      strRSS: "https://feeds.bbci.co.uk/sport/football/rss.xml",
      strDescriptionEN:
        "The Premier League, often referred to as the English Premier League or the EPL (legal name: The Football Association Premier League Limited), is the top level of the English football league system. Contested by 20 clubs, it operates on a system of promotion and relegation with the English Football League (EFL). Seasons run from August to May with each team playing 38 matches (playing all 19 other teams both home and away). Most games are played on Saturday and Sunday afternoons.\r\n\r\nThe competition was founded as the FA Premier League on 20 February 1992 following the decision of clubs in the Football League First Division to break away from the Football League, founded in 1888, and take advantage of a lucrative television rights sale to Sky. From 2019-20, the league's accumulated television rights deals were worth around £3.1 billion a year, with Sky and BT Group securing the domestic rights to broadcast 128 and 32 games respectively. The Premier League is a corporation where chief executive Richard Masters is responsible for its management, whilst the member clubs act as shareholders. Clubs were apportioned central payment revenues of £2.4 billion in 2016–17, with a further £343 million in solidarity payments to English Football League (EFL) clubs.\r\n\r\nThe Premier League is the most-watched sports league in the world, broadcast in 212 territories to 643 million homes and a potential TV audience of 4.7 billion people. For the 2018–19 season, the average Premier League match attendance was at 38,181, second to the German Bundesliga's 43,500, while aggregated attendance across all matches is the highest of any association football league at 14,508,981. Most stadium occupancies are near capacity. The Premier League ranks first in the UEFA coefficients of leagues based on performances in European competitions over the past five seasons as of 2021. The English top-flight has produced the second-highest number of UEFA Champions League/European Cup titles, with five English clubs having won fourteen European trophies in total.\r\n\r\nFifty clubs have competed since the inception of the Premier League in 1992: forty-eight English and two Welsh clubs. Seven of them have won the title: Manchester United (13), Chelsea (5), Manchester City (5), Arsenal (3), Blackburn Rovers (1), Leicester City (1) and Liverpool (1).",
      strDescriptionDE:
        "Die Premier League (offiziell nach dem Sponsoren „Barclays Premier League“, umgangssprachlich „The Premiership“) ist die höchste Spielklasse im englischen Fußball und befindet sich damit auf der obersten Ebene des englischen Ligasystems. Es nehmen momentan 20 Vereine an einer Spielrunde, die zwischen August und Mai des Folgejahres ausgetragen wird, teil. Über eine Auf- und Abstiegsregelung mit dem darunter angesiedelten Football-League-Verband findet jährlich ein Austausch von drei Klubs statt.\r\n\r\nDie am 20. Februar 1992 als „FA Premier League“ gegründete Spielklasse nahm am 15. August desselben Jahres offiziell ihren Spielbetrieb auf. Die Vereine der damaligen Eliteliga First Division profitierten damit erheblich von deutlich erhöhten Fernseheinnahmen und spalteten sich von der Football League ab, die selbst damit die seit 1888 bestehende Vorherrschaft als Plattform für den englischen und walisischen Spitzenfußball verlor. Die Premier League hat sich seitdem zu der Sportliga mit der weltweit höchsten Zuschaueranzahl entwickelt.[1]\r\n\r\nVon den mittlerweile 45 teilnehmenden Vereinen konnten bisher nur fünf Mannschaften die Premier-League-Meisterschaft gewinnen: Manchester United (13 Titel), FC Arsenal (drei Titel), FC Chelsea (drei Titel), Manchester City (zwei Titel) und die Blackburn Rovers (ein Titel). Neben 43 englischen Clubs kommen zwei Premier-Ligisten aus Wales.\r\n\r\nDas Gegenstück im Frauenbereich ist die FA Women’s Premier League (oder genauer die „FA Women's Premier League National Division“), wobei die Vereine dort in mehr oder weniger abhängigen Verbindungen zu den renommierten Klubs im Männerfußball aus der Premier League und der Football League stehen. Dennoch besitzt die Frauenliga einen eher semiprofessionellen Charakter und findet in der Öffentlichkeit im Vergleich zum Männerbereich eine deutlich geringere Resonanz.\r\n\r\nSeit 1999 existiert zudem für die Reserveteams der Profivereine die Premier Reserve League, in der seit der Spielzeit 2006/07 nur Mannschaften der Premier-League-Teilnehmer spielberechtigt sind. Dort kommen neben den Ersatzspielern, die nicht Teil des offiziellen Profikaders sind, vorrangig die jungen Talente der Erstligavereine zum Einsatz.",
      strDescriptionFR:
        "Le Championnat d'Angleterre de football est une compétition sportive située au sommet de la hiérarchie du football en Angleterre. Lancée en 1888 par la The Football Association sous le nom de Football League, la compétition laisse place en 1992 à la Premier League, dont le nom officiel est Barclays Premier League depuis 2004.\r\n\r\nLa compétition se déroule annuellement, du mois d'août au mois de mai suivant, sous forme d'un championnat mettant aux prises vingt clubs professionnels, actionnaires de la Premier League, qui disputent chacun 38 matchs. À la fin de la saison, le premier est sacré champion, les suivants sont qualifiés pour les compétitions européennes organisées par l'UEFA tandis que les trois équipes totalisant le plus faible nombre de points sont reléguées en Football League, devenu l'échelon inférieur.\r\n\r\nCe championnat est l'un des plus prestigieux au monde et le plus populaire en termes de téléspectateurs, estimés à plus d'un milliard en 2007. Il est réputé pour être l'un des plus exigeants physiquement pour les joueurs, en raison du calendrier dense, malgré le passage du championnat de 22 à 20 clubs en 1995, et de l'engagement traditionnel du football britannique. La Premier League se place par ailleurs au premier rang européen des championnats au coefficient UEFA de 2008 à 2012, après l'avoir déjà été de 1968 à 1975 et en 1985.\r\n\r\nDepuis 1888, 23 clubs ont remporté le championnat : les plus titrés sont Manchester United (20 titres, sept de Football League et treize de Premier League), Liverpool (18, tous de Football League) et Arsenal (13, dix de Football League et trois de Premier League). Trois autres clubs ont remporté la Premier League depuis 1992 : Chelsea (trois fois), Blackburn Rovers et Manchester City.",
      strDescriptionIT:
        "La Premier League è la massima serie del campionato inglese di calcio ed è gestita dalla Football Association (FA).\r\n\r\nSi tratta di un campionato formato da 20 squadre (22 squadre fino al 1995) che non fanno parte della Football League, nato dallo scisma del calcio inglese del 1992.\r\n\r\nAl 2016 la Premier League occupa il secondo posto nel ranking UEFA per competizioni di club.\r\n\r\nAlla massima divisione del campionato inglese partecipano 20 squadre, che si affrontano in un torneo all'Italiana con partite di andata e ritorno. Il regolamento assegna, per ogni incontro, tre punti alla squadra vincitrice, zero punti alla squadra sconfitta ed un punto ad entrambe le formazioni in caso di pareggio.\r\n\r\nAlla squadra prima in classifica dopo le 38 gare di campionato viene assegnato il titolo di campione d'Inghilterra. Unitamente alla seconda ed alla terza classificata, essa accede al tabellone principale della UEFA Champions League, mentre la quarta deve prima passare per il turno di play-off. La quinta in classifica si qualifica alla UEFA Europa League insieme alla squadra vincitrice della FA Cup (fase a gironi) e alla vincitrice della League Cup (terzo turno di qualificazione). Le ultime tre squadre classificate vengono retrocesse in Football League Championship (seconda divisione inglese).",
      strDescriptionCN:
        "英格兰足球超级联赛（英语：Premier League），简称英超，過往冠名為巴克萊超級聯賽（Barclays Premier League），是英格蘭足球總會轄下的职业足球联赛，是英格蘭聯賽系統的最高等级联赛，英超由超级联盟负责具体运作，而運作模式為一所以20間球會共同擁有的有限公司。\r\n英格兰超级联赛成立於1992年2月20日，其前身是英格兰甲级联赛(頂級聯賽)。現今英超联赛已經成為世界上最受歡迎以及最受關注的足球聯賽，亦是英格蘭國家隊的少林寺。\r\n英超联赛自1991至1993年成立以來有47支球隊參與競爭，但只有六支奪得冠軍：曼聯（13次），車路士（4次），阿仙奴（3次），曼城（2次），布力般流浪和李斯特城（1次）。\r\n\r\n英格兰超级联赛是收入最高的足球联赛，根據德勤足球俱樂部財富排名榜, 2014–15年 收入最高首 30 名球隊, 英格蘭（英超）已佔了16隊。[1]。而2016–17年 未來3季英國以外地區轉播收入，每季超逾30億英鎊 。淨是未來3季(2016 -2019) 來自 香港 地區轉播收入, 每季已經約1億多美元。而在英國國內還有 BT Sport、 Sky Sports 51.6億鎊直播收入。[2]\r\n\r\n巴克莱银行曾以與超级联赛簽署價值6,580萬英鎊贊助合約3年至2010年 [3]。 2012年7月12日英超賽會宣佈2013/14賽季至2015/16年賽季繼續由巴克莱银行冠名贊助英超，贊助合約以每賽季4000萬英鎊計算即總值1億2000萬英鎊[4]。2016–17年 開始不再實行冠名巴克萊贊助，只作 Premier League 超級聯賽，，而亦進行了品牌改造，品牌標誌、品牌字體將有新面貌[5]。",
      strDescriptionJP:
        "プレミアリーグ（英: Premier League）は、イングランドのサッカーリーグにおけるトップディヴィジョン（1部リーグ）。[1]\r\n\r\n世界中で約10億人以上に視聴され、全世界で最も人気が高いリーグであり[2]、世界最高峰レベルのリーグの一つである。サッカー競技のみならず、全世界のスポーツリーグの中で最もテレビ中継の視聴者が多く、人気、実力は共に高い。また、上位チームから下位チームまでの資金力及び、レベル差が小さいのも特徴で度々下位チームが上位チームに勝利することがある。このため現在では世界で最も優勝するのが難しいリーグであると言われている。2000年以降、欧州主要リーグの中でも圧倒的な売上高を誇り、2009-2010シーズンの売上高は24億7900万ユーロであり、2位のブンデスリーガを大きく引き離している[3]。\r\nテレビ放映権料も巨額であり2016年から2019年の3年間で95億ユーロ（約1.3兆円）の契約を結んでいる。放映権料の半分は各クラブに均等に分配され、25％は放映試合数、残り25％は順位に応じて分配される。[4]また海外放送分については均等に分配される。2014-2015年には1位チェルシーには1億2400万ユーロ（約153億円）、最下位のQPRでさえも7900万ユーロ（約105億円）の収益を手にした。[5]\r\nプレミアリーグ創設から、優勝経験があるのは、アーセナル、ブラックバーン・ローヴァーズ、チェルシー、マンチェスター・ユナイテッド、マンチェスター・シティ、レスター・シティの6クラブのみ。2000年代には、マンチェスター・U、チェルシー、アーセナル、リヴァプールの4クラブが毎年優勝争いを繰り広げていることから「ビッグ4」と呼ばれてきているが、2010年からは、それらのチームにトッテナム・ホットスパーとマンチェスター・シティを加えた「ビッグ6」になりつつある。2011年5月、1992年のプレミアリーグ創設から数えて12度目の優勝をマンチェスター・Uが果たした。この結果フットボールリーグ時代の7度の優勝と合わせて19回目の優勝となり、イングランドのトップリーグでの最多優勝チームとなった。優勝チームは翌シーズン、袖に刺繍されている獅子のロゴが金色になる（通常は紺色）。\r\n\r\nプレミアリーグは1992年にイングランドのプロサッカーリーグの改編に伴い、フットボールリーグから分離して新設された。20クラブが所属し、ホーム・アンド・アウェー方式による2回総当りで8月から翌年5月にかけて全38試合を戦う。勝ち点はそれぞれ勝利が3、引き分けが1、負けが0となっており、獲得した勝ち点によって順位を決定する。勝ち点が等しい場合は得失点差、それも等しい場合は総得点による。優勝クラブ、2位および3位クラブには、翌年度のUEFAチャンピオンズリーグの本大会への出場資格が、4位クラブにはプレーオフへの出場資格が与えられる。5位クラブには翌年度のUEFAヨーロッパリーグの本大会への出場資格が与えられる。また、下位3クラブが自動的に2部相当のフットボールリーグ・チャンピオンシップに降格し、フットボールリーグ・チャンピオンシップからは上位2クラブと、3〜6位の4クラブを対象としたプレーオフを勝ち抜いた1クラブの、計3クラブが昇格する。\r\n外国籍選手の登録制限は無く、EUおよびEFTA加盟国の国籍を持つ選手は労働許可証取得の必要が無い。それ以外の国籍選手は労働許可証取得の必要があるが、取得の条件として過去2年間で代表Aマッチ（親善試合を除く公式戦）の75％以上に出場していること、過去2年間のFIFAランキングの平均順位が70位以上の国の代表選手であることが必要。ただし、条件を満たさない場合でも特例として労働許可証が発行されることはある。ちなみに、イギリス（イングランド・ウェールズ・スコットランド・北アイルランド）、およびアイルランド国籍の選手は国内選手扱いとなる。ベンチ入り人数は7人まで。",
      strDescriptionRU:
        "Премье́р-лига (англ. Premier League) — профессиональная футбольная лига для английских футбольных клубов (также в ней могут играть некоторые клубы из Уэльса[2]). Является высшим дивизионом в системе футбольных лиг Англии. В ней выступают 20 клубов. Чемпионат проходит с августа по май, каждая команда проводит 38 матчей. До 2016 года турнир официально назывался Премьер-лига Barclays (англ. Barclays Premier League), с 2016 года турнир не имеет главного спонсора. За пределами Англии турнир часто называют «английской Премьер-лигой» (English Premier League).\r\n\r\nТурнир был основан 20 февраля 1992 года под названием «Премьер-лига Футбольной ассоциации» (англ. FA Premier League) после того, как клубы Первого дивизиона приняли решение о выходе из Футбольной лиги, основанной в 1888 году, с целью получения большей финансовой выгоды, в первую очередь за счёт получения большей прибыли от продажи прав на телевизионные трансляции. С тех пор Премьер-лига стала самым популярным спортивным чемпионатом в мире[3]. Также она является самой прибыльной футбольной лигой в мире: консолидированные клубные доходы в сезоне 2007/08 составили 1,93 млрд фунтов (3,15 млрд долларов)[4]. На данный момент, если судить по таблице коэффициентов УЕФА, Премьер-лига является третьим по силе национальным чемпионатом в Европе, уступая лишь испанской «Ла Лиге» и немецкой «Бундеслиге»[5].\r\n\r\nВ Премьер-лиге выступало 45 различных клубов, но лишь 6 из них выигрывали чемпионский титул: «Манчестер Юнайтед» (13 раз), «Челси» (4 раза), «Арсенал» (3 раза), «Манчестер Сити» (2 раза), «Блэкберн Роверс» и «Лестер Сити» (по 1 разу). Действующим чемпионом является « Лестер Сити», выигравший первый в своей истории чемпионский титул в сезоне 2015/16.\r\n\r\n",
      strDescriptionES:
        "La Premier League, también conocida en el Reino Unido como The Premiership, es la máxima categoría del sistema de Ligas de fútbol de Inglaterra. Comenzó a disputarse en la temporada 1992-93 y desde entonces se ha celebrado sin interrupciones. En ella pueden también participar clubes del País de Gales que se encuentren adscritos al citado sistema de ligas, como si de otros clubes ingleses se tratara. Este es el caso del Swansea City Association Football Club, club radicado en Gales participante de la liga y que ha llegado a representar a Inglaterra en competiciones europeas.\r\n\r\nEstablecida la Primera División de Inglaterra denominada como The Football League en 1888 bajo amparo de The Football Association, se fusionó en 1892 con la Football Alliance para conformar el primer sistema de divisiones, y pasándose a denominar la principal categoría como Football League First Division. Dicho sistema fue ampliándose hasta que se produjo una escisión en la competición pasando a ser la Football League —que actualmente conforma tres divisiones— Premier League su principal exponente, mientras que la hasta el momento Primera División conjunta de Inglaterra y Gales de la Football League pasó a ser la Segunda.\r\n\r\nEl actual formato fue establecido tras un acuerdo el 20 de febrero de 1992 entre los clubes de la First Division por el que decidían separarse de la Football League para tomar ventaja de un lucrativo contrato de derechos de televisión impulsado por ellos mismos. Es por tanto una competición de carácter privado o sociedad en la que los veinte clubes miembros actúan como accionistas a través de una persona delegada por cada representante, quienes rigen dicho comité junto con Dave Richards, director del mismo, y Richard Scudamore, su director ejecutivo.\r\n\r\nEl torneo fue considerado por la Federación Internacional de Historia y Estadística de Fútbol de la FIFA como la liga más fuerte de la primera década del siglo xxi en Europa, superando a la Primera División de España y la Serie A de Italia que ocupaban el segundo y tercer lugar respectivamente.2\r\n\r\nDesde su segunda edición y hasta la temporada 2015-16 el nombre del patrocinador principal se reflejaba en su denominación oficial, siendo el último desde 2004 cuando se conocía como Barclays Premier League, circunstancia que dejó de ser así a partir de la temporada 2016-17, cuando desapareció cualquier alusión a los patrocinadores con el propósito de mantener una imagen comercial limpia. Desde entonces se conoce simplemente como Premier League.\r\n\r\nA lo largo de su historia seis clubes han resultado campeones, siendo el Manchester United Football Club el equipo más laureado con trece campeonatos. Chelsea Football Club, Arsenal Football Club, Manchester City Football Club, Blackburn Rovers Football Club y Leicester City Football Club completan el resto de títulos de las veinticinco temporadas del campeonato.\r\n\r\nEl mayor número de puntos en una edición, con noventa y cinco, fue logrado en las temporada 2004-05 por el Chelsea F. C., logrando también el récord de goles en una edición con 103 en la temporada 2009-10.",
      strDescriptionPT:
        "Premier League é uma liga profissional de futebol da Inglaterra e está no topo do sistema de ligas do futebol inglês, sendo a principal competição de futebol do país. Ela era patrocinada pelo Barclays Bank até 2016, motivo pelo qual era oficialmente chamada de Barclays Premier League.\r\n\r\nÉ disputada por vinte clubes no sistema de pontos corridos, em que no final de cada temporada os quatro melhores colocados participam da Liga dos Campeões da UEFA, e os três piores são rebaixados para a Football League Championship, dando lugar aos três melhores desta competição. Cada temporada decorre entre agosto e maio, tendo 38 rodadas com dez partidas cada, totalizando 380 partidas em toda a temporada. A maioria dos jogos são disputados durante o período da tarde nos sábados e domingos e algumas vezes durante a noite no meio da semana.\r\n\r\nA competição foi formada como FA Premier League em 20 de fevereiro de 1992, após a decisão dos clubes da Football League First Division de romperem com a Football League, originalmente fundada em 1888, para aumentarem suas receitas provenientes de direitos de televisão, que atualmente rendem um bilhão de libras por ano para transmissões domésticas, com a BSkyB e BT Group. A Premier League é a liga de futebol mais popular do mundo, transmitida por oitenta redes de televisão em mais de duzentos países.\r\n\r\nNa temporada 2013–14 a média de público da competição foi de 36 631, sendo a segunda mais alta em ligas de futebol profissional, atrás apenas da Bundesliga. A Premier League está em segundo lugar nos coeficientes de ligas da UEFA, baseados nos desempenhos em competições europeias ao longo dos últimos cinco anos.\r\n\r\nDesde 1888, 24 clubes foram coroados campeões do sistema de futebol inglês. Desde a criação da liga, em 1992, um total de 47 clubes já estiveram na Premier League, dos quais seis venceram o título: o Manchester United, o maior campeão com treze títulos, o Chelsea, com quatro títulos, o Arsenal, com três títulos e único clube a conquistar a Premier League de forma invicta, o Manchester City, com dois títulos, Blackburn Rovers e o atual campeão Leicester City , com uma conquista. Além dos títulos únicos das cidades de Blackburn e Leicester, apenas as cidades de Manchester (15) e Londres (7) festejaram o título.",
      strDescriptionSE:
        'Premier League, 1992–2007 benämnd FA Premier League, är en engelsk fotbollsliga, grundad 1992, som är den högsta divisionen i det engelska ligasystemet.\r\n\r\n20 klubbar har plats i ligan som spelas höst–vår och varar från augusti till maj. De fyra högst placerade klubbarna är direktkvalificerade till Uefa Champions League och de tre lägst placerade blir nedflyttade till English Football Leagues förstadivision, EFL Championship. Vinnaren av Premier League kan kalla sig "Engelska mästare i fotboll" även om serien också kan innehålla klubbar från Wales; till exempel Swansea City och Cardiff City.\r\n\r\nPremier League är världens mest bevakade fotbollsliga[2][3] och på Uefas ranking över ligor (som bygger på resultat i europeiska cuper under de senaste fem åren)[4] räknas man som den näst bästa inhemska ligan efter spanska La Liga.[5]\r\n\r\nTotalt 49 klubbar har till och med säsongen 2018/19 tävlat i Premier League men bara sex av dem har vunnit titeln: Manchester United, Blackburn Rovers, Arsenal, Chelsea, Manchester City och Leicester City. Sex klubbar, Arsenal, Chelsea, Everton, Liverpool, Manchester United och Tottenham Hotspur, har spelat oavbrutet i ligan sedan dess grundande 1992.',
      strDescriptionNL:
        "De Premier League is de hoogste Engelse voetbalcompetitie.\r\n\r\nDe competitie bestaat uit twintig clubs die tussen augustus en mei in totaal 380 wedstrijden spelen. Naast Engelse clubs kunnen ook clubs uit Wales zich kwalificeren voor een plaats in de Premier League, maar daarvoor moeten zij wel deelnemen aan de Engelse voetbalpiramide. Er bestaat een promotie- en degradatieregeling tussen de Premier League en de Football League.\r\n\r\nBuiten Engeland wordt vaak naar de competitie gerefereerd als de Engelse Premier League (EPL).",
      strDescriptionHU:
        "A Premier League (más néven Premiership vagy Barclays Premier League) az angol labdarúgó bajnokságok legfelsőbb osztályának elnevezése. Ez a világ legnézettebb labdarúgó-bajnoksága,[1] és ez hozza az összes bajnokság közül a legtöbb hasznot.[2]\r\n\r\nA jelenlegi rendszert 1992. február 20-án hozták létre az addigi legfelső osztályú The Football League-ből, amit 1888-ban alapítottak. Jelenleg húsz csapat a tagja. A szezonok augusztustól májusig tartanak, és 38 mérkőzést játszanak a részt vevő csapatok: minden csapat kétszer az összes többivel, egyszer hazai, egyszer idegen pályán. Minden szezon végén három csapat esik ki a másodosztályba (The Championship), és három kerül fel onnan a Premiershipbe. Az eddigi 24 szezon alatt 45 klub szerepelt a Premier League-ben, de csak hat csapat nyerte meg a sorozatot: a Manchester United (tizenháromszor), az Arsenal (háromszor), a Chelsea (négyszer), a Manchester City (kétszer), a Blackburn Rovers (egyszer), valamint a Leicester City (egyszer).\r\n\r\nA világ hatodik legnagyobb nézőszámú profi sportligája.[3]",
      strDescriptionNO:
        "Premier League er den engelske toppserien i fotball. Premier League er på toppen av ligasystemet i engelsk fotball, og består av 20 lag, som operer med systemet opprykk og nedrykk med Football League. Premier League er et aksjeselskap hvor de 20 lagene i ligaen er aksjonærer. Sesongen starter i august og avsluttes i mai, og alle lagene spiller 19 kamper hjemme og borte, til sammen 38 kamper per sesong. Premier League var inntil 2015/16-sesongen kjent som Barclays Premier League.[1]\r\n\r\nLigaen ble dannet som FA Premier League 20. februar 1992, som følge av avgjørelsen om at klubbene i Football League First Division skulle skilles fra Football League, og ta fordel av de lukrative TV-avtalene. Premier League har siden blitt verdens mest sette sportsliga.[2] Det er verdens mest lukrative fotballiga, med totale klubbinntekter på til sammen 1 930 000 000 britiske pund (ca. 19,3 milliarder norske kroner) i 2007/08.[3]\r\n\r\nTotalt har det spilt 44 lag i Premier League, siste er Blackpool, men bare seks lag har vunnet ligaen: Manchester United, Blackburn Rovers, Arsenal, Chelsea, Manchester City og Leicester City.",
      strDescriptionPL:
        "Premier League (nazywana także English Premier League) – zawodowa liga piłkarska znajdująca się na najwyższym szczeblu rozgrywek piłkarskich w Anglii. Gra w niej 20 klubów. W lidze tej obowiązuje reguła awansu i spadku. Premier League jest korporacją, której 20 zespołów w niej grających są akcjonariuszami. Sezon rozgrywek rozpoczyna się w sierpniu, a kończy się w maju. Każdy klub rozgrywa 38 meczów w tym czasie ze wszystkich 380 spotkań ligowych.\r\n\r\nLiga została założona jako FA Premier League 20 lutego 1992 roku po tym jak zespoły Football League First Division zdecydowały stać się niezależne od The Football League powstałej w 1888 roku. Czerpała ona zyski z praw telewizyjnych. Od tego czasu Premier League jest najchętniej oglądaną ligą sportową na świecie[1]. Są to także najbardziej dochodowe rozgrywki piłkarskie. W sezonie 2007/2008 obroty klubów wyniosły 1,93 miliardów funtów (3,15 miliardów dolarów)[2]. Premier League zajmuje trzecie miejsce w rankingu UEFA, w którym liczą się występy zespołów z danych lig w europejskich pucharach z ostatnich pięciu lat[3].\r\n\r\nOd czasu założenia w rozgrywkach Premier League brały udział 44 kluby.\r\n\r\nMimo znaczących sukcesów europejskiej piłki nożnej w latach 70. i na początku 80., późne lata 80. to spadek znaczenia piłki angielskiej. Kibice zmagali się z niedostatecznymi udogodnieniami na stadionach, które popadały w rozsypkę, chuligaństwo rozpowszechniało się. Poza tym zespoły z Anglii dostały zakaz gry w pucharach europejskich po zamieszkach na Heysel w 1985 roku[4]. The Football League First Division, będąca w tym czasie na pierwszym szczeblu rozgrywek w Anglii była za innymi ligami, między innymi włoską Serie A i hiszpańską Primera División zarówno we frekwencji na spotkaniach jak i obrotach zespołów. Z tego powodu niektórzy angielscy zawodnicy przenosili się za granicę[5]. Na początku lat 90. sytuacja ta uległa zmianie; Anglia na Mistrzostwach Świata 1990 doszła do półfinałów. UEFA w tym samym roku zniosła zakaz gry angielskim zespołom w europejskich pucharach. Rok później Manchester United zdobył Puchar Zdobywców Pucharów. Po tragedii na Hillsborough wydano także Raport Taylora, który miał poprawić bezpieczeństwo na stadionach poprzez usunięcie z nich miejsc stojących[6].\r\n\r\nPieniądze telewizyjne stały się ważniejsze; Football League otrzymało 6,3 milionów funtów za dwuletnią umowę podpisaną w 1986 roku, zaś gdy w 1988 roku zawarto nowy, czteroletni kontrakt, kwota ta wynosiła 44 miliony[7]. W 1988 roku pierwszy raz spróbowano oddzielić First Division od Football League, jednak nie powiodło się to[8]. Stadiony rozbudowywano, coraz więcej osób przychodziło na spotkania; najlepsze kluby z Anglii ponownie rozpoczęły starania o powstanie nowych rozgrywek, niezależnych od Football League.",
      strDescriptionIL:
        "ע\"א פרמייר ליג (The FA Premier League) נגד המועצה להסדר ההימורים בספורט[1] הוא פסק דין של בית המשפט העליון שניתן בשנת 2010. עיקר המחלוקת נסובה סביב רצונן של ליגות הכדורגל בבריטניה לנכס לעצמן את זכות היוצרים בלוחות משחקים שהוכנו עבור הטורנירים שמתבצעים בליגות האנגליות והסקוטיות. כלומר, לנכס לעצמן את היכולות להשתמש ולאפשר שימוש באותם הלוחות שבהכנתם הושקעו משאבים רבים. בבואו להכריע את הדין, ביקש בית המשפט לאזן בין האינטרסים העומדים בבסיס דיני זכויות היוצרים, בעיקר בין האינטרס לתמרץ יוצרים כדי לעודד יצירה ובכך להעשיר את עולם הביטוי ובין הזכות לחופש המידע. פסק הדין מהווה חיזוק להלכות בית המשפט בעניין דרישת המקוריות שבחוק זכות יוצרים וכן למבחנים המשפטיים שנועדו לקבוע קנה מידה בנוגע לטיב המקוריות הנדרשת. השופט סלים ג'ובראן, בהסכמתם של השופטים ניל הנדל ומרים נאור, קבע שלוחות המשחקים אינם מהווים יצירה מקורית ולפיכך לא חוסים תחת הגנת זכות היוצרים.",
      strTvRights:
        "Australia - Optus [2022-2028]\r\nCanada - FuboTV [2022-2025]\r\nCarribean - Verticast [2022-2025] \r\nHong Kong - Now TV [2022-2025]\r\nIndia - Star Sports [2022-2025]\r\nIndonesia - Emtek [2022-2025]\r\nMalaysia - Astro [2022-2025]\r\nMENA - beIN Sports [2022-2025]\r\nNew Zealand - Sky Sport [2022-2028]\r\nSingapore - StarHub [2022-2028]\r\nSouth Africa - SuperSport [2022-2025]\r\nUK - Amazon Prime Video [2022-2025]\r\nUK - BT Sport [2022-2025]\r\nUK - Sky Sports [2022-2025]\r\nUS - NBC Sports [2022-2028]",
      strFanart1:
        "https://www.thesportsdb.com/images/media/league/fanart/odberp1725731801.jpg",
      strFanart2:
        "https://www.thesportsdb.com/images/media/league/fanart/s0ozu31725731959.jpg",
      strFanart3:
        "https://www.thesportsdb.com/images/media/league/fanart/44vpk61725732073.jpg",
      strFanart4:
        "https://www.thesportsdb.com/images/media/league/fanart/grmbt01725731922.jpg",
      strBanner:
        "https://www.thesportsdb.com/images/media/league/banner/xe1es51638921786.jpg",
      strBadge:
        "https://www.thesportsdb.com/images/media/league/badge/dsnjpz1679951317.png",
      strLogo:
        "https://www.thesportsdb.com/images/media/league/logo/4c377s1535214890.png",
      strPoster:
        "https://www.thesportsdb.com/images/media/league/poster/67al0l1719007596.jpg",
      strTrophy:
        "https://www.thesportsdb.com/images/media/league/trophy/9a6kw51689108793.png",
      strNaming: "{strHomeTeam} vs {strAwayTeam}",
      strComplete: "yes",
      strLocked: "unlocked",
    },
    {
      idLeague: "4329",
      idSoccerXML: null,
      idAPIfootball: "6334",
      strSport: "Soccer",
      strLeague: "English League Championship",
      strLeagueAlternate: "Championship",
      intDivision: "2",
      idCup: "0",
      strCurrentSeason: "2024-2025",
      intFormedYear: "2004",
      dateFirstEvent: "1892-09-03",
      strGender: "Male",
      strCountry: "England",
      strWebsite: "www.football-league.co.uk/page/ChampionshipHome",
      strFacebook: "www.facebook.com/footballleague",
      strInstagram: "",
      strTwitter: "twitter.com/skybetchamp",
      strYoutube: "",
      strRSS: "www.football365.com/championship/rss",
      strDescriptionEN:
        "The Football League Championship (often referred to as the Championship for short, or the Sky Bet Championship for sponsorship reasons) is the second-highest division overall in the English football league system after the Premier League. Each year, the top finishing teams in the Championship are promoted to the Premier League, and the lowest finishing teams are relegated.\r\n\r\nThe Football League Championship, which was introduced for the 2004–05 season, was previously known as the Football League First Division (1992–2004), and before that was known as Division Two (1892–1992). The winners of the Championship receive the Football League Championship trophy, the same trophy as the old First Division champions were handed prior to the Premier League's inception in 1992.\r\n\r\nThe Championship is the wealthiest non-top flight football division in the world and the seventh richest division in Europe. The average match attendance for the 2011–12 season was 17,738, which also makes it the most-watched secondary league in the world.\r\n\r\nIn the 2013–14 season, Leicester City were the division champions, Burnley were the runners up. At present (2014–15 season), Ipswich Town hold the longest tenure in the Championship, last being out of the division in the 2001–02 season when they were relegated from the Premier League.",
      strDescriptionDE: null,
      strDescriptionFR:
        "Le Football League Championship est depuis août 2004 le nom de la deuxième division du championnat d'Angleterre de football.",
      strDescriptionIT: null,
      strDescriptionCN: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionPL: null,
      strDescriptionIL: null,
      strTvRights: "US - ESPN [2018-2021]",
      strFanart1:
        "https://www.thesportsdb.com/images/media/league/fanart/cda6d71706804517.jpg",
      strFanart2:
        "https://www.thesportsdb.com/images/media/league/fanart/bijmkh1706804517.jpg",
      strFanart3:
        "https://www.thesportsdb.com/images/media/league/fanart/dk28ze1706804517.jpg",
      strFanart4:
        "https://www.thesportsdb.com/images/media/league/fanart/f6ekmp1706804518.jpg",
      strBanner:
        "https://www.thesportsdb.com/images/media/league/banner/gcf9ww1706803996.jpg",
      strBadge:
        "https://www.thesportsdb.com/images/media/league/badge/ty5a681688770169.png",
      strLogo:
        "https://www.thesportsdb.com/images/media/league/logo/532ruo1694439176.png",
      strPoster:
        "https://www.thesportsdb.com/images/media/league/poster/t7ujmp1677598340.jpg",
      strTrophy:
        "https://www.thesportsdb.com/images/media/league/trophy/dl1l3m1688629871.png",
      strNaming: "{strHomeTeam} vs {strAwayTeam}",
      strComplete: "yes",
      strLocked: "unlocked",
    },
    {
      idLeague: "4372",
      idSoccerXML: null,
      idAPIfootball: null,
      strSport: "Motorsport",
      strLeague: "BTCC",
      strLeagueAlternate: "British Touring Car Championship",
      intDivision: "1",
      idCup: "0",
      strCurrentSeason: "2024",
      intFormedYear: "1958",
      dateFirstEvent: "2015-04-04",
      strGender: "Mixed",
      strCountry: "England",
      strWebsite: "btcc.net",
      strFacebook: "www.facebook.com/OfficialBTCC",
      strInstagram: "",
      strTwitter: "twitter.com/dunlopbtcc",
      strYoutube: "www.youtube.com/user/btccdotnet",
      strRSS: "http://www.btcc.net/feed/",
      strDescriptionEN:
        "The British Touring Car Championship is a touring car racing series held each year in the United Kingdom, currently organized and administered by ToCA. It was established in 1958 as the British Saloon Car Championship and was renamed as the British Touring Car Championship in 1987. The championship has been run to various national and international regulations over the years including FIA Group 2, FIA Group 5, FIA Group 1, FIA Group A, FIA Super Touring and FIA Super 2000. A lower-key Group N series for production cars ran from 2000 until 2003.\r\n\r\nThe championship was initially run with a mix of classes, divided according to engine capacity, racing simultaneously. This often meant that a driver who chose the right class could win the overall championship without any chance of overall race wins, thereby devaluing the title for the spectators – for example, in the 1980s Chris Hodgetts won two overall titles in a small Toyota Corolla prepared by Hughes Of Beaconsfield, at that time a Mercedes-Benz/Toyota main dealer when most of the race wins were going to much larger cars; and while the Ford Sierra Cosworth RS500s were playing at the front of the field, Frank Sytner took a title in a Class B BMW M3 and John Cleland's first title was won in a small Class C Vauxhall Astra.\r\n\r\nAfter the domination (and expense) of the Ford Sierra Cosworth in the late 1980s, the BTCC was the first to introduce a 2.0 L formula, in 1990, which later became the template for the Supertouring class that exploded throughout Europe. The BTCC continued to race with Supertouring until 2000 and for 2001 adopted its own BTC Touring rules. However, the Super 2000 rules have now been observed for the overall championship since the 2007 season. The 2000s have seen cheaper cars than the later Supertouring era, with fewer factory teams and fewer international drivers.\r\n\r\nIn 2009, the BTCC released details of its Next Generation Touring Car (NGTC) specification, to be introduced from 2011. The introduction of these new technical regulations were designed to dramatically reduce the design, build and running costs of the cars and engines as well as reducing the potential for significant performance disparities between cars. The NGTC specification also aimed to cut costs by reducing reliance on WTCC/S2000 equipment, due to increasing costs/complexity and concerns as to its future sustainability and direction.",
      strDescriptionDE:
        "Die British Touring Car Championship (BTCC, Britische Tourenwagen-Meisterschaft) ist eine Tourenwagen-Rennserie.\r\n\r\nPro Rennwochenende finden sonntags drei gleich lange Wertungsläufe statt. Samstags stehen zwei 40-minütige Trainingsdurchgänge auf dem Programm, in denen die Teams an der Abstimmung arbeiten können. Nachmittags entscheidet eine 30-minütige Qualifikation über die Startaufstellung des ersten Laufs. Die Startaufstellung des zweiten Laufs entspricht dem Zieleinlauf des ersten Rennens. Ähnlich wie in der Tourenwagen-Weltmeisterschaft erfolgt die Startreihenfolge für den dritten Lauf in umgekehrter Reihenfolge der Zieleinkunft. Im Gegensatz zur WTCC ist nicht auf die ersten acht festgelegt, sondern der Sieger des zweiten Laufes lost aus, ob dies für die ersten 6 bis 10 Fahrzeuge gilt. Nach dem ersten und zweiten Rennen werden jeweils Zusatzgewichte zwischen 45 und 9 Kilo für die fünf Bestplatzierten vergeben. Pro Fahrzeug sind in der Saison lediglich fünf Motoren zugelassen. Wer ein zusätzliches Triebwerk benötigt, verliert zehn Meisterschaftszähler in der Hersteller- und Teamwertung.",
      strDescriptionFR:
        "Le Championnat britannique des voitures de tourisme (British Touring Car Championship, ou BTCC, en anglais) a été organisé pour la première fois en 1958 à l'occasion du British Saloon Car Championship.",
      strDescriptionIT: null,
      strDescriptionCN: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionPL: null,
      strDescriptionIL: null,
      strTvRights: null,
      strFanart1:
        "https://www.thesportsdb.com/images/media/league/fanart/rvytyq1422037335.jpg",
      strFanart2:
        "https://www.thesportsdb.com/images/media/league/fanart/swyyuy1432747584.jpg",
      strFanart3:
        "https://www.thesportsdb.com/images/media/league/fanart/wstuqu1432747622.jpg",
      strFanart4:
        "https://www.thesportsdb.com/images/media/league/fanart/xpywtt1422039975.jpg",
      strBanner:
        "https://www.thesportsdb.com/images/media/league/banner/vrruvt1422121957.jpg",
      strBadge:
        "https://www.thesportsdb.com/images/media/league/badge/a0xreq1556444753.png",
      strLogo:
        "https://www.thesportsdb.com/images/media/league/logo/0d5zf81556444796.png",
      strPoster:
        "https://www.thesportsdb.com/images/media/league/poster/ev49rz1539014930.jpg",
      strTrophy:
        "https://www.thesportsdb.com/images/media/league/trophy/vba0vd1560370776.png",
      strNaming: "{strEvent}",
      strComplete: "yes",
      strLocked: "unlocked",
    },
    {
      idLeague: "4396",
      idSoccerXML: null,
      idAPIfootball: "6335",
      strSport: "Soccer",
      strLeague: "English League 1",
      strLeagueAlternate: "League One, Sky Bet League One",
      intDivision: "3",
      idCup: "0",
      strCurrentSeason: "2024-2025",
      intFormedYear: "2004",
      dateFirstEvent: "2012-08-17",
      strGender: "Male",
      strCountry: "England",
      strWebsite: "www.efl.com/competitions/efl-league-one",
      strFacebook: "www.facebook.com/footballleague",
      strInstagram: "",
      strTwitter: "twitter.com/EFL",
      strYoutube: "",
      strRSS: "",
      strDescriptionEN:
        "Football League One (often referred to as League One for short or Sky Bet League 1) is the second-highest division of the Football League and the third tier in the English football league system.\r\n\r\nFootball League One was introduced for the 2004–05 season. It was previously known as the Football League Second Division and prior to the advent of the Premier League, the Football League Third Division.\r\n\r\nAt present (2014–15 season), Oldham Athletic hold the longest tenure in League One, last being out of the division in the 1996–97 season when they were relegated from the Championship. There are currently six former Premier League clubs competing in the League One, namely Barnsley, Bradford City, Coventry City, Oldham Athletic, Sheffield United and Swindon Town.\r\nThere are 24 clubs in Football League One. Each club plays every other club twice (once at home and once away). Three points are awarded for a win, one for a draw and zero for a loss. At the end of the season a table of the final League standings is determined, based on the following criteria in this order: points obtained, goal difference, goals scored, an aggregate of the results between two or more clubs (ranked using the previous three criteria) and, finally, a series of one or more play-off matches.\r\n\r\nAt the end of each season the top two clubs, together with the winner of the play-offs between the clubs which finished in 3rd–6th position, are promoted to Football League Championship and are replaced by the three clubs that finished at the bottom of that division.\r\n\r\nSimilarly, the four clubs that finished at the bottom of Football League One are relegated to Football League Two and are replaced by the top three clubs and the club that won the 4th–7th place play-offs in that division.\r\nSky Sports currently show live League One matches with highlights shown on BBC One on their programme called The Football League Show, which also broadcasts highlights of Football League Championship and Football League Two matches. The show is available on the red button the following Sunday until midday and is available on iPlayer all the following week. Highlights of all games in the Football League are also available to view separately on the Sky Sports website. In Sweden, TV4 Sport has the rights of broadcasting from the league. A couple of league matches during the season of 09/10 including play-off matches and the play-off final to the Championship were shown. In Australia, Setanta Sports Australia broadcasts live Championship matches. In the USA and surrounding countries including Cuba, some Football League Championship, Football League One and Football League Two games are shown on beIN Sport.",
      strDescriptionDE: null,
      strDescriptionFR:
        "La Football League One est depuis août 2004 le nom de la troisième division du championnat d'Angleterre de football.",
      strDescriptionIT: null,
      strDescriptionCN: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionPL: null,
      strDescriptionIL: null,
      strTvRights: "US - ESPN [2018-2021]",
      strFanart1:
        "https://www.thesportsdb.com/images/media/league/fanart/jbs7l51706938896.jpg",
      strFanart2:
        "https://www.thesportsdb.com/images/media/league/fanart/m3dd6v1706938899.jpg",
      strFanart3:
        "https://www.thesportsdb.com/images/media/league/fanart/105ia01706938899.jpg",
      strFanart4:
        "https://www.thesportsdb.com/images/media/league/fanart/d2c27f1706938900.jpg",
      strBanner:
        "https://www.thesportsdb.com/images/media/league/banner/wp1ni51706803998.jpg",
      strBadge:
        "https://www.thesportsdb.com/images/media/league/badge/afedb31688770443.png",
      strLogo:
        "https://www.thesportsdb.com/images/media/league/logo/qqxuqq1467458876.png",
      strPoster:
        "https://www.thesportsdb.com/images/media/league/poster/yfca2c1538039602.jpg",
      strTrophy:
        "https://www.thesportsdb.com/images/media/league/trophy/rsrurr1447436418.png",
      strNaming: "{strHomeTeam} vs {strAwayTeam}",
      strComplete: "yes",
      strLocked: "unlocked",
    },
    {
      idLeague: "4397",
      idSoccerXML: null,
      idAPIfootball: "6336",
      strSport: "Soccer",
      strLeague: "English League 2",
      strLeagueAlternate: "League Two, Sky Bet League Two",
      intDivision: "4",
      idCup: "0",
      strCurrentSeason: "2024-2025",
      intFormedYear: "2004",
      dateFirstEvent: "2012-08-17",
      strGender: "Male",
      strCountry: "England",
      strWebsite: "www.efl.com/clubs-and-competitions/sky-bet-league-two",
      strFacebook: "www.facebook.com/SkyBetLeagueTwo/",
      strInstagram: "",
      strTwitter: "twitter.com/SkyBetLeagueTwo",
      strYoutube: "",
      strRSS: "http://www.football365.com/league-two/rss",
      strDescriptionEN:
        "The English Football League Two (often referred to as League Two for short or Sky Bet League Two for sponsorship reasons) is the third and lowest division of the English Football League (EFL) and fourth-highest division overall in the English football league system.\r\n\r\nFootball League Two was introduced for the 2004–05 season. It was previously known as the Football League Third Division. Before the advent of the Premier League, the fourth-highest division was known as the Football League Fourth Division.\r\n\r\nAt present (2018–19 season), Morecambe hold the longest tenure in League Two, last being outside the division in the 2006–07 season when they were promoted from the league then known as the Conference National (now the National League). There are currently two former Premier League clubs competing in League Two, namely Oldham Athletic and Swindon Town.",
      strDescriptionDE: null,
      strDescriptionFR:
        "La Football League Two est depuis août 2004 le nom de la quatrième division du championnat d'Angleterre de football.",
      strDescriptionIT: null,
      strDescriptionCN: null,
      strDescriptionJP: null,
      strDescriptionRU: null,
      strDescriptionES: null,
      strDescriptionPT: null,
      strDescriptionSE: null,
      strDescriptionNL: null,
      strDescriptionHU: null,
      strDescriptionNO: null,
      strDescriptionPL: null,
      strDescriptionIL: null,
      strTvRights: "US - ESPN [2018-2021]\r\nUK - Sky Sports [2024-2029]",
      strFanart1:
        "https://www.thesportsdb.com/images/media/league/fanart/coz3at1706940615.jpg",
      strFanart2:
        "https://www.thesportsdb.com/images/media/league/fanart/wf2jzd1706940615.jpg",
      strFanart3:
        "https://www.thesportsdb.com/images/media/league/fanart/vq8w5b1706940615.jpg",
      strFanart4:
        "https://www.thesportsdb.com/images/media/league/fanart/al06ko1706940616.jpg",
      strBanner:
        "https://www.thesportsdb.com/images/media/league/banner/qey2vj1706803993.jpg",
      strBadge:
        "https://www.thesportsdb.com/images/media/league/badge/jmb3ms1688770451.png",
      strLogo:
        "https://www.thesportsdb.com/images/media/league/logo/wruwrv1467458767.png",
      strPoster:
        "https://www.thesportsdb.com/images/media/league/poster/g3hbza1538055811.jpg",
      strTrophy:
        "https://www.thesportsdb.com/images/media/league/trophy/ebhzzx1505825382.png",
      strNaming: "{strHomeTeam} vs {strAwayTeam}",
      strComplete: "yes",
      strLocked: "unlocked",
    },
  ]);

  // Fetch sports-related products from Fakestore API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=England"
        );
        const data = await response.json();
        const firstFiveItems = data.countries.slice(0, 10); // Get the first 5 items
        setProducts(firstFiveItems); // Set only the first 5 items in state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  // Handle item clicks
  const handleItemClick = () => {
    // console.log(clickCount);
    setClickCount(clickCount + 1); // Update click count using context
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Welcome,{yourName} </Text>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.idLeague.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={handleItemClick}>
            <Image source={{ uri: item.strFanart1 }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.strLeague}</Text>
              <Text style={styles.cardDescription}>
                {item.strDescriptionFR}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Floating Button */}
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>{clickCount}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    height: 60,
    // marginTop: 10,
    backgroundColor: "#FFA500",
    justifyContent: "center",
    alignItems: "center",
  },
  topBarText: {
    color: "#fff",
    fontSize: 18,
    marginTop: 30,
    fontWeight: "bold",
  },
  card: {
    margin: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  cardImage: {
    height: 150,
    width: "100%",
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFA500",
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
