import React, { useState } from "react";
import Domain from "./DomainInterface";

interface DomainTableProps {
  domains: Domain[];
}

export default function DomainTable({ domains }: DomainTableProps) {
  const [search, setSearch] = useState("");

  const filteredDomains = domains.filter((domain) =>
    Object.values(domain).some((value) =>
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
              <th>Tipo de Dados</th>
              <th style={{ width: "20px" }}>Tamanho</th>
              <th>Obrigatório</th>
              <th>Valor Padrão</th>
              <th>Comentário</th>
            </tr>
          </thead>
          <tbody>
            {filteredDomains.map((domain, index) => (
              <tr key={index}>
                <td>{domain["@name"]}</td>
                <td>{domain["schema"]["@name"]}</td>
                <td>{domain["type"]["@name"]}</td>
                <td>{domain["type"]["@length"]}</td>
                <td>{domain["@not-null"] ? "Sim" : "Não"}</td>
                <td>{domain["@default-value"]}</td>
                <td>{domain["comment"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
