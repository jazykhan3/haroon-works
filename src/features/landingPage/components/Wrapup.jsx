import { Button } from "antd";
import image from "../../../assets/images/pre-subscribed_iconic.svg.png";
import { useNavigate } from "react-router-dom";

function Wrapup(props) {
  const navigate = useNavigate();
  return (
    <div className="w-full font-labil-grotesk py-10 px-4 bg-[#fafaf7]">
      <div className="max-w-7xl mx-auto bg-dark-orange-gradient rounded-xl shadow-lg flex justify-between items-center pt-20 pl-10 pb-0">
        <div className="flex flex-col items-left justify-center gap-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to Transform
            <br />
            Your CA Journey?
          </h2>
          <p className="text-white mt-0">Join 1500+ students who've already upgraded their preparation</p>

          <Button type="ghost" className="bg-gradient-to-r from-white to-orange-500 text-black font-semibold border-none hover:bg-gradient-to-r from-white to-orange-500 hover:text-black transition-all duration-300 py-8 w-full text-lg px-0 text-left" onClick={()=> navigate('/onboarding')}>Get Early Access for ₹2.000 / 3 months </Button>
        </div>
        <img src={image} alt="Wrapup" className="w-1/2 h-[450px]" />
      </div>
    </div>
  );
}

export default Wrapup;
