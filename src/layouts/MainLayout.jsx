import Navbar from "../components/Navbar";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="relative bg-gray-50 h-screen w-screen overflow-x-hidden">
        <Navbar />
        {children}
      </div>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
