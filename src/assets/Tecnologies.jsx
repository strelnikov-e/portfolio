import {
  AwsIcon,
  DockerIcon,
  GitIcon,
  JavaIcon,
  JavaScriptIcon,
  MongoIcon,
  SpringIcon,
  SqlIcon,
  ReactIcon
} from "./Icons";

const className = "flex font-medium align-baseline text-center gap-1 px-3 py-1 bg-highlight text-bkg-mate";

export function JavaIconText() {

  return (
    <div className={className}>
      <JavaIcon size="20" className="fill-bkg-vivid" />
      Java
    </div>
  );
}

export function SpringIconText() {
  return (
    <div className={className}>
      <SpringIcon size="20" className="fill-bkg-vivid" />
      Spring
    </div>
  );
}

export function JSIconText() {
  return (
    <div className={className}>
      <JavaScriptIcon size="20" className="fill-bkg-vivid"/>
      JavaScript
    </div>
  );
}

export function ReactIconText() {
  return (
    <div className={className}>
      <ReactIcon size="20" className="fill-bkg-vivid" />
      React
    </div>
  );
}

export function GitIconText() {
  return (
    <div className={className}>
      <GitIcon size="20" className="fill-bkg-vivid" />
      Git
    </div>
  );
}

export function SQLIconText() {
  return (
    <div className={className}>
      <SqlIcon size="20" className="fill-bkg-vivid" />
      SQL
    </div>
  );
}

export function MongoIconText() {
  return (
    <div className={className}>
      <MongoIcon size="20" className="fill-bkg-vivid" />
      MongoDB
    </div>
  );
}

export function AWSIconText() {
  return (
    <div className={className}>
      <AwsIcon size="20" className="fill-bkg-vivid" />
      AWS
    </div>
  );
}

export function DockerIconText() {
  return (
    <div className={className}>
      <DockerIcon size="20" className="fill-bkg-vivid" />
      Docker
    </div>
  );
}
