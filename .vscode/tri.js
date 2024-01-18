const getId = (id) => document.getElementById(id);
const baseUrl = 'https://632f046fb56bd6ac45a91659.mockapi.io/food';

(renderMenu = async () => {
  try {
    const res = await axios.get(baseUrl);
    const data = res.data;
    let content = '';
    for (let i = 0; i < data.length; i++) {
      const { id, name, img, price, quantity } = data[i];
      content += `
    <tr>
    <td>${id}</td> 
    <td>${name}</td>
    <td>
    <img src=${img} class=""imgCustom" alt="#" />
    </td>
    <td>${price}</td> 
    <td>${quantity}</td>
    <td>
    <button onclick="updateBtn(${id})" class="btn btn-outline-success" data-bs-toggle="modal"
    data-bs-target="#modalUpdate"
    >Update</button>
    <button onclick="deleteBtn(${id})" class="btn btn-outline-danger">Delete</button>
    </td>
    </tr>
    `;
    }
    getId('body').innerHTML = content;
  } catch (error) {
    console.log(error);
  }
})();

getId('addNew').addEventListener('click', async () => {
  try {
    const modalAdd = document.querySelectorAll('#modalAdd>div>input');
    const newData = {
      name: modalAdd[0].value,
      img: modalAdd[1].value,
      price: modalAdd[2].value,
      quantity: modalAdd[3].value,
    };
    await axios.post(baseUrl, newData);
    renderMenu();
  } catch (error) {
    console.log(error);
  }
});
