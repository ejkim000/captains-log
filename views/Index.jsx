import React from "react";
const Default = require("./layout/Default");

function Index({ logs }) {
  return (
    <Default title="Captain's Log">
      <ul className="logs">
        {logs.map((log) => (
          <li key={log.id}>
            <a href={`/logs/${log.id}`}>{log.title}</a> <br />
            <div className="actions">
              <a href={`/logs/${log.id}/edit`}>Edit</a>
              <form method="post" action={`/logs/${log.id}?_method=DELETE`}>
                <input type="submit" value="Delete" />
              </form>
            </div>
          </li>
        ))}
      </ul>
      <div className="link"><a href="/logs/new">Crete a log</a></div>
    </Default>
  );
}

module.exports = Index;
