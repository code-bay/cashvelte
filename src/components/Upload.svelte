<script>
	function getText() {
		const [file] = document.getElementById('ofx-upload').files;

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
	}
</script>

<label for="ofx-upload">
	<div>Upload your OFX file</div>
	<input
		type="file"
		class=""
		id="ofx-upload"
		name="ofx-upload"
		accept=".ofx"
		on:change={() => getText()}
	/>
</label>
