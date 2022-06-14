"use strict";

import { data } from './task.js';

const tb = document.querySelector(".user-data");

const display = function (arr) {
	arr.forEach((user, i) => {
		const html = `<tr id=${user.id}> 
        <td>${user.firstName}</td> 
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.point}</td>
        <td>${user.phone}</td>
        <td>${user.company}</td>
        <td> <button class='view-data' data-id='${i}'>View</button> <button class='edit-data' data-id='${i}'>Edit</button> <button class='delete-data' data-id='${i}'>Delete</button>
        </tr>
        `;
		tb.insertAdjacentHTML("beforeend", html);
	});
};

display(data);

const viewBtns = document.querySelectorAll(".view-data");
const viewBtnsArr = [...viewBtns];
viewBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		let userEmail =
			e.target.parentElement.parentElement.children[2].innerText;
		console.log(userEmail);
		location.href = `../pages/viewUser.html?user=${userEmail}`;
	});
});


const editBtns = document.querySelectorAll('.edit-data');
editBtns.forEach(btn => {
	btn.addEventListener('click', e =>
	{
		e.preventDefault();
		let userEmail = e.target.parentElement.parentElement.children[2].innerText;
		location.href = `../pages/editUser.html?user=${userEmail}`;
	})
});