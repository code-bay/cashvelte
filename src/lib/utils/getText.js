export function getText(node) {
  node.addEventListener('change', () => {
    const [file] = node.querySelector('input[type=file]').files;
    const reader = new FileReader();
  
    reader.onload = () => {
      fetch('/api/ofx', {
        method: 'POST',
        body: reader.result,
        headers: {
          'Content-type': 'text/plain; charset=UTF-8'
        }
      }).then(async (response) => console.log(await response.json()));
    };
  
    file ? reader.readAsText(file) : false;
  })
}