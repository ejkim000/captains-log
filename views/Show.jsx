import React from "react";

function Show({ log }) {
  return (
    <div>
      <h1>{log.title}</h1>
      <p>{log.entry}</p>
      <p>
        {log.shipIsBroken ? (
          <span>Ship Is Broken</span>
        ) : (
          <span>Ship Is Not Broken</span>
        )}
      </p>
      <p>Created At: {new Date(log.createdAt).toString()}</p>
      {log.updatedAt > log.createdAt && (
        <p>Updated At: {new Date(log.updatedAt).toString()}</p>
      )}
      <p>
        <a href="/logs">Go Back to Logs</a>
      </p>
    </div>
  );
}

module.exports = Show;