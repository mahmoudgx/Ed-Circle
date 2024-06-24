import TutorCard from "./TutorCard";

const Tutors = () => {
  return (
    <div className="mt-20 max-w-7xl mx-auto mb-20 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-[#7F56D9] font-bold">Tutors</h1>
        <p className="text-4xl font-bold">Meet the Heroes</p>
        <p className="text-xl text-gray-600">
          on ed-circle instructors from all over the world instruct millions of
          students. We<br></br> offer the knowledge and abilities.
        </p>
      </div>
      <div className="flex justify-between">
        <TutorCard
          name="Theresa Webb"
          job="Application Support Analyst Lead"
          about="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
          avatar="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <TutorCard
          name="Courtney Henry"
          job="Director Undergraduate Analytics and Planning"
          about="lead engineering teams at figma pitch and protocol labs"
          avatar="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <TutorCard
          name="Theresa Webb"
          job="Application Support Analyst Lead"
          about="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
          avatar="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <TutorCard
          name="Theresa Webb"
          job="Application Support Analyst Lead"
          about="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
          avatar="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default Tutors;
