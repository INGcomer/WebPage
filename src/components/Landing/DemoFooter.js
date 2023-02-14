/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/c.ingcomer/"
                  target="_blank"
                >
                  <i class="fa fa-instagram"></i>
                  @c.ingcomer
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/ingcomer/"
                  target="_blank"
                >
                  <i class="fa fa-linkedin"></i>
                  INGcomer
                </a>
              </li>
              <li>
                <a
                  href=""
                  target=""
                >
                   <i class="fa fa-phone"></i>
                   +54 299 621 1958
                </a>
              </li>
              <li>
                <a
                  href=""
                  target=""
                >
                   <i class="fa fa-envelope"></i>
                   contacto@ingcomer.com
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © INGcomer {new Date().getFullYear()}
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
