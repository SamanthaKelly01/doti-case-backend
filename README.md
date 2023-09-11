# Doti Case Backend
This API serves as a time clock management system to the frontend server, 
including ending points with registration, login and profile editing. Users can sign up, 
securely log in, track logged hours, view timestamps, access product details and edit their profile.

## About
This backend project is aimed at providing users with a comprehensive solution for managing hours worked in association with their profiles. 
The primary goal of this backend system is to facilitate efficient time tracking and reporting for users, enabling them to monitor and manage their working hours effectively.

## Endpoints
<details>
<summary>Users Endpoints</summary>
<ul>
<li>Create user</li>
<details>
<summary>(POST "/usuarios")</summary>
  
```javascript
// body
{
  "nome": "name example",
  "email": "email.example@gmail.com",
  "senha": "Example123!@#",
  "endereco": "Street example, 123",
  "descricao": "Example Description",
}
  ```
</details>
<br/>
<li>Get all users</li>
<details>
<summary>(GET "/usuarios")</summary>
  
```javascript
// response
[
  {
    "id": "507f1f77bcf86cd799439011"
    "nome": "name example",
    "email": "email.example@gmail.com",
    "senha": "Example123!@#",
    "endereco": "Street example, 123",
    "descricao": "Example Description",
  },
  {
    "id": "507f1f77bcf86cd799439301"
    "nome": "name example 2",
    "email": "email.example2@gmail.com",
    "senha": "Example1234!@#$",
    "endereco": "Street example, 1234",
    "descricao": "Example Description 2",
  }
]
  ```
</details>
<br/>

<li>Update user</li>
<details>
<summary>(PUT "/usuarios/:id")</summary>
  
```javascript
// body
{
  "nome": "name example",
  "email": "email.example@gmail.com",
  "senha": "Example1234!@#$",
  "endereco": "Street example, 123",
  "descricao": "Example Description",
}
  ```
</details>
</ul>
</details>

<details>
<summary>Sessions Endpoints</summary>
<ul>
<li>Create session</li>
<details>
<summary>(POST "/sessoes")</summary>
  
```javascript
// body
{
  "id_usuario": "507f1f77bcf86cd799439301"
}
  ```
</details>
<br/>

<li>Get all sessions</li>
<details>
<summary>(GET "/sessoes")</summary>
  
```javascript
// response
[
  {
    "id_usuario": "507f1f77bcf86cd799439301"
  },
  {
  "id_usuario": "507f1f77bcf86cd799439011"
  }
]
  ```
</details>
<br/>

<li>Delete session</li>
<details>
<summary>(DELETE "/sessoes/:id_usuario")</summary>
  
```javascript
// response
  STATUS: 200,
  {
    message: "Usuário deletado com sucesso!"
  }
  ```
</details>
</ul>
</details>

<details>
<summary>Auth Endpoint</summary>
<ul>
  <li>Login/Sign-in</li>
<details>
<summary>(POST "/login")</summary>
  
```javascript
// body
{
  "email": "email.example@gmail.com",
  "senha": "Example1234!@#$",
}
  ```
</details>
</ul>
</details>

## Technologies
The following tools and frameworks were used in the construction of the project:
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white'/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white'/>
</p>
