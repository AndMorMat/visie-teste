
## People API
Esta API foi desenvolvida utilizando PHP, MySQL e Symfony para fornecer funcionalidades de gerenciamento de pessoas. Abaixo, você encontrará informações sobre como utilizar os endpoints disponíveis.
### Endpoints

### Listagem de pessoas
Descrição: Retorna uma lista de registros.
Método: GET
URL: /people/list

### Adicionar Pessoa
Descrição: Adiciona um uma pessoa
Método: POST
URL: /people/add
Payload: 
```
{
	"admissionDate": string,
	"birthDate": string,
	"cpf": string,
	"name": string,
	"rg": string,
	"role": string
}
```

###  Atualizar pessoa
Descrição: Edita um registro
Método: PUT
URL: /people/list
Payload: 
```
{
	"admissionDate": string,
	"birthDate": string,
	"cpf": string,
	"name": string,
	"peopleId": number,
	"rg": string,
	"role": string
}
```
 
### Atualizar pessoa

Descrição: Exclui uma pessoa
Método: DELETE
URL: /people/delete/{peopleId}
 

### Tecnologias Utilizadas

- PHP
- MySQL
- Symfony 
 
Andre Matos  
andre_matos13@hotmail.com
