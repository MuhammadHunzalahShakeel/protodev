import styles from "./Services.css";
import one from "../../assets/services1-number.svg";
import two from "../../assets/services2-number.svg";
import three from "../../assets/services3-number.svg";
import four from "../../assets/services4-number.svg";
import five from "../../assets/services5-number.svg";
import divider from "../../assets/services-divider.svg";
import ellipse78 from "../../assets/ellipse-78.svg";
import v7 from "../../assets/services-vector7.svg";
const Services=() => {
  return (
    <section className={styles.services} data-scroll-to="services">
      <p className={styles.servicesText} id="Services-Subheading">
        Finding the best approach for your needs. Then, transform it into a
        delightfull interface, pleasure experience with impactful message.
      </p>
      <h1 className="heading" style={{height:4.78 , textTransform:"capitalize",fontWeight:400,fontFamily:"inherit",mixBlendMode:"normal"}} id="Services-Heading">
        What We Do
      </h1>
     
  
      <div className={styles.services1}>
        <div className={styles.services1Inner}>
          <div className={styles.instanceChild} />
        </div>
        <img
          className={styles.services1NumberIcon}
          alt=""
          id="Service1-Image"
          src={one}
        />
        <p className={styles.services1Text} id="Service1-Paragraph">
          Finding the best approach for your needs. Then, transform it into a
          delightfull interface, pleasure experience with impactful message.
        </p>
        {/* <img
          className={styles.servicesDividerIcon4}
          alt=""
          src={divider}
        /> */}
        <h3 className={styles.services1Heading} id="Service1-Heading">
          <p className={styles.uiux}>
            <span>UI/UX</span>
          </p>
          <p className={styles.designing}>
            <span>Designing</span>
            <span className={styles.span}>.</span>
          </p>
        </h3>
        <button className={styles.servicesButton} id="Service1-Button">
          <img
            className={styles.servicesButtonChild}
            alt=""
            src={ellipse78} 
          />
          <img className={styles.vectorIcon} alt="" src={v7} />
        </button>
      </div>
      <div className={styles.services2}>
        <div className={styles.services1Inner}>
          <div className={styles.instanceChild} />
        </div>
        <img
          className={styles.services2NumberIcon}
          alt=""
          src={two}
        />
        <p className={styles.services2Text}>
          Finding the best approach for your needs. Then, transform it into a
          delightfull interface, pleasure experience with impactful message.
        </p>
        <h3 className={styles.services2Heading}>
          <p className={styles.uiux}>
            <span>Graphic</span>
          </p>
          <p className={styles.designing}>
            <span>Designing</span>
            <span className={styles.span}>.</span>
          </p>
        </h3>
        <button className={styles.servicesButton1}>
          <img
            className={styles.servicesButtonChild}
            alt=""
            src={ellipse78}
          />
          <img className={styles.vectorIcon} alt="" src={v7} />
        </button>
      </div>
      <div className={styles.services3}>
        <div className={styles.services1Inner}>
          <div className={styles.instanceChild} />
        </div>
        <img
          className={styles.services3NumberIcon}
          alt=""
          src={three}
        />
        <p className={styles.services4Text}>
          Finding the best approach for your needs. Then, transform it into a
          delightfull interface, pleasure experience with impactful message.
        </p>
        <h3 className={styles.services3Heading}>
          <p className={styles.uiux}>
            <span>{`Web & Mobile`}</span>
          </p>
          <p className={styles.designing}>
            <span>Development</span>
            <span className={styles.span}>.</span>
          </p>
        </h3>
        <button className={styles.servicesButton2}>
          <img
            className={styles.servicesButtonChild}
            alt=""
            src={ellipse78}
          />
          <img className={styles.vectorIcon} alt="" src={v7} />
        </button>
      </div>
      <div className={styles.services4}>
        <div className={styles.services1Inner}>
          <div className={styles.instanceChild} />
        </div>
        <img
          className={styles.services4NumberIcon}
          alt=""
          src={four}
        />
        <p className={styles.services2Text}>
          Finding the best approach for your needs. Then, transform it into a
          delightfull interface, pleasure experience with impactful message.
        </p>
        <h3 className={styles.services2Heading}>
          <span>Content Writer</span>
          <span className={styles.span}>.</span>
        </h3>
        <button className={styles.servicesButton1}>
          <img
            className={styles.servicesButtonChild}
            alt=""
            src={ellipse78}
          />
          <img className={styles.vectorIcon} alt="" src={v7} />
        </button>
      </div>
      <div className={styles.services5}>
        <div className={styles.services1Inner}>
          <div className={styles.instanceChild} />
        </div>
        <img
          className={styles.services5NumberIcon}
          alt=""
          src={five}
        />
        <p className={styles.services5Text}>
          Finding the best approach for your needs. Then, transform it into a
          delightfull interface, pleasure experience with impactful message.
        </p>
        <h3 className={styles.services5Heading}>
          <p className={styles.uiux}>
            <span>Search engine</span>
          </p>
          <p className={styles.designing}>
            <span>Optimization</span>
            <span className={styles.span}>.</span>
          </p>
        </h3>
        <button className={styles.servicesButton4}>
          <img
            className={styles.servicesButtonChild}
            alt=""
            src={ellipse78}
          />
          <img className={styles.vectorIcon} alt="" src={v7} />
        </button>
      </div>
    </section>
  );
};

export default Services;
