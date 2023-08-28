import React from "react";
import Default from "./layout/Default";

function New() {
  return (
    <Default title="Create a Log">
      <div className="log-form">
        <form method="post" action="/logs">
          <div>
            <label>Title</label>
            <input type="text" name="title" />
          </div>
          <div>
            <label>Entry</label>
            <textarea type="text" name="entry"></textarea>
          </div>
          <div>
            <label>Ship Is Broken</label>
            <input type="checkbox" name="shipIsBroken" />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </Default>
  );
}

module.exports = New;
