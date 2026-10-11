document.addEventListener("DOMContentLoaded", () => {

    console.log("❤️ Zena Birthday Website Loaded");

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const openingScreen = document.getElementById("openingScreen");
    const startBtn = document.getElementById("startBtn");

    const bgMusic = document.getElementById("bgMusic");

    const languageBtn = document.getElementById("languageBtn");
    const themeBtn = document.getElementById("themeBtn");

    const musicBtn = document.getElementById("musicBtn");
    const musicIcon = document.getElementById("musicIcon");
    const musicText = document.getElementById("musicText");

    const heartsContainer = document.getElementById("heartsContainer");
    const toast = document.getElementById("toast");
    const backTop = document.getElementById("backTop");


    /* =====================================================
       LANGUAGE
    ===================================================== */

    let currentLanguage =
        localStorage.getItem("zenaLanguage") || "ar";


    const translations = {

        ar: {

            openingText:
                "في يوم من الأيام وُلدت إنسانة<br>لم تكن تعرف أن قلبًا ما سيحبها بكل هذا القدر...",

            startStory: "ابدئي القصة ❤️",

            navHome: "الرئيسية",
            navMemories: "ذكرياتنا",
            navStory: "قصتنا",
            navFuture: "المستقبل",

            music: "موسيقى",

            startJourney: "ابدئي رحلتك ✨",

            heroText:
                "اليوم مش مجرد تاريخ على التقويم...<br>اليوم هو اليوم اللي صار فيه العالم أجمل.",

            countdownTitle: "العد التنازلي ليومك",

            countdownText:
                "كل ثانية تقربنا من يوم ولدت فيه أجمل صدفة في حياتي",

            days: "يوم",
            hours: "ساعة",
            minutes: "دقيقة",
            seconds: "ثانية",

            sinceTitle: "وكل لحظة معك...",
            sinceText: "تستحق أن تُحسب",

            secretTitle: "في شيء مخبأ إلك...",

            secretText:
                "بس مش أي شخص بقدر يفتحه ❤️",

            secretButton:
                "اكتشفي السر 🔑",

            memoriesTitle: "ألبوم ذكرياتنا",

            memoriesText:
                "بعض الصور لا تحتاج إلى شرح... لأنها تحمل شعورًا كاملًا.",

            photo1: "أولى الذكريات ❤️",
            photo2: "ضحكتك أجمل تفصيل",
            photo3: "لحظة لن أنساها",
            photo4: "أنتِ أجمل صدفة",
            photo5: "تفاصيلك الصغيرة",
            photo6: "وإلى ذكريات أجمل ❤️",
            photo7: "أنتِ الحكاية التي لا أريد لها أن تنتهي ❤️",
            photo8: "أحبك اليوم وغدًا وكل يوم ❤️",
            photo9: "أجمل صدفة في حياتي 💕",
            photo10: "أنتِ قصتي المفضلة ❤️",
            photo11: "أنتِ نبض قلبي الهادئ وسط ضجيج العالم ❤️",
            photo12: "أنتِ راحتي في كل شيء",
            photo13: "في عيونك حكاية أحب أن أضيع فيها ❤️",
            photo14: "أنتِ أجمل تفاصيل حياتي 💗",
            photo15: "أنتِ حكاية قلبي 🌹",
            photo16: "عيونك وطن، وأنا أحب الوطن. ❤️",
            photo17: "لحظة بسيطة لكنها غالية جدًا 💗",
            photo18: "لحظة مليئة بالحب ❤️ باقية تودي بوسات بس انا مش باقي اقدر يعسولة",
            photo19: "هنا يسكن قلبي ❤️",
            photo20: "ذكرى أحتفظ بها في قلبي 🤍",
            photo21: "واحد من أجمل أيامي ✨",
            photo22: "وما زالت الذكرى جميلة ✨",
            photo23: "صورة تحمل ألف شعور ❤️",
            photo24: "وإلى ذكريات أجمل ❤️",
            photo25: "لأنك ببساطة أنتِ 🤍",
            photo26: "تفاصيل صغيرة أحبها جدًا 🌷",
            photo27: "كل صورة معك لها حكاية ❤️",
            photo28: "يا أجمل من رأت عيوني 🌷",
            photo29: "أيام جميلة صنعتِها أنتِ ✨",
            photo30: "القرب منك أجمل مكان 🌹",
            photo31: "أنتِ حكاية قلبي 🌹",
            photo32: "ابتسامتك أجمل تفاصيلي ❤️",
            photo33: "لحظة بسيطة لكنها غالية جدًا 💗",
            photo34: "أجمل لحظاتنا معًا 🌷",
            photo35: "بيننا ألف ذكرى وأكثر 💕",
            photo36: "لحظة أتمنى لو تعود ❤️",
            photo37: "لحظة لن أنساها ❤️",
            photo38: "ذكرى لا تشبه أي ذكرى ❤️",
            photo39: "لحظة بقيت في قلبي 🤍",
            photo40: "أجمل شيء مرّ في أيامي 💗",
            photo41: "كل شيء يصبح أجمل معك 🌹",
            photo42: "هنا بدأت حكاية جميلة ✨<br>أعشقك يحلوتي ام دمعه",

            videoTitle: "لحظات تتحرك أمامنا",

            videoText:
                "لأن بعض الذكريات أجمل عندما نراها من جديد.",

            loveTitle: "أشياء أحبها فيكِ",

            loveText:
                "ولو كتبت كل الأسباب... ما أظن أن صفحة واحدة ستكفيني.",

            love1Title: "ضحكتك",

            love1Text:
                "لأنها قادرة تغير يوم كامل بكلمة واحدة.",

            love2Title: "قلبك",

            love2Text:
                "لأن داخلك أجمل من كل شيء يمكن وصفه.",

            love3Title: "وجودك",

            love3Text:
                "مجرد وجودك يجعل الأشياء العادية مختلفة.",

            love4Title: "أنتِ",

            love4Text:
                "ببساطة... أحبك لأنك أنتِ.",

            randomTitle:
                "اضغطي على القلب...",

            randomDefault:
                "ويمكن يطلع لك شيء من الأشياء اللي نفسي أحكيلك إياها.",

            randomBtn:
                "رسالة عشوائية ❤️",

            giftsTitle:
                "عندي لكِ 3 هدايا",

            giftsText:
                "اختاري واحدة... أو جربيهم كلهم 💋❤️",

            gift1: "هدية رقم 1",
            gift2: "هدية رقم 2",
            gift3: "هدية رقم 3",

            giftTitle: "هدية لكِ",

            giftModal: "هدية من قلبي ❤️",

            giftModalText:
                "هذه الهدية الصغيرة لكِ.",

            gameTitle:
                "لعبة قلوب زينة ❤️",

            gameText:
                "اجمعي القلوب واكتشفي تاريخ اليوم الذي بدأت فيه حكاية جميلة.",

            stageOne:
                "المرحلة الأولى",

            ready:
                "جاهزة؟",

            gameStartText:
                "كل قلب ستجمعينه يحمل رسالة مختلفة لكِ.",

            startGame:
                "ابدئي اللعبة ❤️",

            hiddenHeart:
                "قلب مخفي ❤️",

            hiddenTitle:
                "هناك قلب واحد مختلف...",

            hiddenText:
                "إذا وجدتيه، يمكن أن تكتشفي شيئًا آخر.",

            storyTitle:
                "بعض من قصتنا",

            storyText:
                "لأن أجمل القصص لا تُقاس بعدد الصفحات.",

            time1Small:
                "البداية",

            time1Title:
                "أول مرة دخلتِ حياتي",

            time1Text:
                "لم أكن أعرف وقتها أن شخصًا واحدًا يمكن أن يترك كل هذا الأثر.",

            time2Small:
                "ثم...",

            time2Title:
                "بدأت التفاصيل تكبر",

            time2Text:
                "صارت رسائلك، صوتك، ضحكتك، وكل شيء فيك جزءًا من يومي.",

            time3Small:
                "حتى في الأيام الصعبة",

            time3Title:
                "بقيتِ مهمة",

            time3Text:
                "لأن بعض الأشخاص لا يرتبطون بالأيام الجميلة فقط، بل يصبحون جزءًا من القلب.",

            time4Small:
                "واليوم",

            time4Title:
                "ما زالت الحكاية مستمرة",

            time4Text:
                "وهذه الصفحة ليست النهاية... هذه مجرد بداية فصل جديد.",

            hereTitle:
                "لو كنتِ هنا الآن...",

            here1Title:
                "أول شيء",

            here1Text:
                "كنت سأجلس بجانبك وأترك الكلام للعيون.",

            here2Title:
                "ثاني شيء",

            here2Text:
                "كنت سأعطيك وردة وأقول لك: كل سنة وأنتِ معي.",

            here3Title:
                "ثالث شيء",

            here3Text:
                "كنت سأحضنك وقتًا طويلًا بدون أي كلام.",

            here4Title:
                "والأهم",

            here4Text:
                "كنت سأخبرك كم أنتِ غالية عندي.",

            futureTitle:
                "أشياء أتمنى نعيشها سوا",

            futureText:
                "لأنني لا أريد أن تكون أجمل ذكرياتنا كلها في الماضي.",

            future1Title:
                "أول سفرية",

            future1Text:
                "مكان جديد، طريق طويل، وأنتِ بجانبي.",

            future2Title:
                "أول غروب",

            future2Text:
                "نشاهد الشمس تختفي ونحكي عن كل شيء.",

            future3Title:
                "مكان يجمعنا",

            future3Text:
                "مكان صغير، لكنه مليء بالضحك والراحة.",

            future4Title:
                "وما بعد ذلك",

            future4Text:
                "أشياء كثيرة لا أعرف تفاصيلها... لكن أتمنى تكونين فيها.",

            roseTitle:
                "اضغطي على الوردة",

            roseDefault:
                "يمكن تفتح لكِ كلمة من قلبي...",

            letterTitle:
                "رسالة مني إلى زينة",

            readLetter:
                "اقرئي رسالتي ❤️",

            cakeTitle:
                "عندك أمنية؟",

            cakeText:
                "أطفئي الشموع واحدة واحدة...",

            finalTitle:
                "كل عام وأنتِ أجمل شيء في حياتي.",

            finalText:
                "أتمنى أن تكون سنتك الجديدة مليئة بالسلام، والضحكات، والأيام الجميلة... وأتمنى أن أكون موجودًا في أكبر عدد ممكن منها.",

            passwordTitle:
                "السر مخبأ هنا",

            passwordText:
                "أدخلي كلمة السر ❤️",

            passwordPlaceholder:
                "كلمة السر",

            openSecret:
                "افتحي السر",

            passwordError:
                "هممم... جربي مرة ثانية ❤️",

            secretLetterTitle:
                "إلى زينة..."
        },


        en: {

            openingText:
                "One day, a beautiful soul was born<br>without knowing that someone would love her this much...",

            startStory:
                "Start the Story ❤️",

            navHome:
                "Home",

            navMemories:
                "Memories",

            navStory:
                "Our Story",

            navFuture:
                "Future",

            music:
                "Music",

            startJourney:
                "Start Your Journey ✨",

            heroText:
                "Today is not just another date on the calendar...<br>Today is the day the world became a little more beautiful.",

            countdownTitle:
                "Countdown to Your Day",

            countdownText:
                "Every second brings us closer to the day the most beautiful coincidence in my life was born.",

            days:
                "Days",

            hours:
                "Hours",

            minutes:
                "Minutes",

            seconds:
                "Seconds",

            sinceTitle:
                "Every moment with you...",

            sinceText:
                "is worth counting.",

            secretTitle:
                "There is something hidden for you...",

            secretText:
                "But not everyone can open it ❤️",

            secretButton:
                "Discover the Secret 🔑",

            memoriesTitle:
                "Our Memory Album",

            memoriesText:
                "Some pictures need no explanation... because they carry an entire feeling.",

            photo1:
                "Our First Memories ❤️",

            photo2:
                "Your Smile Is My Favorite Detail",

            photo3:
                "A Moment I Will Never Forget",

            photo4:
                "You Are My Favorite Coincidence",

            photo5:
                "Your Little Details",

            photo6:
                "And More Beautiful Memories ❤️",

            photo7:
                "You Are the Story I Never Want to End ❤️",

            photo8:
                "I Love You Today, Tomorrow, and Every Day ❤️",

            photo9:
                "The Most Beautiful Coincidence in My Life 💕",

            photo10:
                "You Are My Favorite Story ❤️",

            photo11:
                "You Are My Calm Heartbeat in the Middle of the World's Noise ❤️",

            photo12:
                "You Are My Comfort Through Everything",

            photo13:
                "There Is a Story in Your Eyes, and I Love Getting Lost in It ❤️",

            photo14:
                "You Are the Most Beautiful Detail of My Life 💗",

            photo15:
                "You Are the Story of My Heart 🌹",

            photo16:
                "Your Honey-Colored Eyes ❤️",

            photo17:
                "A Simple Moment, but So Precious 💗",

            photo18:
                "A Moment Full of Love ❤️ I Still Want to Give You Kisses, but I Can't Anymore, My Sweet Girl.",

            photo19:
                "Here Is Where My Heart Lives ❤️",

            photo20:
                "A Memory I Keep in My Heart 🤍",

            photo21:
                "One of My Most Beautiful Days ✨",

            photo22:
                "And the Memory Is Still Beautiful ✨",

            photo23:
                "A Picture That Holds a Thousand Feelings ❤️",

            photo24:
                "And More Beautiful Memories ❤️",

            photo25:
                "Because You Are Simply You 🤍",

            photo26:
                "Little Details I Love So Much 🌷",

            photo27:
                "Every Picture With You Has a Story ❤️",

            photo28:
                "Oh, the Most Beautiful One My Eyes Have Ever Seen 🌷",

            photo29:
                "Beautiful Days You Created ✨",

            photo30:
                "Being Close to You Is the Most Beautiful Place 🌹",

            photo31:
                "You Are the Story of My Heart 🌹",

            photo32:
                "Your Smile Is My Most Beautiful Detail ❤️",

            photo33:
                "A Simple Moment, but So Precious 💗",

            photo34:
                "Our Most Beautiful Moments Together 🌷",

            photo35:
                "Between Us, a Thousand Memories and More 💕",

            photo36:
                "A Moment I Wish Could Return ❤️",

            photo37:
                "A Moment I Will Never Forget ❤️",

            photo38:
                "A Memory Unlike Any Other ❤️",

            photo39:
                "A Moment That Stayed in My Heart 🤍",

            photo40:
                "The Most Beautiful Thing That Has Passed Through My Days 💗",

            photo41:
                "Everything Becomes More Beautiful With You 🌹",

            photo42:
                "Here Began a Beautiful Story ✨<br>I Adore You, My Sweet Girl, ام دمعه",

            videoTitle:
                "Moments That Move",

            videoText:
                "Because some memories are even more beautiful when we see them again.",

            loveTitle:
                "Things I Love About You",

            loveText:
                "Even if I wrote down every reason... one page would never be enough.",

            love1Title:
                "Your Smile",

            love1Text:
                "Because it can change an entire day with just one smile.",

            love2Title:
                "Your Heart",

            love2Text:
                "Because what is inside you is more beautiful than words can describe.",

            love3Title:
                "Your Presence",

            love3Text:
                "Just having you around makes ordinary things feel different.",

            love4Title:
                "You",

            love4Text:
                "Simply... I love you because you are you.",

            randomTitle:
                "Press the Heart...",

            randomDefault:
                "Maybe it will reveal something I've always wanted to tell you.",

            randomBtn:
                "Random Message ❤️",

            giftsTitle:
                "I Have 3 Gifts For You",

            giftsText:
                "Choose one... or try them all 😌❤️",

            gift1:
                "Gift Number 1",

            gift2:
                "Gift Number 2",

            gift3:
                "Gift Number 3",

            giftTitle:
                "A Gift For You",

            giftModal:
                "A Gift From My Heart ❤️",

            giftModalText:
                "This little gift is for you.",

            gameTitle:
                "Zena's Heart Game ❤️",

            gameText:
                "Collect the hearts and discover the date when a beautiful story began.",

            stageOne:
                "Stage One",

            ready:
                "Ready?",

            gameStartText:
                "Every heart you collect carries a different message for you.",

            startGame:
                "Start the Game ❤️",

            hiddenHeart:
                "Hidden Heart ❤️",

            hiddenTitle:
                "There Is One Different Heart...",

            hiddenText:
                "If you find it, you might discover something else.",

            storyTitle:
                "A Little Bit of Our Story",

            storyText:
                "Because the best stories cannot be measured by the number of pages.",

            time1Small:
                "The Beginning",

            time1Title:
                "The First Time You Entered My Life",

            time1Text:
                "I didn't know then that one person could leave such a deep mark.",

            time2Small:
                "Then...",

            time2Title:
                "The Little Things Started Growing",

            time2Text:
                "Your messages, your voice, your laugh... everything about you became part of my day.",

            time3Small:
                "Even on Difficult Days",

            time3Title:
                "You Still Mattered",

            time3Text:
                "Because some people are not only connected to the good days. They become part of your heart.",

            time4Small:
                "Today",

            time4Title:
                "The Story Is Still Going",

            time4Text:
                "This page is not the ending... it is simply the beginning of a new chapter.",

            hereTitle:
                "If You Were Here Right Now...",

            here1Title:
                "First",

            here1Text:
                "I would sit beside you and let our eyes say everything.",

            here2Title:
                "Second",

            here2Text:
                "I would give you a rose and say: Happy Birthday, my love.",

            here3Title:
                "Third",

            here3Text:
                "I would hug you for a long time without saying a word.",

            here4Title:
                "Most Important",

            here4Text:
                "I would tell you how precious you are to me.",

            futureTitle:
                "Things I Hope We Experience Together",

            futureText:
                "Because I don't want all our best memories to belong to the past.",

            future1Title:
                "Our First Trip",

            future1Text:
                "A new place, a long road, and you beside me.",

            future2Title:
                "Our First Sunset",

            future2Text:
                "Watching the sun disappear while talking about everything.",

            future3Title:
                "A Place For Us",

            future3Text:
                "A small place filled with laughter, peace, and comfort.",

            future4Title:
                "And Beyond",

            future4Text:
                "So many things I don't know yet... but I hope you are part of them.",

            roseTitle:
                "Press the Rose",

            roseDefault:
                "Maybe it will open a little word from my heart...",

            letterTitle:
                "A Letter From Me To Zena",

            readLetter:
                "Read My Letter ❤️",

            cakeTitle:
                "Do You Have a Wish?",

            cakeText:
                "Blow out the candles one by one...",

            finalTitle:
                "Happy Birthday to the most beautiful part of my life.",

            finalText:
                "I hope your new year is filled with peace, laughter, and beautiful days... and I hope I get to be there for as many of them as possible.",

            passwordTitle:
                "The Secret Is Hidden Here",

            passwordText:
                "Enter the password ❤️",

            passwordPlaceholder:
                "Password",

            openSecret:
                "Open the Secret",

            passwordError:
                "Hmm... try again ❤️",

            secretLetterTitle:
                "To Zena..."
        }

    };


    /* =====================================================
       APPLY LANGUAGE
    ===================================================== */

    function applyLanguage() {

        const data = translations[currentLanguage];

        document.documentElement.lang =
            currentLanguage;

        document.documentElement.dir =
            currentLanguage === "ar"
                ? "rtl"
                : "ltr";


        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.dataset.i18n;

                if (data[key] !== undefined) {

                    element.innerHTML =
                        data[key];

                }

            });


        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach(element => {

                const key =
                    element.dataset.i18nPlaceholder;

                if (data[key] !== undefined) {

                    element.placeholder =
                        data[key];

                }

            });


        if (languageBtn) {

            languageBtn.textContent =
                currentLanguage === "ar"
                    ? "EN"
                    : "AR";

        }


        updateDynamicLanguage();

        updateGameLanguage();

    }


    if (languageBtn) {

        languageBtn.addEventListener("click", () => {

            currentLanguage =
                currentLanguage === "ar"
                    ? "en"
                    : "ar";

            localStorage.setItem(
                "zenaLanguage",
                currentLanguage
            );

            applyLanguage();

        });

    }


    /* =====================================================
       THEME
    ===================================================== */

    const savedTheme =
        localStorage.getItem("zenaTheme");

    if (savedTheme === "light") {

        document.body.classList.add("light");

        if (themeBtn) {
            themeBtn.textContent = "☀️";
        }

    }


    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("light");

            const light =
                document.body.classList.contains("light");

            localStorage.setItem(
                "zenaTheme",
                light ? "light" : "dark"
            );

            themeBtn.textContent =
                light ? "☀️" : "🌙";

        });

    }


    /* =====================================================
   MUSIC
===================================================== */

let musicPlaying = false;

/*
   الموسيقى:
   أول تشغيل: 0 → 24 ثانية
   بعد أول انتهاء: 18 → 24 ثانية وتستمر بالتكرار
*/

function updateMusicButton() {

    if (!musicBtn) return;

    if (musicPlaying) {

        musicBtn.classList.add("playing");

        if (musicIcon) {
            musicIcon.textContent = "🔊";
        }

        if (musicText) {

            musicText.textContent =
                currentLanguage === "ar"
                    ? "تعمل"
                    : "Playing";

        }

    } else {

        musicBtn.classList.remove("playing");

        if (musicIcon) {
            musicIcon.textContent = "🎵";
        }

        if (musicText) {

            musicText.textContent =
                currentLanguage === "ar"
                    ? "موسيقى"
                    : "Music";

        }

    }

}


function playMusic() {

    if (!bgMusic) return;

    bgMusic.volume = 0.45;

    bgMusic.play()
        .then(() => {

            musicPlaying = true;

            updateMusicButton();

        })
        .catch(() => {

            musicPlaying = false;

            updateMusicButton();

            showToast(
                currentLanguage === "ar"
                    ? "اضغطي زر الموسيقى لتشغيلها 🎵"
                    : "Press the music button to play 🎵"
            );

        });

}


/*
   عند انتهاء أول تشغيل:
   نرجع للثانية 18 ونشغل من هناك.

   بعد ذلك كل مرة تنتهي:
   18 → 24
*/
if (bgMusic) {

    bgMusic.addEventListener("play", () => {

        musicPlaying = true;
        updateMusicButton();

    });


    bgMusic.addEventListener("pause", () => {

        musicPlaying = false;
        updateMusicButton();

    });


    bgMusic.addEventListener("ended", () => {

        // نرجع إلى الثانية 4
        bgMusic.currentTime = 4;

        // نشغل من الثانية 4
        bgMusic.play()
            .then(() => {

                musicPlaying = true;
                updateMusicButton();

            })
            .catch(() => {

                musicPlaying = false;
                updateMusicButton();

            });

    });

}


if (musicBtn) {

    musicBtn.addEventListener("click", () => {

        if (!bgMusic) {

            showToast(
                currentLanguage === "ar"
                    ? "ملف الموسيقى غير موجود"
                    : "Music file not found"
            );

            return;

        }

        if (bgMusic.paused) {

            playMusic();

        } else {

            bgMusic.pause();

        }

    });

}

    /* =====================================================
       START SCREEN
    ===================================================== */

    if (startBtn && openingScreen) {

        startBtn.addEventListener("click", () => {

            openingScreen.classList.add("hide");

            document.body.classList.add(
                "story-started"
            );

            playMusic();

            heartExplosion(
                window.innerWidth / 2,
                window.innerHeight / 2,
                45
            );

            setTimeout(() => {

                const home =
                    document.getElementById("home");

                if (home) {

                    home.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }, 600);

        });

    }


    /* =====================================================
       FLOATING HEARTS
    ===================================================== */

    const heartSymbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝",
        "💓",
        "💋",
        "💞"
    ];


    function createFloatingHeart() {

        if (!heartsContainer) return;

        const heart =
            document.createElement("span");

        heart.className =
            "floating-heart";

        heart.textContent =
            heartSymbols[
                Math.floor(
                    Math.random() *
                    heartSymbols.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            14 + Math.random() * 22 + "px";

        heart.style.animationDuration =
            5 + Math.random() * 5 + "s";

        heartsContainer.appendChild(heart);

        setTimeout(
            () => heart.remove(),
            10000
        );

    }


    setInterval(
        createFloatingHeart,
        300
    );


    /* =====================================================
       HEART EXPLOSION
    ===================================================== */

    function heartExplosion(
        x,
        y,
        amount = 25
    ) {

        const symbols = [
            "❤️",
            "💖",
            "💕",
            "💗",
            "💘",
            "✨",
            "💋"
        ];

        for (let i = 0; i < amount; i++) {

            const heart =
                document.createElement("span");

            heart.className =
                "explosion-heart";

            heart.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];

            heart.style.left =
                x + "px";

            heart.style.top =
                y + "px";

            const angle =
                Math.random() *
                Math.PI *
                2;

            const distance =
                100 +
                Math.random() *
                350;

            const endX =
                Math.cos(angle) *
                distance;

            const endY =
                Math.sin(angle) *
                distance;

            heart.animate(
                [
                    {
                        transform:
                            "translate(-50%,-50%) scale(0)",
                        opacity: 1
                    },
                    {
                        transform:
                            `translate(${endX}px,${endY}px) scale(1.4)`,
                        opacity: 0
                    }
                ],
                {
                    duration:
                        900 +
                        Math.random() *
                        800,

                    easing:
                        "cubic-bezier(.2,.8,.2,1)"
                }
            );

            document.body.appendChild(
                heart
            );

            setTimeout(
                () => heart.remove(),
                2000
            );

        }

    }


    /* =====================================================
       COUNTDOWN
    ===================================================== */

    function updateCountdown() {

        const now = new Date();

        let year =
            now.getFullYear();

        let birthday =
            new Date(
                year,
                9,
                13,
                0,
                0,
                0
            );

        if (now > birthday) {

            birthday =
                new Date(
                    year + 1,
                    9,
                    13,
                    0,
                    0,
                    0
                );

        }

        const difference =
            birthday - now;

        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );

        const hours =
            Math.floor(
                difference /
                (1000 * 60 * 60) %
                24
            );

        const minutes =
            Math.floor(
                difference /
                (1000 * 60) %
                60
            );

        const seconds =
            Math.floor(
                difference /
                1000 %
                60
            );

        setText("days", days);
        setText("hours", hours);
        setText("minutes", minutes);
        setText("seconds", seconds);

    }


    updateCountdown();

    setInterval(
        updateCountdown,
        1000
    );


    /* =====================================================
       SINCE
    ===================================================== */

    const sinceDate =
        new Date(
            "2024-10-05T00:00:00"
        );


    function updateSince() {

        let difference =
            new Date() -
            sinceDate;

        if (difference < 0) {
            difference = 0;
        }

        const seconds =
            Math.floor(
                difference / 1000
            );

        const days =
            Math.floor(
                seconds / 86400
            );

        const hours =
            Math.floor(
                seconds % 86400 / 3600
            );

        const minutes =
            Math.floor(
                seconds % 3600 / 60
            );

        const secs =
            seconds % 60;

        setText(
            "sinceDays",
            days
        );

        setText(
            "sinceHours",
            hours
        );

        setText(
            "sinceMinutes",
            minutes
        );

        setText(
            "sinceSeconds",
            secs
        );

    }


    updateSince();

    setInterval(
        updateSince,
        1000
    );


    /* =====================================================
       MODAL SYSTEM
    ===================================================== */

    const passwordModal =
        document.getElementById(
            "passwordModal"
        );

    const closePassword =
        document.getElementById(
            "closePassword"
        );

    const passwordInput =
        document.getElementById(
            "passwordInput"
        );

    const checkPassword =
        document.getElementById(
            "checkPassword"
        );

    const passwordError =
        document.getElementById(
            "passwordError"
        );

    const loveLetterModal =
        document.getElementById(
            "loveLetterModal"
        );

    const closeLetter =
        document.getElementById(
            "closeLetter"
        );

    const secretLetterText =
        document.getElementById(
            "secretLetterText"
        );

    const giftModal =
        document.getElementById(
            "giftModal"
        );

    const closeGift =
        document.getElementById(
            "closeGift"
        );


    let savedScrollPosition = 0;


    function lockPageScroll() {

        if (
            document.body.classList.contains(
                "modal-open"
            )
        ) {
            return;
        }

        savedScrollPosition =
            window.scrollY;

        document.body.style.top =
            `-${savedScrollPosition}px`;

        document.body.classList.add(
            "modal-open"
        );

    }


    function unlockPageScroll() {

        if (
            document.querySelector(
                ".modal.show"
            )
        ) {
            return;
        }

        document.body.classList.remove(
            "modal-open"
        );

        document.body.style.top = "";

        window.scrollTo(
            0,
            savedScrollPosition
        );

    }


    function openModal(modal) {

        if (!modal) return;

        modal.classList.add("show");

        lockPageScroll();

    }


    function closeModal(modal) {

        if (!modal) return;

        modal.classList.remove("show");

        unlockPageScroll();

    }


    /* =====================================================
       SECRET
       نظام كلمتي السر المنفصلتين
    ===================================================== */

    const SECRET_PASSWORD = "Zena";

    const HIDDEN_HEART_PASSWORD = "Saloh";

    /*
       secret      = الرسالة السرية الأصلية
       hiddenHeart = رسالة القلب المخفي
    */

    let passwordSource = "secret";


    function openPassword(
        source = "secret"
    ) {

        passwordSource = source;

        openModal(passwordModal);

        if (passwordInput) {
            passwordInput.value = "";
        }

        if (passwordError) {
            passwordError.textContent = "";
        }

        setTimeout(() => {

            passwordInput?.focus();

        }, 100);

    }


    /* =====================================================
       الزر العادي
       كلمة السر: Zena
    ===================================================== */

    document
        .getElementById("secretBtn")
        ?.addEventListener(
            "click",
            () => {

                openPassword("secret");

            }
        );


    closePassword?.addEventListener(
        "click",
        () => {

            closeModal(
                passwordModal
            );

        }
    );


    /* =====================================================
       CHECK PASSWORD
    ===================================================== */

    function checkSecret() {

        if (!passwordInput) return;

        const value =
            passwordInput.value.trim();


        /* =================================================
           السر العادي
           Password = Zena
        ================================================= */

        if (
            passwordSource === "secret" &&
            value.toLowerCase() ===
            SECRET_PASSWORD.toLowerCase()
        ) {

            if (passwordError) {
                passwordError.textContent = "";
            }

            if (passwordModal) {
                passwordModal.classList.remove(
                    "show"
                );
            }

            if (loveLetterModal) {
                loveLetterModal.classList.add(
                    "show"
                );
            }

            lockPageScroll();

            typeSecretLetter();

            heartExplosion(
                window.innerWidth / 2,
                window.innerHeight / 2,
                35
            );

            return;

        }


        /* =================================================
           القلب المخفي
           Password = Saloh
        ================================================= */

        if (
            passwordSource === "hiddenHeart" &&
            value.toLowerCase() ===
            HIDDEN_HEART_PASSWORD.toLowerCase()
        ) {

            if (passwordError) {
                passwordError.textContent = "";
            }

            if (passwordModal) {
                passwordModal.classList.remove(
                    "show"
                );
            }

            if (loveLetterModal) {
                loveLetterModal.classList.add(
                    "show"
                );
            }

            lockPageScroll();

            typeHiddenHeartLetter();

            heartExplosion(
                window.innerWidth / 2,
                window.innerHeight / 2,
                50
            );

            return;

        }


        /* =================================================
           كلمة السر خاطئة
        ================================================= */

        if (passwordError) {

            passwordError.textContent =
                translations[
                    currentLanguage
                ].passwordError ||
                (
                    currentLanguage === "ar"
                        ? "هممم... جربي مرة ثانية ❤️"
                        : "Hmm... try again ❤️"
                );

        }

        passwordInput.value = "";

    }


    checkPassword?.addEventListener(
        "click",
        checkSecret
    );


    passwordInput?.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                checkSecret();

            }

        }
    );


    /* =====================================================
       SECRET LETTER
    ===================================================== */

    const secretLetters = {

        ar:
`من صلوح إلى زوزو… ❤️

لو كنتي بتعرفي شو بصير بقلبي كل ما أكتب اسمك،
يمكن تعرفي ليش مستحيل تكوني بالنسبة إليّ مجرد "حبيبة".

إنتِ الحكاية اللي دخلت حياتي بدون موعد،
والشخص اللي صار وجوده يغيّر شكل أيامي.

من 5/10/2024 بدأت حكاية
ما كنت أعرف وقتها إنها رح تترك كل هذا الأثر بقلبي.

ومن يومها، صار عندي تاريخ ما بنساه،
وصار عندي اسم لما أشوفه…
أبتسم بدون ما أحس.

زوزو. ❤️

أنا بحبك مش بس بالأيام الحلوة،
بحبك بالتفاصيل الصغيرة،
بالزعل والضحك،
بالاشتياق،
وبكل لحظة بتخليني أحس إنك قريبة مني
حتى لو المسافة بينا كبيرة.

بحب عيونك اللي إلها حكاية لحالها،
وضحكتك اللي بتقدر تغيّر مزاج يوم كامل،
وبحب طريقتك بالحكي اللي ما بتشبه أي حدا.

ولو سألتيني يومًا:

"ليش أنا؟"

يمكن ما ألاقي جواب يكفي…

لأن بعض الأشخاص ما بنختارهم بعقلنا،
بنلاقي قلبنا اختارهم قبل ما ننتبه.

وإنتي كنتي اختياري اللي اختاره قلبي. ❤️

زوزو…

أنا ما بوعدك إن الحياة رح تكون دائمًا سهلة،
ولا بوعدك إن كل الأيام رح تكون وردية.

لكن بوعدك بشيء واحد:

إن مكانك بقلبي مش مرتبط بيوم،
ولا بظرف،
ولا بمناسبة.

إنتي من الأشخاص اللي لما يدخلوا القلب،
ما بيكون إلهم "تاريخ انتهاء".

وفي عيد ميلادك،
ما بدي أتمنى لكِ بس سنة حلوة…

بدي أتمنى إن كل سنة جاية
تكوني أقرب فيها لأحلامك،
وأكثر راحة،
وأكثر ضحك،
وأكثر حب.

وأتمنى، لو سمحت لنا الأيام،
إني أكون موجود فيها…

مش كذكرى،
ولا كصفحة من الماضي…

بل كالشخص اللي لسه ماسك إيدك وبيقولك:

"لسه قصتنا بأولها." ❤️‍🔥

كل عام وإنتِ زوزو…
كل عام وإنتِ أجمل شيء صار بقلبي.

كل عام وعيونك بخير،
وضحكتك بخير،
وقلبك بخير.

وإذا كان عندي أمنية واحدة
أخبيها عن العالم كله…

فهي إنك تظلي دائمًا قريبة من قلبي،
وإنو زوزو تضل لآخر يوم بحياتي معي عطول ❤️

من صلوح… إلى زوزو. ❤️

أحبك اليوم،
وبكرا،
وبعد بكرا…

وكل يوم جديد رح يجي،
رح أجد فيه سببًا جديدًا لأحبك أكثر.

عيد ميلاد سعيد يا زوزو. 🎂❤️‍🔥

وهذه ليست نهاية الرسالة…

هذه بداية فصل جديد من حكايتنا. ❤️`,


        en:
`Zozou...

If you made it this far, keep these words just between us. ❤️

There are things I don't know how to say
while I'm laughing with you,
or even when I'm writing you long messages.

Sometimes all I wish for is just one minute...

Sitting beside you with no screen,
no distance,
and nothing between us.

I want to see your face
when you realize that you are truly the person
who can make me smile just by seeing your name.

And I want to hear your laugh
while I'm actually close to you,
not through a phone.

And if you ever ask me:

"What are you hiding in your heart?"

I'm hiding one small wish...

That the day we finally get to be together
won't end too quickly.

And there is one thing
I don't want to say like an ordinary sentence...

You are closer to my heart
than you could ever imagine. ❤️

This message is only for you...

And every time you read it,
remember that someone named Salouh
wished he could be beside Zozou
in every beautiful moment.

❤️‍🔥`

    };


    /* =====================================================
       HIDDEN HEART LETTER
    ===================================================== */

    const hiddenHeartLetters = {

        ar:
`زينة… ❤️

هناك أشخاص نلتقي بهم فتمرّ الأيام وننسى أنهم مرّوا من هنا،
وهناك شخص واحد فقط… يأتي إلى حياتنا فيغيّر شكلها إلى الأبد.

وأنتي كنتي ذلك الشخص بالنسبة لي.

لم تكوني يومًا مجرد فتاة أحببتها،
كنتي المكان الذي كان قلبي يذهب إليه عندما يتعب من كل شيء.

كنتي الشيء الجميل الذي لم أكن أحتاج أن أبحث عنه،
لأنني وجدته فيكِ.

أحببتكِ في تفاصيلكِ التي ربما لا تنتبهين لها،
في طريقتكِ بالكلام، في ضحكتكِ، في عينيكِ،
حتى في صمتكِ الذي كنت أشعر أنه يقول لي أشياء لا تستطيع الكلمات قولها.

وأتعلمين ما أكثر شيء أخافني؟

أن أصبح يومًا مجرد شخص تتذكرينه وتقولين:
"كان هناك شخص أحبني كثيرًا."

أنا لا أريد أن أكون ذكرى في حياتكِ.

أريد أن أكون الشخص الذي عندما تنظرين إلى السنوات القادمة،
تجدينه واقفًا بجانبكِ في كل صورة،
في كل حلم،
في كل طريق،
وفي كل مرة تقولين فيها:
"الحمد لله أنني لم أخسره."

قد لا أستطيع أن أغيّر كل ما حدث بيننا،
ولا أستطيع أن أمسح من قلبكِ كل لحظة وجع كنتُ سببًا فيها…

لكن أستطيع أن أغيّر ما سيأتي.

أستطيع أن أحبكِ بطريقة تجعلكِ لا تحتاجين يومًا إلى السؤال:
"هل ما زال يريدني؟"

لأنكِ ستعرفين.

ستعرفين من اهتمامي،
من وجودي،
من خوفي عليكِ،
ومن كل تفصيل صغير سأفعله دون أن تطلبيه.

زينة…

لو كان بإمكاني أن أضع لكِ شيئًا داخل قلبي لتريه بعينيكِ،
لرأيتِ كم مرة كان اسمكِ حاضرًا في دعائي،
وكم مرة تمنيت أن تكون الأيام القادمة أحنّ علينا من الأيام التي مضت.

وأريدكِ أن تعرفي شيئًا واحدًا فقط:

أنا لا أحبكِ لأنكِ جعلتِ حياتي جميلة…

أنا أحبكِ لأن وجودكِ جعلني أريد أن أصبح أنا أيضًا شخصًا يستحق أن يبقى في حياتكِ.

وفي عالمٍ مليء بالأشياء التي تتغير،
هناك شيء واحد أتمنى ألا يتغير أبدًا…

أن تكوني أنتي
المرأة التي كلما ناديتُ اسمها،
شعرتُ أن قلبي يعرف تمامًا لماذا اختارها.

زينة…
لو كان للحب وطن، فأنا منذ عرفتكِ لم أعد أعرف لي وطنًا سواكِ. ❤️`,


        en:
`Zena… ❤️

There are people we meet,
and as the days pass, we slowly forget that they were ever part of our story.

And then there is that one person…

The person who enters your life
and changes its shape forever.

You were that person for me.

You were never just a girl I fell in love with.

You became the place my heart wanted to return to
whenever everything else became too heavy.

You were the beautiful thing
I never had to search for,
because somehow…
I found you.

I fell in love with the little things about you
that you probably don't even notice.

The way you speak.
Your laugh.
Your eyes.

Even your silence,
because somehow it always felt like
it was saying things words could never explain.

And do you know what scares me the most?

The thought of becoming someone
you remember one day and say:

"There was someone who loved me very much."

I don't want to become a memory in your life.

I want to be the person you look back on years from now
and still find standing beside you.

In every picture.
In every dream.
On every road.

And in every moment when you quietly say:

"Thank God I didn't lose him."

I may not be able to change everything that happened between us.

And I can't erase every moment of pain
I may have caused your heart.

But I can change what comes next.

I can love you in a way
that makes you never have to ask:

"Does he still want me?"

Because you will know.

You will know through my presence.
Through my care.
Through the little things I do
without you ever having to ask.

Zena…

If I could place something from inside my heart
in front of your eyes,
you would see how many times your name
has lived inside my prayers.

You would see how many times
I wished that the days ahead of us
would be kinder than the days behind us.

And I want you to know one thing:

I don't love you simply because
you made my life beautiful.

I love you because your presence
made me want to become someone
worthy of staying in your life.

And in a world where almost everything changes,
there is one thing I hope never does…

You.

The woman whose name,
every time I say it,
makes my heart understand exactly
why it chose you.

Zena…
If love had a homeland,
then since the day I met you,
I don't think my heart has known another home but you. ❤️`

    };


    let secretTypingTimer = null;


    function typeSecretLetter() {

        if (!secretLetterText) return;

        clearInterval(
            secretTypingTimer
        );

        const message =
            secretLetters[
                currentLanguage
            ];

        secretLetterText.textContent = "";

        secretLetterText.scrollTop = 0;

        let index = 0;

        secretTypingTimer =
            setInterval(() => {

                if (index < message.length) {

                    secretLetterText.textContent +=
                        message[index];

                    index++;

                    secretLetterText.scrollTop =
                        secretLetterText.scrollHeight;

                } else {

                    clearInterval(
                        secretTypingTimer
                    );

                    secretLetterText.scrollTop =
                        secretLetterText.scrollHeight;

                }

            }, 30);

    }


    /* =====================================================
       HIDDEN HEART LETTER TYPING
    ===================================================== */

    function typeHiddenHeartLetter() {

        if (!secretLetterText) return;

        clearInterval(
            secretTypingTimer
        );

        const message =
            hiddenHeartLetters[
                currentLanguage
            ];

        secretLetterText.textContent = "";

        secretLetterText.scrollTop = 0;

        let index = 0;

        secretTypingTimer =
            setInterval(() => {

                if (index < message.length) {

                    secretLetterText.textContent +=
                        message[index];

                    index++;

                    secretLetterText.scrollTop =
                        secretLetterText.scrollHeight;

                } else {

                    clearInterval(
                        secretTypingTimer
                    );

                    secretLetterText.scrollTop =
                        secretLetterText.scrollHeight;

                }

            }, 30);

    }


    closeLetter?.addEventListener(
        "click",
        () => {

            clearInterval(
                secretTypingTimer
            );

            closeModal(
                loveLetterModal
            );

        }
    );


    /* =====================================================
       RANDOM MESSAGES
    ===================================================== */

    const randomMessages = {

        ar: [
            "أحيانًا أتساءل كيف قدرتِ تدخلي حياتي وتخلي كل شيء بعدها مختلف ❤️",
            "لو كان بإمكاني أعطيكِ هدية تساوي قيمتك، كنت أعطيتكِ العالم كله.",
            "أحب تفاصيلك التي لا ينتبه لها أحد غيري.",
            "ضحكتك بالنسبة إلي ليست مجرد ضحكة... هي زر إعادة تشغيل ليومي كله.",
            "هناك أشخاص نلتقي بهم بالصدفة، ثم نكتشف أنهم أجمل شيء حدث لنا.",
            "لو رجع فيني الزمن، سأختارك مرة ثانية... وبنفس القلب.",
            "أجمل شيء فيكِ أنك لا تعرفين كم أنتِ جميلة بعيني.",
            "أنا لا أريد يومًا مثاليًا... أريد فقط يومًا تكونين فيه معي.",
            "لو كانت الذكريات صورًا، فأنتِ أجمل صورة احتفظ بها قلبي.",
            "كل مرة أفكر أني قلت لك كل شيء... أكتشف أن عندي ألف كلمة ثانية.",
            "أنتِ من الأشخاص الذين يجعلون كلمة أحبك تبدو قليلة.",
            "هناك مكان في قلبي يحمل اسمك فقط، ولا أحد يستطيع الاقتراب منه.",
            "أريد أن أرى سنوات كثيرة تمر، وأنتِ فيها بنفس المكان... بجانبي.",
            "أنتِ لستِ فصلًا من حياتي... أنتِ من أجمل أسباب استمرار القصة.",
            "لو كان الحب رسالة، فكل رسائلي ستبدأ وتنتهي باسمك."
        ],

        en: [
            "Sometimes I wonder how you entered my life and made everything different ❤️",
            "If I could give you a gift equal to your worth, I would give you the whole world.",
            "I love the little details about you that nobody else notices.",
            "Your smile is not just a smile to me... it can restart my entire day.",
            "Some people enter our lives by coincidence and become the most beautiful thing that ever happened to us.",
            "If I could go back in time, I would choose you again... with the same heart.",
            "The most beautiful thing about you is that you don't know how beautiful you are through my eyes.",
            "I don't need a perfect day... I just want a day where you are with me.",
            "If memories were pictures, you would be my heart's favorite picture.",
            "Every time I think I've told you everything... I discover a thousand more words.",
            "You are one of the people who make the words 'I love you' feel too small.",
            "There is a place in my heart with your name on it, and nobody else can enter.",
            "I want to watch many years pass while you are still right there... beside me.",
            "You are not just a chapter in my life... you are one of the reasons the story continues.",
            "If love were a letter, every letter of mine would begin and end with your name."
        ]

    };


    const randomBtn =
        document.getElementById(
            "randomBtn"
        );

    const randomMessage =
        document.getElementById(
            "randomMessage"
        );


    randomBtn?.addEventListener(
        "click",
        () => {

            const list =
                randomMessages[
                    currentLanguage
                ];

            const message =
                list[
                    Math.floor(
                        Math.random() *
                        list.length
                    )
                ];

            if (randomMessage) {

                randomMessage.style.opacity =
                    "0";

                setTimeout(() => {

                    randomMessage.textContent =
                        message;

                    randomMessage.dataset.changed =
                        "true";

                    randomMessage.style.opacity =
                        "1";

                }, 250);

            }

            heartExplosion(
                window.innerWidth / 2,
                window.innerHeight / 2,
                10
            );

        }
    );


    /* =====================================================
       GIFTS
    ===================================================== */

    const giftIcon =
        document.getElementById(
            "giftIcon"
        );

    const giftTitle =
        document.getElementById(
            "giftTitle"
        );

    const giftModalText =
        document.getElementById(
            "giftModalText"
        );


    const gifts = {

        ar: {

            1: {
                icon: "🌹",
                title: "هدية من القلب",
                text:
                    "لو كنت قريب منك الآن، كانت أول هدية سأعطيك إياها وردة حقيقية... ومعها كلمة: كل عام وأنتِ معي."
            },

            2: {
                icon: "💌",
                title: "هدية من الكلام",
                text:
                    "أهديك وعدًا بسيطًا: سأحاول دائمًا أن أجعل وجودي في حياتك سببًا للراحة وليس للتعب."
            },

            3: {
                icon: "♾️",
                title: "الهدية الأكبر",
                text:
                    "ما في صندوق يستطيع يحملها... لذلك وضعتها هنا: أتمنى أن يكون القادم من أيامنا أجمل من كل ما مضى."
            }

        },

        en: {

            1: {
                icon: "🌹",
                title: "A Gift From My Heart",
                text:
                    "If I were close to you right now, my first gift would be a real rose... with one simple sentence: Happy Birthday, my love."
            },

            2: {
                icon: "💌",
                title: "A Gift Made of Words",
                text:
                    "I give you a simple promise: I will always try to make my presence in your life a source of comfort, never pain."
            },

            3: {
                icon: "♾️",
                title: "The Biggest Gift",
                text:
                    "No box could ever hold it... so I placed it here: I hope the days ahead of us are more beautiful than everything behind us."
            }

        }

    };


    document
        .querySelectorAll(".gift-box")
        .forEach(box => {

            box.addEventListener(
                "click",
                () => {

                    const number =
                        box.dataset.gift;

                    const gift =
                        gifts[
                            currentLanguage
                        ][number];

                    if (!gift) return;

                    if (giftIcon) {
                        giftIcon.textContent =
                            gift.icon;
                    }

                    if (giftTitle) {
                        giftTitle.textContent =
                            gift.title;
                    }

                    if (giftModalText) {
                        giftModalText.textContent =
                            gift.text;
                    }

                    openModal(
                        giftModal
                    );

                    heartExplosion(
                        window.innerWidth / 2,
                        window.innerHeight / 2,
                        15
                    );

                }
            );

        });


    closeGift?.addEventListener(
        "click",
        () => {

            closeModal(
                giftModal
            );

        }
    );


    /* =====================================================
       PHOTO LIGHTBOX
    ===================================================== */

    const lightbox =
        document.getElementById(
            "lightbox"
        );

    const lightboxImage =
        document.getElementById(
            "lightboxImage"
        );

    const closeLightbox =
        document.getElementById(
            "closeLightbox"
        );


    document
        .querySelectorAll(
            ".photo-card img"
        )
        .forEach(image => {

            image.addEventListener(
                "click",
                () => {

                    if (!lightbox ||
                        !lightboxImage) {
                        return;
                    }

                    lightboxImage.src =
                        image.src;

                    lightbox.classList.add(
                        "show"
                    );

                }
            );

        });


    closeLightbox?.addEventListener(
        "click",
        () => {

            lightbox?.classList.remove(
                "show"
            );

        }
    );


    /* =====================================================
       NORMAL LETTER
    ===================================================== */

    const startLetterBtn =
        document.getElementById(
            "startLetterBtn"
        );

    const letterText =
        document.getElementById(
            "letterText"
        );


    const normalLetters = {

        ar:
`زوزو...
 ❤️
أنا مش بس بدي أكون معك اليوم،
أنا بدي أكون معك بكل الأيام اللي لسه ما إجت.
بدي أعيش معك الحاضر بكل تفاصيله،
وبدي يكون إلي مكان في مستقبلك، مثل ما إنتي صرتي جزء من أحلامي.
بدي نصحى يوم ونلاقي حالنا بنفس البيت،
نبدأ يومنا سوا، نضحك على أشياء بسيطة،
ونتخانق على أشياء تافهة ونرجع نتصالح قبل ما يطول الزعل. ❤️
بدي بيت يكون فيه صوتك، وضحكتك، ووجودك.
بيت أشوفك فيه كل يوم وأقول بيني وبين حالي:
"الحمد لله إن هالبنت صارت من نصيبي." ❤️
وبدي يوم من الأيام يكون عندنا أولاد حلوين مثلك،
عيونهم تشبه عيونك، وضحكتهم تشبه ضحكتك،
وكل ما أشوفهم أضل أقول:
"أكيد أخذوا جمالهم من أمهم." ❤️
بدي أشوفك أم أولادي
وأشوف كيف رح تكوني حنونة عليهم،
وأكون جنبك وإحنا بنكبر سوا، خطوة خطوة، سنة ورا سنة.
نفسي يكون إلنا ذكريات كثيرة…
صور من أول بيت،
أول عيد نعيشه سوا،
أول سفر،
أول ضحكة لأول طفل،
وأول مرة نسمع فيها كلمة "ماما" و"بابا". ❤️
أنا ما بدي منك حياة مثالية،
أنا بس بدي حياة حقيقية معك.
حياة فيها حب، وضحك، وعتب، ومصالحة،
وفيها إيدك بإيدي مهما تغيرت الأيام.
ولو سألتيني شو أكثر شيء بتمناه من المستقبل؟
رح أقول لك بكل بساطة:
إنتي تكوني فيه.
أعيش معك اليوم،
وأكبر معك بكرا،
وأظل أحبك حتى تصير كل أحلامنا ذكريات حلوة نحكي عنها لأولادنا.
زوزو…
أنا ما بدي أكون مجرد شخص مرّ بحياتك.
أنا بدي أكون الشخص اللي يكملها معك. ❤️‍🔥
وأتمنى بعد سنين طويلة،
لما نشوف بعض وإحنا كبرنا،
أضحك وأقول لك:
شايفة؟
كل هالسنين ولسه عيوني بتشوفك أجمل بنت بالدنيا.❤️
أنا بدي إياكي..
اليوم، وبكرا، وبعد بكرا،
وبكل مستقبل ممكن يجمعني فيك.
إنتي مش بس حلمي عن الحب…
إنتي حلمي عن البيت، والعيلة، والعمر كله. ❤️

❤️‍🔥`,

        en:
`From Salouh to Zozou… ❤️

If you knew what happens inside my heart
every time I write your name,
maybe you would understand why
you could never be just "my girlfriend" to me.

You are the story that entered my life without warning,
the person whose presence changed the way my days feel.

On October 5, 2024,
a story began that I never knew
would leave such a deep mark on my heart.

Since that day,
I have had a date I could never forget,
and a name that makes me smile
the moment I see it.

Zozou. ❤️

I don't love you only on the beautiful days.

I love you in the little details,
in the arguments and the laughter,
in the moments when I miss you,
and in every moment that makes me feel
that you are close to me,
even when the distance between us is so big.

I love your eyes,
because they have a story of their own.

I love your laugh,
because it can change the mood of an entire day.

And I love the way you talk,
because there is no one else who sounds quite like you.

And if you ever asked me:

"Why me?"

Maybe I would never find an answer big enough...

Because some people are not chosen by the mind.

Sometimes, our hearts choose them
before we even realize it.

And you were the choice
my heart made for me. ❤️

Zozou...

I can't promise you that life will always be easy,
and I can't promise that every day will be perfect.

But I can promise you one thing:

Your place in my heart
is not tied to a day,
a circumstance,
or a special occasion.

Some people enter your heart
and simply don't have an expiration date.

And on your birthday,
I don't want to wish you only a beautiful year...

I want every year ahead
to bring you closer to your dreams,
more peace,
more laughter,
and more love.

And if life allows it,
I hope I get to be there too...

Not as a memory,
and not as a page from your past...

But as the person still holding your hand
and telling you:

"Our story is still just beginning." ❤️‍🔥

Happy Birthday, Zozou...

May every year find you
as the most beautiful thing that ever happened to my heart.

May your eyes always be happy,
your smile always be bright,
and your heart always be at peace.

And if I had only one wish
that I could hide from the whole world...

It would be for you to always remain close to my heart,
and for my Zozou to stay beside me
until the very last day of my life. ❤️

From Salouh... to Zozou. ❤️

I love you today,
tomorrow,
and the day after...

And every new day that comes,
I will find another reason
to love you even more.

Happy Birthday, my Zozou. 🎂❤️‍🔥

And this is not the end of the letter...

This is the beginning
of a new chapter in our story. ❤️`

    };


    let normalLetterTimer = null;


    startLetterBtn?.addEventListener(
        "click",
        () => {

            if (!letterText) return;

            clearInterval(
                normalLetterTimer
            );

            letterText.textContent = "";

            const message =
                normalLetters[
                    currentLanguage
                ];

            let index = 0;

            letterText.scrollTop = 0;

            normalLetterTimer =
                setInterval(() => {

                    if (index < message.length) {

                        letterText.textContent +=
                            message[index];

                        index++;

                        letterText.scrollTop =
                            letterText.scrollHeight;

                    } else {

                        clearInterval(
                            normalLetterTimer
                        );

                        letterText.scrollTop =
                            letterText.scrollHeight;

                    }

                }, 25);

            startLetterBtn.style.display =
                "none";

        }
    );


    /* =====================================================
       HEART GAME
    ===================================================== */

    const gameArea =
        document.getElementById(
            "gameArea"
        );

    const scoreElement =
        document.getElementById(
            "score"
        );

    const gameMessage =
        document.getElementById(
            "gameMessage"
        );

    const gameProgress =
        document.getElementById(
            "gameProgress"
        );

    const gameCounter =
        document.getElementById(
            "gameCounter"
        );

    const gameStage =
        document.getElementById(
            "gameStage"
        );

    const stageScore =
        document.getElementById(
            "stageScore"
        );

    const gameDateText =
        document.getElementById(
            "gameDateText"
        );

    const startGameBtn =
        document.getElementById(
            "startGameBtn"
        );


    let gameRunning = false;
    let gameStageNumber = 1;
    let gameScore = 0;
    let stageTarget = 13;
    let totalCollected = 0;
    let gameHeartTimer = null;


    const heartMessages = {

        ar: [
            "❤️ هذا القلب يقول: وجودك في حياتي مش صدفة عادية.",
            "💗 هذا القلب يقول: ضحكتك قادرة تغير يوم كامل.",
            "💖 هذا القلب يقول: في شخص هنا يحبك أكثر مما تتوقعين.",
            "💕 هذا القلب يقول: لو كان عندي ألف حياة، سأبحث عنك في كل واحدة.",
            "💘 هذا القلب يقول: أنتِ من أجمل الأشياء التي حدثت لي.",
            "❤️ هذا القلب يقول: بعض الناس يصبحون وطنًا بدون أن نشعر.",
            "💝 هذا القلب يقول: تفاصيلك الصغيرة عندي كبيرة جدًا.",
            "💗 هذا القلب يقول: أحب الطريقة التي تجعلين بها الأشياء العادية مميزة.",
            "💖 هذا القلب يقول: لو كان قلبي يستطيع الكلام، لنطق اسمك.",
            "💕 هذا القلب يقول: أتمنى أن تبتسمي الآن.",
            "❤️ هذا القلب يقول: أتمنى أن يكون القادم لنا أجمل.",
            "💘 هذا القلب يقول: أنتِ لستِ مجرد ذكرى جميلة... أنتِ أمنية للمستقبل.",
            "💗 هذا القلب يقول: اليوم عيد ميلادك، لكن الهدية الحقيقية هي أنك موجودة.",
            "💖 هذا القلب يقول: هناك أشياء لا توصف... فقط تُحس.",
            "💕 هذا القلب يقول: لو كان للحب عنوان، لكان اسمك.",
            "❤️ هذا القلب يقول: أتمنى أن تكون أيامك القادمة أجمل.",
            "💝 هذا القلب يقول: أنتِ تستحقين أيامًا تشبه قلبك.",
            "💗 هذا القلب يقول: مهما كبرت المسافة، بعض القلوب تبقى قريبة.",
            "💖 هذا القلب يقول: لا أريد أن تكون قصتنا مجرد ذكرى.",
            "💕 هذا القلب يقول: أحبك بطريقة لا تحتاج إلى مناسبة."
        ],

        en: [
            "❤️ This heart says: Having you in my life is not an ordinary coincidence.",
            "💗 This heart says: Your smile can change an entire day.",
            "💖 This heart says: Someone here loves you more than you probably realize.",
            "💕 This heart says: If I had a thousand lives, I would look for you in every one.",
            "💘 This heart says: You are one of the most beautiful things that ever happened to me.",
            "❤️ This heart says: Some people quietly become home.",
            "💝 This heart says: Your little details mean so much to me.",
            "💗 This heart says: I love the way you make ordinary things feel special.",
            "💖 This heart says: If my heart could speak, it would say your name.",
            "💕 This heart says: I hope you are smiling right now.",
            "❤️ This heart says: I hope the future is even more beautiful for us.",
            "💘 This heart says: You are not just a beautiful memory... you are a wish for the future.",
            "💗 This heart says: Today is your birthday, but the real gift is that you exist.",
            "💖 This heart says: Some things cannot be described... only felt.",
            "💕 This heart says: If love had an address, it would be your name.",
            "❤️ This heart says: I hope your coming days are beautiful.",
            "💝 This heart says: You deserve days that look like your heart.",
            "💗 This heart says: No matter how far apart we are, some hearts stay close.",
            "💖 This heart says: I don't want our story to become just a memory.",
            "💕 This heart says: I love you in a way that doesn't need an occasion."
        ]

    };


    function startHeartGame() {

        if (!gameArea) return;

        gameRunning = true;

        gameStageNumber = 1;
        gameScore = 0;
        totalCollected = 0;
        stageTarget = 13;

        clearGameArea();

        if (startGameBtn) {
            startGameBtn.style.display =
                "none";
        }

        updateGameUI();

        showGameMessage(
            currentLanguage === "ar"
                ? "ابدئي بجمع 13 قلب... وكل قلب معه كلمة مني ❤️"
                : "Start collecting 13 hearts... each one carries a message from me ❤️"
        );

        spawnGameHeart();

    }


    startGameBtn?.addEventListener(
        "click",
        startHeartGame
    );


    function spawnGameHeart() {

        if (
            !gameRunning ||
            !gameArea
        ) {
            return;
        }

        const heart =
            document.createElement("div");

        heart.className =
            "game-heart";

        const symbols = [
            "❤️",
            "💖",
            "💗",
            "💕",
            "💘💋"
            
        ];

        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        const maxX =
            Math.max(
                20,
                gameArea.clientWidth - 65
            );

        const maxY =
            Math.max(
                20,
                gameArea.clientHeight - 65
            );

        heart.style.left =
            20 +
            Math.random() *
            maxX +
            "px";

        heart.style.top =
            20 +
            Math.random() *
            maxY +
            "px";

        gameArea.appendChild(
            heart
        );

        heart.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                if (!gameRunning)
                    return;

                collectHeart(
                    heart,
                    event
                );

            }
        );

        clearTimeout(
            gameHeartTimer
        );

        gameHeartTimer =
            setTimeout(() => {

                if (
                    heart.parentElement &&
                    gameRunning
                ) {

                    heart.remove();

                    spawnGameHeart();

                }

            }, 4500);

    }


    function collectHeart(
        heart,
        event
    ) {

        heart.remove();

        clearTimeout(
            gameHeartTimer
        );

        gameScore++;
        totalCollected++;

        updateGameUI();

        const messages =
            heartMessages[
                currentLanguage
            ];

        const message =
            messages[
                Math.floor(
                    Math.random() *
                    messages.length
                )
            ];

        showGameMessage(
            message
        );

        heartExplosion(
            event.clientX,
            event.clientY,
            8
        );

        if (
            gameScore >=
            stageTarget
        ) {

            finishGameStage();

        } else {

            spawnGameHeart();

        }

    }


    function finishGameStage() {

        gameRunning = false;

        clearTimeout(
            gameHeartTimer
        );

        if (
            gameStageNumber === 1
        ) {

            if (gameDateText) {
                gameDateText.textContent =
                    "13 ❤️";
            }

            showGameMessage(
                currentLanguage === "ar"
                    ? "🎉 ممتاز! جمعتِ 13 قلب. الرقم الأول اكتمل: 13"
                    : "🎉 Amazing! You collected 13 hearts. The first number is complete: 13"
            );

            setTimeout(() => {

                gameStageNumber = 2;
                gameScore = 0;
                stageTarget = 10;
                gameRunning = true;

                if (gameStage) {

                    gameStage.textContent =
                        currentLanguage === "ar"
                            ? "المرحلة الثانية • الشهر"
                            : "Stage Two • Month";

                }

                if (stageScore) {
                    stageScore.textContent =
                        "10";
                }

                showGameMessage(
                    currentLanguage === "ar"
                        ? "الآن 10 قلوب إضافية... حتى يصبح معنا 13 • 10 🎂"
                        : "Now collect 10 more hearts... to complete 13 • 10 🎂"
                );

                updateGameUI();

                spawnGameHeart();

            }, 2200);

        } else {

            completeBirthdayGame();

        }

    }


    function completeBirthdayGame() {

        gameRunning = false;

        clearTimeout(
            gameHeartTimer
        );

        totalCollected = 23;

        if (gameDateText) {
            gameDateText.textContent =
                "13 • 10 • 2001";
        }

        if (gameStage) {

            gameStage.textContent =
                currentLanguage === "ar"
                    ? "اكتمل تاريخ زينة ❤️"
                    : "Zena's Birthday Is Complete ❤️";

        }

        if (stageScore) {
            stageScore.textContent =
                "2001";
        }

        if (gameProgress) {
            gameProgress.style.width =
                "100%";
        }

        if (gameCounter) {
            gameCounter.textContent =
                "13 / 10 / 2001";
        }

        showGameMessage(
            currentLanguage === "ar"
                ? "🎉 اكتمل التاريخ! 13 قلب + 10 قلوب = 13 • 10 ... والسنة التي بدأت فيها حكاية زينة: 2001 ❤️"
                : "🎉 The date is complete! 13 hearts + 10 hearts = 13 • 10 ... and the year Zena's story began: 2001 ❤️"
        );

        heartExplosion(
            window.innerWidth / 2,
            window.innerHeight / 2,
            70
        );

        showToast(
            currentLanguage === "ar"
                ? "13 • 10 • 2001 ❤️ كل عام وأنتي بخير زينة"
                : "13 • 10 • 2001 ❤️ Happy Birthday, Zena"
        );

    }


    function updateGameUI() {

        if (scoreElement) {

            scoreElement.textContent =
                totalCollected;

        }

        if (gameCounter) {

            gameCounter.textContent =
                gameStageNumber === 1
                    ? `${gameScore} / 13`
                    : `${gameScore} / 10`;

        }

        if (gameProgress) {

            const percentage =
                Math.min(
                    gameScore /
                    stageTarget *
                    100,
                    100
                );

            gameProgress.style.width =
                percentage + "%";

        }

    }


    function updateGameLanguage() {

        if (!gameStage) return;

        if (gameStageNumber === 1) {

            gameStage.textContent =
                currentLanguage === "ar"
                    ? "المرحلة الأولى"
                    : "Stage One";

        } else {

            gameStage.textContent =
                currentLanguage === "ar"
                    ? "المرحلة الثانية • الشهر"
                    : "Stage Two • Month";

        }

    }


    function clearGameArea() {

        if (!gameArea) return;

        gameArea
            .querySelectorAll(
                ".game-heart"
            )
            .forEach(
                heart => heart.remove()
            );

    }


    function showGameMessage(
        message
    ) {

        if (!gameMessage) return;

        gameMessage.textContent =
            message;

        gameMessage.classList.remove(
            "show"
        );

        void gameMessage.offsetWidth;

        gameMessage.classList.add(
            "show"
        );

    }


    /* =====================================================
       HIDDEN HEART
       كلمة السر الخاصة به: Saloh
    ===================================================== */

    document
        .getElementById("hiddenHeart")
        ?.addEventListener(
            "click",
            event => {

                heartExplosion(
                    event.clientX,
                    event.clientY,
                    30
                );

                setTimeout(() => {

                    openPassword(
                        "hiddenHeart"
                    );

                }, 500);

            }
        );


    /* =====================================================
       ROSE
    ===================================================== */

    const roseBtn =
        document.getElementById(
            "roseBtn"
        );

    const roseMessage =
        document.getElementById(
            "roseMessage"
        );


    const roseMessages = {

        ar: [
            "🌹 لو كانت الوردة تعرف من تستحق، كانت اختارتكِ.",
            "🌹 هذه الوردة صغيرة أمام الكلام الذي تستحقينه.",
            "🌹 كل وردة في العالم جميلة... لكن أنتِ عندي أجمل.",
            "🌹 أتمنى أن تبقى أيامك مزهرة مثل هذه الوردة.",
            "🌹 وردة لكِ، لأن بعض الأشخاص يستحقون أكثر من مجرد كلمة."
        ],

        en: [
            "🌹 If roses knew who they belonged to, this one would choose you.",
            "🌹 This rose is still too small for everything you deserve.",
            "🌹 Every rose in the world is beautiful... but you are more beautiful to me.",
            "🌹 I hope your days stay as beautiful as this rose.",
            "🌹 A rose for you, because some people deserve more than just words."
        ]

    };


    roseBtn?.addEventListener(
        "click",
        () => {

            if (!roseMessage) return;

            const list =
                roseMessages[
                    currentLanguage
                ];

            roseMessage.textContent =
                list[
                    Math.floor(
                        Math.random() *
                        list.length
                    )
                ];

            roseMessage.dataset.changed =
                "true";

            roseBtn.style.transform =
                "scale(1.25) rotate(8deg)";

            setTimeout(
                () => {
                    roseBtn.style.transform =
                        "";
                },
                600
            );

            heartExplosion(
                window.innerWidth / 2,
                window.innerHeight / 2,
                15
            );

        }
    );


    /* =====================================================
       CAKE
    ===================================================== */

    let candlesOff = 0;


    document
        .querySelectorAll(".candle")
        .forEach(candle => {

            candle.addEventListener(
                "click",
                event => {

                    if (
                        candle.classList.contains(
                            "off"
                        )
                    ) {
                        return;
                    }

                    candle.classList.add(
                        "off"
                    );

                    candlesOff++;

                    const cakeMessage =
                        document.getElementById(
                            "cakeMessage"
                        );

                    if (!cakeMessage)
                        return;

                    if (
                        candlesOff < 3
                    ) {

                        const remaining =
                            3 -
                            candlesOff;

                        cakeMessage.textContent =
                            currentLanguage === "ar"
                                ? `باقي ${remaining} شمعة... أكملي أمنيتك 🎂`
                                : `${remaining} candle${remaining > 1 ? "s" : ""} left... make your wish 🎂`;

                    } else {

                        cakeMessage.textContent =
                            currentLanguage === "ar"
                                ? "✨ أمنيتي لكِ أن تكون سنتك الجديدة أجمل من كل سنة مضت... وكل عام وأنتِ بخير يا زينة ❤️"
                                : "✨ My wish for you is that your new year is more beautiful than every year before it... Happy Birthday, Zena ❤️";

                        heartExplosion(
                            event.clientX,
                            event.clientY,
                            40
                        );

                        showToast(
                            currentLanguage === "ar"
                                ? "🎂 كل عام وأنتي بخير يا زينة ❤️"
                                : "🎂 Happy Birthday, Zena ❤️"
                        );

                    }

                }
            );

        });


    /* =====================================================
       MODALS
    ===================================================== */

    document
        .querySelectorAll(".modal")
        .forEach(modal => {

            modal.addEventListener(
                "click",
                event => {

                    if (
                        event.target === modal
                    ) {

                        closeModal(
                            modal
                        );

                    }

                }
            );

        });


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                document
                    .querySelectorAll(
                        ".modal.show"
                    )
                    .forEach(
                        modal => {
                            closeModal(
                                modal
                            );
                        }
                    );

                lightbox?.classList.remove(
                    "show"
                );

            }

        }
    );


    /* =====================================================
       NAVIGATION
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target)
                        return;

                    event.preventDefault();

                    const navbarHeight =
                        document
                            .querySelector(
                                ".navbar"
                            )
                            ?.offsetHeight ||
                        0;

                    const position =
                        target
                            .getBoundingClientRect()
                            .top +
                        window.scrollY -
                        navbarHeight;

                    window.scrollTo({
                        top: position,
                        behavior: "smooth"
                    });

                }
            );

        });


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    window.addEventListener(
        "scroll",
        () => {

            if (!backTop)
                return;

            if (
                window.scrollY > 600
            ) {

                backTop.classList.add(
                    "show"
                );

            } else {

                backTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backTop?.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =====================================================
       TOAST
    ===================================================== */

    function showToast(message) {

        if (!toast)
            return;

        toast.textContent =
            message;

        toast.classList.add(
            "show"
        );

        setTimeout(
            () => {
                toast.classList.remove(
                    "show"
                );
            },
            3000
        );

    }


    /* =====================================================
       HELPERS
    ===================================================== */

    function setText(
        id,
        value
    ) {

        const element =
            document.getElementById(
                id
            );

        if (element) {

            element.textContent =
                String(value).padStart(
                    2,
                    "0"
                );

        }

    }


    function updateDynamicLanguage() {

        updateMusicButton();


        if (
            randomMessage &&
            !randomMessage.dataset.changed
        ) {

            randomMessage.textContent =
                translations[
                    currentLanguage
                ].randomDefault;

        }


        if (
            roseMessage &&
            !roseMessage.dataset.changed
        ) {

            roseMessage.textContent =
                translations[
                    currentLanguage
                ].roseDefault;

        }

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    applyLanguage();


    if (openingScreen) {

        openingScreen.classList.remove(
            "hide"
        );

    }


    updateMusicButton();

    

});