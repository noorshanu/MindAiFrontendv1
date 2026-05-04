import Image from "next/image";

const mentors = [
  {
    name: "Mr. Sai Prasanth AB",
    role: "Founder-Mind's AI",
    image: "/masterclass/sai.png",
  },
  {
    name: "Mr. Noor Alam",
    role: "AI Psychologist Developer",
    image: "/masterclass/noor1.png",
  },
  {
    name: "Mr. Karthic Elangovan",
    role: "AI/ML Engineer",
    image: "/masterclass/karthik.png",
  },
  {
    name: "Mr. Priyanshu Sinha",
    role: "VR Therapy Developer",
    image: "/masterclass/priyansu.png",
  },
];

const MeetMentors = () => {
  return (
    <section className="bg-[#f7fdf9] px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-extrabold text-[#0f172a] sm:text-3xl">
          Meet Your <span className="text-[#76b852]">Mentors</span>
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-xs text-slate-600 sm:text-sm">
          Learn from industry experts at the intersection of AI and psychology
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {mentors.map((m) => (
            <article
              key={m.name}
              className="overflow-hidden rounded-2xl border border-[#e6efe0] bg-white p-3 shadow-[0_6px_16px_rgba(15,23,42,0.08)] sm:p-4"
            >
              <div className="relative mx-auto aspect-3/4 w-full max-w-[140px] sm:max-w-[160px]">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-contain object-top grayscale"
                  sizes="(min-width: 1024px) 160px, 45vw"
                />
              </div>
              <div className="mt-3 text-left">
                <p className="text-sm font-bold leading-snug text-[#0f172a] sm:text-base">{m.name}</p>
                <p className="mt-0.5 text-xs font-medium text-[#76b852] sm:text-sm">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetMentors;
