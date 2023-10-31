import React, { useState } from "react";
import Function from "./FunctionInterface";

interface FunctionTableProps {
  functions: Function[];
}

export default function FunctionTable({ functions }: FunctionTableProps) {
  const [search, setSearch] = useState("");

  const filteredFunctions = functions.filter((functionDb) =>
    Object.values(functionDb).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="container">
      <div className="padding--sm">
        <input
          className="navbar__search-input"
          type="text"
          placeholder="Pesquisar domínio"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="row">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Schema</th>
              <th>Tipo de Retorno</th>
              <th style={{ width: "20px" }}>Linguagem</th>
              <th>Comentário</th>
            </tr>
          </thead>
          <tbody>
            {filteredFunctions.map((functionDb, index) => (
              <tr key={index}>
                <td>{functionDb["@name"]}</td>
                <td>{functionDb["schema"]["@name"]}</td>
                <td>{functionDb["return-type"]["type"]["@name"]}</td>
                <td>{functionDb["language"]["@name"]}</td>
                <td>{functionDb["comment"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
