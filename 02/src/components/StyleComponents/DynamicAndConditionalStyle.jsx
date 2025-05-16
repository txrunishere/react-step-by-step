import { useState } from "react";

const DynamicAndConditionalStyle = () => {
  const [cardStyle, setCardStyle] = useState({
    width: "200px",
    boxShadow: "0px 4px 40px rgba(255, 255, 255, 0.12)",
    borderRadius: "10px",
    margin: "20px 0px",
  });
  const [flexStyle, setFlexStyle] = useState(false);
  const [textColor, setTextColor] = useState("white");

  const handleCardStyle = (bgColor, text) => {
    setCardStyle({ ...cardStyle, backgroundColor: bgColor });
    setTextColor(text);
  };

  const handleFlexStyle = () => {
    setFlexStyle((p) => !p);
  };

  const users = [
    {
      id: 1,
      name: "Peter Parker",
      role: "Frontend Developer",
      image:
        "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg",
    },
    {
      id: 2,
      name: "Tony Stark",
      role: "Backend Developer",
      image:
        "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg",
    },
    {
      id: 3,
      name: "Bruce Wayne",
      role: "Full Stack Developer",
      image:
        "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg",
    },
    {
      id: 4,
      name: "Clark Kent",
      role: "UI/UX Designer",
      image:
        "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg",
    },
    {
      id: 5,
      name: "Diana Prince",
      role: "Project Manager",
      image:
        "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg",
    },
    {
      id: 6,
      name: "Natasha Romanoff",
      role: "QA Engineer",
      image:
        "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg",
    },
    {
      id: 7,
      name: "Steve Rogers",
      role: "DevOps Engineer",
      image:
        "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg",
    },
    {
      id: 8,
      name: "Barry Allen",
      role: "Mobile App Developer",
      image:
        "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg",
    },
    {
      id: 9,
      name: "Arthur Curry",
      role: "Data Scientist",
      image:
        "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg",
    },
    {
      id: 10,
      name: "Wanda Maximoff",
      role: "AI Engineer",
      image:
        "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg",
    },
  ];

  return (
    <div>
      <h1>Dynamic and Conditional Style</h1>
      <button onClick={() => handleCardStyle("lightblue", "black")}>
        Change Color
      </button>
      <button onClick={() => handleCardStyle("#212121", "white")}>
        Default Color
      </button>
      <button onClick={handleFlexStyle}>Flex Wrap</button>
      <div
        style={{
          display: flexStyle ? "flex" : "block",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {users.map(({ id, image, name, role }) => (
          <UserProfile
            key={id}
            cardStyle={cardStyle}
            textColor={textColor}
            info={{ image, name, role }}
          />
        ))}
      </div>
    </div>
  );
};

const UserProfile = ({ info, cardStyle, textColor }) => {
  const style = {
    card: cardStyle,
    imageStyle: {
      width: "200px",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
  };

  return (
    <div style={style.card}>
      <img style={style.imageStyle} src={info.image} />
      <div style={{ padding: "10px", color: textColor }}>
        <h2>{info.name}</h2>
        <p>{info.role}</p>
      </div>
    </div>
  );
};

export default DynamicAndConditionalStyle;
