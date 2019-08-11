
let getPosts = function() {

	return fetch('/posts')
		.then((resp) => {

			let json = resp.json()
			return json
		})
}

export {
	getPosts
}
let getPost = function(id) {

	return fetch(`/posts/${id}`)
		.then((resp) => {

			let json = resp.json()
			return json
		})
}

export {
	getPost
}


let createPost = function(post,tagid) {
	return fetch(`/taggedpost/${tagid}`, {
		body: JSON.stringify(post,tagid),
		headers: {
			'Content-Type': 'application/json'
		},
		method: "POST"
	})
		.then((resp) => {
			let json = resp.json()
			return json
		})
}

export  {
	createPost
}
