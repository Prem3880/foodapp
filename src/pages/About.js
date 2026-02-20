const About = () => {
  return (
    <div className="container about-page">
      <h2>About Food Ordering App</h2>

      <p>
        Welcome to <strong>Food Ordering App</strong>!  
        This is a simple and responsive web application built using <strong>React.js</strong>.
      </p>

      <p>
        Users can browse different food items, filter by category (Veg, Non-Veg, Dessert, Drinks), search for food, sort by price, and add items to the cart.
      </p>

      <p>
        The cart updates dynamically, shows total price, and persists using <strong>localStorage</strong>.
      </p>

      <p>
        The app is fully responsive and designed to provide a smooth user experience on both desktop and mobile devices.
      </p>

      
      <h3 className="tech">Technologies Used:</h3>
      <ul>
        <li>React.js</li>
        <li>JavaScript (ES6+)</li>
        <li>CSS / Flexbox & Grid</li>
        <li>React Router</li>
        <li>LocalStorage</li>
      </ul>

      <p>
        This project was developed by <strong>prem</strong> as part of my React.js learning and fresher portfolio projects.
      </p>
    </div>
  );
};

export default About;
