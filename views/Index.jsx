import React from 'react';

function Index({ logs }) {
  return (
    <div>
        <ul>
            {logs.map(log => (
                <li key={log.id}>{log.title}</li>
            ))}
            
        </ul>

        <a href="/logs/new">Crete a log</a>
    </div>
  )
}

module.exports = Index;