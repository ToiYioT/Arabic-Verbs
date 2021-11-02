
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
const yuktobHebrew = [];
const yuktobArabic = [];
const yinzelHebrew = [];
const yinzelArabic = [];
const yismaHebrew = [];
const yismaArabic = [];
const iruhHebrew = [];
const iruhArabic = [];
const ijibHebrew = [];
const ijibArabic = [];
const ihkiHebrew = [];
const ihkiArabic = [];
const insaHebrew = [];
const insaArabic = [];
const ihibbHebrew = [];
const ihibbArabic = [];
const ihuttHebrew = [];
const ihuttArabic = [];


export const formNamesPast = ["katab", "nizel", "haka", "nisi", "habb", "rah", "jab"];
export const formNamesFuture = ["yuktob", "yinzel", "yisma", "iruh", "ijib", "ihki", "insa", "ihibb", "ihutt"];

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
    "yuktob": yuktobArabic,
    "yinzel": yinzelArabic,
    "yisma": yismaArabic,
    "iruh": iruhArabic,
    "ijib": ijibArabic,
    "ihki": ihkiArabic,
    "insa": insaArabic,
    "ihibb": ihibbArabic,
    "ihutt": ihuttArabic
}

export const rootsHebrewFuture = {
    "yuktob": yuktobHebrew,
    "yinzel": yinzelHebrew,
    "yisma": yismaHebrew,
    "iruh": iruhHebrew,
    "ijib": ijibHebrew,
    "ihki": ihkiHebrew,
    "insa": insaHebrew,
    "ihibb": ihibbHebrew,
    "ihutt": ihuttHebrew
}