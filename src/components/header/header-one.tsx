"use client"
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/logo/logo.svg";
import logo_black from "@/assets/img/logo/logo-black.svg";
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import OffcanvasButton from "./button/offcanvas-btn";
import NavbarMenusTwo from "./navbar/navbar-menus-2";
import { GlobalContext } from '@/context/global-context';

export default function HeaderOne() {
 const context = useContext(GlobalContext);

  // Always check for null if context default is null
  if (!context) return null;

  const {
    setFormOpen,
  } = context;

  const handleFormOpen = ()=>{
   setFormOpen(true)

  }
  return (
    <>
      <header className="header-area tp-header-transparent p-relative">
         
        {/* header top start*/}
        {/* header top end */}

        <HeaderStickyWrapper>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-header-logo-1 tp-header-logo">
                  <Link href="/">
                    <Image className="logo-1" src={logo} alt="logo" priority />
                    <Image
                      className="logo-2"
                      src={logo_black}
                      alt="logo"
                      priority
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-7 d-none d-xl-block">
                <div className="main-menu text-end">
                  {/* nav menus start */}
                  <NavbarMenusTwo/>
                  {/* nav menus end */}
                </div>
              </div>
              <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-contact d-flex align-items-center justify-content-end">
                  <div className="tp-header-btn d-none d-md-block ml-30" >
                   <button onClick={handleFormOpen} >Apply Now</button>
                  </div>
                  <div className="tp-header-bar d-xl-none ml-30">
                    <OffcanvasButton/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeaderStickyWrapper>
      </header>

      {/* mobile offcanvas */}
      <div id="offcanvas-sidebar"/>
      {/* mobile offcanvas */}
    </>
  );
}
