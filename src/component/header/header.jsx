import LinkButton from "../comonComponent/linkButton";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 py-3 ">
        <div className="px-10 flex justify-between text-3xl font-bold">
          <p>
            ALL <sub>IN</sub> ONE
          </p>
          <Link to="/">
            🏠
          </Link>
        </div>
        <div>
          <Marquee speed={30} gradient={false} direction="left">
            <div className="flex gap-2 px-2">
              <Link to="/progressbar"><LinkButton value="Progress Bar" /></Link>
              <LinkButton value="Select all Checkboxes" />
              <LinkButton value="Styled Button" />
              <LinkButton value="Hover Counter" />
              <LinkButton value="Error Page" />
              <LinkButton value="Tabs Component" />
              <LinkButton value="Local Storage Sync" />
              <LinkButton value="Click me" />
              <LinkButton value="Validate sign-up form" />
              <LinkButton value="useTheme" />
            </div>
          </Marquee>
          <Marquee speed={30} gradient={false} direction="right">
            <div className="flex gap-2 px-2">
              <LinkButton value="Progress Bar" />
              <LinkButton value="Select all Checkboxes" />
              <LinkButton value="Styled Button" />
              <LinkButton value="Hover Counter" />
              <LinkButton value="Error Page" />
              <LinkButton value="Tabs Component" />
              <LinkButton value="Local Storage Sync" />
              <LinkButton value="Click me" />
              <LinkButton value="Validate sign-up form" />
              <LinkButton value="useTheme" />
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Header;
