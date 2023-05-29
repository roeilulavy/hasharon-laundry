import React, { useEffect, useRef, useState } from "react";
import Helmet from "react-helmet";
import "./App.css";
import Hospital from "./images/hospital.jpg";
import Like from "./images/icons/like.png";
import Logo from "./images/icons/logo.png";
import Medal from "./images/icons/medal.png";
import Telephone from "./images/icons/telephone.png";
import Timer from "./images/icons/timer.png";
import Personal from "./images/personal.jpg";
import Repair from "./images/repair.jpg";
import School from "./images/school.jpg";

function App() {
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [isTagVisible1, setIsTagVisible1] = useState(false);
  const [isTagVisible2, setIsTagVisible2] = useState(false);
  const [isTagVisible3, setIsTagVisible3] = useState(false);
  const [isTagVisible4, setIsTagVisible4] = useState(false);

  // Navigation sticky
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsNavSticky(scrollTop > 90);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Cover items visibility
  useEffect(() => {
    setTimeout(() => {
      setIsTagVisible1(true);
    }, 500);
    setTimeout(() => {
      setIsTagVisible2(true);
    }, 1000);
    setTimeout(() => {
      setIsTagVisible3(true);
    }, 1500);
    setTimeout(() => {
      setIsTagVisible4(true);
    }, 2000);
  }, []);

  const scrollToSection = (sectionIndex) => {
    sectionRefs[sectionIndex].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="App">
      <Helmet>
        <title>מכבסת השרון</title>
        <meta
          name="description"
          content="שירות השרון, מכבסת השרון, שירותי כביסה, כביסה בשירות עצמי,פתח תקווה, מכבסה פתח תקווה, מכבסה"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        {/* Google / Search Engine Tags */}
        <meta itemprop="name" content="מכבסת השרון" />
        <meta
          itemprop="description"
          content="שירות השרון, מכבסת השרון, שירותי כביסה, כביסה בשירות עצמי,פתח תקווה, מכבסה פתח תקווה, מכבסה"
        />
        <meta itemprop="image" content="./logo512.png" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="מכבסת השרון" />
        <meta
          property="og:description"
          content="שירות השרון, מכבסת השרון, שירותי כביסה, כביסה בשירות עצמי,פתח תקווה, מכבסה פתח תקווה, מכבסה"
        />
        <meta property="og:image" content="./logo512.png" />
      </Helmet>
      <section className="header" ref={sectionRefs[0]}>
        <div className="header__contact">
          <img
            className="header__contact-icon"
            src={Telephone}
            alt="Telephone"
          />
          <div>
            <p className="header__contact-text">רוצה כביסה נקיה?</p>
            <p className="header__contact-text">חייגו אלינו עכשיו!</p>
          </div>

          <h2 className="header__contact-phone">
            <a href="tel:+97239341743">03-9341743</a>
            {` / `}
            <a href="tel:+972526507022">050-6507022</a>
          </h2>
        </div>
        <div className="header__logo-container">
          <div>
            <h1 className="header__logo-text">שירות השרות</h1>
            <h1 className="header__logo-text">(מכבסת השרון)</h1>
          </div>

          <img className="header__logo" src={Logo} alt="Logo" />
        </div>
      </section>

      <nav className={isNavSticky ? "sticky" : ""}>
        <ul className="nav__list">
          <li className="nav__item" onClick={() => scrollToSection(0)}>
            בית
          </li>
          <li className="nav__item" onClick={() => scrollToSection(1)}>
            שירותי מכבסה
          </li>
          <li className="nav__item" onClick={() => scrollToSection(2)}>
            שירותי תיקונים
          </li>
          <li className="nav__item" onClick={() => scrollToSection(3)}>
            אודות
          </li>
        </ul>
      </nav>

      <section className="cover">
        <div className="cover__container">
          <div className="cover__text-container">
            <h1 className="cover__text">שירותי כביסה בשירות עצמי.</h1>
            <h2 className="cover__text">
              {`השירותים שלנו מיועדים לספק לכם חוויה נוחה ופשוטה ולהשאיר אתכם עם
            בגדים נקיים, רעננים ומקופלים בצורה מושלמת בכל פעם`}
              {`.`}
            </h2>
          </div>

          <div className="cover__tags-container">
            <div className={isTagVisible1 ? "cover__tag_active" : "cover__tag"}>
              <img className="cover__img" src={Medal} alt="Medal" />
              <p className="cover__tag-text">חווית שירות מעולה.</p>
            </div>
            <div className={isTagVisible2 ? "cover__tag_active" : "cover__tag"}>
              <img className="cover__img" src={Like} alt="Medal" />
              <p className="cover__tag-text">שימוש בציוד איכותי ומקצועי.</p>
            </div>
            <div className={isTagVisible3 ? "cover__tag_active" : "cover__tag"}>
              <img className="cover__img" src={Timer} alt="Medal" />
              <p className="cover__tag-text">זמינות לכל כמות.</p>
            </div>
          </div>
        </div>
        <button
          className={isTagVisible4 ? "cover__button_active" : "cover__button"}
          onClick={() => scrollToSection(3)}
        >
          חייגו עכשיו!
        </button>
      </section>

      <section className="laundry" ref={sectionRefs[1]}>
        <h2 className="laundry__title">הכביסה שלכם, הממומחיות שלנו</h2>

        <p className="laundry__subtitle">
          {`אנו משתמשים רק במוצרי הניקיון ובציוד הטובים ביותר כדי להבטיח שהבגדים שלכם יוחזרו במראה וריח רענן ונקי`}
          {`.`}
        </p>
        <p className="laundry__subtitle">
          {`בנוסף לשירותי הכביסה הסטנדרטיים שלנו, אנו מציעים גם שירותי כביסה
          מסחרית לעסקים בכל הגדלים`}
          {`.`}
        </p>
        <p className="laundry__subtitle">
          {`שירותי הכביסה המסחרית שלנו נועדו לספק לעסקים פתרון כביסה אמין ויעיל,
          החוסך לכם זמן וכסף בטווח הארוך`}
          {`.`}
        </p>

        <div className="laundry__section-container">
          <div className="laundry__section">
            <img
              className="laundry__section-img"
              src={Personal}
              alt="Personal"
              loading="lazy"
            />
            <p className="laundry__section-text">
              {`שירותי כביסה לפרטיים`}
              {` - `}
              {`ניקוי לחליפה, לשמלה, לשטיח שמלא בכתמים ואולי כביסה זה לא הצד החזק שלכם? אנחנו כאן בשבילכם!`}
            </p>
          </div>
          <div className="laundry__section">
            <img
              className="laundry__section-img"
              src={School}
              alt="School"
              loading="lazy"
            />
            <p className="laundry__section-text">
              {`שירותי כביסה למוסדות`}
              {` - `}
              {`שירותי כביסה למוסדות, למפעלים, לבתי אופנה, לבתי מלון, לבתי מלאכה ועוד.`}
            </p>
          </div>
          <div className="laundry__section">
            <img
              className="laundry__section-img"
              src={Hospital}
              alt="Hospital"
              loading="lazy"
            />
            <p className="laundry__section-text">
              {`שירותי כביסה לבתי חולים ומרפאות`}
              {` - `}
              {`שירותי כביסה VIP למרפאות לניקוי כל סוגי הבדים: סדינים, ציפיות, שמיכות, חלוקים ועוד...`}
            </p>
          </div>
        </div>
      </section>

      <section className="work" ref={sectionRefs[2]}>
        <h2 className="work__title">שירותי תיקון ומכירה</h2>
        <div className="work__container">
          <div className="work__text-container">
            <p className="work__subtitle">{`צוות המומחים שלנו מתמחה בתיקון מכונות כביסה, מייבשים ומדיחי כלים.`}</p>
            <p className="work__subtitle">{`אנו מאבחנים ומתקנים בעיות במהירות ובדייקנות, ומספקים שירות לקוחות מהשורה הראשונה בכל שלב.`}</p>
            <p className="work__subtitle">{`עם מחירים נוחים ותזמון גמיש, אנו מנגישים את שירותי תיקון הכביסה לכולם.`}</p>
            <p className="work__subtitle">{`צרו איתנו קשר עוד היום לקביעת פגישה ותנו לנו לטפל בבעיות הכביסה שלך!`}</p>
          </div>
          <img className="work__img" src={Repair} alt="Repair" />
        </div>
      </section>

      <section className="about" ref={sectionRefs[3]}>
        <h2 className="about__title">אודותינו</h2>
        <p className="about__subtitle">{`הצוות הידידותי שלנו ישמח לענות על כל שאלה שיש לכם ולעזור לכם למצוא את פתרון הכביסה המתאים לצרכים שלכם.`}</p>
        <div className="about__container">
          <div className="about__text">
            <p className="about__text-title">מספר הטלפון שלנו:</p>
            <p className="about__text-sub">
              <a href="tel:+97239341743">03-9341743</a>
            </p>
            <p className="about__text-sub">
              <a href="tel:+972526507022">050-6507022</a>
            </p>
            <br></br>
            <p className="about__text-title">הכתובת שלנו:</p>
            <p className="about__text-sub">
              <span>רחוב בר כוכבא 8, פתח תקווה.</span>
            </p>
            <br></br>
            <p className="about__text-title">שעות הפעילות:</p>
            <p className="about__text-sub">
              ימים א' עד ה' - משעה 8:00 עד 20:00
            </p>
            <p className="about__text-sub">יום ו' - משעה 8:00 עד 14:00</p>
          </div>
          <iframe
            className="about__map"
            src="https://www.google.co.il/maps/embed?pb=!1m18!1m12!1m3!1d845.0524089810456!2d34.885056789960394!3d32.090619447436836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d366d20e982fb%3A0x3d25861001c3af99!2sBar%20Kochva%20St%208%2C%20Petah%20Tikva!5e0!3m2!1sil!2sen!4v1683043445547!5m2!1sil!2sen&hl=he"
            loading="lazy"
            title="location-map"
            lang="he"
          ></iframe>
        </div>
      </section>

      <footer className="footer">
        <a
          className="footer__text"
          href="https://roeilulavy.github.io/portfolio/"
          target="_blank"
          rel="noreferrer"
        >
          © 2022 - All Rights Reserved by Royal.Prod
        </a>
      </footer>
    </div>
  );
}

export default App;
