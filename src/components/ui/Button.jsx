import { Button } from "antd";

function PrimaryButton({ buttonText, onClick }) {
  return (
    <div>
      <Button
        type="ghost"
        onClick={onClick}
        className="bg-transparent border disabled:border-[#f57900] font-inter border-[#f57900] disabled:text-black-800 disabled:bg-transparent disabled:hover:bg-orange-gradient-hover hover:bg-orange-gradient-hover text-[#f57900] hover:text-white text-base font-bold leading-4 py-[10px] px-6 w-fit h-auto bg-[#fff1ee]" // Tailwind for styling
      >
        {buttonText}
      </Button>
    </div>
  );
}

export default PrimaryButton;
