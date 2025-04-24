import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer footer-horizontal footer-center bg-white text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
<div>
<a className="btn btn-ghost text-xl"><span className="text-3xl text-[#003EA4] font-medium">Auction</span><span className="text-3xl font-extrabold text-[#FFD337]" >Gallery</span></a>


<ul className=" flex gap-4 mt-4 mb-6 text-2xl items-center justify-center">
          <li>
            <a>Bid.</a>
          </li>
          <li>
            <a>Win.</a>
          </li>
          <li>
            <a>Own.</a>
          </li>
        </ul>
<ul className=" flex gap-12 text-xl items-center justify-center">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Auctions</a>
          </li>
          <li>
            <a>Categories</a>
          </li>
          <li>
            <a>How to works</a>
          </li>
        </ul>
</div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
            </div>
        );
    }
}

export default Footer;