import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    fallbacklng: "en",
    returnObjects:true,
    resources:{
        en:{
            translation: {
                greeting:"Hello, Everyone!",
                homedescription:{
                    line1:"We are",
                    line2:"Vynix",
                },
                companydescription:{
                    line1:"a dynamic tech company specializing in innovative solutions in:",
                    line2:"Application development",
                    line3:"Custom software systems",
                    line4:"Professional website design",
                },
                homeabout: {
                    title: "Allow us to introduce ourselves",
                    line1: "We are a tech company of skilled software engineers, specializing in services such as:",
                    line2: "website design, mobile and web application development, custom software systems.",
                    line3: "With extensive industry experience, we are committed to delivering high-quality,",
                    line4: "professional solutions tailored to meet each client's unique needs.",
                },
                
            },
        },
        ar:{
            translation: {
                greeting:"اهلا وسهلا بكم",
                homedescription:{
                    line1:"نحن شركة",
                    line2:"فاينيكس",
                },
                companydescription:{
                    line1: "شركة تكنولوجيا ديناميكية متخصصة في حلول مبتكرة في:",
                    line2: "تطوير التطبيقات",
                    line3: "أنظمة برمجية متخصصة",
                    line4: "تصميم مواقع احترافي",

                },
                homeabout: {
                    title: "دعونا نقدم أنفسنا",
                    line1: "نحن شركة تكنولوجيا تضم مهندسي برمجيات ماهرين، متخصصون في خدمات مثل:",
                    line2: "تصميم المواقع، تطوير تطبيقات الهواتف والويب، وأنظمة برمجية متخصصة.",
                    line3: "مع خبرة واسعة في المجال، نحن ملتزمون بتقديم حلول عالية الجودة",
                    line4: "ومهنية تلبي الاحتياجات الفريدة لكل عميل.",
                },
                
            },
        },
        he:{
            translation: {
                greeting:"שלום לכולם",
                homedescription:{
                    line1:"אנחנו חברת",
                    line2:"ויניקס",
                },
                companydescription:{
                    line1:"אנחנו חברת",
                    line2:"ויניקס",
                    line3:"",
                    line4:"",
                },
                companydescription:{
                    line1: "חברת טכנולוגיה דינמית המתמחה בפתרונות חדשניים בתחום:",
                    line2: "פיתוח אפליקציות",
                    line3: "מערכות תוכנה מותאמות אישית",
                    line4: "עיצוב אתרים מקצועי",

                },
                homeabout: {
                    title: "הרשו לנו להציג את עצמנו",
                    line1: "אנחנו חברת טכנולוגיה עם מהנדסי תוכנה מיומנים, המתמחים בשירותים כגון:",
                    line2: "עיצוב אתרים, פיתוח אפליקציות לנייד ולווב, ומערכות תוכנה מותאמות אישית.",
                    line3: "עם ניסיון עשיר בתחום, אנו מחויבים לספק פתרונות איכותיים",
                    line4: "ומקצועיים המותאמים לצרכים הייחודיים של כל לקוח."
                },
                
            },
        },

    },
});