import React, { useState } from "react";
import ReactDOM from "react-dom";

const SiteList = () => {
  // Declare a state variable called "sites" and a setter function called "setSites"
  const [sites, setSites] = useState([]);

  // Add a function that adds a new site to the list
  const addSite = (site) => {
    setSites([...sites, site]);
  };

  // Add a function that removes a site from the list
  const removeSite = (site) => {
    setSites(sites.filter((s) => s !== site));
  };

  // Render the component
  return (
    <div>
      <h1>Blocked Sites</h1>
      <ul>
        {sites.map((site) => (
          <li key={site}>
            {site}
            <button onClick={() => removeSite(site)}>Remove</button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addSite(event.target.site.value);
          event.target.site.value = "";
        }}
      >
        <input name="site" type="text" />
        <button type="submit">Add Site</button>
      </form>
    </div>
  );
};

const App = () => {
  return <SiteList />;
};

ReactDOM.render(<App />, document.getElementById("root"));
