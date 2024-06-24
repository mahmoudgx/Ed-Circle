import ProgramCard from "./ProgramCard";

const Programs = () => {
  return (
    <div className="mt-20 max-w-7xl mx-auto mb-20 space-y-10">
      <div className="text-left space-y-2">
        <h1 className="text-[#7F56D9] font-bold">Explore Programs</h1>
        <p className="text-4xl font-bold">Our Most Popular Class</p>
        <p className="text-xl text-gray-600">
          Let's join our famous class the knowledge provided will definitely be
          useful for you.
        </p>
      </div>
      <div className="flex justify-between">
        <ProgramCard
          time="08 hr 12 mins"
          rating={5}
          rate="4.3"
          name="John Cooper"
          price="$17.84"
          enroll="2001 Enrolled"
          review="16,325"
          category="Design"
          avatar="https://images.unsplash.com/photo-1712847331947-9460dd2f264b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Figma UI UX Design"
          description="   Use Figma to get a job in UI Design, User Interface, User Experience
        design."
          imgSrc="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ProgramCard
          time="06 hr 3 mins"
          rating={4}
          rate="3.9"
          name="Jenny Wilson"
          price="$8.99"
          enroll="2005 Enrolled"
          review="832"
          category="Design"
          avatar="https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Learn With Shoaib"
          description="Design Web Sites and Mobile Apps that Your Users Love and Return to Again. "
          imgSrc="https://plus.unsplash.com/premium_photo-1663047716627-e0b6c878761e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ProgramCard
          time="01 hr 2 mins"
          rating={5}
          rate="4.2"
          name="Esther Howard"
          price="$11.70"
          enroll="2007 Enrolled"
          review="125"
          category="Design"
          avatar="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Building User Interfaces"
          description="Learn How to Apply User Experience (UX) Principles to Your Website Designs"
          imgSrc="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="flex justify-center">
        <button className=" border-2 p-2 rounded-lg font-semibold">
          Explore All Programs
        </button>
      </div>
    </div>
  );
};

export default Programs;
