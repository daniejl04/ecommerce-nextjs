import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { ArrowDownRightIcon, ArrowLongRightIcon, ArrowUpRightIcon } from "@heroicons/react/20/solid";

export default function LocationMap() {
  return (
    <div className="flex justify-center py-8 bg-white text-black rounded-lg">
      <div className="relative w-full max-w-screen-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.520422205197!2d-79.38543172473326!3d43.65322617912007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d4c7f482c9%3A0x5750ef2a5c82565c!2s301%20Front%20St%20W%2C%20Toronto%2C%20ON%20M5V%202T6%2C%20Canada!5e0!3m2!1sen!2sus!4v1615927846311!5m2!1sen!2sus"
          width="100%"
          height="500"
          allowFullScreen
          loading="lazy"
          title="Toronto Store Location"
          className="mx-auto"
        ></iframe>
        <div className="absolute p-6 left-36 transform -translate-x-1/2 h-[75%] top-[30px] bg-white z-5">
          <div>
            <h2 className="mb-4 text-lg w-full">Toronto Store</h2>
            <p className="mb-2 text-xs w-full">301 Front St W Toronto, Canada</p>
            <p className="mb-2 text-xs w-full">support@comms.com</p>
            <p className="mb-2 text-xs w-full">(08) 8942 299</p>
            <p className="mb-2 text-xs w-full">
              Mon - Fri, 8:30am - 10:30pm<br />
              Saturday, 8:30am - 10:30pm<br />
              Sunday Closed
            </p>
            <button className="inline-flex items-center mt-4 text-black text-xs cursor-pointer underline underline-offset-4 font-bold">
              Get Directions
              <ArrowUpRightIcon className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

