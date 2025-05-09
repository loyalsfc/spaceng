"use client";

import React from "react";
import Link from "next/link";
import {ArrowUp} from "lucide-react";

import Wrapper from "../wrapper/wrapper";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({top: 0});
  };

  return (
    <footer className="bg-[#1E1E1E] pt-16 md:pt-28 pb-10 text-white relative">
      <Wrapper>
        <div className=" md:flex gap-20">
          <article className="space-y-4 md:w-1/3 lg:w-2/5 mb-16 md:mb-0">
            <Link className="font-medium text-lg" href={"/"}>
              SpaceFinda
            </Link>
            <p className="text-sm md:text-base leading-loose md:max-w-96">
              Experience the freedom of flexible living and working with our curated selection of
              shortlets and workspaces.
            </p>
            <div className="flex gap-3 py-3">
              <Link href={"https://x.com/spacefinda"}>
                <svg
                  fill="none"
                  height="27"
                  viewBox="0 0 27 27"
                  width="27"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0429 26.0857C20.2462 26.0857 26.0857 20.2462 26.0857 13.0429C26.0857 5.83949 20.2462 0 13.0429 0C5.83949 0 0 5.83949 0 13.0429C0 20.2462 5.83949 26.0857 13.0429 26.0857Z"
                    fill="white"
                  />
                  <path
                    d="M5.00902 5.48535L11.2433 13.8211L4.96973 20.5985H6.38178L11.8744 14.6646L16.3122 20.5985H21.1171L14.5319 11.7939L20.3714 5.48535H18.9594L13.9011 10.9501L9.81395 5.48535H5.00902ZM7.0855 6.52536H9.29287L19.0404 19.5585H16.833L7.0855 6.52536Z"
                    fill="#205BF3"
                  />
                </svg>
              </Link>
              <svg
                fill="none"
                height="27"
                viewBox="0 0 27 27"
                width="27"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1288 26.0857C20.3322 26.0857 26.1717 20.2462 26.1717 13.0429C26.1717 5.83949 20.3322 0 13.1288 0C5.92542 0 0.0859375 5.83949 0.0859375 13.0429C0.0859375 20.2462 5.92542 26.0857 13.1288 26.0857Z"
                  fill="white"
                />
                <path
                  d="M20.9214 14.093V19.4703H17.8038V14.4534C17.8038 13.1937 17.3537 12.3335 16.2249 12.3335C15.3635 12.3335 14.8517 12.9126 14.6257 13.4734C14.5437 13.6738 14.5225 13.9521 14.5225 14.2332V19.4701H11.4047C11.4047 19.4701 11.4465 10.9731 11.4047 10.0936H14.5227V11.4223C14.5165 11.4328 14.5076 11.443 14.502 11.453H14.5227V11.4223C14.937 10.7848 15.6759 9.87338 17.3325 9.87338C19.3836 9.87338 20.9214 11.2135 20.9214 14.093ZM8.14313 5.57373C7.07664 5.57373 6.37891 6.27379 6.37891 7.19357C6.37891 8.09381 7.05641 8.8141 8.10221 8.8141H8.12243C9.20984 8.8141 9.88596 8.09381 9.88596 7.19357C9.86526 6.27379 9.20984 5.57373 8.14313 5.57373ZM6.56421 19.4703H9.68089V10.0936H6.56421V19.4703Z"
                  fill="#205BF3"
                />
              </svg>
              <Link href="https://www.facebook.com/share/18pVvDhNod/?mibextid=wwXIfr">
                <svg
                  fill="none"
                  height="27"
                  viewBox="0 0 27 27"
                  width="27"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.2576 13.0429C26.2576 5.83874 20.4188 0 13.2147 0C6.01062 0 0.171875 5.83874 0.171875 13.0429C0.171875 19.5541 4.94067 24.9496 11.1768 25.9278V16.8131H7.8651V13.0429H11.1768V10.1694C11.1768 6.90098 13.1231 5.09487 16.1035 5.09487C17.5301 5.09487 19.0229 5.34961 19.0229 5.34961V8.55937H17.3773C15.7571 8.55937 15.2527 9.56563 15.2527 10.5973V13.0429H18.87L18.2918 16.8131H15.2527V25.9278C21.4888 24.9496 26.2576 19.5541 26.2576 13.0429Z"
                    fill="white"
                  />
                  <path
                    d="M18.2919 16.8129L18.8701 13.0427H15.2528V10.5972C15.2528 9.56549 15.7572 8.55924 17.3774 8.55924H19.023V5.34947C19.023 5.34947 17.5302 5.09473 16.1036 5.09473C13.1232 5.09473 11.1769 6.90084 11.1769 10.1692V13.0427H7.86523V16.8129H11.1769V25.9276C11.8418 26.0321 12.522 26.0856 13.2149 26.0856C13.9078 26.0856 14.588 26.0321 15.2528 25.9276V16.8129H18.2919Z"
                    fill="#205BF3"
                  />
                </svg>
              </Link>
              <Link href={"https://www.instagram.com/spacefinda"}>
                <svg
                  fill="none"
                  height="27"
                  viewBox="0 0 27 27"
                  width="27"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M26.3426 6.52143C26.3426 2.9203 23.4223 0 19.8211 0C15.8378 0 10.7616 0 6.77826 0C3.17713 0 0.256836 2.9203 0.256836 6.52143C0.256836 10.5047 0.256836 15.581 0.256836 19.5643C0.256836 23.1654 3.17713 26.0857 6.77826 26.0857C10.7616 26.0857 15.8378 26.0857 19.8211 26.0857C23.4223 26.0857 26.3426 23.1654 26.3426 19.5643C26.3426 15.581 26.3426 10.5047 26.3426 6.52143Z"
                    fill="white"
                    fillRule="evenodd"
                  />
                  <path
                    d="M17.1573 3.91945C19.8846 3.94553 22.3954 6.28672 22.4228 9.18485C22.4319 11.7569 22.4319 14.3289 22.4228 16.901C22.3967 19.6178 20.0555 22.139 17.1573 22.1664C14.5853 22.1755 12.0132 22.1755 9.44119 22.1664C6.71263 22.1403 4.20318 19.7991 4.17579 16.901C4.16666 14.3289 4.16666 11.7569 4.17579 9.18485C4.20057 6.45498 6.53655 3.94684 9.44119 3.91945C12.0132 3.91032 14.5853 3.91032 17.1573 3.91945ZM9.47641 5.15199C7.35955 5.15852 5.42921 6.99365 5.40834 9.19267C5.40052 11.7595 5.40052 14.3263 5.40834 16.8932C5.42791 18.9866 7.21869 20.913 9.44902 20.9338C12.0159 20.9417 14.5827 20.9417 17.1495 20.9338C19.2481 20.9143 21.1693 19.1235 21.1902 16.8932C21.198 14.3263 21.198 11.7595 21.1902 9.19267C21.1706 7.08495 19.3446 5.17286 17.1495 5.15199C14.5918 5.14417 12.0341 5.15199 9.47641 5.15199Z"
                    fill="#205BF3"
                  />
                  <path
                    d="M13.3314 8.47754C15.4418 8.4971 17.4086 10.1249 17.7947 12.2104C18.0699 13.6973 17.5508 15.3094 16.4552 16.3554C15.2357 17.5162 13.3484 17.931 11.7311 17.3389C9.92332 16.6776 8.65164 14.772 8.73642 12.8417C8.83946 10.5357 10.8768 8.48536 13.3001 8.47754C13.3106 8.47754 13.321 8.47754 13.3314 8.47754ZM13.2792 9.7127C11.7728 9.72704 10.3524 10.8696 10.0394 12.3539C9.72246 13.8551 10.5859 15.5207 12.0037 16.1193C13.5518 16.7741 15.5513 16.0398 16.2987 14.5112C17.0721 12.9317 16.343 10.7861 14.71 10.0231C14.2653 9.81574 13.771 9.71139 13.2792 9.7127Z"
                    fill="#205BF3"
                  />
                  <path
                    clipRule="evenodd"
                    d="M19.1683 8.12156C19.1683 7.86983 19.0679 7.62854 18.8905 7.45115C18.7131 7.27377 18.4719 7.17334 18.2201 7.17334C18.2006 7.17334 18.1797 7.17334 18.1601 7.17334C17.9084 7.17334 17.6671 7.27377 17.4897 7.45115C17.3123 7.62854 17.2119 7.86983 17.2119 8.12156C17.2119 8.13199 17.2119 8.14112 17.2119 8.15155C17.2119 8.41111 17.315 8.66023 17.4989 8.84283C17.6815 9.02673 17.9306 9.12977 18.1901 9.12977C18.7301 9.12977 19.1683 8.69153 19.1683 8.15155C19.1683 8.14112 19.1683 8.13199 19.1683 8.12156Z"
                    fill="#205BF3"
                    fillRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </article>
          <div className="grid grid-cols-2 gap-x-8 gap-y-14 md:flex justify-between text-sm sm:text-base flex-1">
            <div>
              <h4 className="font-medium text-[17px] mb-6">Services</h4>
              <ul className="space-y-5">
                <li className="hover:underline">
                  <Link href={"/shortlet"}>Shortlets</Link>
                </li>
                <li className="hover:underline">
                  <Link href={"/workspace"}>Workspaces</Link>
                </li>
                <li className="hover:underline">
                  <Link href={"/pricing"}>Pricing</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-[17px] mb-6">Legal</h4>
              <ul className="space-y-5">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/privacy-policy#terms">Terms of Use</Link>
                </li>
                <li>Copyrights</li>
                <li>Trademarks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-[17px] mb-6">Help Center</h4>
              <ul className="space-y-5">
                <li>
                  <Link href={"tel:+2348020343070"}>+234 802 034 3070</Link>
                </li>
                <li>
                  <Link href={"mailto:Spacefindatechnologiesltd@gmail.com"}>
                    Spacefindatechnologiesltd@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-20 text-sm">&#169; Spacefinda2024, All Rights Reserved.</p>
      </Wrapper>

      <button className="absolute bottom-8 right-4 md:right-10 animate-bounce" onClick={scrollTop}>
        <ArrowUp />
      </button>
    </footer>
  );
}

export default Footer;
