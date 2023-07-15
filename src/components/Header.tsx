import data from "../assets/data.json";

function Header() {
  return (
    <header className="bg-[hotpink] flex justify-between content-center">
      <div className="pt-[22px] pb-[27px]">
        <a
          className="text-white text-7 font-antonio leading-none select-none"
          title="Home"
          href="/"
        >
          THE PLANETS
        </a>
      </div>
      <nav>
        <ul className="flex mt-[33px] mb-[27px]">
          {data.map((planet) => (
            <li className="text-white text-2.75 uppercase mr-2">
              <a>{planet.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
