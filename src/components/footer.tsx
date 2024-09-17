import { faFacebookF, faInstagram, faPinterest, faTiktok } from "@fortawesome/free-brands-svg-icons"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ArrowUpRightIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

function Footer() {
    return (
        <div className="flex flex-col w-full h-max bg-stone-200 pt-8">
            <div className="flex justify-around text-black  bg-stone-200 pt-8">
               
            <div>
                <h3 className="my-5">logo</h3>
                <div>
                    <ul className="my-5 text-xs">
                        <li className="mb-2">Address: 1234 fashion</li>
                        <li className="mb-2">Medellin, MD 0500016</li>
                        <li className="mb-2">Email:</li>
                        <li className="mb-2">Phone:</li>
                        <li className="flex mb-2"><Link rel="stylesheet" href="" >Get direction </Link><ArrowUpRightIcon className="w-4 h-4 ml-2" /></li>
                    </ul>
                </div>
            <div className="flex mt-4 space-x-4">
                <Link href="#" className="text-black w-7 h-7 hover:text-gray-500 border border-black rounded-full p-2">
                <FontAwesomeIcon icon={faFacebookF} />
                </Link>
                <Link href="#" className="text-black w-7 h-7 hover:text-gray-500 border border-black rounded-full p-2">
                <FontAwesomeIcon icon={faX} />
                </Link>
                <Link href="#" className="text-black w-7 h-7 hover:text-gray-500 border border-black rounded-full p-2">
                <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href="#" className="text-black w-7 h-7 hover:text-gray-500 border border-black rounded-full p-2">
                <FontAwesomeIcon icon={faTiktok} />
                </Link>
                <Link href="#" className="text-black w-7 h-7 hover:text-gray-500 border border-black rounded-full p-2">
                <FontAwesomeIcon icon={faPinterest} />
                </Link>
          </div>
            </div>
                <div>
                    <h3 className="my-5">Help</h3>
            
                    <ul className="text-xs">
                        <li className="mb-2">Privacy Policy</li>
                        <li className="mb-2">Returns + Exchage</li>
                        <li className="mb-2">Shipping</li>
                        <li className="mb-2">Terms & Conditions</li>
                        <li className="mb-2">FAQ's</li>
                        <li className="mb-2">Compare</li>
                        <li className="mb-2">My Wishlist</li>
                    </ul>
                </div>
                <div>
                    <h3 className="my-5">About us</h3>
                    <ul className="text-xs ">
                        <li className="mb-2">Our Story</li>
                        <li className="mb-2">Visit Our Store</li>
                        <li className="mb-2">Contact Us</li>
                        <li className="mb-2">Account</li>
                    </ul>
                </div>
                <div>
                    <h3 className="my-5">Sign Up for Email</h3>
                    <p className="font-light text-xs">
                        Sign up to get first dibs on new arrivals, sales <br/>
                    </p>
                    <div>
                        <ul className="flex font-light text-xs pt-5 text-gray-900 text-opacity-60">
                            <li className="flex">
                            <Link className="flex flex-row" rel="stylesheet" href="https://www.instagram.com/" >
                                USD  <ChevronDownIcon className=" h-5 w-5 mr-4 pb-1" />
                            </Link>
                            </li>
                            <li className="flex">
                            <Link className="flex flex-row" rel="stylesheet" href="https://www.instagram.com/" >
                            English <ChevronDownIcon className=" h-5 w-5 mr-4 pb-1" />
                            </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-end">
                        <button><ChevronUpIcon className=" h-5 w-5 mr-4 pb-1"/></button>
                    </div>
                </div>
                 
            </div>
            <div className="flex justify-start font-light left-4 h-10 pt-4">
            <p className="text-xs text-black ml-20">© 2024 Ecomus Store. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer