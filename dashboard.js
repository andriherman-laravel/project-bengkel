const leads = JSON.parse(localStorage.getItem("leads")) || [];

const table = document.getElementById("data");

leads.forEach(item=>{
  table.innerHTML += `
    <tr>
      <td>${item.nama}</td>
      <td>${item.hp}</td>
      <td>${item.layanan}</td>
      <td>${item.pesan}</td>
      <td>${item.tanggal}</td>
    </tr>
  `;
});