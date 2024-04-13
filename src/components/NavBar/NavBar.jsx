import React from 'react'
import { Text, Button, Heading, Img } from "../../components";
function NavBar() {
  return (
    <header className="self-stretch">
                    <div className="flex items-center justify-between gap-5 md:flex-col">
                      <div className="flex w-[66%] items-start justify-between gap-5 md:w-full md:flex-col">
                        <div className="flex w-[21%] items-start justify-center md:w-full">
                          <Img src="images/img_logo.png" alt="logo_one" className="h-[49px] w-[29%] object-cover" />
                          <Img
                            src="images/img_whatsapp_image.png"
                            alt="whatsappimage"
                            className="h-[41px] w-[71%] object-cover"
                          />
                        </div>
                        <div className="mt-[11px] flex w-[72%] items-center justify-between gap-5 md:w-full sm:flex-col">
                          <a href="#">
                            <Heading as="h6">About Us</Heading>
                          </a>
                          <div className="flex sm:flex-col">
                            <div className="flex items-center gap-2.5 self-start">
                              <Heading as="h6" className="!text-yellow-800">
                                Industries
                              </Heading>
                              <Img
                                src="images/img_arrow_down.png"
                                alt="arrowdown_one"
                                className="mb-[5px] h-[4px] self-end object-cover"
                              />
                            </div>
                            <a href="#" className="ml-[47px] self-start sm:ml-0">
                              <Heading as="h6">What we do</Heading>
                            </a>
                            <a href="Blogs" target="_blank" rel="noreferrer" className="ml-9 self-end sm:ml-0">
                              <Heading as="h6">Blogs</Heading>
                            </a>
                            <a href="Events" target="_blank" rel="noreferrer" className="ml-[31px] self-start sm:ml-0">
                              <Heading as="h6">Events</Heading>
                            </a>
                            <a href="News" target="_blank" rel="noreferrer" className="ml-10 self-start sm:ml-0">
                              <Heading as="h6">News</Heading>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Button
                          color="blue_gray_900"
                          shape="round"
                          className="min-w-[100px] border border-solid border-blue_gray-900 font-medium sm:px-5"
                        >
                          Log in
                        </Button>
                        <Button shape="round" className="ml-[15px] min-w-[146px] font-bold sm:px-5">
                          Follow Us
                        </Button>
                        <Img
                          src="images/img_search_button.png"
                          alt="searchbutton"
                          className="mb-[3px] ml-[22px] h-[32px] self-end object-cover"
                        />
                      </div>
                    </div>
                  </header>
  )
}

export {NavBar} 