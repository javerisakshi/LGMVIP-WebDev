import React from "react";
import "./style.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div class="contain">
          <div class="col">
           
            <ul>
              <li>
                Mail: <a href="mailto:xyz@gmail.com">loremipsum@gmail.com</a>
              </li>
              <li>
                Call: <a href="tel: +123456789012">+123-456-7890</a>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </>
  );
}
export default Footer;
