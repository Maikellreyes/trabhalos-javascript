const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const table = document.getElementById("table");
const tbody = document.getElementById("tbody");
const btn = document.getElementById("btn");

const persons = [];

btn.addEventListener("click", () => {
  persons.push({
    name: name.value,
    lastName: lastName.value,
    age: age.value,
  });
  fetchPersons();
});

const fetchPersons = () => {
  tbody.innerHTML = "";
  const personsFilter = persons.sort((prev, next) => {
    if (prev.age > next.age) {
      return 1;
    }
    if (prev.age < next.age) {
      return -1;
    }

    return 0;
  });

  personsFilter.forEach((data) =>
    fillTable(data.name, data.lastName, data.age)
  );
  console.table(personsFilter);
};

const fillTable = (name, lastName, age) => {
  let row = table.insertRow(0);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  cell1.innerHTML = name;
  cell2.innerHTML = lastName;
  cell3.innerHTML = age;

  tbody.appendChild(row);
};
