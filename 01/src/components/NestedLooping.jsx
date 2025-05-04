const NestedLooping = () => {
  const data = [
    {
      id: 1,
      name: "Alice",
      age: 25,
      email: "alice@example.com",
      workExperience: [
        { company: "Google", post: "Junior Developer" },
        { company: "Netflix", post: "Backend Developer" },
        { company: "Figma", post: "Frontend Developer" },
      ],
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
      email: "bob@example.com",
      workExperience: [
        { company: "Amazon", post: "Cloud Engineer" },
        { company: "Microsoft", post: "Software Engineer" },
      ],
    },
    {
      id: 3,
      name: "Charlie",
      age: 22,
      email: "charlie@example.com",
      workExperience: [
        { company: "Apple", post: "iOS Developer" },
        { company: "Spotify", post: "Music App Developer" },
      ],
    },
    {
      id: 4,
      name: "Diana",
      age: 28,
      email: "diana@example.com",
      workExperience: [
        { company: "Adobe", post: "UI/UX Designer" },
        { company: "Lenovo", post: "Graphic Designer" },
      ],
    },
    {
      id: 5,
      name: "Eve",
      age: 35,
      email: "eve@example.com",
      workExperience: [
        { company: "Tesla", post: "AI Engineer" },
        { company: "SpaceX", post: "Rocket Scientist" },
      ],
    },
  ];

  return (
    <div>
      <h1>User Information</h1>
      <section>
        {
          data.map(({ age, email, id, name, workExperience }) => (
            <div key={id}>
              <h4>Name: {name}</h4>
              <h4>Email: {email}</h4>
              <div>
                {
                  workExperience.map(({ company, post }, index) => (
                    <Experience key={index} experience={{company, post}} />
                  ))
                }
              </div>
            </div>
          ))
        }
      </section>
    </div>
  )
}


const Experience = ({ experience }) => {
  return (
    <ul>
      <li>Company: {experience.company}</li>
      <li>Post: {experience.post}</li>
    </ul>
  )
}


export default NestedLooping