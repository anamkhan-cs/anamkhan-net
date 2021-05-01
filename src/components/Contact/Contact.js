import {
  header,
  container,
  contentContainer,
  icons,
  iconContainer,
  picture,
} from "./Contact.module.scss";
import {
  GrLinkedin,
  GrGithub,
  GrMail,
  GrFacebookOption,
  GrInstagram,
} from "react-icons/gr";
import { Container, Row } from "reactstrap";
import classnames from "classnames";

import smoosh from "./smoosh.jpg";

const Contact = () => {
  return (
    <>
      <Container className={container} fluid>
        <h1 className={header}>Contact</h1>
        <div className={contentContainer}>
          <p>
            If you would like to connect, my social media links are below
            (there's quite a few), or feel free to shoot me an email!
          </p>
          <p>
            Here's a picture of my cat (her name is Smoosh) as a reward for
            making it this far!
          </p>
          <img src={smoosh} alt="My cat" className={picture} />
        </div>
      </Container>
      <Row>
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
              href="https://github.com/anamkhan2"
              target="_blank"
              rel="noreferrer"
            >
              <GrGithub className={icons} />
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
      </Row>
    </>
  );
};

export default Contact;
