const InlineStyle = () => {
  const style = {
    card: {
      width: "300px",
      border: "2px solid white",
      borderRadius: "20px",
      padding: "20px",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },
    informationSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      flexDirection: "column",
    },
  };

  // it is also known as internal style or style object approach

  return (
    <div>
      <h1>Inline Style in React JS</h1>
      <div
        style={{
          margin: "20px 0px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <div style={style.card}>
          <div style={style.imageContainer}>
            <img
              style={{
                width: "200px",
                borderRadius: "30px",
              }}
              src="https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?semt=ais_hybrid&w=740"
            />
          </div>
          <div style={style.informationSection}>
            <h2 style={{ marginBottom: "5px" }}>Peter Parker</h2>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={style.card}>
          <div style={style.imageContainer}>
            <img
              style={{
                width: "200px",
                borderRadius: "30px",
              }}
              src="https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?semt=ais_hybrid&w=740"
            />
          </div>
          <div style={style.informationSection}>
            <h2 style={{ marginBottom: "5px" }}>Peter Parker</h2>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={style.card}>
          <div style={style.imageContainer}>
            <img
              style={{
                width: "200px",
                borderRadius: "30px",
              }}
              src="https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?semt=ais_hybrid&w=740"
            />
          </div>
          <div style={style.informationSection}>
            <h2 style={{ marginBottom: "5px" }}>Peter Parker</h2>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={style.card}>
          <div style={style.imageContainer}>
            <img
              style={{
                width: "200px",
                borderRadius: "30px",
              }}
              src="https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?semt=ais_hybrid&w=740"
            />
          </div>
          <div style={style.informationSection}>
            <h2 style={{ marginBottom: "5px" }}>Peter Parker</h2>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={style.card}>
          <div style={style.imageContainer}>
            <img
              style={{
                width: "200px",
                borderRadius: "30px",
              }}
              src="https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?semt=ais_hybrid&w=740"
            />
          </div>
          <div style={style.informationSection}>
            <h2 style={{ marginBottom: "5px" }}>Peter Parker</h2>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={style.card}>
          <div style={style.imageContainer}>
            <img
              style={{
                width: "200px",
                borderRadius: "30px",
              }}
              src="https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?semt=ais_hybrid&w=740"
            />
          </div>
          <div style={style.informationSection}>
            <h2 style={{ marginBottom: "5px" }}>Peter Parker</h2>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={style.card}>
          <div style={style.imageContainer}>
            <img
              style={{
                width: "200px",
                borderRadius: "30px",
              }}
              src="https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?semt=ais_hybrid&w=740"
            />
          </div>
          <div style={style.informationSection}>
            <h2 style={{ marginBottom: "5px" }}>Peter Parker</h2>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={style.card}>
          <div style={style.imageContainer}>
            <img
              style={{
                width: "200px",
                borderRadius: "30px",
              }}
              src="https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?semt=ais_hybrid&w=740"
            />
          </div>
          <div style={style.informationSection}>
            <h2 style={{ marginBottom: "5px" }}>Peter Parker</h2>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={style.card}>
          <div style={style.imageContainer}>
            <img
              style={{
                width: "200px",
                borderRadius: "30px",
              }}
              src="https://img.freepik.com/premium-vector/business-man-avatar-vector_1133257-2430.jpg?semt=ais_hybrid&w=740"
            />
          </div>
          <div style={style.informationSection}>
            <h2 style={{ marginBottom: "5px" }}>Peter Parker</h2>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InlineStyle;
