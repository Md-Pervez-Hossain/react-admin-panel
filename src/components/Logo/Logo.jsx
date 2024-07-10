import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-3 ">
        {/* <img src="../../../public/assets/favicon.png" alt="" className="size-8" />{" "} */}
        <h2 className="font-poppins font-medium text-[20px]">
          Business Center
        </h2>
      </div>
    </Link>
  );
};

export default Logo;
