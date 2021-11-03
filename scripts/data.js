
export const pronounFunctions = ["getAna", "getInte", "getInti", "getHuwe", "getHiye", "getIhna", "getIntu", "getHumme"];
export const pronounsArabic = ["אַנַא", "אִנְתֵ", "אִנְתִי", "הֻוֵّ", "הִיֵّ", "אִחְנַא", "אִנְתוּ", "הֻםֵّ"];
export const pronounsHebrew = ["אני", "אתה", "את", "הוא", "היא", "אנחנו", "אתם", "הם"];

// past verbs
const katabHebrew = ["ביקש", "חתך", "התגורר", "עבר דירה", "נשבע", "עבר", "ישב", "ניגב", "למד", "עקף את", "אכל", "בדק", "שבר", "שילם", "הודה", "לקח", "שלח", "היכה", "ברח", "בישל", "שתק", "הרים", "פתח", "הבטיח", "צבע", "צבע", "שאל", "צחצח", "נשף", "הזמין", "התעטש", "רץ", "נשף", "הזמין", "התעטש", "רץ", "הרגיש", "גנב", "עזב", "הפך", "קשר", "אסר", "ניגן", "אסף", "קרע"];
const katabArabic = ["טלבּ", "קטע", "סכּן", "נקל", "חלף", "מרק", "קעד", "מסח", "דרס", "סבּק", "אכּל", "פחץ", "כּסר", "דפע", "שכּר", "אח'ד", "בּעת", "צ'רבּ", "הרבּ", "טבּח'", "סכּת", "רפע", "פתח", "ועד", "צבּע'", "דהן", "סאל", "פרכּ", "נפח'", "עזם", "עטס", "רכּץ'", "נפח'", "עזם", "עטס", "רכּץ'", "שער", "סרק", "תרכּ", "קלבּ", "רבּט", "מנע", "עזף", "ג'מע", "מזע"];
const nizelHebrew = ["שתה", "ירד", "הבין", "חזר", "יכול", "ידע", "השיג את", "נולד", "לבש", "תפס", "רכב", "הפסיד", "הרוויח", "היה דומה ל", "שנא", "עשה", "נחלש", "הגיע", "הסתיים", "שמע", "התייאש", "הצליח", "שיחק", "יצא", "חלם", "התעייף", "התרחב", "התייבש", "נבל", "צפה", "ניחש", "שחה", "צחק", "שמח", "שבע", "קטן", "חלה", "שמר", "נפל", "צמא", "הרים", "ריחם"];
const nizelArabic = ["שרבּ", "נזל", "פהם", "רג'ע", "קדר", "ערף", "לחק", "ח'לק", "לבּס", "מסכּ", "רכּבּ", "ח'סר", "כּסבּ", "שבּה", "כּרה", "עמל", "צ'עף", "וצל", "ח'לץ", "סמע", "יאס", "נג'ח", "לעבּ", "טלע", "חלם", "תעבּ", "וסע", "יבּס", "דבּל", "חצ'ר", "חזר", "סבּח", "צ'חכּ", "פרח", "שבּע", "זע'ר", "מרד", "חפז", "וקע", "עטש", "חמל", "שפק"];
const hakaHebrew = ["דיבר", "בנה", "מצא", "זרק", "טיגן", "השקה", "בא", "עשה על האש", "מחק", "קרא", "קנה"];
const hakaArabic = ["חכּא", "בּנא", "לקא", "רמא", "קלא", "סקא", "אג'א", "שוא", "מחא", "קרא", "שרא"];
const nisiHebrew = ["שכח", "הלך", "התחיל", "ידע", "היה מרוצה", "בכה", "התייקר", "התעורר", "נרדם", "נשאר", "נרגע"];
const nisiArabic = ["נסי", "משי", "בּדי", "דרי", "רצ'י", "בּכּי", "ע'לי", "צחי", "ע'פי", "בּקי", "הדי"];
const habbHebrew = ["שם", "מזג", "אהב", "השתין", "זרק", "נשאר", "פירק", "הסתובב", "הריח", "פתר", "משך, מתח", "מצץ", "גזר", "ענה", "מתח", "התמעט", "קפץ", "חנה", "ספר", "נשך", "צירף", "השתעל", "צלצל", "ירה", "קילל"];
const habbArabic = ["חטّ", "צבּّ", "חבּّ", "שח'ّ", "כּבּّ", "ט'לّ", "פכּّ", "לףّ", "שםّ", "חלّ", "מדّ", "מץّ", "קץّ", "רדّ", "שדّ", "קל", "נטّ", "צףّ", "עדّ", "עצ'ّ", "צ'םّّ", "קחّّ", "רןّ", "טחّ", "סבّ"];
const rahHebrew = ["הלך", "היה", "ראה", "ביקר", "אמר", "צם", "זכה", "נכנס", "קם", "נישק", "מת", "הסתובב", "נעשה", "פחד", "טעם", "נהג"];
const rahArabic = ["ראח", "כּאן", "שאף", "זאר", "קאל", "צאם", "פאז", "פאת", "קאם", "בּאס", "מאת", "דאר", "צאר", "ח'אף", "דאק", "סאק"];
const jabHebrew = ["הביא", "חי", "מכר", "ישן", "עף", "הוסיף", "אבד", "התעורר", "נרפא", "נגע", "מדד", "שפך"];
const jabArabic = ["ג'אבּ", "עאש", "בּאע", "נאם", "טאר", "זאד", "צ'אע", "פאק", "טאבּ", "צאבּ", "קאס", "דאר"];

// future verbs
const yuktolHebrew = ["יבקש", "יקדים", "יגור", "יעבור", "יכה", "יעבור", "ירוץ", "ישב", "יודה", "יברח", "יבשל", "ישתוק", "ירגיש", "ילמד", "יצבע", "יצחצח", "ינשוף", "יתעטש"];
const yuktolArabic = ["טלבּ", "סבּק", "סכּן", "נקל", "צ'רבּ", "מרק", "רכּץ'", "קעד", "שכּר", "הרבּ", "טבּח'", "סכּת", "שער", "דרס", "צבּע'", "פרכּ", "נפח'", "עטס"];
const yimsekHebrew = ["ישבע", "ינחש", "ידע", "יתפוס", "יבטיח", "יזמין", "ישבור"];
const yimsekArabic = ["חלף", "חזר", "ערף", "מסכּ", "ועד", "עזם", "כּסר"];
const yismaHebrew = ["יחתוך", "ינגב", "יבדוק", "ישחה", "ישלם", "ישלח", "יצחק", "ירים", "ישתה", "ירוויח", "יעשה", "ייחלש", "יגמר", "ישמע", "יפתח", "יגיע", "יתייאש", "יצליח", "יצבע", "ישחק", "יצא", "יחלום", "יתעייף", "ישאל", "יתרחב", "יתייבש", "ינבול", "יקרא", "ינכח", "יבין", "יחזור", "יוכל", "ישיג", "יוולד", "ילבש", "ירכב", "יפסיד", "ישנא", "יפסיד", "ירד"];
const yismaArabic = ["קטע", "מסח", "פחצ", "סבּח", "דפע", "בּעת", "צ'חכּ", "רפע", "שרבּ", "כּסבּ", "עמל", "צ'עף", "ח'לצ", "סמע", "פתח", "וצל", "יאס", "נג'ח", "דהן", "לעבּ", "טלע", "חלם", "תעבּ", "סאל", "וסע", "יבּס", "דבּל", "קרא", "חצ'ר", "פהם", "רג'ע", "קדר", "לחק", "ח'לק", "לבּס", "רכּבּ", "ח'סר", "כּרה", "ח'סר", "נזל"];
const iruhHebrew = ["יהיה", "יראה", "יבקר", "יאמר", "יצום", "יזכה", "יכנס", "יקום", "ינשק", "ימות", "יסתובב"];
const iruhArabic = ["כּון", "שוף", "זור", "קול", "צום", "פוז", "פות", "קום", "בּוס", "מות", "דור"];
const ijibHebrew = ["יהפוך להיות", "יביא", "יחיה", "ימכור", "יעוף", "יוסיף", "יאבד", "יתעורר", "יתרפא"];
const ijibArabic = ["ציר", "ג'יבּ", "עיש", "בּיע", "טיר", "זיד", "צ'יע", "פיק", "טיבּ"];
const ihkiHebrew = ["ידבר", "יבנה", "ישליך", "יטגן", "ישקה", "ילך", "יבכה", "יעשה על האש"];
const ihkiArabic = ["חכּי", "בּני", "רמי", "קלי", "סקי", "משי", "בכּי", "שוי"];
const insaHebrew = ["ישאר", "ישכח", "יתחיל", "יהיה מרוצה", "יתייקר", "יתעורר"];
const insaArabic = ["בּקא", "נסא", "בּדא", "רצ'א", "ע'לא", "צחא"];
const ihibbHebrew = ["יאהב", "יפרק", "יסתובב", "יריח", "יפתור", "ימתח", "יחזק", "יתמעט", "יספור", "ינשוך", "יצרף", "ישתעל", "ישפוך"];
const ihibbArabic = ["חבּّ", "פכּّ", "לףّ", "שםّ", "חלّ", "מדّ", "שדّ", "קלّ", "עדّ", "עץ'ّ", "צ'םّ", "קחّ", "כּבּّ"];
const ihuttHebrew = ["ישים", "ימזוג", "ישתין", "ימצוץ", "יגזור", "יענה", "יקפוץ", "יחנה"];
const ihuttArabic = ["חטّ", "צבּّ", "שח'ّ", "מץّ", "קץّ", "רדّ", "נטّ", "צףّ"];


export const formNamesPast = ["katab", "nizel", "haka", "nisi", "habb", "rah", "jab"];
export const formNamesFuture = ["yuktol", "yimsek", "yisma", "iruh", "ijib", "ihki", "insa", "ihibb", "ihutt"];

export const rootsArabicPast = {
    "katab": katabArabic,
    "nizel": nizelArabic,
    "haka": hakaArabic,
    "nisi": nisiArabic,
    "habb": habbArabic,
    "rah": rahArabic,
    "jab": jabArabic
}

export const rootsHebrewPast = {
    "katab": katabHebrew,
    "nizel": nizelHebrew,
    "haka": hakaHebrew,
    "nisi": nisiHebrew,
    "habb": habbHebrew,
    "rah": rahHebrew,
    "jab": jabHebrew
}

export const rootsArabicFuture = {
    "yuktol": yuktolArabic,
    "yimsek": yimsekArabic,
    "yisma": yismaArabic,
    "iruh": iruhArabic,
    "ijib": ijibArabic,
    "ihki": ihkiArabic,
    "insa": insaArabic,
    "ihibb": ihibbArabic,
    "ihutt": ihuttArabic
}

export const rootsHebrewFuture = {
    "yuktol": yuktolHebrew,
    "yimsek": yimsekHebrew,
    "yisma": yismaHebrew,
    "iruh": iruhHebrew,
    "ijib": ijibHebrew,
    "ihki": ihkiHebrew,
    "insa": insaHebrew,
    "ihibb": ihibbHebrew,
    "ihutt": ihuttHebrew
}