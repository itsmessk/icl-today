import {
  FaQuestionCircle,
  FaGraduationCap,
  FaBook,
  FaVideo,
  FaListAlt,
  FaClock,
} from "react-icons/fa";

const CourseFAQs = () => {
  const faqs = [
    {
      icon: <FaGraduationCap />,
      title: "Credits",
      desc: "Earn 3 academic credits on successful completion.",
    },
    {
      icon: <FaBook />,
      title: "Elective",
      desc: "Counts as an approved elective for CSE, IT & ECE.",
    },
    {
      icon: <FaVideo />,
      title: "Mode",
      desc: "Online LIVE sessions with a cluster-based approach.",
    },
    {
      icon: <FaListAlt />,
      title: "Choice",
      desc: "Select 1 of 3 course tracks.",
    },
    {
      icon: <FaClock />,
      title: "Flexibility",
      desc: "Live mentor support + recorded sessions.",
    },
  ];

  return (
    <div className="mt-10 max-w-4xl p-10 ">
      {/* Header */}
      <h3 className="section-title">
        <FaQuestionCircle className="text-indigo-500" />
        FAQs
      </h3>

      {/* Vertical Cards */}
      <div className="space-y-5">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="group flex gap-4 rounded-xl bg-white p-5 shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5 border border-gray-200 w-full"
          >
            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 text-xl transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>

            {/* Text */}
            <div>
              <h4 className="mb-1 text-xl font-semibold text-gray-800">
                {item.title}
              </h4>
              <p className="text-md leading-relaxed text-gray-600">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFAQs;
