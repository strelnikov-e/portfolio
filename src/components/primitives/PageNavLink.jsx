import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function PageNavLink({name}) {
  return (
    <div className="flex items-center hover:text-accent-3">
      {name} <ArrowDownIcon height={20} />
    </div>
  );
}