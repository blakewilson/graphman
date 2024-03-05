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
