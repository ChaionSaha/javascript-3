"use strict";
import { data } from "./task.js";

const queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let index = 0;
let user = data.find((item, i) => {
	index = i;
	return item.email === urlParams.get("user");
});

console.log(user, index);

let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let email = document.querySelector("#email");
let point = document.querySelector("#point");
let phone = document.querySelector("#phone");
let company = document.querySelector("#company");
let name = document.querySelector(".name");
let submit = document.querySelector(".submit");

name.innerText = `${user.firstName} ${user.lastName}`;
firstName.value = `${user.firstName}`;
lastName.value = `${user.lastName}`;
email.value = `${user.email}`;
point.value = `${user.point}`;
phone.value = `${user.phone}`;
company.value = `${user.company}`;

submit.addEventListener("click", (e) => {
	e.preventDefault();
	data[index].firstName = firstName.value;
	data[index].lastName = lastName.value;
	data[index].email = email.value;
	data[index].point = point.value;
	data[index].phone = phone.value;
	data[index].company = company.value;
	console.log(user);
	console.log(data);
	location.href = `../index.html`;
});
