import Link from "next/link";

const Menu = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li className="menu-item has-children">
          <a href="/index">
            Home
            {/* <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span> */}
          </a>
          {/* <ul className="sub-menu">
            <li>
              <Link legacyBehavior   href="#/">
                Home 01
              </Link>
            </li>
            <li>
              <Link legacyBehavior   href="#index-2">
                Home 02
              </Link>
            </li>
            <li>
              <Link legacyBehavior   href="#index-3">
                Home 03
              </Link>
            </li>
          </ul> */}
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="/about">
            About
          </Link>
        </li>
        {/* <li className="menu-item">
          <Link legacyBehavior href="/service">
            Services
          </Link>
        </li> */}

        <li className="menu-item has-children">
          <a href="/service">
            Services
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="/service">
                Services Portfolio
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/managed-properties">
                Managed Properties
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/ipaf-cleans">
                IPAF High Cleans
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/gutters-fascias">
                Gutters &amp; Fascias
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/commercial-cleaning">
                Commercial
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <Link legacyBehavior href="/contact">
            Contact
          </Link>
        </li>

        <li className="menu-item">
          <Link legacyBehavior href="/faqs">
            FAQ's
          </Link>
        </li>

        {/* <li className="menu-item has-children">
          <a   href="##">
            Portfolio
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior   href="#project-grid">
                Project Grid
              </Link>
            </li>
            <li>
              <Link legacyBehavior   href="#project-grid-2-column">
                Project Grid Two
              </Link>
            </li>
            <li>
              <Link legacyBehavior   href="#project-masonry">
                Project Masonry
              </Link>
            </li>
            <li>
              <Link legacyBehavior   href="#project-details">
                Project Details
              </Link>
            </li>
          </ul>
        </li> */}
        {/* <li className="menu-item has-children">
          <a   href="##">
            Blog
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior   href="#blog-standard">
                Blog Standard
              </Link>
            </li>
            <li>
              <Link legacyBehavior   href="#blog-details">
                Blog Details
              </Link>
            </li>
          </ul>
        </li> */}
        {/* <li className="menu-item has-children">
          <a   href="##">
            Pages
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior   href="#team">
                Our Team
              </Link>
            </li>
            <li>
              <Link legacyBehavior   href="#shop">
                Our Shop
              </Link>
            </li>
            <li>
              <Link legacyBehavior   href="#product-details">
                Product Details
              </Link>
            </li>
            <li>
              <Link legacyBehavior   href="#testimonials">
                Testimonial
              </Link>
            </li>
            <li>
              <Link legacyBehavior   href="#pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link legacyBehavior   href="#faqs">
                Faq
              </Link>
            </li>
            <li>
              <Link legacyBehavior   href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </li> */}
      </ul>
    </nav>
  );
};
export default Menu;
