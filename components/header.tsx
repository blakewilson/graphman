import EndpointInput from "./endpoint-input";
import Logo from "./logo";
import Share from "./share";

export default function Header() {
  return (
    <div className="p-5">
      <div className="flex items-center">
        <div className="w-1/4">
          <Logo />
        </div>

        <div className="w-1/2">
          <EndpointInput />
        </div>

        <div className="w-1/4 text-right">
          <Share />
        </div>
      </div>
    </div>
  );
}
