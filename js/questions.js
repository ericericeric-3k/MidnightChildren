// Question bank: edit or add questions here.
// M(question, correct answer, [wrong answers], explanation)
// U(Saleem's claim, 1 if he is right / 0 if wrong, explanation)
const M=(q,c,w,e)=>({u:0,q,c,w,e});
const U=(q,r,e)=>({u:1,q,c:r?"Saleem is right":"Saleem is wrong",w:[r?"Saleem is wrong":"Saleem is right"],e});

const CH=[
{t:"Author & Times",i:"Midnight strikes on 15 August 1947. Before Saleem tells his own tale, he must set the scene.",q:[
M("Where was Salman Rushdie born in 1947?","Bombay",["Delhi","Karachi","London"],"He was born in Bombay into a Kashmiri Muslim family, the year of independence."),
M("Which English school did Rushdie attend before Cambridge?","Rugby School",["Eton","Harrow","Winchester"],"He went to Rugby, then read history at King's College, Cambridge."),
M("Which 1919 massacre in Amritsar is a decisive early scene?","Jallianwala Bagh",["The Nanavati trial","The language march","The Sundarbans"],"The Jallianwala Bagh massacre is an early turning point in the family's story."),
U("Saleem says: Indira Gandhi's Emergency ended in 1965.",0,"The Emergency ran from 1975 to 1977. 1965 was the Indo-Pakistani War."),
M("Which Rushdie book led to the 1989 fatwa?","The Satanic Verses",["Shame","Grimus","Midnight's Children"],"The controversy over The Satanic Verses (1988) led to the fatwa and years in hiding.")]},
{t:"Kashmir & Agra",i:"Saleem begins with his grandfather, Dr. Aadam Aziz, newly home from Germany.",q:[
M("What ends Aadam's faith?","A bloody nose during prayer",["A letter from Germany","The massacre","A dream"],"He strikes his nose on the ground while praying and vows never to bow again."),
M("How does Aadam first examine Naseem?","Through a hole in a sheet",["In his clinic","By letter","Through a window"],"The perforated sheet lets him see only fragments, a symbol for partial vision."),
M("Whom does Aadam hide under the floor in Agra?","Nadir Khan",["Tai","The Hummingbird","Ahmed Sinai"],"Nadir, the Hummingbird's secretary, hides after his employer is murdered."),
M("Why must Nadir divorce Mumtaz?","He is found impotent",["He is arrested","He moves to Pakistan","She falls ill"],"Mumtaz is left heartbroken and later marries Ahmed Sinai."),
U("Saleem says: Ahmed Sinai renames Mumtaz as Amina.",1,"Correct. Ahmed renames her Amina and they move to Bombay.")]},
{t:"Bombay & the Switch",i:"On Methwold's Estate, two babies are born at the stroke of midnight.",q:[
M("From whom do the Sinais buy their house in Bombay?","William Methwold",["Tai","Nadir Khan","Ahmed's brother"],"Methwold is a British colonist preparing to leave after independence."),
M("Which neighbor gives birth at midnight alongside Amina?","Vanita",["Parvati","Naseem","Mary"],"Vanita, the accordionist's wife, dies soon after the birth."),
M("Who swaps the babies' nametags?","Mary Pereira",["Padma","Naseem","Vanita"],"Mary calls it her \"private act of revolution\" and is later wracked by guilt."),
M("Who is Saleem's biological father?","William Methwold",["Ahmed Sinai","Aadam Aziz","The accordionist"],"An affair with Vanita makes Saleem half-English, a living hybrid."),
U("Saleem says: Shiva is Vanita's biological son.",0,"Shiva is Amina's real son. Saleem is Vanita's, raised as the Sinai heir.")]},
{t:"Pakistan & War",i:"The family moves to Pakistan. History arrives by air.",q:[
M("What strikes Saleem and erases his memory?","A flying spittoon",["A bomb fragment","A bullet","A falling beam"],"The silver spittoon is tied to memory, wealth, and violence."),
M("Which kind of army unit is Saleem drafted into?","A tracking unit",["Medical corps","Air force","Navy"],"He uses his gift to track others, then flees from the violence he witnesses."),
M("Where does Saleem flee to escape the war?","The jungle (Sundarbans)",["The Himalayas","The Thar desert","Bombay's docks"],"The jungle is a primal state where identities dissolve."),
M("Who recognizes Saleem after the war?","Parvati-the-witch",["Padma","Jamila","Mary Pereira"],"They fall in love at a victory parade in Delhi."),
U("Saleem says: He is the biological father of Parvati's son.",0,"The child is Shiva's. Saleem agrees to raise him as his own.")]},
{t:"Characters & Themes",i:"Time to look at who these people stand for.",q:[
M("What is Padma's nickname?","The dung goddess",["The Widow","The Hummingbird","Reverend Mother"],"Padma is Saleem's earthy listener who tests his fantasies against common sense."),
M("Who appears as \"the Widow\"?","Indira Gandhi",["Naseem","Amina","Parvati"],"She represents absolute power during the Emergency."),
M("What does Saleem's cracking body mirror?","The nation's fractures",["His diet","His marriage","Padma's doubts"],"Individual and nation are tied together: both are fractured and finally broken."),
M("Why is Saleem called a living hybrid?","Indian mother, English father",["He lives in two houses","He speaks three languages","He was born twice"],"Rushdie sees hybridity as both India's strength and a source of conflict."),
U("Saleem says: The Emergency crushes the diversity of the midnight's children.",1,"Correct. Forced sterilization ends their powers and pluralist hope.")]},
{t:"Symbols & Technique",i:"The last chapter: how the story is told, and what it means.",q:[
M("What do pickles and chutnification stand for?","Preserving, mixing, and distorting history",["Wealth","Hunger","Marriage"],"Narrative \"flavors\" the past, and cultures blend like spices."),
M("The number 1,001 refers to which work?","The Arabian Nights",["The Mahabharata","The Ramayana","The Panchatantra"],"It ties the novel to the oral storytelling tradition."),
M("What does the perforated sheet symbolize?","Fragmented, partial vision",["Privacy","Security","Healing"],"History is seen only in fragments, never as a whole."),
M("Who interrupts Saleem, adding humor and skepticism?","Padma",["Parvati","Mary","Shiva"],"Her interruptions make the storytelling a dialogue."),
M("In what year did the novel win the Booker Prize?","1981",["1975","1993","2008"],"It won in 1981, then was named Booker of Bookers (1993) and Best of the Booker (2008).")]}
];
