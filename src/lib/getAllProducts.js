export default async function getProducts() {
  const res = await fetch('http://127.0.0.1:8000/api/products/', {
    method: 'GET',
  });
  const data = await res.json();
  return data
}
