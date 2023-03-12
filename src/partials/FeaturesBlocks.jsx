import React from 'react';

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 ">
            <h2 className="h2 drop-shadow-2xl">What services we offer:</h2>
            <p className="text-xl text-gray-600"></p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-gray-100" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2">Increse Followers</h4>
              <p className="text-sm text-gray-600 text-center ">Grow your OnlyFans account and increase your earnings with our expert follower service. We provide targeted promotion and personalized support to help you optimize your content and attract new fans.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-gray-100" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2">Social Media Management</h4>
              {/* <p className="text-lg text-gray-600 text-center">Maximize your OnlyFans earnings with our expert content posting service. We handle the upload and posting of your content, while you focus on creating new material. Our experienced team ensures your posts are optimized for engagement and reach, giving you more time to connect with your fans. Sign up now and take your OnlyFans account to the next level.</p> */}
              <p className="text-sm text-gray-600 text-center">We will manage your new socials and make sure everything is up to date. We will guide you and help you with the content that we need for it.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-gray-100" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-gray-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-gray-100" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Work from wherever you want, whenever you want</h4>
              {/* <p className="text-lg text-gray-600 text-center">Maximize your OnlyFans earnings by leveraging our expert advice and guidance on increasing your influence. Our team of professionals can help you create engaging content, promote your account on social media, and build a loyal fanbase that will support you over the long term. By taking advantage of our expertise, you can establish yourself as a top creator on the platform and unlock your full potential for success. */}
              {/* </p> */}
              <p className="text-sm text-gray-600 text-center">When you work with us you have total freedom over your workplace and how much you work.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-gray-100" cx="13" cy="9" r="3" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Mental Health</h4>
              {/* <p className="text-lg text-gray-600 text-center">Our 24/7 support service provides uninterrupted access to expert assistance, offering timely solutions to any concerns or issues our customers may face, with reliable and responsive support at your fingertips.</p> */}

              <p className="text-sm text-gray-600 text-center">We know that life can be crazy and stressful sometimes. Especially when you start to make a lot of money. We are here for you, to help and guide you through your new life chapter</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                  <path className="stroke-current text-gray-100" d="M22 30h4v12h-4z" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Channel Growth</h4>
              {/* <p className="text-lg text-gray-600 text-center">Boost your OnlyFans profile with our product that increases likes on your posts. Our innovative technology helps you gain more engagement, increasing your visibility on the platform. Build your brand and connect with your audience using our product designed for OnlyFans creators. */}
              {/* </p> */}
              <p className="text-sm text-gray-600 text-center">Across your new social media platforms + OnlyFans page, our analysts will tailor bespoke content to achieve growth.
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-gray-100" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                  <circle className="stroke-current text-gray-100" cx="17" cy="5" r="3" />
                  <path className="stroke-current text-gray-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                </g>
              </svg>
              <h4 className="h4 mb-2">24/7 Support</h4>
              {/* <p className="text-lg text-gray-600 text-center">Save time and hassle with our OnlyFans fan communication service. Our expert team engages with your fans while you focus on creating amazing content. Sign up now.</p> */}
              <p className="text-sm text-gray-600 text-center">Any issue, business related or personal, big or small - we are there for you to advise and guide or just for a friendly chat!</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
