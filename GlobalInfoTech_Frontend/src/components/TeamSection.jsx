import React from "react";

// Section7.jsx
// Team / "Meet the Team" section. Uses Tailwind CSS utility classes.
// - Pass `team` prop to customize members, otherwise a default list is used.
// Each member object: { name, role, image, profileUrl (optional), socials: { facebook, twitter, linkedin } }

const TeamSection = ({ team }) => {
  const defaultTeam = [
    {
      name: "John Doe",
      role: "Marketing Manager",
      image: "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000",
      profileUrl: "#",
      socials: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Jane Smith",
      role: "Lead Developer",
      image: "https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg",
      profileUrl: "#",
      socials: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Bob Johnson",
      role: "Customer Support Specialist",
      image: "https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI.jpg",
      profileUrl: "#",
      socials: { facebook: "#", twitter: "#", linkedin: "#" },
    },
  ];

  const members = team && team.length ? team : defaultTeam;

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-3">Meet the Team</h2>
        <div className="w-36 h-1 bg-blue-500 mx-auto mb-6 rounded"></div>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          Get to know the talented individuals behind globalinfotechnology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 items-start">
          {members.map((m, idx) => (
            <article key={idx} className="flex flex-col items-center text-center">
              <div className="w-36 h-36 mb-6 rounded overflow-hidden shadow-lg">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-medium text-gray-800 mb-1">{m.role}</h3>

              {m.profileUrl ? (
                <a href={m.profileUrl} className="text-sm uppercase text-blue-500 tracking-wide mb-4 inline-block">
                  {m.name}
                </a>
              ) : (
                <div className="text-sm uppercase text-blue-500 tracking-wide mb-4">{m.name}</div>
              )}

              <div className="flex space-x-4 text-gray-700">
                {/* Facebook */}
                <a href={m.socials?.facebook || "#"} aria-label={`${m.name} facebook`} className="hover:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.01 3.66 9.15 8.44 9.93v-7.03H7.9v-2.9h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.78 8.44-4.92 8.44-9.93z" />
                  </svg>
                </a>

                {/* Twitter/X */}
                <a href={m.socials?.twitter || "#"} aria-label={`${m.name} twitter`} className="hover:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.55 8.55 0 01-2.7 1.03 4.25 4.25 0 00-7.24 3.87A12.06 12.06 0 013 4.79a4.25 4.25 0 001.32 5.67 4.2 4.2 0 01-1.93-.53v.05a4.25 4.25 0 003.4 4.17c-.46.12-.95.18-1.45.07a4.25 4.25 0 003.97 2.95A8.53 8.53 0 012 19.54a12.06 12.06 0 006.53 1.92c7.84 0 12.13-6.5 12.13-12.13 0-.18-.01-.36-.02-.54A8.66 8.66 0 0022.46 6z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href={m.socials?.linkedin || "#"} aria-label={`${m.name} linkedin`} className="hover:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-9.75 7.5H7.5V18h1.75V10.5zM8.37 9.18a1.02 1.02 0 100-2.04 1.02 1.02 0 000 2.04zM18 18v-3.75c0-2.02-1.08-2.96-2.52-2.96-1.16 0-1.67.64-1.96 1.09V18h1.75v-3.42c0-.82.16-1.62 1.17-1.62 1 0 1.02 1.05 1.02 1.69V18H18z" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
