"use strict";

const data = [
	{
		firstName: "Westley",
		lastName: "Effertz",
		email: "Marty.Green@hotmail.com",
		point: 57,
		phone: "639.990.1777 x06740",
		company: "Gaylord - Miller",
	},
	{
		firstName: "Jeramy",
		lastName: "Raynor",
		email: "Edward_Corwin82@hotmail.com",
		point: 67,
		phone: "659-370-3622 x197",
		company: "Ziemann, Satterfield and Walker",
	},
	{
		firstName: "Montana",
		lastName: "Konopelski",
		email: "Rosanna7@gmail.com",
		point: 55,
		phone: "(972) 459-3024 x5101",
		company: "Kuhic - Wyman",
	},
	{
		firstName: "Catharine",
		lastName: "Gutkowski",
		email: "Reese99@hotmail.com",
		point: 78,
		phone: "706.810.9406 x470",
		company: "Rath, Parker and Dicki",
	},
	{
		firstName: "Carmelo",
		lastName: "Daugherty",
		email: "Sigurd.Wolf91@gmail.com",
		point: 41,
		phone: "(880) 995-8257 x3278",
		company: "Hamill and Sons",
	},
	{
		firstName: "Eloisa",
		lastName: "Rutherford",
		email: "Leda61@hotmail.com",
		point: 25,
		phone: "(616) 366-7791",
		company: "Barton and Sons",
	},
	{
		firstName: "Pinkie",
		lastName: "Trantow",
		email: "Kevin.Graham@gmail.com",
		point: 99,
		phone: "544-246-1502 x470",
		company: "Champlin LLC",
	},
	{
		firstName: "Haylie",
		lastName: "Schinner",
		email: "Tristian7@yahoo.com",
		point: 77,
		phone: "712.789.3982 x6395",
		company: "Miller, Roob and Prosacco",
	},
	{
		firstName: "Delmer",
		lastName: "Erdman",
		email: "Melody_Bergstrom82@gmail.com",
		point: 43,
		phone: "1-261-753-3907 x8011",
		company: "Blick, Stark and Gerlach",
	},
	{
		firstName: "Tiana",
		lastName: "Mayert",
		email: "Abel60@gmail.com",
		point: 33,
		phone: "1-794-302-0373 x7307",
		company: "Hackett Group",
	},
	{
		firstName: "Verlie",
		lastName: "Howell",
		email: "Jo22@hotmail.com",
		point: 44,
		phone: "(369) 415-8767 x530",
		company: "Boyer Inc",
	},
	{
		firstName: "Brenda",
		lastName: "Jast",
		email: "Dorian67@yahoo.com",
		point: 67,
		phone: "(282) 569-2356 x84738",
		company: "Lehner, Hilpert and Cruickshank",
	},
	{
		firstName: "Solon",
		lastName: "Thiel",
		email: "Bettie.Hartmann15@gmail.com",
		point: 39,
		phone: "1-872-622-0819",
		company: "Schinner Group",
	},
	{
		firstName: "Coty",
		lastName: "Bauch",
		email: "Avis.Volkman@yahoo.com",
		point: 78,
		phone: "229-848-3646",
		company: "Bode, Simonis and Botsford",
	},
	{
		firstName: "Kade",
		lastName: "Wilderman",
		email: "Alva2@gmail.com",
		point: 72,
		phone: "947-410-7521",
		company: "Wyman - Bradtke",
	},
	{
		firstName: "Cayla",
		lastName: "Anderson",
		email: "Bria.Spinka81@yahoo.com",
		point: 37,
		phone: "(333) 491-0240 x3522",
		company: "Gutkowski - Bernier",
	},
	{
		firstName: "Robin",
		lastName: "Tromp",
		email: "Taryn.Veum18@hotmail.com",
		point: 95,
		phone: "1-693-667-6199 x0433",
		company: "Champlin - Hegmann",
	},
	{
		firstName: "Filiberto",
		lastName: "Connelly",
		email: "Minnie.Schultz67@gmail.com",
		point: 52,
		phone: "1-477-550-9183",
		company: "Gibson - Harber",
	},
	{
		firstName: "Dario",
		lastName: "Lowe",
		email: "Naomi_Osinski@yahoo.com",
		point: 31,
		phone: "568.862.4284 x93447",
		company: "Rodriguez and Sons",
	},
	{
		firstName: "Cindy",
		lastName: "Bosco",
		email: "Alexanne_Crist31@yahoo.com",
		point: 25,
		phone: "(874) 612-9713 x67394",
		company: "Bogisich LLC",
	},
	{
		firstName: "Jayson",
		lastName: "Predovic",
		email: "Gabriel.Zemlak@hotmail.com",
		point: 77,
		phone: "(796) 844-9279 x9940",
		company: "Cummings LLC",
	},
	{
		firstName: "Fay",
		lastName: "Torphy",
		email: "Delphia_Johns51@hotmail.com",
		point: 65,
		phone: "1-333-309-1188",
		company: "Corwin, Lueilwitz and Lindgren",
	},
	{
		firstName: "Eulah",
		lastName: "Rodriguez",
		email: "Esta_Blick@yahoo.com",
		point: 94,
		phone: "1-276-302-5154 x71536",
		company: "Ebert - Ritchie",
	},
	{
		firstName: "Eden",
		lastName: "Prosacco",
		email: "Junius93@yahoo.com",
		point: 18,
		phone: "814-578-5290",
		company: "Luettgen LLC",
	},
	{
		firstName: "Dasia",
		lastName: "Mante",
		email: "Nayeli_Klein52@gmail.com",
		point: 14,
		phone: "(697) 923-0255",
		company: "Romaguera LLC",
	},
	{
		firstName: "Jacey",
		lastName: "Kuhn",
		email: "Georgette_Rolfson@yahoo.com",
		point: 20,
		phone: "(724) 238-7811",
		company: "Tromp, Mertz and Koelpin",
	},
	{
		firstName: "Fleta",
		lastName: "Fisher",
		email: "Kaia_Feest47@yahoo.com",
		point: 35,
		phone: "(609) 481-3796 x204",
		company: "Christiansen, Harber and Kshlerin",
	},
	{
		firstName: "Maritza",
		lastName: "Torphy",
		email: "Elta.Berge41@yahoo.com",
		point: 76,
		phone: "(472) 409-5822 x687",
		company: "Littel - Harvey",
	},
	{
		firstName: "Helene",
		lastName: "Prosacco",
		email: "Anita.Veum17@hotmail.com",
		point: 63,
		phone: "900.657.0400 x95539",
		company: "Harris and Sons",
	},
	{
		firstName: "Jeffery",
		lastName: "Quitzon",
		email: "Morton_Erdman@hotmail.com",
		point: 44,
		phone: "1-712-814-3777 x18035",
		company: "Ratke - DuBuque",
	},
	{
		firstName: "Tessie",
		lastName: "Mraz",
		email: "Toney58@yahoo.com",
		point: 77,
		phone: "802.210.3167 x038",
		company: "Lind - Hackett",
	},
	{
		firstName: "Carol",
		lastName: "Zboncak",
		email: "Oswaldo.Gerhold92@gmail.com",
		point: 72,
		phone: "(505) 210-5471 x591",
		company: "Adams - Kub",
	},
	{
		firstName: "Robyn",
		lastName: "Auer",
		email: "Kieran39@yahoo.com",
		point: 19,
		phone: "(430) 997-4256 x063",
		company: "Keeling - Leffler",
	},
	{
		firstName: "Enrico",
		lastName: "Hoppe",
		email: "Elisa_Jacobson51@hotmail.com",
		point: 98,
		phone: "(339) 301-8497 x0062",
		company: "Gottlieb, Kessler and Bogisich",
	},
	{
		firstName: "Kraig",
		lastName: "Johnston",
		email: "Carolanne19@yahoo.com",
		point: 86,
		phone: "941-605-5544 x243",
		company: "Lehner and Sons",
	},
	{
		firstName: "Lemuel",
		lastName: "Mosciski",
		email: "Reymundo_Pacocha@hotmail.com",
		point: 24,
		phone: "1-934-532-8339",
		company: "Effertz Group",
	},
	{
		firstName: "Ken",
		lastName: "Stoltenberg",
		email: "Peggie_Cassin@hotmail.com",
		point: 50,
		phone: "282-328-1809",
		company: "Koepp LLC",
	},
	{
		firstName: "Melba",
		lastName: "Bernier",
		email: "Minerva_Kassulke23@yahoo.com",
		point: 62,
		phone: "(470) 237-1048",
		company: "Gulgowski, Von and Jacobi",
	},
	{
		firstName: "Effie",
		lastName: "Bauch",
		email: "Lexus_Blanda@hotmail.com",
		point: 89,
		phone: "(666) 942-9790 x6004",
		company: "Kuhic Inc",
	},
	{
		firstName: "Tate",
		lastName: "Murphy",
		email: "Clifford_Conroy@hotmail.com",
		point: 78,
		phone: "764-693-3279 x54041",
		company: "Witting, Swaniawski and Boehm",
	},
	{
		firstName: "Dorian",
		lastName: "Spencer",
		email: "Anahi_Veum53@gmail.com",
		point: 41,
		phone: "1-697-878-5662 x0133",
		company: "Goodwin - Goyette",
	},
	{
		firstName: "Joanny",
		lastName: "Orn",
		email: "Francisca_Romaguera90@hotmail.com",
		point: 60,
		phone: "(383) 287-5692 x1460",
		company: "Jacobs - Hermiston",
	},
	{
		firstName: "Gregg",
		lastName: "Collins",
		email: "Ken.Hermann@hotmail.com",
		point: 67,
		phone: "601.443.5725",
		company: "Tremblay - Jones",
	},
	{
		firstName: "Lilla",
		lastName: "Stoltenberg",
		email: "Adelle_Kautzer@hotmail.com",
		point: 25,
		phone: "1-440-922-5054 x76299",
		company: "Veum and Sons",
	},
	{
		firstName: "Brock",
		lastName: "Jacobson",
		email: "Katelin38@hotmail.com",
		point: 77,
		phone: "1-689-541-4085 x386",
		company: "Corkery, Spencer and Bergnaum",
	},
	{
		firstName: "Skylar",
		lastName: "Russel",
		email: "Keegan_Turner87@gmail.com",
		point: 18,
		phone: "441.847.1626",
		company: "Carroll - Dibbert",
	},
	{
		firstName: "Betty",
		lastName: "Abbott",
		email: "Leon73@yahoo.com",
		point: 41,
		phone: "966-726-7792 x5245",
		company: "Muller, Heller and Reinger",
	},
	{
		firstName: "Trinity",
		lastName: "Mraz",
		email: "Howell.Altenwerth47@hotmail.com",
		point: 11,
		phone: "1-921-519-7556 x3357",
		company: "Heidenreich, Kulas and Mante",
	},
	{
		firstName: "Everardo",
		lastName: "Cremin",
		email: "Easton_Wilkinson@hotmail.com",
		point: 46,
		phone: "(511) 355-5982 x559",
		company: "Heidenreich, Beer and Ward",
	},
	{
		firstName: "Desmond",
		lastName: "Wolff",
		email: "Ophelia.Mills64@yahoo.com",
		point: 42,
		phone: "956-985-0182",
		company: "Bruen Group",
	},
];

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