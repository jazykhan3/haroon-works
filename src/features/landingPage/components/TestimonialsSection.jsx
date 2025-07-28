import  { useRef } from "react";
import { Carousel, Avatar } from "antd";
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";

function TestimonialsSection(props) {
  const carouselRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "James Parker",
      title: "Operations Lead at TechEdge",
      content:
        "The AI summary feature saves us hours. We can quickly review tasks and make informed decisions without diving into lengthy reports. This platform has transformed how we approach CA exam preparation.",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Sarah Chen",
      title: "Senior Analyst at FinanceCore",
      content:
        "Incredible platform that makes studying smarter, not harder. The personalized learning paths and AI-powered insights have helped me stay on track with my CA preparation. Highly recommended!",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      title: "CA Student & Teaching Assistant",
      content:
        "This is exactly what I needed for my CA journey. The comprehensive study materials, progress tracking, and intelligent recommendations have made complex topics much more manageable.",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  const TestimonialCard = ({ testimonial }) => (
    <div className="px-2 py-2 relative flex justify-center items-center">
 
      <div className="absolute bg-[#fffbfa] border-1 opacity-60 rounded-2xl shadow border border-orange-200 w-[95%] h-full top-0 left-10 right-20 bottom-0 mx-auto max-w-4xl z-0" />


      <div className="relative z-10 px-4 md:px-8 font-labil-grotesk">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mx-auto max-w-4xl border border-[#ff7f1b] border-2">
          <div className="text-center mb-6">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              "{testimonial.content}"
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              "{testimonial.content}"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
            <Avatar
              size={60}
              src={testimonial.avatar}
              className="border-2 border-orange-200 rounded-lg"
            />
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-gray-900 text-lg">
                {testimonial.name}
              </h4>
              <p className="text-gray-600 text-sm -mt-2">{testimonial.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-20 bg-[#fafaf7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Hear from successful CA candidates who cracked their exams with our
            platform
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block">
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-[#ff3c04] text-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-[#ff3c04]  transition-all duration-200"
            >
              <DoubleLeftOutlined className="text-white hover:text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#ff3c04] rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-[#ff3c04]  transition-all duration-200 hover:text-white"
            >
              <DoubleRightOutlined className="text-white hover:text-white" />
            </button>
          </div>

          <Carousel
            ref={carouselRef}
            dots={true}
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}
            autoplay={true}
            autoplaySpeed={5000}
            className="testimonials-carousel"
            dotPosition="bottom"
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-carousel .slick-dots {
          bottom: -50px;
        }

        .testimonials-carousel .slick-dots li button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #d1d5db;
        }

        .testimonials-carousel .slick-dots li.slick-active button {
          background-color: #f97316;
        }

        .testimonials-carousel .slick-dots li button:before {
          display: none;
        }

        @media (max-width: 768px) {
          .testimonials-carousel .slick-dots {
            bottom: -40px;
          }
        }
      `}</style>
    </section>
  );
}

export default TestimonialsSection;
