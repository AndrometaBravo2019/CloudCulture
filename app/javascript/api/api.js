//////// users fetches/////////////


let getUsers = function() {
	return fetch('/allusers.json')
		.then((resp) => {
			let json = resp.json()
			return json
		})
}

export  {
	getUsers
}

let oneUser = function(id) {
	return fetch(`/users/${id}.json`)
		.then((resp) => {
			let json = resp.json()
			return json
		})
}

export  {
	oneUser
}

let myFriends = function() {
	return fetch(`/friends.json`)
		.then((resp) => {
			let json = resp.json()
			return json
		})
}

export  {
	myFriends
}

let myFriendsIds = function() {
	return fetch(`/friendid.json`)
		.then((resp) => {
			let json = resp.json()
			return json
		})
}

export  {
	myFriendsIds
}




///////USERSTATUS FETCHES///////////////

let makeFriends = function(info) {
	return fetch('/userstatus', {
		body: JSON.stringify(info),
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
	makeFriends
}

let pendingFriends = function(){
	return fetch('/pendingid')
	.then((resp) => {
		let json = resp.json()
		return json
	})
}
export {
	pendingFriends
}

let sentpendingFriends = function(){
	return fetch('/sentpendingid')
	.then((resp) => {
		let json = resp.json()
		return json
	})
}
export {
	sentpendingFriends
}


let goodbyeToYou = function(id){
	return fetch(`/destroyfriendship`,{
		body: JSON.stringify(id),
		headers: {
			'Content-Type': 'application/json'
		},
		method: "DELETE"
	})
	.then((resp) => {
		let json = resp.json()
		return json
	})
}
export {
	goodbyeToYou
}










//////////tagnames////////////

let allTagNames = function() {
	return fetch('/tagnames.json')
		.then((resp) => {
			let json = resp.json()
			return json
		})
}

export  {
	allTagNames
}

let createTagName = function(tagname){
	return fetch(`/newtagname`, {
		body: JSON.stringify(tagname),
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
export {
	createTagName
}




///comments

let createComment = function(post_id, postString){
	return fetch(`/newcomment/${post_id}/${postString}`, {
		body: JSON.stringify(post_id, postString),
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
export {
	createComment
}

let createReply = function(comment_id, postString){
	return fetch(`/newreply/${comment_id}/${postString}`, {
		body: JSON.stringify(comment_id, postString),
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
export {
	createReply
}
