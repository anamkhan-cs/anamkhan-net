import { Container } from "reactstrap";

import {
  home,
  content,
  name,
  about,
  icons,
  resumelink,
} from "./Main.module.scss";
import { MdPictureAsPdf } from "react-icons/md";
import resume from "./resume.pdf";
import NavbarMenu from "../../Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Container fluid className={home}>
        <NavbarMenu />
        <div className={content}>
          <div className={name}>Anam</div>
          <div className={name}>Khan</div>
          <div className={about}>
            <div className="mr-3">
              Full stack engineer. I like cats, movies, crocheting, traveling
              and I care about empowering women in tech
              <div className={resumelink}>
                <MdPictureAsPdf className={icons} />
                <a
                  href={resume}
                  download="anamkhanresume"
                  style={{ color: "#006d77" }}
                >
                  Here's my resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Main;
