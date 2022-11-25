import Logo from "../components/Logo";

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 font-[DM-sans]">
    {/* <!-- header --> */}
    <header className="z-50 bg-gray-900 w-full">
      <div className="mx-auto container p-4 grid lg:flex lg:justify-between grid-cols-2">
        <nav className="flex items-center">
          <div className='w-24 '>
            <Logo />
          </div>
        </nav>
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-transparent border border-gray-500 hover:cursor-pointer hover:text-gray-300 rounded-lg mr-2 h-max">
            Sign In
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-indigo-700 to-fuchsia-700 hover:cursor-pointer text-gray-50 rounded-lg h-max">
           Sign Up
          </button>
        </div>
      </div>
    </header>
    {/* <!-- hero --> */}
    <section
      className="border-b border-gray-700 z-40 relative text-gray-50 py-32 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto relative"
    >
      <h1 className="lg:leading-[5rem] text-4xl lg:text-7xl text-center w-full mb-6">
       First Site Analytics for
      </h1>
      <div className="w-max flex flex-col mx-auto mt-0">
        <span className="text-transparent bg-gradient-to-r from-[#54D0A4] to-[#EE61C9] bg-clip-text underline text-4xl lg:text-7xl"> 
           Web3.0 Products 
        </span>
      </div>
      <p
        className="text-center max-w-2xl mx-auto mt-12 text-gray-500"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        obcaecati sequi ex quisquam distinctio nihil libero rerum.
      </p>
      <button className="capitalize px-4 py-3 bg-gradient-to-r from-indigo-700 to-fuchsia-700 hover:cursor-pointer text-gray-50 rounded-lg mx-auto block mt-12">
        Start your 14 day free trail
      </button>
      <button
        className="flex items-center capitalize px-4 py-3 hover:cursor-pointer text-gray-50 rounded-lg mx-auto block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-1 w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
            clipRule="evenodd"
          />
        </svg>
        Watch a demo
      </button>
    </section>
    {/* <!-- companies --> */}
    <section
      className="text-center border-b border-gray-700 z-40 relative text-gray-50 py-32 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto relative"
    >
      <h2 className="text-gray-200 text-xl font-medium">
        Trusted by nearly 4000+ paying customers
      </h2>
      <div
        className="grid grid-cols-2 lg:grid-cols-4 mt-12 gap-12 max-w-2xl mx-auto items-center"
      >
        <img width="200px" src="./assets/logo_1.svg" alt="" />
        <img width="200px" src="./assets/logo_2.svg" alt="" /><img
          width="200px"
          src="./assets/logo_3.svg"
          alt=""
        />
        <img width="200px" src="./assets/logo_4.svg" alt="" /><img
          width="200px"
          src="./assets/logo_5.svg"
          alt=""
        />
        <img width="200px" src="./assets/logo_6.svg" alt="" /><img
          width="200px"
          src="./assets/logo_7.svg"
          alt=""
        />
        <img width="200px" src="./assets/logo_8.svg" alt="" />
      </div>
    </section>
    {/* <!-- feature a --> */}
    <section
      className="grid grid-cols-12 gap-8 border-b border-gray-700 z-40 relative text-gray-50 py-32 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto relative"
    >
      <div className="col-span-12 lg:col-span-6">
        <div
          className="relative bg-white rounded-lg p-4 lg:w-9/12 text-gray-700 flex flex-col gap-2"
        >
          <p className="text-gray-900 font-medium">Result</p>
          <small className="bloc">Here's what our AI came up with</small>
          <div
            className="relative bg-gray-100 rounded-lg p-4 text-sm"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem sed
            ab quam obcaecati. Consectetur dolor, dignissimos ratione error ipsa
            cumque, provident molestiae eveniet vitae, tempore iure nostrum quas
            nisi.
          </div>
          <div
            className="relative bg-gray-100 rounded-lg p-4 text-sm"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem sed
            ab quam obcaecati. Consectetur dolor, dignissimos ratione error ipsa
            cumque, provident molestiae eveniet vitae, tempore iure nostrum quas
            nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            rem sed ab quam obcaecati. Consectetur dolor, dignissimos ratione
            error ipsa cumque, provident molestiae eveniet vitae, tempore iure
            nostrum quas nisi.
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <h2 className="text-4xl font-medium">
          Create content quickly <br />
          and efficiently with <br />
          great AI writing tools
        </h2>
        <p className="py-8 text-gray-500 font-light max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          repudiandae? Earum dignissimos corrupti amet eos tempore porro, fuga
          repellat quibusdam ad atque ex sequi officia iure in dolorum libero
          aperiam.
        </p>
        <button
          className="capitalize px-4 py-3 bg-gradient-to-r from-indigo-700 to-fuchsia-700 hover:cursor-pointer text-gray-50 rounded-lg block"
        >
          Start your 14 day free trail
        </button>
      </div>
    </section>
    {/* <!-- feature b --> */}
    <section
      className="grid grid-cols-12 gap-8 border-b border-gray-700 z-40 relative text-gray-50 py-32 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto relative"
    >
      <div className="col-span-12 lg:col-span-6">
        <h2 className="text-4xl font-medium">
          Write what you want to <br className="hidden lg:block" />
          convey through clear, & <br className="hidden lg:block" />
          authentic writing
        </h2>
        <p className="py-8 text-gray-500 font-light max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          repudiandae? Earum dignissimos corrupti amet eos tempore porro, fuga
          repellat quibusdam ad atque ex sequi officia iure in dolorum libero
          aperiam.
        </p>
        <button
          className="capitalize px-4 py-3 bg-gradient-to-r from-indigo-700 to-fuchsia-700 hover:cursor-pointer text-gray-50 rounded-lg block"
        >
          Start your 14 day free trail
        </button>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <div
          className="relative bg-white rounded-lg p-4 lg:w-9/12 text-gray-700 flex gap-2"
        >
          <div className="p-4 w-5/12">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-1 bg-slate-400 rounded w-1/2"></div>
                <div className="h-1 bg-slate-400 rounded w-3/4"></div>
                <div className="h-1 bg-slate-400 rounded w-1/2"></div>
                <div className="h-1 bg-slate-400 rounded w-3/4"></div>
                <div className="h-1 bg-slate-400 rounded w-1/2"></div>
                <div className="h-1 bg-slate-400 rounded w-3/4"></div>
                <div className="h-1 bg-slate-400 rounded w-1/2"></div>
                <div className="h-1 bg-slate-400 rounded w-3/4"></div>
                <div className="h-1 bg-slate-400 rounded w-1/2"></div>
                <div className="h-1 bg-slate-400 rounded w-3/4"></div>
                <div className="h-1 bg-slate-400 rounded w-1/2"></div>
                <div className="h-1 bg-slate-400 rounded w-3/4"></div>
                <div className="h-1 bg-slate-400 rounded w-1/2"></div>
                <div className="h-1 bg-slate-400 rounded w-3/4"></div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-gray-900 font-medium">Result</p>
            <small className="block">Here's what our AI came up with</small>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-1 bg-slate-100 rounded w-12"></div>
                  <div
                    className="h-1 bg-slate-100 rounded w-full"
                  ></div>
                  <div
                    className="h-1 bg-slate-100 rounded w-full"
                  ></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-1 bg-slate-700 rounded w-12"></div>
                  <div
                    className="h-1 bg-slate-700 rounded w-full"
                  ></div>
                  <div
                    className="h-1 bg-slate-700 rounded w-full"
                  ></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-1 bg-slate-700 rounded w-12"></div>
                  <div
                    className="h-1 bg-slate-700 rounded w-full"
                  ></div>
                  <div
                    className="h-1 bg-slate-700 rounded w-full"
                  ></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-1 bg-slate-700 rounded w-12"></div>
                  <div
                    className="h-1 bg-slate-700 rounded w-full"
                  ></div>
                  <div
                    className="h-1 bg-slate-700 rounded w-full"
                  ></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-1 bg-slate-700 rounded w-12"></div>
                  <div
                    className="h-1 bg-slate-700 rounded w-full"
                  ></div>
                  <div
                    className="h-1 bg-slate-700 rounded w-full"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- benefits --> */}
    <section
      className="border-b border-gray-700 z-40 relative text-gray-50 py-32 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto relative"
    >
      <h2 className="text-4xl text-center w-full font-medium">
        54 exciting writing tools
      </h2>
      <p
        className="py-8 text-gray-500 font-light max-w-md text-center mx-auto"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        minima eius qui.
      </p>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mt-12 gap-4 lg:gap-12 mx-auto items-center"
      >
        <div className="p-4 rounded-lg bg-gray-800 flex">
          <img className="h-8 mr-4" src="./assets/icons.svg" />
          <div>
            <h3 className="mb-2">Blog Headlines</h3>
            <small className="text-light text-gray-400"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small
            >
          </div>
        </div>
        <div className="p-4 rounded-lg bg-gray-800 flex">
          <img className="h-8 mr-4" src="./assets/icons.svg" />
          <div>
            <h3 className="mb-2">Blog Intros</h3>
            <small className="text-light text-gray-400"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small
            >
          </div>
        </div>
        <div className="p-4 rounded-lg bg-gray-800 flex">
          <img className="h-8 mr-4" src="./assets/icons.svg" />
          <div>
            <h3 className="mb-2">Blog outline</h3>
            <small className="text-light text-gray-400"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small
            >
          </div>
        </div>
        <div className="p-4 rounded-lg bg-gray-800 flex">
          <img className="h-8 mr-4" src="./assets/icons.svg" />
          <div>
            <h3 className="mb-2">Blog conclusion</h3>
            <small className="text-light text-gray-400"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small
            >
          </div>
        </div>
        <div className="p-4 rounded-lg bg-gray-800 flex">
          <img className="h-8 mr-4" src="./assets/icons.svg" />
          <div>
            <h3 className="mb-2">Content Rewriter</h3>
            <small className="text-light text-gray-400"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small
            >
          </div>
        </div>
        <div className="p-4 rounded-lg bg-gray-800 flex">
          <img className="h-8 mr-4" src="./assets/icons.svg" />
          <div>
            <h3 className="mb-2">Product Description</h3>
            <small className="text-light text-gray-400"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small
            >
          </div>
        </div>
        <div className="p-4 rounded-lg bg-gray-800 flex">
          <img className="h-8 mr-4" src="./assets/icons.svg" />
          <div>
            <h3 className="mb-2">PAS Copywriting formula</h3>
            <small className="text-light text-gray-400"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small
            >
          </div>
        </div>
        <div className="p-4 rounded-lg bg-gray-800 flex">
          <img className="h-8 mr-4" src="./assets/icons.svg" />
          <div>
            <h3 className="mb-2">Company About Us</h3>
            <small className="text-light text-gray-400"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small
            >
          </div>
        </div>
      </div>
      <a
        href="#"
        className="text-gray-500 text-center mt-12 block mx-auto"
        >See all 54 available tools</a
      >
    </section>
    {/* <!-- showcase --> */}
    <section
      className="border-b border-gray-700 z-40 relative text-gray-50 py-32 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto relative"
    >
      <h2 className="text-4xl text-center w-full font-medium">
        Mixland helps you build <br className="hidden lg;block" />
        beautifull websites
      </h2>
      <div
        className="grid grid-cols-12 mt-12 xl:gap-12 mx-auto items-center items-stretch"
      >
        <div className="col-span-12 lg:col-span-4">
          <div
            className="p-4 rounded-lg bg-gradient-to-r from-indigo-700 to-fuchsia-700 mb-4"
          >
            Blog Headlines
          </div>
          <div
            className="p-4 rounded-lg border hover:border-none border-gray-700 hover:cursor-pointer hover:bg-gradient-to-r from-indigo-700 to-fuchsia-700 mb-4"
          >
            Blog Intros
          </div>
          <div
            className="p-4 rounded-lg border hover:border-none border-gray-700 hover:cursor-pointer hover:bg-gradient-to-r from-indigo-700 to-fuchsia-700 mb-4"
          >
            Social Media Handles
          </div>
          <div
            className="p-4 rounded-lg border hover:border-none border-gray-700 hover:cursor-pointer hover:bg-gradient-to-r from-indigo-700 to-fuchsia-700 mb-4"
          >
            Facebook Ads
          </div>
          <div
            className="p-4 rounded-lg border hover:border-none border-gray-700 hover:cursor-pointer hover:bg-gradient-to-r from-indigo-700 to-fuchsia-700 mb-4"
          >
            Product Description
          </div>
          <div
            className="p-4 rounded-lg border hover:border-none border-gray-700 hover:cursor-pointer hover:bg-gradient-to-r from-indigo-700 to-fuchsia-700 mb-4"
          >
            PAS copywriting formulas
          </div>
        </div>
        <div
          className="col-span-12 lg:col-span-8 bg-gray-700 p-4 rounded-lg flex flex-col justify-start"
        >
          <div className="flex">
            <div
              className="h-2 w-2 bg-green-400 rounded-full mr-1"
            ></div>
            <div
              className="h-2 w-2 bg-yellow-400 rounded-full mr-1"
            ></div>
            <div
              className="h-2 w-2 bg-red-400 rounded-full mr-1"
            ></div>
          </div>
          <p className="text-gray-500 text-sm my-8 justify-self-start">
            4 blog headlines generated
          </p>
          <div className="flex justify-between flex-col h-full">
            <p className="mb-4 text-xl">
              Create original content that ranks SEO
            </p>
            <p className="mb-4 text-xl">Mechanic keayborad enthusiasts</p>
            <p className="mb-4 text-xl">
              How to grow your side hustle to 10x MRR.
            </p>
            <p className="mb-4 text-xl">10 JSON API Generators.</p>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- reviews --> */}
    <section
      className="border-b border-gray-700 z-40 relative text-gray-50 py-32 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto relative"
    >
      <h2 className="text-4xl text-center w-full font-medium">
        What our customers say
      </h2>
      <p
        className="py-8 text-gray-500 font-light max-w-md text-center mx-auto"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        minima eius qui.
      </p>
      <div
        className="grid grid-cols-1 lg:grid-cols-4 mt-12 gap-4 mx-auto items-center items-stretch text-left text-gray-700 place-items-start"
      >
        <div className="flex flex-col gap-4">
          <div className="rounded-lg bg-white px-8 py-4">
            <div className="flex">
              <img
                className="rounded-full h-8 w-8 mr-2"
                src="https://i.pravatar.cc/300"
                alt=""
              />
              <div>
                <small className="block">Darryl Wilson</small>
                <small className="block text-gray-300 text-xs"
                  >@darrylwilson</small
                >
              </div>
              <img
                className="h-4 w-4 ml-auto"
                src="./assets/logos_twitter.svg"
                alt=""
              />
            </div>
            <div>
              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo incidunt minima quo. Vitae sapiente quos accusamus
                veritatis mollitia deleniti, sint, quo consequatur explicabo
                harum autem ratione assumenda,
                <span className="text-[#55ACEE]">#hicerrorsunt.</span>
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white px-8 py-4">
            <div className="flex">
              <img
                className="rounded-full h-8 w-8 mr-2"
                src="https://i.pravatar.cc/300"
                alt=""
              />
              <div>
                <small className="block">Darryl Wilson</small>
                <small className="block text-gray-300 text-xs"
                  >@darrylwilson</small
                >
              </div>
              <img
                className="h-4 w-4 ml-auto"
                src="./assets/logos_twitter.svg"
                alt=""
              />
            </div>
            <div>
              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo incidunt minima quo. Vitae sapiente quos accusamus
                veritatis mollitia deleniti, sint, quo consequatur explicabo
                harum autem ratione assumenda,Vitae sapiente quos accusamus
                veritatis mollitia deleniti, sint, quo consequatur explicabo
                harum autem ratione assumenda,
                <span className="text-[#55ACEE]">#hicerrorsunt.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-lg bg-white px-8 py-4">
            <div className="flex">
              <img
                className="rounded-full h-8 w-8 mr-2"
                src="https://i.pravatar.cc/300"
                alt=""
              />
              <div>
                <small className="block">Darryl Wilson</small>
                <small className="block text-gray-300 text-xs"
                  >@darrylwilson</small
                >
              </div>
              <img
                className="h-4 w-4 ml-auto"
                src="./assets/logos_twitter.svg"
                alt=""
              />
            </div>
            <div>
              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo incidunt minima quo.
                <span className="text-[#55ACEE]">#hicerrorsunt.</span>
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white px-8 py-4">
            <div className="flex">
              <img
                className="rounded-full h-8 w-8 mr-2"
                src="https://i.pravatar.cc/300"
                alt=""
              />
              <div>
                <small className="block">Darryl Wilson</small>
                <small className="block text-gray-300 text-xs"
                  >@darrylwilson</small
                >
              </div>
              <img
                className="h-4 w-4 ml-auto"
                src="./assets/logos_twitter.svg"
                alt=""
              />
            </div>
            <div>
              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo incidunt minima quo. Vitae sapiente quos accusamus
                veritatis mollitia deleniti, sint, quo consequatur explicabo
                harum autem ratione assumenda,Vitae sapiente quos accusamus
                veritatis mollitia deleniti, sint, quo consequatur explicabo
                harum autem ratione assumenda,
                <span className="text-[#55ACEE]">#hicerrorsunt.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-lg bg-white px-8 py-4">
            <div className="flex">
              <img
                className="rounded-full h-8 w-8 mr-2"
                src="https://i.pravatar.cc/300"
                alt=""
              />
              <div>
                <small className="block">Darryl Wilson</small>
                <small className="block text-gray-300 text-xs"
                  >@darrylwilson</small
                >
              </div>
              <img
                className="h-4 w-4 ml-auto"
                src="./assets/logos_twitter.svg"
                alt=""
              />
            </div>
            <div>
              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo incidunt minima quo. Vitae sapiente quos accusamus
                veritatis mollitia deleniti, sint, quo consequatur explicabo
                harum autem ratione assumenda,sint, quo consequatur explicabo
                harum autem ratione assumenda,sint, quo consequatur explicabo
                harum autem ratione assumenda,sint, quo consequatur explicabo
                harum autem ratione assumenda,
                <span className="text-[#55ACEE]">#hicerrorsunt.</span>
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white px-8 py-4">
            <div className="flex">
              <img
                className="rounded-full h-8 w-8 mr-2"
                src="https://i.pravatar.cc/300"
                alt=""
              />
              <div>
                <small className="block">Darryl Wilson</small>
                <small className="block text-gray-300 text-xs"
                  >@darrylwilson</small
                >
              </div>
              <img
                className="h-4 w-4 ml-auto"
                src="./assets/logos_twitter.svg"
                alt=""
              />
            </div>
            <div>
              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo incidunt minima quo. Vitae sapiente quos accusamus
                veritatis mollitia deleniti, sint, quo consequatur explicabo
                harum autem ratione assumenda,Vitae sapiente quos accusamus
                veritatis mollitia deleniti.
                <span className="text-[#55ACEE]">#hicerrorsunt.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-lg bg-white px-8 py-4">
            <div className="flex">
              <img
                className="rounded-full h-8 w-8 mr-2"
                src="https://i.pravatar.cc/300"
                alt=""
              />
              <div>
                <small className="block">Darryl Wilson</small>
                <small className="block text-gray-300 text-xs"
                  >@darrylwilson</small
                >
              </div>
              <img
                className="h-4 w-4 ml-auto"
                src="./assets/logos_twitter.svg"
                alt=""
              />
            </div>
            <div>
              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo incidunt minima quo. Vitae sapiente quos accusamus
                veritatis mollitia deleniti, sint, quo consequatur explicabo
                harum
                <span className="text-[#55ACEE]">#hicerrorsunt.</span>
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white px-8 py-4">
            <div className="flex">
              <img
                className="rounded-full h-8 w-8 mr-2"
                src="https://i.pravatar.cc/300"
                alt=""
              />
              <div>
                <small className="block">Darryl Wilson</small>
                <small className="block text-gray-300 text-xs"
                  >@darrylwilson</small
                >
              </div>
              <img
                className="h-4 w-4 ml-auto"
                src="./assets/logos_twitter.svg"
                alt=""
              />
            </div>
            <div>
              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo incidunt minima quo.
                <span className="text-[#55ACEE]">#hicerrorsunt.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- pricing --> */}
    <section
      className="z-40 relative text-gray-50 py-32 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto relative"
    >
      <h2 className="text-4xl text-center w-full font-medium">
        Make the wise descision <br />
        for your business
      </h2>
      <p
        className="py-8 text-gray-500 font-light max-w-md text-center mx-auto"
      >
        Choose from 3 affordable packages
      </p>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 mt-12 gap-4 mx-auto items-center items-stretch text-left text-gray-400 lg:h-[500px]"
      >
        <div
          className="bg-gray-800 rounded-lg p-8 xl:col-start-2 flex flex-col"
        >
          <small className="mb-8 block">Starter Plan</small>
          <p className="text-4xl text-white mb-4">
            $29<span className="text-sm">/month</span>
          </p>
          <small className="mb-8 block"
            >This plan is suitable for teams of 1-15 people</small
          >
          <p className="mb-4 text-white">What's included</p>
          <p className="mb-2 block">10 Dedicated hosting</p>
          <p className="mb-2 block">Great for freelancers</p>
          <p className="mb-2 block">1 Year support</p>
          <button
            className="w-full text-white px-4 py-2.5 bg-transparent border border-gray-500 hover:cursor-pointer hover:text-gray-300 rounded-lg mr-2 mt-auto"
          >
            Get Started
          </button>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 flex flex-col">
          <small className="mb-8 block">Basic Plan</small>
          <p className="text-4xl text-white mb-4">
            $79<span className="text-sm">/month</span>
          </p>
          <small className="mb-8 block"
            >This plan is suitable for teams of 15-100 people</small
          >
          <p className="mb-4 text-white">What's included</p>
          <p className="mb-2 block">50 Dedicated hosting</p>
          <p className="mb-2 block">Great for Businesses</p>
          <p className="mb-2 block">2 Year support</p>
          <button
            className="w-full text-white px-4 py-2.5 bg-gradient-to-r from-indigo-700 to-fuchsia-700 hover:cursor-pointer hover:text-gray-300 rounded-lg mr-2 mt-auto"
          >
            Get Started
          </button>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 flex flex-col">
          <small className="mb-8 block">Premuim Plan</small>
          <p className="text-4xl text-white mb-4">
            $129<span className="text-sm">/month</span>
          </p>
          <small className="mb-8 block"
            >This plan is suitable for teams of 100+ people</small
          >
          <p className="mb-4 text-white">What's included</p>
          <p className="mb-2 block">100 Dedicated hosting</p>
          <p className="mb-2 block">Great for enterprises</p>
          <p className="mb-2 block">4 Year support</p>
          <button
            className="w-full text-white px-4 py-2.5 bg-transparent border border-gray-500 hover:cursor-pointer hover:text-gray-300 rounded-lg mr-2 mt-auto"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
    {/* <!-- cta --> */}
    <section
      className="border-b border-gray-700 z-40 relative text-gray-50 py-8 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto relative"
    >
      <div
        className="p-8 lg:w-9/12 mx-auto rounded-lg bg-gradient-to-r from-indigo-700 to-fuchsia-700 flex flex-col lg:flex-row justify-between items-center"
      >
        <h2 className="text-center lg:text-left mb-4 lg:mb-0 text-2xl text-white lg:w-1/2 font-medium">
          Take your content creation to the next level
        </h2>
        <button
          className="capitalize px-4 py-3 bg-white hover:cursor-pointer text-gray-700 rounded-lg block"
        >
          Start your 14 day free trail
        </button>
      </div>
    </section>
    {/* <!-- footer --> */}
    <footer
      className="z-40 grid grid-cols-2 lg:grid-cols-4 gap-4 relative text-gray-50 py-32 px-4 md:px-8 overflow-hidden 2xl:px-60 mx-auto relative"
    >
      <div className="text-gray-700">
        <p className="text-white mb-8">Heading</p>
        <a href="#" className="text-sm mb-4 block">Footer Link</a>
        <a href="#" className="text-sm mb-4 block">Footer Link</a>
        <a href="#" className="text-sm mb-4 block">Footer Link</a>
        <a href="#" className="text-sm mb-4 block">Footer Link</a>
      </div>
      <div className="text-gray-700">
        <p className="text-white mb-8">Heading</p>
        <a href="#" className="text-sm mb-4 block">Footer Link</a>
        <a href="#" className="text-sm mb-4 block">Footer Link</a>
        <a href="#" className="text-sm mb-4 block">Footer Link</a>
        <a href="#" className="text-sm mb-4 block">Footer Link</a>
      </div>
      <div className="text-gray-700">
        <p className="text-white mb-8">Heading</p>
        <a href="#" className="text-sm mb-4 block">Footer Link</a>
        <a href="#" className="text-sm mb-4 block">Footer Link</a>
        <a href="#" className="text-sm mb-4 block">Footer Link</a>
        <a href="#" className="text-sm mb-4 block">Footer Link</a>
      </div>
      <div className="text-gray-700">
        <p className="text-white mb-8">Heading</p>
        <a href="#" className="text-sm mb-4 block">Footer Link</a>
        <a href="#" className="text-sm mb-4 block">Footer Link</a>
        <a href="#" className="text-sm mb-4 block">Footer Link</a>
        <a href="#" className="text-sm mb-4 block">Footer Link</a>
      </div>
    </footer>
    </div>
  )
}