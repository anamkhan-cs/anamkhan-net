import { Container } from "reactstrap";
import classnames from "classnames";

import {
  header,
  contentContainer,
  icons,
  iconContainer,
  picture,
} from "./Contact.module.scss";
import { container, containerAll } from "../CommonStyles.module.scss";
import {
  GrLinkedin,
  GrGithub,
  GrMail,
  GrFacebookOption,
  GrInstagram,
  GrStackOverflow,
} from "react-icons/gr";
import smoosh from "./smoosh.jpg";
import NavbarMenu from "../../Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <Container className={container} fluid>
        <NavbarMenu />
        <div className={containerAll}>
          <div>
            <h1 className={header}>Contact</h1>
          </div>
          <div className={contentContainer}>
            <p>
              Connect with me through my social media, or feel free to shoot me
              an email!
            </p>
            <p>
              See this project on my Github{" "}
              <a
                href="https://github.com/anamkhan2/anamkhan-net"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#ffddd2" }}
              >
                Linked Here
              </a>
            </p>
            <p>Here's a picture of Smoosh for making it this far!</p>
            <img src={smoosh} alt="My cat" className={picture} />
          </div>
        </div>
      </Container>
      <footer className="footer">
        <div
          className={classnames(
            "d-flex justify-content-center align-items-center",
            iconContainer
          )}
        >
          <a
            href="mailto:agk997@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrMail className={icons} />
          </a>
          <a
            href="https://www.linkedin.com/in/anamkhan-cs"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedin className={icons} />
          </a>
          <a
            href="https://github.com/anamkhan-cs"
            target="_blank"
            rel="noreferrer"
          >
            <GrGithub className={icons} />
          </a>
          <a
            href="https://stackoverflow.com/users/13950369/anam-khan"
            target="_blank"
            rel="noreferrer"
          >
            <GrStackOverflow className={icons} />
          </a>
          <a
            href="https://www.facebook.com/anam.partyrockanthem/"
            target="_blank"
            rel="noreferrer"
          >
            <GrFacebookOption className={icons} />
          </a>
          <a
            href="https://www.instagram.com/anamgkhan/"
            target="_blank"
            rel="noreferrer"
          >
            <GrInstagram className={icons} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Contact;
