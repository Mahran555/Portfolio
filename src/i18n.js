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
                aboutus: {
                    title:"About Us",
                    skill:"Professional Skillset",
                    par1: "Vynix is a team of skilled and certified engineers specializing in application, system, and website development for a diverse range of industries. Our expertise spans website design, mobile and web application development, and custom software systems, all crafted to deliver high-quality, professional solutions that meet each client's unique requirements.",
                    par2: "Our team is composed of certified software and electronics engineers, each with extensive hands-on experience across a wide array of software projects, from public-facing applications to private systems that we can't display due to confidentiality.",
                    par3: "Some of our team members are also actively engaged in research and development, working on cutting-edge studies that will further enhance our services once published. At Vynix, we are dedicated to innovation, quality, and the success of our clients, ensuring every project reflects our commitment to excellence."
                },
                projects:{
                        title:"Our Recent",
                        title2:"Works",
                        des:"here are a few our projects",
                },
                navbar:{
                    home:"Home",
                    about:"About",
                    contact:"Contact",
                    projects:"Projects",
                },
                contactpage:{
                    title:"Contact Us",
                    des1:"Get in touch with us to discuss your project.",
                    des2:"Our team at Vynix is ready to help bring your ideas to life with innovative solutions.",
                    email:"Email",
                    phone:"Phone",
                    address:"Address",

                },
                contactpagecard:{
                    nametitle:"Name",
                    nameplaceholder:"Enter your name",
                    emailtitle:"Email",
                    emailplaceholder:"youremail@example...",
                    messagetitle:"Message",
                    messageplaceholder:"Enter your message",
                    sendbtn:"Send",

                },
                contactpagealert:{
                        errorname1:"Please enter your name.",
                        erroremail:"Please enter a valid email address.",
                        errormsg:"Please enter a message.",
                        succalert:"Thank you! Your message has been sent successfully, we will contact you soon.",
                        failedalert:"Failed to send message, please try again.",
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
                aboutus: {
                    title: "من نحن",
                    skill:"مهارات احترافية",
                    par1: "تعد فاينيكس شركة تضم فريقاً من المهندسين المعتمدين والمتخصصين في تطوير التطبيقات، الأنظمة، ومواقع الإنترنت لمجالات متنوعة. تشمل خبراتنا تصميم المواقع الإلكترونية، تطوير تطبيقات الهاتف المحمول والويب، ونظم البرمجيات المخصصة، مع التركيز على تقديم حلول عالية الجودة واحترافية تناسب احتياجات كل عميل.",
                    par2: "يتكون فريقنا من مهندسي برمجيات وإلكترونيات معتمدين يتمتعون بخبرة عملية واسعة في مجموعة متنوعة من المشاريع البرمجية، من التطبيقات العامة إلى الأنظمة الخاصة التي لا يمكن عرضها بسبب السرية.",
                    par3: "يشارك بعض أعضاء الفريق أيضًا في البحث والتطوير المتقدم، مما سيمكننا من تعزيز خدماتنا بشكل أكبر عند نشر هذه الأبحاث. في فاينيكس، نحن ملتزمون بالابتكار والجودة ونجاح عملائنا، مع ضمان أن يعكس كل مشروع التزامنا بالتميز."
                },
                
                projects: {
                    title: "أعمالنا",
                    title2:"الأخيرة",
                    des: "إليكم بعض مشاريعنا",
                },
                navbar: {
                    home: "الرئيسية",
                    about: "من نحن",
                    contact: "اتصل بنا",
                    projects: "المشاريع",
                },
                contactpage:{
                    title: "تواصل معنا",
                    des1: "تواصل معنا لمناقشة مشروعك.",
                    des2: "فريقنا في فاينيكس جاهز لمساعدتك في تحويل أفكارك إلى واقع من خلال حلول مبتكرة.",
                    email: "البريد الإلكتروني",
                    phone: "الهاتف",
                    address: "العنوان",

                },
                contactpagecard:{
                    nametitle: "الاسم",
                    nameplaceholder: "أدخل اسمك",
                    emailtitle: "البريد الإلكتروني",
                    emailplaceholder: "youremail@example...",
                    messagetitle: "الرسالة",
                    messageplaceholder: "أدخل رسالتك",
                    sendbtn: "إرسال",

                },
                contactpagealert:{
                    errorname1:"يرجى إدخال اسمك",
                    erroremail:"يرجى إدخال عنوان بريد إلكتروني صالح",
                    errormsg:"يرجى إدخال رسالة",
                    succalert: "شكرًا لك! تم إرسال رسالتك بنجاح، سنتواصل معك قريبًا.",
                    failedalert: "فشل في إرسال الرسالة، يرجى المحاولة مرة أخرى.",
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
                aboutus: {
                    title: "אודותינו",
                    skill:"כישורים מקצועיים",
                    par1: "ויניקס היא חברה של מהנדסים מוסמכים המתמחה בפיתוח יישומים, מערכות ואתרי אינטרנט לתחומים מגוונים. תחומי ההתמחות שלנו כוללים עיצוב אתרים, פיתוח יישומי מובייל ואינטרנט, ומערכות תוכנה מותאמות אישית, תוך הקפדה על פתרונות איכותיים ומקצועיים המותאמים לצרכים הייחודיים של כל לקוח.",
                    par2: "הצוות שלנו מורכב ממהנדסי תוכנה ואלקטרוניקה מוסמכים ובעלי ניסיון מעשי בפרויקטים מגוונים, החל מיישומים לציבור הרחב ועד למערכות פרטיות שאינן ניתנות להצגה בשל סודיות.",
                    par3: "חלק מחברי הצוות שלנו משתתפים גם במחקר ופיתוח חדשניים, שיאפשרו לנו לשפר את השירותים שלנו עוד יותר עם פרסומם. בוויניקס, אנו מחויבים לחדשנות, איכות ולהצלחת לקוחותינו, ומקפידים שכל פרויקט ישקף את המחויבות שלנו למצוינות."
                },
                projects: {
                    title: "העבודות האחרונות",
                    title2:"שלנו",
                    des: "כאן תוכלו לראות כמה מהפרויקטים שלנו",
                },
                navbar: {
                    home: "בית",
                    about: "אודות",
                    contact: "צור קשר",
                    projects: "פרויקטים",
                },
                
                contactpage:{
                    title: "צור קשר",
                    des1: "צרו קשר כדי לדון בפרויקט שלכם.",
                    des2: "הצוות שלנו בויניקס מוכן לעזור להביא את הרעיונות שלכם לחיים עם פתרונות חדשניים.",
                    email: "אימייל",
                    phone: "טלפון",
                    address: "כתובת",

                },
                contactpagecard:{
                    nametitle: "שם",
                    nameplaceholder: "הזן את שמך",
                    emailtitle: "אימייל",
                    emailplaceholder: "youremail@example...",
                    messagetitle: "הודעה",
                    messageplaceholder: "הזן את הודעתך",
                    sendbtn: "שלח",

                },
                contactpagealert:{
                    errorname1:"אנא הזן את שמך",
                    erroremail:"אנא הזן כתובת אימייל תקינה",
                    errormsg:"אנא הזן הודעה",
                    succalert: "תודה! ההודעה שלך נשלחה בהצלחה, נחזור אליך בקרוב.",
                    failedalert:"שליחת ההודעה נכשלה, אנא נסה שוב.",
            },
            },
        },

    },
});