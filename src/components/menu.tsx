import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Header from "./header";

export default function Menu() {
  return (
    <div className="w-full flex flex-col justify-center bg-white divide-y divide-slate-200 text-stone-800">
      <Header/>
      <nav className="flex justify-center pt-2  font-light text-sm mb-3 ">
        <ul className="flex gap-5">
          <li className="flex ">
            <Link className="flex flex-row" rel="stylesheet" href="https://www.instagram.com/" >
              Home
              <ChevronDownIcon className=" h-5 w-5 mr-4" />
            </Link>
          </li>
          <li>
            <Link className="flex flex-row" rel="stylesheet" href="https://www.instagram.com/" >
              Shop
              <ChevronDownIcon className=" h-5 w-5 mr-4" />
            </Link>
          </li>
          <li>
            <Link className="flex flex-row" rel="stylesheet" href="https://www.instagram.com/" >
              Products
              <ChevronDownIcon className=" h-5 w-5 mr-4" />
            </Link>
          </li>
          <li>
            <Link className="flex flex-row" rel="stylesheet" href="https://www.instagram.com/" >
              Pages
              <ChevronDownIcon className=" h-5 w-5 mr-4" />
            </Link>
          </li>
          <li>
            <Link className="flex flex-row" rel="stylesheet" href="https://www.instagram.com/" >
              Blog
              <ChevronDownIcon className=" h-5 w-5 mr-4" />
            </Link>
          </li>
          <li>
            <Link className="flex flex-row" rel="stylesheet" href="https://www.instagram.com/" >
              Buy now
              <ChevronDownIcon className=" h-5 w-5 mr-4" />
            </Link>
          </li>
        </ul>
      </nav>
  
    </div>
  )
}

