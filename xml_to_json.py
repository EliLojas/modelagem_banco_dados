import xml.etree.ElementTree as ET
import json
import os
import xmltodict

def convert_xml_to_json(file_path):
    tree = ET.parse(file_path)
    root = tree.getroot()

    domains = []
    for domain in root.findall('.//domain'):
        domains.append(domain.attrib)

    with open('output.json', 'w') as json_file:
        json.dump(domains, json_file)

def dbm_to_json(file_path):

    with open('./oni9_modelagem.dbm', 'r') as xml_file:
        data_dict = xmltodict.parse(xml_file.read())

    # Passa por todas as tags que queremos
    for tag in ['domain', 'function', 'sequence']:

        # Vai converter o dicionário para json
        elementos_json = json.dumps(data_dict['dbmodel'][tag], ensure_ascii=False)

        # Salva os dados no arquivo json
        with open('./doc-modelagem_banco_dados/static/objetos_json/dados_' + tag + '.json', 'w') as json_file:
            json_file.write(elementos_json)


    # Convert the dictionary to JSON
    # json_data = json.dumps(data_dict, ensure_ascii=False)

    # Save the JSON data to a file
    # with open('./data.json', 'w') as json_file:
    #     json_file.write(json_data)


if __name__ == "__main__":
    dbm_to_json('./oni9_modelagem.dbm')
