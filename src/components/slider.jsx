import AvatarImage from "../assets/avatar-2.png";
import { IconBrandLinkedin } from "@tabler/icons-react";

const SliderComponent = () => {
  const data = [
    {
      name: "Katie Sims",
      role: "Machine Learning Specialist",
      quote:
        '"The culture here is both supportive and stimulating, with talented professionals who push boundaries and share insights. A strong focus on innovation ensures constant growth and staying ahead of industry trends."',
      image: AvatarImage,
    },
    {
      name: "Katie Sims",
      role: "Machine Learning Specialist",
      quote:
        '"The culture here is both supportive and stimulating, with talented professionals who push boundaries and share insights. A strong focus on innovation ensures constant growth and staying ahead of industry trends."',
      image: AvatarImage,
    },
    {
      name: "John Doe",
      role: "Machine Learning Specialist",
      quote:
        '"The culture here is both supportive and stimulating, with talented professionals who push boundaries and share insights. A strong focus on innovation ensures constant growth and staying ahead of industry trends."',
      image: AvatarImage,
    },
    {
      name: "John Doe",
      role: "Machine Learning Specialist",
      quote:
        '"The culture here is both supportive and stimulating, with talented professionals who push boundaries and share insights. A strong focus on innovation ensures constant growth and staying ahead of industry trends."',
      image: AvatarImage,
    },
    {
      name: "John Doe",
      role: "Machine Learning Specialist",
      quote:
        '"The culture here is both supportive and stimulating, with talented professionals who push boundaries and share insights. A strong focus on innovation ensures constant growth and staying ahead of industry trends."',
      image: AvatarImage,
    },
    {
      name: "John Doe",
      role: "Machine Learning Specialist",
      quote:
        '"The culture here is both supportive and stimulating, with talented professionals who push boundaries and share insights. A strong focus on innovation ensures constant growth and staying ahead of industry trends."',
      image: AvatarImage,
    },
    {
      name: "John Doe",
      role: "Machine Learning Specialist",
      quote:
        '"The culture here is both supportive and stimulating, with talented professionals who push boundaries and share insights. A strong focus on innovation ensures constant growth and staying ahead of industry trends."',
      image: AvatarImage,
    },
    {
      name: "John Doe",
      role: "Machine Learning Specialist",
      quote:
        '"The culture here is both supportive and stimulating, with talented professionals who push boundaries and share insights. A strong focus on innovation ensures constant growth and staying ahead of industry trends."',
      image: AvatarImage,
    },
    {
      name: "John Doe",
      role: "Machine Learning Specialist",
      quote:
        '"The culture here is both supportive and stimulating, with talented professionals who push boundaries and share insights. A strong focus on innovation ensures constant growth and staying ahead of industry trends."',
      image: AvatarImage,
    },
    {
      name: "John Doe",
      role: "Machine Learning Specialist",
      quote:
        '"The culture here is both supportive and stimulating, with talented professionals who push boundaries and share insights. A strong focus on innovation ensures constant growth and staying ahead of industry trends."',
      image: AvatarImage,
    },
    {
      name: "John Doe",
      role: "Machine Learning Specialist",
      quote:
        '"The culture here is both supportive and stimulating, with talented professionals who push boundaries and share insights. A strong focus on innovation ensures constant growth and staying ahead of industry trends."',
      image: AvatarImage,
    },
    {
      name: "John Doe",
      role: "Machine Learning Specialist",
      quote:
        '"The culture here is both supportive and stimulating, with talented professionals who push boundaries and share insights. A strong focus on innovation ensures constant growth and staying ahead of industry trends."',
      image: AvatarImage,
    },
    {
      name: "John Doe",
      role: "Machine Learning Specialist",
      quote:
        '"The culture here is both supportive and stimulating, with talented professionals who push boundaries and share insights. A strong focus on innovation ensures constant growth and staying ahead of industry trends."',
      image: AvatarImage,
    },
  ];

  return (
    <div className="relative text-white min-h-screen flex flex-col ml-[10px]">
      <div
        className="flex relative justify-center gap-6 w-[75%] top-[100px] z-0 "
        // style={{
        //   whiteSpace: "nowrap",
        //   scrollbarWidth: "none",
        //   msOverflowStyle: "none",
        // }}
      >
        {data.map((item, index) => (
          <div key={index} className="flex-1 min-w-[300px] max-w-[400px]">
            <div className="bg-gray-800 rounded-[22px] p-6 h-full flex flex-col border-[1px] border-gray-600">
              <div className="items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[180px] h-[100] rounded-full ml-[35px]"
                />
                <div className="ml-4 text-left">
                  <h3 className="text-[23px] font-bold ml-[50px]">
                    {item.name}
                  </h3>
                  <h4 className="text-[15px] text-gray-500 items-center ml-[15px]">
                    {item.role}
                  </h4>
                </div>
              </div>
              <p className="text-[18px] flex-grow text-center">{item.quote}</p>
              <div className="flex justify-center items-center mt-6 mb-2">
                <button className="bg-blue-600 text-white px-[50px] py-[14px] font-bold rounded-[12px] flex hover:bg-blue-700 transition shadow-xl shadow-blue-600/40">
                  Contact <IconBrandLinkedin stroke={1.7} className="ml-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
