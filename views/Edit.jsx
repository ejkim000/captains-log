import React from "react";

function Edit({ log }) {
  return (
    <div>
      <form method="post" action={`/logs/${log.id}?_method=PUT`}>
        Title: <input type="text" name="title" defaultValue={log.title} />
        <br />
        Entry:
        <textarea
          type="text"
          name="entry"
          defaultValue={log.entry}></textarea>
        <br />
        Ship Is Broken:
        {log.shipIsBroken ? (
          <input type="checkbox" name="shipIsBroken" defaultChecked />
        ) : (
          <input type="checkbox" name="shipIsBroken" />
        )}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

module.exports = Edit;
