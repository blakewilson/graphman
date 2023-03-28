import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAppContext } from "../context/state";
import EndpointInput from "./endpoint-input";

export default function Header() {
  return (
    <div className="p-5">
      <div className="flex items-center">
        <div className="w-1/4">
          <a
            href="#"
            className="mr-auto uppercase font-extrabold text-white text-2xl"
          >
            Graphman
          </a>
        </div>

        <div className="w-1/2">
          <EndpointInput />
        </div>
      </div>
    </div>
  );
}
