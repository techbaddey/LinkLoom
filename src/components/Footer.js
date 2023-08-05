import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import logo from "../images/linkloom-logo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 py-10 lg:py-20">
        <div className="max-width  grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
          <article>
            <img src={logo} alt="" />
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Plans
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Expert Link Analysis
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Fully Branded Domains
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                 Bulk Link Shortening
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                 Expert Support Options
                </button>
              </li>
            </ul>
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Features
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1">Branded Links</button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Link Management
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">Custom Domains</button>
              </li>
            </ul>
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Company
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1">About Us</button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  How It Works
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">Meet The Team</button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">Contact Us</button>
              </li>
            </ul>
          </article>

          <article>
            <ul className="flex items-center">
              <li>
                <img src={facebook} alt="" />
              </li>
              <li className="ml-4 mr-4">
                <img src={twitter} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>
            </ul>
          </article>
        </div>
      </footer>
    </>
  );
}
