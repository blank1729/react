

export type course = {
	id : number
	name : string
	createdby : number
	institute : string
	started : Date
	finished : Date
}

export type text = {
	id : string
	data : string
	userid : number
	date : string
} 

export type user = {
	id : string
	username : string
	lastlogin : string
	birthday : string
	experience : string
	title : string
}