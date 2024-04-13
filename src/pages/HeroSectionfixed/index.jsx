import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Heading, Img ,NavBar} from "../../components";

export default function HeroSectionfixedPage() {
  return (
    <>
      <Helmet>
        <title>Brotin's Application6</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-800">
        <div className="h-[1024px] bg-[url(/public/images/img_background_images.png)] bg-cover bg-no-repeat md:h-auto">
          <div className="h-[1024px] bg-[url(/public/images/img_group_8.png)] bg-cover bg-no-repeat md:h-auto">
            <div className="h-[1024px] bg-[url(/public/images/img_group_9.png)] bg-cover bg-no-repeat md:h-auto">
              <div className="h-[1024px] bg-[url(/public/images/img_group_7.png)] bg-cover bg-no-repeat p-[38px] md:h-auto sm:p-5">
                <div className="mb-[202px] mt-[25px] flex flex-col items-start">
                  <NavBar/>
                  <Heading
                    size="md"
                    as="h1"
                    className="ml-[102px] mt-[124px] w-[81%] capitalize leading-[60px] tracking-[-3.84px] !text-blue_gray-900 md:ml-0 md:w-full"
                  >
                    <span className="font-istokweb text-white-A700">
                      <>
                        Your offbeat
                        <br />
                      </>
                    </span>
                    <span className="font-istokweb text-yellow_900">Research</span>
                    <span className="font-istokweb text-white-A700">
                      <>
                        &nbsp;and <br />
                        Consulting
                      </>
                    </span>
                    <span className="font-istokweb text-blue_gray-900">&nbsp;</span>
                    <span className="font-istokweb text-white-A700">Partner</span>
                  </Heading>
                  <Img src="images/img_righ_arrow.svg" alt="righarrow_one" className="mt-[17px] h-[2px] self-end" />
                  <Heading
                    size="s"
                    as="h2"
                    className="ml-[102px] mt-[19px] w-[57%] !font-opensans leading-7 md:ml-0 md:w-full"
                  >
                    Remodelling Corporate and Market Strategy for business growth and future transitions
                  </Heading>
                  <Button
                    size="sm"
                    shape="round"
                    className="ml-[105px] mt-[52px] min-w-[160px] font-bold md:ml-0 sm:px-5"
                  >
                    Subscribe
                  </Button>
                  <Text as="p" className="ml-[102px] mt-[60px] md:ml-0">
                    Market Research and Data Analytics forglobal chemical companies
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
