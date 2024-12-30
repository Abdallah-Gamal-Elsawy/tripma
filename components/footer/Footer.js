import Image from "next/image";
import Logo from "../../public/logo.svg";
import appStore from "../../public/icons/apple.svg";
import GooglePlay from "../../public/icons/google play.svg";
import Twitter from "../../public/icons/twitter.png";
import Instagram from "../../public/icons/instagram.png";
import Facebook from "../../public/icons/facebook.png";
import classes from "@/components/footer/Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className={classes.footer_content}>
        <div className={classes.image}>
          <Image src={Logo} alt="Logo" width={107} height={30} />
        </div>
        <div className={classes.about}>
          <header className={classes.header}>
            <h1 className={classes.Footer_header}>About</h1>
          </header>

          <ul className={classes.ul}>
            <li className={classes.li}>About Tripma</li>
            <li className={classes.li}>How it works</li>
            <li className={classes.li}>Careers</li>
            <li className={classes.li}>Press</li>
            <li className={classes.li}>Blog</li>
            <li className={classes.li}>Forum</li>
          </ul>
        </div>
        <div className={classes.about}>
          <header className={classes.header}>
            <h1 className={classes.Footer_header}>Partner with us</h1>
          </header>

          <ul className={classes.ul}>
            <li className={classes.li}>Partnership programs</li>
            <li className={classes.li}>Affiliate program</li>
            <li className={classes.li}>Connectivity partners</li>
            <li className={classes.li}>Promotions and events</li>
            <li className={classes.li}>Integrations</li>
            <li className={classes.li}>Community</li>
            <li className={classes.li}>Loyalty program</li>
          </ul>
        </div>
        <div className={classes.about}>
          <header className={classes.header}>
            <h1 className={classes.Footer_header}>Support</h1>
          </header>

          <ul className={classes.ul}>
            <li className={classes.li}>Help Center</li>
            <li className={classes.li}>Contact us</li>
            <li className={classes.li}>Privacy policy</li>
            <li className={classes.li}>Terms of service</li>
            <li className={classes.li}>Trust and safety</li>
            <li className={classes.li}>Accessibility</li>
          </ul>
        </div>
        <div className={classes.about}>
          <header className={classes.header}>
            <h1 className={classes.Footer_header}>Get the app</h1>
          </header>

          <ul className={classes.ul}>
            <li className={classes.li}>Tripma for Android</li>
            <li className={classes.li}>Tripma for iOS</li>
            <li className={classes.li}>Mobile site</li>
          </ul>
          <div className="mt-8 ">
            <Link
              href={"https://www.apple.com/app-store/"}
              className={classes.apple}
            >
              <Image
                src={appStore}
                alt=""
                width={20}
                height={10}
                className="size-6 text-white mt-2"
              />
              <div className="text-left">
                <h4 className={classes.apple_h4}>Download on the</h4>
                <h1 className={classes.apple_h1}>App Store</h1>
              </div>
            </Link>

            <Link href={"https://www.Google play.com/app-store/"} className="">
              <Image
                src={GooglePlay}
                alt=""
                width={135}
                height={40}
                className="mt-2"
              />
            </Link>
          </div>
        </div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.bottom}>
        <ul className={classes.soical_media}>
          <li>
            <Image src={Twitter} alt="Twitter" width={24} height={24} />
          </li>
          <li>
            <Image src={Instagram} alt="Instagram" width={24} height={24} />
          </li>
          <li>
            <Image src={Facebook} alt="Facebook" width={24} height={24} />
          </li>
        </ul>
        <p className={classes.copyright}>© 2020 Tripma incorporated</p>
      </div>
    </footer>
  );
}

export default Footer;
